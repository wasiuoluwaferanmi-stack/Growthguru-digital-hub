import { Link } from 'react-router-dom'
import FlowDiagram from '../components/FlowDiagram.jsx'
import '../components/FlowDiagram.css'
import './Home.css'

const process = [
  { n: '01', title: 'Discovery Call', body: 'A free consultation to understand how your business actually operates today — not how a template assumes it does.' },
  { n: '02', title: 'System Mapping', body: 'Every manual step gets mapped: where leads come in, where they stall, where a human is doing a job a workflow could do.' },
  { n: '03', title: 'Build & Test', body: 'The automation gets built inside the tools you already use, then tested against real scenarios before it touches real clients.' },
  { n: '04', title: 'Launch & Refine', body: 'Once live, the system is monitored and refined — automation is never a one-time setup, it keeps getting sharper.' },
]

const testimonials = [
  {
    quote: 'Growthguru is very good at what they do. Always responsive. I had them build my HoneyBook page and my Wix website for marketing — I was very satisfied with the work.',
    name: 'Erin Mitchell',
    role: 'CEO, Epifany Experiences',
  },
  {
    quote: 'A true professional. They delivered high-quality work on my real estate GoHighLevel automation that met all my needs — very satisfied with the results.',
    name: 'Paul Mares',
    role: 'Real Estate Agent',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">CRM Automation · No-Code Development</span>
            <h1 className="hero-title">
              Turning manual businesses into <span className="text-flow">systems that run themselves</span>.
            </h1>
            <p className="hero-sub">
              Growthguru Digital Hub builds the CRM automation, no-code infrastructure, and
              digital marketing systems that take the busywork out of running a business —
              built by Wasiu Akeem Oluwaferanmi.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Book a discovery call →</Link>
              <Link to="/portfolio" className="btn btn-ghost">See the work</Link>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">4+</span>
              <span className="hero-stat-label">years building automation<br />systems for small businesses</span>
            </div>
          </div>
          <div className="hero-visual">
            <FlowDiagram />
            <p className="hero-visual-caption">manual chaos → one automated system</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">What I Do</span>
          <div className="grid-4">
            {[
              { t: 'Digital Infrastructure & Web', d: 'Custom websites, e-commerce, and CMS builds — Wix, Shopify, and code-based sites.' },
              { t: 'Automation & Systems', d: 'CRM setup, email automation, and booking systems that run without you.' },
              { t: 'Marketing & Growth', d: 'Campaigns and content strategy focused on visibility and conversion.' },
              { t: 'Creative & Media', d: 'Brand assets and content that communicate what your business actually does.' },
            ].map((s) => (
              <div className="card" key={s.t}>
                <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                <p style={{ marginBottom: 0, fontSize: 14.5 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">How It Works</span>
          <h2 style={{ maxWidth: 480 }}>A process built for businesses, not for software.</h2>
          <div className="process-list">
            {process.map((p) => (
              <div className="process-row" key={p.n}>
                <span className="process-num">{p.n}</span>
                <div>
                  <h3 style={{ fontSize: 18, marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ marginBottom: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <span className="eyebrow">Client Feedback</span>
          <div className="grid-2">
            {testimonials.map((t) => (
              <div className="card testimonial" key={t.name}>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
