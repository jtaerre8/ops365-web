import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Calendar, ImageOff, Images } from 'lucide-react'
import { PublicLayout } from '@/components/magic/PublicLayout'
import { MagicBackground } from '@/components/magic/MagicBackground'
import { SectionDivider } from '@/components/magic/SectionDivider'
import { supabase, isSupabaseConfigured, PHOTOS_BUCKET } from '@/lib/supabase'

function coverUrl(path) {
  if (!path) return null
  return supabase.storage.from(PHOTOS_BUCKET).getPublicUrl(path).data.publicUrl
}

export function PublicGallery() {
  const [events, setEvents] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setError('not-configured')
      return
    }

    let cancelled = false

    async function load() {
      const { data, error: fetchError } = await supabase
        .from('events')
        .select('id, title, slug, event_date, photos(storage_path)')
        .eq('consent_confirmed', true)
        .order('event_date', { ascending: false })

      if (cancelled) return

      if (fetchError) {
        setError(fetchError.message)
        return
      }
      setEvents(data ?? [])
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <PublicLayout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--magic-purple-950)] via-[var(--magic-purple-800)] to-[var(--magic-purple-600)] pt-28 pb-20">
        <MagicBackground count={12} tone="dark" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[var(--magic-yellow-400)]">
              <Images className="size-4" /> Galería de eventos
            </span>
            <h1 className="mt-4 text-4xl tracking-tight text-white sm:text-5xl">
              Momentos mágicos, evento por evento
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Fotos y videos reales de nuestros shows. Elige un evento para
              ver y descargar sus fotos.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider from="var(--magic-purple-600)" to="var(--muted)" />

      <section className="bg-[var(--muted)] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {error === 'not-configured' && (
            <div className="mx-auto max-w-md rounded-2xl border border-dashed border-[var(--border)] bg-white p-8 text-center text-[var(--muted-foreground)]">
              La galería aún no está conectada a la base de datos.
            </div>
          )}

          {error && error !== 'not-configured' && (
            <div className="mx-auto max-w-md rounded-2xl border border-dashed border-[var(--border)] bg-white p-8 text-center text-[var(--muted-foreground)]">
              No pudimos cargar la galería en este momento.
            </div>
          )}

          {events && events.length === 0 && (
            <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-dashed border-[var(--border)] bg-white p-10 text-center text-[var(--muted-foreground)]">
              <ImageOff className="size-8" />
              Todavía no hay eventos publicados. ¡Vuelve pronto!
            </div>
          )}

          {events && events.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event, i) => {
                const cover = event.photos?.[0]?.storage_path
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    whileHover={{ y: -6 }}
                  >
                    <Link
                      to={`/galeria/${event.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm transition-shadow hover:shadow-xl"
                    >
                      <div className="aspect-video overflow-hidden bg-gradient-to-br from-[var(--magic-purple-700)] to-[var(--magic-purple-600)]">
                        {cover ? (
                          <img
                            src={coverUrl(cover)}
                            alt={event.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-5xl">🎩</div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg text-[var(--foreground)]">{event.title}</h3>
                        {event.event_date && (
                          <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--muted-foreground)]">
                            <Calendar className="size-4" />
                            {new Date(event.event_date).toLocaleDateString('es-CL', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </p>
                        )}
                        <p className="mt-2 text-sm font-medium text-[var(--magic-purple-600)]">
                          {event.photos?.length ?? 0} foto(s)
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  )
}
