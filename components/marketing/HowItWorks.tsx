import { HOW_IT_WORKS_STEPS } from '@/lib/content'
import { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'

export function HowItWorks() {
  return (
    <AnimateStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {HOW_IT_WORKS_STEPS.map((step, i) => (
        <AnimateStaggerItem key={step.title} className="relative">
          <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-4 text-sm font-bold text-slate-900">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.body}</p>
          </div>
          {i < HOW_IT_WORKS_STEPS.length - 1 && (
            <div className="absolute right-[-14px] top-9 hidden h-px w-7 bg-slate-200 lg:block" aria-hidden />
          )}
        </AnimateStaggerItem>
      ))}
    </AnimateStagger>
  )
}
