import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { PublicGallery } from '@/pages/PublicGallery'
import { EventGallery } from '@/pages/EventGallery'
import { AdminLogin } from '@/pages/AdminLogin'
import { AdminDashboard } from '@/pages/AdminDashboard'
import { ProtectedRoute } from '@/components/admin/ProtectedRoute'
import { DemoLightbox } from '@/pages/DemoLightbox'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<PublicGallery />} />
        <Route path="/galeria/:slug" element={<EventGallery />} />
        <Route path="/demo-lightbox" element={<DemoLightbox />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
