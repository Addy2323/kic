import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Sparkles, MapPin, Activity } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { pageCopy, projects } from '@/lib/content'

export const metadata = {
  title: 'Flagship Portfolio | Kigola International Company Limited',
  description: 'Explore KIC Ltd’s major development initiatives across renewable energy, healthcare, education and agriculture in Tanzania.',
}

export default function PortfolioPage() {
  return (
    <PageFrame>
      <PageHero {...pageCopy.portfolio} bgImage="/images/portfolio-hero.jpg" />

      {/* Intro Context Banner */}
      <section className="border-b border-border/80 bg-secondary/30 px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-7xl flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-accent font-semibold">Flagship Initiatives</p>
            <h2 className="mt-2 text-2xl font-serif font-medium tracking-tight sm:text-3xl">
              Major Development Assets in Tanzania
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            KIC’s company profile identifies four flagship initiatives designed to meet core infrastructural and social needs, deliver commercial viability, and create lasting regional value.
          </p>
        </div>
      </section>

      {/* 4 Flagship Projects Visual Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <article
              key={project.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl sm:p-8"
            >
              {/* Top Tag & Number */}
              <div className="flex items-center justify-between pb-5 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {project.sector}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {project.status}
                  </span>
                </div>
                <span className="font-mono text-lg font-bold text-accent/80">
                  0{idx + 1}
                </span>
              </div>

              {/* Image Banner */}
              <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl bg-secondary shadow-inner">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05180f]/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              </div>

              {/* Title & Metadata */}
              <div className="mt-6 flex-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={13} className="text-accent" />
                  <span>{project.location}</span>
                </div>
                <h3 className="mt-2 text-2xl font-serif font-medium tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.text}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 border-t border-border/60 pt-6">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="bg-primary px-6 py-20 text-primary-foreground lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-accent font-semibold">Invest in Sustainable Assets</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
              Partner on Flagship Initiatives
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80 text-base leading-relaxed">
              We welcome engagement with co-investors, international development finance institutions, and engineering partners on our active and planned projects.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground shadow-md transition-all hover:bg-[#d6b46e] hover:shadow-lg active:scale-98"
          >
            <span>Discuss Project Partnerships</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </PageFrame>
  )
}
