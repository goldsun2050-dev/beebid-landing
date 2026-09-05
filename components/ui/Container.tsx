import { cn } from '@/lib/cn'

export function Container({
  className,
  children,
  as: Tag = 'div',
}: {
  className?: string
  children: React.ReactNode
  as?: 'div' | 'section'
}) {
  return <Tag className={cn('mx-auto w-full max-w-6xl px-5 sm:px-6', className)}>{children}</Tag>
}
