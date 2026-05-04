import { motion } from 'framer-motion'
import { 
  Facebook, Instagram, Twitter, Youtube, 
  Mail, Phone, MapPin, ArrowUp, Send 
} from 'lucide-react'

const footerLinks = {
  produtos: [
    { name: 'Motor', href: '#' },
    { name: 'Freios', href: '#' },
    { name: 'Suspensão', href: '#' },
    { name: 'Elétrica', href: '#' },
    { name: 'Acessórios', href: '#' },
  ],
  suporte: [
    { name: 'Central de Ajuda', href: '#' },
    { name: 'Rastrear Pedido', href: '#' },
    { name: 'Trocas e Devoluções', href: '#' },
    { name: 'Garantia', href: '#' },
    { name: 'Fale Conosco', href: '#' },
  ],
  empresa: [
    { name: 'Sobre Nós', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Carreiras', href: '#' },
    { name: 'Parceiros', href: '#' },
    { name: 'Imprensa', href: '#' },
  ]
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
  { icon: Youtube, href: '#', label: 'Youtube', color: 'hover:bg-red-600' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-900 border-t border-dark-700">
      {/* Newsletter Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-dark-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Fique por dentro das <span className="text-gradient">novidades</span>
              </h3>
              <p className="text-gray-400">
                Receba ofertas exclusivas e lançamentos em primeira mão
              </p>
            </motion.div>
            
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl flex items-center gap-2 hover:shadow-lg hover:shadow-primary-500/25 transition-shadow"
              >
                <Send size={18} />
                <span className="hidden sm:inline">Inscrever</span>
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-white">
                Moto<span className="text-primary-500">Peças</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Especialistas em peças e acessórios para motocicletas. 
              Qualidade, confiança e performance desde 2009.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:0800-123-4567" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors text-sm">
                <Phone size={16} className="text-primary-500" />
                0800-123-4567
              </a>
              <a href="mailto:contato@motopecas.com" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors text-sm">
                <Mail size={16} className="text-primary-500" />
                contato@motopecas.com
              </a>
              <p className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-primary-500" />
                São Paulo, SP - Brasil
              </p>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4 capitalize">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2024 MotoPeças Pro. Todos os direitos reservados.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all`}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white hover:shadow-lg hover:shadow-primary-500/25 transition-shadow"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
