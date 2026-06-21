// app/legal/gdpr/page.tsx
"use client";

import { LegalPageCard } from "@/components/ui/legal-page-card";
import { ShieldCheck } from "lucide-react";

export default function GDPRPage() {
  return (
    <LegalPageCard
      title="GDPR Compliance"
      icon={ShieldCheck}
      lastUpdated="June 20, 2026"
      badge="EU data protection"
      summary="We are committed to protecting the privacy and rights of individuals in the European Economic Area."
      headingColor="navy"
    >
      <p>
        Thorin Tech is committed to complying with the General Data Protection Regulation (GDPR) (EU) 2016/679 when processing the personal data of individuals located within the European Economic Area (EEA). This page outlines our commitment and how we fulfill our obligations.
      </p>

      <h2>Core Data Protection Principles</h2>
      <p>We adhere to the following GDPR principles:</p>
      <ul>
        <li><strong>Lawfulness, Fairness, and Transparency:</strong> We process personal data lawfully, fairly, and in a transparent manner.</li>
        <li><strong>Purpose Limitation:</strong> Data is collected for specified, explicit, and legitimate purposes, and not further processed in a way incompatible with those purposes.</li>
        <li><strong>Data Minimization:</strong> We collect only the data that is strictly necessary for the intended purpose.</li>
        <li><strong>Accuracy:</strong> We take reasonable steps to ensure personal data is accurate and kept up to date.</li>
        <li><strong>Storage Limitation:</strong> Data is retained only as long as necessary to fulfill the purposes for which it was collected.</li>
        <li><strong>Integrity and Confidentiality (Security):</strong> We implement robust technical and organizational security measures to protect data against unauthorized or unlawful processing and against accidental loss, destruction, or damage.</li>
        <li><strong>Accountability:</strong> We are responsible for, and can demonstrate, compliance with these principles.</li>
      </ul>

      <h2>Data Subject Rights</h2>
      <p>Under the GDPR, individuals have the following rights regarding their personal data:</p>
      <ul>
        <li><strong>Right of Access (Article 15):</strong> Request a copy of the data we hold about you.</li>
        <li><strong>Right to Rectification (Article 16):</strong> Correct inaccurate or incomplete data.</li>
        <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;) (Article 17):</strong> Request deletion of your data where it is no longer necessary or legally required.</li>
        <li><strong>Right to Restriction of Processing (Article 18):</strong> Restrict the processing of your data under specific circumstances.</li>
        <li><strong>Right to Data Portability (Article 20):</strong> Receive your data in a structured, machine-readable format and transmit it to another controller.</li>
        <li><strong>Right to Object (Article 21):</strong> Object to processing based on legitimate interests or direct marketing.</li>
        <li><strong>Right to Withdraw Consent (Article 7):</strong> Withdraw your consent at any time where we rely on consent for processing.</li>
      </ul>
      <p>To exercise any of these rights, please contact us at <strong>legal@thorintech.ai</strong>.</p>

      <h2>Legal Bases for Processing</h2>
      <p>We ensure that all processing of personal data is based on a valid legal ground, including:</p>
      <ul>
        <li><strong>Consent:</strong> Where you have given clear, explicit consent.</li>
        <li><strong>Contract:</strong> Where processing is necessary for the performance of a contract with you.</li>
        <li><strong>Legal Obligation:</strong> Where processing is necessary to comply with a legal obligation.</li>
        <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests, provided these do not override your fundamental rights and freedoms.</li>
      </ul>

      <h2>Data Protection Impact Assessments (DPIAs)</h2>
      <p>
        When introducing new technologies or processing operations that pose a high risk to data subjects, Thorin Tech conducts DPIAs to assess risks and implement mitigation measures.
      </p>

      <h2>Data Breach Management</h2>
      <p>
        In the event of a personal data breach, we have robust procedures to detect, investigate, and contain the breach. We will notify the relevant supervisory authority within <strong>72 hours</strong> of becoming aware of the breach where feasible, and inform affected data subjects where high risk is involved.
      </p>

      <h2>International Data Transfers</h2>
      <p>
        Data may be transferred outside the EEA to Thorin Tech&apos;s operations or trusted third parties. In such cases, we ensure appropriate safeguards such as Standard Contractual Clauses (SCCs) adopted by the European Commission are in place.
      </p>
    </LegalPageCard>
  );
}