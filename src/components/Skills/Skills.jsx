import { useState } from 'react'
import { SKILLS } from '../../data/portfolioData'
import { motion } from 'framer-motion'
import styles from './Skills.module.css'

// Subcomponent — hooks must be called at the top level of a component, not inside loops
function SkillGroup({ group, index, hovered, setHovered }) {
  return (
    <motion.div 
      className={styles.group}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.groupHeader}>
        <span className={styles.groupIcon}>{group.icon}</span>
        <span className={styles.groupName}>{group.group}</span>
      </div>
      <div className={styles.items}>
        {group.items.map((item) => (
          <span
            key={item}
            className={`${styles.item} ${hovered === item ? styles.itemActive : ''}`}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [hovered, setHovered] = useState(null)
  
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <p className="section-label">03 · Skills</p>
          <h2 className="section-title">What I Work With</h2>
        </motion.div>
        <div className={styles.grid}>
          {SKILLS.map((group, i) => (
            <SkillGroup
              key={group.group}
              group={group}
              index={i}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
