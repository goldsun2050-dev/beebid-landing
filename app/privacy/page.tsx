import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/marketing/PageHero'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How BeeBid collects, uses, and protects your data across the web app and browser extension.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

const SECTIONS = [
  {
    title: 'What we collect',
    body: 'Account details you provide (name, email), the profile data you add (work history, education, skills), documents you generate (resumes, cover letters), and the job postings you tailor applications for. The browser extension reads form fields on pages where you click Autofill so it can match them to your profile.',
  },
  {
    title: 'How we use it',
    body: 'Your profile data powers AI resume tailoring and autofill for your own applications. We use aggregated, non-identifying usage data to improve field matching and reliability. We do not sell your personal data.',
  },
  {
    title: 'AI processing',
    body: 'When you tailor a resume or cover letter, the relevant job description and your profile data are sent to our AI processing pipeline to generate the tailored document. Generated content is stored in your account so you can review, edit, and reuse it.',
  },
  {
    title: 'Data sharing',
    body: 'We do not sell your data. Within an organization, profile and application data you choose to share is visible to teammates with appropriate roles. We use infrastructure and AI providers to operate the service, bound by confidentiality and data-processing terms.',
  },
  {
    title: 'Your controls',
    body: 'You can edit or delete profile data, resumes, and cover letters from your account at any time. Deleting your account removes your profile data from active systems, subject to any legal retention requirements.',
  },
  {
    title: 'Contact',
    body: 'Questions about this policy or your data can be sent to the support contact listed in your BeeBid account.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" description="Last updated September 2026." />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
