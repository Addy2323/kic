'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Award,
} from 'lucide-react'
import { leadershipMembers, type LeadershipMember } from '@/lib/content'

interface LeadershipSectionProps {
  preview?: boolean
  showCta?: boolean
  id?: string
}

function InitialsFallback({ name }: { name: string }) {
  const initials = name
    .replace('Mrs. ', '')
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 3)
    .join('')

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#061e13] via-[#0b2f1e] to-[#04140d] text-accent p-6 text-center select-none">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 shadow-inner">
        <span className="font-serif text-3xl font-bold tracking-wider text-accent">
          {initials}
        </span>
      </div>
      <p className="mt-4 font-serif text-sm font-medium tracking-wide text-primary-foreground/90">
        {name}
      </p>
      <span className="mt-1 text-[11px] uppercase tracking-[0.2em] text-accent/80">
        KIC Company Group
      </span>
    </div>
  )
}

function PortraitImage({
  src,
  fallbackSrc,
  alt,
  name,
  priority = false,
}: {
  src: string
  fallbackSrc?: string
  alt: string
  name: string
  priority?: boolean
}) {
  const [currentSrc, setCurrentSrc] = useState<string>(src)
  const [failed, setFailed] = useState<boolean>(false)

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
    } else {
      setFailed(true)
    }
  }

  if (failed) {
    return <InitialsFallback name={name} />
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      priority={priority}
      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
      onError={handleError}
    />
  )
}

