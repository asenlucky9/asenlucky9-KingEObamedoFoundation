import { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'
import Navbar from './Navbar'
import Button from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageSwitcher from '../ui/LanguageSwitcher'

const Header = () => {
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const isActive = (path) => location.pathname === path

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-gradient-to-r from-white via-white to-primary-navy/5 dark:from-neutral-900 dark:via-neutral-900 dark:to-primary-navy/20 backdrop-blur-xl shadow-lg shadow-neutral-900/10 border-b-2 border-transparent dark:shadow-none' 
          : 'bg-gradient-to-r from-white/95 via-white/95 to-primary-navy/5 dark:from-neutral-900/95 dark:via-neutral-900/95 dark:to-primary-navy/10 backdrop-blur-md'
      }`}
    >
      {/* Gradient accent bar */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-orange via-primary-navy to-accent-orange opacity-80"
        aria-hidden="true"
      />
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
            <motion.div 
              className="relative flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <img 
                src="/foundation logo/foundationlogo.png" 
                alt="King E Obamedo Foundation Logo"
                className="h-9 sm:h-10 md:h-11 w-auto drop-shadow-sm"
              />
            </motion.div>
            <motion.div 
              className="hidden sm:block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <h1 className="text-sm md:text-base font-bold leading-tight tracking-tight">
                <span className="text-primary-navy dark:text-white">King E.</span>
                <span className="text-accent-orange mx-0.5">Obamedo</span>
                <span className="text-primary-navy dark:text-white"> Foundation</span>
              </h1>
              <p className="text-[10px] md:text-xs text-neutral-500 dark:text-neutral-400 font-medium leading-none mt-0.5">
                {t('common.tagline')}
              </p>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center px-4">
            <Navbar isActive={isActive} className="flex" />
          </div>

          {/* Right: Language, Theme & CTA */}
          <div className="hidden lg:flex items-center gap-1.5 flex-shrink-0">
            <LanguageSwitcher />
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button as={Link} to="/donate" variant="primary" size="sm" className="flex items-center gap-1.5 ml-1 shadow-md shadow-accent-orange/25 hover:shadow-lg hover:shadow-accent-orange/30 transition-shadow">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}>
                  <Heart size={16} className="fill-current shrink-0" strokeWidth={2} />
                </motion.div>
                <span className="font-semibold">{t('common.donateNow')}</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile: Actions & Menu */}
          <div className="lg:hidden flex items-center gap-0.5">
            <LanguageSwitcher />
            <ThemeToggle />
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary-navy dark:text-white hover:text-accent-orange transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X size={22} strokeWidth={2} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu size={22} strokeWidth={2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden overflow-hidden border-t border-neutral-200 dark:border-neutral-700 bg-gradient-to-b from-white to-neutral-50/50 dark:from-neutral-900 dark:to-neutral-800/50"
            >
              <Navbar isActive={isActive} mobile onLinkClick={() => setMobileMenuOpen(false)} />
              <div className="py-6 px-4">
                <Button as={Link} to="/donate" variant="primary" size="md" className="w-full flex items-center justify-center space-x-2">
                  <Heart size={18} className="fill-white" />
                  <span>{t('common.donateNow')}</span>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
