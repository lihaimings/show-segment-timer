import { Timer, Clock, Target, List, Copy } from 'lucide-react'
import ToolComponent from '@/components/tool/ToolComponent'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl mb-6 shadow-lg shadow-cyan-200">
            <Timer className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Show Segment Timer
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Calculate and manage TV show segment timings with precision. Perfect for TV directors, producers, and broadcast coordinators.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ToolComponent />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Why Use Show Segment Timer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-6 text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <List className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Multiple Segments</h3>
              <p className="text-slate-600 text-sm">Add unlimited segments with custom names and durations for complete show planning.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-6 text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Real-time Calculation</h3>
              <p className="text-slate-600 text-sm">Instantly see total runtime as you add or modify segments.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-6 text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Target Duration</h3>
              <p className="text-slate-600 text-sm">Set your broadcast slot duration and see if you&apos;re over or under time.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-6 text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Copy className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Easy Export</h3>
              <p className="text-slate-600 text-sm">Copy your segment list to clipboard for sharing with your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Plan Your Show?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Start adding segments above and see your total runtime instantly. Your data is saved automatically in your browser.
          </p>
        </div>
      </section>
    </div>
  )
}
