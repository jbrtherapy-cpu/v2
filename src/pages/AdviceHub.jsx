
import React from 'react'
import { Link } from 'react-router-dom'

const articles = [
  { slug: 'coping-with-stress', title: 'Coping with stress', excerpt: 'Practical steps to reduce daily stress and build resilience.' },
  { slug: 'building-resilience', title: 'Building resilience', excerpt: 'How to recover from setbacks and strengthen mental wellbeing.' },
  { slug: 'relationships-communication', title: 'Relationships & communication', excerpt: 'Tools for better listening and clearer communication.' },
  { slug: 'overcoming-burnout', title: 'Recovering from burnout', excerpt: 'Recognising burnout and practical recovery steps.' },
  { slug: 'managing-anxiety-day-to-day', title: 'Managing anxiety day-to-day', excerpt: 'Daily routines & small practices.' },
  { slug: 'healing-through-dhikr', title: 'Healing through dhikr', excerpt: 'How remembrance supports emotional balance.' },
  { slug: 'tawakkul-and-healing', title: 'Tawakkul & healing', excerpt: 'Balancing effort and trust.' },
  { slug: 'sabr-and-emotional-strength', title: 'Sabr and emotional strength', excerpt: 'Patience as resilience.' }
]

export default function AdviceHub(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-6">Advice Hub</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map(a => (
          <Link key={a.slug} to={'/advice/' + a.slug} className="bg-white p-6 rounded-lg shadow-soft-lg hover:shadow-lg transition">
            <h3 className="font-heading text-xl text-calmteal mb-2">{a.title}</h3>
            <p className="text-sm text-gray-700">{a.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
