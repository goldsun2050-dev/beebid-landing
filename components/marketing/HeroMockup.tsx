'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'

const FIELDS = [
  { label: 'Full name', value: 'Jordan Lee' },
  { label: 'Email', value: 'jordan.lee@email.com' },
  { label: 'Phone', value: '+1 (415) 555-0148' },
  { label: 'Current company', value: 'Northwind Studio' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jordanlee' },
]

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <motion.div
        className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-honey/25 blur-3xl"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-14 -right-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      {/* Browser chrome */}
      <div className="relative animate-scale-in overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-raised">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <div className="ml-3 flex h-6 flex-1 items-center rounded-md bg-white px-3 text-[11px] text-slate-400 ring-1 ring-slate-200">
            careers.acmecloud.com/apply/senior-frontend-engineer
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-0">
          {/* Form side */}
          <div className="space-y-3 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Senior Frontend Engineer
            </p>
            {FIELDS.map((field, i) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.18, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <label className="mb-1 block text-[11px] font-medium text-slate-400">{field.label}</label>
                <div className="flex h-9 items-center justify-between rounded-lg border border-primary/30 bg-primary-soft/60 px-3 text-xs font-medium text-slate-700">
                  <span>{field.value}</span>
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.55 + i * 0.18 }}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Extension side panel */}
          <div className="hidden w-52 flex-col border-l border-slate-200 bg-slate-950 p-4 text-white sm:flex">
            <div className="flex items-center gap-2">
              <Image src="/brand/bee-mark.png" alt="" width={22} height={22} className="rounded-md" />
              <span className="text-xs font-bold">BeeBid</span>
            </div>

            <div className="mt-4 rounded-lg bg-white/10 p-3">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-honey">
                <Sparkles className="h-3 w-3" /> AI tailored
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-slate-300">
                Resume rebuilt around &ldquo;Senior Frontend Engineer&rdquo;
              </p>
            </div>

            <motion.div
              className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2.5 text-[11px] font-semibold"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Zap className="h-3.5 w-3.5" /> Autofill application
            </motion.div>

            <div className="mt-auto space-y-1.5 pt-4 text-[10px] text-slate-400">
              <div className="flex justify-between">
                <span>Fields matched</span>
                <span className="font-semibold text-white">18 / 18</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-honey"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.6, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
