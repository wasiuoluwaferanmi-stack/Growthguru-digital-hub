import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Digital Infrastructure & Web',
    items: ['Website design (Wix, Shopify, custom-coded)', 'Website optimization', 'E-commerce setup & storefront management'],
  },
  {
    title: 'Automation & Systems',
    items: ['CRM setup — HubSpot, Zoho, Dubsado, GoHighLevel', 'Zapier / Make workflow automation', 'Booking & scheduling systems'],
  },
  {
    title: 'Marketing & Growth',
    items: ['Digital marketing strategy', 'Content & campaign planning', 'Lead capture & funnel design'],
  },
  {
    title: 'No-Code Product Development',
    items: ['SaaS MVPs with Lovable, Supabase, Clerk', 'Payment integration (Stripe)', 'AI-powered features via OpenAI API'],
  },
]

export default function Services() {
  return (
    <section className="section" style={{ paddingTop: 64, borderBottom: 'none' }}>
      <div className="container">
        <span className="eyebrow">Services</span>
        <h1 style={{ maxWidth: 620, fontSize: 'clamp(28px, 3.6vw, 40px)' }}>
          Everything a business needs to stop running on manual effort.
        </h1>
        <p style={{ maxWidth: 520, marginBottom: 56 }}>
          Each service is built inside the tools your team already knows —
          no rip-and-replace, no learning curve for a system nobody asked for.
        </p>

        <div className="grid-2" style={{ rowGap: 32 }}>
          {services.map((s) => (
            <div className="card" key={s.title}>
              <h2 style={{ fontSize: 20, marginBottom: 18 }}>{s.title}</h2>
              <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--text-muted)' }}>
                {s.items.map((i) => (
                  <li key={i} style={{ marginBottom: 8, fontSize: 14.5 }}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <Link to="/contact" className="btn btn-primary">Book a discovery call →</Link>
        </div>
      </div>
    </section>
  )
}
