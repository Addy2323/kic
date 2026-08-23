import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, CheckCircle2, MapPin, Activity, ShieldCheck, Sparkles, Building2, Globe } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { projects } from '@/lib/content'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  return {
    title: project ? `${project.name} | KIC Ltd` : 'Portfolio | KIC Ltd',
    description: project?.text,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()

  return (
    <PageFrame>
      <PageHero
        eyebrow={project.sector}
        title={project.name}
        intro={project.purpose}
        bgImage={project.image}
      />

      {/* Main Project Overview & Facts Section */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.3fr_.7fr] lg:px-10 lg:py-28">
        {/* Left Column: Image & In-Depth Details */}
        <div className="space-y-12">
          {/* Main Visual Render */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-xl">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
          </div>

          {/* Project Overview */}
          <div>
            <p className="eyebrow text-accent font-semibold">Project Overview</p>
            <h2 className="mt-4 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              Delivering Sustainable Value
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              {project.text}
            </p>
          </div>

          {/* Strategic Importance */}
          <div className="rounded-2xl border border-border/80 bg-secondary/30 p-8">
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-accent" />
              <h3 className="text-xl font-medium tracking-tight text-foreground">
                Strategic Importance
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {project.strategicImportance}
            </p>
          </div>

          {/* Environmental & Social Impact */}
          <div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-accent" />
              <h3 className="text-xl font-medium tracking-tight text-foreground">
                Environmental & Social Impact
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Right Column: Project Fact Sheet & CTA */}
        <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          {/* Fact Sheet Card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
            <div className="flex items-center justify-between border-b border-border/70 pb-4">
              <span className="eyebrow text-accent font-semibold">Project Facts</span>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold text-accent">
                {project.status}
              </span>
            </div>

            <dl className="mt-6 divide-y divide-border/60">
              {project.facts.map((fact) => (
                <div key={fact.label} className="py-3.5">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 border-t border-border/70 pt-6">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-[#072417] hover:ring-1 hover:ring-accent/40 active:scale-98"
              >
                <span>{project.ctaText}</span>
                <ArrowUpRight size={16} className="text-accent" />
              </Link>
            </div>
          </div>

          {/* Quick Contact Box */}
          <div className="rounded-2xl border border-accent/20 bg-[#061e13] p-6 text-primary-foreground shadow-sm">
            <p className="eyebrow text-accent font-semibold">Inquiries & Partnerships</p>
            <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed">
              For detailed feasibility notes, investment memoranda, or technical discussions regarding {project.name}.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:underline"
            >
              <span>Contact Project Team</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Other Flagship Projects Navigator */}
      <section className="border-t border-border bg-secondary/30 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between pb-8">
            <h3 className="text-2xl font-serif font-medium tracking-tight">
              Other Flagship Projects
            </h3>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent hover:underline"
            >
              <span>View All Projects</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
                >
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-accent">
                    {p.sector}
                  </span>
                  <h4 className="mt-2 text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                    {p.name}
                  </h4>
                  <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                    {p.purpose}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
