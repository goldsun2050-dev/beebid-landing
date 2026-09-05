'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Faq } from '@/lib/content'
import { cn } from '@/lib/cn'

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-card">
      {faqs.map((faq, i) => {
        const open = openIndex === i
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
            >
              <span className="text-sm font-semibold text-slate-900">{faq.question}</span>
              <ChevronDown
                className={cn('h-4 w-4 shrink-0 text-slate-400 transition-transform', open && 'rotate-180')}
              />
            </button>
            <div
              className={cn(
                'grid overflow-hidden transition-all duration-200 ease-out',
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="min-h-0">
                <p className="px-5 pb-4 text-sm leading-relaxed text-slate-500">{faq.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
