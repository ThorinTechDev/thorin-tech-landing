import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Share2, Video, Image, Type, Calendar, Globe } from "lucide-react"
import Link from "next/link"

export default function MarketingSuitePage() {
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
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
              <Share2 className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Marketing & Social Suite
            </h1>
            <p className="max-w-2xl text-xl text-muted-foreground text-pretty">
              AI content creation (Text, Image, Video) + Auto-publishing on 7+ platforms including LinkedIn, X, TikTok, Facebook, Instagram, YouTube, and Threads.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Type, title: "AI Copywriting", description: "Generate engaging text content for any platform" },
              { icon: Image, title: "Image Generation", description: "Create stunning visuals with AI" },
              { icon: Video, title: "Video Creation", description: "Produce professional videos automatically" },
              { icon: Calendar, title: "Smart Scheduling", description: "Optimal posting times for maximum reach" },
              { icon: Globe, title: "7+ Platforms", description: "LinkedIn, X, TikTok, Facebook, Instagram, YouTube, Threads" },
              { icon: Share2, title: "Auto-Publishing", description: "One-click distribution across all channels" },
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
