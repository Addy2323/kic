'use client'
import { useState } from 'react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { company, pageCopy } from '@/lib/content'
export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <PageFrame>
      <PageHero {...pageCopy.contact} bgImage="/images/contact-hero.jpg" />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-36">
        <div>
          <p className="eyebrow text-accent font-semibold">Head office</p>
          <p className="mt-6 text-xl leading-relaxed">
            {company.location.map((x) => (
              <span key={x} className="block">
                {x}
              </span>
            ))}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-10 inline-block border-b border-foreground pb-2 text-lg transition-colors hover:text-accent hover:border-accent"
          >
            {company.email}
          </a>
        </div>
        <form
          className="grid gap-6"
          action={`mailto:${company.email}`}
          method="post"
          encType="text/plain"
          onSubmit={() => setSent(true)}
        >
          <label className="grid gap-2 text-sm font-medium">
            Name
            <input
              name="name"
              required
              className="border-b border-border bg-transparent px-0 py-4 outline-none transition-colors focus:border-accent"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Email
            <input
              type="email"
              name="email"
              required
              className="border-b border-border bg-transparent px-0 py-4 outline-none transition-colors focus:border-accent"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            How can we help?
            <textarea
              name="message"
              required
              rows={5}
              className="resize-none border-b border-border bg-transparent px-0 py-4 outline-none transition-colors focus:border-accent"
            />
          </label>
          <button className="group mt-4 inline-flex w-fit items-center gap-3 bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-[#072417] hover:ring-1 hover:ring-accent/40 active:scale-[0.98]">
            <span>{sent ? 'Opening email client' : 'Send enquiry'}</span>
            <span className="text-accent transition-transform group-hover:translate-x-1">↗</span>
          </button>
        </form>
      </section>
    </PageFrame>
  )
}
