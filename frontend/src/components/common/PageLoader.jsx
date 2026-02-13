import { motion } from 'framer-motion'

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[60vh] flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-accent-orange/30 border-t-accent-orange rounded-full animate-spin" />
        <p className="text-sm text-neutral-500 font-medium">Loading...</p>
      </div>
    </motion.div>
  )
}

export default PageLoader
