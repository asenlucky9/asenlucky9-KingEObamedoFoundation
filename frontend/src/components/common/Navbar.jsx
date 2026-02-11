import { Link } from 'react-router-dom'
import { Home, Info, Briefcase, HandHeart, Images, Mail, BookOpen } from 'lucide-react'
import { cn } from '../../utils/helpers'

const Navbar = ({ isActive, mobile = false, onLinkClick, className }) => {
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/programs', label: 'Programs', icon: Briefcase },
    { path: '/get-involved', label: 'Get Involved', icon: HandHeart },
    { path: '/gallery', label: 'Gallery', icon: Images },
    { path: '/blog', label: 'Blog', icon: BookOpen },
    { path: '/contact', label: 'Contact', icon: Mail },
  ]

  const baseClasses = mobile
    ? 'flex flex-col space-y-1 py-4'
    : 'flex items-center space-x-1'

  return (
    <nav className={cn(baseClasses, className)}>
      {navItems.map((item) => {
        const active = isActive(item.path)
        const Icon = item.icon
        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={onLinkClick}
            className={cn(
              'flex items-center space-x-2 text-sm font-medium transition-all duration-200 relative group',
              mobile
                ? 'px-4 py-3 rounded-xl mx-2'
                : 'px-3 py-2 rounded-lg',
              active
                ? 'text-accent-orange bg-accent-orange/10'
                : 'text-neutral-700 hover:text-accent-orange hover:bg-neutral-50'
            )}
          >
            <Icon 
              size={18} 
              className={cn(
                'transition-all duration-200',
                active ? 'text-accent-orange' : 'text-neutral-500 group-hover:text-accent-orange'
              )} 
            />
            <span>{item.label}</span>
            {active && !mobile && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-orange rounded-full"></span>
            )}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar
