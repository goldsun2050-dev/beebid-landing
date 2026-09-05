import Link from 'next/link'
import { ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { HeroMockup } from '@/components/marketing/HeroMockup'
import { ResumeTailorDemo } from '@/components/marketing/ResumeTailorDemo'
import { FeatureGrid } from '@/components/marketing/FeatureGrid'
import { HowItWorks } from '@/components/marketing/HowItWorks'
import { DashboardPreview } from '@/components/marketing/DashboardPreview'
import { TeamPreview } from '@/components/marketing/TeamPreview'
import { PersonaScenarios } from '@/components/marketing/PersonaScenarios'
import { PricingTable } from '@/components/marketing/PricingTable'
import { FaqAccordion } from '@/components/marketing/FaqAccordion'
import { CtaBand } from '@/components/marketing/CtaBand'
import { FAQS } from '@/lib/content'
import { SIGNUP_URL } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_32rem_at_50%_-10%,rgba(79,70,229,0.12),transparent)]" />
        <div className="bg-grid absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <Container className="relative grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-10">
          <AnimateIn>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> AI-tailored resumes, one job at a time
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
              Every application, <span className="text-gradient-brand">tailored</span>. Applied in one click.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-slate-500 sm:text-lg">
              BeeBid rebuilds your resume around every job you apply to with AI, then autofills the
              application for you, grounded in your real experience, never fabricated.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button href={SIGNUP_URL} size="lg">
                Create your free account <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" /> Never fabricates experience
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" /> Autofills in seconds
              </span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <HeroMockup />
          </AnimateIn>
        </Container>
      </section>

      {/* AI tailoring spotlight */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="AI resume tailoring"
            title="A resume rebuilt around every job, not one resume reused everywhere"
            description="BeeBid re-frames your headline, summary, skills, and recent experience around the role you're applying to. Every claim traces back to real experience you already have."
          />
          <AnimateIn className="mt-12" delay={0.1}>
            <ResumeTailorDemo />
          </AnimateIn>
          <div className="mt-8 text-center">
            <Link
              href="/features/ai-tailoring"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
            >
              How AI tailoring works <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Feature grid */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Everything included"
            title="Everything your job search needs"
            description="One account for your profiles, your resumes, and the AI that tailors them, plus the extension that applies for you."
          />
          <div className="mt-12">
            <FeatureGrid />
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="From job posting to submitted application in minutes"
          />
          <div className="mt-12">
            <HowItWorks />
          </div>
        </Container>
      </section>

      {/* Product gallery: dashboard + teams */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Inside BeeBid"
            title="One home for every resume, and every teammate"
            description="A structured profile behind every tailored document, and shared organizations for coaches and hiring teams."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <AnimateIn>
              <DashboardPreview />
              <p className="mt-4 text-center text-sm font-medium text-slate-500">
                Every resume and cover letter you generate, kept in one library.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.12}>
              <TeamPreview />
              <p className="mt-4 text-center text-sm font-medium text-slate-500">
                Organizations bring shared job links and role-based access to the whole team.
              </p>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Personas */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Built for how you search" title="Wherever you are in the search, BeeBid fits in" />
          <div className="mt-12">
            <PersonaScenarios />
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Start free. Upgrade when you're applying at volume."
          />
          <div className="mt-12">
            <PricingTable />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
            >
              See full plan comparison <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-12">
            <FaqAccordion faqs={FAQS.slice(0, 4)} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover"
            >
              Read the full FAQ <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <CtaBand />
        </Container>
      </section>
    </>
  )
}
