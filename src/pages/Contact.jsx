import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { supabase } from '../supabaseClient.js'
import './Contact.css'

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (!showSuccess) return
    const onKeyDown = (e) => { if (e.key === 'Escape') setShowSuccess(false) }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [showSuccess])

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    const formEl = event.target
    const formData = new FormData(formEl)
    const name = formData.get('name')
    const email = formData.get('email')
    const company = formData.get('company')
    const message = formData.get('message')

    formData.append('access_key', 'aede57d7-bdd1-442d-b216-7bd1fdee44ac')
    formData.append('subject', 'New Inbound Studio Lead — Growthguru Hub')
    formData.append('from_name', 'Growthguru Digital Inquiries')

    // Three independent channels: Web3Forms emails you instantly, Supabase
    // keeps a permanent, queryable record, and the Make webhook triggers
    // the lead-response automation. None of them depend on each other.
    const emailRequest = fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    }).then((res) => res.json())

    const dbRequest = supabase
      ? supabase.from('contact_submissions').insert([{ name, email, company, message }])
      : Promise.resolve({ skipped: true })

    const webhookRequest = fetch('https://hook.eu1.make.com/snrvscdx7hf6n9lt2fou2w9cqvuxa89x', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company, message }),
    })

    const [emailResult, dbResult, webhookResult] = await Promise.allSettled([
      emailRequest,
      dbRequest,
      webhookRequest,
    ])

    const emailOk = emailResult.status === 'fulfilled' && emailResult.value?.success
    const dbOk = dbResult.status === 'fulfilled' && !dbResult.value?.error
    const webhookOk = webhookResult.status === 'fulfilled' && webhookResult.value?.ok

    if (!emailOk) console.log('Web3Forms error', emailResult)
    if (!dbOk && !dbResult.value?.skipped) console.log('Supabase error', dbResult)
    if (!webhookOk) console.log('Make webhook error', webhookResult)

    if (emailOk || dbOk) {
      formEl.reset()
      setShowSuccess(true)
    } else {
      setErrorMessage('Connection timeout. Please email info@growthguru.digital directly.')
    }

    setIsSubmitting(false)
  }

  return (
    <section className="section" style={{ paddingTop: 64, borderBottom: 'none' }}>
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Get Started</span>
          <h1 style={{ fontSize: 'clamp(28px, 3.6vw, 40px)', maxWidth: 440 }}>
            Tell me what's manual. I'll tell you what shouldn't be.
          </h1>
          <p style={{ maxWidth: 440, marginBottom: 32 }}>
            Fill out the form and I'll get back to you to schedule a free
            discovery call — no obligation, just a real look at where
            automation could save you time.
          </p>

          <div className="contact-socials">
            <a href="https://x.com/wasiuoluwayqhj" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">X / Twitter</a>
            <a href="https://www.facebook.com/profile.php?id=61582043461765" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Facebook</a>
          </div>
        </div>

        <form className="card contact-form" onSubmit={onSubmit}>
          <input type="checkbox" name="botcheck" className="hidden-field" tabIndex="-1" autoComplete="off" />

          <label className="field">
            <span>Name</span>
            <input name="name" required />
          </label>

          <label className="field">
            <span>Email</span>
            <input type="email" name="email" required />
          </label>

          <label className="field">
            <span>Company / Business</span>
            <input name="company" placeholder="e.g. Epifany Experiences" />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea name="message" rows="4" required placeholder="What do you need help with — CRM setup, website, marketing, automation?" />
          </label>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send message →'}
          </button>

          {errorMessage && (
            <p className="form-note form-note-error">{errorMessage}</p>
          )}
        </form>
      </div>

      {showSuccess && createPortal(
        <div
          className="success-overlay"
          onClick={() => setShowSuccess(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Message sent confirmation"
        >
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="success-close"
              onClick={() => setShowSuccess(false)}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
            <span className="success-icon">✓</span>
            <h2 className="success-title">Systems blueprint received.</h2>
            <p className="success-body">
              Our architecture studio will contact you shortly.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setShowSuccess(false)}
              type="button"
            >
              Close
            </button>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
