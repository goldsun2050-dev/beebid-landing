import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/cn'

export function Logo({ className, iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)} aria-label="BeeBid home">
      <Image
        src="/brand/bee-mark.png"
        alt="BeeBid"
        width={32}
        height={32}
        className="h-8 w-8 rounded-lg"
        priority
      />
      {!iconOnly && <span className="text-base font-bold tracking-tight text-slate-900">BeeBid</span>}
    </Link>
  )
}
