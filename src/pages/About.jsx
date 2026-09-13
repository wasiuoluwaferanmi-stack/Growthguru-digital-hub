import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import './About.css'

const platforms = ['HubSpot', 'Zapier', 'Zoho', 'Dubsado', 'GoHighLevel', 'Notion', 'Make', 'HoneyBook', 'Wix', 'Shopify', 'systeme.io']

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

        <Reveal as="div">
          <span className="eyebrow">About</span>
          <h1 style={{ fontSize: 'clamp(28px, 3.4vw, 38px)', maxWidth: 480 }}>
            Wasiu Akeem Oluwaferanmi
          </h1>
          <p style={{ fontSize: 16.5, maxWidth: 500 }}>
            I engineer digital infrastructure that converts attention into
            revenue. With a background in Office Technology and Management
            combined with hands-on systems engineering, I bridge the gap
            between frontend web architecture and backend operational
            automation. My approach is strictly data-driven: I audit manual
            workflows, map out technical bottlenecks, and deploy tailored
            digital systems that scale without increasing headcount.
          </p>
          <p style={{ maxWidth: 500 }}>
            My work usually starts the same way: sitting down with a business
            and figuring out what's actually holding it back. Sometimes that's
            a site that doesn't represent the business anymore. Sometimes it's
            the missed follow-ups and scattered spreadsheets. Either way, I
            build around how the business actually operates, rather than
            forcing a template or a rigid system onto it.
          </p>
          <p style={{ maxWidth: 500, marginBottom: 32 }}>
            That's taken shape as website builds on Wix, Shopify, and systeme.io,
            CRM work
            on HubSpot, Zoho, Dubsado, and GoHighLevel, workflow automation
            with Zapier and Make, and — more recently — a full SaaS product
            built with Lovable, Supabase, Clerk, and the OpenAI API.
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
        </Reveal>
      </div>
    </section>
  )
}
