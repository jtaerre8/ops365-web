import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

const FRAME_OFFSET = -30
const FRAMES_VISIBLE_LENGTH = 3

function clamp(val, [min, max]) {
  return Math.min(Math.max(val, min), max)
}

function ReviewCard({ review, index, activeIndex, totalCards }) {
  const shouldReduceMotion = useReducedMotion()
  const offsetIndex = index - activeIndex

  const blur = activeIndex > index ? 2 : 0
  const opacity = activeIndex > index ? 0 : 1
  const scale = shouldReduceMotion ? 1 : clamp(1 - offsetIndex * 0.08, [0.08, 2])
  const y = shouldReduceMotion
    ? 0
    : clamp(offsetIndex * FRAME_OFFSET, [FRAME_OFFSET * FRAMES_VISIBLE_LENGTH, Number.POSITIVE_INFINITY])

  const isActive = index === activeIndex

  return (
    <motion.figure
      animate={{
        y,
        scale,
        transition: { type: 'spring', stiffness: 250, damping: 20, mass: 0.5, duration: 0.25 },
      }}
      className="absolute top-1/2 left-1/2 w-[calc(100%-2rem)] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[var(--border)] bg-white/95 p-5 shadow-xl backdrop-blur-md sm:p-7"
      initial={false}
      style={{
        borderWidth: 1 / scale,
        willChange: 'opacity, filter, transform',
        filter: `blur(${blur}px)`,
        opacity,
        transitionProperty: 'opacity, filter',
        transitionDuration: shouldReduceMotion ? '0ms' : '250ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: totalCards - index,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      <blockquote className="relative">
        <div className="absolute -top-1 -left-2 font-heading text-5xl leading-none text-[var(--magic-purple-500)]/15">
          &ldquo;
        </div>
        <p className="relative text-sm leading-relaxed text-[var(--foreground)] sm:text-base">{review.body}</p>
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-2 border-t border-[var(--border)] pt-4">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-[var(--foreground)]">{review.author}</span>
          <span className="text-xs text-[var(--muted-foreground)]">{review.title}</span>
        </div>
      </figcaption>
    </motion.figure>
  )
}

function NavigationButton({ direction, onClick, disabled }) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight

  return (
    <button
      aria-label={direction === 'prev' ? 'Anterior' : 'Siguiente'}
      className={cn(
        'group relative z-0 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-white/80 backdrop-blur-sm transition-all duration-200',
        disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer hover:border-[var(--magic-purple-400)] hover:bg-white hover:shadow-lg'
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <Icon className="size-4 text-[var(--muted-foreground)] transition-colors group-hover:text-[var(--magic-purple-600)]" />
    </button>
  )
}

export default function ReviewsCarousel({
  reviews,
  className = '',
  height = '320px',
  showIndicators = true,
  showNavigation = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}) {
  const maxIndex = reviews.length - 1
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay || maxIndex < 0) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, maxIndex])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') setActiveIndex((i) => clamp(i - 1, [0, maxIndex]))
      else if (event.key === 'ArrowRight') setActiveIndex((i) => clamp(i + 1, [0, maxIndex]))
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [maxIndex])

  const goToPrevious = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
  const goToNext = () => setActiveIndex((prev) => (prev + 1 <= maxIndex ? prev + 1 : prev))

  if (reviews.length === 0) return null

  return (
    <div className={cn('relative mx-auto w-full max-w-4xl', className)} style={{ height }}>
      <div className="relative h-full w-full py-8">
        <div className="grid h-full w-full place-items-center">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} activeIndex={activeIndex} totalCards={reviews.length} />
          ))}
        </div>
      </div>

      {(showNavigation || showIndicators) && (
        <div className="absolute bottom-2 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2">
          {showNavigation && <NavigationButton direction="prev" disabled={activeIndex <= 0} onClick={goToPrevious} />}
          {showIndicators && (
            <div className="flex items-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={review.id}
                  aria-label={`Ir al testimonio ${index + 1}`}
                  className={cn(
                    'h-2 rounded-full transition-all duration-200',
                    index === activeIndex ? 'w-8 bg-[var(--magic-purple-600)]' : 'w-2 bg-[var(--magic-purple-600)]/30 hover:bg-[var(--magic-purple-600)]/50'
                  )}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
          )}
          {showNavigation && <NavigationButton direction="next" disabled={activeIndex === maxIndex} onClick={goToNext} />}
        </div>
      )}
    </div>
  )
}
