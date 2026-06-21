import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MessageCircle, Workflow, Shield, Zap, Users, Bot } from "lucide-react"
import Link from "next/link"

export default function WhatsAppAutomationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to Products
            </Link>
          </nav>

          {/* Header */}
          <div className="mb-16">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              WhatsApp & Automation
            </h1>
            <p className="max-w-2xl text-xl text-muted-foreground text-pretty">
              Unlimited messaging via Official API + n8n automation for custom workflows. Secure, scalable communication infrastructure.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: MessageCircle, title: "Official API", description: "Verified WhatsApp Business API integration" },
              { icon: Workflow, title: "n8n Workflows", description: "Custom automation with visual workflow builder" },
              { icon: Shield, title: "Enterprise Security", description: "End-to-end encryption and compliance" },
              { icon: Zap, title: "Unlimited Messages", description: "No caps on messaging volume" },
              { icon: Users, title: "Multi-Agent Support", description: "Scale your team without limits" },
              { icon: Bot, title: "AI Chatbots", description: "Intelligent automated responses" },
            ].map((feature, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6">
                <feature.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
            <p className="text-lg text-muted-foreground">More details coming soon...</p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
