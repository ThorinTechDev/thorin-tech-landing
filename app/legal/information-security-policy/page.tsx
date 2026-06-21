// app/legal/information-security-policy/page.tsx
"use client";

import { LegalPageCard } from "@/components/ui/legal-page-card";
import { Lock } from "lucide-react";

export default function InfoSecurityPage() {
  return (
    <LegalPageCard
      title="Information Security Policy"
      icon={Lock}
      lastUpdated="June 20, 2026"
      badge="Security first"
      summary="We are dedicated to protecting the confidentiality, integrity, and availability of all data and systems."
      headingColor="emerald"
    >
      <h2>1. Commitment to Information Security</h2>
      <p>
        Thorin Tech is committed to protecting the confidentiality, integrity, and availability (CIA triad) of all information assets, including customer data, intellectual property, and internal systems.
      </p>

      <h2>2. Scope</h2>
      <p>
        This policy applies to all employees, contractors, vendors, and third parties with access to Thorin Tech systems or data.
      </p>

      <h2>3. Core Security Principles</h2>
      <ul>
        <li><strong>Confidentiality:</strong> Ensuring only authorized individuals can access sensitive data.</li>
        <li><strong>Integrity:</strong> Protecting data from unauthorized modification or destruction.</li>
        <li><strong>Availability:</strong> Ensuring systems and data are accessible to authorized users when needed.</li>
      </ul>

      <h2>4. Organizational Measures</h2>
      <ul>
        <li>Strong password policies and mandatory multi-factor authentication (MFA).</li>
        <li>Regular security awareness training for all staff.</li>
        <li>Principle of least privilege access control.</li>
        <li>Periodic risk assessments and internal audits.</li>
      </ul>

      <h2>5. Technical Measures</h2>
      <ul>
        <li>End-to-end encryption for data in transit (TLS 1.2+) and at rest (AES-256).</li>
        <li>Firewalls, intrusion detection/prevention systems (IDS/IPS).</li>
        <li>Regular automated backups with disaster recovery testing.</li>
        <li>Continuous vulnerability scanning and patch management.</li>
        <li>Secure Software Development Lifecycle (SDLC) practices.</li>
      </ul>

      <h2>6. Incident Management</h2>
      <p>In the event of a security breach, Thorin Tech activates its incident response plan, which includes:</p>
      <ul>
        <li>Immediate containment of the incident.</li>
        <li>Impact assessment and forensic investigation.</li>
        <li>Notification to affected customers and regulatory authorities (as required by UAE laws and GDPR).</li>
        <li>Post-incident review and implementation of preventive measures.</li>
      </ul>

      <h2>7. Third-Party Risk Management</h2>
      <p>
        All vendors and partners are vetted for security posture and are contractually obligated to maintain at least the same level of security standards as Thorin Tech.
      </p>

      <h2>8. Compliance</h2>
      <p>
        We comply with UAE Information Security Regulations, applicable international standards (ISO 27001 framework), and industry-specific requirements for financial and healthcare data.
      </p>

      <h2>9. Reporting Vulnerabilities</h2>
      <p>
        If you discover a security vulnerability in our systems, please responsibly disclose it to: <strong>security@thorintech.ai</strong>. We do not tolerate malicious testing without prior authorization.
      </p>
    </LegalPageCard>
  );
}