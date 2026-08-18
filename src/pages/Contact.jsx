import { useState } from 'react'
import { supabase } from '../supabaseClient.js'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | unconfigured

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!supabase) {
      setStatus('unconfigured')
      return
    }

    setStatus('sending')
    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: form.name,
        email: form.email,
        project: form.project,
        message: form.message,
      },
    ])

    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('sent')
      setForm({ name: '', email: '', project: '', message: '' })
    }
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

        <form className="card contact-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Name</span>
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label className="field">
            <span>Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>

          <label className="field">
            <span>What do you need help with?</span>
            <input name="project" value={form.project} onChange={handleChange} placeholder="e.g. CRM setup, website, marketing, automation" />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} required />
          </label>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message →'}
          </button>

          {status === 'sent' && <p className="form-note form-note-ok">Message sent — I'll be in touch soon.</p>}
          {status === 'error' && <p className="form-note form-note-error">Something went wrong. Please try again or reach out on X/Facebook.</p>}
          {status === 'unconfigured' && <p className="form-note form-note-error">Form isn't connected yet — reach out on X or Facebook for now.</p>}
        </form>
      </div>
    </section>
  )
}
