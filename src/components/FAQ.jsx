import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const faqs = [
  {
    q: "Como recebo o material?",
    a: "Após a confirmação do pagamento, você recebe um e-mail com o link para download do PDF. O acesso é imediato.",
  },
  {
    q: "É PDF?",
    a: "Sim! O guia é entregue em formato PDF, compatível com qualquer dispositivo — computador, tablet ou celular.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Com certeza. O PDF é otimizado para leitura em qualquer tela, incluindo smartphones.",
  },
  {
    q: "É vitalício?",
    a: "Sim! Após a compra, você tem acesso permanente ao material. Pode baixar e consultar quando quiser.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento é processado de forma 100% segura pela Cakto. Aceitamos cartão de crédito, boleto e PIX.",
  },
]

function FAQItem({ item, isOpen, onClick, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
      className={`border border-gray-warm rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? "border-brand-dark/20" : ""
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-brand-bg/50 transition-colors"
      >
        <span className="text-sm font-semibold text-text-primary">{item.q}</span>
        <span
          className={`text-brand-dark text-lg transition-transform duration-300 ml-4 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-4 text-sm text-text-secondary leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 lg:py-32 bg-brand-bg" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight text-center mb-16"
        >
          Perguntas <span className="text-brand-dark">Frequentes</span>
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              inView={inView}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
