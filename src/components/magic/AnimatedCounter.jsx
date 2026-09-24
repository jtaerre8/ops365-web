import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'motion/react'

export function AnimatedCounter({ value }) {
  const match = value.match(/^([\d.]+)(\D*)$/)
  const numeric = match ? parseInt(match[1].replace(/\./g, ''), 10) : null
  const suffix = match ? match[2] : ''

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString('es-CL'))

  useEffect(() => {
    if (isInView && numeric !== null) {
      const controls = animate(count, numeric, { duration: 1.6, ease: 'easeOut' })
      return () => controls.stop()
    }
  }, [isInView, numeric, count])

  if (numeric === null) {
    return <span ref={ref}>{value}</span>
  }

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
