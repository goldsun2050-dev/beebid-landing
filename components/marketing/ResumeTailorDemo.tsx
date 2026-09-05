'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const GENERIC_LINES = [
  'Frontend developer with experience building web applications.',
  'Worked with React and various backend APIs.',
  'Collaborated with design and product teams.',
]

const TAILORED_LINES = [
  'Senior frontend engineer specializing in React performance at scale.',
  'Led migration of a 40k-line React codebase to a component design system.',
  'Partnered directly with design and platform teams on the checkout rebuild.',
]

export function ResumeTailorDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Before</p>
        <p className="mt-2 text-sm font-bold text-slate-900">Generic resume</p>
        <ul className="mt-3 space-y-2.5">
          {GENERIC_LINES.map((line) => (
            <li key={line} className="text-xs leading-relaxed text-slate-500">
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <motion.div
          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-glow"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowRight className="h-5 w-5" />
        </motion.div>
      </div>

      <div className="rounded-2xl border border-primary/30 bg-primary-soft/50 p-5 shadow-card">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
          <Sparkles className="h-3 w-3" /> Tailored for this job
        </p>
        <p className="mt-2 text-sm font-bold text-slate-900">Senior Frontend Engineer @ Acme Cloud</p>
        <ul className="mt-3 space-y-2.5">
          {TAILORED_LINES.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="text-xs font-medium leading-relaxed text-slate-700"
            >
              {line}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
