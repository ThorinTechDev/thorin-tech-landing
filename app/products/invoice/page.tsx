"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import {
  FileText,
  Check,
  Zap,
  Shield,
  BarChart3,
  Sparkles,
  Building2,
  Cog,
  Brain,
  GitCompare,
  Rocket,
  Clock,
  Users,
  Lock,
  Puzzle,
  MessageSquare,
  Award,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    period: "/mo",
    description: "Get Started Free",
    features: [
      "10 Invoices / mo",
      "Basic OCR Capture",
      "Manual Review & Correct",
      "7-day History",
      "Standard Data Export",
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outline" as const,
    highlight: false,
  },
  {
    name: "Starter",
    price: "399",
    period: "/mo",
    description: "Go Starter",
    features: [
      "500 Invoices / mo",
      "Unlimited History",
      "Invoice Builder (Create invoices)",
      "Basic AI Assistant (Ask data questions)",
      "Email Support",
    ],
    buttonText: "Go Starter",
    buttonVariant: "outline" as const,
    highlight: false,
  },
  {
    name: "Pro",
    price: "2699",
    period: "/mo",
    description: "Automate Everything",
    features: [
      "2,500 Invoices / mo",
      "Automation Suite",
      "Full API Access",
      "Webhooks for real-time sync",
      "Multi-user Access (up to 5 members)",
    ],
    buttonText: "Automate Everything",
    buttonVariant: "default" as const,
    highlight: true,
    badge: "POPULAR",
  },
  {
    name: "Enterprise",
    price: "Contact Sales",
    period: "",
    description: "Custom Solutions",
    features: [
      "Unlimited Invoices",
      "Dedicated Account Manager",
      "Custom AI Model Training",
      "On-premise deployment",
      "SLA",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    highlight: false,
    icon: Building2,
  },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const cardHover = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeInOut" },
}

