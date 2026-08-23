import Link from 'next/link'
import { ArrowUpRight, Target, Globe, Handshake, TrendingUp, CheckCircle2, Sparkles, Building } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { pageCopy, strategicObjectives, investmentThemes, partnerTypes } from '@/lib/content'

export const metadata = {
  title: 'Our Strategy & Objectives | Kigola International Company Limited',
  description: 'Learn about KIC Ltd’s strategic objectives, investment opportunities, and partnership approach across Tanzania and East Africa.',
}

export default function StrategyPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Strategic Pillars"
        title="Investing With Purpose."
        intro="KIC’s capital deployment and project development are anchored in clear, documented objectives: expanding clean energy, improving healthcare access, creating employment, and driving sustainable agriculture in Tanzania."
        bgImage="/images/strategy-hero.jpg"
      />

      {/* Section 1: Our Objectives (6 Strategic Pillars) */}
      <section id="objectives" className="scroll-mt-24 border-b border-border/80 bg-background px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent font-semibold">Strategic Pillars</p>
            <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              Our Core Objectives
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Rather than generic ambitions, KIC is focused on six defined objectives that guide asset evaluation and capital allocation.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {strategicObjectives.map((obj) => (
              <div
                key={obj.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <span className="font-mono text-base font-bold text-accent">
                      {obj.number}
                    </span>
                    <Target size={18} className="text-accent/60 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="mt-6 text-xl font-serif font-medium tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {obj.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {obj.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Investment Opportunities (8 Priority Areas) */}
      <section id="opportunities" className="scroll-mt-24 border-b border-border/80 bg-secondary/30 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-accent font-semibold">Investment Priorities</p>
              <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
                Invest in Projects That Matter
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                KIC specifically welcomes investor participation, co-financing, and development partnerships across eight priority themes.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:underline"
            >
              <span>Submit Investment Inquiry</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {investmentThemes.map((theme) => (
              <Link
                key={theme.title}
                href={theme.link}
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
              >
                <div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                    {theme.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {theme.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                  <span>Explore</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Partnership Approach */}
      <section id="partnerships" className="scroll-mt-24 border-b border-border/80 bg-background px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent font-semibold">Collaboration Framework</p>
            <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              Building Through Partnership
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We actively collaborate with domestic and international institutions, bringing local execution capability, regulatory certainty, and transparent governance to joint projects.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((pt) => (
              <div
                key={pt.title}
                className="rounded-xl border border-border/80 bg-card p-6 shadow-xs"
              >
                <div className="flex items-center gap-2 text-accent">
                  <Handshake size={18} />
                  <h3 className="font-medium text-foreground text-base">
                    {pt.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {pt.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-[#072417] hover:ring-1 hover:ring-accent/40 active:scale-98"
            >
              <span>Partner With Kigola International</span>
              <ArrowUpRight size={16} className="text-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: East Africa Ambition */}
      <section id="ambition" className="scroll-mt-24 bg-[#061e13] px-6 py-20 text-primary-foreground lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="eyebrow text-accent font-semibold">Long-Term Trajectory</p>
              <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight sm:text-5xl">
                East Africa Ambition
              </h2>
              <p className="mt-6 text-base leading-relaxed text-primary-foreground/85">
                Headquartered in Mufindi District, Iringa Region, KIC’s growth trajectory begins with deep local root-building in Tanzania’s Southern Highlands, before extending strategic solutions across the wider East African Community (EAC).
              </p>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
                By proving commercial viability and environmental resilience in regional power, healthcare, and agribusiness assets, KIC creates repeatable models for high-impact capital deployment across East Africa.
              </p>
            </div>

            <div className="rounded-2xl border border-accent/20 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="text-xl font-serif font-medium text-accent">
                Our Long-Term Horizon
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>Establish dependable base-load clean energy assets feeding national power grids.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>Expand essential healthcare infrastructure and clinical training institutions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>Strengthen cross-border food security through commercial farming value chains.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>Act as an institutional bridge for international DFIs and private investors.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
