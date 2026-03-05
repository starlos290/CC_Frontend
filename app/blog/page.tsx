import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CtaSection from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Blog — ClinicClaw',
  description:
    'Practice growth insights, AI automation strategies, and HIPAA compliance guides for private healthcare practices.',
}

const posts = [
  {
    slug: 'reduce-no-shows-private-practice',
    category: 'Practice Growth',
    title: 'The No-Show Problem Costs Private Practices $150K+ Per Year — And Most Don\'t Know It',
    excerpt: 'A single no-show at a chiropractic practice costs an average of $150 in direct revenue. Multiply that by 8 per week and 52 weeks and the number becomes impossible to ignore. Here\'s how top practices have cut no-shows by 35–40%.',
    date: 'February 28, 2025',
    readTime: '6 min read',
  },
  {
    slug: 'google-reviews-healthcare',
    category: 'Reputation',
    title: 'Why Google Reviews Are the #1 Patient Acquisition Channel for Private Practices in 2025',
    excerpt: 'Before a patient ever calls your office, they\'ve already read your reviews. 91% of patients say online reviews impact their decision to visit a new healthcare provider. Here\'s a systematic approach to building your Google presence.',
    date: 'February 14, 2025',
    readTime: '8 min read',
  },
  {
    slug: 'hipaa-ai-private-practice',
    category: 'HIPAA & Compliance',
    title: 'HIPAA and AI Automation: What Private Practices Need to Know Before Implementing',
    excerpt: 'AI automation and HIPAA compliance aren\'t mutually exclusive — but not all AI solutions are built the same way. The difference between shared cloud infrastructure and dedicated private VPS matters enormously for your compliance posture.',
    date: 'January 30, 2025',
    readTime: '10 min read',
  },
  {
    slug: 'patient-reactivation-sms',
    category: 'Revenue Recovery',
    title: 'The 60-Day Rule: How to Win Back Lapsed Patients with a 41% Response Rate',
    excerpt: 'Most practices have hundreds of patients who visited once or twice, then disappeared. These aren\'t lost patients — they\'re dormant revenue. Rex, our reactivation agent, achieves a 41% SMS response rate by reaching out at exactly the right time with the right message.',
    date: 'January 15, 2025',
    readTime: '7 min read',
  },
  {
    slug: 'ai-agents-vs-virtual-assistants',
    category: 'AI for Healthcare',
    title: 'AI Agents vs. Virtual Assistants: Why the Distinction Matters for Healthcare Practices',
    excerpt: 'Virtual assistants answer questions. AI agents take action. For a healthcare practice dealing with appointment reminders, no-show recovery, and patient reactivation, the difference in outcomes is dramatic.',
    date: 'January 3, 2025',
    readTime: '5 min read',
  },
  {
    slug: 'roi-healthcare-automation',
    category: 'Practice Growth',
    title: 'Calculating the True ROI of AI Automation for Your Practice',
    excerpt: 'When evaluating any practice investment, the math needs to be airtight. Here\'s exactly how to calculate the ROI of practice automation using real numbers from 200+ deployed ClinicClaw practices.',
    date: 'December 18, 2024',
    readTime: '9 min read',
  },
]

const categories = ['All', 'Practice Growth', 'HIPAA & Compliance', 'Reputation', 'Revenue Recovery', 'AI for Healthcare']

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent/6 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-dots opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Blog</p>
          <h1 className="font-sora text-4xl sm:text-5xl font-bold text-text-primary mb-5">
            Practice Growth Insights
          </h1>
          <p className="text-xl text-text-secondary max-w-xl mx-auto">
            AI automation strategies, HIPAA compliance guides, and revenue growth playbooks for private healthcare practices.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-white/5 bg-[#060a15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  cat === 'All'
                    ? 'bg-accent/15 border-accent/30 text-accent'
                    : 'bg-white/3 border-white/7 text-text-secondary hover:bg-white/8 hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="card-base card-hover rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                      {post.category}
                    </span>
                    <span className="text-text-muted text-xs">·</span>
                    <span className="text-xs text-text-muted">{post.readTime}</span>
                  </div>
                  <h2 className="font-sora text-lg font-bold text-text-primary leading-tight mb-3 flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs text-text-muted">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-dark transition-colors"
                    >
                      Read
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
