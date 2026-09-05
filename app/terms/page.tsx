import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/marketing/PageHero'

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'The terms that govern your use of BeeBid, the web app, and the browser extension.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
}

const SECTIONS = [
  {
    title: 'Using BeeBid',
    body: 'BeeBid provides tools to manage your job-search profile, generate AI-tailored resumes and cover letters, and autofill job application forms through the browser extension. You are responsible for the accuracy of the information in your profile and for reviewing generated documents before submitting them to an employer.',
  },
  {
    title: 'Your account',
    body: 'You need an account to use BeeBid. Keep your credentials secure; you are responsible for activity under your account. Organization owners and admins are responsible for the members they invite.',
  },
  {
    title: 'Acceptable use',
    body: 'Use BeeBid for your own job search or, within an organization, for candidates you are authorized to support. Do not use BeeBid to submit applications on forms or sites you are not authorized to interact with, or to misrepresent someone else’s qualifications without their consent.',
  },
  {
    title: 'AI-generated content',
    body: 'Tailored resumes and cover letters are generated from your existing profile data and the job description you provide. You are responsible for reviewing generated content before sending it. BeeBid is a drafting and autofill tool, not a substitute for your own judgment about what you submit.',
  },
  {
    title: 'Subscriptions and billing',
    body: 'Paid plans are billed on the cycle shown at checkout. You can change or cancel a plan from your account at any time; changes take effect per the terms shown when you make them.',
  },
  {
    title: 'Termination',
    body: 'You may stop using BeeBid and delete your account at any time. We may suspend or terminate accounts that violate these terms or misuse the service.',
  },
  {
    title: 'Changes to these terms',
    body: 'We may update these terms as the product evolves. Continued use of BeeBid after an update means you accept the revised terms.',
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of service" description="Last updated September 2026." />
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
