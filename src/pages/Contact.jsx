
import React from 'react'

export default function Contact(){
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Contact</h1>
      <p className="mb-6">This site uses a placeholder contact form. Replace with your preferred email provider or form endpoint.</p>
      <form className="space-y-4 bg-white p-6 rounded-lg shadow-soft-lg">
        <label className="block">
          <span className="text-sm">Name</span>
          <input name="name" required className="mt-1 block w-full rounded border p-2" />
        </label>
        <label className="block">
          <span className="text-sm">Email</span>
          <input name="email" type="email" required className="mt-1 block w-full rounded border p-2" />
        </label>
        <label className="block">
          <span className="text-sm">Message</span>
          <textarea name="message" rows="5" required className="mt-1 block w-full rounded border p-2" />
        </label>
        <div>
          <button type="button" className="inline-block bg-deeptext text-white px-5 py-2 rounded-full">Send message (placeholder)</button>
        </div>
      </form>
    </section>
  )
}
