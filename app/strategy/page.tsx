import { ArrowUpRight } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { pageCopy } from '@/lib/content'

const steps = [['01', 'See the long view', 'We focus on structural opportunities where patient capital can create durable value over time.'], ['02', 'Build with partners', 'We work alongside communities, operators and institutions to turn conviction into execution.'], ['03', 'Measure what matters', 'Financial performance and positive local impact are connected outcomes, not competing priorities.']]
export default function StrategyPage() {
  return (
    <PageFrame>
      <PageHero {...pageCopy.strategy} bgImage="/images/strategy-hero.jpg" />
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="divide-y divide-border border-y border-border">
          {steps.map(([n, title, text]) => (
            <article
              key={n}
              className="group grid gap-8 py-10 transition-all hover:pl-3 lg:grid-cols-[.3fr_1fr_1.1fr] lg:items-center"
            >
              <span className="text-sm font-mono text-accent">{n}</span>
              <h2 className="text-3xl font-medium tracking-tight group-hover:text-accent">
                {title}
              </h2>
              <div className="flex items-start justify-between gap-5">
                <p className="max-w-md leading-relaxed text-muted-foreground">{text}</p>
                <ArrowUpRight className="shrink-0 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
