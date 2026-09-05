import { FileStack, MousePointerClick, Sparkles, Users, type LucideIcon } from 'lucide-react'
import type { Feature } from '@/lib/content'

export const FEATURE_ICONS: Record<Feature['icon'], LucideIcon> = {
  sparkles: Sparkles,
  'mouse-click': MousePointerClick,
  'file-stack': FileStack,
  users: Users,
}
