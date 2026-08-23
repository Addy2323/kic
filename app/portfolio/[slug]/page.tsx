import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PageFrame, PageHero } from '@/components/site-shell'
import { projects } from '@/lib/content'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  return {
    title: project ? `${project.name} | KIC Ltd` : 'Portfolio | KIC Ltd',
    description: project?.text,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()

  return (
    <PageFrame>
      <PageHero
        eyebrow={project.meta}
        title={project.name}
        intro={project.text}
        bgImage={project.image}
      />
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.2fr_.8fr] lg:px-10 lg:py-32">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
        <div className="lg:pt-8">
          <p className="eyebrow text-accent font-semibold">The opportunity</p>
          <p className="mt-7 text-2xl leading-snug font-medium text-foreground">
            {project.text}
          </p>
          <p className="mt-10 leading-relaxed text-muted-foreground">
            KIC brings long-term perspective, local knowledge and a commitment to responsible
            development to every project. This portfolio story will continue to grow as the work
            moves forward.
          </p>
        </div>
      </section>
    </PageFrame>
  )
}
