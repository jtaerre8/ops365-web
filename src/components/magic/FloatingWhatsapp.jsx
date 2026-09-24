import { motion } from 'motion/react'
import { WhatsappIcon } from './SocialIcons'
import { CONTACT, waLink } from '@/lib/content'

export function FloatingWhatsapp() {
  return (
    <motion.a
      href={waLink('quiero Magia 🪄')}
      target="_blank"
      rel="noreferrer"
      aria-label={`Escribir por WhatsApp a ${CONTACT.phoneDisplay}`}
      initial={{ opacity: 0, scale: 0, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.2, type: 'spring' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-black/25 sm:right-6 sm:bottom-6 sm:size-16"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
      <WhatsappIcon className="relative z-10 size-7 fill-white sm:size-8" />
    </motion.a>
  )
}
