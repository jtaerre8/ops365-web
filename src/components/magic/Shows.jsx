import { useState } from 'react'
import { motion } from 'motion/react'
import { Check, Wand2, Star, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { SHOWS, formatCLP, waLink } from '@/lib/content'
import { TiltCard } from './TiltCard'

const SPARKLES = [
  { top: '8%', left: '10%', size: 14, delay: 0 },
  { top: '14%', left: '88%', size: 11, delay: 0.25 },
  { top: '42%', left: '94%', size: 13, delay: 0.5 },
  { top: '68%', left: '6%', size: 10, delay: 0.4 },
  { top: '88%', left: '80%', size: 12, delay: 0.15 },
  { top: '52%', left: '48%', size: 9, delay: 0.65 },
]

function TicketNotch({ accent = false }) {
  return (
    <div
      className={`relative mx-6 border-t-2 border-dashed ${accent ? 'border-white/25' : 'border-[var(--border)]'}`}
      aria-hidden="true"
    >
      <span className="absolute top-1/2 left-0 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--muted)]" />
      <span className="absolute top-1/2 right-0 size-7 translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--muted)]" />
    </div>
  )
}

export function Shows() {
  const [zone, setZone] = useState('santiago')

  return (
    <section id="shows" className="relative bg-[var(--muted)] py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--magic-purple-500)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--magic-purple-700)]">
            <Star className="size-4" /> Shows y precios
          </span>
          <h2 className="mt-4 text-4xl tracking-tight text-[var(--foreground)] sm:text-5xl">
            Elige la magia perfecta para tu evento
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--muted-foreground)]">
            Todos los shows incluyen humor, participación activa y mucha
            magia. Elige el que más se ajuste a tu celebración.
          </p>

          <div className="mx-auto mt-6 inline-flex rounded-full border border-[var(--border)] bg-white p-1 shadow-sm">
            {[
              { id: 'santiago', label: 'Santiago' },
              { id: 'fuera', label: 'Fuera de Santiago' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setZone(opt.id)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  zone === opt.id
                    ? 'text-white'
                    : 'text-[var(--muted-foreground)] hover:text-[var(--magic-purple-700)]'
                }`}
              >
                {zone === opt.id && (
                  <motion.span
                    layoutId="zone-pill"
                    className="absolute inset-0 rounded-full bg-[var(--magic-purple-600)]"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{opt.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SHOWS.map((show, i) => {
            const price = zone === 'santiago' ? show.priceSantiago : show.priceFuera
            return (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={show.featured ? 'md:-mt-4' : ''}
              >
                <TiltCard maxTilt={6} className="h-full">
                <Card
                  className={`relative h-full gap-0 overflow-hidden py-0 text-left transition-shadow duration-300 ${
                    show.featured
                      ? 'border-2 border-[var(--magic-purple-600)] shadow-xl shadow-[var(--magic-purple-600)]/20 group-hover:shadow-2xl group-hover:shadow-[var(--magic-purple-600)]/35'
                      : show.accent
                        ? 'border-2 border-[var(--magic-purple-400)] bg-gradient-to-br from-[var(--magic-purple-600)] to-[var(--magic-purple-900)] shadow-xl shadow-[var(--magic-purple-700)]/30 group-hover:shadow-2xl group-hover:shadow-[var(--magic-purple-500)]/45'
                        : 'border-[var(--border)] shadow-[0_2px_10px_-4px_rgba(30,16,53,0.08)] group-hover:shadow-[0_24px_48px_-16px_rgba(91,33,182,0.3)]'
                  }`}
                >
                  {show.accent && (
                    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
                      {SPARKLES.map((s, si) => (
                        <Sparkles
                          key={si}
                          className="animate-twinkle absolute text-[var(--magic-yellow-300)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
                        />
                      ))}
                    </div>
                  )}

                  {show.featured && (
                    <span className="absolute top-4 right-4 z-10 -rotate-6 rounded-full border-2 border-dashed border-[var(--magic-purple-950)]/20 bg-[var(--magic-yellow-400)] px-3 py-1 text-[11px] font-bold text-[var(--magic-purple-950)] shadow-md">
                      ⭐ RECOMENDADO
                    </span>
                  )}
                  {show.badge && (
                    <span className="absolute top-4 right-4 z-10 -rotate-6 rounded-full border-2 border-dashed border-white/30 bg-[var(--magic-yellow-400)] px-3 py-1 text-[11px] font-bold text-[var(--magic-purple-950)] shadow-md">
                      🔥 {show.badge.toUpperCase()}
                    </span>
                  )}

                  <CardHeader className="relative z-10 pt-7 pb-5">
                    <div className={show.featured || show.badge ? 'pr-28' : ''}>
                      <h3 className={`font-heading text-2xl ${show.accent ? 'text-white' : 'text-[var(--foreground)]'}`}>{show.name}</h3>
                      <p className={`text-sm ${show.accent ? 'text-white/70' : 'text-[var(--muted-foreground)]'}`}>{show.tagline}</p>
                    </div>
                    <div className="mt-3 flex items-baseline whitespace-nowrap">
                      <span className={`font-heading text-4xl ${show.accent ? 'text-[var(--magic-yellow-300)]' : 'text-[var(--magic-purple-700)]'}`}>
                        {formatCLP(price)}
                      </span>
                      <span className={`ml-1 text-sm ${show.accent ? 'text-white/60' : 'text-[var(--muted-foreground)]'}`}>/ {show.duration}</span>
                    </div>
                  </CardHeader>

                  <div className="relative z-10">
                    <TicketNotch accent={show.accent} />
                  </div>

                  <CardContent className="relative z-10 pt-5">
                    <ul className="flex flex-col gap-2.5">
                      {show.features.map((feature) => (
                        <li key={feature} className={`flex items-start gap-2 text-sm ${show.accent ? 'text-white/90' : 'text-[var(--foreground)]'}`}>
                          <Check className={`mt-0.5 size-4 shrink-0 ${show.accent ? 'text-[var(--magic-yellow-300)]' : 'text-[var(--magic-purple-600)]'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="relative z-10 mt-2 border-t-0 bg-transparent p-6 pt-2">
                    <Button
                      render={
                        <a
                          href={waLink(`¡Hola! Quiero cotizar el ${show.name} (${zone === 'santiago' ? 'Santiago' : 'fuera de Santiago'}) 🎩✨`)}
                          target="_blank"
                          rel="noreferrer"
                        />
                      }
                      nativeButton={false}
                      className={`w-full rounded-full ${
                        show.featured
                          ? 'bg-[var(--magic-purple-600)] text-white hover:bg-[var(--magic-purple-700)]'
                          : show.accent
                            ? 'bg-[var(--magic-yellow-400)] text-[var(--magic-purple-950)] hover:bg-[var(--magic-yellow-300)]'
                            : 'bg-[var(--secondary)] text-white hover:bg-[var(--magic-purple-800)]'
                      }`}
                    >
                      <Wand2 /> Reservar este show
                    </Button>
                  </CardFooter>
                </Card>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
