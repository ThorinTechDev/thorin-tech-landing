// app/legal/service-level-agreement/page.tsx
"use client";

import { LegalPageCard } from "@/components/ui/legal-page-card";
import { Gauge } from "lucide-react";

export default function SLAPage() {
  return (
    <LegalPageCard
      title="Service Level Agreement (SLA)"
      icon={Gauge}
      lastUpdated="June 20, 2026"
      badge="Performance guaranteed"
      summary="Our commitment to service availability, performance, and support response times."
      headingColor="gold"
    >
      <h2>1. Introduction</h2>
      <p>
        This Service Level Agreement (&quot;SLA&quot;) outlines Thorin Tech&apos;s commitments to customers regarding service availability, performance, and support response times.
      </p>

      <h2>2. Covered Services</h2>
      <p>This SLA applies to the following Thorin Tech offerings:</p>
      <ul>
        <li>SaaS Platforms (Enterprise Suite).</li>
        <li>AI &amp; Analytics APIs.</li>
        <li>Cloud Infrastructure Services.</li>
        <li>Technical Support and Consulting.</li>
      </ul>

      <h2>3. Service Guarantees</h2>
      <ul>
        <li><strong>Uptime:</strong> 99.9% availability per calendar month, excluding scheduled maintenance windows (communicated 48 hours in advance).</li>
        <li><strong>Response Times:</strong>
          <ul>
            <li><strong>Critical (Service Down):</strong> Response within 1 business hour.</li>
            <li><strong>High (Severe Performance Degradation):</strong> Response within 4 business hours.</li>
            <li><strong>Medium (General Issues/Questions):</strong> Response within 24 business hours.</li>
          </ul>
        </li>
        <li><strong>Resolution Targets:</strong>
          <ul>
            <li><strong>Critical:</strong> Fix or workaround within 8 business hours.</li>
            <li><strong>High:</strong> Fix or workaround within 24 business hours.</li>
            <li><strong>Medium:</strong> Resolved within 5 business days.</li>
          </ul>
        </li>
      </ul>

      <h2>4. Reporting Incidents</h2>
      <p>
        Customers can report service issues via the dedicated support portal or email: <strong>support@thorintech.ai</strong>. Please include relevant logs and error messages to expedite resolution.
      </p>

      <h2>5. Service Credits (Remedies)</h2>
      <p>
        If Thorin Tech fails to meet the uptime guarantee, the customer is eligible for service credits based on the following table:
      </p>
      <ul>
        <li><strong>99% to 99.8% uptime:</strong> 10% credit on the monthly recurring fee.</li>
        <li><strong>Below 99% uptime:</strong> 25% credit on the monthly recurring fee.</li>
        <li>For severe or recurring outages, additional compensation may be negotiated in good faith.</li>
      </ul>

      <h2>6. Exclusions</h2>
      <p>This SLA does not apply to:</p>
      <ul>
        <li>Force majeure events (natural disasters, wars, strikes).</li>
        <li>Planned maintenance communicated in advance.</li>
        <li>Outages caused by customer-side issues (internet connectivity, misuse, unauthorized modifications).</li>
        <li>Third-party infrastructure failures beyond our reasonable control (e.g., cloud provider regional outages).</li>
      </ul>

      <h2>7. Reporting and Review</h2>
      <p>
        Thorin Tech publishes monthly performance reports and conducts periodic SLA reviews with enterprise customers to ensure continuous alignment with business requirements.
      </p>

      <h2>8. Amendments</h2>
      <p>
        We may update this SLA with 30 days&apos; written notice. Updates will not materially degrade the level of service provided to existing customers without mutual consent.
      </p>
    </LegalPageCard>
  );
}