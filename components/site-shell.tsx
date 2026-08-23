'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X, Globe, Mail, MapPin } from 'lucide-react'
import { company, navItems } from '@/lib/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'border-b border-border/70 bg-background/90 shadow-sm backdrop-blur-xl py-3' 
          : 'border-b border-border/40 bg-background/75 backdrop-blur-md py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* Brand Logo & Identifier */}
        <Link 
          href="/" 
          className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" 
          aria-label="KIC Ltd Home"
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gradient-to-br from-[#0c3120] to-[#05180f] text-white shadow-xs ring-1 ring-white/10 transition-all duration-300 group-hover:scale-105 group-hover:ring-accent/50">
            <span className="font-serif text-sm font-semibold tracking-wider text-accent">KIC</span>
            <div className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-accent" />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-foreground transition-colors group-hover:text-accent sm:text-sm sm:tracking-[0.26em]">
              Kigola International
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
              Company Limited · Est. 2009
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 xl:gap-2 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 rounded-xs ${
                  isActive
                    ? 'text-accent font-bold'
                    : 'text-foreground/75 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-accent animate-in fade-in zoom-in duration-300" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Right Action Area */}
        <div className="hidden items-center gap-5 md:flex">
          {/* Subtle Region Badge */}
          <div className="hidden items-center gap-1.5 text-[11px] font-medium tracking-wider text-muted-foreground/75 xl:flex">
            <Globe size={13} className="text-accent" />
            <span>Tanzania · EA</span>
          </div>

          <div className="hidden h-4 w-px bg-border xl:block" />

          {/* Premium CTA Button */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-sm transition-all duration-300 hover:bg-[#072417] hover:shadow-md hover:ring-1 hover:ring-accent/40 active:scale-[0.98]"
          >
            <span>Partner with us</span>
            <ArrowUpRight 
              size={15} 
              className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground sm:px-4"
          >
            Partner
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background/80 text-foreground transition-colors hover:bg-secondary focus-visible:outline-none"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer / Navigation Overlay */}
      {open && (
        <div className="border-t border-border/80 bg-background/95 backdrop-blur-2xl px-6 py-8 shadow-2xl lg:hidden animate-in slide-in-from-top-2 duration-300">
          <div className="mx-auto max-w-lg flex flex-col gap-6">
            <p className="eyebrow text-[10px] text-muted-foreground/70">Navigation</p>
            <nav className="flex flex-col divide-y divide-border/50">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
                      isActive ? 'text-accent font-bold pl-2 border-l-2 border-accent' : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-muted-foreground font-mono">0{idx + 1}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="border-t border-border pt-6 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-md transition-colors hover:bg-[#072417]"
              >
                <span>Partner with us</span>
                <ArrowUpRight size={16} className="text-accent" />
              </Link>
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                <span>{company.email}</span>
                <span>Iringa, Tanzania</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary px-6 py-20 text-primary-foreground lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-accent text-sm font-serif font-bold text-accent-foreground shadow-xs">
                KIC
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-[0.25em]">
                  Kigola International
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/60">
                  Company Limited
                </span>
              </div>
            </div>
            <p className="mt-8 max-w-sm text-2xl font-light leading-snug text-primary-foreground/90">
              Partner with us to build enduring, sustainable prosperity across East Africa.
            </p>
          </div>

          <div>
            <p className="eyebrow text-accent">Get in touch</p>
            <div className="mt-5 space-y-3">
              <a 
                className="inline-flex items-center gap-2 text-lg text-primary-foreground/90 underline decoration-primary-foreground/30 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent" 
                href={`mailto:${company.email}`}
              >
                <Mail size={16} className="text-accent" />
                {company.email}
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-accent">Headquarters</p>
            <div className="mt-5 flex items-start gap-2.5 text-primary-foreground/75 leading-relaxed">
              <MapPin size={16} className="mt-1 shrink-0 text-accent" />
              <p>
                {company.location.map((x) => (
                  <span key={x} className="block">{x}</span>
                ))}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-5 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent/80">
            Investing with conviction · East Africa
          </span>
        </div>
      </div>
    </footer>
  )
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#082216] to-primary px-6 pb-20 pt-40 text-primary-foreground lg:px-10 lg:pb-28">
      {/* Subtle top ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(197,160,89,0.12),transparent_70%)] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="eyebrow mb-8 text-accent font-semibold tracking-[0.25em]">{eyebrow}</p>
        <h1 className="max-w-5xl text-balance text-5xl font-medium leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[7rem] drop-shadow-xs">
          {title}
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          {intro}
        </p>
      </div>
    </section>
  )
}
