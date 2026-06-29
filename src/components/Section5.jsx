import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Drumstick, Egg, Fish } from "lucide-react"
import { useRef } from "react"

function BeefIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-3 0-5 2-5 5 0 2 1 4 2 5l-1 7c0 1 1 2 2 2h4c1 0 2-1 2-2l-1-7c1-1 2-3 2-5 0-3-2-5-5-5z" />
    </svg>
  )
}

const foods = [
  { name: "Frango", icon: Drumstick, proteinPer100g: 31, perUnit: null, unit: "g", label: "gramas" },
  { name: "Ovos", icon: Egg, proteinPer100g: 13, perUnit: 6, unit: "ovos", label: "unidades" },
  { name: "Carne", icon: BeefIcon, proteinPer100g: 26, perUnit: null, unit: "g", label: "gramas" },
  { name: "Peixe", icon: Fish, proteinPer100g: 20, perUnit: null, unit: "g", label: "gramas" },
  { name: "Atum", icon: Fish, proteinPer100g: 25, perUnit: null, unit: "g", label: "gramas" },
]

const distributions = {
  Frango: [
    { name: "Frango", amount: "250g", protein: 78, icon: Drumstick },
    { name: "Ovos", amount: "4 unidades", protein: 24, icon: Egg },
    { name: "Carne", amount: "100g", protein: 26, icon: BeefIcon },
    { name: "Atum", amount: "80g", protein: 20, icon: Fish },
  ],
  Ovos: [
    { name: "Ovos", amount: "10 unidades", protein: 60, icon: Egg },
    { name: "Frango", amount: "150g", protein: 47, icon: Drumstick },
    { name: "Carne", amount: "100g", protein: 26, icon: BeefIcon },
    { name: "Peixe", amount: "100g", protein: 20, icon: Fish },
  ],
  Carne: [
    { name: "Carne", amount: "250g", protein: 65, icon: BeefIcon },
    { name: "Frango", amount: "100g", protein: 31, icon: Drumstick },
    { name: "Ovos", amount: "4 unidades", protein: 24, icon: Egg },
    { name: "Atum", amount: "80g", protein: 20, icon: Fish },
  ],
  Peixe: [
    { name: "Peixe", amount: "300g", protein: 60, icon: Fish },
    { name: "Frango", amount: "100g", protein: 31, icon: Drumstick },
    { name: "Ovos", amount: "4 unidades", protein: 24, icon: Egg },
    { name: "Atum", amount: "80g", protein: 20, icon: Fish },
  ],
  Atum: [
    { name: "Atum", amount: "200g", protein: 50, icon: Fish },
    { name: "Frango", amount: "150g", protein: 47, icon: Drumstick },
    { name: "Ovos", amount: "4 unidades", protein: 24, icon: Egg },
    { name: "Carne", amount: "80g", protein: 21, icon: BeefIcon },
  ],
}

function singleFoodAmount(food, proteinGoal) {
  if (food.perUnit) {
    return { value: Math.ceil(proteinGoal / food.perUnit), label: food.label }
  }
  const grams = Math.round((proteinGoal / food.proteinPer100g) * 100)
  return { value: grams, label: "gramas" }
}

