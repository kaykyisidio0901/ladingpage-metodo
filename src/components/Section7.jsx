import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Drumstick, Egg, Fish, Wheat, UtensilsCrossed } from "lucide-react"
import { useRef } from "react"

function PotatoIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="14" rx="6" ry="7" />
      <circle cx="9" cy="8" r="1.5" />
      <circle cx="15" cy="8" r="1.5" />
    </svg>
  )
}

function PastaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3v18" />
      <path d="M9 3v18" />
      <path d="M13 3v18" />
      <path d="M17 3v18" />
      <path d="M21 3v18" />
    </svg>
  )
}

const iconMap = {
  Arroz: Wheat,
  Frango: Drumstick,
  Batata: PotatoIcon,
  Ovos: Egg,
  Macarrao: PastaIcon,
  Peixe: Fish,
}

export default function Section7() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const rows = [
    { food: "Arroz", cat: "Carboidrato", subs: ["Batata", "Mandioca", "Macarrao"] },
    { food: "Frango", cat: "Proteina", subs: ["Ovos", "Peixe", "Carne"] },
    { food: "Batata", cat: "Carboidrato", subs: ["Arroz", "Mandioca", "Macarrao"] },
    { food: "Ovos", cat: "Proteina", subs: ["Frango", "Peixe", "Carne"] },
    { food: "Macarrao", cat: "Carboidrato", subs: ["Arroz", "Batata", "Mandioca"] },
    { food: "Peixe", cat: "Proteina", subs: ["Frango", "Carne", "Ovos"] },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight max-w-2xl mb-16"
        >
          Substituicoes{" "}
          <span className="text-brand-dark">inteligentes</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="border border-gray-warm rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-brand-bg border-b border-gray-warm">
            <div className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Alimento</div>
            <div className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Substituicoes</div>
            <div className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Categoria</div>
          </div>
          {rows.map((row, i) => {
            const Icon = iconMap[row.food]
            return (
              <motion.div
                key={row.food}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
                className={`grid grid-cols-3 items-center ${
                  i % 2 === 0 ? "bg-white" : "bg-brand-bg/50"
                } border-b border-gray-warm last:border-b-0`}
              >
                <div className="px-6 py-4 flex items-center gap-3">
                  <Icon className="w-5 h-5 text-brand-dark" strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-text-primary">{row.food}</span>
                </div>
                <div className="px-6 py-4 flex flex-wrap gap-1.5">
                  {row.subs.map((sub) => (
                    <span
                      key={sub}
                      className="text-xs bg-brand-muted text-brand-dark px-2.5 py-1 rounded-full"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
                <div className="px-6 py-4">
                  <span className="text-xs text-text-muted">{row.cat}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
