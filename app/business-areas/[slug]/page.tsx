import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { businessAreas } from '@/lib/content'
export function generateStaticParams() { return businessAreas.map(area => ({ slug: area.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const area = businessAreas.find(item => item.slug === slug); return { title: `${area?.title ?? 'Business area'} | KIC Ltd`, description: area?.text } }
export default async function BusinessAreaDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = businessAreas.find((item) => item.slug === slug)
  if (!area) return null

  return (
    <PageFrame>
      <PageHero
        eyebrow="Business area"
        title={area.title}
        intro={area.text}
        bgImage="/images/business-hero.jpg"
      />
      <section className="mx-auto max-w-3xl px-6 py-24 lg:py-36">
        <p className="text-2xl leading-relaxed font-light text-foreground">
          We are developing a considered platform for opportunities in {area.title.toLowerCase()},
          grounded in local context, responsible execution and long-term partnership.
        </p>
        <Link
          href="/contact"
          className="group mt-12 inline-flex items-center gap-3 bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-[#072417] hover:ring-1 hover:ring-accent/40 active:scale-[0.98]"
        >
          <span>Discuss an opportunity</span>
          <ArrowUpRight size={16} className="text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </section>
    </PageFrame>
  )
}
