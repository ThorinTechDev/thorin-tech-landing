"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { TextScramble } from "./text-scramble"
import Link from "next/link"
import { 
  FileText, 
  Share2, 
  MessageCircle, 
  TrendingUp, 
  Heart,
  type LucideIcon
} from "lucide-react"

interface Product {
  id: string
  title: string
  description: string
  icon: LucideIcon
  gradient: string
  span?: string
  href: string
}

const products: Product[] = [
  {
    id: "invoice",
    title: "AI Invoice OCR",
    description: "Intelligent automated data parsing with high precision. Extract, validate, and process invoice data instantly with our advanced OCR technology.",
    icon: FileText,
    gradient: "from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10",
    span: "md:col-span-2",
    href: "/products/invoice",
  },
  {
    id: "marketing",
    title: "Marketing & Social Suite",
    description: "AI content creation (Text, Image, Video) + Auto-publishing on 7+ platforms including LinkedIn, X, TikTok, Facebook, Instagram, YouTube, and Threads.",
    icon: Share2,
    gradient: "from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10",
    span: "md:col-span-1",
    href: "/products/marketing",
  },
  {
    id: "whatsapp",
    title: "WhatsApp & Automation",
    description: "Unlimited messaging via Official API + n8n automation for custom workflows. Secure, scalable communication infrastructure.",
    icon: MessageCircle,
    gradient: "from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10",
    span: "md:col-span-1",
    href: "/products/whatsapp",
  },
  {
    id: "finance",
    title: "AI Financial Intelligence",
    description: "Combined AI Accounting and AI Tax Audit tools with anomaly detection. Real-time compliance monitoring and intelligent financial insights.",
    icon: TrendingUp,
    gradient: "from-amber-500/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-500/10",
    span: "md:col-span-1",
    href: "/products/finance",
  },
  {
    id: "medtech",
    title: "MedTech AI",
    description: "Software solutions for modern digital healthcare and medical data management. HIPAA-compliant AI-powered diagnostics and patient care optimization.",
    icon: Heart,
    gradient: "from-rose-500/20 to-pink-500/20 dark:from-rose-500/10 dark:to-pink-500/10",
    span: "md:col-span-1",
    href: "/products/medtech",
  },
]

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  const Icon = product.icon

  return (
    <Link href={product.href}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 lg:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 cursor-pointer h-full ${product.span || ""}`}
      >
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        />

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={isHovered ? { backgroundPosition: ["200% 0", "-200% 0"] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="h-6 w-6" />
          </motion.div>

          {/* Title with scramble effect */}
          <h3 className="mb-3 text-xl font-semibold text-foreground">
            <TextScramble text={product.title} trigger={isInView} />
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Learn more link */}
          <motion.div
            className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
            initial={{ x: -10 }}
            animate={isHovered ? { x: 0 } : { x: -10 }}
          >
            <span>Learn more</span>
            <motion.span
              animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our AI Ecosystem
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Integrated AI Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Five powerful AI products working together to transform your business operations
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
