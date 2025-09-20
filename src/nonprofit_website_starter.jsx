import React from "react";

// NonProfitLanding.jsx
// Single-file React component starter for a nonprofit website.
// Uses Tailwind CSS utility classes. Optional shadcn/ui components are referenced in comments.
// Replace placeholder text, links, and API keys with your own values.

export default function NonProfitLanding() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Site meta and simple accessibility helpers */}
      <SkipLink />

      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Logo />
              <nav className="hidden md:flex gap-6" aria-label="Primary">
                <a href="#about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">About</a>
                <a href="#programs" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Programs</a>
                <a href="#events" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Events</a>
                <a href="#volunteer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Volunteer</a>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <a href="#donate" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Donate</a>
              <button className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-label="Open menu">
                {/* Simple hamburger icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero />

        <section id="about" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-extrabold">Who we are</h2>
                <p className="mt-4 text-lg text-slate-600">We are a registered nonprofit (EIN: <em>REPLACE-EIN</em>) focused on improving access to adaptive equipment, therapies, and inclusive community programs for people with lifelong disabilities.</p>
                <ul className="mt-6 space-y-2 text-slate-700">
                  <li>• Equipment donation and distribution</li>
                  <li>• Family support & education</li>
                  <li>• Community events & inclusive programming</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-6 shadow">
                <h3 className="text-xl font-semibold">Quick facts</h3>
                <dl className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm text-slate-500">Founded</dt>
                    <dd className="font-medium">2025</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Served</dt>
                    <dd className="font-medium">400+ families</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="py-16 bg-gradient-to-b from-transparent to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Our Programs</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProgramCard title="Adaptive Equipment" desc="Provide donated and low-cost adaptive devices to families." />
              <ProgramCard title="Therapy Grants" desc="Micro-grants to access short-term therapy or evaluations." />
              <ProgramCard title="Community Days" desc="Inclusive social and recreation events for caregivers and recipients." />
            </div>
          </div>
        </section>

        <section id="events" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <EventsList />
          </div>
        </section>

        <section id="volunteer" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Volunteer</h2>
            <p className="mt-3 text-slate-600">We rely on volunteers for equipment pickup, event staffing, and community outreach.</p>
            <VolunteerForm />
          </div>
        </section>

        <section id="donate" className="py-16 bg-indigo-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold">Support our work</h2>
            <p className="mt-2 text-slate-700">Donations help us get equipment and services to families in need. Your contribution is tax-deductible.</p>
            <div className="mt-6">
              {/* Placeholder: integrate with Stripe / PayPal / GiveWP */}
              <button className="inline-flex items-center px-6 py-3 rounded-md bg-indigo-600 text-white text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => alert('Replace this with a real payment integration (Stripe Elements / Checkout link)')}>Donate Now</button>
              <p className="mt-3 text-sm text-slate-600">Prefer to donate by check? Mail to: 123 Nonprofit Ave, Richmond, VA</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Contact us</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ---------------------- Small components below ---------------------- */

function SkipLink() {
  return (
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 rounded shadow">Skip to content</a>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">NP</div>
      <span className="font-semibold">NonProfit Name</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">Access. Support. Community.</h1>
            <p className="mt-4 text-lg text-slate-600">We connect families with adaptive equipment, short-term therapy funds, and inclusive programs to improve daily life and participation.</p>
            <div className="mt-6 flex gap-3">
              <a href="#donate" className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold">Donate</a>
              <a href="#volunteer" className="inline-flex items-center px-4 py-2 rounded-md border border-slate-200 bg-white">Volunteer</a>
            </div>
          </div>
          <div className="rounded-lg bg-indigo-50 p-6">
            <h3 className="font-semibold">Our impact</h3>
            <p className="mt-2 text-slate-700">We place equipment in the hands of families quickly — with dignity and minimal paperwork. Example: Rifton Activity Chairs donated and delivered within two weeks for eligible families.</p>
            <dl className="mt-4 grid grid-cols-3 gap-4">
              <Stat label="Families" value="400+" />
              <Stat label="Devices" value="1,200+" />
              <Stat label="Volunteers" value="250" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white rounded p-3 text-center shadow-sm">
      <dt className="text-sm text-slate-500">{label}</dt>
      <dd className="text-xl font-bold">{value}</dd>
    </div>
  );
}

