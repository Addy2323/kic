import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'
import { businessAreas } from '@/lib/content'

export const metadata = { title: 'Business Areas | KIC Ltd', description: 'Explore KIC Ltd investment and development areas across Tanzania.' }

export default function BusinessAreasPage() { return <PageFrame><PageHero eyebrow="Where we work" title="Essential sectors. Enduring value." intro="KIC Ltd brings local knowledge and a long-term perspective to the systems that support a more prosperous Tanzania." /><section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">{businessAreas.map((area, index) => <Link href={`/business-areas/${area.slug}`} key={area.slug} className="group border-b border-border p-8 transition-colors hover:bg-secondary"><span className="text-sm text-accent">0{index + 1}</span><h2 className="mt-16 text-2xl font-medium tracking-tight group-hover:text-accent">{area.title}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{area.text}</p><ArrowUpRight className="mt-12 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} /></Link>)}</div></section></PageFrame> } 

