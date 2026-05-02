import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { PERSONAL } from '../../data/portfolioData'
import { useContactForm } from '../../hooks/useContactForm'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const CONTACT_DETAILS = [
  { icon: <FaEnvelope />, label: 'Email',    value: 'smecrohanreddy5p6@gmail.com', href: `mailto:${PERSONAL.email}` },
  { icon: <FaPhone />, label: 'Phone',    value: '+91-7671856610',              href: `tel:${PERSONAL.phone}` },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/rohanreddy', href: PERSONAL.linkedin, external: true },
  { icon: <FaGithub />, label: 'GitHub',   value: 'Rohanreddy-dev-106',          href: PERSONAL.github,   external: true },
]

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const { form: fields, status, handleChange, handleSubmit } = useContactForm()

  const isSending = status === 'sending'
  const isSuccess = status === 'success'
  const isError   = status === 'error' || (typeof status === 'object' && status?.type === 'error')
  const errorMsg  = typeof status === 'object' ? status?.msg : 'Something went wrong. Please email me directly.'

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <p className="section-label">05 · Contact</p>
          <h2 className="section-title">Get in Touch</h2>
        </motion.div>

        <div className={styles.wrapper}>
          {/* Contact info */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <h3 className={styles.infoTitle}>Let's work together</h3>
            <p className={styles.infoSub}>
              I'm actively looking for internship and full-time opportunities in backend or
              full-stack development. Open to collaborations, freelance work, or just a conversation.
            </p>

            <div className={styles.detailList}>
              {CONTACT_DETAILS.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  className={styles.detail}
                  target={d.external ? '_blank' : undefined}
                  rel={d.external ? 'noopener noreferrer' : undefined}
                >
                  <div className={styles.detailIcon}>{d.icon}</div>
                  <div>
                    <div className={styles.detailLabel}>{d.label}</div>
                    <div className={styles.detailValue}>{d.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className={styles.formWrap} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <div className={styles.formRow}>
              <FormField
                label="Name *"
                name="name"
                type="text"
                placeholder="Your full name"
                value={fields.name}
                onChange={handleChange}
              />
              <FormField
                label="Email *"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={fields.email}
                onChange={handleChange}
              />
            </div>

            <FormField
              label="Subject"
              name="subject"
              type="text"
              placeholder="Internship Opportunity / Collaboration"
              value={fields.subject}
              onChange={handleChange}
            />

            <FormField
              label="Message *"
              name="message"
              type="textarea"
              placeholder="Tell me about the opportunity or project..."
              value={fields.message}
              onChange={handleChange}
              rows={5}
            />

            {/* Status messages */}
            {isSuccess && (
              <div className={`${styles.statusMsg} ${styles.success}`}>
                <FaCheckCircle /> &nbsp;Message sent! I'll get back to you soon.
              </div>
            )}
            {isError && (
              <div className={`${styles.statusMsg} ${styles.error}`}>
                <FaTimesCircle /> &nbsp;{errorMsg}
              </div>
            )}

            <button
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={isSending}
              type="button"
            >
              {isSending ? (
                <><span className={styles.spinner} /> Sending…</>
              ) : (
                'Send Message →'
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, name, type, placeholder, value, onChange, rows }) {
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows || 4}
          className={styles.fieldInput}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.fieldInput}
        />
      )}
    </div>
  )
}
