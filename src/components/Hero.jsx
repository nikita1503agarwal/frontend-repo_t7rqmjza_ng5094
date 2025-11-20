import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      {/* background aura */}
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-emerald-500/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-[42rem] h-[42rem] bg-lime-400/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="inline-flex items-center text-emerald-300/90 bg-white/10 px-3 py-1 rounded-full text-xs tracking-wide ring-1 ring-white/15">Premium Football Jerseys</p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Katalyst Apparels
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Unleash Your Club Spirit</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl">Match-quality designs, breathable fabrics, and exclusive drops. Built for performance and made for the culture.</p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#products" className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition">Shop Now</a>
            <a href="#about" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/15 transition">Learn More</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/15 bg-gradient-to-br from-slate-800 to-slate-900">
              <img src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=1200&auto=format&fit=crop" alt="Jersey" className="w-full h-full object-cover mix-blend-luminosity" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900/80 backdrop-blur rounded-2xl px-4 py-3 ring-1 ring-white/10">
              <p className="text-xs text-slate-300">Exclusive drops every month</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-slate-900/80 backdrop-blur rounded-2xl px-4 py-3 ring-1 ring-white/10">
              <p className="text-xs text-slate-300">Free shipping over $100</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
