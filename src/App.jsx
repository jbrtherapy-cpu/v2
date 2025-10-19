
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdviceHub from './pages/AdviceHub'
import AdviceArticle from './pages/AdviceArticle'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-warmneutral text-deeptext">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advice" element={<AdviceHub />} />
          <Route path="/advice/:slug" element={<AdviceArticle />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
