import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowLeft, Calendar, Download } from 'lucide-react'
import { PublicLayout } from '@/components/magic/PublicLayout'
import { MagicBackground } from '@/components/magic/MagicBackground'
import { SectionDivider } from '@/components/magic/SectionDivider'
import { Gallery, GalleryGrid, GalleryImage } from '@/components/magic/SharedGallery'
import { supabase, isSupabaseConfigured, PHOTOS_BUCKET } from '@/lib/supabase'

function mediaUrl(path) {
  return supabase.storage.from(PHOTOS_BUCKET).getPublicUrl(path).data.publicUrl
}

export function EventGallery() {
  const { slug } = useParams()
  const [event, setEvent] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setStatus('not-configured')
      return
    }

    let cancelled = false

    async function load() {
      const { data, error } = await supabase
        .from('events')
        .select('id, title, event_date, consent_confirmed, photos(id, storage_path, media_type)')
        .eq('slug', slug)
        .eq('consent_confirmed', true)
        .maybeSingle()

      if (cancelled) return

      if (error || !data) {
        setStatus('not-found')
        return
      }
      setEvent(data)
      setStatus('ready')
    }

    load()
    return () => {
      cancelled = true
    }
  }, [slug])

  return (
    <PublicLayout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--magic-purple-950)] via-[var(--magic-purple-800)] to-[var(--magic-purple-600)] pt-28 pb-16">
        <MagicBackground count={10} tone="dark" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            to="/galeria"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-[var(--magic-yellow-400)]"
          >
            <ArrowLeft className="size-4" /> Volver a la galería
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            {status === 'ready' && event ? (
              <>
                <h1 className="text-3xl tracking-tight text-white sm:text-4xl">{event.title}</h1>
                {event.event_date && (
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                    <Calendar className="size-4" />
                    {new Date(event.event_date).toLocaleDateString('es-CL', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                )}
              </>
            ) : (
              <h1 className="text-3xl tracking-tight text-white sm:text-4xl">Galería del evento</h1>
            )}
          </motion.div>
        </div>
      </section>

      <SectionDivider from="var(--magic-purple-600)" to="var(--muted)" />

      <section className="bg-[var(--muted)] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {status === 'loading' && <p className="text-[var(--muted-foreground)]">Cargando…</p>}

          {(status === 'not-found' || status === 'not-configured') && (
            <div className="mx-auto max-w-md rounded-2xl border border-dashed border-[var(--border)] bg-white p-10 text-center text-[var(--muted-foreground)]">
              No encontramos este evento.
            </div>
          )}

          {status === 'ready' && event && (() => {
            const photos = event.photos.filter((p) => p.media_type !== 'video')
            const videos = event.photos.filter((p) => p.media_type === 'video')

            if (photos.length === 0 && videos.length === 0) {
              return <p className="text-[var(--muted-foreground)]">Este evento todavía no tiene fotos.</p>
            }

            return (
              <>
                {photos.length > 0 && (
                  <Gallery>
                    <GalleryGrid>
                      {photos.map((photo, i) => (
                        <motion.div
                          key={photo.id}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: i * 0.03 }}
                        >
                          <GalleryImage id={photo.id} src={mediaUrl(photo.storage_path)} />
                        </motion.div>
                      ))}
                    </GalleryGrid>
                  </Gallery>
                )}

                {videos.length > 0 && (
                  <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${photos.length > 0 ? 'mt-8' : ''}`}>
                    {videos.map((video) => (
                      <div key={video.id} className="group relative overflow-hidden rounded-xl bg-white shadow-sm">
                        <video src={mediaUrl(video.storage_path)} className="w-full" controls />
                        <a
                          href={mediaUrl(video.storage_path)}
                          download
                          className="absolute top-2 right-2 flex size-9 items-center justify-center rounded-full bg-white/90 text-[var(--magic-purple-700)] opacity-0 shadow-md transition-opacity group-hover:opacity-100"
                          aria-label="Descargar video"
                        >
                          <Download className="size-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )
          })()}
        </div>
      </section>
    </PublicLayout>
  )
}
