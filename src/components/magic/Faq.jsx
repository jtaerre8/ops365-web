import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQS } from '@/lib/content'
import { Reveal } from './Reveal'

export function Faq() {
  return (
    <section id="faq" className="bg-[var(--muted)] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--magic-purple-500)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--magic-purple-700)]">
            <HelpCircle className="size-4" /> Preguntas frecuentes
          </span>
          <h2 className="mt-4 text-4xl tracking-tight text-[var(--foreground)] sm:text-5xl">
            Respondo a todas tus dudas
          </h2>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-10 rounded-2xl border border-[var(--border)] bg-white px-5 py-2 shadow-[0_10px_40px_-20px_rgba(30,16,53,0.25)] sm:px-6"
        >
          <Accordion>
            {FAQS.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[var(--muted-foreground)]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
