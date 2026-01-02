import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

const posts: Record<string, { title: string; date: string; content: string }> = {
  'getting-started': {
    title: 'Getting Started with Show Segment Timer',
    date: '2026-01-02',
    content: `
      <p>Welcome to Show Segment Timer! This guide will help you get started with planning your TV show segments efficiently.</p>
      
      <h2>What is Show Segment Timer?</h2>
      <p>Show Segment Timer is a professional timing tool designed for TV directors, producers, and broadcast coordinators. It helps you plan and track show segment timings to ensure your broadcast fits perfectly into its allocated time slot.</p>
      
      <h2>Quick Start Guide</h2>
      <ol>
        <li><strong>Set Your Target Duration</strong> - Enter the total time your show needs to fit into (e.g., 30 minutes for a half-hour slot).</li>
        <li><strong>Add Segments</strong> - Click "Add Segment" to create segments for each part of your show (intro, main content, commercials, outro).</li>
        <li><strong>Adjust Timings</strong> - Set the duration for each segment in minutes and seconds.</li>
        <li><strong>Check the Summary</strong> - See if your total runtime matches your target duration.</li>
        <li><strong>Export</strong> - Copy your segment list to share with your team.</li>
      </ol>
      
      <h2>Pro Tips</h2>
      <ul>
        <li>Always include buffer time for transitions between segments.</li>
        <li>Use descriptive names for segments to make your rundown clear.</li>
        <li>Drag and drop segments to reorder them as your show structure evolves.</li>
        <li>Your data is saved automatically - come back anytime to continue editing.</li>
      </ul>
    `
  },
  'broadcast-timing-tips': {
    title: 'Essential Broadcast Timing Tips for TV Directors',
    date: '2026-01-01',
    content: `
      <p>Timing is everything in broadcast television. Here are essential tips to help you manage your show timing like a pro.</p>
      
      <h2>1. Plan for Commercial Breaks</h2>
      <p>Commercial breaks are typically 2-3 minutes long. Plan your content segments around these breaks, ensuring natural transition points.</p>
      
      <h2>2. Build in Buffer Time</h2>
      <p>Always add 30-60 seconds of buffer time to your show plan. This accounts for unexpected delays, technical issues, or segments running slightly long.</p>
      
      <h2>3. Know Your Hard Outs</h2>
      <p>Identify "hard out" times - moments when you absolutely must transition (like network breaks or live feeds). Work backward from these to plan your segments.</p>
      
      <h2>4. Use Visual Cues</h2>
      <p>Create a clear visual rundown that your entire team can reference. Color-code different segment types for quick identification.</p>
      
      <h2>5. Practice Flexibility</h2>
      <p>Have "flex" segments that can be shortened or extended based on how the show is running. This gives you options when timing gets tight.</p>
      
      <h2>6. Communicate Constantly</h2>
      <p>Keep your floor director and talent informed about timing. Regular time checks help everyone stay on track.</p>
    `
  },
  'segment-planning-best-practices': {
    title: 'Best Practices for TV Show Segment Planning',
    date: '2025-12-28',
    content: `
      <p>Effective segment planning is the foundation of a well-produced TV show. Here are best practices used by professional TV directors and producers.</p>
      
      <h2>Structure Your Show</h2>
      <p>A typical TV show structure includes:</p>
      <ul>
        <li><strong>Cold Open</strong> - A brief teaser to hook viewers (30 seconds - 2 minutes)</li>
        <li><strong>Opening/Intro</strong> - Title sequence and host introduction (1-2 minutes)</li>
        <li><strong>Main Segments</strong> - Core content blocks (5-15 minutes each)</li>
        <li><strong>Commercial Breaks</strong> - Typically 2-3 minutes each</li>
        <li><strong>Bumpers</strong> - Short transitions in/out of breaks (10-30 seconds)</li>
        <li><strong>Closing</strong> - Wrap-up and credits (1-2 minutes)</li>
      </ul>
      
      <h2>Balance Your Content</h2>
      <p>Vary the pace and energy of your segments. Follow high-energy segments with calmer ones to give viewers a breather.</p>
      
      <h2>Consider Your Audience</h2>
      <p>Think about when viewers might tune in or out. Place your strongest content after the first commercial break when viewership typically peaks.</p>
      
      <h2>Document Everything</h2>
      <p>Keep detailed records of your segment timings. This helps you refine your planning for future shows and identify patterns in what works.</p>
      
      <h2>Review and Iterate</h2>
      <p>After each show, review your actual timings versus planned timings. Use this data to improve your future segment planning.</p>
    `
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog/" className="text-cyan-600 hover:text-cyan-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Calendar className="w-4 h-4" />
            <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-6">{post.title}</h1>
          
          <div 
            className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  )
}
