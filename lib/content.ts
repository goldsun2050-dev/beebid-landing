export type NavLink = {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '/features' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'For teams', href: '/for-teams' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
]

export type Feature = {
  slug: string
  icon: 'sparkles' | 'mouse-click' | 'file-stack' | 'users'
  title: string
  shortTitle: string
  tagline: string
  description: string
  metaDescription: string
  points: { title: string; body: string }[]
  steps: { title: string; body: string }[]
}

export const FEATURES: Feature[] = [
  {
    slug: 'ai-tailoring',
    icon: 'sparkles',
    title: 'AI resume tailoring',
    shortTitle: 'AI tailoring',
    tagline: 'A resume rebuilt around every job, never fabricated.',
    description:
      'BeeBid reads the job description and rebuilds your resume around it: headline, summary, skills, and the framing of your most recent experience all shift to match the role. Nothing is invented; tailoring only ever repositions evidence that already exists in your work history.',
    metaDescription:
      'BeeBid AI resume tailoring rebuilds your resume for every job description, with real role identity, real evidence, and never fabricated experience. See how it works.',
    points: [
      {
        title: 'Role-aware, not keyword-stuffed',
        body: 'A dedicated role-specialization pass decides whether a posting calls for a generalist or a specific platform/discipline identity, then carries that identity consistently from headline through your most recent role, instead of blindly stuffing in keywords from the posting.',
      },
      {
        title: 'Grounded in your real history',
        body: 'Every tailored line traces back to something you actually did. BeeBid repositions and re-emphasizes real experience; it does not invent employers, titles, or accomplishments.',
      },
      {
        title: 'A fresh pass for every application',
        body: 'Apply to five different roles and get five resumes, each built around that specific posting, not one generic resume reused everywhere.',
      },
      {
        title: 'Cover letters included',
        body: 'The same job context that drives resume tailoring also drafts a first pass at a cover letter, ready for you to review and send.',
      },
    ],
    steps: [
      { title: 'Paste or open the job posting', body: 'BeeBid reads the job description directly, or you point it at the listing you found.' },
      { title: 'AI rebuilds your resume', body: 'Headline, summary, skills, and recent experience are re-framed around what this specific role is asking for.' },
      { title: 'Review before you send', body: 'Every change is visible and editable, so you stay in control of what goes out under your name.' },
    ],
  },
  {
    slug: 'autofill',
    icon: 'mouse-click',
    title: 'One-click autofill',
    shortTitle: 'Autofill',
    tagline: 'Skip the retyping. Apply in seconds, not minutes.',
    description:
      'The BeeBid browser extension recognizes application forms on the job sites you already use and fills them from your saved profile: name, contact details, work history, education, and the custom questions that trip up most autofillers.',
    metaDescription:
      'The BeeBid browser extension autofills job application forms in one click, including custom screening questions, built for the sites job seekers actually apply on.',
    points: [
      {
        title: 'Built for real application forms',
        body: 'A priority-based field-matching system reads labels, placeholders, and ARIA attributes to fill forms accurately, including the multi-step flows common on ATS platforms.',
      },
      {
        title: 'Handles the tricky fields too',
        body: 'Phone country codes, salary expectations, notice period, EEO/diversity questions, and other fields that break simpler autofillers are matched with dedicated logic.',
      },
      {
        title: 'Custom field patterns',
        body: 'When a form asks something unusual, define a custom match pattern once and BeeBid recognizes it everywhere it appears again.',
      },
      {
        title: 'Plays nicely with React and Vue forms',
        body: 'BeeBid dispatches the same input and change events modern frameworks expect, so filled fields register correctly instead of silently failing validation.',
      },
    ],
    steps: [
      { title: 'Open a job application', body: 'Navigate to any application form on the sites you already apply on.' },
      { title: 'Click Autofill', body: 'BeeBid matches every field it recognizes against your saved profile.' },
      { title: 'Review and submit', body: 'Adjust anything that needs a human touch, then submit as you normally would.' },
    ],
  },
  {
    slug: 'resume-hub',
    icon: 'file-stack',
    title: 'One home for every resume',
    shortTitle: 'Resume hub',
    tagline: 'Structured data once. Every resume and cover letter, always in sync.',
    description:
      'Your work history, education, and skills live in one structured profile instead of scattered across a dozen resume files. Generate polished resumes and cover letters from that single source of truth, and keep a library of every version you have sent.',
    metaDescription:
      'Keep your work history, resumes, and cover letters in one structured BeeBid profile, always in sync, exportable, and ready to tailor for the next application.',
    points: [
      {
        title: 'Structured profile data',
        body: 'Work experience, education, and skills are stored as structured data, not just a static PDF, so tailoring and autofill can both draw on it accurately.',
      },
      {
        title: 'A file library that stays organized',
        body: 'Every resume and cover letter you generate is kept together, so you can find what you sent for a specific application later.',
      },
      {
        title: 'Answer history you can reuse',
        body: 'Once you have answered a screening question, BeeBid remembers it, so the next application with a similar question is even faster.',
      },
      {
        title: 'Organization templates',
        body: 'Teams can define shared resume templates and formatting so every generated document looks consistent, without extra manual work per application.',
      },
    ],
    steps: [
      { title: 'Build your profile once', body: 'Add your work history, education, and skills as structured data.' },
      { title: 'Generate tailored documents', body: 'Resumes and cover letters are produced from that profile for each job.' },
      { title: 'Everything stays organized', body: 'Every version lives in your library, linked back to the application it was made for.' },
    ],
  },
  {
    slug: 'teams',
    icon: 'users',
    title: 'Built for teams',
    shortTitle: 'For teams',
    tagline: 'Organizations, shared job links, and role-based access.',
    description:
      'Career coaches, staffing agencies, and hiring teams manage more than one candidate at a time. BeeBid organizations bring shared job links, member roles, and multiple candidate profiles into a single collaborative account.',
    metaDescription:
      'BeeBid for teams: organizations, member roles, and shared job links let career coaches and staffing teams collaborate on the same candidate pipeline.',
    points: [
      {
        title: 'Multiple profiles, one account',
        body: 'Manage every candidate profile you support, across every organization you belong to, without juggling separate logins.',
      },
      {
        title: 'Member roles',
        body: 'Control who can edit profiles, review tailored resumes, or just view application progress: access matches responsibility.',
      },
      {
        title: 'Shared job links',
        body: 'Add a job once and the whole team sees it, instead of everyone independently rediscovering the same posting.',
      },
      {
        title: 'A shared pipeline view',
        body: 'See autofill runs and application status across every candidate the team is supporting, in one place.',
      },
    ],
    steps: [
      { title: 'Create an organization', body: 'Invite the coaches, recruiters, or teammates who need access.' },
      { title: 'Assign roles', body: 'Give each member the right level of access to candidate profiles.' },
      { title: 'Collaborate on the pipeline', body: 'Share job links and track tailored applications together.' },
    ],
  },
]

