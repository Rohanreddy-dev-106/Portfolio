import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar          from './components/Navbar/Navbar'
import Hero            from './components/Hero/Hero'
import About           from './components/About/About'
import Projects        from './components/Projects/Projects'
import Skills          from './components/Skills/Skills'
import Certifications  from './components/Certifications/Certifications'
import Contact         from './components/Contact/Contact'
import Footer          from './components/Footer/Footer'
import Loader          from './components/Loader/Loader'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
