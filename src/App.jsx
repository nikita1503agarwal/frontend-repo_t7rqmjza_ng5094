import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id)
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const total = cart.reduce((sum, i) => sum + (i.price || 0) * i.qty, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      <main className="relative">
        <Hero />
        <Products onAdd={addToCart} />
      </main>

      {/* Cart drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[28rem] z-50 transition-transform duration-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full bg-slate-900/95 backdrop-blur ring-1 ring-white/10 flex flex-col">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <h3 className="font-semibold">Your Cart</h3>
            <button onClick={() => setCartOpen(false)} className="text-slate-300 hover:text-white">Close</button>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <p className="text-slate-400">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <img src={item.images?.[0]} className="w-16 h-16 rounded object-cover ring-1 ring-white/10" />
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-slate-400">{item.currency} ${item.price} • Qty {item.qty}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setCart((prev)=> prev.map(p=> p.id===item.id? {...p, qty: Math.max(1,p.qty-1)}:p))} className="px-2 py-1 bg-white/10 rounded">-</button>
                    <button onClick={() => setCart((prev)=> prev.map(p=> p.id===item.id? {...p, qty: p.qty+1}:p))} className="px-2 py-1 bg-white/10 rounded">+</button>
                    <button onClick={() => setCart((prev)=> prev.filter(p=> p.id!==item.id))} className="px-2 py-1 bg-white/10 rounded">Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-300">Subtotal</span>
              <span className="font-semibold">USD ${total.toFixed(2)}</span>
            </div>
            <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 text-slate-900 font-semibold disabled:opacity-50" disabled={cart.length===0}>
              Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
