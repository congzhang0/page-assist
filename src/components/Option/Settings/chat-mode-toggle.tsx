import { useMessage } from "~/hooks/useMessage"
import { useTranslation } from "react-i18next"
import { Checkbox } from "antd"

export const ChatModeToggle = () => {
  const { t } = useTranslation(["playground", "common"])
  const { chatMode, setChatMode } = useMessage()

  return (
    <div className="flex items-center">
      <Checkbox
        checked={chatMode === "rag"}
        onChange={(e) => {
          setChatMode(e.target.checked ? "rag" : "normal")
        }}
      >
        <span className="text-sm text-gray-700 dark:text-gray-300">
          {t("common:chatWithCurrentPage")}
        </span>
      </Checkbox>
    </div>
  )
} 