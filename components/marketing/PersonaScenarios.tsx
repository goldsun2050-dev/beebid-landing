import { Briefcase, GraduationCap, Users2 } from 'lucide-react'
import { AnimateStagger, AnimateStaggerItem } from '@/components/ui/AnimateIn'

const SCENARIOS = [
  {
    icon: Briefcase,
    title: 'The active job seeker',
    body: 'Applying to fifteen roles a week means fifteen slightly different resumes. BeeBid rebuilds each one around the posting and autofills the form, so volume stops meaning burnout.',
  },
  {
    icon: GraduationCap,
    title: 'The career switcher',
    body: 'Your experience is real, it just needs the right framing for a new field. Tailoring re-emphasizes the transferable parts of your background for each role you target.',
  },
  {
    icon: Users2,
    title: 'The career coach',
    body: 'Supporting a dozen candidates at once means a dozen sets of resumes, applications, and questions. Organizations keep every candidate profile, job link, and application in one shared place.',
  },
]

export function PersonaScenarios() {
  return (
    <AnimateStagger className="grid gap-4 sm:grid-cols-3">
      {SCENARIOS.map((s) => (
        <AnimateStaggerItem key={s.title}>
          <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-honey-soft text-honey">
              <s.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-sm font-bold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.body}</p>
          </div>
        </AnimateStaggerItem>
      ))}
    </AnimateStagger>
  )
}
