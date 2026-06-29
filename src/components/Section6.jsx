import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Coffee, Apple, Sun, Cookie, Moon, ChevronDown } from "lucide-react"
import { useRef } from "react"
import { CHECKOUT_URL } from "../data/constants"

const meals = [
  {
    time: "Cafe da manha",
    icon: Coffee,
    foods: [
      "3 ovos mexidos",
      "2 fatias de pao integral",
      "1 banana",
      "Cafe sem acucar",
    ],
    kcal: 430,
    protein: 25,
  },
  {
    time: "Lanche da manha",
    icon: Apple,
    foods: [
      "1 iogurte natural desnatado",
      "1 maca",
    ],
    kcal: 180,
    protein: 10,
  },
  {
    time: "Almoco",
    icon: Sun,
    foods: [
      "150 g de frango grelhado",
      "3 colheres de arroz integral",
      "1 concha de feijao",
      "Salada a vontade",
    ],
    kcal: 580,
    protein: 50,
  },
  {
    time: "Lanche da tarde",
    icon: Cookie,
    foods: [
      "1 fatia de queijo branco",
      "1 pera",
      "Castanhas",
    ],
    kcal: 220,
    protein: 12,
  },
  {
    time: "Jantar",
    icon: Moon,
    foods: [
      "150 g de tilapia",
      "Batata-doce",
      "Legumes refogados",
    ],
    kcal: 480,
    protein: 40,
  },
]

function MealCard({ meal, index, isOpen, onToggle }) {
  const Icon = meal.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className={`border border-gray-warm rounded-xl bg-white overflow-hidden transition-shadow duration-300 ${
        isOpen ? "shadow-md shadow-brand-dark/5" : "shadow-sm hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-4 text-left"
      >
        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-bg border border-gray-warm shrink-0">
          <Icon className="w-5 h-5 text-brand-dark" strokeWidth={1.5} />
        </div>
        <span className="flex-1 text-sm font-bold text-text-primary">{meal.time}</span>
        <ChevronDown
          className={`w-4 h-4 text-text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={2}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-4 pt-0 border-t border-gray-warm">
            <ul className="space-y-1.5 mt-3 mb-3">
              {meal.foods.map((food) => (
                <li key={food} className="flex items-center gap-2.5 text-sm text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-dark/40 shrink-0" />
                  {food}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 text-xs text-text-muted pt-2 border-t border-gray-warm/60">
              <span className="flex items-center gap-1">
                <span className="font-semibold text-text-primary tabular-nums">{meal.kcal}</span> kcal
              </span>
              <span className="w-px h-3 bg-gray-warm" />
              <span className="flex items-center gap-1">
                <span className="font-semibold text-text-primary tabular-nums">{meal.protein}g</span> protein
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Section6() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 lg:py-32 bg-brand-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight max-w-2xl mb-16"
        >
          Exemplo de <span className="text-brand-dark">cardapio</span>
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-3">
          {meals.map((meal, i) => (
            <MealCard
              key={meal.time}
              meal={meal}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="max-w-2xl mx-auto mt-6 border border-gray-warm rounded-xl p-5 bg-white text-center"
        >
          <p className="text-sm text-text-secondary leading-relaxed">
            <strong className="text-text-primary">Este e apenas um exemplo.</strong> No guia voce aprende a montar uma dieta personalizada para o seu objetivo, utilizando alimentos que fazem parte da sua rotina.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center bg-brand-dark text-white font-bold text-sm sm:text-base px-10 py-4 rounded-xl hover:bg-brand-medium transition-all duration-300 shadow-lg shadow-brand-dark/20 hover:shadow-xl hover:shadow-brand-dark/30 hover:-translate-y-0.5"
          >
            QUERO APRENDER
          </a>
        </motion.div>
      </div>
    </section>
  )
}
