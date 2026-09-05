import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/marketing/PageHero'
import { HowItWorks } from '@/components/marketing/HowItWorks'
import { HeroMockup } from '@/components/marketing/HeroMockup'
import { ResumeTailorDemo } from '@/components/marketing/ResumeTailorDemo'
import { CtaBand } from '@/components/marketing/CtaBand'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Button } from '@/components/ui/Button'
import { SIGNUP_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'From building your profile to AI resume tailoring and one-click autofill — see the full BeeBid workflow, step by step.',
  alternates: { canonical: '/how-it-works' },
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From job posting to submitted application in minutes"
        description="Four steps, every time you apply — no rewriting your resume from scratch, no retyping the same form fields."
      >
        <Button href={SIGNUP_URL} size="lg">
          Get started free
        </Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <HowItWorks />
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Step 2 in detail: AI tailors your resume
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-500 sm:text-base">
            Every claim in the tailored version traces back to real experience already in your profile.
          </p>
          <AnimateIn className="mt-12">
            <ResumeTailorDemo />
          </AnimateIn>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Step 3 in detail: the extension autofills the form
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-500 sm:text-base">
            Every field the extension recognizes gets filled from your profile in seconds.
          </p>
          <AnimateIn className="mt-12 flex justify-center">
            <HeroMockup />
          </AnimateIn>
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
