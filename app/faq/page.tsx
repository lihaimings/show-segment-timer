'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is Show Segment Timer free to use?',
    answer: 'Yes, Show Segment Timer is completely free to use. There are no hidden fees, subscriptions, or premium features. All functionality is available to everyone.'
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No account is required. Simply visit the website and start using the tool immediately. Your data is saved locally in your browser.'
  },
  {
    question: 'Is my data saved?',
    answer: 'Yes, your segments and settings are automatically saved in your browser\'s local storage. This means your data persists even if you close the browser or refresh the page. However, clearing your browser data will remove saved segments.'
  },
  {
    question: 'Can I use this on mobile devices?',
    answer: 'Yes, Show Segment Timer is fully responsive and works on smartphones and tablets. The drag-and-drop feature works with touch gestures on mobile devices.'
  },
  {
    question: 'How accurate is the timing calculation?',
    answer: 'The timing calculation is accurate to the second. The tool adds up all segment durations precisely and compares them to your target duration.'
  },
  {
    question: 'Can I export my segment list?',
    answer: 'Yes, click the "Copy to Clipboard" button to copy your segment list in a formatted text format. You can then paste it into any document, email, or production software.'
  },
  {
    question: 'Is there a limit to how many segments I can add?',
    answer: 'There is no hard limit on the number of segments. You can add as many segments as you need for your show planning.'
  },
  {
    question: 'Can I reorder segments?',
    answer: 'Yes, you can drag and drop segments to reorder them. Click and hold the grip icon on the left side of any segment, then drag it to the desired position.'
  },
  {
    question: 'What happens if I clear my browser data?',
    answer: 'If you clear your browser\'s local storage or cookies, your saved segments will be deleted. We recommend copying your segment list before clearing browser data.'
  },
  {
    question: 'Can multiple people use the same segment list?',
    answer: 'Since data is stored locally in each browser, segment lists are not automatically shared. However, you can copy your segment list and share it with team members via email or messaging apps.'
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-600">
            Find answers to common questions about Show Segment Timer
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-800">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
