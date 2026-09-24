import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Lock, LogIn, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MagicBackground } from '@/components/magic/MagicBackground'
import { BrandMark } from '@/components/magic/BrandMark'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { useAuth } from '@/lib/useAuth'

export function AdminLogin() {
  const { session, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (!loading && session) {
    return <Navigate to="/admin" replace />
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!isSupabaseConfigured) {
      setError('El panel aún no está conectado a la base de datos.')
      return
    }

    setSubmitting(true)
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    setSubmitting(false)

    if (authError) {
      setError('Correo o contraseña incorrectos.')
    }
  }

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--magic-purple-950)] via-[var(--magic-purple-800)] to-[var(--magic-purple-600)] px-4">
      <MagicBackground count={14} tone="dark" />
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl"
      >
        <div className="mb-6 text-center">
          <BrandMark size={64} className="mx-auto" />
          <h1 className="mt-3 font-heading text-2xl text-[var(--foreground)]">Panel del Mago</h1>
          <p className="mt-1 text-sm text-[var(--muted-foreground)]">Acceso solo para administración</p>
        </div>

        <label className="mb-3 flex items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2.5">
          <Mail className="size-4 text-[var(--muted-foreground)]" />
          <input
            type="email"
            required
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-sm outline-none"
          />
        </label>

        <label className="mb-4 flex items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2.5">
          <Lock className="size-4 text-[var(--muted-foreground)]" />
          <input
            type="password"
            required
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-sm outline-none"
          />
        </label>

        {error && <p className="mb-4 text-sm text-[var(--destructive)]">{error}</p>}

        <Button type="submit" disabled={submitting} className="w-full rounded-full bg-[var(--magic-purple-600)] text-white hover:bg-[var(--magic-purple-700)]">
          <LogIn className="size-4" /> {submitting ? 'Entrando…' : 'Entrar'}
        </Button>
      </motion.form>
    </div>
  )
}
