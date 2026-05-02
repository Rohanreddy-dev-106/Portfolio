import { FaRobot, FaGraduationCap } from 'react-icons/fa'
import { PERSONAL, STATS } from '../../data/portfolioData'
import { motion } from 'framer-motion'
import styles from './About.module.css'

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <p className="section-label">01 · About Me</p>
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Text side */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {PERSONAL.about.map((para, i) => (
              <p key={i} className={styles.para}>{para}</p>
            ))}

            {/* Learning badge */}
            <div className={styles.learningBadge}>
              <span className={styles.learningIcon}><FaRobot /></span>
              <div>
                <div className={styles.learningTitle}>Currently Learning</div>
                <div className={styles.learningDesc}>
                  AI Engineering — Machine Learning · Deep Learning · NLP
                </div>
              </div>
            </div>

            {/* Education */}
            <div className={styles.education}>
              <div className={styles.eduRow}>
                <span className={styles.eduIcon}><FaGraduationCap /></span>
                <div>
                  <div className={styles.eduTitle}>B.Tech — Computer Science</div>
                  <div className={styles.eduSub}>
                    {PERSONAL.college} &nbsp;·&nbsp; Expected 2026 &nbsp;·&nbsp; CGPA {PERSONAL.cgpa}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div className={styles.statsGrid} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
