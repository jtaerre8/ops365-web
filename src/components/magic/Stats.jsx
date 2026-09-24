import { STATS } from '@/lib/content'
import { AnimatedCounter } from './AnimatedCounter'
import { Reveal } from './Reveal'

export function Stats() {
  return (
    <section className="relative -mt-1 bg-[var(--magic-yellow-400)] py-10">
      <Reveal
        as="div"
        className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4"
        y={24}
        stagger={0.1}
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-3xl font-extrabold text-[var(--magic-purple-950)] sm:text-4xl">
              <AnimatedCounter value={stat.value} />
            </div>
            <div className="mt-1 text-sm font-medium text-[var(--magic-purple-800)]">{stat.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
