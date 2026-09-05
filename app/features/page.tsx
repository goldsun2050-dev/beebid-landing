import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/marketing/PageHero'
import { FeatureGrid } from '@/components/marketing/FeatureGrid'
import { CtaBand } from '@/components/marketing/CtaBand'
import { Button } from '@/components/ui/Button'
import { SIGNUP_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore BeeBid: AI resume tailoring, one-click browser autofill, a home for every resume and cover letter, and tools built for teams.',
  alternates: { canonical: '/features' },
}

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything you need to apply faster, and better"
        description="From AI resume tailoring to one-click autofill, BeeBid handles the repetitive parts of applying so you can focus on finding the right role."
      >
        <Button href={SIGNUP_URL} size="lg">
          Get started free
        </Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <FeatureGrid />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <CtaBand />
        </Container>
      </section>
    </>
  )
}
