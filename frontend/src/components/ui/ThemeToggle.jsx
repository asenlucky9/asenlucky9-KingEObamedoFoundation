import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../../hooks/useDarkMode'

const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useDarkMode()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`p-1.5 rounded-md text-primary-navy dark:text-neutral-300 hover:text-accent-orange hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${className}`}
    >
      {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
    </button>
  )
}

export default ThemeToggle
