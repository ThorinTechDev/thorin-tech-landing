// app/company/press/page.tsx
"use client";

import { CompanyPageCard } from "@/components/ui/company";
import { Megaphone } from "lucide-react";

export default function PressPage() {
  return (
    <CompanyPageCard
      title="Press & Media"
      icon={Megaphone}
      badge="In the News"
      summary="Thorin Tech at the forefront of global digital transformation."
      accentColor="emerald"
    >
      <p>
        Thorin Tech is not just a startup. We are an emerging player in the
        <strong> Enterprise Intelligence Systems</strong> space. We contribute
        to developing the AI infrastructure in the region and support digital
        transformation in financial and government sectors.
      </p>

      <h2>Official Press Releases</h2>
      <ul>
        <li>
          <strong>Thorin Tech announces strategic partnership with a leading Gulf digital bank</strong>
          — to develop an intelligent KYC system.
        </li>
        <li>
          <strong>Company expands operations to the Egyptian market</strong>
          — with a new technical office in Cairo.
        </li>
        <li>
          <strong>Thorin Tech participates in LEAP 2026</strong>
          — as an official technology partner.
        </li>
      </ul>

      <h2>Media Kit</h2>
      <p>Download our complete media kit, which includes:</p>
      <ul>
        <li>✅ Company logo in all formats (SVG, PNG, EPS)</li>
        <li>✅ Brand guidelines</li>
        <li>✅ High‑resolution team photos</li>
        <li>✅ Fact sheet with key company data</li>
        <li>✅ Pre‑written press release templates</li>
      </ul>
      <p>
        <strong>[📥 Download Full Media Kit]</strong>
      </p>

      <h2>Strategic Partnerships</h2>
      <ul>
        <li><strong>🏦 Leading Digital Banks</strong> — across the Gulf region</li>
        <li><strong>🏛️ Government Entities</strong> — driving digital transformation programs</li>
        <li><strong>🎓 Technical Universities</strong> — joint R&amp;D programs</li>
        <li><strong>🌐 Global Tech Companies</strong> — AWS, Google Cloud, Microsoft Azure</li>
      </ul>

      <h2>Events &amp; Conferences</h2>
      <ul>
        <li><strong>LEAP 2026</strong> — Riyadh, Saudi Arabia (Official Partner)</li>
        <li><strong>GITEX Global 2026</strong> — Dubai, UAE</li>
        <li><strong>Web Summit 2026</strong> — Lisbon, Portugal</li>
      </ul>

      <h2>Awards &amp; Recognition</h2>
      <ul>
        <li>Best Enterprise AI Solution — Gulf Tech Awards 2025</li>
        <li>Top 50 AI Startups in the Middle East — Forbes Middle East</li>
      </ul>

      <h2>Media Appearances</h2>
      <ul>
        <li>Interview with CNBC Arabia — "The Future of Enterprise AI"</li>
        <li>Podcast feature on "Tech in the Gulf" — Season 3, Episode 12</li>
        <li>Article in The National — "Dubai's rising deep tech ecosystem"</li>
      </ul>

      <h2>Press Contact</h2>
      <p>
        For media inquiries, interviews, or press kits, please contact our Media
        Relations Director directly.
      </p>
      <h3>Press Inquiry Form</h3>
      <pre className="rounded-lg bg-muted p-4 text-sm">
{`Full Name: _______________
Media Outlet: _______________
Request Type: □ Interview □ Statement □ Information □ Event Attendance
Subject: _______________
Target Date: _______________`}
      </pre>
      <p>
        <strong>Email:</strong> press@thorintech.ai
      </p>
    </CompanyPageCard>
  );
}