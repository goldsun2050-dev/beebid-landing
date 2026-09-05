import Link from 'next/link'
import { Logo } from './Logo'
import { FEATURES, NAV_LINKS } from '@/lib/content'

const legalLinks = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms of service', href: '/terms' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
            AI resume tailoring and one-click autofill for every job application, grounded in your
            real experience.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Product</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Features</h3>
          <ul className="mt-4 space-y-2.5">
            {FEATURES.map((feature) => (
              <li key={feature.slug}>
                <Link href={`/features/${feature.slug}`} className="text-sm text-slate-600 hover:text-slate-900">
                  {feature.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Legal</h3>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} BeeBid. All rights reserved.</p>
          <p>Made for job seekers who apply to a lot of jobs.</p>
        </div>
      </div>
    </footer>
  )
}
