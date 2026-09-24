import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

// Web fonts (Baloo 2, Geist) load async and reflow the page after
// ScrollTriggers are first created, leaving their start/end positions
// stale. Refresh once everything has settled.
if (typeof document !== 'undefined') {
  document.fonts?.ready?.then(() => ScrollTrigger.refresh())
}

export { gsap, ScrollTrigger, SplitText, useGSAP }
