import React from 'react'
import { createRoot } from 'react-dom/client'
import { getTimeOfDay } from './getTimeOfDay.js'

function App() {
  const hours = new Date().getHours()
  const timeOfDay = getTimeOfDay(hours)

  return <h1>Good {timeOfDay}!</h1>
}

createRoot(document.getElementById('root')).render(<App />)
