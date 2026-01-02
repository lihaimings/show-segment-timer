import { Timer, Users, Target, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl mb-6 shadow-lg shadow-cyan-200">
            <Timer className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Show Segment Timer</h1>
          <p className="text-xl text-slate-600">
            Professional timing tool designed for broadcast professionals
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-4">
            Show Segment Timer was created to solve a common challenge faced by TV directors, producers, and broadcast coordinators: accurately planning and tracking show segment timings.
          </p>
          <p className="text-slate-600">
            Whether you&apos;re producing a live news broadcast, a talk show, or a documentary, precise timing is crucial. Our tool helps you plan your segments, calculate total runtime, and ensure your show fits perfectly into its broadcast slot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-6 text-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">For Professionals</h3>
            <p className="text-slate-600 text-sm">Built with input from real TV directors and producers</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-6 text-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Precision Focused</h3>
            <p className="text-slate-600 text-sm">Accurate to the second for perfect broadcast timing</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-6 text-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Fast & Simple</h3>
            <p className="text-slate-600 text-sm">No signup required, works instantly in your browser</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Uses This Tool?</h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
              <span><strong>TV Directors</strong> - Plan show rundowns and segment timings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
              <span><strong>Producers</strong> - Ensure shows fit broadcast slots</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
              <span><strong>Video Editors</strong> - Plan edit timelines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
              <span><strong>Content Creators</strong> - Structure YouTube videos and podcasts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
              <span><strong>Event Planners</strong> - Time presentations and ceremonies</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
