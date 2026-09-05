import { FileText, FolderKanban, Mail } from 'lucide-react'

const DOCS = [
  { name: 'Resume — Senior Frontend Engineer @ Acme Cloud', kind: 'Resume', date: 'Sent Tue' },
  { name: 'Cover letter — Acme Cloud', kind: 'Cover letter', date: 'Sent Tue' },
  { name: 'Resume — Staff Engineer @ Northwind', kind: 'Resume', date: 'Sent Mon' },
  { name: 'Resume — Frontend Lead @ Vellum', kind: 'Resume', date: 'Last week' },
]

export function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-raised">
      <div className="grid grid-cols-1 gap-px bg-slate-100 sm:grid-cols-3">
        {[
          { icon: FileText, label: 'Tailored resumes', value: '24' },
          { icon: Mail, label: 'Cover letters', value: '19' },
          { icon: FolderKanban, label: 'Applications tracked', value: '31' },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center gap-3 bg-white p-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <stat.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-lg font-bold text-slate-900">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="divide-y divide-slate-100 border-t border-slate-200">
        {DOCS.map((doc) => (
          <div key={doc.name} className="flex items-center justify-between gap-4 px-5 py-3.5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                <FileText className="h-3.5 w-3.5" />
              </span>
              <span className="truncate text-sm font-medium text-slate-700">{doc.name}</span>
            </div>
            <span className="shrink-0 text-xs text-slate-400">{doc.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
