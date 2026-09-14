import { useState } from 'react'
import { supabase } from '../supabaseClient.js'
import './Contact.css'

export default function Contact() {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isError, setIsError] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setIsError(false)
    setResult('Sending your request...')

    const formEl = event.target
    const formData = new FormData(formEl)
    const name = formData.get('name')
    const email = formData.get('email')
    const company = formData.get('company')
    const message = formData.get('message')

    formData.append('access_key', 'aede57d7-bdd1-442d-b216-7bd1fdee44ac')
    formData.append('subject', 'New Inbound Studio Lead — Growthguru Hub')
    formData.append('from_name', 'Growthguru Digital Inquiries')

    // Two independent channels: Web3Forms emails you instantly, Supabase
    // keeps a permanent, queryable record. Either one succeeding counts
    // as the message getting through — they don't depend on each other.
    const emailRequest = fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    }).then((res) => res.json())

    const dbRequest = supabase
      ? supabase.from('contact_submissions').insert([{ name, email, company, message }])
      : Promise.resolve({ skipped: true })

    const [emailResult, dbResult] = await Promise.allSettled([emailRequest, dbRequest])

    const emailOk = emailResult.status === 'fulfilled' && emailResult.value?.success
    const dbOk = dbResult.status === 'fulfilled' && !dbResult.value?.error

    if (!emailOk) console.log('Web3Forms error', emailResult)
    if (!dbOk && !dbResult.value?.skipped) console.log('Supabase error', dbResult)

    if (emailOk || dbOk) {
      setResult('Systems blueprint received! Our architecture studio will contact you shortly.')
      formEl.reset()
    } else {
      setIsError(true)
      setResult('Connection timeout. Please email info@growthguru.digital directly.')
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

          {result && (
            <p className={`form-note ${isError ? 'form-note-error' : 'form-note-ok'}`}>
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
