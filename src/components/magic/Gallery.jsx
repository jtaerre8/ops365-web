import { Link } from 'react-router-dom'
import { Camera, ImagePlus, Images } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InstagramIcon } from './SocialIcons'
import { CONTACT } from '@/lib/content'
import { Reveal } from './Reveal'

const TILES = Array.from({ length: 8 })

export function Gallery() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-[var(--magic-purple-950)] py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(250,204,21,0.08), transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[var(--magic-yellow-400)]">
            <Camera className="size-4" /> Momentos mágicos
          </span>
          <h2 className="mt-4 text-4xl tracking-tight text-white sm:text-5xl">Galería</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Muy pronto vas a encontrar aquí fotos y videos reales de cada
            evento, organizados por fecha. Mientras se suben, sigue toda la
            magia en Instagram.
          </p>
        </Reveal>

        <Reveal
          as="div"
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          y={20}
          scale={0.95}
          stagger={0.07}
          start="top 90%"
        >
          {TILES.map((_, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--magic-yellow-400)]/40 hover:shadow-[0_20px_36px_-16px_rgba(250,204,21,0.25)]"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 50% 30%, rgba(250,204,21,0.18), transparent 65%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <ImagePlus className="size-7 text-white/15 transition-colors duration-300 group-hover:text-white/30" />
              </div>
              <span className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            render={<Link to="/galeria" />}
            nativeButton={false}
            size="lg"
            className="rounded-full bg-white text-[var(--magic-purple-950)] hover:bg-white/90"
          >
            <Images className="size-5" /> Ver galería completa
          </Button>
          <Button
            render={<a href={CONTACT.instagram} target="_blank" rel="noreferrer" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15"
          >
            <InstagramIcon className="size-5" /> {CONTACT.instagramHandle}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
