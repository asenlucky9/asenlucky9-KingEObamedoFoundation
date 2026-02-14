import { createContext, useContext, useEffect, useState } from 'react'
import en from '../locales/en'
import fr from '../locales/fr'

const translations = { en, fr }
const STORAGE_KEY = 'king-obamedo-lang'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return localStorage.getItem(STORAGE_KEY) || 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en'
  }, [lang])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[lang] || translations.en
    for (const k of keys) {
      value = value?.[k]
    }
    return value ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
