"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface TextScrambleProps {
  text: string
  className?: string
  speed?: number
  trigger?: boolean
}

const chars = "!<>-_\\/[]{}—=+*^?#________"

export function TextScramble({ 
  text, 
  className = "", 
  speed = 30,
  trigger = true 
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const frameRef = useRef(0)
  const resolveRef = useRef<((value: unknown) => void) | null>(null)

  useEffect(() => {
    if (!trigger) return

    let frame = 0
    const queue: { from: string; to: string; start: number; end: number; char?: string }[] = []
    
    const oldText = displayText
    const newText = text
    const length = Math.max(oldText.length, newText.length)

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ""
      const to = newText[i] || ""
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      queue.push({ from, to, start, end })
    }

    const update = () => {
      let output = ""
      let complete = 0

      for (let i = 0; i < queue.length; i++) {
        const { from, to, start, end } = queue[i]
        let { char } = queue[i]

        if (frame >= end) {
          complete++
          output += to
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)]
            queue[i].char = char
          }
          output += char
        } else {
          output += from
        }
      }

      setDisplayText(output)

      if (complete === queue.length) {
        setIsComplete(true)
        if (resolveRef.current) resolveRef.current(null)
      } else {
        frameRef.current = requestAnimationFrame(update)
        frame++
      }
    }

    frameRef.current = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(frameRef.current)
    }
  }, [text, trigger])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText || text}
    </motion.span>
  )
}
