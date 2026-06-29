import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const checklist = [
  "Descobri minhas calorias",
  "Calculei minha proteína",
  "Montei minha dieta",
  "Fiz minha lista de compras",
]

export default function Section8() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-24 lg:py-32 bg-brand-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight max-w-2xl mb-16"
        >
          Seu <span className="text-brand-dark">checklist</span> final
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto bg-white border border-gray-warm rounded-2xl p-8 sm:p-10 shadow-sm"
        >
          <p className="text-lg font-bold text-text-primary mb-6">Checklist</p>
          <div className="space-y-4">
            {checklist.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-brand-dark flex items-center justify-center shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm text-text-secondary">{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-8 pt-6 border-t border-gray-warm"
          >
            <p className="text-xs text-text-muted text-center">
              Você está pronto para começar!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
