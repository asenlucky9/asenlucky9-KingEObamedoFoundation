import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

const PageLoader = () => {
  const { t } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src="/foundation logo/foundationlogo.png"
            alt=""
            className="w-16 h-16 object-contain"
          />
        </motion.div>
        <div className="w-10 h-10 border-2 border-accent-orange/30 border-t-accent-orange rounded-full animate-spin" />
        <div className="text-center">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{t('common.loading')}</p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{t('common.foundationName')}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default PageLoader
