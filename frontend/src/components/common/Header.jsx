import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'
import Navbar from './Navbar'
import Button from '../ui/Button'

const Header = () => {
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

  const isActive = (path) => location.pathname === path

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center h-24 md:h-28">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center space-x-3 md:space-x-4 group flex-shrink-0 mr-8 lg:mr-12">
            <motion.div 
              className="relative flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                delay: 0.1
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/foundetion logo/foundationlogo.png" 
                alt="King E Obamedo Foundation Logo"
                className="h-14 md:h-16 lg:h-18 w-auto"
              />
            </motion.div>
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut",
                  delay: 0.2
                }}
              >
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-navy leading-tight">
                  <span className="text-primary-navy">King E.</span>
                  <span className="text-accent-orange mx-1.5">Obamedo</span>
                  <span className="text-primary-navy">Foundation</span>
                </h1>
                <p className="text-xs md:text-sm text-neutral-500 font-normal mt-0.5 leading-snug">
                  Empowering Communities, Transforming Lives
                </p>
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <Navbar isActive={isActive} className="flex" />
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-auto">
            <Button as={Link} to="/donate" variant="primary" size="md" className="flex items-center space-x-2">
              <Heart size={18} className="fill-white" />
              <span>Donate Now</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-primary-navy hover:text-accent-orange transition-colors rounded-lg hover:bg-neutral-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-neutral-200 overflow-hidden"
            >
              <Navbar isActive={isActive} mobile onLinkClick={() => setMobileMenuOpen(false)} />
              <div className="py-6 px-4">
                <Button as={Link} to="/donate" variant="primary" size="md" className="w-full flex items-center justify-center space-x-2">
                  <Heart size={18} className="fill-white" />
                  <span>Donate Now</span>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
