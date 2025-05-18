import { browser } from "wxt/browser"

export const setTitle = ({ title }: { title: string }) => {
  if (import.meta.env.BROWSER === "chrome" || import.meta.env.BROWSER === "edge") {
    chrome.action.setTitle({ title })
  } else {
    browser.browserAction.setTitle({ title })
  }
}

export const setBadgeBackgroundColor = ({ color }: { color: string }) => {
  if (import.meta.env.BROWSER === "chrome" || import.meta.env.BROWSER === "edge") {
    chrome.action.setBadgeBackgroundColor({ color })
  } else {
    browser.browserAction.setBadgeBackgroundColor({ color })
  }
}

export const setBadgeText = ({ text }: { text: string }) => {
  if (import.meta.env.BROWSER === "chrome" || import.meta.env.BROWSER === "edge") {
    chrome.action.setBadgeText({ text })
  } else {
    browser.browserAction.setBadgeText({ text })
  }
}

/**
 * 设置徽章文本大小
 * 注意：此功能仅在Chrome/Edge中支持
 * @param size 文本大小，默认为9
 */
export const setBadgeTextColor = ({ color }: { color: string }) => {
  if (import.meta.env.BROWSER === "chrome" || import.meta.env.BROWSER === "edge") {
    // @ts-ignore - Chrome API 不完全支持
    if (chrome.action.setBadgeTextColor) {
      chrome.action.setBadgeTextColor({ color })
    }
  }
}

/**
 * 设置图标
 * @param path 图标路径
 */
export const setIcon = ({ path }: { path: string }) => {
  if (import.meta.env.BROWSER === "chrome" || import.meta.env.BROWSER === "edge") {
    chrome.action.setIcon({ path })
  } else {
    browser.browserAction.setIcon({ path })
  }
}

// 已在文件顶部定义了 setTitle 函数，这里不需要重复定义
