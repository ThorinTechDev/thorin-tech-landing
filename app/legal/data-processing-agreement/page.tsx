// app/legal/data-processing-agreement/page.tsx
"use client";

import { LegalPageCard } from "@/components/ui/legal-page-card";
import { Handshake } from "lucide-react";

export default function DPAPage() {
  return (
    <LegalPageCard
      title="Data Processing Agreement (DPA)"
      icon={Handshake}
      lastUpdated="June 20, 2026"
      badge="Data protection"
      summary="This agreement governs the processing of personal data by Thorin Tech on behalf of our customers."
      headingColor="emerald"
    >
      <p>
        This Data Processing Agreement (&quot;DPA&quot;) forms an integral part of the service agreement between Thorin Tech LLC (&quot;Processor&quot;) and the customer (&quot;Controller&quot;).
      </p>
      <p>
        This agreement governs the processing of personal data in compliance with UAE laws and relevant international standards, including the EU General Data Protection Regulation (GDPR) where applicable.
      </p>

      <h2>1. Definitions</h2>
      <ul>
        <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
        <li><strong>Controller:</strong> The entity that determines the purposes and means of processing.</li>
        <li><strong>Processor:</strong> Thorin Tech, which processes data on behalf of the Controller.</li>
        <li><strong>Data Subject:</strong> The individual to whom the personal data relates.</li>
      </ul>

      <h2>2. Scope of Processing</h2>
      <p>Thorin Tech processes data solely for the purpose of:</p>
      <ul>
        <li>Delivering agreed services.</li>
        <li>Operating SaaS platforms.</li>
        <li>Analytics and reporting.</li>
        <li>Automation and workflows.</li>
        <li>AI services.</li>
        <li>Technical support and maintenance.</li>
      </ul>

      <h2>3. Nature of Data</h2>
      <p>Data may include but is not limited to:</p>
      <ul>
        <li>Names, email addresses, phone numbers.</li>
        <li>Employee and customer data.</li>
        <li>Uploaded documents.</li>
        <li>Financial or operational data.</li>
        <li>Tax or accounting records.</li>
      </ul>

      <h2>4. Customer Instructions</h2>
      <p>Thorin Tech processes data only in accordance with documented lawful instructions from the Controller, unless otherwise required by law.</p>

      <h2>5. Confidentiality</h2>
      <p>Thorin Tech ensures:</p>
      <ul>
        <li>Strict confidentiality of all data.</li>
        <li>Restricted access to authorized personnel only.</li>
        <li>All employees and contractors are bound by confidentiality agreements.</li>
      </ul>

      <h2>6. Security Measures</h2>
      <p>Thorin Tech implements appropriate technical and organizational security measures, including:</p>
      <ul>
        <li><strong>Technical:</strong> Encryption in transit and at rest, access controls, multi-factor authentication, backups, audit logs.</li>
        <li><strong>Organizational:</strong> Information security policies, staff training, risk management, and incident response plans.</li>
      </ul>

      <h2>7. Sub-processors</h2>
      <p>Thorin Tech may engage third-party sub-processors (e.g., cloud providers, backup services, database providers) to deliver services, provided they are bound by data protection obligations equivalent to those in this DPA.</p>

      <h2>8. International Data Transfers</h2>
      <p>Data may be transferred outside the UAE where operationally necessary, provided appropriate safeguards are in place to protect the data.</p>

      <h2>9. Data Subject Rights</h2>
      <p>Thorin Tech assists the Controller in fulfilling data subject rights, including:</p>
      <ul>
        <li>Right of access.</li>
        <li>Right to rectification.</li>
        <li>Right to erasure.</li>
        <li>Right to restriction of processing.</li>
        <li>Right to data portability.</li>
        <li>Right to object.</li>
      </ul>

      <h2>10. Security Incident Notification</h2>
      <p>If a personal data breach is detected, Thorin Tech will:</p>
      <ul>
        <li>Take immediate containment actions.</li>
        <li>Assess the scope and impact.</li>
        <li>Notify the Controller without undue delay.</li>
        <li>Cooperate in implementing corrective measures.</li>
      </ul>

      <h2>11. Audits and Reviews</h2>
      <p>The Controller may request reasonable information to verify Thorin Tech&apos;s compliance, provided:</p>
      <ul>
        <li>Confidentiality is maintained.</li>
        <li>System security is not compromised.</li>
        <li>Reasonable costs are borne by the Controller.</li>
      </ul>

      <h2>12. Data Retention</h2>
      <p>Thorin Tech retains data only as long as necessary to provide services or comply with legal obligations.</p>

      <h2>13. Data Deletion and Return</h2>
      <p>Upon termination of the service relationship, and at the Controller&apos;s request, Thorin Tech will either return the data to the Controller or securely delete it, unless retention is required by applicable law.</p>

      <h2>14. Limitation of Liability</h2>
      <p>Thorin Tech&apos;s liability is limited to the extent set forth in the underlying service agreement, unless otherwise required by law.</p>

      <h2>15. Governing Law</h2>
      <p>This DPA is governed by UAE law, and UAE courts shall have exclusive jurisdiction over disputes.</p>

      <h2>16. Contact Information</h2>
      <p>
        Thorin Tech LLC<br />
        United Arab Emirates<br />
        Email: <strong>legal@thorintech.ai</strong>
      </p>
    </LegalPageCard>
  );
}