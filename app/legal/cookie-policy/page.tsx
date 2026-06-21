// app/legal/cookie-policy/page.tsx
"use client";

import { LegalPageCard } from "@/components/ui/legal-page-card";
import { Cookie } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <LegalPageCard
      title="Cookie Policy"
      icon={Cookie}
      lastUpdated="June 20, 2026"
      badge="Your privacy matters"
      summary="Learn how we use cookies to enhance your experience on our website."
      headingColor="gold"
    >
      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit our website. They help us improve your browsing experience and analyze site performance.
      </p>

      <h2>Types of Cookies We Use</h2>

      <h3>1. Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the website to function properly. They enable basic features like page navigation, secure login, and access to protected areas. You cannot opt out of these as they are required for the service.
      </p>

      <h3>2. Performance and Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website by collecting anonymous information about page visits, traffic sources, and user behavior. This data helps us continuously improve the site&apos;s performance.
      </p>

      <h3>3. Functional and Personalization Cookies</h3>
      <p>
        These cookies allow the website to remember choices you make (such as language preferences or region) to provide enhanced, personalized features.
      </p>

      <h3>4. Marketing and Targeting Cookies</h3>
      <p>
        We may use these cookies (with your consent) to deliver relevant advertisements and content tailored to your interests, both on our site and across third-party platforms.
      </p>

      <h2>Managing Your Cookie Preferences</h2>
      <p>
        You can manage, block, or delete cookies at any time through your browser settings. However, please note that disabling certain cookies may affect the functionality of our website.
      </p>
      <p>Instructions for managing cookies in popular browsers:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>Your Consent</h2>
      <p>
        By continuing to use our website, you consent to our use of cookies in accordance with this policy, except where you have configured your browser to reject them.
      </p>
    </LegalPageCard>
  );
}