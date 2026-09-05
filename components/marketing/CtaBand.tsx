import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SIGNUP_URL } from '@/lib/site'

export function CtaBand({
  title = 'Ready to apply faster, and better?',
  description = 'Create your free account, then install the BeeBid browser extension to start autofilling applications with AI-tailored resumes.',
}: {
  title?: string
  description?: string
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-center shadow-raised sm:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_0%,rgba(79,70,229,0.35),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(30rem_16rem_at_85%_100%,rgba(245,158,11,0.18),transparent)]" />
      <div className="relative">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-300">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={SIGNUP_URL} size="lg">
            Get started free <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-4 text-xs text-slate-500">No credit card required.</p>
      </div>
    </div>
  )
}
