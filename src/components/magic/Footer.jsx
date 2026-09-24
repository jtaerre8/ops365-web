import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, WhatsappIcon } from './SocialIcons'
import { BrandMark } from './BrandMark'
import { CONTACT, waLink } from '@/lib/content'

const LINKS = [
  { to: '/#inicio', label: 'Inicio' },
  { to: '/#nosotros', label: 'Nosotros' },
  { to: '/#shows', label: 'Shows' },
  { to: '/galeria', label: 'Galería' },
  { to: '/#faq', label: 'Preguntas' },
]

export function Footer() {
  return (
    <footer id="contacto" className="bg-[var(--magic-purple-950)] pt-16 pb-24 sm:pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <Link to="/#inicio" className="font-logo flex items-center gap-2.5 text-xl font-bold text-white">
            <BrandMark size={36} />
            Mago Prat
          </Link>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Shows de magia infantil llenos de alegría, diversión y un mundo
            de felicidad para toda la familia.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white shadow-[0_0_0_0_rgba(250,204,21,0)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--magic-yellow-400)] hover:text-[var(--magic-purple-950)] hover:shadow-[0_10px_20px_-6px_rgba(250,204,21,0.5)]"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--magic-yellow-400)] hover:text-[var(--magic-purple-950)] hover:shadow-[0_10px_20px_-6px_rgba(250,204,21,0.5)]"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href={waLink('quiero Magia 🪄')}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:shadow-[0_10px_20px_-6px_rgba(37,211,102,0.5)]"
            >
              <WhatsappIcon className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold tracking-wide text-white/50 uppercase">Links</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-block text-sm text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-[var(--magic-yellow-400)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold tracking-wide text-white/50 uppercase">Contacto</h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a
                href={waLink('quiero Magia 🪄')}
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-2 text-sm text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-[var(--magic-yellow-400)]"
              >
                <Phone className="size-4" /> {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex w-fit items-center gap-2 text-sm text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-[var(--magic-yellow-400)]"
              >
                <Mail className="size-4" /> {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-6 text-center text-xs text-white/40 sm:px-6">
        © {new Date().getFullYear()} Mago Prat. Todos los derechos reservados.
      </div>
    </footer>
  )
}
