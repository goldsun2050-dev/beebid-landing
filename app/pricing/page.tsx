import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/marketing/PageHero'
import { PricingTable } from '@/components/marketing/PricingTable'
import { FaqAccordion } from '@/components/marketing/FaqAccordion'
import { CtaBand } from '@/components/marketing/CtaBand'
import { FAQS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'BeeBid pricing: start free with the core profile, tailoring, and autofill tools, then upgrade to Pro or Teams as your job search or candidate pipeline grows.',
  alternates: { canonical: '/pricing' },
}

const PRICING_FAQS = FAQS.filter((f) =>
  ['Can I use BeeBid for more than one candidate?', 'Do I need the browser extension to use BeeBid?', 'What happens to my data?'].includes(
    f.question,
  ),
)

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Start free. Upgrade when you're applying at volume."
        description="Every plan includes AI resume tailoring, one-click autofill, and a home for every resume you generate."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <PricingTable />
          <p className="mt-10 text-center text-sm text-slate-500">
            Need a custom plan for a larger team or agency? Reach out from your account once you sign up
            and we&rsquo;ll work it out together.
          </p>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container className="max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Pricing questions
          </h2>
          <div className="mt-10">
            <FaqAccordion faqs={PRICING_FAQS} />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <CtaBand title="Try BeeBid free" description="No credit card required to build your profile and start tailoring your first resume." />
        </Container>
      </section>
    </>
  )
}
