// app/legal/acceptable-use-policy/page.tsx
"use client";

import { LegalPageCard } from "@/components/ui/legal-page-card";
import { Ban } from "lucide-react";

export default function AUPPage() {
  return (
    <LegalPageCard
      title="Acceptable Use Policy (AUP)"
      icon={Ban}
      lastUpdated="June 20, 2026"
      badge="Fair use policy"
      summary="This policy governs the use of Thorin Tech's services and ensures a secure and lawful environment for all users."
      headingColor="slate"
    >
      <p>
        This Acceptable Use Policy (&quot;AUP&quot;) governs the use of Thorin Tech LLC&apos;s (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) products, services, and platforms within and outside the United Arab Emirates.
      </p>
      <p>By using our services, you agree to comply with this policy.</p>

      <h2>1. Purpose of this Policy</h2>
      <p>This policy aims to:</p>
      <ul>
        <li>Protect users and customers.</li>
        <li>Ensure the security of systems and services.</li>
        <li>Prevent unlawful or harmful use.</li>
        <li>Comply with applicable laws and regulations.</li>
      </ul>

      <h2>2. Permitted Use</h2>
      <p>Thorin Tech services may be used for:</p>
      <ul>
        <li>Business and enterprise management.</li>
        <li>Process automation.</li>
        <li>Document and data processing.</li>
        <li>AI applications and analytics.</li>
        <li>Cloud services.</li>
        <li>Enterprise solution development.</li>
        <li>Financial, tax, and regulatory compliance.</li>
      </ul>

      <h2>3. Prohibited Activities</h2>
      <p>Users are strictly prohibited from using the services for any of the following:</p>

      <h3>3.1 Illegal Activities</h3>
      <ul>
        <li>Violating UAE laws or any other applicable jurisdiction.</li>
        <li>Fraud or money laundering.</li>
        <li>Identity impersonation.</li>
        <li>Providing misleading or forged information.</li>
      </ul>

      <h3>3.2 Cybersecurity Threats</h3>
      <ul>
        <li>Attempting to breach systems or networks.</li>
        <li>Conducting Distributed Denial of Service (DDoS) attacks.</li>
        <li>Deploying viruses or malicious software.</li>
        <li>Unauthorized access to data or accounts.</li>
        <li>Exploiting security vulnerabilities.</li>
      </ul>

      <h3>3.3 AI Misuse</h3>
      <p>Thorin Tech AI services must not be used to:</p>
      <ul>
        <li>Create or distribute illegal content.</li>
        <li>Manipulate, mislead, or commit fraud.</li>
        <li>Generate fake identities or documents.</li>
        <li>Develop malicious software.</li>
        <li>Discriminate or incite hatred or violence.</li>
        <li>Violate individual privacy.</li>
      </ul>

      <h3>3.4 Intellectual Property Violations</h3>
      <ul>
        <li>Copying or redistributing software or code without permission.</li>
        <li>Infringing copyrights or trademarks.</li>
        <li>Using services to breach third-party rights.</li>
      </ul>

      <h3>3.5 Resource Abuse</h3>
      <ul>
        <li>Uploading unreasonable data volumes to impact service performance.</li>
        <li>Attempting to disable systems.</li>
        <li>Use that negatively affects other customers.</li>
      </ul>

      <h2>4. Customer Responsibilities</h2>
      <p>The customer agrees to:</p>
      <ul>
        <li>Use services lawfully.</li>
        <li>Maintain account credentials confidentially.</li>
        <li>Ensure they have the necessary rights to uploaded data.</li>
        <li>Obtain required consents from data subjects.</li>
      </ul>

      <h2>5. Monitoring and Enforcement</h2>
      <p>Thorin Tech reserves the right to:</p>
      <ul>
        <li>Investigate potential violations.</li>
        <li>Suspend or restrict services.</li>
        <li>Delete non-compliant content.</li>
        <li>Cooperate with regulatory or judicial authorities.</li>
        <li>Terminate accounts for severe violations.</li>
      </ul>

      <h2>6. Reporting Violations</h2>
      <p>Report any misuse or suspicious activity to: <strong>abuse@thorintech.ai</strong></p>

      <h2>7. Amendments</h2>
      <p>We may update this AUP at any time. The updated version becomes effective immediately upon posting on our website.</p>

      <h2>8. Governing Law</h2>
      <p>This policy is governed by the laws of the United Arab Emirates. UAE courts shall have exclusive jurisdiction over any disputes arising from this policy.</p>
    </LegalPageCard>
  );
}