import { useState, useEffect } from 'react'
import { NAV_LINKS, PERSONAL } from '../../data/portfolioData'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { FaSun, FaMoon } from 'react-icons/fa'
import styles from './Navbar.module.css'

const SECTION_IDS = ['about', 'projects', 'skills', 'certifications', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme,    setTheme]    = useState('dark')
  const activeId = useScrollSpy(SECTION_IDS, 80)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  const handleThemeToggle = () => {
    const root = document.documentElement
    root.classList.add('theme-transition')
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    setTimeout(() => root.classList.remove('theme-transition'), 450)
  }

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={(e) => handleNavClick(e, '#hero')}>
          Sai Rohan <span>Reddy</span>
        </a>

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

        <div className={styles.rightControls}>
          <button
            className={styles.themeToggle}
            onClick={handleThemeToggle}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
             className={styles.cta}>
            GitHub ↗
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

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
          <button
            className={styles.mobileThemeToggle}
            onClick={() => {
              handleThemeToggle()
              setMenuOpen(false)
            }}
          >
            {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      )}
    </header>
  )
}
