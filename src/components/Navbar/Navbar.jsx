import { useState, useEffect } from 'react'
import { NAV_LINKS, PERSONAL } from '../../data/portfolioData'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import styles from './Navbar.module.css'

const SECTION_IDS = ['about', 'projects', 'skills', 'certifications', 'contact']

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const activeId = useScrollSpy(SECTION_IDS, 80)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo} onClick={(e) => handleNavClick(e, '#hero')}>
          Sai Rohan <span>Reddy</span>
        </a>

        {/* Desktop links */}
        <nav className={styles.links}>
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <a
                key={label}
                href={href}
                className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
           className={styles.cta}>
          GitHub ↗
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={styles.mobileLink}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
             className={styles.mobileCta}>
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  )
}
