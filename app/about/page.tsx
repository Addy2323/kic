import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Award,
  Lightbulb,
  Leaf,
  Users,
  Building,
  Target,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Briefcase,
  UserCheck,
} from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { company, coreValues, pageCopy } from '@/lib/content'

export const metadata = {
  title: 'About Us | Kigola International Company Limited',
  description: 'Tanzanian-owned private investment and development company registered in 2009. Headquartered in Mufindi District, Iringa Region.',
}

export default function AboutPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Corporate Profile"
        title="Investing in Tanzania’s Sustainable Future."
        intro="Kigola International Company Limited is a Tanzanian-owned private investment and development company registered on 27 July 2009, operating across sectors critical to Tanzania’s long-term prosperity."
        bgImage="/images/about-hero.jpg"
      />

      {/* At a Glance Metric Bar */}
      <section className="border-b border-border/80 bg-secondary/40 px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-l-2 border-accent pl-5">
              <span className="font-mono text-3xl font-bold text-foreground">2009</span>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Year Established
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <span className="text-xl font-serif font-bold text-foreground">Tanzania</span>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Home Market
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <span className="text-xl font-serif font-bold text-foreground">Mufindi, Iringa</span>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Head Office Location
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <span className="text-xl font-serif font-bold text-foreground">Multi-Sector</span>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Investment & Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Our Story & History */}
      <section id="story" className="scroll-mt-24 border-b border-border/80 bg-background px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="eyebrow text-accent font-semibold">Our History</p>
              <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
                Our Journey Since 2009
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                Kigola International Company Limited was officially incorporated in Tanzania on <strong>27 July 2009</strong> with the conviction that sustainable private capital can accelerate regional development.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Over the years, KIC has developed high-impact project opportunities in renewable energy, healthcare infrastructure, commercial agriculture, and essential services across the Southern Highlands and broader East Africa.
              </p>
            </div>

            {/* Verified Milestones Box */}
            <div id="milestones" className="scroll-mt-24 rounded-2xl border border-border bg-card p-8 shadow-xs">
              <span className="eyebrow text-accent font-semibold">Corporate Milestones</span>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-xs font-bold text-accent">
                    09
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">2009 — KIC Officially Registered</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Kigola International Company Limited is incorporated in the United Republic of Tanzania.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-xs font-bold text-accent">
                    FL
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Flagship Project Pipeline Formulated</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Initiation of Nyalawa Hydropower Project (5 MW), Kigola Hospital, Medical College, and Commercial Farm ventures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission */}
      <section id="vision-mission" className="scroll-mt-24 border-b border-border/80 bg-[#061e13] px-6 py-20 text-primary-foreground lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Vision */}
            <div className="rounded-2xl border border-accent/20 bg-white/5 p-8 backdrop-blur-md sm:p-10">
              <div className="flex items-center gap-2 text-accent">
                <Target size={20} />
                <span className="eyebrow font-semibold">Our Vision</span>
              </div>
              <blockquote className="mt-6 font-serif text-2xl font-light leading-snug text-primary-foreground/95 sm:text-3xl">
                “To become one of East Africa’s leading investment companies in renewable energy, healthcare, agriculture, and sustainable infrastructure.”
              </blockquote>
            </div>

            {/* Mission */}
            <div className="rounded-2xl border border-accent/20 bg-white/5 p-8 backdrop-blur-md sm:p-10">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles size={20} />
                <span className="eyebrow font-semibold">Our Mission</span>
              </div>
              <blockquote className="mt-6 font-serif text-2xl font-light leading-snug text-primary-foreground/95 sm:text-3xl">
                “To develop innovative and sustainable projects that create employment, improve livelihoods, provide reliable energy, strengthen healthcare services, and contribute to Tanzania’s long-term economic development.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Leadership */}
      <section id="leadership" className="scroll-mt-24 border-b border-border/80 bg-background px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent font-semibold">Executive Leadership</p>
            <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              Leadership Driving Sustainable Growth
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Guiding KIC with local insight, disciplined governance, and a long-term development outlook.
            </p>
          </div>

          {/* Managing Director Highlight Card */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
            <div className="grid gap-8 md:grid-cols-[.4fr_1fr] md:items-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0c3120] to-[#05180f] text-accent text-3xl font-serif font-bold shadow-md">
                MK
              </div>
              <div>
                <span className="eyebrow text-accent font-semibold">
                  {company.founder.title}
                </span>
                <h3 className="mt-2 text-2xl font-serif font-medium text-foreground sm:text-3xl">
                  {company.founder.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {company.founder.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Organizational Structure */}
      <section id="team" className="scroll-mt-24 border-b border-border/80 bg-secondary/30 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent font-semibold">Organization</p>
            <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              KIC Company Group — Organizational Structure
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our executive leadership and operational management structure driving KIC’s investment and project execution across East Africa.
            </p>
          </div>

          {/* Org Chart Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.team.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-accent/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 font-serif font-bold text-accent">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-accent">
                    {member.category}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Table View */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
            <div className="border-b border-border bg-secondary/50 px-6 py-4">
              <h3 className="font-serif text-lg font-medium text-foreground">
                KIC Company Group — Executive Directory
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-secondary/20 text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Name</th>
                    <th className="px-6 py-3 font-semibold">Official Role</th>
                    <th className="px-6 py-3 font-semibold">Department / Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {company.team.map((m) => (
                    <tr key={m.name} className="hover:bg-secondary/10 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{m.name}</td>
                      <td className="px-6 py-4 text-accent font-semibold">{m.role}</td>
                      <td className="px-6 py-4 text-muted-foreground">{m.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Core Values (7 Official Principles) */}
      <section id="core-values" className="scroll-mt-24 bg-background px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent font-semibold">Our Principles</p>
            <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              The Seven Values That Guide Us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Taken directly from KIC’s company profile, these seven principles define our culture and stakeholder commitments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:border-accent/40 hover:shadow-md"
              >
                <span className="font-mono text-xs font-bold text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-semibold text-foreground text-lg group-hover:text-accent transition-colors">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
