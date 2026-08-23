import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowUpRight, CheckCircle2, Sparkles, Building2, Layers, MapPin } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { businessAreas, projects } from '@/lib/content'

export function generateStaticParams() {
  return businessAreas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = businessAreas.find((item) => item.slug === slug)
  return {
    title: `${area?.title ?? 'Business Area'} | Kigola International Company Limited`,
    description: area?.text,
  }
}

export default async function BusinessAreaDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = businessAreas.find((item) => item.slug === slug)
  if (!area) notFound()

  const featuredProject = area.featuredProjectSlug
    ? projects.find((p) => p.slug === area.featuredProjectSlug)
    : null

  return (
    <PageFrame>
      <PageHero
        eyebrow="Business Area"
        title={area.title}
        intro={area.subtitle}
        bgImage={area.heroImage}
      />

      {/* Main Focus Areas & Strategy Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_.8fr]">
          {/* Left Column: Focus Sections */}
          <div className="space-y-12">
            <div>
              <p className="eyebrow text-accent font-semibold">Strategic Scope</p>
              <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
                {area.subtitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                {area.text}
              </p>
            </div>

            {/* Core Pillars / Focus Areas */}
            <div className="grid gap-6">
              {area.sections.map((section, idx) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:border-accent/40 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-accent">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl font-medium tracking-tight text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Section Specific CTA */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-[#072417] hover:ring-1 hover:ring-accent/40 active:scale-[0.98]"
              >
                <span>{area.ctaText}</span>
                <ArrowUpRight
                  size={16}
                  className="text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Flagship Project (if linked) & Navigation */}
          <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            {featuredProject && (
              <div className="rounded-2xl border border-accent/30 bg-card p-6 shadow-md sm:p-8">
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <span className="eyebrow text-accent font-semibold">Featured Initiative</span>
                  <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold text-accent">
                    Flagship Asset
                  </span>
                </div>

                <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-xl bg-secondary">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h4 className="mt-5 text-xl font-serif font-medium text-foreground">
                  {featuredProject.name}
                </h4>
                <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin size={13} className="text-accent" />
                  <span>{featuredProject.location}</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {featuredProject.purpose}
                </p>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <Link
                    href={`/portfolio/${featuredProject.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:underline"
                  >
                    <span>View Project Profile</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            )}

            {/* Other Business Areas Navigation Widget */}
            <div className="rounded-2xl border border-border bg-secondary/30 p-6">
              <span className="eyebrow text-xs font-semibold text-muted-foreground">
                All Business Areas
              </span>
              <div className="mt-4 divide-y divide-border/60">
                {businessAreas
                  .filter((b) => b.slug !== area.slug)
                  .map((b) => (
                    <Link
                      key={b.slug}
                      href={`/business-areas/${b.slug}`}
                      className="group flex items-center justify-between py-3 text-xs font-medium text-foreground/80 hover:text-accent transition-colors"
                    >
                      <span>{b.title}</span>
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-accent"
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
