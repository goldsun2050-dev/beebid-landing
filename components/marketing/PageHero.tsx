import { Container } from '@/components/ui/Container'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(50rem_26rem_at_50%_-20%,rgba(79,70,229,0.12),transparent)]" />
      <Container className="relative py-16 text-center sm:py-24">
        <AnimateIn>
          {eyebrow && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm">
              {eyebrow}
            </span>
          )}
          <h1 className={`text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl ${eyebrow ? 'mt-5' : ''}`}>
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-slate-500 sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </AnimateIn>
      </Container>
    </section>
  )
}