export function LeadershipSection({
  preview = false,
  showCta = true,
  id = 'leadership',
}: LeadershipSectionProps) {
  const [selectedMember, setSelectedMember] = useState<LeadershipMember | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Accessible keyboard handling (ESC to close) and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMember(null)
      }
    }

    if (selectedMember) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      // Auto-focus close button for screen readers and keyboard users
      setTimeout(() => closeButtonRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedMember])

  const openModal = (member: LeadershipMember) => {
    setSelectedMember(member)
  }

  const closeModal = () => {
    setSelectedMember(null)
  }

  return (
    <>
      <section
        id={id}
        className="scroll-mt-24 border-b border-border/80 bg-background px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <p className="eyebrow text-accent font-semibold tracking-[0.2em]">
                  OUR PEOPLE
                </p>
              </div>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Leadership &amp; Management
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                KIC brings together experienced leaders in investment, governance, operations, legal counsel, technology and sustainable development.
              </p>
            </div>

            {preview && (
              <div className="shrink-0 pt-2">
                <Link
                  href="/about#leadership"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-all hover:border-accent hover:bg-secondary hover:text-accent shadow-xs"
                >
                  <span>Full Leadership Directory</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            )}
          </div>

          {/* Five Profile Cards Grid */}
          {/* Desktop: 3 cards first row (cols 1-2, 3-4, 5-6), 2 cards centred second row (cols 2-3, 4-5) */}
          {/* Tablet: 2 columns */}
          {/* Mobile: 1 column */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {leadershipMembers.map((member, index) => {
              // Exact grid mapping:
              // Index 0, 1, 2: 1st row (3 cards, each spans 2 of 6 columns)
              // Index 3: 2nd row, starts at column 2 (occupies cols 2 & 3)
              // Index 4: 2nd row (occupies cols 4 & 5)
              // This leaves cols 1 and 6 as equal margins on desktop, perfectly centering the 2 cards!
              let colClasses = 'lg:col-span-2'
              if (index === 3) {
                colClasses =
                  'sm:col-span-1 lg:col-span-2 lg:col-start-2'
              } else if (index === 4) {
                colClasses =
                  'sm:col-span-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:col-span-2 lg:col-start-auto w-full'
              }

              return (
                <div
                  key={member.id}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/90 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl ${colClasses}`}
                >
                  <div>
                    {/* Portrait Image in 4:5 Aspect Ratio */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-secondary shadow-inner ring-1 ring-border/60">
                      <PortraitImage
                        src={member.image}
                        fallbackSrc={member.fallbackImage}
                        alt={member.alt}
                        name={member.name}
                        priority={index < 3}
                      />

                      {/* Leadership Badge above Founder & Chairwoman cards */}
                      {member.isLeadershipBadge && (
                        <div className="absolute left-3 top-3 z-10">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-[#061e13]/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent shadow-md backdrop-blur-md">
                            <Sparkles size={11} className="text-accent" />
                            Leadership
                          </span>
                        </div>
                      )}

                      {/* Subtle gradient vignette at bottom of image */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="mt-5">
                      <h3 className="font-serif text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                        {member.name}
                      </h3>
                      <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                        {member.title}
                      </p>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {member.shortProfile}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 border-t border-border/60 pt-4">
                    <button
                      type="button"
                      onClick={() => openModal(member)}
                      className="group/btn inline-flex w-full items-center justify-between rounded-xl border border-border bg-secondary/60 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-all hover:border-accent hover:bg-accent hover:text-[#061e13]"
                      aria-label={`View full profile of ${member.name}`}
                    >
                      <span>View Profile</span>
                      <ChevronRight
                        size={15}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA Section */}
          {showCta && (
            <div className="mt-20 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#061e13] via-[#092618] to-[#04140d] px-8 py-12 text-primary-foreground shadow-xl lg:px-16 lg:py-16">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <span className="eyebrow inline-flex items-center gap-2 text-accent font-semibold tracking-widest">
                    <Sparkles size={13} />
                    OPPORTUNITY &amp; PARTNERSHIP
                  </span>
                  <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Build With KIC
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                    Partner with a team committed to sustainable investment, innovation and lasting impact.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 lg:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#061e13] shadow-lg transition-transform hover:scale-105 active:scale-95"
                  >
                    <span>Partner With Us</span>
                    <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all hover:border-accent hover:bg-white/10"
                  >
                    <span>Our Portfolio</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Accessible Polished Profile Modal */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="leader-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
        >
          {/* Backdrop with Soft Blur */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal Card Container */}
          <div
            ref={modalRef}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-border/80 bg-[#fdfbf7] shadow-2xl animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header Bar with Close Button */}
            <div className="flex items-center justify-between border-b border-border/70 bg-secondary/50 px-6 py-4 sm:px-8">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="eyebrow text-xs font-bold tracking-[0.18em] text-foreground/80">
                  Leadership Biography
                </span>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-accent hover:bg-accent hover:text-[#061e13]"
                aria-label="Close profile modal"
              >
                <X size={18} className="transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr]">
                {/* Left Column: Portrait & Key Credentials */}
                <div className="flex flex-col">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-secondary shadow-md ring-1 ring-border">
                    <PortraitImage
                      src={selectedMember.image}
                      fallbackSrc={selectedMember.fallbackImage}
                      alt={selectedMember.alt}
                      name={selectedMember.name}
                      priority
                    />
                    {selectedMember.isLeadershipBadge && (
                      <div className="absolute left-3 top-3 z-10">
                        <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-[#061e13]/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent shadow-md backdrop-blur-sm">
                          <Sparkles size={11} className="text-accent" />
                          Leadership
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Credentials / Key Highlights Box */}
                  {selectedMember.credentials && selectedMember.credentials.length > 0 && (
                    <div className="mt-6 rounded-xl border border-border/80 bg-secondary/40 p-4">
                      <div className="flex items-center gap-2 text-accent">
                        <GraduationCap size={16} />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Qualifications &amp; Record
                        </h4>
                      </div>
                      <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                        {selectedMember.credentials.map((cred, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span className="leading-snug">{cred}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Areas of Expertise Tags */}
                  {selectedMember.expertise && selectedMember.expertise.length > 0 && (
                    <div className="mt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Core Competencies
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {selectedMember.expertise.map((exp, i) => (
                          <span
                            key={i}
                            className="rounded-lg border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-foreground/80 shadow-2xs"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Full Profile Narrative */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="eyebrow text-accent font-semibold tracking-wider">
                      {selectedMember.title}
                    </span>
                    <h3
                      id="leader-modal-title"
                      className="mt-2 font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl lg:text-4xl"
                    >
                      {selectedMember.name}
                    </h3>

                    {/* Introductory Lead Text */}
                    <p className="mt-4 border-l-2 border-accent pl-4 text-sm font-medium leading-relaxed text-foreground/90 sm:text-base">
                      {selectedMember.shortProfile}
                    </p>

                    {/* Full Profile Paragraphs */}
                    <div className="mt-6 space-y-4 border-t border-border/60 pt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {selectedMember.fullProfile.map((paragraph, index) => (
                        <p key={index} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Modal Footer Actions */}
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-6">
                    <p className="text-xs text-muted-foreground">
                      Kigola International Company Limited · Est. 2009
                    </p>
                    <div className="flex items-center gap-3">
                      <Link
                        href="/contact"
                        onClick={closeModal}
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:bg-primary/90"
                      >
                        <span>Connect With KIC</span>
                        <ArrowUpRight size={14} />
                      </Link>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-secondary"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
