import { PERSONAL } from '../../data/portfolioData'
import styles from './Footer.module.css'

const FOOTER_LINKS = [
  { label: 'GitHub',   href: PERSONAL.github,   external: true },
  { label: 'LinkedIn', href: PERSONAL.linkedin,  external: true },
  { label: 'Email',    href: `mailto:${PERSONAL.email}` },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>Rohan<span>Reddy</span></span>
          <span className={styles.copy}>© {year} Tekulapally Sai Rohan Reddy</span>
        </div>

        <div className={styles.links}>
          {FOOTER_LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              className={styles.link}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              {label}
            </a>
          ))}
        </div>

        <button className={styles.backTop} onClick={scrollTop} aria-label="Back to top">
          ↑ Top
        </button>
      </div>
    </footer>
  )
}
