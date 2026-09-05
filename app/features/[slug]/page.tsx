import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaBand } from '@/components/marketing/CtaBand'
import { FeatureGrid } from '@/components/marketing/FeatureGrid'
import { Button } from '@/components/ui/Button'
import { AnimateIn, AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { ResumeTailorDemo } from '@/components/marketing/ResumeTailorDemo'
import { HeroMockup } from '@/components/marketing/HeroMockup'
import { DashboardPreview } from '@/components/marketing/DashboardPreview'
import { TeamPreview } from '@/components/marketing/TeamPreview'
import { FEATURES, featureBySlug } from '@/lib/content'
import { SIGNUP_URL } from '@/lib/site'

const VISUALS: Record<string, React.ComponentType> = {
  'ai-tailoring': ResumeTailorDemo,
  autofill: HeroMockup,
  'resume-hub': DashboardPreview,
  teams: TeamPreview,
}

export function generateStaticParams() {
  return FEATURES.map((feature) => ({ slug: feature.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const feature = featureBySlug(slug)
  if (!feature) return {}

  return {
    title: feature.title,
    description: feature.metaDescription,
    alternates: { canonical: `/features/${feature.slug}` },
    openGraph: {
      title: `${feature.title} | BeeBid`,
      description: feature.metaDescription,
    },
  }
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const feature = featureBySlug(slug)
  if (!feature) notFound()

  const Visual = VISUALS[feature.slug]

  return (
    <>
      <PageHero eyebrow={feature.shortTitle} title={feature.title} description={feature.description}>
        <Button href={SIGNUP_URL} size="lg">
          Get started free
        </Button>
      </PageHero>

      {Visual && (
        <section className="py-16">
          <Container className="max-w-4xl">
            <AnimateIn>
              <Visual />
            </AnimateIn>
          </Container>
        </section>
      )}

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <AnimateStagger className="grid gap-5 sm:grid-cols-2">
            {feature.points.map((point) => (
              <AnimateStaggerItem key={point.title}>
                <div className="flex h-full gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{point.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{point.body}</p>
                  </div>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How it works
          </h2>
          <AnimateStagger className="mt-10 space-y-4">
            {feature.steps.map((step, i) => (
              <AnimateStaggerItem key={step.title}>
                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{step.body}</p>
                  </div>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Explore the rest of BeeBid
          </h2>
          <div className="mt-12">
            <FeatureGrid />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <CtaBand />
        </Container>
      </section>
    </>
  )
}
