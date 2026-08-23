import Link from 'next/link'
import { ArrowUpRight, Leaf, Users, HeartHandshake, Globe2, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { pageCopy, sdgContributions } from '@/lib/content'

export const metadata = {
  title: 'Sustainability & ESG | Kigola International Company Limited',
  description: 'Sustainable Investment. Lasting Impact. Discover KIC Ltd’s approach to environmental stewardship, social impact, community development, and SDG alignment.',
}

export default function SustainabilityPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Sustainability"
        title="Sustainable Investment. Lasting Impact."
        intro="Environmental stewardship and social responsibility are not separate obligations for KIC—they are the foundational lens through which every project is conceived, evaluated, and operated."
        bgImage="/images/sustainability-hero.jpg"
      />

      {/* Section 1: Sustainability Approach */}
      <section id="approach" className="scroll-mt-24 border-b border-border/80 bg-background px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow text-accent font-semibold">Our Approach</p>
              <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
                Stewardship Embedded in Our Business Model
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                At Kigola International, we believe that durable commercial returns and positive local impact reinforce one another. Our investments prioritize essential sectors that uplift Tanzanian lives while safeguarding natural resources.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We develop clean energy assets that displace fossil fuels, build healthcare and education infrastructure that creates long-term human capacity, and modernize farming to promote food security and employment.
              </p>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-[#061e13] p-8 text-primary-foreground shadow-lg">
              <span className="eyebrow text-accent font-semibold">Corporate Positioning</span>
              <blockquote className="mt-4 text-2xl font-serif font-light leading-snug text-primary-foreground/95 sm:text-3xl">
                “Sustainable Investment. Lasting Impact.”
              </blockquote>
              <div className="mt-6 h-px bg-white/15" />
              <p className="mt-4 text-xs leading-relaxed text-primary-foreground/75">
                Every venture undertaken by KIC must satisfy stringent criteria for local relevance, ecological responsibility, and long-term societal resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Environmental Impact */}
      <section id="environmental" className="scroll-mt-24 border-b border-border/80 bg-secondary/30 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent">
              <Leaf size={20} />
              <p className="eyebrow font-semibold">Environmental Impact</p>
            </div>
            <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              Investing Responsibly in Our Environment
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our environmental strategy focuses on clean electricity generation, watershed preservation, climate resilience, and eco-friendly farming practices.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <span className="text-sm font-mono text-accent font-bold">01</span>
              <h3 className="mt-4 text-xl font-medium text-foreground">Clean Hydropower Generation</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Small hydropower generation harnesses run-of-river potential, reducing greenhouse gas emissions and displacing thermal generators.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <span className="text-sm font-mono text-accent font-bold">02</span>
              <h3 className="mt-4 text-xl font-medium text-foreground">Watershed & Soil Conservation</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Responsible land management, minimum-till agronomy, and water basin preservation around all agricultural and hydropower operations.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <span className="text-sm font-mono text-accent font-bold">03</span>
              <h3 className="mt-4 text-xl font-medium text-foreground">Water & Sanitation Infrastructure</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Safe water distribution networks and sanitation facilities that prevent contamination of local freshwater ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Social Impact */}
      <section id="social" className="scroll-mt-24 border-b border-border/80 bg-background px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent">
              <Users size={20} />
              <p className="eyebrow font-semibold">Social Upliftment</p>
            </div>
            <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              Investment That Improves Lives
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Measuring impact through human outcomes: dignified employment, accessible healthcare, professional education, and food security.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-medium text-foreground">Employment Creation</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Direct jobs across construction, agriculture, healthcare, and engineering, complemented by outgrower linkages.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-medium text-foreground">Healthcare Access</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Developing modern clinical facilities that reduce travel distances for emergency care and diagnostics in regional Tanzania.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-medium text-foreground">Healthcare Education</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Planned medical training college to nurture accredited clinical officers, nurses, and laboratory professionals.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-medium text-foreground">Food Security</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Boosting domestic grain and livestock yields to buffer local populations against market volatility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Community Development */}
      <section id="community" className="scroll-mt-24 border-b border-border/80 bg-secondary/30 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent">
              <HeartHandshake size={20} />
              <p className="eyebrow font-semibold">Grassroots Engagement</p>
            </div>
            <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              Growing Together With Our Communities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We operate in close consultation with local village leadership, district authorities, and community stakeholders to ensure equitable value-sharing.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-medium text-foreground">Local First Sourcing</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Prioritizing regional laborers, sub-contractors, and agricultural outgrowers across project sites.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Skills Transfer</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Providing hands-on vocational training in technical operations, mechanized farming, and facility maintenance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Verified Impact Reporting</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Publishing verified community milestone reports as projects move from planning to commissioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: SDG Contributions (8 UN Goals) */}
      <section id="sdgs" className="scroll-mt-24 bg-background px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent">
              <Globe2 size={20} />
              <p className="eyebrow font-semibold">Global Alignment</p>
            </div>
            <h2 className="mt-3 text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              UN Sustainable Development Goals Alignment
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              KIC’s activities align directly with eight United Nations Sustainable Development Goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sdgContributions.map((sdg) => (
              <div
                key={sdg.number}
                className="group rounded-xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:border-accent/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="font-mono text-sm font-bold text-accent">
                    SDG {sdg.number}
                  </span>
                  <Sparkles size={14} className="text-accent/50 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="mt-4 font-medium text-foreground text-sm">
                  {sdg.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {sdg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
