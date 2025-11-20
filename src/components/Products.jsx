import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function Products({ onAdd }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        // Try fetch, if empty, seed then refetch
        let res = await fetch(`${base}/api/products`)
        let data = await res.json()
        if (!Array.isArray(data) || data.length === 0) {
          await fetch(`${base}/api/products/seed`, { method: 'POST' })
          res = await fetch(`${base}/api/products`)
          data = await res.json()
        }
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="products" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Latest Drops</h2>
            <p className="text-slate-300 mt-1">Hand-picked premium kits, updated frequently.</p>
          </div>
        </div>
        {loading ? (
          <p className="text-slate-400">Loading products...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={onAdd} />)
            )}
          </div>
        )}
      </div>
    </section>
  )
}
