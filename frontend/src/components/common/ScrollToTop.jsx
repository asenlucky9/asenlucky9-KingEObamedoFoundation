import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 200px
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      
      if (scrollTop > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Check on mount
    toggleVisibility()

    // Listen to scroll events with throttling for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          toggleVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', toggleVisibility)
    }
  }, [])

  const scrollToTop = (e) => {
    e?.preventDefault()
    e?.stopPropagation()
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    
    // Also try scrolling the document element
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] w-14 h-14 bg-accent-orange hover:bg-accent-orange-dark text-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 cursor-pointer"
          aria-label="Scroll to top"
          type="button"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop