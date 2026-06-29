import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Lock, Zap, Smartphone } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { CHECKOUT_URL, PRICE } from "../data/constants"

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 37, seconds: 42 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
          if (minutes < 0) {
            minutes = 59
            hours--
            if (hours < 0) {
              hours = 0; minutes = 0; seconds = 0
              clearInterval(timer)
            }
          }
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <p className="text-xs text-text-muted flex items-center justify-center gap-2 mt-4">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
      Oferta por tempo limitado —{" "}
      <span className="font-semibold text-text-primary tabular-nums">
        {String(timeLeft.hours).padStart(2, "0")}:
        {String(timeLeft.minutes).padStart(2, "0")}:
        {String(timeLeft.seconds).padStart(2, "0")}
      </span>
    </p>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center border border-gray-warm rounded-2xl p-8 sm:p-12 shadow-sm"
        >
          <p className="text-sm text-text-muted line-through mb-2">
            De {PRICE.original}
          </p>
          <p className="text-4xl sm:text-5xl font-extrabold text-text-primary mb-1">
            <span className="text-brand-dark">{PRICE.current}</span>
          </p>
          <p className="text-sm text-text-muted mb-8">
            ou {PRICE.installment}
          </p>

          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center w-full bg-brand-dark text-white font-bold text-sm sm:text-base px-10 py-4 rounded-xl hover:bg-brand-medium transition-all duration-300 shadow-lg shadow-brand-dark/20 hover:shadow-xl hover:shadow-brand-dark/30 hover:-translate-y-0.5"
          >
            ADQUIRIR AGORA
          </a>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" /> Compra Segura
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> Acesso imediato
            </span>
            <span className="flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5" /> Funciona no celular
            </span>
          </div>

          <Countdown />
        </motion.div>
      </div>
    </section>
  )
}
