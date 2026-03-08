import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Word to Pages — understand the rules and guidelines for using our free online calculator tool.",
};

export default function TermsOfServicePage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Last updated: March 8, 2026
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-muted-foreground">
            By accessing and using Word to Pages (&quot;wordtopages.com&quot;,
            &quot;the Site&quot;), you agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use the
            Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. Description of Service
          </h2>
          <p className="text-muted-foreground">
            Word to Pages provides a free online calculator tool that estimates
            the number of pages based on word count, font, font size, line
            spacing, margins, and page size. All calculations are performed
            client-side in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Accuracy Disclaimer
          </h2>
          <p className="text-muted-foreground">
            The page count estimates provided by this tool are approximations
            based on standard typographic conventions. Actual page counts may
            vary depending on factors including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
            <li>Specific word lengths and character distribution</li>
            <li>Paragraph and heading formatting</li>
            <li>Images, tables, or other non-text elements</li>
            <li>
              Software-specific rendering differences (e.g., Microsoft Word,
              Google Docs)
            </li>
            <li>Printer and display variations</li>
          </ul>
          <p className="text-muted-foreground mt-2">
            We make no guarantees regarding the exact accuracy of the results.
            The tool is intended for estimation purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-muted-foreground">
            All content on this Site, including but not limited to text,
            graphics, logos, design, and code, is the property of Word to Pages
            and is protected by applicable intellectual property laws. You may
            not reproduce, distribute, or create derivative works from the
            content without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Permitted Use</h2>
          <p className="text-muted-foreground">You agree to use the Site only for lawful purposes. You may not:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
            <li>Use the Site in any way that violates applicable laws or regulations</li>
            <li>Attempt to interfere with or disrupt the Site&apos;s functionality</li>
            <li>Use automated systems (bots, scrapers) to access the Site without permission</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Advertising</h2>
          <p className="text-muted-foreground">
            The Site may display advertisements provided by third-party
            advertising networks, including Google AdSense. These ads may use
            cookies and tracking technologies. Your interaction with
            advertisements is governed by the respective advertiser&apos;s terms and
            policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            7. Limitation of Liability
          </h2>
          <p className="text-muted-foreground">
            Word to Pages is provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, either express or
            implied. To the fullest extent permitted by law, we shall not be
            liable for any direct, indirect, incidental, consequential, or
            punitive damages arising from your use of the Site or reliance on
            its results.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            8. Third-Party Links
          </h2>
          <p className="text-muted-foreground">
            The Site may contain links to third-party websites. We are not
            responsible for the content, privacy practices, or terms of any
            third-party sites. Visiting external links is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            9. Modifications to Terms
          </h2>
          <p className="text-muted-foreground">
            We reserve the right to modify these Terms of Service at any time.
            Changes will be effective immediately upon posting to this page.
            Your continued use of the Site after modifications constitutes
            acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms shall be governed by and construed in accordance with
            applicable laws, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions about these Terms of Service, please contact
            us at:{" "}
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
