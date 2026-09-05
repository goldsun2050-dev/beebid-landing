'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from './Logo'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS } from '@/lib/content'
import { LOGIN_URL, SIGNUP_URL } from '@/lib/site'
import { cn } from '@/lib/cn'

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900',
                  active && 'text-slate-900',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={LOGIN_URL}
            className="inline-flex h-9 items-center rounded-lg px-3.5 text-sm font-semibold text-slate-600 hover:bg-slate-100"
          >
            Sign in
          </a>
          <Button href={SIGNUP_URL} size="sm">
            Get started <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
            <a
              href={LOGIN_URL}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 text-sm font-semibold text-slate-700"
            >
              Sign in
            </a>
            <Button href={SIGNUP_URL} size="md" className="w-full">
              Get started <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
