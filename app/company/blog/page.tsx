// app/company/blog/page.tsx
"use client";

import { CompanyPageCard } from "@/components/ui/company";
import { Newspaper } from "lucide-react";

export default function BlogPage() {
  return (
    <CompanyPageCard
      title="Blog"
      icon={Newspaper}
      badge="Engineering Insights"
      summary="Your window into the engineering mind behind intelligent systems."
      accentColor="gold"
    >
      <p>
        The Thorin Tech blog is not marketing content. It is an extension of our
        engineering labs. We share design decisions, AI production experiences,
        and lessons from building complex systems at enterprise scale.
      </p>

      <h2>AI Insights</h2>
      <ul>
        <li>From LLMs to Agentic AI: Rewriting the rules of automation</li>
        <li>RAG in Enterprise: A practical guide to avoiding hallucinations</li>
        <li>Generative AI in the Gulf: Opportunities and regulatory challenges</li>
        <li>Building an intelligent KYC system: From 48 hours to 30 seconds</li>
      </ul>

      <h2>Engineering Deep Dive</h2>
      <ul>
        <li>Event‑Driven Architecture with NestJS and Redis: A production lesson</li>
        <li>From React to Next.js 15: A 300% performance improvement journey</li>
        <li>Docker in Enterprise: Between Best Practices and reality</li>
        <li>Building scalable Microservices for financial data processing</li>
      </ul>

      <h2>Case Studies</h2>
      <ul>
        <li>How we turned 10,000 manual invoices into 3 minutes of smart automation</li>
        <li>Multilingual OCR for Arabic documents: Tackling dialects and fonts</li>
        <li>Full automation of financial audit processes using AI</li>
      </ul>

      <h2>Future Lens</h2>
      <ul>
        <li>What comes after traditional ERP?</li>
        <li>Will operational departments disappear?</li>
        <li>How enterprises become "autonomous entities"</li>
      </ul>

      <h2>Tool of the Week</h2>
      <p>
        Quick reviews of new technical tools we are actively testing in our
        production environment.
      </p>

      <h2>Developer Guide</h2>
      <ul>
        <li>Getting started with NestJS for enterprise backends</li>
        <li>Building AI agents with LangChain</li>
        <li>Deploying applications on AWS and Azure</li>
      </ul>

      <h2>Podcast: Tech Deep Dive</h2>
      <p>
        (Coming soon) Audio episodes with industry experts discussing the latest
        trends in AI, automation, and digital transformation.
      </p>

      <h2>Article Template</h2>
      <ol>
        <li><strong>The Problem:</strong> The real challenge we faced</li>
        <li><strong>Analysis:</strong> Why traditional solutions failed</li>
        <li><strong>Approach:</strong> How we designed the solution at Thorin Tech</li>
        <li><strong>Results:</strong> Tangible numbers and evidence</li>
        <li><strong>Lessons Learned:</strong> What the reader can apply</li>
      </ol>
    </CompanyPageCard>
  );
}