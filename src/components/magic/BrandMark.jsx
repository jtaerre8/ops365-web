import { motion } from 'motion/react'

export function BrandMark({ size = 38, className = '', photo = null }) {
  const hoverProps = photo
    ? {
        whileHover: { scale: 1.12, rotate: -4 },
        whileTap: { scale: 0.94 },
        transition: { type: 'spring', stiffness: 320, damping: 14 },
      }
    : {}

  return (
    <motion.span
      {...hoverProps}
      className={`relative inline-flex shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: photo ? undefined : 'linear-gradient(145deg, var(--magic-purple-500), var(--magic-purple-800))',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 4px 14px -4px rgba(91,33,182,0.6)',
      }}
    >
      {photo ? (
        <img src={photo} alt="Mago Prat" className="h-full w-full object-cover" style={{ objectPosition: '50% 25%' }} />
      ) : (
        <span
          className="font-logo font-bold text-transparent"
          style={{
            fontSize: size * 0.42,
            backgroundImage: 'linear-gradient(135deg, #fff7d6, var(--magic-yellow-300))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          MP
        </span>
      )}
      <span
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.15)' }}
        aria-hidden="true"
      />
    </motion.span>
  )
}
