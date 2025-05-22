import { useMessage } from "~/hooks/useMessage"
import { useTranslation } from "react-i18next"
import { Checkbox } from "antd"
import { SaveButton } from "~/components/Common/SaveButton"
import { useEffect, useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"

type ChatModeType = "normal" | "rag" | "vision"

export const ChatModeToggle = () => {
  const { t } = useTranslation(["playground", "common"])
  const { chatMode, setChatMode } = useMessage()
  // Use defaultChatWithWebsite as the storage key for consistency with useMessage hook
  const [defaultChatWithWebsite, setDefaultChatWithWebsite] = useStorage("defaultChatWithWebsite", true)
  const [localChatMode, setLocalChatMode] = useState<"normal" | "rag">(
    defaultChatWithWebsite ? "rag" : "normal"
  )

  // Initialize with default rag mode if not already set
  useEffect(() => {
    // Update UI state based on actual chat mode or default
    setLocalChatMode(chatMode === "rag" ? "rag" : "normal")
    
    // Set chat mode if needed
    if (defaultChatWithWebsite && chatMode !== "rag") {
      setChatMode("rag" as ChatModeType)
    }
  }, [chatMode, setChatMode, defaultChatWithWebsite])

  const handleSave = () => {
    // Save the current selection as default
    setDefaultChatWithWebsite(localChatMode === "rag")
    
    // Also update current mode
    setChatMode(localChatMode as ChatModeType)
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Checkbox
          checked={localChatMode === "rag"}
          onChange={(e) => {
            setLocalChatMode(e.target.checked ? "rag" : "normal")
          }}
        >
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {t("common:chatWithCurrentPage")}
          </span>
        </Checkbox>
      </div>
      <SaveButton 
        onClick={handleSave}
        className="ml-auto"
      />
    </div>
  )
} 