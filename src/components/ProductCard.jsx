import { motion } from 'framer-motion'

export default function ProductCard({ product, onAdd }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="group bg-slate-800/40 ring-1 ring-white/10 rounded-2xl overflow-hidden hover:ring-emerald-400/40 hover:shadow-emerald-500/10 hover:shadow-xl transition-all"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={product.images?.[0] || 'https://images.unsplash.com/photo-1520971347561-84524d5a31e1?q=80&w=1200&auto=format&fit=crop'} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-3 left-3 text-[10px] uppercase tracking-wider bg-black/60 backdrop-blur px-2 py-1 rounded text-white ring-1 ring-white/10">
          {product.team}
        </div>
        {product.is_featured && (
          <div className="absolute top-3 right-3 text-[10px] uppercase tracking-wider bg-emerald-500 text-slate-900 px-2 py-1 rounded font-bold">Featured</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold">{product.title}</h3>
        <p className="text-slate-400 text-sm mt-1">{product.league} • {product.season}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-emerald-300 font-semibold">{product.currency || 'USD'} ${product.price}</span>
          <button onClick={() => onAdd(product)} className="px-3 py-2 text-sm rounded-lg bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition">Add to cart</button>
        </div>
      </div>
    </motion.div>
  )
}
