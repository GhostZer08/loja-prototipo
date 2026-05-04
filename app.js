// Dados
const categories = [
  { id: 1, name: 'Motor', icon: 'circle', count: 1250, color: 'from-orange-500 to-red-600', description: 'Peças de motor de alta performance' },
  { id: 2, name: 'Freios', icon: 'disc', count: 890, color: 'from-red-500 to-pink-600', description: 'Sistemas de freio premium' },
  { id: 3, name: 'Elétrica', icon: 'battery', count: 650, color: 'from-yellow-500 to-orange-600', description: 'Componentes elétricos confiáveis' },
  { id: 4, name: 'Escape', icon: 'wind', count: 420, color: 'from-gray-500 to-gray-700', description: 'Escapes esportivos e silenciosos' },
  { id: 5, name: 'Painel', icon: 'gauge', count: 380, color: 'from-blue-500 to-cyan-600', description: 'Instrumentos e painéis digitais' },
  { id: 6, name: 'Suspensão', icon: 'bike', count: 520, color: 'from-green-500 to-emerald-600', description: 'Amortecedores e suspensões' },
  { id: 7, name: 'Acessórios', icon: 'sparkles', count: 2100, color: 'from-purple-500 to-violet-600', description: 'Acessórios e personalização' },
  { id: 8, name: 'Manutenção', icon: 'settings', count: 780, color: 'from-teal-500 to-cyan-600', description: 'Produtos para manutenção' },
]

const products = [
  { id: 1, name: 'Kit Transmissão Premium', price: 299.90, oldPrice: 399.90, rating: 4.9, reviews: 128, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', badge: 'Mais Vendido', category: 'Motor' },
  { id: 2, name: 'Pastilha Freio Cerâmica', price: 89.90, oldPrice: 129.90, rating: 4.8, reviews: 256, image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400', badge: '-30%', category: 'Freios' },
  { id: 3, name: 'Escapamento Esportivo Pro', price: 599.90, oldPrice: 799.90, rating: 4.7, reviews: 89, image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f1f3?w=400', badge: 'Novo', category: 'Escape' },
  { id: 4, name: 'Bateria Lithium Ion', price: 449.90, oldPrice: null, rating: 4.9, reviews: 67, image: 'https://images.unsplash.com/photo-1619641229758-33e15518f903?w=400', badge: null, category: 'Elétrica' },
  { id: 5, name: 'Amortecedor Traseiro Pro', price: 189.90, oldPrice: 249.90, rating: 4.6, reviews: 143, image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400', badge: '-24%', category: 'Suspensão' },
  { id: 6, name: 'Painel Digital Universal', price: 349.90, oldPrice: null, rating: 4.8, reviews: 201, image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400', badge: 'Top', category: 'Painel' },
]

const features = [
  { icon: 'truck', title: 'Entrega Rápida', description: 'Enviamos para todo Brasil em até 48h. Frete grátis em compras acima de R$ 500.', color: 'from-blue-500 to-cyan-500' },
  { icon: 'shield-check', title: 'Garantia Real', description: 'Todas as peças possuem garantia de 12 meses contra defeitos de fabricação.', color: 'from-green-500 to-emerald-500' },
  { icon: 'clock', title: 'Suporte 24/7', description: 'Nossa equipe está disponível 24 horas para ajudar com suas dúvidas.', color: 'from-purple-500 to-violet-500' },
  { icon: 'credit-card', title: 'Pagamento Seguro', description: 'Parcele em até 12x sem juros. Ambiente 100% seguro e criptografado.', color: 'from-orange-500 to-amber-500' },
  { icon: 'headphones', title: 'Atendimento VIP', description: 'Clientes especiais têm acesso a atendimento prioritário e exclusivo.', color: 'from-pink-500 to-rose-500' },
  { icon: 'refresh-cw', title: 'Troca Fácil', description: 'Não serviu? Troque em até 30 dias sem burocracia ou custo adicional.', color: 'from-teal-500 to-cyan-500' },
  { icon: 'package', title: 'Embalagem Premium', description: 'Suas peças chegam embaladas com proteção reforçada e lacre de segurança.', color: 'from-indigo-500 to-purple-500' },
  { icon: 'award', title: 'Qualidade Certificada', description: 'Todas as peças passam por rigoroso controle de qualidade antes do envio.', color: 'from-yellow-500 to-orange-500' },
]

// Estado
let cart = []
let wishlist = []
let currentFilter = 'Todos'

// Elementos DOM
const navbar = document.getElementById('navbar')
const mobileMenu = document.getElementById('mobile-menu')
const menuBtn = document.getElementById('menu-btn')
const menuIcon = document.getElementById('menu-icon')
const cartBtn = document.getElementById('cart-btn')
const cartSidebar = document.getElementById('cart-sidebar')
const cartOverlay = document.getElementById('cart-overlay')
const closeCartBtn = document.getElementById('close-cart')
const cartItems = document.getElementById('cart-items')
const cartCount = document.getElementById('cart-count')
const cartItemsCount = document.getElementById('cart-items-count')
const cartSubtotal = document.getElementById('cart-subtotal')
const cartTotal = document.getElementById('cart-total')
const cartFooter = document.getElementById('cart-footer')
const emptyCart = document.getElementById('empty-cart')
const toast = document.getElementById('toast')
const toastMessage = document.getElementById('toast-message')
const categoriesGrid = document.getElementById('categories-grid')
const productsGrid = document.getElementById('products-grid')
const featuresGrid = document.getElementById('features-grid')
const filterButtons = document.getElementById('filter-buttons')

// Scroll handler
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('glass', 'py-3')
    navbar.classList.remove('py-6')
  } else {
    navbar.classList.remove('glass', 'py-3')
    navbar.classList.add('py-6')
  }
})

// Mobile menu toggle
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
  const isOpen = !mobileMenu.classList.contains('hidden')
  menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu')
  lucide.createIcons()
})

