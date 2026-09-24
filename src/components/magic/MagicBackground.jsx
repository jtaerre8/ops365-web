import { motion } from 'motion/react'
import { Sparkles, Star, Wand2 } from 'lucide-react'

const ICONS = [Sparkles, Star, Sparkles, Star, Wand2, Star]

function seededItems(count, seed) {
  return Array.from({ length: count }, (_, i) => {
    const n = Math.sin(seed + i * 12.9898) * 43758.5453
    const frac = n - Math.floor(n)
    return frac
  })
}

export function MagicBackground({ count = 10, tone = 'light', className = '' }) {
  const top = seededItems(count, 1.3)
  const left = seededItems(count, 4.7)
  const size = seededItems(count, 9.1)
  const delay = seededItems(count, 17.2)
  const duration = seededItems(count, 23.6)
  const depth = seededItems(count, 31.9)

  const color = tone === 'dark' ? 'text-[var(--magic-yellow-400)]' : 'text-[var(--magic-purple-500)]'

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {top.map((t, i) => {
        const Icon = ICONS[i % ICONS.length]
        const d = depth[i]
        // depth-of-field: far items are small/blurred/dim/slow, near items are bigger/sharp/bright/fast
        const layerScale = 0.55 + d * 1.1
        const px = (14 + size[i] * 16) * layerScale
        const blurPx = d < 0.35 ? (0.35 - d) * 8 : 0
        const baseOpacity = 0.25 + d * 0.55
        const travel = 12 + d * 22
        const glow = d > 0.7 ? `drop-shadow(0 0 ${4 + d * 6}px currentColor)` : 'none'

        return (
          <motion.div
            key={i}
            className={`absolute ${color}`}
            style={{
              top: `${t * 100}%`,
              left: `${left[i] * 100}%`,
              filter: blurPx ? `blur(${blurPx}px) ${glow}` : glow,
              zIndex: Math.round(d * 10),
            }}
            animate={{
              y: [0, -travel, 0],
              rotate: [0, 15, -10, 0],
              opacity: [baseOpacity * 0.5, baseOpacity, baseOpacity * 0.5],
            }}
            transition={{
              duration: (4 + duration[i] * 4) * (1.4 - d * 0.5),
              delay: delay[i] * 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon style={{ width: px, height: px }} fill="currentColor" strokeWidth={0.5} />
          </motion.div>
        )
      })}
    </div>
  )
}
