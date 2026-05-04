import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Circle, Disc, Battery, Wind, Gauge, 
  Bike, Sparkles, Settings, ChevronRight 
} from 'lucide-react'

const categories = [
  { 
    id: 1, 
    name: 'Motor', 
    icon: Circle,
    count: 1250,
    color: 'from-orange-500 to-red-600',
    description: 'Peças de motor de alta performance'
  },
  { 
    id: 2, 
    name: 'Freios', 
    icon: Disc,
    count: 890,
    color: 'from-red-500 to-pink-600',
    description: 'Sistemas de freio premium'
  },
  { 
    id: 3, 
    name: 'Elétrica', 
    icon: Battery,
    count: 650,
    color: 'from-yellow-500 to-orange-600',
    description: 'Componentes elétricos confiáveis'
  },
  { 
    id: 4, 
    name: 'Escape', 
    icon: Wind,
    count: 420,
    color: 'from-gray-500 to-gray-700',
    description: 'Escapes esportivos e silenciosos'
  },
  { 
    id: 5, 
    name: 'Painel', 
    icon: Gauge,
    count: 380,
    color: 'from-blue-500 to-cyan-600',
    description: 'Instrumentos e painéis digitais'
  },
  { 
    id: 6, 
    name: 'Suspensão', 
    icon: Bike,
    count: 520,
    color: 'from-green-500 to-emerald-600',
    description: 'Amortecedores e suspensões'
  },
  { 
    id: 7, 
    name: 'Acessórios', 
    icon: Sparkles,
    count: 2100,
    color: 'from-purple-500 to-violet-600',
    description: 'Acessórios e personalização'
  },
  { 
    id: 8, 
    name: 'Manutenção', 
    icon: Settings,
    count: 780,
    color: 'from-teal-500 to-cyan-600',
    description: 'Produtos para manutenção'
  },
]

export default function Categories() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="categorias" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dark-900" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Navegue por Categoria
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Encontre o que você <span className="text-gradient">precisa</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore nossas categorias especializadas e descubra as melhores peças para sua moto
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isHovered = hoveredId === category.id
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                <motion.div
                  className="relative p-6 rounded-2xl glass cursor-pointer overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-px bg-gradient-to-r from-primary-500/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity"
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                      animate={isHovered ? { rotate: 10, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{category.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">
                        {category.count.toLocaleString()} produtos
                      </span>
                      <motion.div
                        animate={isHovered ? { x: 3 } : { x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-4 h-4 text-primary-500" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-2xl"
                    animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 transition-colors"
          >
            Ver Todas as Categorias
            <ChevronRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
