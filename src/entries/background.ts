import { getOllamaURL, isOllamaRunning } from "../services/ollama"
import { browser } from "wxt/browser"
import { clearBadge, streamDownload } from "@/utils/pull-ollama"
import { Storage } from "@plasmohq/storage"
import { getInitialConfig } from "@/services/action"
import { saveCurrentPage } from "@/services/saved-pages"
import { syncService } from "@/services/sync/sync-service"
import { initDebugCommands } from "@/utils/debug-commands"
import statusIndicator from "@/utils/status-indicator"
import storageViewer from "@/utils/storage-viewer"

export default defineBackground({
  main() {
    const storage = new Storage({
      area: "local"
    })
    let isCopilotRunning: boolean = false
    let actionIconClick: string = "webui"
    let contextMenuClick: string = "sidePanel"
    const contextMenuId = {
      webui: "open-web-ui-pa",
      sidePanel: "open-side-panel-pa"
    }

    // 初始化调试命令
    initDebugCommands()
    const initialize = async () => {
      try {
        // 先移除所有现有的上下文菜单项，避免重复ID错误
        try {
          browser.contextMenus.removeAll();
          console.log("已清除所有现有上下文菜单项");
        } catch (menuError) {
          console.error("清除上下文菜单时出错:", menuError);
        }

        storage.watch({
          actionIconClick: (value) => {
            const oldValue = value?.oldValue || "webui"
            const newValue = value?.newValue || "webui"
            if (oldValue !== newValue) {
              actionIconClick = newValue
            }
          },
          contextMenuClick: (value) => {
            const oldValue = value?.oldValue || "sidePanel"
            const newValue = value?.newValue || "sidePanel"
            if (oldValue !== newValue) {
              contextMenuClick = newValue
              try {
                browser.contextMenus.remove(contextMenuId[oldValue]);
                browser.contextMenus.create({
                  id: contextMenuId[newValue],
                  title: contextMenuTitle[newValue],
                  contexts: ["page", "selection"]
                });
              } catch (menuError) {
                console.error("更新上下文菜单时出错:", menuError);
              }
            }
          }
        })

        const data = await getInitialConfig()
        contextMenuClick = data.contextMenuClick
        actionIconClick = data.actionIconClick

        console.log("开始创建上下文菜单项");

        // 创建主菜单项
        try {
          browser.contextMenus.create({
            id: contextMenuId[contextMenuClick],
            title: contextMenuTitle[contextMenuClick],
            contexts: ["page", "selection"]
          });
          console.log(`已创建主菜单项: ${contextMenuId[contextMenuClick]}`);
        } catch (menuError) {
          console.error(`创建主菜单项时出错: ${contextMenuId[contextMenuClick]}`, menuError);
        }

        // 创建摘要菜单项
        try {
          browser.contextMenus.create({
            id: "summarize-pa",
            title: browser.i18n.getMessage("contextSummarize"),
            contexts: ["selection"]
          });
          console.log("已创建摘要菜单项");
        } catch (menuError) {
          console.error("创建摘要菜单项时出错:", menuError);
        }

        // 创建解释菜单项
        try {
          browser.contextMenus.create({
            id: "explain-pa",
            title: browser.i18n.getMessage("contextExplain"),
            contexts: ["selection"]
          });
          console.log("已创建解释菜单项");
        } catch (menuError) {
          console.error("创建解释菜单项时出错:", menuError);
        }

        // 创建改写菜单项
        try {
          browser.contextMenus.create({
            id: "rephrase-pa",
            title: browser.i18n.getMessage("contextRephrase"),
            contexts: ["selection"]
          });
          console.log("已创建改写菜单项");
        } catch (menuError) {
          console.error("创建改写菜单项时出错:", menuError);
        }

        // 创建翻译菜单项
        try {
          browser.contextMenus.create({
            id: "translate-pg",
            title: browser.i18n.getMessage("contextTranslate"),
            contexts: ["selection"]
          });
          console.log("已创建翻译菜单项");
        } catch (menuError) {
          console.error("创建翻译菜单项时出错:", menuError);
        }

        // 创建自定义菜单项
        try {
          browser.contextMenus.create({
            id: "custom-pg",
            title: browser.i18n.getMessage("contextCustom"),
            contexts: ["selection"]
          });
          console.log("已创建自定义菜单项");
        } catch (menuError) {
          console.error("创建自定义菜单项时出错:", menuError);
        }

        // 添加保存当前页面的菜单项
        try {
          browser.contextMenus.create({
            id: "save-page-pa",
            title: "保存当前页面",
            contexts: ["page"]
          });
          console.log("已创建保存页面菜单项");
        } catch (menuError) {
          console.error("创建保存页面菜单项时出错:", menuError);
        }

        // 添加查看已保存网页的菜单项
        try {
          browser.contextMenus.create({
            id: "view-saved-pages-pa",
            title: "查看已保存的网页",
            contexts: ["page"]
          });
          console.log("已创建查看已保存网页菜单项");
        } catch (menuError) {
          console.error("创建查看已保存网页菜单项时出错:", menuError);
        }

        console.log("所有上下文菜单项创建完成");

        // 初始化同步服务
        try {
          console.log("正在初始化数据同步服务...");

          // 尝试访问同步服务，这会触发其构造函数中的初始化过程
          const currentStatus = syncService.getStatus();
          console.log(`数据同步服务初始化完成，当前状态: ${currentStatus}`);
        } catch (syncError) {
          // 确保同步服务初始化失败不会影响扩展的其他功能
          console.error("初始化数据同步服务失败:", syncError);
        }

      } catch (error) {
        console.error("初始化过程中出错:", error)
      }
    }


    browser.runtime.onMessage.addListener(async (message) => {
      if (message.type === "sidepanel" || message.type === "open_sidebar_for_model_config") {
        await browser.sidebarAction.open()
      } else if (message.type === "pull_model") {
        const ollamaURL = await getOllamaURL()

        const isRunning = await isOllamaRunning()

        if (!isRunning) {
          setBadgeText({ text: "E" })
          setBadgeBackgroundColor({ color: "#FF0000" })
          setTitle({ title: "Ollama is not running" })
          setTimeout(() => {
            clearBadge()
          }, 5000)
        }

        await streamDownload(ollamaURL, message.modelName)
      }
    })

    browser.runtime.onConnect.addListener((port) => {
      if (port.name === "pgCopilot") {
        isCopilotRunning = true
        port.onDisconnect.addListener(() => {
          isCopilotRunning = false
        })
      }
    })

    chrome.action.onClicked.addListener((tab) => {
      if (actionIconClick === "webui") {
        chrome.tabs.create({ url: chrome.runtime.getURL("/options.html") })
      } else {
        chrome.sidePanel.open({
          tabId: tab.id!
        })
      }
    })

    const contextMenuTitle = {
      webui: browser.i18n.getMessage("openOptionToChat"),
      sidePanel: browser.i18n.getMessage("openSidePanelToChat")
    }

    // contextMenuId 已在文件顶部定义

    browser.contextMenus.onClicked.addListener(async (info, tab) => {
      if (info.menuItemId === "open-side-panel-pa") {
        chrome.sidePanel.open({
          tabId: tab.id!
        })
      } else if (info.menuItemId === "open-web-ui-pa") {
        browser.tabs.create({
          url: browser.runtime.getURL("/options.html")
        })
      } else if (info.menuItemId === "summarize-pa") {
        chrome.sidePanel.open({
          tabId: tab.id!
        })
        // this is a bad method hope somone can fix it :)
        setTimeout(
          async () => {
            await browser.runtime.sendMessage({
              from: "background",
              type: "summary",
              text: info.selectionText
            })
          },
          isCopilotRunning ? 0 : 5000
        )
      } else if (info.menuItemId === "rephrase-pa") {
        chrome.sidePanel.open({
          tabId: tab.id!
        })
        setTimeout(
          async () => {
            await browser.runtime.sendMessage({
              type: "rephrase",
              from: "background",
              text: info.selectionText
            })
          },
          isCopilotRunning ? 0 : 5000
        )
      } else if (info.menuItemId === "translate-pg") {
        chrome.sidePanel.open({
          tabId: tab.id!
        })

        setTimeout(
          async () => {
            await browser.runtime.sendMessage({
              type: "translate",
              from: "background",
              text: info.selectionText
            })
          },
          isCopilotRunning ? 0 : 5000
        )
      } else if (info.menuItemId === "explain-pa") {
        chrome.sidePanel.open({
          tabId: tab.id!
        })

        setTimeout(
          async () => {
            await browser.runtime.sendMessage({
              type: "explain",
              from: "background",
              text: info.selectionText
            })
          },
          isCopilotRunning ? 0 : 5000
        )
      } else if (info.menuItemId === "custom-pg") {
        chrome.sidePanel.open({
          tabId: tab.id!
        })

        setTimeout(
          async () => {
            await browser.runtime.sendMessage({
              type: "custom",
              from: "background",
              text: info.selectionText
            })
          },
          isCopilotRunning ? 0 : 5000
        )
      } else if (info.menuItemId === "save-page-pa") {
        console.log("右键菜单：开始保存当前页面", { tabId: tab?.id, url: tab?.url });
        try {
          // 使用状态指示器显示保存开始进度
          statusIndicator.showSaveProgress("准备中", "正在初始化保存过程...");
          
          console.log("调用 saveCurrentPage 函数");
          const savedPage = await saveCurrentPage();
          console.log("页面保存成功", savedPage);

          // 显示成功通知
          statusIndicator.showSaveSuccess(savedPage.title);

          // 记录存储状态
          await storageViewer.logStorageData('page_');

          console.log(`已成功保存页面：${savedPage.title}`);
        } catch (error) {
          console.error("保存页面失败", error);

          // 显示错误通知
          statusIndicator.showSaveError(error instanceof Error ? error.message : String(error));
        }
      } else if (info.menuItemId === "view-saved-pages-pa") {
        console.log("右键菜单：查看已保存的网页");
        // 打开选项页面并导航到已保存页面的标签
        // 使用查询参数而不是hash，确保路由正确加载
        browser.tabs.create({
          url: browser.runtime.getURL("/options.html?route=/settings/saved-pages")
        });
        // 发送消息通知选项页面需要导航到已保存页面
        setTimeout(() => {
          browser.runtime.sendMessage({
            type: "navigate_to_saved_pages",
            from: "background"
          });
        }, 500);
      }
    })

    browser.commands.onCommand.addListener((command) => {
      switch (command) {
        case "execute_side_panel":
          chrome.tabs.query(
            { active: true, currentWindow: true },
            async (tabs) => {
              const tab = tabs[0]
              chrome.sidePanel.open({
                tabId: tab.id!
              })
            }
          )
          break
        default:
          break
      }
    })

    initialize()
  },
  persistent: true
})
