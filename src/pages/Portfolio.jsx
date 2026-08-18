import Carousel from '../components/Carousel.jsx'
import '../components/Carousel.css'
import './Portfolio.css'

const projects = [
  {
    tag: 'Event Planning',
    title: 'HoneyBook Smart File & Workflow System',
    body: 'Built a complete client booking system — from first inquiry to signed contract — for an event planning business. The system covers the service package smart file, a branded client experience portal, and a multi-step automated questionnaire that captures everything needed before a call ever happens.',
    stack: ['HoneyBook', 'Workflow Automation'],
    images: [
      '/images/portfolio/honeybook-1.png',
      '/images/portfolio/honeybook-2.png',
      '/images/portfolio/honeybook-3.png',
    ],
  },
  {
    tag: 'Real Estate',
    title: 'GoHighLevel Lead Funnel & Automation',
    body: 'Designed and deployed a full GoHighLevel automation system for a real estate client — lead allocation, credit-based nurture sequences, appointment intake notifications, and priority filtering, so no lead sits untouched waiting for a manual follow-up.',
    stack: ['GoHighLevel', 'Lead Automation'],
    images: [
      '/images/portfolio/ghl-1.png',
      '/images/portfolio/ghl-2.png',
      '/images/portfolio/ghl-3.png',
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
    title: 'WiseGen — Content Repurposing SaaS',
    body: 'Built a content repurposing product from the ground up — turning one LinkedIn post or idea into ten authority-building content formats (hooks, carousels, newsletters, threads) in under a minute. Built with Lovable, Supabase, Clerk, the OpenAI API, and Stripe for subscription billing.',
    stack: ['Lovable', 'Supabase', 'Clerk', 'OpenAI API', 'Stripe'],
    images: [
      '/images/portfolio/saas-1.png',
      '/images/portfolio/saas-2.png',
      '/images/portfolio/saas-3.png',
    ],
  },
]

export default function Portfolio() {
  return (
    <section className="section" style={{ paddingTop: 64, borderBottom: 'none' }}>
      <div className="container">
        <span className="eyebrow">Portfolio</span>
        <h1 style={{ maxWidth: 620, fontSize: 'clamp(28px, 3.6vw, 40px)' }}>
          Real systems, built for real businesses.
        </h1>
        <p style={{ maxWidth: 520, marginBottom: 56 }}>
          A selection of the automation and development work delivered over
          the last four years.
        </p>

        <div className="portfolio-grid">
          {projects.map((p) => (
            <div className="portfolio-card" key={p.title}>
              <Carousel images={p.images} alt={p.title} />
              <div className="portfolio-card-body">
                <span className="tag">{p.tag}</span>
                <h2 style={{ fontSize: 19, margin: '12px 0 10px' }}>{p.title}</h2>
                <p style={{ marginBottom: 14, fontSize: 14.5 }}>{p.body}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.stack.map((s) => (
                    <span className="tag" key={s} style={{ fontSize: 11.5 }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
