// app/legal/privacy-policy/page.tsx
"use client";

import { LegalPageCard } from "@/components/ui/legal-page-card";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageCard
      title="Privacy Policy"
      icon={Shield}
      lastUpdated="June 20, 2026"
      badge="Protected by UAE & GDPR"
      summary="We value your privacy. This policy explains how we collect, use, and safeguard your personal data."
      headingColor="primary"
    >
      <p>
        Welcome to Thorin Tech (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). We are committed to protecting the privacy of our users and customers in accordance with the applicable laws and regulations of the United Arab Emirates and internationally.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following categories of information:</p>

      <h3>a. Personal Information</h3>
      <ul>
        <li>Full name.</li>
        <li>Email address.</li>
        <li>Phone number.</li>
        <li>Company name and job title.</li>
      </ul>

      <h3>b. Technical Information</h3>
      <ul>
        <li>IP address.</li>
        <li>Browser type and device information.</li>
        <li>Cookies and tracking technologies.</li>
        <li>Pages visited and time spent on our platform.</li>
      </ul>

      <h3>c. Information Provided Through Our Services</h3>
      <ul>
        <li>Documents and files uploaded by customers.</li>
        <li>Data processed by our AI systems.</li>
        <li>Account and billing information.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the collected information for the following purposes:</p>
      <ul>
        <li>Providing, maintaining, and improving our services.</li>
        <li>Managing user accounts and subscriptions.</li>
        <li>Delivering technical support and customer service.</li>
        <li>Analyzing performance and developing new products.</li>
        <li>Complying with legal and regulatory obligations.</li>
        <li>Communicating with customers about updates, new features, and promotions (where consent is obtained).</li>
      </ul>

      <h2>3. Data Sharing and Disclosure</h2>
      <p><strong>We do not sell your personal data.</strong></p>
      <p>We may share data with:</p>
      <ul>
        <li>Trusted cloud hosting and infrastructure providers.</li>
        <li>Authorized technical partners.</li>
        <li>Government or regulatory authorities, if required by law.</li>
        <li>Legal or financial advisors when necessary.</li>
      </ul>

      <h2>4. Information Security</h2>
      <p>
        Thorin Tech implements reasonable technical and organizational security measures to protect your data from unauthorized access, unlawful modification, disclosure, loss, or damage. However, no electronic transmission or storage system is 100% secure.
      </p>

      <h2>5. Data Retention</h2>
      <p>We retain your data only as long as necessary for:</p>
      <ul>
        <li>Providing the services you have requested.</li>
        <li>Complying with applicable laws and regulations.</li>
        <li>Resolving disputes and enforcing our agreements.</li>
      </ul>

      <h2>6. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access, review, and obtain a copy of your data.</li>
        <li>Correct inaccurate or incomplete data.</li>
        <li>Request deletion of your data (where legally permissible).</li>
        <li>Object to or restrict certain processing activities.</li>
        <li>Data portability.</li>
      </ul>

      <h2>7. Cookies</h2>
      <p>
        Our website uses cookies to enhance user experience, analyze site usage, and personalize content. For more details, please refer to our <a href="/legal/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>8. International Data Transfers</h2>
      <p>
        Your data may be processed and stored inside or outside the United Arab Emirates. When transferring data internationally, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) where applicable.
      </p>

      <h2>9. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The updated version will be effective immediately upon posting on our website. We encourage you to review this page periodically.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        <strong>Thorin Tech LLC</strong><br />
        United Arab Emirates<br />
        Email: <strong>legal@thorintech.ai</strong>
      </p>
    </LegalPageCard>
  );
}