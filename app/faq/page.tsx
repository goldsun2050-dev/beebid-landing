import type { Metadata } from 'next'
import Script from 'next/script'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/marketing/PageHero'
import { FaqAccordion } from '@/components/marketing/FaqAccordion'
import { CtaBand } from '@/components/marketing/CtaBand'
import { FAQS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about BeeBid — AI resume tailoring, browser autofill, data handling, and pricing.',
  alternates: { canonical: '/faq' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function FaqPage() {
  return (
    <>
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={FAQS} />
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
