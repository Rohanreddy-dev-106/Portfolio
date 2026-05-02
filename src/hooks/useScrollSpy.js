import { useState, useEffect } from 'react'

/**
 * useScrollSpy — tracks which section is currently in the viewport
 * @param {string[]} sectionIds  Array of element IDs to observe
 * @param {number}   offset      Top offset in px (for fixed nav)
 * @returns {string}             The currently active section ID
 */
export function useScrollSpy(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset + 10
      let current = ''

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          current = id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}
