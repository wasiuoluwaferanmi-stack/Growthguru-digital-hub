import Carousel from '../components/Carousel.jsx'
import Reveal from '../components/Reveal.jsx'
import '../components/Carousel.css'
import './Portfolio.css'

const projects = [
  {
    tag: 'Event Planning',
    title: 'Custom Client Onboarding & CRM Pipeline',
    body: 'Automated cross-platform data mapping within HoneyBook CRM, completely eliminating manual operational latency during the client discovery phase — from first inquiry to a branded client experience portal.',
    stack: ['HoneyBook', 'Workflow Automation'],
    images: [
      '/images/portfolio/honeybook-1.webp',
      '/images/portfolio/honeybook-2.webp',
      '/images/portfolio/honeybook-3.webp',
    ],
  },
  {
    tag: 'Real Estate',
    title: 'Holywell Hall: Luxury Estate Management ERP',
    body: 'Engineered a comprehensive, multi-layer asset tracking system for a premium UK luxury estate — quick task assignment, contractor compliance registers, live defect monitoring, calendar timelines, and expense tracking, shifting the operation from manual chaos into decentralized administrative automation.',
    stack: ['Notion', 'Automation', 'Asset Tracking'],
    images: [
      '/images/portfolio/holywell-1.webp',
      '/images/portfolio/holywell-2.webp',
      '/images/portfolio/holywell-3.webp',
      '/images/portfolio/holywell-4.webp',
    ],
  },
  {
    tag: 'Agency Operations',
    title: 'Notion Operations Workspace',
    body: 'Built a Notion-based command center for a digital agency — client reports, statuses, and project tracking all live in one place instead of scattered across docs and email threads.',
    stack: ['Notion', 'Make', 'Google Forms'],
    images: [
      '/images/portfolio/notion-1.png',
      '/images/portfolio/notion-2.jpg',
    ],
  },
  {
    tag: 'SaaS Product',
    title: 'WiseGen: B2B AI Content Multiplier SaaS',
    body: 'Architected a full-scale content repurposing SaaS platform utilizing modern frontend views, deep backend API integrations, and robust database models — turning a single idea into multi-format, authority-building B2B content assets in under 60 seconds. Built with Lovable, Supabase, Clerk, the OpenAI API, and Stripe for subscription billing.',
    stack: ['Lovable', 'Supabase', 'Clerk', 'OpenAI API', 'Stripe'],
    images: [
      '/images/portfolio/wisegen-1.webp',
      '/images/portfolio/wisegen-2.webp',
      '/images/portfolio/wisegen-3.webp',
      '/images/portfolio/wisegen-4.webp',
      '/images/portfolio/wisegen-5.webp',
    ],
  },
]

export default function Portfolio() {
  return (
    <section className="section" style={{ paddingTop: 64, borderBottom: 'none' }}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">Portfolio</span>
          <h1 style={{ maxWidth: 620, fontSize: 'clamp(28px, 3.6vw, 40px)' }}>
            Sites, systems, and products — built for real businesses.
          </h1>
          <p style={{ maxWidth: 520, marginBottom: 56 }}>
            A selection of the web, automation, and product work delivered over
            the last four years.
          </p>
        </Reveal>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <Reveal as="div" className="portfolio-card" key={p.title} delay={(i % 2) * 100}>
              <Carousel images={p.images} alt={p.title} />
              <div className="portfolio-card-body">
                <span className={`tag ${p.tagAccent || ''}`}>{p.tag}</span>
                <h2 style={{ fontSize: 19, margin: '12px 0 10px' }}>{p.title}</h2>
                <p style={{ marginBottom: 14, fontSize: 14.5 }}>{p.body}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.stack.map((s) => (
                    <span className="tag" key={s} style={{ fontSize: 11.5 }}>{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
