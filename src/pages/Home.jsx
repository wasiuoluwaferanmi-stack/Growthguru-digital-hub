import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import './Home.css'

const process = [
  { n: '01', title: 'Discovery Call', body: 'A free consultation to understand how your business actually operates today — not how a template assumes it does.' },
  { n: '02', title: 'Design & System Mapping', body: 'Whatever you need — a new site, a CRM, a campaign — gets planned around where the manual work actually lives: the missed follow-ups, the scattered spreadsheets, the pages nobody\'s updated in years.' },
  { n: '03', title: 'Build & Test', body: 'Everything gets built inside tools you can actually maintain, then tested against real scenarios before it touches real clients or visitors.' },
  { n: '04', title: 'Launch & Refine', body: 'Once live, it gets monitored and refined. A site or a system is never really "done" — it keeps getting sharper.' },
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
            <span className="eyebrow">Websites / Automation / Marketing</span>
            <h1 className="hero-title">
              Turning manual businesses into <span className="text-flow">systems that run themselves</span>.
            </h1>
            <p className="hero-sub">
              Most people hire a web designer, then an automation person, then someone
              else for marketing — and spend the next year getting all three to talk
              to each other. Growthguru Digital Hub is one person doing all of it, so
              the site, the CRM, and the campaigns are one connected system from day one.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Book a discovery call →</Link>
              <Link to="/portfolio" className="btn btn-ghost">See the work</Link>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">4+</span>
              <span className="hero-stat-label">years building digital<br />infrastructure for small businesses</span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="/images/hero-visual.webp"
              alt="Diagram of a website connected to CRM, database, and automation, feeding social media, email marketing, paid ads, and content marketing"
              className="hero-visual-img"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">What I Build</span>
            <h2 style={{ maxWidth: 560 }}>Three pillars, one person, one connected system.</h2>
          </Reveal>

          <div className="pillars">
            <Reveal className="pillar-card pillar-card-a" delay={0}>
              <span className="pillar-index">Web</span>
              <h3 style={{ fontSize: 19 }}>Design & Development</h3>
              <p style={{ marginBottom: 0, fontSize: 14.5 }}>
                Custom sites, e-commerce, and CMS builds — Wix, Shopify, systeme.io,
                or hand-coded when a template can't do what the business needs.
              </p>
            </Reveal>
            <Reveal className="pillar-card pillar-card-b" delay={100}>
              <span className="pillar-index">Automation</span>
              <h3 style={{ fontSize: 19 }}>Systems & CRM</h3>
              <p style={{ marginBottom: 0, fontSize: 14.5 }}>
                CRM setup, booking flows, and follow-up sequences, so a lead doesn't
                sit in an inbox waiting for someone to notice it.
              </p>
            </Reveal>
            <Reveal className="pillar-card pillar-card-c" delay={200}>
              <span className="pillar-index">Marketing</span>
              <h3 style={{ fontSize: 19 }}>Growth & Content</h3>
              <p style={{ marginBottom: 0, fontSize: 14.5 }}>
                Campaigns, content, and funnels built to actually bring people to the
                site — not just make it look good once they arrive.
              </p>
            </Reveal>
          </div>

          <Reveal className="pillar-support" delay={100}>
            <span className="pillar-support-label">Also on the table</span>
            <span>Creative & Media — brand assets and content, whenever a build needs them.</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="split">
            <div className="split-media">
              <img
                src="/images/portfolio/wisegen-1.webp"
                alt="Screenshot of WiseGen, a content repurposing SaaS product interface"
              />
            </div>
            <div className="split-copy">
              <span className="eyebrow">Built, Not Templated</span>
              <h2 style={{ maxWidth: 440 }}>
                WiseGen isn't a website. It's a full product, built from the ground up.
              </h2>
              <p style={{ maxWidth: 440 }}>
                No theme, no page builder — WiseGen runs on Lovable, Supabase, Clerk,
                the OpenAI API, and Stripe for subscription billing. When a project
                needs a real product instead of a website — its own database, its own
                logins, its own billing — this is the level of build it gets.
              </p>
              <Link to="/portfolio" className="btn btn-ghost">See the full build</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">How It Works</span>
            <h2 style={{ maxWidth: 480 }}>A process built for businesses, not for software.</h2>
          </Reveal>
          <div className="process-list">
            {process.map((p, i) => (
              <Reveal as="div" className="process-row" key={p.n} delay={i * 60}>
                <span className="process-num">{p.n}</span>
                <div>
                  <h3 style={{ fontSize: 18, marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ marginBottom: 0 }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Client Feedback</span>
          </Reveal>
          <div className="grid-2">
            {testimonials.map((t, i) => (
              <Reveal as="div" className="card testimonial" key={t.name} delay={i * 100}>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
