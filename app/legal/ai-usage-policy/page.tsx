// app/legal/ai-usage-policy/page.tsx
"use client";

import { LegalPageCard } from "@/components/ui/legal-page-card";
import { Brain } from "lucide-react";

export default function AIUsagePolicyPage() {
  return (
    <LegalPageCard
      title="AI Usage & Responsible AI Policy"
      icon={Brain}
      lastUpdated="June 20, 2026"
      badge="Ethical AI"
      summary="We are committed to developing and deploying AI responsibly, ensuring fairness, transparency, and safety."
      headingColor="navy"
    >
      <h2>1. Core Principles</h2>
      <p>
        Thorin Tech is committed to developing and deploying AI solutions that align with human values, promoting transparency, fairness, accountability, and safety. We ensure our AI systems are reliable, secure, and operate within ethical boundaries.
      </p>

      <h2>2. Permitted Use Cases</h2>
      <p>Thorin Tech&apos;s AI services are designed for legitimate enterprise applications, including:</p>
      <ul>
        <li>Document intelligence and data extraction (OCR).</li>
        <li>Business process automation and workflow optimization.</li>
        <li>Financial analytics and fraud detection.</li>
        <li>Marketing personalization and customer insights.</li>
        <li>Healthcare administration and medical data analysis (MedTech).</li>
        <li>Enterprise knowledge management.</li>
      </ul>

      <h2>3. Prohibited Use Cases</h2>
      <p>Customers must not use Thorin Tech AI for:</p>
      <ul>
        <li>Generating illegal, harmful, or defamatory content.</li>
        <li>Manipulating public opinion, political campaigns, or elections.</li>
        <li>Discrimination based on race, gender, religion, or any protected characteristic.</li>
        <li>Impersonating individuals or entities without consent.</li>
        <li>Mass surveillance or unauthorized tracking of individuals.</li>
        <li>Autonomous decision-making in high-risk areas (e.g., criminal justice, critical infrastructure) without robust human oversight.</li>
      </ul>

      <h2>4. Transparency and Disclosure</h2>
      <p>
        Customers are encouraged to inform end-users when they are interacting with AI systems powered by Thorin Tech, especially in scenarios where the AI makes decisions that significantly affect the individual.
      </p>

      <h2>5. Human Oversight</h2>
      <p>
        Thorin Tech recommends that customers maintain human review for critical decisions arising from our AI systems, particularly in sensitive domains such as hiring, finance, credit scoring, and healthcare.
      </p>

      <h2>6. Data Privacy and Consent</h2>
      <p>
        Customers must ensure they have the necessary legal basis and consents to process any personal data fed into Thorin Tech&apos;s AI models. We do not use customer data to train public-facing foundation models unless explicitly authorized.
      </p>

      <h2>7. Fairness and Bias Mitigation</h2>
      <p>
        Thorin Tech actively works to identify and mitigate biases in our AI models. Customers should monitor outputs to ensure they are equitable and free from discriminatory patterns.
      </p>

      <h2>8. Reporting Misuse</h2>
      <p>
        To report irresponsible, unethical, or harmful use of our AI, please contact us at: <strong>ai-abuse@thorintech.ai</strong>
      </p>

      <h2>9. Policy Updates</h2>
      <p>
        This policy is subject to periodic updates to reflect evolving technology and regulatory landscapes. The latest version will always be available on this page.
      </p>
    </LegalPageCard>
  );
}