// Cart functions
function openCart() {
  cartSidebar.classList.remove('translate-x-full')
  cartOverlay.classList.remove('hidden')
  setTimeout(() => cartOverlay.classList.remove('opacity-0'), 10)
  document.body.classList.add('cart-open')
}

function closeCart() {
  cartSidebar.classList.add('translate-x-full')
  cartOverlay.classList.add('opacity-0')
  setTimeout(() => cartOverlay.classList.add('hidden'), 300)
  document.body.classList.remove('cart-open')
}

cartBtn?.addEventListener('click', openCart)
closeCartBtn?.addEventListener('click', closeCart)
cartOverlay?.addEventListener('click', closeCart)

// Toast
function showToast(message) {
  toastMessage.textContent = message
  toast.classList.remove('translate-y-20', 'opacity-0')
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0')
  }, 3000)
}

// Update cart UI
function updateCart() {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  
  cartCount.textContent = totalItems
  cartCount.classList.toggle('scale-100', totalItems > 0)
  cartCount.classList.toggle('scale-0', totalItems === 0)
  
  cartItemsCount.textContent = totalItems
  cartSubtotal.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`
  cartTotal.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`
  
  if (cart.length === 0) {
    emptyCart.classList.remove('hidden')
    cartFooter.classList.add('hidden')
  } else {
    emptyCart.classList.add('hidden')
    cartFooter.classList.remove('hidden')
    
    // Render cart items
    const existingItems = cartItems.querySelectorAll('.cart-item')
    existingItems.forEach(el => el.remove())
    
    cart.forEach(item => {
      const itemEl = document.createElement('div')
      itemEl.className = 'cart-item flex gap-4 p-4 rounded-xl bg-gray-700/50 border border-gray-700 hover:border-orange-500/30 transition-colors animate-fade-in'
      itemEl.innerHTML = `
        <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="font-medium text-white truncate">${item.name}</h4>
          <p class="text-sm text-gray-500 mb-2">${item.category}</p>
          <div class="flex items-center justify-between">
            <span class="font-semibold text-orange-400">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
            <div class="flex items-center gap-2">
              <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-500 transition-colors">
                <i data-lucide="minus" class="w-4 h-4"></i>
              </button>
              <span class="w-8 text-center text-sm font-medium text-white">${item.quantity}</span>
              <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-500 transition-colors">
                <i data-lucide="plus" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>
        <button onclick="removeFromCart(${item.id})" class="self-center p-2 text-gray-500 hover:text-red-500 transition-colors">
          <i data-lucide="trash-2" class="w-5 h-5"></i>
        </button>
      `
      cartItems.insertBefore(itemEl, cartFooter)
    })
    
    lucide.createIcons()
  }
}

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.push({ ...product, quantity: 1 })
  }
  updateCart()
  showToast(`${product.name} adicionado!`)
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id)
  updateCart()
}

function updateQuantity(id, quantity) {
  if (quantity <= 0) {
    removeFromCart(id)
  } else {
    const item = cart.find(item => item.id === id)
    if (item) item.quantity = quantity
    updateCart()
  }
}

