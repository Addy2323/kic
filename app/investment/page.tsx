import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { investmentThemes } from '@/lib/content'

export const metadata = {
  title: 'Investment Opportunities | Kigola International Company Limited',
  description: 'Partner with KIC Ltd on sustainable investment opportunities in Tanzania.',
}

export default function InvestmentPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="For Partners & Investors"
        title="Capital for What Matters."
        intro="We welcome conversations with investors, development finance institutions, strategic partners, and infrastructure developers."
        bgImage="/images/strategy-hero.jpg"
      />
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-36">
        <div>
          <p className="eyebrow text-accent font-semibold">Priority Themes</p>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
            Our opportunity set is rooted in essential services, clean energy, healthcare, and productive agricultural assets.
          </p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {investmentThemes.map((theme, i) => (
            <Link
              key={theme.title}
              href={theme.link}
              className="group flex items-center justify-between gap-4 py-6 transition-colors hover:text-accent"
            >
              <div>
                <span className="text-xl font-medium tracking-tight group-hover:text-accent">
                  {theme.title}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">{theme.desc}</p>
              </div>
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-primary px-6 py-24 text-primary-foreground lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-accent font-semibold">Start Collaboration</p>
            <h2 className="mt-2 max-w-xl text-4xl font-medium tracking-tight sm:text-6xl">
              Have a project or co-investment in mind?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[.15em] text-accent-foreground shadow-md transition-all hover:bg-[#d6b46e]"
          >
            <span>Start a conversation</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </PageFrame>
  )
}
