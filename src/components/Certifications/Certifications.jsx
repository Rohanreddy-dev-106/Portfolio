import { CERTIFICATIONS, ACHIEVEMENTS } from '../../data/portfolioData'
import { motion } from 'framer-motion'
import styles from './Certifications.module.css'

function CredCard({ item, delay }) {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.iconWrap}>{item.icon}</div>
      <div>
        <div className={styles.cardTitle}>{item.title}</div>
        <div className={styles.cardSub}>{item.issuer || item.desc}</div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="certifications" className={styles.section}>
      <div className="container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <p className="section-label">04 · Credentials</p>
          <h2 className="section-title">Certifications &amp; Achievements</h2>
        </motion.div>

        <div className={styles.columns}>
          {/* Certifications */}
          <div>
            <div className={styles.colHeader}>
              <span className={styles.colDot} />
              Certifications
            </div>
            <div className={styles.cardList}>
              {CERTIFICATIONS.map((c, i) => (
                <CredCard key={c.id} item={c} delay={i * 0.08} />
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className={styles.colHeader}>
              <span className={styles.colDot} />
              Hackathon Achievements
            </div>
            <div className={styles.cardList}>
              {ACHIEVEMENTS.map((a, i) => (
                <CredCard key={a.id} item={a} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
