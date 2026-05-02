import { motion } from 'framer-motion'
import { PERSONAL } from '../../data/portfolioData'
import styles from './Hero.module.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id='hero' className={styles.hero}>
      {/* Background glow */}
      <div className={styles.glow} aria-hidden='true' />
      <div className={styles.gridLines} aria-hidden='true' />

      <motion.div
        className={`container ${styles.content}`}
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}>
        <div className={styles.textContent}>
          {/* Badge */}
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for Internships &amp; Full-time Roles
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className={styles.name}>
            Tekulapally Sai{" "}
            <span className={styles.nameAccent}>Rohan Reddy</span>
          </motion.h1>

          {/* Role */}
          <motion.p variants={itemVariants} className={styles.role}>
            Full-Stack MERN Developer &nbsp;·&nbsp; B.Tech CS '26
          </motion.p>

          {/* Description */}
          <motion.p variants={itemVariants} className={styles.desc}>
            Building scalable backend systems, secure REST APIs, and
            performance-optimized web applications. Expanding into&nbsp;
            <span className={styles.descAccent}>
              AI Engineering — ML · DL · NLP
            </span>
            .
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className={styles.ctas}>
            <button
              className='btn-primary'
              onClick={() => scrollTo("projects")}>
              View Projects →
            </button>
            <button className='btn-ghost' onClick={() => scrollTo("contact")}>
              Get in Touch
            </button>
            <a
              href='/Rohan-reddy-CV%20(2).pdf'
              download='Rohan-reddy-CV.pdf'
              className='btn-ghost'>
              Download Resume
            </a>
            <a
              href={PERSONAL.github}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-ghost'>
              GitHub ↗
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div variants={itemVariants} className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <img
              src='/image.png'
              alt='Rohan Reddy'
              className={styles.profileImage}
            />
            <div className={styles.imageGlow}></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function MetaItem({ href, label, external }) {
  return (
    <div className={styles.metaItem}>
      <span className={styles.metaDot} />
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={styles.metaLink}
      >
        {label}
      </a>
    </div>
  )
}
