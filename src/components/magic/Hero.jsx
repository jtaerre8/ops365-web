import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { Wand2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MagicBackground } from './MagicBackground'
import { HeroEmblem } from './HeroEmblem'
import { MagoPratLogotype } from './MagoPratLogotype'
import { Magnetic } from './Magnetic'
import { waLink } from '@/lib/content'

export function Hero() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const parallaxFade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spotlightX = useTransform(px, (v) => `${v * 100}%`)
  const spotlightY = useTransform(py, (v) => `${v * 100}%`)

  const emblemRotateY = useSpring(useTransform(px, [0, 1], [-14, 14]), { stiffness: 200, damping: 20 })
  const emblemRotateX = useSpring(useTransform(py, [0, 1], [10, -10]), { stiffness: 200, damping: 20 })

  function handleMouseMove(e) {
    const rect = sectionRef.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  function handleMouseLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <section
      ref={sectionRef}
      id="inicio"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-svh items-center overflow-hidden bg-gradient-to-br from-[var(--magic-purple-950)] via-[var(--magic-purple-800)] to-[var(--magic-purple-600)] pt-24 pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 8%, rgba(250,204,21,0.16), transparent 70%)' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(600px circle at ${x} ${y}, rgba(250,204,21,0.10), transparent 70%)`
          ),
        }}
      />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06]" />

      <MagicBackground count={22} tone="dark" />

      <motion.div
        style={{ y: parallaxY, opacity: parallaxFade }}
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-2"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[var(--magic-yellow-400)]"
          >
            <Sparkles className="size-4" /> +18 años haciendo magia en Chile
          </motion.span>

          <h1 className="mt-4 text-4xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Bienvenidos al{' '}
            <span className="text-[var(--magic-yellow-400)]">mundo mágico</span> del
          </h1>

          <div className="relative mt-4 inline-block">
            <MagoPratLogotype />
          </div>

          <p className="mt-6 max-w-lg text-lg text-white/80">
            Un show lleno de risas, asombro y mucha magia para que tu fiesta se
            transforme en un recuerdo inolvidable. Alegría, diversión y un{' '}
            <span className="text-[var(--magic-yellow-400)]">mundo de felicidad</span>{' '}
            para toda la familia. ✨
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Magnetic>
              <Button
                render={<a href={waLink('¡Hola! Quiero reservar un show de magia para mi evento 🎩✨')} target="_blank" rel="noreferrer" />}
                nativeButton={false}
                size="lg"
                className="h-12 rounded-full bg-[var(--magic-yellow-400)] px-6 text-base text-[var(--magic-purple-950)] shadow-lg shadow-black/20 hover:bg-[var(--magic-yellow-300)]"
              >
                <Wand2 /> Reservar mi show
              </Button>
            </Magnetic>
            <Button
              render={<a href="#shows" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/30 bg-white/5 px-6 text-base text-white hover:bg-white/15"
            >
              Ver shows y precios
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96"
          style={{ perspective: 1200 }}
        >
          <HeroEmblem className="h-full w-full" rotateX={emblemRotateX} rotateY={emblemRotateY} />
        </motion.div>
      </motion.div>
    </section>
  )
}
