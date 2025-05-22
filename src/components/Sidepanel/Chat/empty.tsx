import logoImage from "~/assets/icon.png"
import { useMessage } from "~/hooks/useMessage"
import { useTranslation } from "react-i18next"

export const EmptySidePanel = () => {
  const { messages } = useMessage()
  const { t } = useTranslation(["playground", "common"])

  return (
    <div className="mx-auto sm:max-w-lg px-4 mt-10 text-center">
      <div className="rounded-lg justify-center items-center flex flex-col border border-gray-300 dark:border-gray-700 p-8 bg-white dark:bg-[#262626] shadow-sm">
        <img
          className="h-32 w-auto mb-4"
          src={logoImage}
          alt={t("common:pageAssist")}
        />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {t("common:pageAssist")}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t("common:welcomeMessage", "您的本地AI助手，随时待命为您解答网页相关问题")}
        </p>
        <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
          <p>✓ {t("common:feature1", "与任何网页进行聊天")}</p>
          <p>✓ {t("common:feature2", "使用本地AI模型保护隐私")}</p>
          <p>✓ {t("common:feature3", "支持多种AI提供商")}</p>
        </div>
        <div className="mt-6 text-gray-500 dark:text-gray-400 text-sm">
          {t("common:startTypingMessage", "开始输入您的问题...")}
        </div>
      </div>
    </div>
  )
}
