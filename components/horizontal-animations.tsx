'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ChevronRight, ShieldCheck, Zap, HeartHandshake, Award, TrendingUp, Building2, Trees, Landmark } from 'lucide-react'
import { businessAreas, projects, ProjectDetail } from '@/lib/content'

/**
 * AnimateOnScroll: Triggers fadeInLeft, fadeInRight, or fadeInUp when scrolled into viewport
 */
export function AnimateOnScroll({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'none'
  delay?: number
  className?: string
}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0'
    switch (direction) {
      case 'left':
        return 'animate-in fade-in slide-in-from-left-12 duration-700 fill-mode-forwards'
      case 'right':
        return 'animate-in fade-in slide-in-from-right-12 duration-700 fill-mode-forwards'
      case 'up':
      default:
        return 'animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-forwards'
    }
  }

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}

/**
 * Infinite Horizontal Marquee for Partners & Stakeholders (Like CashMe Tanzania)
 */
export function PartnersHorizontalMarquee() {
  const partnersList = [
    { name: 'Government & Public Sector (PPP)', icon: Landmark, tag: 'Public Sector' },
    { name: 'Development Finance Institutions (DFIs)', icon: ShieldCheck, tag: 'DFI Co-Financing' },
    { name: 'Commercial & Investment Banks', icon: TrendingUp, tag: 'Financing' },
    { name: 'Renewable Energy Developers', icon: Zap, tag: 'Energy Partner' },
    { name: 'Healthcare & Medical Authorities', icon: HeartHandshake, tag: 'Healthcare' },
    { name: 'Agricultural Cooperatives & Off-Takers', icon: Trees, tag: 'Agribusiness' },
    { name: 'EPC & Infrastructure Contractors', icon: Building2, tag: 'Engineering' },
    { name: 'Institutional ESG Funds', icon: Award, tag: 'Impact Capital' },
  ]

  // Duplicate for infinite seamless marquee loop
  const duplicated = [...partnersList, ...partnersList]

  return (
    <section className="relative overflow-hidden border-y border-border/80 bg-[#05180f] py-10 text-white shadow-inner">
      <div className="mx-auto mb-6 max-w-7xl px-6 text-center lg:px-10">
        <span className="eyebrow text-accent tracking-[0.25em]">Strategic Ecosystem &amp; Partners</span>
        <h3 className="mt-1 text-xl font-serif font-medium text-white/90">
          Collaborating with Leading Public &amp; Private Institutions
        </h3>
      </div>

      <div className="marquee group relative flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex shrink-0 items-center gap-6 animate-marquee-left group-hover:pause">
          {duplicated.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={`${item.name}-${idx}`}
                className="flex items-center gap-3.5 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-semibold text-white/90 backdrop-blur-md transition-all duration-200 hover:border-accent/60 hover:bg-white/10 hover:text-accent"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Icon size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-accent/80 font-mono">{item.tag}</span>
                  <span className="tracking-wide text-xs">{item.name}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/**
 * 4-Step Horizontal Investment & Partnership Process (Like CashMe "How Does It Work")
 */
export function ProcessTimelineSection() {
  const steps = [
    {
      step: '01',
      title: 'Opportunity & Feasibility',
      subtitle: 'Rigorous Technical Assessment',
      description: 'Identifying high-impact assets with sustainable market demand, environmental viability, and alignment with national development priorities.',
      icon: '✦',
    },
    {
      step: '02',
      title: 'Stakeholder & ESG Due Diligence',
      subtitle: 'Responsible Community Alignment',
      description: 'Conducting comprehensive Environmental and Social Impact Assessments (ESIA), community consultations, and governance verification.',
      icon: '✦',
    },
    {
      step: '03',
      title: 'Co-Financing & EPC Execution',
      subtitle: 'Strategic Project Structuring',
      description: 'Mobilizing patient capital, partnering with accredited EPC contractors, and executing construction with strict quality and safety controls.',
      icon: '✦',
    },
    {
      step: '04',
      title: 'Long-Term Operation & Impact',
      subtitle: 'Enduring Regional Prosperity',
      description: 'Commissioning sustainable facilities that generate reliable clean energy, deliver essential healthcare, and empower local workforce.',
      icon: '✦',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-secondary/50 px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="eyebrow text-accent font-semibold">How KIC Operates</span>
          <h2 className="mt-3 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Our Investment &amp; <em className="font-serif font-normal text-accent">Delivery Journey</em>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            From project origination to long-term operational excellence, our structured approach ensures risk mitigation and lasting stakeholder value.
          </p>
        </div>

        {/* 4-Column Horizontal Cards with Responsive Slide-In */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => (
            <AnimateOnScroll
              key={item.step}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 150}
              className="relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-xl group"
            >
              {/* Step Top Badge */}
              <div>
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-mono text-sm font-bold shadow-xs group-hover:bg-[#0c3120] transition-colors">
                    {item.step}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-accent">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {/* Step Bottom Connection */}
              <div className="mt-6 flex items-center gap-2 pt-4 border-t border-border/40 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground">
                <span>Phase Complete</span>
                <ChevronRight size={14} className="text-accent transition-transform group-hover:translate-x-1" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Horizontal Flagship Projects Showcase Track
 */
export function HorizontalProjectsTrack() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow text-accent font-semibold">Portfolio in Focus</span>
            <h2 className="mt-3 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Flagship Assets <em className="font-serif font-normal text-accent">&amp; Developments</em>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight size={14} className="text-accent" />
          </Link>
        </div>

        {/* 2x2 Grid with Left/Right Horizontal Scroll Animation */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project: ProjectDetail, idx: number) => (
            <AnimateOnScroll
              key={project.slug}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={idx * 120}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden bg-[#061e13]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05180f] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 rounded-full bg-[#05180f]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent backdrop-blur-md">
                    {project.status}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/70">
                      {project.sector} · {project.location}
                    </span>
                    <h3 className="mt-1 text-2xl font-serif font-medium text-white group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {project.text}
                  </p>
                  
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs font-bold text-foreground">
                      {project.meta}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform">
                      View Details
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
