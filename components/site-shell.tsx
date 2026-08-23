'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight, Menu, X, Globe, Mail, MapPin, ChevronDown, ChevronRight, Sparkles } from 'lucide-react'
import { company, navItems, type NavItem } from '@/lib/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const pathname = usePathname()
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer and dropdown on route change
  useEffect(() => {
    setOpen(false)
    setActiveDropdown(null)
    setExpandedMobile(null)
  }, [pathname])

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Handle ESC key to close active dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
      leaveTimerRef.current = null
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
    }
    leaveTimerRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 180)
  }

  const toggleMobileAccordion = (label: string) => {
    setExpandedMobile((prev) => (prev === label ? null : label))
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? 'bg-[#faf8f3] text-[#05180f] shadow-2xl border-b border-border py-3.5'
          : scrolled
          ? 'border-b border-border/80 bg-background/90 shadow-md backdrop-blur-xl py-2.5 sm:py-3'
          : 'border-b border-border/40 bg-background/80 backdrop-blur-md py-4 sm:py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand Logo & Identifier */}
        <Link
          href="/"
          className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
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

        {/* Desktop Navigation Links with Dropdowns */}
        <nav
          className="hidden items-center gap-1 xl:gap-2 lg:flex"
          aria-label="Main navigation"
          onMouseLeave={handleMouseLeave}
        >
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0)
            const isDropdownOpen = activeDropdown === item.label
            const isParentActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href))

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isParentActive
                      ? 'text-accent font-bold'
                      : 'text-foreground/75 hover:text-foreground hover:bg-foreground/5'
                  }`}
                >
                  {item.label}
                  {isParentActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-accent animate-in fade-in zoom-in duration-300" />
                  )}
                </Link>
              )
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
              >
                <button
                  type="button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="menu"
                  aria-controls={`dropdown-${item.label}`}
                  onClick={() =>
                    setActiveDropdown(isDropdownOpen ? null : item.label)
                  }
                  onFocus={() => handleMouseEnter(item.label)}
                  className={`group flex items-center gap-1 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isParentActive || isDropdownOpen
                      ? 'text-accent font-bold bg-accent/5'
                      : 'text-foreground/75 hover:text-foreground hover:bg-foreground/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180 text-accent' : 'text-muted-foreground/70 group-hover:text-foreground'
                    }`}
                  />
                  {isParentActive && !isDropdownOpen && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-accent animate-in fade-in zoom-in duration-300" />
                  )}
                </button>

                {/* Dropdown Floating Panel */}
                {isDropdownOpen && (
                  <div
                    id={`dropdown-${item.label}`}
                    role="menu"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 z-50 w-[540px] max-w-[90vw] origin-top rounded-2xl border border-accent/20 bg-[#061e13]/95 p-5 text-white shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    {/* Header bar in dropdown */}
                    <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <Link
                          href={item.href}
                          className="group/main inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent hover:text-white transition-colors"
                        >
                          <span>{item.label} Overview</span>
                          <ArrowUpRight size={13} className="transition-transform group-hover/main:translate-x-0.5 group-hover/main:-translate-y-0.5" />
                        </Link>
                        {item.description && (
                          <p className="mt-1 text-[11px] text-white/65 leading-snug">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Sub-items grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                          className="group/item flex flex-col rounded-xl p-2.5 transition-all duration-150 hover:bg-white/10 hover:ring-1 hover:ring-accent/40"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium tracking-wide text-white group-hover/item:text-accent transition-colors">
                              {sub.label}
                            </span>
                            <ChevronRight
                              size={12}
                              className="text-white/40 opacity-0 -translate-x-1 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-accent"
                            />
                          </div>
                          {sub.description && (
                            <span className="mt-0.5 text-[10.5px] leading-tight text-white/60 group-hover/item:text-white/80 transition-colors">
                              {sub.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Desktop Right Action Area: Tanzania Region & Standalone CTA */}
        <div className="hidden items-center gap-5 md:flex">
          {/* Region Badge */}
          <div className="hidden items-center gap-1.5 text-[11px] font-medium tracking-wider text-muted-foreground/85 xl:flex">
            <Globe size={13} className="text-accent" />
            <span>Tanzania · EA</span>
          </div>

          <div className="hidden h-4 w-px bg-border xl:block" />

          {/* Standalone Primary CTA */}
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
            className="rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground shadow-xs"
          >
            Partner
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/90 text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Content */}
      {open && (
        <div className="mt-3.5 border-t border-border/80 bg-[#faf8f3] text-[#05180f] px-6 py-6 lg:hidden max-h-[calc(100vh-76px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-6 max-w-lg mx-auto w-full pb-16">
            <div className="flex items-center justify-between border-b border-[#05180f]/10 pb-3">
              <span className="eyebrow text-[11px] text-[#05180f]/60 font-bold tracking-widest">
                Directory & Navigation
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#8c6d23]">
                <Globe size={13} />
                <span>Tanzania · EA</span>
              </div>
            </div>

            {/* Mobile Accordion Nav */}
            <nav className="flex flex-col divide-y divide-[#05180f]/10">
              {navItems.map((item, idx) => {
                const hasChildren = Boolean(item.children && item.children.length > 0)
                const isExpanded = expandedMobile === item.label
                const isParentActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href))

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
                        isParentActive
                          ? 'text-[#8c6d23] font-bold pl-2 border-l-2 border-[#8c6d23]'
                          : 'text-[#05180f] hover:text-[#8c6d23]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-[#05180f]/50 font-mono">0{idx + 1}</span>
                    </Link>
                  )
                }

                return (
                  <div key={item.label} className="py-2">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(item.label)}
                      className={`flex w-full items-center justify-between py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
                        isParentActive || isExpanded ? 'text-[#8c6d23] font-bold' : 'text-[#05180f]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#05180f]/50 font-mono">0{idx + 1}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#8c6d23]' : 'text-[#05180f]/60'
                          }`}
                        />
                      </div>
                    </button>

                    {/* Accordion Expandable Content */}
                    {isExpanded && (
                      <div className="mb-3 space-y-1.5 rounded-xl border border-[#05180f]/10 bg-white p-3 shadow-xs animate-in slide-in-from-top-2 duration-200">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#8c6d23] hover:bg-[#8c6d23]/10 transition-colors"
                        >
                          <span>{item.label} Overview</span>
                          <ArrowUpRight size={13} />
                        </Link>
                        <div className="h-px bg-[#05180f]/10 my-1" />
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="flex flex-col rounded-lg px-3 py-2 text-[#05180f]/85 hover:bg-[#faf8f3] hover:text-[#8c6d23] transition-colors"
                          >
                            <span className="text-xs font-medium tracking-wide">
                              {sub.label}
                            </span>
                            {sub.description && (
                              <span className="text-[10px] text-[#05180f]/60 leading-tight">
                                {sub.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>

            {/* Mobile Bottom Quick Actions */}
            <div className="border-t border-[#05180f]/10 pt-4 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0c3120] py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md transition-colors hover:bg-[#05180f]"
              >
                <span>Partner with us</span>
                <ArrowUpRight size={16} className="text-[#c5a059]" />
              </Link>
              <div className="flex items-center justify-between text-xs text-[#05180f]/70 px-1">
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
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
  bgImage,
}: {
  eyebrow: string
  title: string
  intro: string
  bgImage?: string
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-[#061e13] px-6 pb-20 pt-40 text-primary-foreground lg:px-10 lg:pb-28 lg:pt-48">
      {/* Background Image & Dual Gradient Overlays */}
      {bgImage && (
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
          {/* Left-to-Right Smooth Deep-Green Gradient Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051a10] via-[#051a10]/85 via-50% to-[#051a10]/25" />
          
          {/* Top & Bottom Depth Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051a10] via-transparent to-[#051a10]/60" />
          
          {/* Subtle Multiply Tint */}
          <div className="absolute inset-0 bg-[#072417]/35 mix-blend-multiply" />
        </div>
      )}

      {/* Ambient glow when no background image */}
      {!bgImage && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(197,160,89,0.12),transparent_70%)] pointer-events-none" />
      )}

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {eyebrow}
        </div>
        <h1 className="max-w-5xl text-balance text-5xl font-medium leading-[.98] tracking-[-.055em] text-primary-foreground drop-shadow-sm sm:text-7xl lg:text-[7.2rem]">
          {title}
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-primary-foreground/85 drop-shadow-xs">
          {intro}
        </p>
      </div>
    </section>
  )
}
