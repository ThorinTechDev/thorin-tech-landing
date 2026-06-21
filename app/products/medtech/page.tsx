import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Heart, Shield, Brain, Activity, Users, FileText } from "lucide-react"
import Link from "next/link"

export default function MedTechAIPage() {
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
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500">
              <Heart className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              MedTech AI
            </h1>
            <p className="max-w-2xl text-xl text-muted-foreground text-pretty">
              Software solutions for modern digital healthcare and medical data management. HIPAA-compliant AI-powered diagnostics and patient care optimization.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Brain, title: "AI Diagnostics", description: "Advanced diagnostic assistance powered by AI" },
              { icon: Shield, title: "HIPAA Compliant", description: "Full regulatory compliance built-in" },
              { icon: Activity, title: "Patient Monitoring", description: "Real-time health tracking and alerts" },
              { icon: FileText, title: "EHR Integration", description: "Seamless electronic health records" },
              { icon: Users, title: "Care Optimization", description: "Improve patient outcomes with AI insights" },
              { icon: Heart, title: "Predictive Health", description: "Early detection and prevention" },
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
