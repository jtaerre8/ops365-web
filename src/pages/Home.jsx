import { Navbar } from '@/components/magic/Navbar'
import { Hero } from '@/components/magic/Hero'
import { Stats } from '@/components/magic/Stats'
import { About } from '@/components/magic/About'
import { Shows } from '@/components/magic/Shows'
import { WhyUs } from '@/components/magic/WhyUs'
import { Testimonials } from '@/components/magic/Testimonials'
import { Gallery } from '@/components/magic/Gallery'
import { Faq } from '@/components/magic/Faq'
import { CTA } from '@/components/magic/CTA'
import { Footer } from '@/components/magic/Footer'
import { FloatingWhatsapp } from '@/components/magic/FloatingWhatsapp'
import { SectionDivider } from '@/components/magic/SectionDivider'
import { useScrollToHash } from '@/lib/useScrollToHash'

export function Home() {
  useScrollToHash()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider from="var(--magic-purple-600)" to="var(--magic-yellow-400)" />
        <Stats />
        <SectionDivider from="var(--magic-yellow-400)" to="var(--background)" />
        <About />
        <Shows />
        <WhyUs />
        <Testimonials />
        <SectionDivider from="var(--background)" to="var(--magic-purple-950)" />
        <Gallery />
        <SectionDivider from="var(--magic-purple-950)" to="var(--muted)" />
        <Faq />
        <SectionDivider from="var(--muted)" to="var(--magic-purple-700)" />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}
