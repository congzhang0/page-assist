import { defaultExtractContent } from "@/parser/default"
import { getPdf } from "./pdf"
import {
  isTweet,
  isTwitterTimeline,
  parseTweet,
  parseTwitterTimeline
} from "@/parser/twitter"
import { isGoogleDocs, parseGoogleDocs } from "@/parser/google-docs"
import { cleanUnwantedUnicode } from "@/utils/clean"

const _getHtml = () => {
  const url = window.location.href
  const title = document.title
  const favicon = document.querySelector('link[rel="icon"]')?.getAttribute('href') ||
                 document.querySelector('link[rel="shortcut icon"]')?.getAttribute('href') ||
                 `${window.location.origin}/favicon.ico`

  if (document.contentType === "application/pdf") {
    return { url, title, content: "", type: "pdf", favicon }
  }

  return {
    content: document.documentElement.outerHTML,
    url,
    title,
    type: "html",
    favicon
  }
}

export const getDataFromCurrentTab = async () => {
  const result = new Promise((resolve) => {
    if (import.meta.env.BROWSER === "chrome" || import.meta.env.BROWSER === "edge") {
      chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        const tab = tabs[0]

        const data = await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: _getHtml
        })

        if (data.length > 0) {
          resolve(data[0].result)
        }
      })
    } else {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(async (tabs) => {
          const tab = tabs[0]
          try {
            const data = await browser.scripting.executeScript({
              target: { tabId: tab.id },
              func: _getHtml
            })

            if (data.length > 0) {
              resolve(data[0].result)
            }
          } catch (e) {
            console.error("error", e)
            // this is a weird method but it works
            if (import.meta.env.BROWSER === "firefox") {
              // all I need is to get the pdf url but somehow
              // firefox won't allow extensions to run content scripts on pdf https://bugzilla.mozilla.org/show_bug.cgi?id=1454760
              // so I set up a weird method to fix this issue by asking tab to give the url
              // and then I can get the pdf url
              const result = {
                url: tab.url,
                title: tab.title || "PDF Document",
                content: "",
                type: "pdf",
                favicon: tab.favIconUrl
              }
              resolve(result)
            }
          }
        })
    }
  }) as Promise<{
    url: string
    title: string
    content: string
    type: string
    favicon?: string
  }>

  const { content, type, url, title, favicon } = await result

  if (type === "pdf") {
    const res = await fetch(url)
    const data = await res.arrayBuffer()
    let pdfHtml: {
      content: string
      page: number
    }[] = []
    const pdf = await getPdf(data)

    for (let i = 1; i <= pdf.numPages; i += 1) {
      const page = await pdf.getPage(i)
      const content = await page.getTextContent()

      if (content?.items.length === 0) {
        continue
      }

      const text = content?.items
        .map((item: any) => item.str)
        .join("\n")
        .replace(/\x00/g, "")
        .trim()
      pdfHtml.push({
        content: text,
        page: i
      })
    }

    return {
      url,
      title,
      content: "",
      pdf: pdfHtml,
      type: "pdf",
      favicon
    }
  }
  if (isTwitterTimeline(url)) {
    const data = parseTwitterTimeline(content)
    return {
      url,
      title,
      content: data,
      type: "html",
      pdf: [],
      favicon
    }
  } else if (isTweet(url)) {
    const data = parseTweet(content)
    return {
      url,
      title,
      content: data,
      type: "html",
      pdf: [],
      favicon
    }
  } else if (isGoogleDocs(url)) {
    const data = await parseGoogleDocs()
    if (data) {
      return {
        url,
        title,
        content: cleanUnwantedUnicode(data),
        type: "html",
        pdf: [],
        favicon
      }
    }
  }
  const data = defaultExtractContent(content)
  return { url, title, content: data, type, pdf: [], favicon }
}
