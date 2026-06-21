import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BentoGrid } from "@/components/bento-grid"
import { Features } from "@/components/features"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="products">
        <BentoGrid />
      </section>
      <section id="solutions">
        <Features />
      </section>
      <section id="contact">
        <CTA />
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
