import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const items = [
  {
    title: "Como o emagrecimento funciona",
    text: "Entenda o balanço calórico e os princípios científicos por trás da perda de peso sustentável.",
  },
  {
    title: "Como calcular calorias",
    text: "Aprenda a descobrir exatamente quantas calorias você precisa consumir para atingir seus objetivos.",
  },
  {
    title: "Como calcular proteínas",
    text: "Descubra a quantidade ideal de proteína para preservar massa muscular durante o processo.",
  },
  {
    title: "Como montar refeições",
    text: "Monte pratos equilibrados e saborosos seguindo uma estrutura simples e flexível.",
  },
  {
    title: "Substituições inteligentes",
    text: "Saiba trocar alimentos sem prejudicar seus resultados e sem cair na monotonia.",
  },
  {
    title: "Checklist Final",
    text: "Um resumo prático de tudo que você precisa aplicar para começar hoje mesmo.",
  },
]

export default function Section3() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight max-w-2xl mb-16"
        >
          O que você vai <span className="text-brand-dark">aprender</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group border border-gray-warm rounded-xl p-7 bg-white hover:border-brand-dark/20 hover:shadow-lg hover:shadow-brand-dark/5 transition-all duration-300"
            >
              <span className="text-brand-dark/30 text-lg font-bold block mb-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-brand-dark transition-colors">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
