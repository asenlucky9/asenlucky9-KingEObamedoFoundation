import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Format currency (Nigerian Naira)
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format date
 */
export function formatDate(date, options = {}) {
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }).format(new Date(date))
}

/**
 * Truncate text
 */
export function truncate(text, length = 100) {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

/**
 * Scroll to element smoothly
 */
export function scrollToElement(elementId, offset = 80) {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
