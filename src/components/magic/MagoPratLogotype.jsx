import { motion } from 'motion/react'
import logoImg from '@/assets/mago-prat-logo.jpg'

/**
 * The "Mago Prat" graffiti wordmark — approved artwork, not CSS type.
 * A saturate/contrast filter keeps its purple in step with the site's
 * more vibrant purple palette.
 */
export function MagoPratLogotype({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'backOut' }}
      whileHover={{ scale: 1.07, rotate: 2, transition: { type: 'spring', stiffness: 300, damping: 12 } }}
      whileTap={{ scale: 0.96, rotate: -1, transition: { duration: 0.15 } }}
      className={`relative inline-flex cursor-pointer ${className}`}
    >
      <img
        src={logoImg}
        alt="Mago Prat"
        draggable={false}
        className="w-[18rem] rounded-2xl shadow-[8px_9px_0_0_#0d0817] transition-shadow duration-300 select-none hover:shadow-[10px_13px_0_0_#0d0817] sm:w-[26rem]"
        style={{ filter: 'saturate(1.35) contrast(1.08)' }}
      />
    </motion.div>
  )
}
