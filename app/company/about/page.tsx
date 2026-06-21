// app/company/about/page.tsx
"use client";

import { CompanyPageCard } from "@/components/ui/company";
import { Building2 } from "lucide-react";

export default function AboutPage() {
  return (
    <CompanyPageCard
      title="About Thorin Tech"
      icon={Building2}
      badge="Our Story"
      summary="We don't just follow the future. We redefine it."
      accentColor="navy"
    >
      <p>
        At <strong>Thorin Tech</strong>, we build a new digital infrastructure
        layer for modern enterprises — a layer that does not rely on traditional
        processes, but on intelligent, autonomous systems capable of
        understanding, analysing, and executing in real‑time.
      </p>
      <p>
        We blend deep software engineering, generative AI, enterprise
        automation, and agentic systems. Our goal is not to improve existing
        processes — but to <strong>replace them entirely</strong> with smarter,
        faster, and more accurate systems.
      </p>

      <h2>Our Mission</h2>
      <blockquote>
        We build systems that don't just support decisions — they make them,
        within safe, verifiable boundaries.
      </blockquote>
      <p>
        Thorin Tech represents the next generation of technology companies that
        see AI not as an added feature, but as the <strong>core operating
        nucleus</strong> of every modern enterprise.
      </p>

      <h2>Our Vision</h2>
      <p>
        To build a <strong>Unified Intelligent Operating System</strong> that
        enables organisations to:
      </p>
      <ul>
        <li>Eliminate repetitive manual workflows</li>
        <li>Transform data into instantaneous decisions</li>
        <li>Run businesses through independent AI agents</li>
        <li>Raise operational efficiency to unprecedented levels</li>
      </ul>

      <h2>Our Story</h2>
      <p>
        Thorin Tech was born from a deep conviction: that the gap between
        available technology and its practical application in the Arab and Gulf
        region remains vast. We started as a small team of passionate engineers
        in Dubai and grew into a leading company serving clients in over
        <strong> 12 countries</strong>. Every project we build is a journey to
        transform a complex challenge into an intelligent, self‑sufficient
        solution.
      </p>

      <h2>Our Core Values</h2>
      <table>
        <thead>
          <tr>
            <th>Value</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Deep Engineering</strong></td>
            <td>We don't settle for surface‑level solutions. We build solid foundations that scale.</td>
          </tr>
          <tr>
            <td><strong>Autonomous Intelligence</strong></td>
            <td>We design systems that learn and evolve without continuous human intervention.</td>
          </tr>
          <tr>
            <td><strong>Surgical Speed</strong></td>
            <td>Fast isn't enough; we deliver precision and speed together.</td>
          </tr>
          <tr>
            <td><strong>Radical Transparency</strong></td>
            <td>We tell our clients the truth, even when it's hard, building long‑term trust.</td>
          </tr>
          <tr>
            <td><strong>Tangible Impact</strong></td>
            <td>We measure success by the real impact on our clients' businesses.</td>
          </tr>
        </tbody>
      </table>

      <h2>By the Numbers</h2>
      <ul>
        <li><strong>150+</strong> successful technical projects delivered</li>
        <li><strong>90%</strong> average reduction in data processing time</li>
        <li><strong>12+</strong> countries served</li>
        <li><strong>40+</strong> experts and developers on the team</li>
        <li><strong>24/7</strong> continuous technical support</li>
      </ul>

      <h2>Leadership Team</h2>
      <ul>
        <li><strong>CEO</strong> — 15+ years in tech and investment</li>
        <li><strong>CTO</strong> — Expert in AI systems and distributed architecture</li>
        <li><strong>CPO</strong> — Specialist in SaaS and Fintech products</li>
        <li><strong>COO</strong> — Expert in operations and regional expansion</li>
      </ul>
    </CompanyPageCard>
  );
}