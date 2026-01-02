'use client'

import { useState, useEffect, useCallback } from 'react'
import { Plus, Trash2, GripVertical, Clock, Target, Copy, Check, RotateCcw, Play, Pause } from 'lucide-react'

interface Segment {
  id: string
  name: string
  minutes: number
  seconds: number
}

const STORAGE_KEY = 'show-segment-timer-data'

const defaultSegments: Segment[] = [
  { id: '1', name: 'Opening/Intro', minutes: 2, seconds: 0 },
  { id: '2', name: 'Main Content', minutes: 15, seconds: 0 },
  { id: '3', name: 'Commercial Break', minutes: 3, seconds: 0 },
  { id: '4', name: 'Closing/Outro', minutes: 2, seconds: 0 },
]

export default function ToolComponent() {
  const [segments, setSegments] = useState<Segment[]>(defaultSegments)
  const [targetMinutes, setTargetMinutes] = useState(30)
  const [targetSeconds, setTargetSeconds] = useState(0)
  const [copied, setCopied] = useState(false)
  const [draggedId, setDraggedId] = useState<string | null>(null)

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const data = JSON.parse(saved)
        if (data.segments) setSegments(data.segments)
        if (data.targetMinutes !== undefined) setTargetMinutes(data.targetMinutes)
        if (data.targetSeconds !== undefined) setTargetSeconds(data.targetSeconds)
      } catch (e) {
        console.error('Failed to load saved data')
      }
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      segments,
      targetMinutes,
      targetSeconds
    }))
  }, [segments, targetMinutes, targetSeconds])

  const generateId = () => Math.random().toString(36).substr(2, 9)

  const addSegment = useCallback(() => {
    setSegments(prev => [...prev, {
      id: generateId(),
      name: 'New Segment',
      minutes: 5,
      seconds: 0
    }])
  }, [])

  const removeSegment = useCallback((id: string) => {
    setSegments(prev => prev.filter(s => s.id !== id))
  }, [])

  const updateSegment = useCallback((id: string, field: keyof Segment, value: string | number) => {
    setSegments(prev => prev.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ))
  }, [])

  const getTotalSeconds = useCallback(() => {
    return segments.reduce((total, seg) => total + seg.minutes * 60 + seg.seconds, 0)
  }, [segments])

  const getTargetSeconds = useCallback(() => {
    return targetMinutes * 60 + targetSeconds
  }, [targetMinutes, targetSeconds])

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600)
    const mins = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getDifference = () => {
    const diff = getTotalSeconds() - getTargetSeconds()
    return diff
  }

  const copyToClipboard = async () => {
    const text = segments.map((s, i) => 
      `${i + 1}. ${s.name}: ${formatTime(s.minutes * 60 + s.seconds)}`
    ).join('\n') + `\n\nTotal: ${formatTime(getTotalSeconds())}\nTarget: ${formatTime(getTargetSeconds())}`
    
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetAll = () => {
    setSegments(defaultSegments)
    setTargetMinutes(30)
    setTargetSeconds(0)
  }

  // Drag and drop handlers
  const handleDragStart = (id: string) => {
    setDraggedId(id)
  }

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    if (!draggedId || draggedId === targetId) return
    
    const draggedIndex = segments.findIndex(s => s.id === draggedId)
    const targetIndex = segments.findIndex(s => s.id === targetId)
    
    const newSegments = [...segments]
    const [removed] = newSegments.splice(draggedIndex, 1)
    newSegments.splice(targetIndex, 0, removed)
    setSegments(newSegments)
  }

  const handleDragEnd = () => {
    setDraggedId(null)
  }

  const totalSeconds = getTotalSeconds()
  const difference = getDifference()

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Target Duration */}
      <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-cyan-600" />
          <h2 className="text-lg font-semibold text-slate-800">Target Duration</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              max="999"
              value={targetMinutes}
              onChange={(e) => setTargetMinutes(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-20 px-3 py-2 border border-cyan-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-center"
            />
            <span className="text-slate-600">min</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              max="59"
              value={targetSeconds}
              onChange={(e) => setTargetSeconds(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-20 px-3 py-2 border border-cyan-200 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-center"
            />
            <span className="text-slate-600">sec</span>
          </div>
        </div>
      </div>

      {/* Segments List */}
      <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-600" />
            <h2 className="text-lg font-semibold text-slate-800">Segments</h2>
          </div>
          <button
            onClick={addSegment}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Segment
          </button>
        </div>

        <div className="space-y-3">
          {segments.map((segment, index) => (
            <div
              key={segment.id}
              draggable
              onDragStart={() => handleDragStart(segment.id)}
              onDragOver={(e) => handleDragOver(e, segment.id)}
              onDragEnd={handleDragEnd}
              className={`flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 transition-all ${
                draggedId === segment.id ? 'opacity-50 scale-95' : ''
              }`}
            >
              <div className="cursor-grab active:cursor-grabbing text-slate-400 hover:text-slate-600">
                <GripVertical className="w-5 h-5" />
              </div>
              
              <span className="w-8 h-8 flex items-center justify-center bg-cyan-100 text-cyan-700 rounded-lg font-medium text-sm">
                {index + 1}
              </span>

              <input
                type="text"
                value={segment.name}
                onChange={(e) => updateSegment(segment.id, 'name', e.target.value)}
                className="flex-1 px-3 py-2 border border-slate-200 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none"
                placeholder="Segment name"
              />

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  max="999"
                  value={segment.minutes}
                  onChange={(e) => updateSegment(segment.id, 'minutes', Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-16 px-2 py-2 border border-slate-200 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-center"
                />
                <span className="text-slate-500">:</span>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={segment.seconds}
                  onChange={(e) => updateSegment(segment.id, 'seconds', Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))}
                  className="w-16 px-2 py-2 border border-slate-200 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-center"
                />
              </div>

              <button
                onClick={() => removeSegment(segment.id)}
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                aria-label="Remove segment"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {segments.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              No segments yet. Click &quot;Add Segment&quot; to get started.
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-cyan-50 rounded-xl p-4 text-center">
            <p className="text-sm text-cyan-600 mb-1">Total Duration</p>
            <p className="text-3xl font-bold text-cyan-700">{formatTime(totalSeconds)}</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4 text-center">
            <p className="text-sm text-slate-600 mb-1">Target Duration</p>
            <p className="text-3xl font-bold text-slate-700">{formatTime(getTargetSeconds())}</p>
          </div>
          
          <div className={`rounded-xl p-4 text-center ${
            difference === 0 
              ? 'bg-green-50' 
              : difference > 0 
                ? 'bg-red-50' 
                : 'bg-amber-50'
          }`}>
            <p className={`text-sm mb-1 ${
              difference === 0 
                ? 'text-green-600' 
                : difference > 0 
                  ? 'text-red-600' 
                  : 'text-amber-600'
            }`}>
              {difference === 0 ? 'Perfect!' : difference > 0 ? 'Over by' : 'Under by'}
            </p>
            <p className={`text-3xl font-bold ${
              difference === 0 
                ? 'text-green-700' 
                : difference > 0 
                  ? 'text-red-700' 
                  : 'text-amber-700'
            }`}>
              {difference === 0 ? '✓' : formatTime(Math.abs(difference))}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl transition-colors"
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
        
        <button
          onClick={resetAll}
          className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Reset All
        </button>
      </div>
    </div>
  )
}
