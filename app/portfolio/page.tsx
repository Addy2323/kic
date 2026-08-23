import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { pageCopy, projects } from '@/lib/content'

export default function PortfolioPage() {
  return (
    <PageFrame>
      <PageHero {...pageCopy.portfolio} bgImage="/images/portfolio-hero.jpg" />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-3">
          {projects.map((project) => (
            <Link href={`/portfolio/${project.slug}`} key={project.slug} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xs bg-secondary shadow-sm">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <p className="eyebrow mt-6 text-accent">{project.meta}</p>
              <div className="mt-3 flex items-start justify-between gap-4">
                <h2 className="text-2xl font-medium tracking-tight group-hover:text-accent">
                  {project.name}
                </h2>
                <ArrowUpRight className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
