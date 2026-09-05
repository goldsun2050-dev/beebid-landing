import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-primary">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-slate-500 sm:text-base">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or may have moved.
      </p>
      <Button href="/" size="lg" className="mt-8">
        Back to home
      </Button>
    </Container>
  )
}
