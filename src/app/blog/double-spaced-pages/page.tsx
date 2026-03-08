import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Double Spaced Pages: Word Count Guide for Students",
  description:
    "How does double spacing affect page count? Complete word count tables for 1–20 pages double spaced, plus why professors require it.",
  alternates: {
    canonical: "https://wordtopages.com/blog/double-spaced-pages",
  },
  openGraph: {
    title: "Double Spaced Pages: Word Count Guide for Students",
    description:
      "Exact word counts for double spaced pages. 1 page, 2 pages, 5 pages — see how many words fit per page and why double spacing is required.",
    url: "https://wordtopages.com/blog/double-spaced-pages",
    type: "article",
  },
};

export default function DoubleSpacedPagesPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" → "}
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        {" → "}
        <span>Double Spaced Pages</span>
      </nav>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-3">
          Double Spaced Pages: Word Count Guide for Students
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          March 8, 2026 · 5 min read
        </p>

        {/* Quick answer box */}
        <div className="not-prose bg-primary/10 border border-primary/20 rounded-lg p-5 mb-8">
          <p className="font-semibold text-lg mb-2">Quick Reference</p>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li><strong>1 page double spaced</strong> → ~250 words</li>
            <li><strong>2 pages double spaced</strong> → ~500 words</li>
            <li><strong>5 pages double spaced</strong> → ~1,250 words</li>
            <li><strong>10 pages double spaced</strong> → ~2,500 words</li>
          </ul>
          <p className="text-xs text-muted-foreground mt-3">
            Based on 12pt Times New Roman, 1-inch margins, standard letter paper (8.5&quot; × 11&quot;).
          </p>
        </div>

        <p>
          Your professor said &quot;5 pages, double spaced.&quot; You want to know exactly how many words
          that is before you start writing — not after you&apos;ve already written 3,000 words and
          realize you overshot. This guide gives you the exact numbers.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Word Count Table for Double Spaced Pages
        </h2>

        <p>
          These counts use the standard academic format: 12pt Times New Roman, 1-inch margins,
          double spacing. This is what MLA, APA (7th ed.), and Chicago default to.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border px-4 py-2 text-left">Pages (Double Spaced)</th>
                <th className="border px-4 py-2 text-left">Approximate Word Count</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["½ page", "~125 words"],
                ["1 page", "~250 words"],
                ["1.5 pages", "~375 words"],
                ["2 pages", "~500 words"],
                ["3 pages", "~750 words"],
                ["4 pages", "~1,000 words"],
                ["5 pages", "~1,250 words"],
                ["6 pages", "~1,500 words"],
                ["7 pages", "~1,750 words"],
                ["8 pages", "~2,000 words"],
                ["10 pages", "~2,500 words"],
                ["12 pages", "~3,000 words"],
                ["15 pages", "~3,750 words"],
                ["20 pages", "~5,000 words"],
              ].map(([pages, words]) => (
                <tr key={pages} className="even:bg-muted/30">
                  <td className="border px-4 py-2 font-medium">{pages}</td>
                  <td className="border px-4 py-2">{words}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          The rule of thumb: <strong>250 words per double-spaced page</strong>. It&apos;s not exact
          — font choice can shift this by ±50 words — but it&apos;s accurate enough for planning.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          What &quot;Double Spaced&quot; Actually Means
        </h2>

        <p>
          Double spacing sets the gap between lines to 2.0 — meaning there&apos;s one full blank
          line between each line of text. A standard single-spaced document fits about 500 words
          per page. Double spacing cuts that to ~250. That&apos;s it. No mystery.
        </p>

        <p>
          In Microsoft Word: Home → Line and Paragraph Spacing → 2.0.<br />
          In Google Docs: Format → Line &amp; paragraph spacing → Double.
        </p>

        <p>
          One important detail: double spacing also affects the space after paragraph breaks.
          If you&apos;re in Word and see extra space between paragraphs on top of the double
          spacing, check Format → Paragraph → Spacing After. It should be 0pt for standard
          MLA/APA. Some Word presets add 8–10pt spacing after paragraphs, which artificially
          inflates page count.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Why Professors Require Double Spacing
        </h2>

        <p>
          Double spacing exists for one practical reason: it gives instructors room to write
          feedback between your lines. A tightly packed single-spaced essay leaves no space
          for margin notes, corrections, or comments inline.
        </p>

        <p>
          It&apos;s not a trap designed to make your paper look shorter. It&apos;s a workflow
          requirement for the person grading it. Which also means: if you submit single-spaced
          to save paper or because you forgot, you&apos;re making the grader&apos;s job harder.
          That&apos;s not a great way to start.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          How Font and Size Change the Count
        </h2>

        <p>
          The 250 words/page estimate is for 12pt Times New Roman. Different fonts and sizes
          will shift it:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border px-4 py-2 text-left">Font / Size</th>
                <th className="border px-4 py-2 text-left">Words per Double-Spaced Page</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Times New Roman 12pt", "~250 words"],
                ["Arial 12pt", "~240 words"],
                ["Calibri 12pt", "~260 words"],
                ["Courier New 12pt", "~220 words"],
                ["Georgia 12pt", "~245 words"],
                ["Times New Roman 11pt", "~275 words"],
                ["Times New Roman 10pt", "~300 words"],
              ].map(([font, count]) => (
                <tr key={font} className="even:bg-muted/30">
                  <td className="border px-4 py-2 font-medium">{font}</td>
                  <td className="border px-4 py-2">{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Courier New is the outlier — it&apos;s a monospace font where every character
          (including &quot;i&quot; and &quot;l&quot;) occupies the same width. That makes
          it run wider than proportional fonts, reducing words per line and therefore words
          per page. This is why old-school writing guides measured manuscripts in Courier
          New: it gave a consistent character count per page.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Common Assignment Lengths in Double-Spaced Words
        </h2>

        <p>
          Here&apos;s how typical assignment lengths translate:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border px-4 py-2 text-left">Assignment Type</th>
                <th className="border px-4 py-2 text-left">Typical Pages</th>
                <th className="border px-4 py-2 text-left">Approx. Word Count</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Short response / reflection", "1–2 pages", "250–500 words"],
                ["High school essay", "2–5 pages", "500–1,250 words"],
                ["Undergraduate paper", "5–10 pages", "1,250–2,500 words"],
                ["Research paper", "10–20 pages", "2,500–5,000 words"],
                ["Senior thesis (undergrad)", "40–60 pages", "10,000–15,000 words"],
                ["Master&apos;s thesis", "80–100 pages", "20,000–25,000 words"],
              ].map(([type, pages, words]) => (
                <tr key={type} className="even:bg-muted/30">
                  <td className="border px-4 py-2 font-medium">{type}</td>
                  <td className="border px-4 py-2">{pages}</td>
                  <td className="border px-4 py-2">{words}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Does the Title Page Count?
        </h2>

        <p>
          In MLA format: the title appears on the first page of content, not a separate page.
          No separate title page means no extra page padding.
        </p>

        <p>
          In APA (7th ed.): a title page is required and is page 1. The body starts on page 2.
          So a &quot;5-page APA paper&quot; technically has 4 pages of actual content (the
          title page plus 4 content pages = 5 pages total). This is a common source of
          confusion — always clarify with your instructor whether they mean 5 pages of
          content or 5 total pages including the title page.
        </p>

        <p>
          References/Works Cited pages don&apos;t count toward the body page total in either
          format. A 5-page essay with a 1-page References section is still a 5-page essay.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Get the Exact Count for Your Document
        </h2>

        <p>
          The tables above give solid estimates, but your actual page count depends on your
          specific font, size, margins, and spacing settings. Use the{" "}
          <Link href="/" className="text-primary hover:underline font-medium">
            words to pages calculator
          </Link>{" "}
          to get a precise estimate — enter your word count, then adjust font, size, and
          spacing to match your assignment requirements exactly.
        </p>

        <div className="not-prose mt-10 pt-6 border-t text-sm text-muted-foreground">
          <p className="font-medium mb-2">Related guides:</p>
          <ul className="space-y-1">
            <li>
              <Link href="/blog/how-many-pages-is-1000-words" className="hover:underline text-primary">
                How Many Pages Is 1,000 Words?
              </Link>
            </li>
            <li>
              <Link href="/blog/words-to-pages-essay" className="hover:underline text-primary">
                Words to Pages for Essays: MLA, APA &amp; Chicago Guide
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
