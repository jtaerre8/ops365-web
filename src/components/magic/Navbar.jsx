import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, Wand2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BrandMark } from './BrandMark'
import { waLink } from '@/lib/content'
import retratoImg from '@/assets/alfredo-retrato.jpg'

const LINKS = [
  { to: '/#inicio', label: 'Inicio' },
  { to: '/#nosotros', label: 'Nosotros' },
  { to: '/#shows', label: 'Shows' },
  { to: '/galeria', label: 'Galería' },
  { to: '/#faq', label: 'Preguntas' },
  { to: '/#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--magic-purple-950)]/90 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/#inicio" className="font-logo flex items-center gap-2.5 text-xl font-bold text-white">
          <BrandMark size={38} photo={retratoImg} />
          Mago Prat
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative py-1 text-sm font-medium text-white/80 transition-colors hover:text-[var(--magic-yellow-400)]"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full bg-[var(--magic-yellow-400)] transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            render={<a href={waLink('¡Hola! Quiero cotizar un show de magia 🎩✨')} target="_blank" rel="noreferrer" />}
            nativeButton={false}
            className="bg-[var(--magic-yellow-400)] text-[var(--magic-purple-950)] hover:bg-[var(--magic-yellow-300)]"
          >
            <Wand2 /> Reservar show
          </Button>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-[var(--magic-purple-950)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 pb-4">
              {LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                render={<a href={waLink('¡Hola! Quiero cotizar un show de magia 🎩✨')} target="_blank" rel="noreferrer" />}
                nativeButton={false}
                className="mt-2 bg-[var(--magic-yellow-400)] text-[var(--magic-purple-950)] hover:bg-[var(--magic-yellow-300)]"
              >
                <Wand2 /> Reservar show
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
