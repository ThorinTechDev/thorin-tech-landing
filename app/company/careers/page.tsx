// app/company/careers/page.tsx
"use client";

import { CompanyPageCard } from "@/components/ui/company";
import { Briefcase } from "lucide-react";

export default function CareersPage() {
  return (
    <CompanyPageCard
      title="Careers at Thorin Tech"
      icon={Briefcase}
      badge="Join Us"
      summary="Build the next generation of technology. Shape the future of enterprise AI."
      accentColor="purple"
    >
      <p>
        We don't hire "employees." We build a team of engineers who are
        reshaping how enterprises operate in the real world.
      </p>
      <p>
        If you believe that AI should be autonomous, that software should think
        and act, and that automation should reach the level of decision‑making —
        <strong> you are in the right place.</strong>
      </p>

      <h2>Why Thorin Tech?</h2>
      <p>
        We don't just offer a job; we offer a <strong>tech career with impact</strong>.
        Here, you won't write forgettable code. You will build systems that run
        for years and create real transformation in vital sectors like finance,
        healthcare, and government.
      </p>

      <h2>What We Offer</h2>
      <table>
        <thead>
          <tr>
            <th>Benefit</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Flexible Work</strong></td>
            <td>Hybrid or fully remote, with flexible hours based on productivity.</td>
          </tr>
          <tr>
            <td><strong>Flagship Projects</strong></td>
            <td>Direct work on OCR, Fintech, and Agentic AI in production environments.</td>
          </tr>
          <tr>
            <td><strong>Accelerated Growth</strong></td>
            <td>Annual training budget, paid certifications, and global conferences.</td>
          </tr>
          <tr>
            <td><strong>Meritocracy</strong></td>
            <td>Evaluation based on tangible results, not hours logged.</td>
          </tr>
          <tr>
            <td><strong>Equity &amp; Rewards</strong></td>
            <td>Employee Stock Ownership Plan (ESOP) for top performers.</td>
          </tr>
          <tr>
            <td><strong>Global Team</strong></td>
            <td>Collaborate with experts from 8 different nationalities.</td>
          </tr>
        </tbody>
      </table>

      <h2>We Are Looking For</h2>
      <ul>
        <li>A <strong>Deep Engineering Mindset</strong></li>
        <li>Experience with AI / ML / LLMs</li>
        <li>Architectural understanding of Distributed Systems</li>
        <li>Passion for building globally scalable products</li>
      </ul>

      <h2>Open Roles</h2>
      <ul>
        <li><strong>AI Engineering:</strong> ML Engineers, AI Researchers, Prompt Engineers</li>
        <li><strong>Software Engineering:</strong> Backend (NestJS/Node.js), Frontend (React/Next.js), DevOps</li>
        <li><strong>Data Science:</strong> Data Scientists, Data Engineers, BI Analysts</li>
        <li><strong>Solution Engineering:</strong> Solution Architects, Technical Leads</li>
        <li><strong>User Experience:</strong> UX Researchers, UI/UX Designers</li>
        <li><strong>Growth &amp; Sales:</strong> Growth Hackers, Partnership Managers</li>
      </ul>

      <h2>Team Testimonials</h2>
      <blockquote>
        "I joined Thorin Tech as a junior developer. 18 months later, I lead a
        team of 5 engineers building an OCR system serving 50,000 users daily.
        Here, competence is truly rewarded."
        <br />— <strong>Ahmed Al‑Khathiri</strong>, Lead AI Engineer
      </blockquote>
      <blockquote>
        "Working on Fintech projects at Thorin Tech gave me a unique opportunity
        to understand the Gulf market's challenges up close. Our impact is
        tangible every day."
        <br />— <strong>Sara Al‑Otaibi</strong>, Senior Data Scientist
      </blockquote>

      <h2>Application Process</h2>
      <ol>
        <li><strong>Apply:</strong> CV + GitHub/Portfolio link</li>
        <li><strong>Technical Interview:</strong> 60‑minute practical challenge</li>
        <li><strong>Cultural Interview:</strong> Fit with our core values</li>
        <li><strong>Offer:</strong> Within 48 hours of the final interview</li>
      </ol>
      <p>
        <strong>💡 Tip:</strong> Even if you don't see the perfect role now,
        join our <strong>Talent Network</strong> to be the first to hear about
        new opportunities.
      </p>
    </CompanyPageCard>
  );
}