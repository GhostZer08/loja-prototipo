import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Heart, Star, Eye, Check, X } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Kit Transmissão Premium',
    price: 299.90,
    oldPrice: 399.90,
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    badge: 'Mais Vendido',
    category: 'Motor'
  },
  {
    id: 2,
    name: 'Pastilha Freio Cerâmica',
    price: 89.90,
    oldPrice: 129.90,
    rating: 4.8,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400',
    badge: '-30%',
    category: 'Freios'
  },
  {
    id: 3,
    name: 'Escapamento Esportivo Pro',
    price: 599.90,
    oldPrice: 799.90,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f1f3?w=400',
    badge: 'Novo',
    category: 'Escape'
  },
  {
    id: 4,
    name: 'Bateria Lithiium Ion',
    price: 449.90,
    oldPrice: null,
    rating: 4.9,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1619641229758-33e15518f903?w=400',
    badge: null,
    category: 'Elétrica'
  },
  {
    id: 5,
    name: 'Amortecedor Traseiro Pro',
    price: 189.90,
    oldPrice: 249.90,
    rating: 4.6,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400',
    badge: '-24%',
    category: 'Suspensão'
  },
  {
    id: 6,
    name: 'Painel Digital Universal',
    price: 349.90,
    oldPrice: null,
    rating: 4.8,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400',
    badge: 'Top',
    category: 'Painel'
  },
]

export default function Products({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [wishlist, setWishlist] = useState([])
  const [addedToCart, setAddedToCart] = useState(null)

  const categories = ['Todos', 'Motor', 'Freios', 'Elétrica', 'Escape', 'Suspensão', 'Painel']

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const handleAddToCart = (product) => {
    addToCart(product)
    setAddedToCart(product.id)
    setTimeout(() => setAddedToCart(null), 2000)
  }

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <section id="produtos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            Produtos em Destaque
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            As Melhores <span className="text-gradient">Ofertas</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
                    
                    {/* Badge */}
                    {product.badge && (
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                          product.badge === 'Novo' ? 'bg-blue-500' :
                          product.badge === 'Mais Vendido' ? 'bg-purple-500' :
                          product.badge === 'Top' ? 'bg-yellow-500' :
                          'bg-primary-500'
                        } text-white`}
                      >
                        {product.badge}
                      </motion.div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleWishlist(product.id)}
                        className={`p-2 rounded-full ${
                          wishlist.includes(product.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                        }`}
                      >
                        <Heart size={18} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                      >
                        <Eye size={18} />
                      </motion.button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>

                    <h3 className="font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-primary-500">
                        R$ {product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          R$ {product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAddToCart(product)}
                      disabled={addedToCart === product.id}
                      className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                        addedToCart === product.id
                          ? 'bg-green-500 text-white'
                          : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/25'
                      }`}
                    >
                      {addedToCart === product.id ? (
                        <>
                          <Check size={18} />
                          Adicionado!
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={18} />
                          Adicionar
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-dark-800 border border-dark-700 rounded-full text-white font-semibold hover:border-primary-500/50 hover:bg-dark-700 transition-all"
          >
            Ver Todos os Produtos
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
