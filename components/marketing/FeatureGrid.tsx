import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FEATURES } from '@/lib/content'
import { FEATURE_ICONS } from './icon-map'
import { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'

export function FeatureGrid({ linkToDetail = true }: { linkToDetail?: boolean }) {
  return (
    <AnimateStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURES.map((feature) => {
        const Icon = FEATURE_ICONS[feature.icon]
        const Card = (
          <div className="hover-lift group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-sm font-bold text-slate-900">{feature.title}</h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">{feature.tagline}</p>
            {linkToDetail && (
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Learn more{' '}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            )}
          </div>
        )
        return (
          <AnimateStaggerItem key={feature.slug}>
            {linkToDetail ? (
              <Link href={`/features/${feature.slug}`} className="block h-full">
                {Card}
              </Link>
            ) : (
              Card
            )}
          </AnimateStaggerItem>
        )
      })}
    </AnimateStagger>
  )
}
