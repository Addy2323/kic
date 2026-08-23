import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Sparkles, Building2, Layers, CheckCircle2 } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { businessAreas, company } from '@/lib/content'

export const metadata = {
  title: 'Business Areas | Kigola International Company Limited',
  description: 'Six core sectors driving sustainable economic development across Tanzania: Renewable Energy, Healthcare, Agriculture, Infrastructure, Education, and Investment Services.',
}

export default function BusinessAreasPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Core Sectors"
        title="Essential Sectors. Enduring Value."
        intro="KIC’s activities are grouped into six robust categories derived directly from our documented sectors in Tanzania."
        bgImage="/images/business-hero.jpg"
      />

      {/* Intro Sub-header */}
      <section className="border-b border-border/80 bg-secondary/30 px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-7xl flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-accent font-semibold">Strategic Sectors</p>
            <h2 className="mt-2 text-2xl font-serif font-medium tracking-tight sm:text-3xl">
              Focusing on High-Impact Productive Assets
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            From base-load clean hydropower and hospital infrastructure to commercial agriculture, sanitation systems, and professional training, our business areas address foundational needs.
          </p>
        </div>
      </section>

      {/* 6 Business Areas Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {businessAreas.map((area, index) => (
            <Link
              key={area.slug}
              href={`/business-areas/${area.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <span className="font-mono text-sm font-bold text-accent">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Sector Overview
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-serif font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                  {area.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent/90">
                  {area.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {area.text}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-5">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Explore Sector
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Conversion CTA Banner */}
      <section className="bg-[#061e13] px-6 py-20 text-primary-foreground lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-accent font-semibold">Cross-Sector Collaboration</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
              Explore Partnership Opportunities
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80 text-base leading-relaxed">
              We welcome dialogue with investors, DFIs, project developers, and suppliers across all six business areas.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground shadow-md transition-all hover:bg-[#d6b46e] hover:shadow-lg active:scale-98"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </PageFrame>
  )
}
