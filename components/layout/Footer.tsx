import Link from 'next/link'
import { Timer } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">Show Segment Timer</span>
            </div>
            <p className="text-slate-400 max-w-md">
              Professional timing tool for TV directors and producers. Plan your show segments with precision and ensure perfect broadcast timing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="/about/" className="hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link href="/how-to-use/" className="hover:text-cyan-400 transition-colors">How to Use</Link></li>
              <li><Link href="/faq/" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
              <li><Link href="/blog/" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy/" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Show Segment Timer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
