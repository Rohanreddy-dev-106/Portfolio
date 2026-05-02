import { motion } from 'framer-motion'
import styles from './Loader.module.css'

export default function Loader() {
  const codeText = "Hello Developer"
  const letters = Array.from(codeText)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, display: 'none' },
    visible: { opacity: 1, display: 'inline-block' }
  }

  return (
    <motion.div
      className={styles.loaderContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className={styles.terminal}>
        <motion.span 
          className={styles.tag}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          &lt;
        </motion.span>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'inline-block', margin: '0 8px' }}
        >
          {letters.map((letter, i) => (
            <motion.span key={i} variants={letterVariants}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.span 
          className={styles.tag}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.1 }}
        >
          /&gt;
        </motion.span>

        <motion.span
          className={styles.cursor}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
}
