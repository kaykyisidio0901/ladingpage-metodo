import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Camera } from "lucide-react"
import { useRef } from "react"

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <footer className="bg-white border-t border-gray-warm py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-7 h-7 rounded-lg bg-brand-dark flex items-center justify-center">
            <span className="text-white text-xs font-bold">D</span>
          </div>
          <span className="text-sm font-bold text-text-primary">
            Metodo Dieta Inteligente
          </span>
        </div>

        <hr className="border-gray-warm max-w-xs mx-auto mb-6" />

        <p className="text-sm text-text-muted mb-1">
          <strong className="text-text-primary">2026 Metodo Dieta Inteligente.</strong>{" "}
          Todos os direitos reservados.
        </p>
        <p className="text-sm text-text-muted mb-1">
          Produto Digital. Material educativo.
        </p>
        <p className="text-sm text-text-muted max-w-lg mx-auto mb-6">
          Este conteudo nao substitui acompanhamento medico ou nutricional.
        </p>

        <hr className="border-gray-warm max-w-xs mx-auto mb-6" />

        <a
          href="https://instagram.com/metododietainteligente"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand-dark transition-colors"
        >
          <Camera className="w-4 h-4" />
          @metododietainteligente
        </a>

        <div className="flex justify-center gap-6 mt-6 text-xs text-text-muted">
          <a href="#" className="hover:text-brand-dark transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-brand-dark transition-colors">
            Politica de Privacidade
          </a>
          <a href="#" className="hover:text-brand-dark transition-colors">
            Termos de Uso
          </a>
        </div>
      </motion.div>
      </footer>
    )
  }
