import { Crown, Shield, User } from 'lucide-react'

const MEMBERS = [
  { name: 'Priya S.', role: 'Owner', icon: Crown, color: 'text-honey' },
  { name: 'Marcus T.', role: 'Coach', icon: Shield, color: 'text-primary' },
  { name: 'Dana K.', role: 'Coach', icon: Shield, color: 'text-primary' },
  { name: 'Candidate: R. Alvarez', role: 'Member', icon: User, color: 'text-slate-400' },
]

const SHARED_JOBS = [
  { title: 'Product Manager @ Fieldstone', applicants: 3 },
  { title: 'UX Researcher @ Loop Health', applicants: 2 },
]

export function TeamPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-raised">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Organization</p>
        <p className="text-sm font-bold text-slate-900">Bright Path Career Coaching</p>
      </div>

      <div className="divide-y divide-slate-100">
        {MEMBERS.map((member) => (
          <div key={member.name} className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                {member.name
                  .split(' ')
                  .map((p) => p[0])
                  .join('')
                  .slice(0, 2)}
              </span>
              <span className="text-sm font-medium text-slate-700">{member.name}</span>
            </div>
            <span className={`flex items-center gap-1.5 text-xs font-semibold ${member.color}`}>
              <member.icon className="h-3.5 w-3.5" /> {member.role}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Shared job links</p>
        <div className="mt-2 space-y-2">
          {SHARED_JOBS.map((job) => (
            <div key={job.title} className="flex items-center justify-between rounded-lg bg-white px-3 py-2.5 ring-1 ring-slate-200">
              <span className="text-xs font-medium text-slate-700">{job.title}</span>
              <span className="text-[11px] text-slate-400">{job.applicants} applying</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
