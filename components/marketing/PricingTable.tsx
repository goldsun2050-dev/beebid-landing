import { Check } from 'lucide-react'
import { PRICING_PLANS } from '@/lib/content'
import { Button } from '@/components/ui/Button'
import { SIGNUP_URL } from '@/lib/site'
import { cn } from '@/lib/cn'
import { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'

export function PricingTable() {
  return (
    <AnimateStagger className="grid gap-5 lg:grid-cols-3">
      {PRICING_PLANS.map((plan) => (
        <AnimateStaggerItem key={plan.name}>
          <div
            className={cn(
              'flex h-full flex-col rounded-2xl border p-6',
              plan.highlighted
                ? 'border-primary bg-slate-950 text-white shadow-glow'
                : 'border-slate-200 bg-white shadow-card',
            )}
          >
            <div>
              <h3 className={cn('text-lg font-bold', plan.highlighted ? 'text-white' : 'text-slate-900')}>
                {plan.name}
              </h3>
              <p className={cn('mt-1 text-xs font-medium', plan.highlighted ? 'text-slate-400' : 'text-slate-400')}>
                {plan.audience}
              </p>
              <p className={cn('mt-3 text-sm leading-relaxed', plan.highlighted ? 'text-slate-300' : 'text-slate-500')}>
                {plan.description}
              </p>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check
                    className={cn('mt-0.5 h-4 w-4 shrink-0', plan.highlighted ? 'text-honey' : 'text-primary')}
                  />
                  <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-600'}>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              href={plan.name === 'Teams' ? `${SIGNUP_URL}?plan=teams` : SIGNUP_URL}
              variant={plan.highlighted ? 'primary' : 'secondary'}
              size="md"
              className={cn('mt-6 w-full', plan.highlighted && 'bg-primary hover:bg-primary-hover')}
            >
              {plan.cta.label}
            </Button>
          </div>
        </AnimateStaggerItem>
      ))}
    </AnimateStagger>
  )
}
