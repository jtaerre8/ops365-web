import { motion } from 'motion/react'
import { Wand2, Star, Quote } from 'lucide-react'
import { Reveal } from './Reveal'
import logoImg from '@/assets/mago-prat-logo.jpg'
import alfredoConejoImg from '@/assets/alfredo-conejo.jpg'

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <Reveal scale={0.92} start="top 85%" className="relative mx-auto w-full max-w-sm">
          <div className="group/photo relative aspect-square w-full overflow-hidden rounded-[2rem] border-4 border-[var(--magic-purple-700)] shadow-2xl">
            <img
              src={alfredoConejoImg}
              alt="Alfredo González, el Mago Prat, junto a su conejo"
              className="h-full w-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/10" />

            <div className="absolute top-5 left-5 flex items-center gap-1 rounded-full bg-black/25 px-2.5 py-1.5 text-[var(--magic-yellow-400)] backdrop-blur-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 text-center">
              <p className="font-heading text-xl text-white">Alfredo González</p>
              <p className="text-sm text-white/70">El Mago Prat</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -right-5 -bottom-5 flex max-w-[13rem] items-start gap-2 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-xl"
          >
            <Quote className="mt-0.5 size-5 shrink-0 text-[var(--magic-purple-400)]" />
            <p className="text-xs leading-relaxed text-[var(--muted-foreground)]">
              "Mucho misterio, muchas risas y todo el asombro de un show 100% interactivo."
            </p>
          </motion.div>
        </Reveal>

        <Reveal x={30} y={0} start="top 85%">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--magic-purple-500)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--magic-purple-700)]">
            <Wand2 className="size-4" /> ¿Quién soy?
          </span>

          <h2 className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-4xl tracking-tight text-[var(--foreground)] sm:text-5xl">
            ¡Hola! Soy el
            <motion.img
              src={logoImg}
              alt="Mago Prat"
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.96, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
              className="inline-block h-14 w-auto cursor-pointer rounded-lg shadow-[3px_4px_0_0_#0d0817] transition-shadow duration-300 hover:shadow-[5px_7px_0_0_#0d0817] sm:h-[4.5rem]"
              style={{ filter: 'saturate(1.35) contrast(1.08)' }}
            />
          </h2>
          <p className="mt-1 text-sm font-semibold text-[var(--muted-foreground)]">Alfredo González</p>

          <p className="mt-5 text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            Con más de 18 años de experiencia, hago sonreír a niños y adultos
            por igual. Diseño cada espectáculo para que los más pequeños
            vivan una experiencia única, llena de asombro, risas y magia,
            mientras los más grandes disfrutan viendo a sus hijos
            maravillados.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--magic-purple-400)] hover:shadow-[0_16px_32px_-16px_rgba(91,33,182,0.3)]">
              <h3 className="text-lg text-[var(--magic-purple-700)]">Mi visión</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Crear experiencias mágicas e inolvidables, fomentando la
                imaginación, la alegría y el asombro en cada evento.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--magic-purple-400)] hover:shadow-[0_16px_32px_-16px_rgba(91,33,182,0.3)]">
              <h3 className="text-lg text-[var(--magic-purple-700)]">Mi sello</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Mucho misterio, muchas risas y todo el asombro de un show
                100% interactivo, hecho a la medida de cada fiesta.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
