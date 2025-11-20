export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-slate-300">
        <div>
          <h4 className="text-white font-semibold">Katalyst Apparels</h4>
          <p className="text-sm mt-2">Premium football jerseys designed for performance and style.</p>
        </div>
        <div>
          <h5 className="text-white font-medium">Support</h5>
          <ul className="text-sm mt-2 space-y-1">
            <li><a className="hover:text-white" href="#">Shipping & Returns</a></li>
            <li><a className="hover:text-white" href="#">Size Guide</a></li>
            <li><a className="hover:text-white" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium">Newsletter</h5>
          <p className="text-sm mt-2">Get early access to drops and exclusive offers.</p>
          <form className="mt-3 flex gap-2">
            <input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Email address" />
            <button className="px-3 py-2 rounded-lg bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition text-sm">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-slate-400 text-xs pb-8">© {new Date().getFullYear()} Katalyst Apparels. All rights reserved.</div>
    </footer>
  )
}
