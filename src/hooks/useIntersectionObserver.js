import { useEffect, useRef, useState } from 'react'

/**
 * useIntersectionObserver — triggers when an element enters the viewport
 * @param {object} options  IntersectionObserver options
 * @returns {{ ref, isVisible }}
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // animate once
        }
      },
      { threshold: 0.12, ...options }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => { if (el) observer.unobserve(el) }
  }, [])

  return { ref, isVisible }
}


export function useScrollReveal(delay = 0) {
  const { ref, isVisible } = useIntersectionObserver()

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  }

  return { ref, style }
}
