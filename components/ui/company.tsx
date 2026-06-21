// components/ui/company-page-card.tsx

/**
 * COMPANY PAGE CARD – REUSABLE LAYOUT FOR COMPANY SECTIONS
 *
 * This component provides a consistent, animated, card‑based template
 * for all company‑related pages (About, Careers, Blog, Press).
 *
 * It uses:
 * - Next.js App Router
 * - shadcn/ui Card components
 * - Framer Motion for entrance animations
 * - Tailwind CSS with typography plugin for rich text
 *
 * All content is rendered inside a styled Card with a hero header,
 * breadcrumb navigation, and a small footer disclaimer.
 */

"use client";

// ─────────────────────────────────────────────────────────────────────
// 1. REACT & NEXT.JS
// ─────────────────────────────────────────────────────────────────────
import { ReactNode } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────
// 2. UI LIBRARIES & UTILITIES
// ─────────────────────────────────────────────────────────────────────
import { motion } from "framer-motion";
import { LucideIcon, ArrowLeft, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

// ─────────────────────────────────────────────────────────────────────
// 3. GLOBAL LAYOUT COMPONENTS
// ─────────────────────────────────────────────────────────────────────
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

// ─────────────────────────────────────────────────────────────────────
// 4. TYPE DEFINITIONS
// ─────────────────────────────────────────────────────────────────────

/**
 * Props accepted by the CompanyPageCard component.
 */
interface CompanyPageCardProps {
  /** Main title of the page (e.g., "About Thorin Tech") */
  title: string;
  /** Lucide icon to display next to the title */
  icon: LucideIcon;
  /** Optional date (e.g., for blog posts or press releases) */
  date?: string;
  /** The main content – rendered inside a Card */
  children: ReactNode;
  /** Optional badge/label (e.g., "Our Story", "Join Us") */
  badge?: string;
  /** Short summary displayed below the title */
  summary?: string;
  /**
   * Accent color that influences:
   * - heading colours (h2, h3, h4)
   * - badge background/text
   * - icon and border tints
   *
   * Options: "slate", "navy", "gold", "emerald", "purple"
   * Default: "navy" (matches the enterprise tech aesthetic)
   */
  accentColor?: "slate" | "navy" | "gold" | "emerald" | "purple";
  /** Link to navigate back to (defaults to "/" – home page) */
  backHref?: string;
  /** Label for the back button (defaults to "Back to Home") */
  backLabel?: string;
}

// ─────────────────────────────────────────────────────────────────────
// 5. ACCENT COLOUR PALETTE
// ─────────────────────────────────────────────────────────────────────

/**
 * Maps each accentColor to a set of Tailwind classes for:
 * - badge (background + text)
 * - icon (text colour)
 * - heading (text colour for h2/h3/h4)
 * - border (border colour for the icon container)
 *
 * All palettes are designed to work in both light and dark modes.
 */
const accentColorMap = {
  slate: {
    badge: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    icon: "text-slate-600 dark:text-slate-400",
    heading: "text-slate-800 dark:text-slate-200",
    border: "border-slate-200 dark:border-slate-700",
  },
  navy: {
    badge: "bg-blue-950/10 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    icon: "text-blue-700 dark:text-blue-400",
    heading: "text-blue-900 dark:text-blue-200",
    border: "border-blue-200/50 dark:border-blue-800/50",
  },
  gold: {
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    icon: "text-amber-600 dark:text-amber-400",
    heading: "text-amber-900 dark:text-amber-200",
    border: "border-amber-200/50 dark:border-amber-800/50",
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    icon: "text-emerald-600 dark:text-emerald-400",
    heading: "text-emerald-900 dark:text-emerald-200",
    border: "border-emerald-200/50 dark:border-emerald-800/50",
  },
  purple: {
    badge: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    icon: "text-purple-600 dark:text-purple-400",
    heading: "text-purple-900 dark:text-purple-200",
    border: "border-purple-200/50 dark:border-purple-800/50",
  },
};

// ─────────────────────────────────────────────────────────────────────
// 6. FRAMER MOTION VARIANTS
// ─────────────────────────────────────────────────────────────────────

/** Fade up animation with a slight Y translation – used for staggered children */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/** Slide from left animation – used for the icon and main title */
const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

/** Staggered container to animate children one after another */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// ─────────────────────────────────────────────────────────────────────
// 7. MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────

/**
 * CompanyPageCard – the primary layout component for company sections.
 *
 * It wraps the page content in a clean card, adds a hero area with
 * an icon, title, badge, and date, and applies smooth animations.
 *
 * The back button defaults to the home page ("/") but can be customised
 * via backHref / backLabel props.
 */
export function CompanyPageCard({
  title,
  icon: Icon,
  date,
  children,
  badge,
  summary,
  accentColor = "navy",
  backHref = "/",           // Default: go back to the home page
  backLabel = "Back to Home",
}: CompanyPageCardProps) {
  // Resolve the accent classes based on the provided colour
  const color = accentColorMap[accentColor] || accentColorMap.navy;

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10">
      {/* ─── GLOBAL HEADER ─────────────────────────────────────────── */}
      <Header />

      {/* ─── BREADCRUMB / BACK BUTTON ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-28 pb-0 lg:pt-36"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {backLabel}
          </Link>
        </div>
      </motion.div>

      {/* ─── HERO SECTION ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-6 pb-8 lg:pt-8 lg:pb-12">
        {/* Subtle background glow – radial gradient from primary colour */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between"
          >
            {/* Left side: icon + title + badge */}
            <div className="flex items-center gap-4">
              <motion.div
                variants={slideInLeft}
                className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border",
                  color.border,
                  "bg-white/50 backdrop-blur-sm dark:bg-black/30"
                )}
              >
                <Icon className={cn("h-7 w-7", color.icon)} />
              </motion.div>

              <div>
                {badge && (
                  <motion.span
                    variants={fadeInUp}
                    className={cn(
                      "inline-block rounded-full px-3 py-0.5 text-xs font-medium",
                      color.badge
                    )}
                  >
                    {badge}
                  </motion.span>
                )}
                <motion.h1
                  variants={slideInLeft}
                  className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                >
                  {title}
                </motion.h1>
              </div>
            </div>

            {/* Right side: optional date in a pill */}
            {date && (
              <motion.div
                variants={fadeInUp}
                className="flex shrink-0 items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm"
              >
                <Calendar className="h-4 w-4" />
                <span className="font-medium text-foreground">{date}</span>
              </motion.div>
            )}
          </motion.div>

          {/* Optional summary below the title */}
          {summary && (
            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-2xl text-lg text-muted-foreground/90"
            >
              {summary}
            </motion.p>
          )}
        </div>
      </section>

      {/* ─── MAIN CONTENT CARD ─────────────────────────────────────── */}
      <section className="pb-20 lg:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
          >
            <Card className="border-border/60 shadow-lg shadow-primary/5">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                {/*
                  Tailwind Typography (prose) is used for rich text formatting.
                  Headings (h2, h3, h4) are enlarged and coloured with the accent.
                  We also style tables, blockquotes, lists, and inline code.
                */}
                <div
                  className={cn(
                    "prose prose-lg dark:prose-invert max-w-none",

                    // ── Heading styles ──
                    "prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-2",
                    `prose-h2:${color.heading}`,
                    "prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3",
                    `prose-h3:${color.heading}`,
                    "prose-h4:text-xl prose-h4:font-medium prose-h4:mt-6 prose-h4:mb-2",
                    `prose-h4:${color.heading}`,

                    // ── Paragraphs, lists, and links ──
                    "prose-p:text-muted-foreground/90 prose-p:leading-relaxed",
                    "prose-ul:text-muted-foreground/90 prose-li:marker:text-primary/70",
                    "prose-a:text-primary/80 hover:prose-a:text-primary hover:prose-a:underline",
                    "prose-strong:text-foreground",

                    // ── Blockquotes ──
                    "prose-blockquote:border-l-primary/40 prose-blockquote:bg-muted/20 prose-blockquote:px-6 prose-blockquote:py-3 prose-blockquote:rounded-r-lg",

                    // ── Tables ──
                    "prose-table:border-collapse prose-table:w-full",
                    "prose-th:border prose-th:border-border prose-th:bg-muted/30 prose-th:p-2 prose-th:text-left",
                    "prose-td:border prose-td:border-border prose-td:p-2",

                    // ── Inline code ──
                    "prose-code:bg-muted/50 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm"
                  )}
                >
                  {children}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ─── DISCLAIMER FOOTER ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-border/50 bg-muted/10 py-4"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Thorin Tech. All rights reserved.
        </div>
      </motion.div>

      {/* ─── GLOBAL FOOTER & SCROLL-TO-TOP ────────────────────────── */}
      <Footer />
      <ScrollToTop />
    </main>
  );
}