import { Link } from 'react-router-dom'
import './About.css'

const platforms = ['HubSpot', 'Zapier', 'Zoho', 'Dubsado', 'GoHighLevel', 'Notion', 'Make', 'HoneyBook', 'Wix', 'Shopify']

export default function About() {
  return (
    <section className="section" style={{ paddingTop: 64, borderBottom: 'none' }}>
      <div className="container about-grid">
        <div className="about-photo-wrap">
          <img
            src="/images/wasiu-portrait.jpg"
            alt="Portrait of Wasiu Akeem Oluwaferanmi"
            className="about-photo"
          />
        </div>

        <div>
          <span className="eyebrow">About</span>
          <h1 style={{ fontSize: 'clamp(28px, 3.4vw, 38px)', maxWidth: 480 }}>
            Wasiu Akeem Oluwaferanmi
          </h1>
          <p style={{ fontSize: 16.5, maxWidth: 500 }}>
            I'm a no-code developer, CRM automation specialist, and digital
            marketing specialist with over four years of experience helping
            businesses replace manual, time-consuming processes with systems
            that run on their own.
          </p>
          <p style={{ maxWidth: 500 }}>
            My work usually starts the same way: sitting down with a business
            and figuring out where the manual work actually lives — the
            missed follow-ups, the scattered spreadsheets, the onboarding
            steps that only happen if someone remembers to do them by hand.
            From there, I build the automation around how the business
            already operates, rather than forcing a rigid system onto it.
          </p>
          <p style={{ maxWidth: 500, marginBottom: 32 }}>
            That's taken shape across CRM builds on HubSpot, Zoho, Dubsado,
            and GoHighLevel, workflow automation with Zapier and Make,
            e-commerce builds on Shopify, and — more recently — a full SaaS
            product built with Lovable, Supabase, Clerk, and the OpenAI API.
          </p>

          <div className="about-platforms">
            {platforms.map((p) => (
              <span className="tag" key={p}>{p}</span>
            ))}
          </div>

          <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Work with me →</Link>
            <Link to="/portfolio" className="btn btn-ghost">View portfolio</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
