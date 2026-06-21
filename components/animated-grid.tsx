"use client"

import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"

export function AnimatedGrid() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
  })

  // IMPORTANT : Hooks toujours appelés avant tout return
  const rotateXSource = useTransform(mouseY, [0, 1000], [4, -4])
  const rotateYSource = useTransform(mouseX, [0, 1000], [-4, 4])

  const rotateX = useSpring(rotateXSource, {
    stiffness: 120,
    damping: 20,
  })

  const rotateY = useSpring(rotateYSource, {
    stiffness: 120,
    damping: 20,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()

      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }

    const container = containerRef.current

    if (!container) return

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  const isDark = mounted && theme === "dark"

  const strokeColor = isDark
    ? "rgba(56, 189, 248, 0.15)"
    : "rgba(59, 130, 246, 0.10)"

  const strokeColorAccent = isDark
    ? "rgba(56, 189, 248, 0.30)"
    : "rgba(59, 130, 246, 0.20)"

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden [perspective:1200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight principal */}
      <motion.div
        className="pointer-events-none absolute z-[5] h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.85,
        }}
        transition={{
          duration: 0.35,
        }}
        style={{
          x: smoothX,
          y: smoothY,
          background: isDark
            ? "radial-gradient(circle, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.10) 35%, transparent 75%)"
            : "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.08) 35%, transparent 75%)",
        }}
      />

      {/* Halo secondaire */}
      <motion.div
        className="pointer-events-none absolute z-[4] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        style={{
          x: smoothX,
          y: smoothY,
          background: isDark
            ? "radial-gradient(circle, transparent 25%, rgba(34,197,94,0.15) 50%, transparent 75%)"
            : "radial-gradient(circle, transparent 25%, rgba(59,130,246,0.12) 50%, transparent 75%)",
        }}
      />

      {/* Grille 3D */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1"
            />
          </pattern>

          <pattern
            id="grid-pattern-accent"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 240 0 L 0 0 0 240"
              fill="none"
              stroke={strokeColorAccent}
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        <rect width="100%" height="100%" fill="url(#grid-pattern-accent)" />
      </motion.svg>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />

      {/* Glow haut gauche */}
      <div
        className="absolute -top-40 left-1/4 h-96 w-96 rounded-full blur-3xl animate-pulse"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(56,189,248,0.30) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Glow haut droite */}
      <div
        className="absolute -top-20 right-1/4 h-72 w-72 rounded-full blur-3xl animate-pulse"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(34,197,94,0.22) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          animationDelay: "1.5s",
        }}
      />
    </div>
  )
}