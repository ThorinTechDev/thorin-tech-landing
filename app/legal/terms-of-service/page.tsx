// app/legal/terms-of-service/page.tsx
"use client";

import { LegalPageCard } from "@/components/ui/legal-page-card";
import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <LegalPageCard
      title="Terms of Service"
      icon={FileText}
      lastUpdated="June 20, 2026"
      badge="Binding agreement"
      summary="These terms govern your use of Thorin Tech's products and services."
      headingColor="slate"
    >
      <p>By accessing or using the Thorin Tech website, platforms, and services, you agree to be bound by the following terms and conditions.</p>

      <h2>1. Our Services</h2>
      <p>Thorin Tech provides technology solutions including but not limited to:</p>
      <ul>
        <li>Artificial intelligence and machine learning solutions.</li>
        <li>Enterprise software development.</li>
        <li>Document processing and data extraction (OCR).</li>
        <li>Business process automation and workflow management.</li>
        <li>Cloud infrastructure and technical consulting.</li>
      </ul>

      <h2>2. Eligibility</h2>
      <p>To use our services, you must:</p>
      <ul>
        <li>Be at least 18 years of age.</li>
        <li>Have the legal capacity to enter into binding contracts.</li>
        <li>Comply with all applicable laws, including those of the United Arab Emirates.</li>
      </ul>

      <h2>3. User Accounts</h2>
      <p>You are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of your login credentials.</li>
        <li>All activities that occur under your account.</li>
        <li>Providing accurate, complete, and up-to-date information.</li>
      </ul>

      <h2>4. Prohibited Use</h2>
      <p>You may not use our services for:</p>
      <ul>
        <li>Illegal or fraudulent activities.</li>
        <li>Attempting to hack, disrupt, or compromise our systems.</li>
        <li>Distributing malware, viruses, or harmful code.</li>
        <li>Infringing on intellectual property rights.</li>
        <li>Misusing AI services for unethical or harmful purposes (see our <a href="/legal/ai-usage-policy">AI Usage Policy</a>).</li>
      </ul>

      <h2>5. Intellectual Property Rights</h2>
      <p>
        All rights, title, and interest in and to the software, logos, designs, documentation, code, and content provided by Thorin Tech remain the exclusive property of Thorin Tech or its licensors. You may not copy, modify, or redistribute our proprietary materials without prior written consent.
      </p>

      <h2>6. Fees and Payments</h2>
      <p>
        Some of our services are offered on a paid subscription or usage-based model. Prices are subject to change upon reasonable notice. Payments are non-refundable except as expressly provided in the service agreement or required by applicable law.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Thorin Tech is not liable for indirect, incidental, consequential, or punitive damages, including loss of profits, data, or business interruption arising from the use of our services, unless caused by our gross negligence or willful misconduct.
      </p>

      <h2>8. Termination of Service</h2>
      <p>We reserve the right to suspend or terminate your account if:</p>
      <ul>
        <li>You breach these Terms of Service.</li>
        <li>You misuse our services.</li>
        <li>Required by law or regulatory authorities.</li>
      </ul>

      <h2>9. Force Majeure</h2>
      <p>
        We are not liable for any delay or failure in performance caused by events beyond our reasonable control, such as natural disasters, war, strikes, or government actions.
      </p>

      <h2>10. Governing Law and Dispute Resolution</h2>
      <p>
        These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any dispute arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts of the UAE.
      </p>
    </LegalPageCard>
  );
}