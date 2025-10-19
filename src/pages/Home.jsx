
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-heading text-5xl mb-4">Find calm. Heal. Grow.</h1>
          <p className="text-lg mb-6">Therapy for individuals & couples — compassionate, evidence-based support with gentle spiritual integration.</p>
          <div className="flex gap-4">
            <Link to="/contact" className="inline-block bg-deeptext text-white px-6 py-3 rounded-full">Send a message</Link>
            <Link to="/advice" className="underline self-center">Explore the Advice Hub</Link>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-soft-lg">
          <img src="/hero-seating.jpg" alt="Comfortable therapy seating" className="w-full h-80 object-cover" />
        </div>
      </div>
    </section>
  )
}
