import { Globe } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const LanguageSwitcher = ({ className = '' }) => {
  const { lang, setLang } = useLanguage()

  return (
    <div className={`flex items-center rounded-md border border-neutral-200 dark:border-neutral-600 overflow-hidden ${className}`}>
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${
          lang === 'en'
            ? 'bg-accent-orange text-white'
            : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-700'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLang('fr')}
        className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${
          lang === 'fr'
            ? 'bg-accent-orange text-white'
            : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-700'
        }`}
        aria-label="Passer au français"
      >
        FR
      </button>
    </div>
  )
}

export default LanguageSwitcher
