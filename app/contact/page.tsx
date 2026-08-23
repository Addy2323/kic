'use client'

import { useState } from 'react'
import { Mail, MapPin, ArrowUpRight, CheckCircle2, Building, Handshake } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { company, pageCopy } from '@/lib/content'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'partner' | 'general'>('partner')
  const [submitted, setSubmitted] = useState(false)

  return (
    <PageFrame>
      <PageHero
        eyebrow="Start a Conversation"
        title="Let’s Build What Matters."
        intro="Partner with Kigola International to develop and finance sustainable projects with long-term economic, environmental, and social impact across Tanzania."
        bgImage="/images/contact-hero.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          {/* Left Column: Head Office & Direct Contacts */}
          <div className="space-y-10">
            <div>
              <p className="eyebrow text-accent font-semibold">Headquarters</p>
              <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground">
                KIC Head Office
              </h2>
              <div className="mt-6 flex items-start gap-3 text-foreground/85">
                <MapPin size={20} className="mt-1 text-accent shrink-0" />
                <p className="text-base leading-relaxed">
                  <strong className="block text-foreground font-semibold">
                    {company.name}
                  </strong>
                  {company.location.map((line) => (
                    <span key={line} className="block text-muted-foreground">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="eyebrow text-accent font-semibold">Email Inquiries</p>
              <a
                href={`mailto:${company.email}`}
                className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-accent transition-colors underline decoration-border underline-offset-8"
              >
                <Mail size={18} className="text-accent" />
                <span>{company.email}</span>
              </a>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                For official correspondence, RFP submissions, and investor relations.
              </p>
            </div>

            <div className="rounded-2xl border border-accent/20 bg-[#061e13] p-6 text-primary-foreground">
              <span className="eyebrow text-accent font-semibold">Fast-Track Response</span>
              <p className="mt-3 text-xs leading-relaxed text-primary-foreground/80">
                All partnership proposals and investment enquiries submitted through this portal are routed directly to executive management.
              </p>
            </div>
          </div>

          {/* Right Column: Tabbed Conversion Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-md sm:p-10">
            {/* Form Mode Tabs */}
            <div className="flex items-center gap-2 border-b border-border pb-6">
              <button
                type="button"
                onClick={() => setActiveTab('partner')}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'partner'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                <Handshake size={15} className={activeTab === 'partner' ? 'text-accent' : ''} />
                <span>Partner With Us</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('general')}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'general'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                <Mail size={15} className={activeTab === 'general' ? 'text-accent' : ''} />
                <span>General Contact</span>
              </button>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-accent/10 border border-accent/30 p-8 text-center animate-in fade-in">
                <CheckCircle2 size={40} className="mx-auto text-accent" />
                <h3 className="mt-4 text-xl font-serif font-medium text-foreground">
                  Thank You for Your Submission
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your message has been received. A representative from Kigola International will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                className="mt-8 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Full Name / Contact Person *
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mendrad Kigola"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Organization / Company *
                    <input
                      type="text"
                      required
                      placeholder="Organization Name"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </label>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email Address *
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Telephone / Phone Number
                    <input
                      type="tel"
                      placeholder="+255..."
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </label>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Country *
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanzania, UK, Kenya"
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </label>

                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Area of Interest *
                    <select
                      required
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select Area of Interest</option>
                      <option value="renewable-energy">Renewable Energy (Hydropower)</option>
                      <option value="healthcare">Healthcare Infrastructure & Services</option>
                      <option value="agriculture">Agriculture & Livestock</option>
                      <option value="infrastructure">Sustainable Infrastructure</option>
                      <option value="water-sanitation">Water Supply, Hygiene & Sanitation</option>
                      <option value="education">Education & Medical College</option>
                      <option value="climate-finance">Climate Finance</option>
                      <option value="ppp">Public-Private Partnerships (PPP)</option>
                      <option value="project-financing">International Project Financing</option>
                      <option value="other">Other Inquiries</option>
                    </select>
                  </label>
                </div>

                {activeTab === 'partner' && (
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Partnership Type *
                      <select
                        required
                        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                      >
                        <option value="">Select Partnership Type</option>
                        <option value="investor">Investor / Co-Investor</option>
                        <option value="financial-institution">Financial Institution / Bank</option>
                        <option value="development-partner">Development Finance Institution (DFI)</option>
                        <option value="technical-partner">Technical / EPC Partner</option>
                        <option value="government">Government / Public Body</option>
                        <option value="supplier">Supplier / Contractor</option>
                        <option value="other">Other Strategic Partner</option>
                      </select>
                    </label>

                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Estimated Investment / Value
                      <input
                        type="text"
                        placeholder="e.g. $1M - $5M / USD"
                        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </label>
                  </div>
                )}

                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {activeTab === 'partner' ? 'Proposed Partnership Summary *' : 'Message *'}
                  <textarea
                    required
                    rows={4}
                    placeholder={
                      activeTab === 'partner'
                        ? 'Describe your organization, proposed collaboration, and strategic alignment with KIC...'
                        : 'How can we assist you?'
                    }
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                  />
                </label>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-md transition-all hover:bg-[#072417] hover:ring-1 hover:ring-accent/40 active:scale-98 sm:w-auto sm:px-10"
                >
                  <span>
                    {activeTab === 'partner'
                      ? 'Submit Partnership Enquiry'
                      : 'Send Message'}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
