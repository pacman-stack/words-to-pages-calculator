import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Word to Pages — learn how we handle your data, cookies, and third-party services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Last updated: March 8, 2026
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to Word to Pages (&quot;wordtopages.com&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;). We respect your privacy and are
            committed to protecting any information collected while you use our
            website. This Privacy Policy explains what data we collect, how we
            use it, and your rights regarding that data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p className="text-muted-foreground">
            Word to Pages is a free online calculator tool. All calculations are
            performed entirely in your browser — we do not collect, store, or
            transmit any text you enter or any calculation results.
          </p>
          <p className="text-muted-foreground mt-2">
            We may automatically collect limited, non-personal information
            through standard web technologies, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URL</li>
            <li>Pages visited and time spent on each page</li>
            <li>Approximate geographic location (country/region level)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Cookies &amp; Tracking Technologies
          </h2>
          <p className="text-muted-foreground">
            We may use cookies and similar technologies for the following
            purposes:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
            <li>
              <strong>Analytics:</strong> We may use Google Analytics or similar
              services to understand how visitors interact with our site. These
              tools use cookies to collect anonymous usage data.
            </li>
            <li>
              <strong>Advertising:</strong> We may display ads through Google
              AdSense or other advertising networks. These services may use
              cookies to serve personalized or non-personalized ads based on your
              browsing activity.
            </li>
            <li>
              <strong>Preferences:</strong> We use local storage to remember
              your theme preference (light/dark mode).
            </li>
          </ul>
          <p className="text-muted-foreground mt-2">
            You can control or disable cookies through your browser settings.
            Please note that disabling cookies may affect certain features of
            the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Third-Party Services
          </h2>
          <p className="text-muted-foreground">
            Our site may use the following third-party services, each governed by
            their own privacy policies:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
            <li>
              <strong>Google Analytics</strong> — web analytics service by
              Google LLC
            </li>
            <li>
              <strong>Google AdSense</strong> — advertising service by Google LLC
            </li>
            <li>
              <strong>Google Fonts</strong> — font delivery service by Google LLC
            </li>
          </ul>
          <p className="text-muted-foreground mt-2">
            We encourage you to review the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Google Privacy Policy
            </a>{" "}
            for more information on how Google handles your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
          <p className="text-muted-foreground">
            We do not store any personal data on our servers. Analytics data
            collected by third-party services is retained according to their
            respective data retention policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            6. Children&apos;s Privacy
          </h2>
          <p className="text-muted-foreground">
            Our site is not directed at children under the age of 13. We do not
            knowingly collect personal information from children. If you believe
            a child has provided us with personal data, please contact us so we
            can take appropriate action.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            7. Changes to This Policy
          </h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. Your
            continued use of the site after changes are posted constitutes
            acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions about this Privacy Policy, please contact us
            at:{" "}
            <a
              href="mailto:contact@wordtopages.com"
              className="underline hover:text-foreground"
            >
              contact@wordtopages.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
