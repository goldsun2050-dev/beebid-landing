import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/marketing/PageHero'
import { TeamPreview } from '@/components/marketing/TeamPreview'
import { PersonaScenarios } from '@/components/marketing/PersonaScenarios'
import { CtaBand } from '@/components/marketing/CtaBand'
import { AnimateIn, AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'
import { Button } from '@/components/ui/Button'
import { featureBySlug } from '@/lib/content'
import { SIGNUP_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'BeeBid for teams',
  description:
    'BeeBid organizations bring shared job links, member roles, and multiple candidate profiles into one collaborative account for career coaches, staffing agencies, and hiring teams.',
  alternates: { canonical: '/for-teams' },
}

const teamsFeature = featureBySlug('teams')!

export default function ForTeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="For teams"
        title="Support every candidate on your roster, from one account"
        description="Career coaches, staffing agencies, and hiring teams manage more than one candidate at a time. BeeBid organizations keep everyone on the same page."
      >
        <Button href={SIGNUP_URL} size="lg">
          Create an organization
        </Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="max-w-2xl">
          <AnimateIn>
            <TeamPreview />
          </AnimateIn>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <AnimateStagger className="grid gap-5 sm:grid-cols-2">
            {teamsFeature.points.map((point) => (
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
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Built for how coaching and hiring teams actually work
          </h2>
          <div className="mt-12">
            <PersonaScenarios />
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <CtaBand
            title="Bring your team into BeeBid"
            description="Create an organization, invite your coaches or recruiters, and start sharing job links and candidate pipelines."
          />
        </Container>
      </section>
    </>
  )
}