export default function InvoiceOCRPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="pt-32 pb-0 lg:pt-40 lg:pb-0"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <Link
              href="/#products"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              ← Back to Products
            </Link>
          </nav>
        </div>
      </motion.section>

      {/* Hero Section – merged from first project with OCR focus */}
      <section className="relative overflow-hidden pt-0 pb-20 lg:pb-32">
        {/* Animated background – from first project design */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileText className="h-8 w-8" />
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              AI Document Intelligence <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                for Invoice Processing
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-xl text-muted-foreground"
            >
              CIRTH is a next-generation AI-powered Intelligent Document Processing and Accounts Payable automation
              platform. Extract, understand and automate invoice processing with Vision Language Models and AI
              Document Agents.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="group gap-2 text-base">
                <Sparkles className="h-5 w-5 transition-transform group-hover:scale-110" />
                Try Free for 7 Days
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-3 text-sm text-muted-foreground">
              No credit card required • Free trial for 7 days
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-20 lg:py-32 bg-muted/30"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Powered by <span className="text-primary">Vision Language Models</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our technology goes beyond traditional OCR to truly understand document structure and context.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "Visual Understanding",
                description:
                  "VLMs process invoices as images, understanding layout, logos, tables, and handwritten notes just like a human.",
              },
              {
                icon: GitCompare,
                title: "Contextual Extraction",
                description:
                  "No more template-based parsing. Our AI understands the semantics of each field, even on unfamiliar invoice designs.",
              },
              {
                icon: Rocket,
                title: "Continuous Learning",
                description:
                  "The model improves with every document processed, adapting to your specific vendors and invoice formats.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={cardHover}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <item.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Comparison Section – vs traditional solutions */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why CIRTH beats traditional OCR
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Legacy OCR systems fail with complex invoices. Our AI Document Agents succeed.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-lg font-semibold text-foreground">Feature</th>
                  <th className="pb-4 text-lg font-semibold text-foreground">Traditional OCR</th>
                  <th className="pb-4 text-lg font-semibold text-primary">CIRTH AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: "Template dependency", old: "Requires templates per layout", new: "Works on any layout" },
                  { feature: "Handwritten text", old: "Low accuracy", new: "High accuracy with VLMs" },
                  { feature: "Tables & line items", old: "Often misaligned", new: "Perfect structure preservation" },
                  { feature: "Multi-language", old: "Limited support", new: "100+ languages" },
                  { feature: "Self-learning", old: "None", new: "Continuous improvement" },
                ].map((row, idx) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-border"
                  >
                    <td className="py-4 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 text-muted-foreground">{row.old}</td>
                    <td className="py-4 text-primary">{row.new}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 lg:py-32 bg-muted/30"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to automate AP
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From extraction to ERP integration – a complete solution.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, title: "Instant Processing", description: "Process thousands of invoices in seconds" },
              { icon: Shield, title: "99.9% Accuracy", description: "AI-powered validation ensures precision" },
              { icon: BarChart3, title: "Smart Analytics", description: "Real-time insights and reporting" },
              { icon: Check, title: "Auto-Validation", description: "Automatic error detection and correction" },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={cardHover}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <feature.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Automation Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div variants={fadeInUp}>
              <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                End-to-end automation
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                From email attachment to ERP posting
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Set up automated workflows that capture invoices from email, parse data, validate against PO, route for
                approval, and sync directly to your accounting system.
              </p>
              <ul className="space-y-3">
                {[
                  "Auto‑fetch from email, FTP, or API",
                  "Validation rules & 3‑way matching",
                  "Approval workflows & role-based access",
                  "Export to QuickBooks, Xero, SAP, Oracle",
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-8 text-center"
            >
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary">80%</p>
              <p className="text-muted-foreground">reduction in manual data entry</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 lg:py-32 bg-muted/30"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Transform your finance team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Tangible results that impact your bottom line.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Users, title: "85% faster", desc: "invoice processing time" },
              { icon: Award, title: "99.7%", desc: "data extraction accuracy" },
              { icon: Rocket, title: "3x ROI", desc: "within first year" },
            ].map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                whileHover={cardHover}
                className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg"
              >
                <benefit.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                <div className="text-3xl font-bold text-primary">{benefit.title}</div>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Security Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Enterprise‑grade security
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Your data is encrypted at rest and in transit. We are SOC 2 Type II compliant and offer on‑premise
                deployment for regulated industries.
              </p>
              <ul className="space-y-3">
                {[
                  "AES‑256 encryption",
                  "SSO & MFA support",
                  "Audit logs & role‑based access",
                  "GDPR & CCPA compliant",
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <Lock className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="order-1 lg:order-2 rounded-2xl border border-border bg-card p-6 text-center"
            >
              <Shield className="mx-auto mb-4 h-16 w-16 text-primary" />
              <p className="text-sm text-muted-foreground">
                Certified security – your data never leaves your control.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Integrations Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 lg:py-32 bg-muted/30"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Works with your stack
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
              Native integrations with leading ERPs, accounting software, and storage providers.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} className="flex flex-wrap justify-center gap-6">
            {["SAP", "Oracle", "QuickBooks", "Xero", "Microsoft Dynamics", "NetSuite"].map((name, idx) => (
              <motion.div
                key={name}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg border border-border bg-card px-6 py-3 text-foreground"
              >
                {name}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-8">
            <Button variant="outline" className="gap-2">
              <Puzzle className="h-4 w-4" />
              View all 50+ integrations
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section – with Monthly/Yearly Toggle */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose the plan that fits your business needs. All prices in AED.
            </p>

            {/* Monthly / Yearly Toggle */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className={`text-sm ${billingCycle === "monthly" ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span
                  className={`${billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-primary transition-transform`}
                />
              </button>
              <span className={`text-sm ${billingCycle === "yearly" ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                Yearly <span className="text-primary text-xs">(Save 20%)</span>
              </span>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan) => {
              // Calculate yearly price if applicable (20% discount)
              let displayPrice = plan.price
              let displayPeriod = plan.period
              if (billingCycle === "yearly" && plan.price !== "Contact Sales") {
                const monthlyPrice = parseInt(plan.price)
                if (!isNaN(monthlyPrice)) {
                  const yearlyTotal = Math.round(monthlyPrice * 12 * 0.8) // 20% off
                  displayPrice = yearlyTotal.toString()
                  displayPeriod = "/year"
                }
              }
              return (
                <motion.div
                  key={plan.name}
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`relative flex flex-col rounded-2xl border p-6 ${plan.highlight
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                      : "border-border bg-card"
                    }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <div className="mb-2 flex items-center gap-2">
                      {plan.icon ? (
                        <plan.icon className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <Cog className="h-5 w-5 text-muted-foreground" />
                      )}
                      <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                    </div>
                    <div className="flex items-baseline gap-1 flex-wrap">
                      {plan.price === "Contact Sales" ? (
                        <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-sm text-muted-foreground">AED</span>
                          <span className="text-4xl font-bold text-foreground">{displayPrice}</span>
                          <span className="text-muted-foreground">{displayPeriod}</span>
                          {billingCycle === "yearly" && plan.price !== "Contact Sales" && (
                            <span className="ml-2 text-xs text-green-600 line-through">
                              AED {parseInt(plan.price) * 12}/year
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.buttonVariant} className="w-full">
                    {plan.buttonText}
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 lg:py-32 bg-muted/30"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Loved by finance teams
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              See how CIRTH transforms accounts payable.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "We reduced invoice processing time from 5 days to 2 hours. The AI accuracy is mind‑blowing.",
                author: "Sarah Chen",
                role: "CFO, TechRetail",
              },
              {
                quote:
                  "Finally, an OCR solution that handles our complex Japanese invoices without any template setup.",
                author: "Kenji Watanabe",
                role: "Finance Director, Global Logistics",
              },
              {
                quote: "The API‑first approach allowed us to integrate within a week. Support is exceptional.",
                author: "Marcus Schmidt",
                role: "CTO, FinScale",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={cardHover}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <MessageSquare className="mb-4 h-8 w-8 text-primary" />
                <p className="mb-4 text-foreground">"{t.quote}"</p>
                <div className="font-semibold text-foreground">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 lg:py-32"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                q: "How accurate is the extraction?",
                a: "Our Vision Language Models achieve 99.7% field‑level accuracy on average, even with handwritten or low‑quality scans.",
              },
              {
                q: "Do I need to create templates?",
                a: "No. CIRTH works on any invoice layout out‑of‑the‑box. No template setup or training required.",
              },
              {
                q: "What languages are supported?",
                a: "We support over 100 languages, including Arabic, Chinese, Japanese, and right‑to‑left scripts.",
              },
              {
                q: "Can I host it on‑premise?",
                a: "Yes, enterprise plans include on‑premise or VPC deployment for maximum data privacy.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={faq.q}
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-semibold text-foreground">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 lg:py-32 bg-primary/5"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={fadeInUp} className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to automate your invoice processing?
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join hundreds of finance teams that save thousands of hours every month.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Sparkles className="h-5 w-5" />
              Start 7‑day free trial
            </Button>
            <Button size="lg" variant="outline">
              Contact sales
            </Button>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-4 text-sm text-muted-foreground">
            No credit card required • Cancel anytime
          </motion.p>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}