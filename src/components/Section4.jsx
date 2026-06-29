import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { UtensilsCrossed, Heart, Flame } from "lucide-react"
import { useRef } from "react"

const states = [
  { label: "Consumo = Gasto", result: "Peso estavel", color: "text-text-muted" },
  { label: "Consumo < Gasto", result: "Emagrecimento", color: "text-brand-medium" },
  { label: "Consumo > Gasto", result: "Ganho de peso", color: "text-text-primary" },
]

const flowItems = [
  { label: "Calorias Consumidas", icon: UtensilsCrossed },
  { label: "Seu Corpo", icon: Heart },
  { label: "Calorias Gastas", icon: Flame },
]

export default function Section4() {
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
          Como o{" "}
          <span className="text-brand-dark">emagrecimento funciona</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-gray-warm rounded-2xl p-8 sm:p-12 mb-12"
        >
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-2xl mb-8">
              {flowItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="w-7 h-7 mx-auto mb-3 text-brand-dark" strokeWidth={1.5} />
                    <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                      {item.label}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="flex items-center gap-2 text-xs text-text-muted mb-6">
              <span>Consumidas</span>
              <div className="w-16 h-px bg-gray-warm" />
              <span className="font-semibold text-text-primary">Corpo</span>
              <div className="w-16 h-px bg-gray-warm" />
              <span>Gastas</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {states.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="border border-gray-warm rounded-xl p-6 bg-white text-center"
            >
              <p className="text-sm font-semibold text-text-secondary mb-2">
                {item.label}
              </p>
              <p className={`text-lg font-bold ${item.color}`}>{item.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
