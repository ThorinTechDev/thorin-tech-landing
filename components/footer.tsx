// components/footer.tsx
"use client";

// ============================================================================
// Imports
// ============================================================================
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Lucide React Icons - used for most UI icons throughout the footer
import {
  LuLinkedin,
  LuTwitter,
  LuGithub,
  LuYoutube,
  LuFileText,
  LuMegaphone,
  LuMessageCircle,
  LuChartLine,
  LuStethoscope,
  LuBuilding2,
  LuBriefcase,
  LuNewspaper,
  LuMic,
  LuBookOpen,
  LuCode,
  LuLifeBuoy,
  LuActivity,
  LuShield,
  LuFileCheck,
  LuCookie,
  LuBan,
  LuHandshake,
  LuBrain,
  LuLock,
  LuGauge,
  LuRss,
} from "react-icons/lu";

// Font Awesome 6 Icons - Bluesky logo not available in Lucide
import { FaBluesky } from "react-icons/fa6";

// ============================================================================
// Data Structures
// ============================================================================

/**
 * Legal links are split into two logical groups for better visual distribution.
 * This prevents the "Legal" column from being overly long compared to others.
 */
const legalGroups = [
  {
    title: "Privacy & Terms",
    links: [
      { name: "Privacy Policy", href: "/legal/privacy-policy", icon: LuShield },
      { name: "Terms of Service", href: "/legal/terms-of-service", icon: LuFileCheck },
      { name: "Cookie Policy", href: "/legal/cookie-policy", icon: LuCookie },
      { name: "GDPR Compliance", href: "/legal/gdpr", icon: LuShield },
    ],
  },
  {
    title: "Policies & Agreements",
    links: [
      { name: "Acceptable Use Policy (AUP)", href: "/legal/acceptable-use-policy", icon: LuBan },
      { name: "Data Processing Agreement (DPA)", href: "/legal/data-processing-agreement", icon: LuHandshake },
      { name: "AI Usage & Responsible AI", href: "/legal/ai-usage-policy", icon: LuBrain },
      { name: "Information Security Policy", href: "/legal/information-security-policy", icon: LuLock },
      { name: "Service Level Agreement (SLA)", href: "/legal/service-level-agreement", icon: LuGauge },
    ],
  },
];

/**
 * Main navigation link groups for the footer.
 * Each group has a title and a list of links with associated icons.
 */
const footerLinks = {
  /** Product offerings - core services provided by Thorin Tech */
  products: [
    { name: "AI Invoice OCR", href: "/products/invoice", icon: LuFileText },
    { name: "Marketing Suite", href: "/products/marketing", icon: LuMegaphone },
    { name: "WhatsApp Automation", href: "/products/whatsapp", icon: LuMessageCircle },
    { name: "Financial Intelligence", href: "/products/finance", icon: LuChartLine },
    { name: "MedTech AI", href: "/products/medtech", icon: LuStethoscope },
  ],
  /** Company information and corporate pages */
  company: [
    { name: "About", href: "/company/about", icon: LuBuilding2 },
    { name: "Careers", href: "/company/careers", icon: LuBriefcase },
    { name: "Blog", href: "/company/blog", icon: LuNewspaper },
    { name: "Press", href: "/company/press", icon: LuMic },
  ],
  /** Developer and support resources */
  resources: [
    { name: "Documentation", href: "#", icon: LuBookOpen },
    { name: "API Reference", href: "#", icon: LuCode },
    { name: "Support", href: "#", icon: LuLifeBuoy },
    { name: "Status", href: "#", icon: LuActivity },
  ],
};

/**
 * Social media and community platform links.
 * These are displayed as icon-only links in the brand column.
 */
const socialLinks = [
  { name: "LinkedIn", icon: LuLinkedin, href: "https://linkedin.com/company/thorintech" },
  { name: "Twitter", icon: LuTwitter, href: "https://twitter.com/thorintech" },
  { name: "GitHub", icon: LuGithub, href: "https://github.com/thorintech" },
  { name: "YouTube", icon: LuYoutube, href: "https://youtube.com/@thorintech" },
  { name: "Blog", icon: LuRss, href: "/blog" },
  { name: "Bluesky", icon: FaBluesky, href: "https://bsky.app/profile/thorin-tech.bsky.social" },
];

// ============================================================================
// Animation Variants (Framer Motion)
// ============================================================================

/**
 * Fade-in animation with a small upward movement.
 * Used for individual elements within staggered lists.
 */
