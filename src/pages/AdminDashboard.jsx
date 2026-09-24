import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  Calendar,
  Loader2,
  LogOut,
  Plus,
  ShieldCheck,
  Trash2,
  Upload,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase, PHOTOS_BUCKET } from '@/lib/supabase'

function slugify(title) {
  const base = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
  return `${base || 'evento'}-${Date.now().toString(36)}`
}

function mediaUrl(path) {
  return supabase.storage.from(PHOTOS_BUCKET).getPublicUrl(path).data.publicUrl
}

export function AdminDashboard() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newDate, setNewDate] = useState('')
  const [consentChecked, setConsentChecked] = useState(false)
  const [uploadingEventId, setUploadingEventId] = useState(null)

  const loadEvents = useCallback(async () => {
    const { data, error } = await supabase
      .from('events')
      .select('id, title, slug, event_date, consent_confirmed, photos(id, storage_path, media_type)')
      .order('created_at', { ascending: false })

    if (!error) setEvents(data ?? [])
    setLoading(false)
  }, [])

  useEffect(() => {
    loadEvents()
  }, [loadEvents])

  async function handleCreateEvent(e) {
    e.preventDefault()
    if (!consentChecked) return

    setCreating(true)
    const { error } = await supabase.from('events').insert({
      title: newTitle,
      slug: slugify(newTitle),
      event_date: newDate || null,
      consent_confirmed: true,
    })
    setCreating(false)

    if (!error) {
      setNewTitle('')
      setNewDate('')
      setConsentChecked(false)
      loadEvents()
    }
  }

  async function handleUpload(event, fileList) {
    const files = Array.from(fileList)
    if (files.length === 0) return

    setUploadingEventId(event.id)

    for (const file of files) {
      const path = `${event.slug}/${Date.now()}-${file.name}`
      const { error: uploadError } = await supabase.storage.from(PHOTOS_BUCKET).upload(path, file)
      if (uploadError) continue

      await supabase.from('photos').insert({
        event_id: event.id,
        storage_path: path,
        media_type: file.type.startsWith('video') ? 'video' : 'photo',
      })
    }

    setUploadingEventId(null)
    loadEvents()
  }

  async function handleDeletePhoto(photo) {
    await supabase.storage.from(PHOTOS_BUCKET).remove([photo.storage_path])
    await supabase.from('photos').delete().eq('id', photo.id)
    loadEvents()
  }

  async function handleDeleteEvent(event) {
    if (!confirm(`¿Eliminar el evento "${event.title}" y todas sus fotos?`)) return
    const paths = event.photos.map((p) => p.storage_path)
    if (paths.length > 0) await supabase.storage.from(PHOTOS_BUCKET).remove(paths)
    await supabase.from('events').delete().eq('id', event.id)
    loadEvents()
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
  }

  return (
    <div className="min-h-svh bg-[var(--muted)]">
      <header className="flex items-center justify-between bg-[var(--magic-purple-950)] px-4 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2 font-heading text-lg text-white">
          🎩 Panel del Mago
        </Link>
        <Button
          onClick={handleSignOut}
          variant="outline"
          className="border-white/30 bg-white/5 text-white hover:bg-white/15"
        >
          <LogOut className="size-4" /> Salir
        </Button>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleCreateEvent}
          className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm"
        >
          <h2 className="font-heading text-xl text-[var(--foreground)]">Nuevo evento</h2>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Nombre del evento (ej: Cumpleaños de Martina)"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="rounded-xl border border-[var(--border)] px-3 py-2.5 text-sm outline-none focus:border-[var(--magic-purple-600)]"
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="rounded-xl border border-[var(--border)] px-3 py-2.5 text-sm outline-none focus:border-[var(--magic-purple-600)]"
            />
          </div>

          <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-sm text-[var(--muted-foreground)]">
            <input
              type="checkbox"
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              className="mt-0.5 size-4 accent-[var(--magic-purple-600)]"
            />
            <span>
              Confirmo que cuento con el consentimiento de los asistentes /
              apoderados para publicar estas fotos en la web.
            </span>
          </label>

          <Button
            type="submit"
            disabled={creating || !consentChecked || !newTitle}
            className="mt-4 rounded-full bg-[var(--magic-purple-600)] text-white hover:bg-[var(--magic-purple-700)]"
          >
            <Plus className="size-4" /> {creating ? 'Creando…' : 'Crear evento'}
          </Button>
        </motion.form>

        <div className="mt-10 flex flex-col gap-6">
          {loading && <p className="text-[var(--muted-foreground)]">Cargando eventos…</p>}

          {!loading && events.length === 0 && (
            <p className="text-[var(--muted-foreground)]">Todavía no has creado ningún evento.</p>
          )}

          {events.map((event) => (
            <div key={event.id} className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading text-lg text-[var(--foreground)]">{event.title}</h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                    <Calendar className="size-3.5" />
                    {event.event_date
                      ? new Date(event.event_date).toLocaleDateString('es-CL')
                      : 'Sin fecha'}
                    <ShieldCheck className="ml-2 size-3.5 text-[var(--magic-purple-600)]" />
                    Consentimiento confirmado
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to={`/galeria/${event.slug}`}
                    target="_blank"
                    className="text-sm font-medium text-[var(--magic-purple-600)] hover:underline"
                  >
                    Ver página pública
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDeleteEvent(event)}
                    className="flex size-8 items-center justify-center rounded-full text-[var(--destructive)] hover:bg-[var(--destructive)]/10"
                    aria-label="Eliminar evento"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>

              <label className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[var(--border)] py-6 text-sm text-[var(--muted-foreground)] hover:border-[var(--magic-purple-400)] hover:text-[var(--magic-purple-600)]">
                {uploadingEventId === event.id ? (
                  <Loader2 className="size-5 animate-spin" />
                ) : (
                  <Upload className="size-5" />
                )}
                {uploadingEventId === event.id ? 'Subiendo…' : 'Subir fotos o videos'}
                <input
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  className="hidden"
                  disabled={uploadingEventId === event.id}
                  onChange={(e) => handleUpload(event, e.target.files)}
                />
              </label>

              {event.photos.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {event.photos.map((photo) => (
                    <div key={photo.id} className="group relative aspect-square overflow-hidden rounded-lg bg-[var(--muted)]">
                      {photo.media_type === 'video' ? (
                        <video src={mediaUrl(photo.storage_path)} className="h-full w-full object-cover" />
                      ) : (
                        <img src={mediaUrl(photo.storage_path)} alt="" className="h-full w-full object-cover" />
                      )}
                      <button
                        type="button"
                        onClick={() => handleDeletePhoto(photo)}
                        className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
                        aria-label="Eliminar foto"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
