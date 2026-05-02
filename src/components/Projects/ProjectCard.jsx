import { motion } from 'framer-motion'
import styles from './Projects.module.css'

export default function ProjectCard({ project, delay = 0 }) {
  const { name, emoji, desc, bullets, tags, github, live, highlight } = project

  return (
    <motion.article 
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>
          <span className={styles.cardEmoji}>{emoji}</span>
          <h3 className={styles.cardName}>{name}</h3>
        </div>
        <div className={styles.cardLinks}>
          <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.linkLive}`}>
              Live ↗
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className={styles.cardDesc}>{desc}</p>

      {/* Bullets */}
      <ul className={styles.bullets}>
        {bullets.map((b, i) => (
          <li key={i} className={styles.bullet}>{b}</li>
        ))}
      </ul>

      {/* Highlight badge */}
      <div className={styles.highlight}>
        <span className={styles.highlightDot} />
        {highlight}
      </div>

      {/* Tags */}
      <div className={styles.tags}>
        {tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </motion.article>
  )
}
