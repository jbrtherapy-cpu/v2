
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-30 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading tracking-widest">RIDA THERAPY</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({isActive})=>isActive? 'font-semibold':'hover:underline'}>Home</NavLink>
          <NavLink to="/advice" className={({isActive})=>isActive? 'font-semibold':'hover:underline'}>Advice</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'font-semibold':'hover:underline'}>Contact</NavLink>
          <Link to="/contact" className="ml-4 inline-block bg-calmteal text-white px-4 py-2 rounded-full">Send a message</Link>
        </nav>
      </div>
    </header>
  )
}
