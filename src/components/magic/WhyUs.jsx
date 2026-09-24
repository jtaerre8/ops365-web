import { motion } from 'motion/react'
import { BadgeCheck, PartyPopper, Sparkles, Wand2 } from 'lucide-react'
import { WHY_US } from '@/lib/content'
import { TiltCard } from './TiltCard'
import { Reveal } from './Reveal'

const ICONS = { PartyPopper, Sparkles, BadgeCheck, Wand2 }

export function WhyUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--magic-yellow-400)]/20 px-4 py-1.5 text-sm font-semibold text-[var(--magic-purple-700)]">
            <Sparkles className="size-4" /> ¿Por qué elegirnos?
          </span>
          <h2 className="mt-4 text-4xl tracking-tight text-[var(--foreground)] sm:text-5xl">
            Magia con sello de calidad
          </h2>
        </Reveal>

        <Reveal
          as="div"
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          y={30}
          stagger={0.1}
          start="top 88%"
        >
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon]
            const tint = i % 2 === 0 ? 'var(--magic-purple-600)' : 'var(--magic-yellow-500)'
            const tintText = i % 2 === 0 ? 'var(--magic-purple-600)' : 'var(--magic-purple-950)'
            return (
              <TiltCard key={item.title} maxTilt={8} className="h-full">
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6 text-left shadow-[0_2px_10px_-4px_rgba(30,16,53,0.08)] transition-shadow hover:shadow-[0_20px_40px_-16px_rgba(91,33,182,0.25)]">
                  <motion.div
                    className="relative flex size-14 items-center justify-center"
                    whileHover={{ rotate: 15 }}
                  >
                    <span
                      className="absolute inset-0 rounded-xl opacity-10"
                      style={{ backgroundColor: tint, rotate: '0deg' }}
                    />
                    <span
                      className="absolute inset-0 rounded-xl opacity-10"
                      style={{ backgroundColor: tint, rotate: '45deg' }}
                    />
                    <Icon className="relative z-10 size-6" style={{ color: tintText }} />
                  </motion.div>
                  <h3 className="mt-4 text-lg text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">{item.description}</p>
                </div>
              </TiltCard>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
