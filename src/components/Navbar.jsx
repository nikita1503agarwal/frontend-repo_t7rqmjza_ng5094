import { ShoppingCart, Menu } from 'lucide-react'

export default function Navbar({ onCartOpen }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-lime-400 to-emerald-500 ring-2 ring-white/20" />
          <span className="text-white font-semibold tracking-tight text-lg">Katalyst Apparels</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
          <a href="#products" className="hover:text-white transition-colors">Shop</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={onCartOpen} className="inline-flex items-center gap-2 text-slate-200 hover:text-white px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
          </button>
          <button className="md:hidden text-slate-200 hover:text-white p-2 rounded-lg hover:bg-white/10">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
