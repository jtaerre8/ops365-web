import { PublicLayout } from '@/components/magic/PublicLayout'
import { Gallery, GalleryGrid, GalleryImage } from '@/components/magic/SharedGallery'

const DEMO_IMAGES = [
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
  'https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?w=800',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800',
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800',
  'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
  'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800',
  'https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=800',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
]

export function DemoLightbox() {
  return (
    <PublicLayout>
      <section className="bg-[var(--muted)] py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--magic-purple-500)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--magic-purple-700)]">
            🧪 Solo demo
          </span>
          <h1 className="mt-4 text-3xl tracking-tight text-[var(--foreground)] sm:text-4xl">
            Así se verá el lightbox con fotos reales
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[var(--muted-foreground)]">
            Estas son fotos de ejemplo (no del mago). Haz click en cualquiera
            para ver la transición y el gesto de arrastrar para cerrar.
          </p>

          <div className="mt-10 text-left">
            <Gallery>
              <GalleryGrid>
                {DEMO_IMAGES.map((src, i) => (
                  <GalleryImage key={i} id={String(i)} src={src} />
                ))}
              </GalleryGrid>
            </Gallery>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
