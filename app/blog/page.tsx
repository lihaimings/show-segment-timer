import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    slug: 'getting-started',
    title: 'Getting Started with Show Segment Timer',
    excerpt: 'Learn how to use Show Segment Timer to plan your TV show segments efficiently and ensure perfect broadcast timing.',
    date: '2026-01-02',
  },
  {
    slug: 'broadcast-timing-tips',
    title: 'Essential Broadcast Timing Tips for TV Directors',
    excerpt: 'Discover professional tips for managing show timing, handling commercial breaks, and keeping your broadcast on schedule.',
    date: '2026-01-01',
  },
  {
    slug: 'segment-planning-best-practices',
    title: 'Best Practices for TV Show Segment Planning',
    excerpt: 'Master the art of segment planning with these proven strategies used by professional TV directors and producers.',
    date: '2025-12-28',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
          <p className="text-xl text-slate-600">
            Tips, tutorials, and insights for broadcast professionals
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="block bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-6 hover:shadow-xl hover:border-cyan-200 transition-all group"
            >
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                <Calendar className="w-4 h-4" />
                <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-cyan-600 font-medium">
                Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
