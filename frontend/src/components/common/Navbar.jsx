import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Info, Briefcase, HandHeart, Images, Mail, BookOpen } from 'lucide-react'
import { cn } from '../../utils/helpers'
import { useLanguage } from '../../context/LanguageContext'

const Navbar = ({ isActive, mobile = false, onLinkClick, className }) => {
  const { t } = useLanguage()
  const navItems = [
    { path: '/', labelKey: 'nav.home', icon: Home },
    { path: '/about', labelKey: 'nav.about', icon: Info },
    { path: '/programs', labelKey: 'nav.programs', icon: Briefcase },
    { path: '/get-involved', labelKey: 'nav.getInvolved', icon: HandHeart },
    { path: '/gallery', labelKey: 'nav.gallery', icon: Images },
    { path: '/blog', labelKey: 'nav.blog', icon: BookOpen },
    { path: '/contact', labelKey: 'nav.contact', icon: Mail },
  ]

  const baseClasses = mobile
    ? 'flex flex-col gap-0.5 py-4'
    : 'flex items-center gap-0.5'

  return (
    <nav className={cn(baseClasses, className)}>
      {navItems.map((item, i) => {
        const active = isActive(item.path)
        const Icon = item.icon
        return (
          <motion.div
            key={item.path}
            initial={mobile ? { opacity: 0, x: -10 } : false}
            animate={mobile ? { opacity: 1, x: 0 } : false}
            transition={{ delay: i * 0.04, duration: 0.25 }}
          >
            <Link
              to={item.path}
              onClick={onLinkClick}
              className={cn(
                'flex items-center gap-2 text-[13px] font-medium transition-all duration-300 ease-out relative group',
                mobile
                  ? 'px-4 py-2.5 rounded-lg mx-2'
                  : 'px-2.5 py-2 rounded-lg',
                active
                  ? 'text-accent-orange bg-accent-orange/15 dark:bg-accent-orange/25 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-accent-orange hover:bg-primary-navy/5 dark:hover:bg-primary-navy/20'
              )}
            >
              <Icon 
                size={16} 
                strokeWidth={2}
                className={cn(
                  'shrink-0 transition-transform duration-300 group-hover:scale-110',
                  active ? 'text-accent-orange' : 'text-neutral-500 dark:text-neutral-400 group-hover:text-accent-orange'
                )} 
              />
              <span>{t(item.labelKey)}</span>
              {active && !mobile && (
                <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-3 h-0.5 bg-gradient-to-r from-accent-orange to-primary-navy rounded-full" />
              )}
            </Link>
          </motion.div>
        )
      })}
    </nav>
  )
}

export default Navbar
