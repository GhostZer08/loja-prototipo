import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Truck, ShieldCheck, Clock, CreditCard, 
  Headphones, RefreshCw, Package, Award 
} from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Enviamos para todo Brasil em até 48h. Frete grátis em compras acima de R$ 500.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShieldCheck,
    title: 'Garantia Real',
    description: 'Todas as peças possuem garantia de 12 meses contra defeitos de fabricação.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'Suporte 24/7',
    description: 'Nossa equipe está disponível 24 horas para ajudar com suas dúvidas.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: CreditCard,
    title: 'Pagamento Seguro',
    description: 'Parcele em até 12x sem juros. Ambiente 100% seguro e criptografado.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Headphones,
    title: 'Atendimento VIP',
    description: 'Clientes especiais têm acesso a atendimento prioritário e exclusivo.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: RefreshCw,
    title: 'Troca Fácil',
    description: 'Não serviu? Troque em até 30 dias sem burocracia ou custo adicional.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Package,
    title: 'Embalagem Premium',
    description: 'Suas peças chegam embaladas com proteção reforçada e lacre de segurança.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Award,
    title: 'Qualidade Certificada',
    description: 'Todas as peças passam por rigoroso controle de qualidade antes do envio.',
    color: 'from-yellow-500 to-orange-500'
  }
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      <div className="relative p-6 rounded-2xl glass border border-white/5 h-full">
        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{ 
            background: [
              'linear-gradient(90deg, rgba(249,115,22,0) 0%, rgba(249,115,22,0) 100%)',
              'linear-gradient(90deg, rgba(249,115,22,0.2) 0%, rgba(249,115,22,0.2) 100%)',
              'linear-gradient(90deg, rgba(249,115,22,0) 0%, rgba(249,115,22,0) 100%)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {feature.description}
        </p>

        {/* Hover Glow */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
    </motion.div>
  )
}

export default function Features() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dark-900" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Por que escolher a MotoPeças?
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Vantagens <span className="text-gradient">Exclusivas</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos o melhor serviço do mercado para garantir sua satisfação
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-primary-900/50 to-dark-800 border border-primary-500/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Anos no Mercado' },
              { value: '500K+', label: 'Pedidos Entregues' },
              { value: '98%', label: 'Clientes Satisfeitos' },
              { value: '24h', label: 'Suporte Disponível' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