const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/**
 * Staggered container animation.
 * Children appear sequentially with a 0.05s delay between each.
 * Uses a 0.1s initial delay before the first child appears.
 */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

// ============================================================================
// Main Component
// ============================================================================

/**
 * Footer Component
 *
 * Renders the main website footer with:
 * - Brand logo and social links
 * - Product, Company, and Resource navigation columns
 * - Legal links split into two balanced groups
 * - Copyright and company information
 * - Animated slogan with decorative divider
 *
 * Uses Framer Motion for entrance animations and hover effects.
 * Fully responsive with Tailwind CSS grid system.
 */
export function Footer() {
  // Dynamically get the current year for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* 
          ============================================================
          MAIN LINKS GRID
          ============================================================
          Responsive grid layout:
          - Mobile: 2 columns
          - Tablet (md): 4 columns
          - Desktop (lg): 6 columns (accommodates the 2 legal groups)
        */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6"
        >
          {/* 
            ============================================================
            BRAND COLUMN (Logo + Social Links)
            ============================================================
            Spans 2 columns on mobile, reduces to 1 column on desktop.
            Contains the company logo and social media icon links.
          */}
          <motion.div
            variants={fadeInUp}
            className="col-span-2 flex flex-col items-center lg:col-span-1"
          >
            {/* Company Logo - animated hover scale effect */}
            <Link href="/" className="inline-flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                {/* Light theme logo (visible in light mode) */}
                <Image
                  src="/images/thorin-tech-light.png"
                  alt="Thorin Tech"
                  width={180}
                  height={50}
                  priority
                  className="block h-auto w-auto dark:hidden"
                />
                {/* Dark theme logo (visible in dark mode) */}
                <Image
                  src="/images/thorin-tech-dark.png"
                  alt="Thorin Tech"
                  width={180}
                  height={50}
                  priority
                  className="hidden h-auto w-auto dark:block"
                />
              </motion.div>
            </Link>

            {/* Social Media Links - updated with 6 platforms */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name} // Accessibility: screen reader support
                    className="text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* 
            ============================================================
            PRODUCTS COLUMN
            ============================================================
          */}
          <motion.div variants={fadeInUp}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Products
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {/* Icon with opacity transition on hover */}
                      <Icon className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
                      {/* Text with subtle slide on hover */}
                      <span className="transition-transform group-hover:translate-x-0.5">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* 
            ============================================================
            COMPANY COLUMN
            ============================================================
          */}
          <motion.div variants={fadeInUp}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
                      <span className="transition-transform group-hover:translate-x-0.5">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* 
            ============================================================
            RESOURCES COLUMN
            ============================================================
          */}
          <motion.div variants={fadeInUp}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
                      <span className="transition-transform group-hover:translate-x-0.5">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* 
            ============================================================
            LEGAL COLUMNS (Split into 2 groups for balance)
            ============================================================
            The 9 legal links are distributed across two separate columns
            to prevent an overly long single column.
          */}
          {legalGroups.map((group) => (
            <motion.div key={group.title} variants={fadeInUp}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Icon className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
                        <span className="transition-transform group-hover:translate-x-0.5">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* 
          ============================================================
          BOTTOM BAR
          ============================================================
          Copyright notice, company description, and animated slogan.
        */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 border-t border-border/60 pt-8"
        >
          {/* Company Information */}
          <div className="flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
            {/* Copyright notice with dynamic year */}
            <p>
              &copy; {currentYear} Thorin Tech LLC. All Rights Reserved.
            </p>
            {/* Company description - positioned centrally with max width for readability */}
            <p className="max-w-3xl text-sm leading-relaxed">
              Thorin Tech is a technology company specializing in Artificial Intelligence,
              Enterprise Software, Intelligent Automation, and Cloud Solutions.
            </p>
            {/* Headquarters location with reduced opacity */}
            <p className="text-xs text-muted-foreground/70">
              Headquartered in the United Arab Emirates.
            </p>
          </div>

          {/* 
            Slogan with decorative horizontal dividers
            The slogan appears centered with dashes extending on both sides,
            creating a visually appealing separator above the footer.
          */}
          <div className="relative mt-6 flex items-center justify-center">
            {/* Left and right divider lines */}
            <div className="absolute left-0 right-0 flex items-center">
              <div className="w-full border-t border-border/40" />
            </div>
            {/* Slogan text on a background that obscures the line behind it */}
            <span className="relative bg-card/50 px-6 text-sm font-medium text-primary">
              ✦ AI Solutions for Modern Enterprises ✦
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}