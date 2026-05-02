import { PROJECTS } from '../../data/portfolioData'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'
import GitHubCalendar from 'react-github-calendar'

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <p className="section-label">02 · Projects</p>
          <h2 className="section-title">Things I've Built</h2>
        </motion.div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 0.1}
            />
          ))}
        </div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ marginTop: '80px' }}>
          <p className="section-label">GitHub Contributions</p>
          <h2 className="section-title" style={{marginBottom: '20px'}}>My Open Source Activity</h2>
          <div style={{ overflowX: 'auto', padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)' }}>
            <GitHubCalendar 
              username="Rohanreddy-dev-106" 
              colorScheme="dark"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
