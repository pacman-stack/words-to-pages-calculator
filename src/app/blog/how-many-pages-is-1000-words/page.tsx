import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Many Pages Is 1,000 Words? — Complete Answer",
  description:
    "1,000 words is 2 pages single-spaced or 4 pages double-spaced (12pt Times New Roman, 1-inch margins). See the full breakdown for every common format.",
  alternates: {
    canonical: "https://wordtopages.com/blog/how-many-pages-is-1000-words",
  },
  openGraph: {
    title: "How Many Pages Is 1,000 Words?",
    description:
      "1,000 words is 2 pages single-spaced or 4 pages double-spaced. Full breakdown for every font and spacing combination.",
    url: "https://wordtopages.com/blog/how-many-pages-is-1000-words",
    type: "article",
  },
};

export default function HowManyPagesIs1000WordsPage() {
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
        <span>How Many Pages Is 1,000 Words?</span>
      </nav>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-3">
          How Many Pages Is 1,000 Words?
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          March 8, 2026 · 5 min read
        </p>

        {/* Quick answer box */}
        <div className="not-prose bg-primary/10 border border-primary/20 rounded-lg p-5 mb-8">
          <p className="font-semibold text-lg mb-1">Quick Answer</p>
          <p className="text-muted-foreground">
            1,000 words is approximately{" "}
            <strong>2 pages single-spaced</strong> or{" "}
            <strong>4 pages double-spaced</strong> — using 12pt Times New Roman,
            standard 1-inch margins, on an 8.5×11 letter-size page.
          </p>
        </div>

        <p>
          The "how many pages is X words" question has a moving target as an
          answer, because page count depends entirely on your formatting
          settings. Font family, font size, line spacing, and margins all affect
          how many words fit on a single page. Here's every scenario you'll
          realistically encounter.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1,000 Words to Pages — Reference Table
        </h2>

        <div className="not-prose overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-3 border border-border font-semibold">
                  Font
                </th>
                <th className="text-left p-3 border border-border font-semibold">
                  Size
                </th>
                <th className="text-center p-3 border border-border font-semibold">
                  Single-Spaced
                </th>
                <th className="text-center p-3 border border-border font-semibold">
                  Double-Spaced
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Times New Roman", "12pt", "~2 pages", "~4 pages"],
                ["Times New Roman", "11pt", "~1.8 pages", "~3.5 pages"],
                ["Arial", "12pt", "~2.2 pages", "~4.4 pages"],
                ["Arial", "11pt", "~2 pages", "~4 pages"],
                ["Calibri", "12pt", "~2.2 pages", "~4.4 pages"],
                ["Calibri", "11pt", "~2 pages", "~4 pages"],
                ["Georgia", "12pt", "~2.1 pages", "~4.2 pages"],
                ["Courier New", "12pt", "~2.8 pages", "~5.5 pages"],
              ].map(([font, size, single, dbl]) => (
                <tr key={`${font}-${size}`} className="border-b border-border">
                  <td className="p-3 border border-border">{font}</td>
                  <td className="p-3 border border-border">{size}</td>
                  <td className="p-3 border border-border text-center">
                    {single}
                  </td>
                  <td className="p-3 border border-border text-center">
                    {dbl}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">
            Assumes 1-inch margins on all sides, 8.5×11 letter-size page.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Why Font Choice Matters More Than You Think
        </h2>
        <p>
          Courier New is the outlier most people don't expect. It's a monospaced
          font — every character takes the same horizontal space — so a 1,000-word
          document in 12pt Courier New takes nearly <strong>3 pages</strong>{" "}
          instead of 2. That's a 50% difference from Times New Roman at the same
          size.
        </p>
        <p className="mt-3">
          The reason matters for practical use: some journalism programs and
          screenwriting conventions require Courier specifically for
          spacing/timing reasons. If your instructor specifies the font, don't
          swap it — you'll significantly change your page count.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Common Academic Requirements for 1,000-Word Papers
        </h2>
        <p>
          If you've been assigned a 1,000-word essay, here's what you're
          typically looking at across the major style guides:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
          <li>
            <strong>MLA format:</strong> 12pt Times New Roman, double-spaced,
            1-inch margins → <strong>~4 pages</strong>
          </li>
          <li>
            <strong>APA format:</strong> 12pt Times New Roman, double-spaced,
            1-inch margins → <strong>~4 pages</strong>
          </li>
          <li>
            <strong>Chicago/Turabian:</strong> 12pt Times New Roman,
            double-spaced, 1-inch margins → <strong>~4 pages</strong>
          </li>
          <li>
            <strong>Business/single-spaced:</strong> 11pt Calibri or Arial,
            single-spaced → <strong>~2 pages</strong>
          </li>
        </ul>
        <p className="mt-3">
          The three major academic formats (MLA, APA, Chicago) all default to
          the same settings, so for academic writing the answer is consistently
          4 pages double-spaced.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          How Margins Shift Your Page Count
        </h2>
        <p>
          Standard 1-inch margins are the default, but changing them moves your
          page count noticeably:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
          <li>
            <strong>0.75-inch margins:</strong> ~10% fewer pages (text area is
            wider, fits more per page)
          </li>
          <li>
            <strong>1-inch margins (standard):</strong> baseline
          </li>
          <li>
            <strong>1.25-inch margins:</strong> ~10–15% more pages
          </li>
          <li>
            <strong>1.5-inch margins:</strong> ~20–25% more pages
          </li>
        </ul>
        <p className="mt-3">
          Narrow margins are a common trick for hitting a page minimum without
          adding content. Most instructors will notice — and most style guides
          specify 1-inch. Don't risk it.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1,000 Words in Context: What Does It Actually Look Like?
        </h2>
        <p>
          1,000 words is a short essay or a substantial blog post. For
          reference:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
          <li>A typical news article: 500–800 words</li>
          <li>A short essay or response paper: 500–1,000 words</li>
          <li>A standard blog post: 1,000–1,500 words</li>
          <li>A college paper (intro level): 1,000–2,000 words</li>
          <li>A short story: 1,000–7,500 words</li>
        </ul>
        <p className="mt-3">
          Reading time for 1,000 words is roughly <strong>4–5 minutes</strong>{" "}
          at an average adult reading speed of ~200–250 words per minute.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Words Per Page at Different Word Count Milestones
        </h2>
        <p>
          To give you a broader sense of scale (all using 12pt Times New Roman,
          double-spaced, 1-inch margins):
        </p>
        <div className="not-prose overflow-x-auto mb-4 mt-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-3 border border-border font-semibold">
                  Word Count
                </th>
                <th className="text-center p-3 border border-border font-semibold">
                  Pages (Double-Spaced)
                </th>
                <th className="text-center p-3 border border-border font-semibold">
                  Pages (Single-Spaced)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["250 words", "~1 page", "~0.5 pages"],
                ["500 words", "~2 pages", "~1 page"],
                ["750 words", "~3 pages", "~1.5 pages"],
                ["1,000 words", "~4 pages", "~2 pages"],
                ["1,500 words", "~6 pages", "~3 pages"],
                ["2,000 words", "~8 pages", "~4 pages"],
                ["2,500 words", "~10 pages", "~5 pages"],
                ["5,000 words", "~20 pages", "~10 pages"],
              ].map(([wc, dbl, single]) => (
                <tr key={wc} className="border-b border-border">
                  <td className="p-3 border border-border font-medium">{wc}</td>
                  <td className="p-3 border border-border text-center">
                    {dbl}
                  </td>
                  <td className="p-3 border border-border text-center">
                    {single}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Get an Exact Answer for Your Settings
        </h2>
        <p>
          The tables above are solid estimates for the most common formatting
          combinations. But if your instructor specified an unusual font or
          margin — or if you're working in A4 format rather than US Letter —
          the numbers shift slightly.
        </p>
        <p className="mt-3">
          Our{" "}
          <Link href="/" className="text-primary hover:underline font-medium">
            free words to pages calculator
          </Link>{" "}
          lets you dial in exactly: choose your font, size, spacing, margins,
          and page size, and it'll give you a precise page count in seconds. No
          guessing.
        </p>

        {/* CTA */}
        <div className="not-prose bg-muted rounded-lg p-6 mt-8">
          <p className="font-semibold text-lg mb-2">
            Need the exact page count for your document?
          </p>
          <p className="text-muted-foreground mb-4">
            Plug in your word count and formatting settings — get an accurate
            estimate in seconds.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Use the Free Calculator →
          </Link>
        </div>
      </article>

      {/* Related posts */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
        <div className="space-y-3">
          <Link
            href="/blog/words-to-pages-essay"
            className="block p-4 border rounded-lg hover:bg-muted transition-colors"
          >
            <p className="font-medium">
              Words to Pages for Essays: Academic Formatting Guide
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              MLA, APA, and Chicago format page counts for every common essay
              length.
            </p>
          </Link>
          <Link
            href="/blog/double-spaced-pages"
            className="block p-4 border rounded-lg hover:bg-muted transition-colors"
          >
            <p className="font-medium">
              Double Spaced Pages: Word Count Guide for Students
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              How double spacing affects page count and why academic institutions
              require it.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
