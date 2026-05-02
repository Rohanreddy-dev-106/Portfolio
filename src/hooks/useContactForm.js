import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { PERSONAL } from '../data/portfolioData'


const SERVICE_ID = 'service_1mfr4ri'
const TEMPLATE_ID = 'template_7sajb06'
const PUBLIC_KEY = 'NByaPrvL9zncZbdjn'
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL = { name: '', email: '', subject: '', message: '' }

export function useContactForm() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status !== 'idle') setStatus('idle')
  }

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.trim()) return 'Please enter your email.'
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email address.'
    if (!form.message.trim()) return 'Please write a message.'
    return null
  }

  const handleSubmit = async (e) => {
    e?.preventDefault()

    const validationError = validate()
    if (validationError) {
      setStatus({ type: 'error', msg: validationError })
      return
    }

    setStatus('sending')

    try {
      emailjs.init(PUBLIC_KEY)
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: PERSONAL.email,
        user_email: form.email,
        reply_to: form.email,
        subject: form.subject || 'Portfolio Contact',
        message: form.message,
        to_email: PERSONAL.email,
      })
      setStatus('success')
      setForm(INITIAL)
    } catch (err) {
      console.error('[EmailJS Error]', err)
      setStatus('error')
    }
  }

  const reset = () => { setForm(INITIAL); setStatus('idle') }

  return { form, status, handleChange, handleSubmit, reset }
}
