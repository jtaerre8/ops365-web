import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

/**
 * Scroll-triggered reveal. Animates its own children (or, with `stagger`,
 * each direct child) once when the element enters the viewport.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  y = 28,
  x = 0,
  scale = 1,
  delay = 0,
  duration = 0.7,
  stagger,
  start = 'top 85%',
  ease = 'power3.out',
}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const targets = stagger ? ref.current.children : ref.current
      gsap.from(targets, {
        opacity: 0,
        y,
        x,
        scale,
        duration,
        delay,
        stagger,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref }
  )

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
