import { useEffect } from 'react'

const BASE_TITLE = 'King E Obamedo Foundation'

/**
 * Sets the document title for the current page.
 * Restores the base title when the component unmounts.
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE

    return () => {
      document.title = previousTitle
    }
  }, [title])
}
