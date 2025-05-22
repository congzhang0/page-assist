import { useMessage } from "~/hooks/useMessage"
import { useTranslation } from "react-i18next"
import { Select } from "antd"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchChatModels } from "~/services/ollama"
import { useEffect } from "react"

export const ModelSelection = () => {
  const { t } = useTranslation(["playground", "common"])
  const { setSelectedModel, selectedModel } = useMessage()
  const queryClient = useQueryClient()

  const { data: models, status } = useQuery({
    queryKey: ["getAllModelsForSelect"],
    queryFn: async () => {
      const models = await fetchChatModels({ returnEmpty: false })
      return models
    }
  })

  // Initialize selected model from localStorage if available
  useEffect(() => {
    const savedModel = localStorage.getItem("selectedModel")
    if (savedModel && !selectedModel) {
      setSelectedModel(savedModel)
    }
  }, [])

  if (status === "pending") {
    return <div className="text-sm text-gray-500 dark:text-gray-400">{t("common:loading")}</div>
  }

  if (status === "error") {
    return <div className="text-sm text-red-500">{t("common:loadingError")}</div>
  }

  return (
    <Select
      onChange={(e) => {
        setSelectedModel(e)
        localStorage.setItem("selectedModel", e)
      }}
      value={selectedModel}
      size="middle"
      filterOption={(input, option) =>
        option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
        option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      showSearch
      placeholder={t("common:selectAModel")}
      style={{ width: "100%" }}
      options={models?.map((model) => ({
        label: model?.nickname || model.name,
        value: model.model
      }))}
    />
  )
} 