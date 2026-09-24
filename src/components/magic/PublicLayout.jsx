import { Navbar } from '@/components/magic/Navbar'
import { Footer } from '@/components/magic/Footer'
import { FloatingWhatsapp } from '@/components/magic/FloatingWhatsapp'

export function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}
