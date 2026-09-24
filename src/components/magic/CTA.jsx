import { motion } from 'motion/react'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MagicBackground } from './MagicBackground'
import { WhatsappIcon } from './SocialIcons'
import { CONTACT, waLink } from '@/lib/content'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--magic-purple-700)] to-[var(--magic-purple-950)] py-20">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06]" />
      <MagicBackground count={10} tone="dark" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mx-auto mb-4 text-6xl"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            🎩✨
          </motion.div>

          <h2 className="text-4xl tracking-tight text-white sm:text-5xl">¡Reserva tu fecha ahora!</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Las fechas se llenan rápido y quiero asegurarme de que tu evento
            tenga el mejor show de magia. Consultemos disponibilidad y
            armemos juntos un día inolvidable.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href={waLink('¡Hola! Quiero reservar mi fecha para un show de magia 🎩✨')} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              size="lg"
              className="h-12 w-full rounded-full bg-[#25D366] px-6 text-base text-white shadow-lg shadow-black/20 hover:bg-[#1fb959] sm:w-auto"
            >
              <WhatsappIcon className="size-5" /> Escribir por WhatsApp
            </Button>
            <Button
              render={<a href={`mailto:${CONTACT.email}`} />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-white/30 bg-white/5 px-6 text-base text-white hover:bg-white/15 sm:w-auto"
            >
              <Mail /> Escribir por correo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
