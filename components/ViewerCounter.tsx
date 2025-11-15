"use client"

import { useState, useEffect } from "react"

export default function ViewerCounter() {
  const [count, setCount] = useState(3)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setOpacity(0)
      
      // After fade out, update count and fade in
      setTimeout(() => {
        const newCount = Math.floor(Math.random() * 10) + 1 // 1–10
        setCount(newCount)
        setOpacity(1)
      }, 250) // Half of transition duration
    }, 8000) // updates every 8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <p 
      className="text-center text-orange-400 dark:text-orange-400 mt-4 transition-opacity duration-500"
      style={{ opacity }}
    >
      🔥 Currently viewed by <span className="font-bold">{count}</span> business owners
    </p>
  )
}
