import { Target, Plus, GripVertical, Copy, RotateCcw } from 'lucide-react'

export default function HowToUsePage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">How to Use</h1>
          <p className="text-xl text-slate-600">
            Get started with Show Segment Timer in just a few steps
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-white font-bold shrink-0">
                1
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyan-600" />
                  Set Your Target Duration
                </h2>
                <p className="text-slate-600">
                  Start by setting your target broadcast duration. This is the total time your show needs to fit into. Enter the minutes and seconds in the Target Duration section at the top.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-white font-bold shrink-0">
                2
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-cyan-600" />
                  Add Your Segments
                </h2>
                <p className="text-slate-600 mb-4">
                  Click the &quot;Add Segment&quot; button to create new segments. For each segment, you can:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Give it a descriptive name (e.g., &quot;Opening&quot;, &quot;Interview&quot;, &quot;Commercial Break&quot;)</li>
                  <li>Set the duration in minutes and seconds</li>
                  <li>Remove segments you no longer need</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-white font-bold shrink-0">
                3
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <GripVertical className="w-5 h-5 text-cyan-600" />
                  Reorder Segments
                </h2>
                <p className="text-slate-600">
                  Drag and drop segments to reorder them. Simply click and hold the grip icon on the left side of any segment, then drag it to its new position. This helps you visualize your show&apos;s flow.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-white font-bold shrink-0">
                4
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Check the Summary</h2>
                <p className="text-slate-600 mb-4">
                  The Summary section shows you:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li><strong>Total Duration</strong> - The sum of all your segments</li>
                  <li><strong>Target Duration</strong> - Your set broadcast slot</li>
                  <li><strong>Difference</strong> - Whether you&apos;re over, under, or exactly on target</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-white font-bold shrink-0">
                5
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Copy className="w-5 h-5 text-cyan-600" />
                  Export Your Rundown
                </h2>
                <p className="text-slate-600">
                  Click &quot;Copy to Clipboard&quot; to copy your segment list in a formatted text format. You can then paste it into emails, documents, or production software to share with your team.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 rounded-2xl border border-cyan-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-cyan-600" />
              Tips & Tricks
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                <span>Your data is automatically saved in your browser - come back anytime to continue editing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                <span>Use the &quot;Reset All&quot; button to start fresh with default segments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                <span>Include buffer time in your segments for transitions and unexpected delays</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></span>
                <span>The color-coded difference indicator helps you quickly see if adjustments are needed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
