import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { HeroVideoBackground } from '@/components/hero-video'
import { projects, sectors } from '@/lib/content'

export default function HomePage() {
  return (
    <PageFrame>
      <section className="relative flex min-h-screen items-end bg-primary px-6 pb-16 pt-36 text-primary-foreground lg:px-10 lg:pb-24">
        {/* Animated Background Video & Overlays */}
        <HeroVideoBackground />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/90 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Tanzania · East Africa · Since 2009
            </div>
            <h1 className="max-w-4xl text-balance text-5xl font-medium leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[7.5rem] drop-shadow-sm">
              Building a more <em className="font-serif font-normal text-accent italic">prosperous</em> future.
            </h1>
          </div>
          <div className="max-w-sm lg:mb-2 lg:justify-self-end">
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/85 drop-shadow-sm">A Tanzanian-owned investment and development company creating sustainable growth across the sectors that matter most.</p>
            <Link href="/about" className="group inline-flex items-center gap-3 border-b border-primary-foreground/40 pb-3 text-sm font-semibold uppercase tracking-[.15em] transition-all hover:border-accent hover:text-accent">Explore KIC <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 z-10 hidden text-xs uppercase tracking-[.2em] text-primary-foreground/60 backdrop-blur-xs lg:block">Scroll to discover ↓</div>
      </section>

      <div className="ticker" aria-label="KIC investment themes"><div className="ticker-track"><span>Local conviction</span><span>Patient capital</span><span>Sustainable prosperity</span><span>East African opportunity</span><span>Local conviction</span><span>Patient capital</span><span>Sustainable prosperity</span><span>East African opportunity</span></div></div>

      <section className="reveal mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-10 lg:py-36">
        <div>
          <p className="eyebrow mb-6 text-accent">Our perspective</p>
          <div className="relative aspect-square w-full overflow-hidden rounded-xs bg-secondary shadow-md">
            <Image
              src="/images/perspective.png"
              alt="KIC Ltd sustainable growth and perspective"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
        <div>
          <h2 className="max-w-4xl text-balance text-4xl font-medium leading-tight tracking-[-.04em] sm:text-6xl">We invest in ideas that make life better — and places stronger.</h2>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <p className="leading-relaxed text-muted-foreground">KIC Ltd is a Tanzanian-owned investment and development company headquartered in Mufindi District, Iringa Region.</p>
            <p className="leading-relaxed text-muted-foreground">Our approach is long-term, locally driven and built on partnership. We bring patient capital, practical ambition and accountability to every opportunity.</p>
          </div>
          <Link href="/about" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[.15em] text-accent">Our story <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        </div>
      </section>

      <section className="reveal bg-secondary px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-16 flex items-end justify-between gap-6"><div><p className="eyebrow mb-5">Where we focus</p><h2 className="text-4xl font-medium tracking-[-.04em] sm:text-6xl">The essentials<br /><em className="font-serif font-normal">of progress.</em></h2></div><Link href="/business-areas" className="hidden text-sm font-semibold uppercase tracking-[.15em] text-accent md:block">View all areas <ArrowUpRight className="ml-2 inline" size={16} /></Link></div><div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">{sectors.map((sector) => <article key={sector.number} className="sector-card"><span className="text-xs text-muted-foreground">{sector.number}</span><h3 className="mt-16 text-2xl font-medium tracking-tight">{sector.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{sector.text}</p><ArrowUpRight className="mt-12 text-accent" size={21} /></article>)}</div></div></section>

      <section className="reveal mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow mb-5">In motion</p><h2 className="text-4xl font-medium tracking-[-.04em] sm:text-6xl">Projects with<br /><em className="font-serif font-normal">purpose.</em></h2></div><div className="divide-y divide-border border-y border-border">{projects.map((project) => <Link href={`/portfolio/${project.slug}`} key={project.slug} className="group grid gap-5 py-8 sm:grid-cols-[1fr_1.2fr] sm:items-start"><div><p className="text-xs uppercase tracking-[.15em] text-accent">{project.meta}</p><h3 className="mt-3 text-2xl font-medium tracking-tight transition-colors group-hover:text-accent">{project.name}</h3></div><div className="flex items-start justify-between gap-5"><p className="max-w-sm leading-relaxed text-muted-foreground">{project.text}</p><ArrowUpRight size={20} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></Link>)}</div></div></section>

      <section className="bg-accent px-6 py-24 text-accent-foreground lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr]"><h2 className="text-balance text-4xl font-medium leading-tight tracking-[-.04em] sm:text-6xl">Long-term thinking.<br /><em className="font-serif font-normal">Local conviction.</em></h2><div className="lg:pt-2"><p className="max-w-md text-lg leading-relaxed">Our work is guided by integrity, excellence, innovation and sustainability — with community empowerment at the heart of every decision.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[.15em]">Partner with us <ArrowUpRight size={16} /></Link></div></div></section>
    </PageFrame>
  )
}
