import { motion } from 'motion/react'
import { Wand2, Sparkles, Users, CalendarCheck } from 'lucide-react'
import { STATS } from '@/lib/content'
import retratoImg from '@/assets/alfredo-retrato.jpg'

const ORBIT = [
  { r: 48, offset: 15, size: 14 },
  { r: 54, offset: 140, size: 10 },
  { r: 46, offset: 250, size: 16 },
  { r: 52, offset: 320, size: 9 },
]

const CHIPS = [
  { icon: CalendarCheck, value: STATS[0].value, label: STATS[0].label, className: '-top-2 -left-6 sm:-left-10', delay: 0 },
  { icon: Sparkles, value: STATS[1].value, label: STATS[1].label, className: 'top-1/2 -right-6 -translate-y-1/2 sm:-right-12', delay: 0.6 },
  { icon: Users, value: STATS[2].value, label: STATS[2].label, className: '-bottom-4 left-1/4 sm:left-6', delay: 1.2 },
]

export function HeroEmblem({ className = '', rotateX, rotateY }) {
  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`relative flex items-center justify-center ${className}`}
    >
      {/* ambient glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[var(--magic-yellow-400)]/25 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-6 rounded-full bg-[var(--magic-purple-400)]/20 blur-2xl" />

      {/* rotating rings — pure CSS animation, off the JS thread */}
      <div
        className="animate-spin-cw absolute inset-[6%] rounded-full opacity-70"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0%, rgba(250,204,21,0.85) 12%, transparent 28%, transparent 50%, rgba(250,204,21,0.5) 62%, transparent 78%)',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
          WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
          animationDuration: '18s',
        }}
      />
      <div
        className="animate-spin-ccw absolute inset-[13%] rounded-full border border-dashed border-white/25"
        style={{ animationDuration: '26s' }}
      />

      {/* orbiting sparkles — one shared rotation group instead of one per sparkle */}
      <div className="animate-spin-cw absolute inset-0" style={{ animationDuration: '24s' }}>
        {ORBIT.map((s, i) => (
          <motion.span
            key={i}
            className="absolute text-[var(--magic-yellow-300)] drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]"
            style={{
              top: `${50 + Math.sin((s.offset * Math.PI) / 180) * s.r}%`,
              left: `${50 + Math.cos((s.offset * Math.PI) / 180) * s.r}%`,
              fontSize: s.size,
              translate: '-50% -50%',
            }}
            animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          >
            ✦
          </motion.span>
        ))}
      </div>

      {/* glass core — real photo now, still the brand badge */}
      <motion.div
        whileHover={{ scale: 1.06, rotate: 1.5 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
        className="relative z-10 h-[64%] w-[64%] cursor-pointer overflow-hidden rounded-full border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_60px_-15px_rgba(0,0,0,0.6)]"
      >
        <img
          src={retratoImg}
          alt="Alfredo González, el Mago Prat"
          className="h-full w-full object-cover"
          style={{ objectPosition: '50% 28%' }}
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-gradient-to-t from-black/75 via-black/40 to-transparent py-3 text-[11px] font-semibold tracking-[0.25em] text-white uppercase">
          <Wand2 className="size-3" /> Mago Prat
        </div>
      </motion.div>

      {/* floating stat chips */}
      {CHIPS.map(({ icon: Icon, value, label, className: pos, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.8 + delay },
            scale: { duration: 0.5, delay: 0.8 + delay },
            y: { duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay },
          }}
          className={`absolute z-20 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur-md ${pos}`}
        >
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--magic-yellow-400)]/20 text-[var(--magic-yellow-300)]">
            <Icon className="size-3.5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-white">{value}</span>
            <span className="text-[10px] whitespace-nowrap text-white/60">{label}</span>
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}
