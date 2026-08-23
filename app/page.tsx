import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { HeroVideoBackground } from '@/components/hero-video'
import {
  AnimateOnScroll,
  PartnersHorizontalMarquee,
  ProcessTimelineSection,
  HorizontalProjectsTrack,
} from '@/components/horizontal-animations'
import { sectors } from '@/lib/content'

export default function HomePage() {
  return (
    <PageFrame>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-end bg-primary px-6 pb-16 pt-36 text-primary-foreground lg:px-10 lg:pb-24">
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
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/85 drop-shadow-sm">
              A Tanzanian-owned investment and development company creating sustainable growth across the sectors that matter most.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 border-b border-primary-foreground/40 pb-3 text-sm font-semibold uppercase tracking-[.15em] transition-all hover:border-accent hover:text-accent"
            >
              <span>Explore KIC</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 z-10 hidden text-xs uppercase tracking-[.2em] text-primary-foreground/60 backdrop-blur-xs lg:block">
          Scroll to discover ↓
        </div>
      </section>

      {/* Ticker Banner */}
      <div className="ticker" aria-label="KIC investment themes">
        <div className="ticker-track">
          <span>Local conviction</span>
          <span>Patient capital</span>
          <span>Sustainable prosperity</span>
          <span>East African opportunity</span>
          <span>Renewable Hydropower</span>
          <span>Healthcare Infrastructure</span>
          <span>Local conviction</span>
          <span>Patient capital</span>
          <span>Sustainable prosperity</span>
          <span>East African opportunity</span>
          <span>Renewable Hydropower</span>
          <span>Healthcare Infrastructure</span>
        </div>
      </div>

      {/* Perspective Section with Left/Right Entrance Animations */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-10 lg:py-36 overflow-hidden">
        <AnimateOnScroll direction="left" delay={100}>
          <p className="eyebrow mb-6 text-accent">Our perspective</p>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-secondary shadow-lg ring-1 ring-border">
            <Image
              src="/images/perspective.png"
              alt="KIC Ltd sustainable growth and perspective"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right" delay={200}>
          <h2 className="max-w-4xl text-balance text-4xl font-medium leading-tight tracking-[-.04em] sm:text-6xl">
            We invest in ideas that make life better — and places stronger.
          </h2>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <p className="leading-relaxed text-muted-foreground">
              KIC Ltd is a Tanzanian-owned investment and development company headquartered in Mufindi District, Iringa Region.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our approach is long-term, locally driven and built on partnership. We bring patient capital, practical ambition and accountability to every opportunity.
            </p>
          </div>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[.15em] text-accent"
          >
            <span>Our story</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </AnimateOnScroll>
      </section>

      {/* Infinite Horizontal Partners & Stakeholder Marquee (CashMe Style) */}
      <PartnersHorizontalMarquee />

      {/* Focus Areas Section */}
      <section className="bg-secondary px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-5 text-accent">Where we focus</p>
              <h2 className="text-4xl font-medium tracking-[-.04em] sm:text-6xl">
                The essentials<br />
                <em className="font-serif font-normal text-accent">of progress.</em>
              </h2>
            </div>
            <Link
              href="/business-areas"
              className="hidden text-sm font-semibold uppercase tracking-[.15em] text-accent md:block"
            >
              View all areas <ArrowUpRight className="ml-2 inline" size={16} />
            </Link>
          </div>

          <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, idx) => (
              <AnimateOnScroll
                key={sector.number}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 100}
                className="sector-card"
              >
                <span className="text-xs text-accent font-mono font-bold">{sector.number}</span>
                <h3 className="mt-16 text-2xl font-medium tracking-tight">{sector.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{sector.text}</p>
                <ArrowUpRight className="mt-12 text-accent" size={21} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Horizontal Investment & Partnership Roadmap (CashMe Style) */}
      <ProcessTimelineSection />

      {/* Flagship Projects Showcase Track */}
      <HorizontalProjectsTrack />

      {/* Bottom CTA Banner */}
      <section className="bg-[#05180f] px-6 py-24 text-white lg:px-10 lg:py-32 border-t border-accent/20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <AnimateOnScroll direction="left">
            <span className="eyebrow text-accent font-semibold tracking-widest">Collaborate With Conviction</span>
            <h2 className="mt-3 text-balance text-4xl font-serif font-medium leading-tight tracking-tight sm:text-6xl text-white">
              Long-term thinking.<br />
              <em className="font-sans italic text-accent font-normal">Local conviction.</em>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={150} className="lg:pt-2">
            <p className="max-w-md text-lg leading-relaxed text-white/80">
              Our work is guided by integrity, excellence, innovation and sustainability — with community empowerment at the heart of every decision.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#05180f] shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <span>Partner with us</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/strategy"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10 hover:border-accent"
              >
                <span>Our Strategy</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </PageFrame>
  )
}
