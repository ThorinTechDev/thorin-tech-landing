import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { TrendingUp, Search, AlertTriangle, PieChart, FileCheck, Brain } from "lucide-react"
import Link from "next/link"

export default function FinancialIntelligencePage() {
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
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              AI Financial Intelligence
            </h1>
            <p className="max-w-2xl text-xl text-muted-foreground text-pretty">
              Combined AI Accounting and AI Tax Audit tools with anomaly detection. Real-time compliance monitoring and intelligent financial insights.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Brain, title: "AI Accounting", description: "Automated bookkeeping and reconciliation" },
              { icon: FileCheck, title: "Tax Audit AI", description: "Intelligent tax compliance and optimization" },
              { icon: AlertTriangle, title: "Anomaly Detection", description: "Real-time fraud and error detection" },
              { icon: PieChart, title: "Financial Analytics", description: "Deep insights into your financial health" },
              { icon: Search, title: "Compliance Monitoring", description: "Stay ahead of regulatory requirements" },
              { icon: TrendingUp, title: "Forecasting", description: "AI-powered financial predictions" },
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
