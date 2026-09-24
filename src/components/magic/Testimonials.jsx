import { Quote } from 'lucide-react'
import ReviewsCarousel from './ReviewsCarousel'
import { TESTIMONIALS } from '@/lib/content'
import { Reveal } from './Reveal'

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--magic-purple-500)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--magic-purple-700)]">
            <Quote className="size-4" /> Lo que dicen las familias
          </span>
          <h2 className="mt-4 text-4xl tracking-tight text-[var(--foreground)] sm:text-5xl">
            Magia que deja huella
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--muted-foreground)]">
            Cientos de familias y colegios ya vivieron la experiencia. Usa las
            flechas o las teclas ← → para ver más testimonios.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ReviewsCarousel reviews={TESTIMONIALS} autoPlay className="mt-4" />
        </Reveal>
      </div>
    </section>
  )
}
