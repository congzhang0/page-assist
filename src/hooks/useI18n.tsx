import { supportLanguage } from "@/i18n/support-language"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export const useI18n = () => {
  const { i18n } = useTranslation()
  const [locale, setLocale] = useState<string>(
    localStorage.getItem("i18nextLng") || "zh-CN"
  )

  const changeLocale = (lang: string) => {
    setLocale(lang)
    i18n.changeLanguage(lang)
    localStorage.setItem("i18nextLng", lang)
  }

  return { locale, changeLocale, supportLanguage }
}