export const featureBySlug = (slug: string) => FEATURES.find((f) => f.slug === slug)

export const HOW_IT_WORKS_STEPS = [
  {
    title: 'Build your profile',
    body: 'Add your work history, education, and skills once. BeeBid turns it into structured data it can reuse for every application.',
  },
  {
    title: 'Find a job and let AI tailor your resume',
    body: 'Open a posting and BeeBid rebuilds your resume and drafts a cover letter around that specific role, grounded in your real experience.',
  },
  {
    title: 'Autofill the application',
    body: 'The browser extension fills the form from your profile in seconds, including the custom questions that usually slow you down.',
  },
  {
    title: 'Review, submit, and track it',
    body: 'Everything is editable before you send. Every tailored resume and autofill run is saved to your history, so you always know what you sent where.',
  },
]

export type PricingPlan = {
  name: string
  audience: string
  description: string
  features: string[]
  cta: { label: string; href: string }
  highlighted?: boolean
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    audience: 'For getting started',
    description: 'Build your profile, install the extension, and try AI-tailored applications.',
    features: [
      'One candidate profile',
      'Browser extension autofill',
      'A limited number of AI-tailored resumes per month',
      'Resume and cover letter library',
    ],
    cta: { label: 'Get started free', href: '/pricing' },
  },
  {
    name: 'Pro',
    audience: 'For an active job search',
    description: 'Unlimited tailoring and the full toolkit for job seekers applying at volume.',
    features: [
      'Everything in Free',
      'Unlimited AI resume and cover letter tailoring',
      'Full answer history and custom field patterns',
      'Priority AI processing',
    ],
    cta: { label: 'Get started', href: '/pricing' },
    highlighted: true,
  },
  {
    name: 'Teams',
    audience: 'For coaches, agencies, and hiring teams',
    description: 'Organizations, member roles, and shared pipelines for supporting multiple candidates.',
    features: [
      'Everything in Pro',
      'Unlimited candidate profiles per organization',
      'Member roles and shared job links',
      'Organization resume templates',
    ],
    cta: { label: 'Talk to us', href: '/pricing' },
  },
]

export type Faq = { question: string; answer: string }

export const FAQS: Faq[] = [
  {
    question: 'Does BeeBid make things up on my resume?',
    answer:
      'No. Tailoring only repositions and re-emphasizes experience you already have: a different headline, a re-ordered skills list, a summary written around the role. It does not invent employers, titles, dates, or accomplishments.',
  },
  {
    question: 'Which job sites does the autofill extension work on?',
    answer:
      'BeeBid is built around the application forms job seekers actually encounter, including multi-step ATS-hosted forms. Field matching is pattern-based rather than tied to a fixed list of sites, and you can define custom field patterns for anything unusual.',
  },
  {
    question: 'Is beebid.vip the same as app.beebid.vip?',
    answer:
      'beebid.vip is the public site you are on now. Signing in or creating an account takes you to app.beebid.vip, where your profile, resumes, and application history live.',
  },
  {
    question: 'Can I use BeeBid for more than one candidate?',
    answer:
      'Yes. A single account can hold multiple candidate profiles, and BeeBid organizations let coaches, agencies, and hiring teams collaborate on shared job links and pipelines with role-based access.',
  },
  {
    question: 'Do I need the browser extension to use BeeBid?',
    answer:
      'The web app covers your profile, resume tailoring, and application history on its own. The extension adds one-click autofill on the job sites you apply on, and most people use both together.',
  },
  {
    question: 'What happens to my data?',
    answer:
      'Your profile and resume data are yours. BeeBid uses them to power tailoring and autofill for your own applications, not to build a marketing profile or resell your information.',
  },
]
