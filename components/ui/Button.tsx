import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md',
  secondary:
    'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300',
  ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm gap-1.5',
  md: 'h-11 px-5 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2.5',
}

type ButtonProps = {
  variant?: Variant
  size?: Size
  href: string
  external?: boolean
} & ComponentPropsWithoutRef<'a'>

export function Button({ variant = 'primary', size = 'md', href, external, className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  )
}
