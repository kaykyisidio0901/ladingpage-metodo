import { motion } from "framer-motion"
import { Check, Lock, Zap, Smartphone } from "lucide-react"
import { CHECKOUT_URL, PRICE, PRODUCT, PRODUCT_IMAGE } from "../data/constants"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            className="order-2 lg:order-1"
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-medium bg-brand-muted px-4 py-1.5 rounded-full mb-6"
            >
              {PRODUCT.tag}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-[1.08] tracking-tight mb-5"
            >
              {PRODUCT.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              {PRODUCT.description}
            </motion.p>

            <motion.ul
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="space-y-2.5 mb-8"
            >
              {[
                "Descubra quantas calorias consumir",
                "Calcule sua proteina diaria",
                "Monte sua alimentacao",
                "Faca substituicoes inteligentes",
                "Comece hoje mesmo",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <Check className="w-4 h-4 text-brand-medium shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-sm text-text-muted line-through mb-1">
                De {PRICE.original}
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold text-text-primary">
                Por apenas{" "}
                <span className="text-brand-dark">{PRICE.current}</span>
              </p>
            </motion.div>

            <motion.a
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              href="#aprender"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-brand-dark text-white font-bold text-sm sm:text-base px-10 py-4 rounded-xl hover:bg-brand-medium transition-all duration-300 shadow-lg shadow-brand-dark/20 hover:shadow-xl hover:shadow-brand-dark/30 hover:-translate-y-0.5"
            >
              QUERO COMEÇAR AGORA
            </motion.a>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-5 mt-5 text-xs text-text-muted"
            >
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> Compra Segura
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Acesso imediato
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" /> Funciona no celular
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(75, 160, 120, 0.35) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <motion.img
                src={PRODUCT_IMAGE}
                alt="Monte Sua Dieta do Zero - Guia Pratico Digital"
                loading="lazy"
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                style={{ aspectRatio: "400/520" }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
