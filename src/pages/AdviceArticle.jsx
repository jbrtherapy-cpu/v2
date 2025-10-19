import React from 'react'
import { useParams } from 'react-router-dom'

const CONTENT = {"coping-with-stress": {"title": "Coping with stress", "body": "Stress is a normal and natural response to the demands of life \u2014 but when it becomes chronic it affects our mood, sleep, concentration and relationships. The good news is that small, practical changes can make a big difference.\n\n1. Notice the patterns\nBegin by paying gentle attention to when stress shows up. Keep a simple log for a week: note the situations, your physical sensations (tight chest, shallow breathing), the thoughts you had, and how you responded. This isn\u2019t about judgement \u2014 it\u2019s data. Patterns help you pick the most effective changes.\n\n2. Prioritise sleep and routine\nSleep and basic rhythms form the foundation of resilience. Aim for regular sleep times, short movement in the morning, and two small pleasurable activities each day (five minutes of tea, a short walk). Routine reduces decision fatigue and protects your energy.\n"}, "managing-anxiety-day-to-day": {"title": "Managing Anxiety Day-to-Day", "body": "Anxiety can feel like a constant background noise. The aim is not to eliminate all worry, but to reduce its hold.\n\nStart with a 'worry window' (10-15 minutes daily) where you allow yourself to notice concerns, then close the window. Outside those minutes practice gentle redirection: notice a worry, label it, then return to the present task.\n\nBuild small stabilising habits \u2014 brief breathing breaks, a simple evening wind-down, and a short morning movement. Over time these habits reduce baseline anxiety and increase your sense of agency.\n"}, "healing-through-dhikr": {"title": "Healing through dhikr", "body": "Dhikr \u2014 remembrance of God \u2014 is a spiritual practice with calming effects when used mindfully.\n\n1. Short regular practice\nBegin with five minutes after prayer or before bed. Choose a short phrase (e.g., 'Alhamdulillah') and repeat it slowly with attention.\n\n2. Pair with breath\nCoordinate a gentle breath with each repetition. Over time, the pairing of breath and remembrance creates a calming rhythm.\n"}}

export default function AdviceArticle(){
  const { slug } = useParams()
  const article = CONTENT[slug] || { title: 'Not found', body: 'This article is not available.' }
  return (
    <article className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-soft-lg">
      <h1 className="font-heading text-2xl mb-4">{article.title}</h1>
      <div className="prose max-w-none whitespace-pre-line">{article.body}</div>
    </article>
  )
}
