import * as React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Download } from 'lucide-react'
import { cn } from '@/lib/utils'

const GalleryContext = React.createContext(null)

const spring = {
  type: 'spring',
  stiffness: 350,
  damping: 35,
  mass: 1,
}

export function Gallery({ children }) {
  const [selectedImage, setSelectedImage] = React.useState(null)

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedImage])

  return (
    <GalleryContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
      <GalleryModal />
    </GalleryContext.Provider>
  )
}

export function GalleryGrid({ children, className }) {
  return (
    <div className={cn('columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4', className)}>
      {children}
    </div>
  )
}

export function GalleryImage({ src, alt, id, className }) {
  const context = React.useContext(GalleryContext)
  if (!context) throw new Error('GalleryImage must be used within a Gallery')

  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      className={cn('relative mb-4 aspect-square cursor-zoom-in overflow-hidden rounded-xl', className)}
      onClick={() => context.setSelectedImage({ id, src, alt })}
    >
      <motion.img
        layoutId={`image-${id}`}
        src={src}
        alt={alt || 'Foto de galería'}
        className="h-full w-full rounded-xl object-cover"
        variants={{ hover: { scale: 0.98 }, tap: { scale: 0.95 } }}
        transition={spring}
      />
      <motion.div
        variants={{ hover: { opacity: 1 }, tap: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        className="pointer-events-none absolute inset-0 rounded-xl bg-black/10"
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}

function GalleryModal() {
  const context = React.useContext(GalleryContext)
  if (!context) return null

  const { selectedImage, setSelectedImage } = context

  return (
    <AnimatePresence>
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
            onClick={() => setSelectedImage(null)}
          />

          <motion.div
            className="relative z-10 flex h-full w-full cursor-zoom-out items-center justify-center"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.8}
            onDragEnd={(_e, info) => {
              if (Math.abs(info.offset.y) > 100 || Math.abs(info.velocity.y) > 300) {
                setSelectedImage(null)
              }
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              layoutId={`image-${selectedImage.id}`}
              src={selectedImage.src}
              alt={selectedImage.alt || 'Foto seleccionada'}
              className="h-auto max-h-[90vh] w-auto max-w-[95vw] rounded-xl object-contain shadow-2xl will-change-transform"
              draggable={false}
              transition={spring}
            />
          </motion.div>

          <motion.a
            href={selectedImage.src}
            download
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="absolute top-6 right-20 z-50 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
            aria-label="Descargar foto"
          >
            <Download className="size-4" /> Descargar
          </motion.a>

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="absolute top-6 right-6 z-50 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar galería"
          >
            <X className="size-5" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