function DistributionItem({ item, isHighlighted }) {
  const Icon = item.icon
  return (
    <div className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${isHighlighted ? "bg-brand-muted/60" : ""}`}>
      <div className="flex items-center gap-2.5">
        <Icon className="w-4 h-4 text-brand-dark shrink-0" strokeWidth={1.5} />
        <span className="text-sm text-text-secondary">
          <strong className="text-text-primary">{item.amount}</strong> de {item.name}
        </span>
      </div>
      <span className="text-sm font-semibold text-brand-dark tabular-nums">{item.protein}g</span>
    </div>
  )
}

export default function Section5() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [weight, setWeight] = useState(70)
  const [selected, setSelected] = useState(null)
  const protein = Math.round(weight * 2)

  const dist = selected ? distributions[selected.name] : null
  const totalDist = dist ? dist.reduce((sum, item) => sum + item.protein, 0) : 0
  const progress = dist ? Math.min(100, Math.round((totalDist / protein) * 100)) : 0

  return (
    <section className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight max-w-2xl mb-16"
        >
          Calcule sua{" "}
          <span className="text-brand-dark">proteina</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-brand-dark rounded-2xl p-8 sm:p-12 text-white text-center"
          >
            <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-4">
              Seu peso
            </p>

            <div className="flex items-center justify-center gap-3 mb-2">
              <button
                onClick={() => setWeight((w) => Math.max(30, w - 1))}
                className="w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors text-lg leading-none flex items-center justify-center"
              >
                -
              </button>
              <div className="relative">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => {
                    const v = parseInt(e.target.value, 10)
                    if (!isNaN(v)) setWeight(Math.min(250, Math.max(30, v)))
                  }}
                  className="w-24 bg-transparent text-5xl sm:text-6xl font-extrabold text-center text-white outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <span className="text-2xl font-normal text-white/60">kg</span>
              </div>
              <button
                onClick={() => setWeight((w) => Math.min(250, w + 1))}
                className="w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors text-lg leading-none flex items-center justify-center"
              >
                +
              </button>
            </div>

            <p className="text-white/40 text-xs mb-1">
              Use os botoes ou digite seu peso
            </p>

            <div className="w-12 h-0.5 bg-white/20 mx-auto my-6" />

            <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-2">
              Proteina diaria
            </p>
            <p className="text-5xl sm:text-6xl font-extrabold text-brand-light">
              {protein}<span className="text-2xl font-normal opacity-60">g</span>
            </p>
            <p className="text-white/40 text-xs mt-4">~ 2g por kg de peso corporal</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">
              Clique em um alimento para saber quanto consumir
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {foods.map((food, i) => {
                const Icon = food.icon
                const isActive = selected?.name === food.name
                return (
                  <motion.button
                    key={food.name}
                    onClick={() => setSelected(isActive ? null : food)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                    className={`border rounded-xl p-5 text-center transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "border-brand-dark bg-brand-dark text-white shadow-md"
                        : "border-gray-warm bg-white hover:border-brand-dark/20 hover:shadow-md text-text-primary"
                    }`}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2" strokeWidth={1.5} />
                    <p className="text-sm font-semibold">{food.name}</p>
                  </motion.button>
                )
              })}
            </div>

            <AnimatePresence mode="wait">
              {selected && (() => {
                const single = singleFoodAmount(selected, protein)
                return (
                  <motion.div
                    key={selected.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="border border-gray-warm rounded-xl p-5 bg-brand-bg"
                  >
                    <p className="text-sm text-text-secondary mb-2">
                      Sua meta diaria e: <strong className="text-text-primary">{protein}g de proteina</strong>
                    </p>
                    <p className="text-sm text-text-secondary mb-2">
                      Para consumir toda essa quantidade apenas com <strong className="text-text-primary">{selected.name.toLowerCase()}</strong>
                      {selected.perUnit ? " seriam necessarios aproximadamente:" : ":"}
                    </p>
                    <p className="text-2xl font-extrabold text-brand-dark mb-3">
                      {single.value} <span className="text-sm font-normal">{single.label}</span>
                    </p>
                    <div className="border-t border-gray-warm pt-3 space-y-1">
                      <p className="text-xs text-text-muted italic">
                        Isso e apenas uma referencia.
                      </p>
                      <p className="text-xs text-text-muted italic">
                        Voce NAO precisa consumir apenas {selected.name.toLowerCase()}.
                      </p>
                      <p className="text-xs text-text-muted italic">
                        Sua meta sera atingida combinando diferentes fontes de proteina ao longo do dia.
                      </p>
                    </div>
                  </motion.div>
                )
              })()}
            </AnimatePresence>
          </motion.div>
        </div>

        <AnimatePresence>
          {selected && dist && (
            <motion.div
              key={`dist-${selected.name}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="max-w-2xl mx-auto mt-12"
            >
              <div className="border border-gray-warm rounded-2xl p-6 sm:p-8 bg-white shadow-sm">
                <h3 className="text-base font-bold text-text-primary mb-5">
                  Exemplo de distribuicao diaria
                </h3>

                <div className="space-y-1 mb-5">
                  {dist.map((item) => (
                    <DistributionItem
                      key={`${selected.name}-${item.name}`}
                      item={item}
                      isHighlighted={item.name === selected.name}
                    />
                  ))}
                </div>

                <div className="border-t border-gray-warm pt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-text-primary">Total aproximado</span>
                  <span className="text-lg font-extrabold text-brand-dark tabular-nums">{totalDist}g de proteina</span>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                    <span>Meta diaria: {protein}g</span>
                    <span>Proteina adicionada: {totalDist}g</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-soft rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        progress >= 100 ? "bg-brand-medium" : "bg-brand-dark"
                      }`}
                    />
                  </div>
                  <p className="text-xs text-text-muted mt-1 text-right">{progress}% da meta</p>
                </div>

                <p className="text-xs text-text-muted mt-5 border-t border-gray-warm pt-4 text-center">
                  Voce pode combinar diferentes alimentos ao longo do dia para atingir sua meta de proteina de forma pratica.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
