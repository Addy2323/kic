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

          {/* Founder Profile Card */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
            <div className="grid gap-8 md:grid-cols-[.4fr_1fr] md:items-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0c3120] to-[#05180f] text-accent text-3xl font-serif font-bold shadow-md">
                MLK
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

          {/* Corporate Functional Positions (CMS-ready) */}
          <div className="mt-12">
            <h3 className="text-xl font-serif font-medium text-foreground">
              Management & Operational Architecture
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Functional departments structured for rigorous project execution.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {company.roles.map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-3 rounded-xl border border-border/80 bg-secondary/30 p-4"
                >
                  <Briefcase size={16} className="text-accent shrink-0" />
                  <span className="text-xs font-semibold text-foreground">
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Team Structure */}
      <section id="team" className="scroll-mt-24 border-b border-border/80 bg-secondary/30 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent font-semibold">Organization</p>
            <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              The People Behind Our Vision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              KIC brings together specialists across engineering, healthcare management, agronomy, finance, and community liaison.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: 'Leadership', desc: 'Board governance & executive direction' },
              { title: 'Management', desc: 'Operational coordination & compliance' },
              { title: 'Energy & Infrastructure', desc: 'Hydropower, civil works & EPC management' },
              { title: 'Healthcare & Agriculture', desc: 'Hospital planning, farming & livestock' },
              { title: 'Finance & Administration', desc: 'Project financing, accounting & administration' },
            ].map((cat) => (
              <div
                key={cat.title}
                className="rounded-xl border border-border bg-card p-6 shadow-xs"
              >
                <UserCheck size={20} className="text-accent" />
                <h3 className="mt-4 font-semibold text-foreground text-sm">
                  {cat.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
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
