import { cn } from '@/lib/cn'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-2xl', align === 'center' ? 'text-center' : 'text-left ml-0', className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm">
          {eyebrow}
        </span>
      )}
      <h2 className={cn('text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl', eyebrow && 'mt-4')}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-slate-500 sm:text-lg">{description}</p>
      )}
    </div>
  )
}
