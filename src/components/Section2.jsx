import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Layers, BookOpen, ListChecks } from "lucide-react"
import { useRef } from "react"

const cards = [
  {
    icon: Layers,
    title: "Simples",
    text: "Linguagem acessivel. Explicamos cada conceito de forma clara e direta, sem complicacao.",
  },
  {
    icon: BookOpen,
    title: "Pratico",
    text: "Exemplos reais. Voce aprende na pratica como aplicar cada ensinamento no seu dia a dia.",
  },
  {
    icon: ListChecks,
    title: "Organizado",
    text: "Passo a passo. Uma sequencia logica e progressiva para voce evoluir sem se perder.",
  },
]

function Card({ icon: Icon, title, text, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="border border-gray-warm rounded-xl p-8 sm:p-10 bg-white hover:shadow-lg hover:shadow-brand-dark/5 transition-shadow duration-300"
    >
      <Icon className="w-7 h-7 text-brand-dark mb-5" strokeWidth={1.5} />
      <h3 className="text-lg font-bold text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{text}</p>
    </motion.div>
  )
}

export default function Section2() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="aprender" className="py-24 lg:py-32 bg-brand-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight max-w-2xl mb-16"
        >
          Um guia criado para quem quer{" "}
          <span className="text-brand-dark">aprender de verdade.</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <Card key={card.title} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
