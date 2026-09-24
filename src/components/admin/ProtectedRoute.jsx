import { Navigate } from 'react-router-dom'
import { useAuth } from '@/lib/useAuth'

export function ProtectedRoute({ children }) {
  const { session, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-[var(--magic-purple-950)] text-white/70">
        Cargando…
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}
