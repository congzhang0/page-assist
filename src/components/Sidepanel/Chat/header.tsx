import logoImage from "~/assets/icon.png"
import { useMessage } from "~/hooks/useMessage"
import { Link } from "react-router-dom"
import { Tooltip, Drawer } from "antd"
import {
  BoxesIcon,
  BrainCog,
  CogIcon,
  EraserIcon,
  // EraserIcon,
  HistoryIcon,
  PlusSquare,
  XIcon,
  Loader2,
  RotateCcw
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { CurrentChatModelSettings } from "@/components/Common/Settings/CurrentChatModelSettings"
import React from "react"
import { useStorage } from "@plasmohq/storage/hook"
import { PromptSelect } from "@/components/Common/PromptSelect"
import { Sidebar } from "@/components/Option/Sidebar"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { isOllamaRunning } from "~/services/ollama"
export const SidepanelHeader = () => {
  const [hideCurrentChatModelSettings] = useStorage(
    "hideCurrentChatModelSettings",
    false
  )
  const [checkOllamaStatus] = useStorage("checkOllamaStatus", true)
  const queryClient = useQueryClient()

  // 查询Ollama状态
  const {
    data: ollamaInfo,
    status: ollamaStatus,
    refetch,
    isRefetching
  } = useQuery({
    queryKey: ["ollamaStatusHeader", checkOllamaStatus],
    queryFn: async () => {
      const isOk = await isOllamaRunning()
      return {
        isOk: checkOllamaStatus ? isOk : true
      }
    },
    enabled: checkOllamaStatus,
    refetchInterval: 30000 // 每30秒刷新一次
  })

  const {
    clearChat,
    isEmbedding,
    messages,
    streaming,
    selectedSystemPrompt,
    setSelectedSystemPrompt,
    setSelectedQuickPrompt,
    setMessages,
    setHistory,
    setHistoryId,
    setSelectedModel,
    historyId,
    history
  } = useMessage()
  const { t } = useTranslation(["sidepanel", "common", "option", "playground"])
  const [openModelSettings, setOpenModelSettings] = React.useState(false)
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className=" px-3 justify-between bg-white dark:bg-[#171717] border-b border-gray-300 dark:border-gray-700 py-4 items-center absolute top-0 z-10 flex h-14 w-full">
      <div className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 flex items-center dark:text-white">
        <img
          className="h-6 w-auto"
          src={logoImage}
          alt={t("common:Page Mind")}
        />
        <span className="ml-1 text-sm ">{t("common:Page Mind")}</span>
        
        {/* Ollama状态显示 */}
        {checkOllamaStatus && (
          <div className="ml-2 inline-flex items-center">
            {(ollamaStatus === "pending" || isRefetching) && (
              <Tooltip title={t("playground:ollamaState.searching")}>
                <div className="inline-flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                </div>
              </Tooltip>
            )}
            {!isRefetching && ollamaStatus === "success" && (
              ollamaInfo?.isOk ? (
                <Tooltip title={t("playground:ollamaState.running")}>
                  <div className="inline-flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </Tooltip>
              ) : (
                <Tooltip title={t("playground:ollamaState.notRunning")}>
                  <div className="inline-flex items-center space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </Tooltip>
              )
            )}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-3">
        {isEmbedding ? (
          <Tooltip title={t("tooltip.embed")}>
            <BoxesIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 animate-bounce animate-infinite" />
          </Tooltip>
        ) : null}
        {messages.length > 0 && !streaming && (
          <button
            title={t("option:newChat")}
            onClick={() => {
              clearChat()
            }}
            className="flex items-center space-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700">
            <PlusSquare className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        )}
        {history.length > 0 && (
          <button
            title={t("tooltip.clearContext")}
            onClick={() => {
              setHistory([])
            }}
            className="flex items-center space-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700">
            <EraserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        )}
        <Tooltip title={t("tooltip.history")}>
          <button
            onClick={() => {
              setSidebarOpen(true)
            }}
            className="flex items-center space-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700">
            <HistoryIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        </Tooltip>
        <PromptSelect
          selectedSystemPrompt={selectedSystemPrompt}
          setSelectedSystemPrompt={setSelectedSystemPrompt}
          setSelectedQuickPrompt={setSelectedQuickPrompt}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        />
        {!hideCurrentChatModelSettings && (
          <Tooltip title={t("common:currentChatModelSettings")}>
            <button
              onClick={() => setOpenModelSettings(true)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <BrainCog className="w-5 h-5" />
            </button>
          </Tooltip>
        )}
        <Link to="/settings">
          <CogIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </Link>
      </div>
      <CurrentChatModelSettings
        open={openModelSettings}
        setOpen={setOpenModelSettings}
      />

      <Drawer
        title={
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              {t("tooltip.history")}
            </div>

            <button onClick={() => setSidebarOpen(false)}>
              <XIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        }
        placement="left"
        closeIcon={null}
        onClose={() => setSidebarOpen(false)}
        open={sidebarOpen}>
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          setMessages={setMessages}
          setHistory={setHistory}
          setHistoryId={setHistoryId}
          setSelectedModel={setSelectedModel}
          setSelectedSystemPrompt={setSelectedSystemPrompt}
          clearChat={clearChat}
          historyId={historyId}
          setSystemPrompt={(e) => {}}
          temporaryChat={false}
          history={history}
        />
      </Drawer>
    </div>
  )
}