function ProgramCard({ title, desc }) {
  return (
    <article className="rounded-lg bg-white p-6 shadow hover:shadow-md transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
      <a href="#contact" className="mt-4 inline-block text-sm text-indigo-600">Learn more →</a>
    </article>
  );
}

function EventsList() {
  // Example static events — replace with CMS-driven events (e.g., Sanity/Contentful/Netlify CMS)
  const events = [
    { id: 1, title: 'Community Inclusion Day', date: 'Oct 11, 2025', location: 'Richmond, VA' },
    { id: 2, title: 'Adaptive Equipment Workshop', date: 'Nov 9, 2025', location: 'Hybrid' },
  ];

  return (
    <div className="mt-6 grid md:grid-cols-2 gap-4">
      {events.map((e) => (
        <div key={e.id} className="rounded-lg bg-white p-4 shadow">
          <h4 className="font-semibold">{e.title}</h4>
          <p className="text-sm text-slate-600">{e.date} • {e.location}</p>
          <a className="mt-3 inline-block text-indigo-600 text-sm" href="#">Register</a>
        </div>
      ))}
    </div>
  );
}

function VolunteerForm() {
  // Simplest accessible form — connect to serverless endpoint or form service
  return (
    <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted — wire up a backend or form endpoint.'); }}>
      <label className="sr-only" htmlFor="name">Name</label>
      <input id="name" name="name" required placeholder="Full name" className="p-3 rounded border" />

      <label className="sr-only" htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required placeholder="Email" className="p-3 rounded border" />

      <textarea id="notes" name="notes" placeholder="How would you like to help?" className="sm:col-span-2 p-3 rounded border" rows={4}></textarea>

      <div className="sm:col-span-2">
        <button className="px-4 py-2 rounded bg-indigo-600 text-white">Sign up to volunteer</button>
      </div>
    </form>
  );
}

function ContactForm() {
  // Example connecting to Formspree or Netlify Forms is straightforward — include action attribute
  return (
    <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks! Replace with a real submission handler.'); }}>
      <input aria-label="Your name" name="name" placeholder="Your name" className="p-3 rounded border" />
      <input aria-label="Your email" name="email" placeholder="Your email" className="p-3 rounded border" />
      <textarea aria-label="Message" name="message" placeholder="Message" className="p-3 rounded border" rows={4}></textarea>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 rounded bg-indigo-600 text-white">Send message</button>
        <span className="text-sm text-slate-600">Or email us: hello@nonprofit.org</span>
      </div>
    </form>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <h4 className="font-semibold">NonProfit Name</h4>
          <p className="text-sm text-slate-300 mt-2">123 Nonprofit Ave<br/>Richmond, VA</p>
        </div>
        <div className="text-sm text-slate-300">© {new Date().getFullYear()} NonProfit Name. All rights reserved.</div>
      </div>
    </footer>
  );
}

/* ---------------------- Notes & Integration pointers ---------------------- */

// Integration checklist (replace placeholders):
// - Tailwind: add Tailwind to your React project (postcss + tailwind.config.js). See Tailwind docs.
// - Forms: replace onSubmit handlers with real endpoints (Formspree, Netlify Forms, serverless API).
// - Payments: integrate Stripe Checkout or Donate buttons (server-side secrets required). Do NOT store secrets in client code.
// - CMS: connect events/programs to a headless CMS (Contentful, Sanity, or Netlify CMS) for non-technical content editing.
// - Accessibility: headings, labels, contrast — run audits with axe and Lighthouse.
// - SEO: add <meta> tags, sitemap.xml, robots.txt, Open Graph images.
// - Hosting: deploy to Vercel, Netlify, or GitHub Pages.

// If you'd like, I can also:
// - generate a full Tailwind + Vite starter configuration (tailwind.config.js, index.css, package.json scripts)
// - add a Stripe Checkout integration example (serverless function + client)
// - scaffold a CMS-backed events page using Sanity or Contentful

// End of NonProfitLanding.jsx
