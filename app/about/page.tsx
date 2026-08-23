import Image from 'next/image'
import { ShieldCheck, Award, Lightbulb, Leaf, Users } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { pageCopy } from '@/lib/content'

const foundationPrinciples = [
  {
    number: '01',
    title: 'Integrity',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Excellence',
    icon: Award,
  },
  {
    number: '03',
    title: 'Innovation',
    icon: Lightbulb,
  },
  {
    number: '04',
    title: 'Sustainability',
    icon: Leaf,
  },
  {
    number: '05',
    title: 'Community empowerment',
    icon: Users,
  },
]

export default function AboutPage() {
  const copy = pageCopy.about

  return (
    <PageFrame>
      {/* Custom Atmospheric Hero Section with Landscape Image Background */}
      <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-[#061e13] px-6 pb-20 pt-40 text-primary-foreground lg:px-10 lg:pb-28 lg:pt-48">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="The KIC Perspective - Tanzanian Highlands"
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
          {/* Left-to-Right Smooth Deep-Green Gradient Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051a10] via-[#051a10]/85 via-50% to-[#051a10]/20" />
          
          {/* Top & Bottom Depth Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051a10] via-transparent to-[#051a10]/60" />
          
          {/* Subtle Multiply Tint */}
          <div className="absolute inset-0 bg-[#072417]/35 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="eyebrow mb-8 font-semibold tracking-[0.25em] text-accent">
            {copy.eyebrow}
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-medium leading-[.98] tracking-[-.055em] text-primary-foreground drop-shadow-sm sm:text-7xl lg:text-[7.5rem]">
            {copy.title}
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-primary-foreground/85 drop-shadow-xs">
            {copy.intro}
          </p>
        </div>
      </section>

      {/* Our Foundation Section */}
      <section className="reveal mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          
          {/* Left Side: Foundation Image */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/foundation.png"
              alt="Built in Tanzania, Open to Possibility - KIC Ltd Foundation"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          {/* Right Side: Foundation Content & Principles */}
          <div>
            <p className="eyebrow mb-6 font-semibold uppercase tracking-[0.25em] text-foreground/75">
              Our Foundation
            </p>
            
            <h2 className="text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl leading-[1.08]">
              Built in Tanzania. <br />
              <em className="font-serif font-normal italic text-foreground">Open to possibility.</em>
            </h2>

            <p className="mt-8 text-base leading-relaxed text-muted-foreground/90 sm:text-lg">
              Since 2009, KIC has pursued projects that improve quality of life while supporting Tanzania&apos;s industrialization agenda. We pair deep local understanding with the standards and discipline required to build enduring businesses.
            </p>

            {/* Principles Grid with Icons & Numbers */}
            <div className="mt-12 divide-y divide-border/60 border-y border-border/60">
              {/* Row 1 */}
              <div className="grid divide-y divide-border/60 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <div className="flex items-center justify-between py-5 sm:pr-8">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="h-6 w-6 stroke-[1.5] text-foreground/80" />
                    <span className="text-base font-medium text-foreground">Integrity</span>
                  </div>
                  <span className="font-mono text-base font-semibold text-accent">01</span>
                </div>
                <div className="flex items-center justify-between py-5 sm:pl-8">
                  <div className="flex items-center gap-4">
                    <Award className="h-6 w-6 stroke-[1.5] text-foreground/80" />
                    <span className="text-base font-medium text-foreground">Excellence</span>
                  </div>
                  <span className="font-mono text-base font-semibold text-accent">02</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid divide-y divide-border/60 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <div className="flex items-center justify-between py-5 sm:pr-8">
                  <div className="flex items-center gap-4">
                    <Lightbulb className="h-6 w-6 stroke-[1.5] text-foreground/80" />
                    <span className="text-base font-medium text-foreground">Innovation</span>
                  </div>
                  <span className="font-mono text-base font-semibold text-accent">03</span>
                </div>
                <div className="flex items-center justify-between py-5 sm:pl-8">
                  <div className="flex items-center gap-4">
                    <Leaf className="h-6 w-6 stroke-[1.5] text-foreground/80" />
                    <span className="text-base font-medium text-foreground">Sustainability</span>
                  </div>
                  <span className="font-mono text-base font-semibold text-accent">04</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between py-5 sm:max-w-md">
                <div className="flex items-center gap-4">
                  <Users className="h-6 w-6 stroke-[1.5] text-foreground/80" />
                  <span className="text-base font-medium text-foreground">Community empowerment</span>
                </div>
                <span className="font-mono text-base font-semibold text-accent">05</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageFrame>
  )
}
