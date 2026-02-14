/**
 * Self-contained dark mode - no context needed.
 * Writes directly to document.documentElement and localStorage.
 */
import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'king-obamedo-theme'

function getInitialDark() {
  if (typeof window === 'undefined') return false
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyDarkMode(isDark) {
  const root = document.documentElement
  if (isDark) {
    root.classList.add('dark')
    root.setAttribute('data-theme', 'dark')
    localStorage.setItem(STORAGE_KEY, 'dark')
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', '#111827')
  } else {
    root.classList.remove('dark')
    root.setAttribute('data-theme', 'light')
    localStorage.setItem(STORAGE_KEY, 'light')
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', '#1e3a8a')
  }
}

export function useDarkMode() {
  const [isDark, setIsDark] = useState(getInitialDark)

  useEffect(() => {
    applyDarkMode(isDark)
  }, [isDark])

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev)
  }, [])

  return { isDark, toggleTheme }
}