// Render categories
function renderCategories() {
  categoriesGrid.innerHTML = categories.map((cat, i) => `
    <div class="group relative" style="animation: slide-up 0.4s ease-out ${i * 0.05}s forwards; opacity: 0;">
      <div class="relative p-6 rounded-2xl glass cursor-pointer overflow-hidden hover-lift transition-all duration-300 group-hover:border-orange-500/30">
        <div class="absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div class="absolute -inset-px bg-gradient-to-r from-orange-500/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
        
        <div class="relative z-10">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
            <i data-lucide="${cat.icon}" class="w-7 h-7 text-white"></i>
          </div>
          <h3 class="text-lg font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">${cat.name}</h3>
          <p class="text-sm text-gray-500 mb-3">${cat.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-600">${cat.count.toLocaleString()} produtos</span>
            <i data-lucide="chevron-right" class="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform"></i>
          </div>
        </div>
      </div>
    </div>
  `).join('')
  lucide.createIcons()
}

// Render products
function renderProducts() {
  const filtered = currentFilter === 'Todos' ? products : products.filter(p => p.category === currentFilter)
  
  productsGrid.innerHTML = filtered.map((product, i) => {
    const badgeColor = product.badge === 'Novo' ? 'bg-blue-500' :
                       product.badge === 'Mais Vendido' ? 'bg-purple-500' :
                       product.badge === 'Top' ? 'bg-yellow-500' : 'bg-orange-500'
    
    return `
      <div class="group relative" style="animation: slide-up 0.4s ease-out ${i * 0.05}s forwards; opacity: 0;">
        <div class="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
          <div class="relative aspect-square overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            ${product.badge ? `<div class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${badgeColor} text-white">${product.badge}</div>` : ''}
            <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onclick="toggleWishlist(${product.id})" class="p-2 rounded-full ${wishlist.includes(product.id) ? 'bg-red-500 text-white' : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'} transition-colors">
                <i data-lucide="heart" class="w-4 h-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}"></i>
              </button>
              <button class="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                <i data-lucide="eye" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
          
          <div class="p-5">
            <div class="flex items-center gap-1 mb-2">
              ${[1,2,3,4,5].map(star => `<i data-lucide="star" class="w-3 h-3 ${star <= Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}"></i>`).join('')}
              <span class="text-xs text-gray-500 ml-1">(${product.reviews})</span>
            </div>
            <h3 class="font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">${product.name}</h3>
            <div class="flex items-center gap-2 mb-4">
              <span class="text-xl font-bold text-orange-500">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
              ${product.oldPrice ? `<span class="text-sm text-gray-500 line-through">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
            </div>
            <button onclick='addToCart(${JSON.stringify(product).replace(/'/g, "&#39;")})' class="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/25 transition-all">
              <i data-lucide="shopping-cart" class="w-4 h-4"></i>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    `
  }).join('')
  
  lucide.createIcons()
}

// Render features
function renderFeatures() {
  featuresGrid.innerHTML = features.map((feature, i) => `
    <div class="group relative" style="animation: slide-up 0.5s ease-out ${i * 0.1}s forwards; opacity: 0;">
      <div class="relative p-6 rounded-2xl glass border border-white/5 h-full hover-lift transition-all duration-300">
        <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
          <i data-lucide="${feature.icon}" class="w-7 h-7 text-white"></i>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">${feature.title}</h3>
        <p class="text-sm text-gray-400 leading-relaxed">${feature.description}</p>
        <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  `).join('')
  lucide.createIcons()
}

// Filter handler
filterButtons?.addEventListener('click', (e) => {
  if (e.target.dataset.filter) {
    currentFilter = e.target.dataset.filter
    
    // Update button styles
    filterButtons.querySelectorAll('button').forEach(btn => {
      btn.className = 'px-5 py-2 rounded-full text-sm font-medium glass text-gray-400 hover:text-white hover:bg-white/10 transition-all'
    })
    e.target.className = 'px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25'
    
    renderProducts()
  }
})

// Wishlist toggle
function toggleWishlist(id) {
  const index = wishlist.indexOf(id)
  if (index > -1) {
    wishlist.splice(index, 1)
    showToast('Removido dos favoritos')
  } else {
    wishlist.push(id)
    showToast('Adicionado aos favoritos')
  }
  renderProducts()
}

// Intersection Observer for animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
    }
  })
}, observerOptions)

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons()
  renderCategories()
  renderProducts()
  renderFeatures()
  updateCart()
  
  // Observe elements for scroll animations
  document.querySelectorAll('.animate-slide-up').forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
    observer.observe(el)
  })
})

// Expose functions globally
window.addToCart = addToCart
window.removeFromCart = removeFromCart
window.updateQuantity = updateQuantity
window.toggleWishlist = toggleWishlist
window.closeCart = closeCart
