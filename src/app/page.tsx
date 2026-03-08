import { CalculatorForm } from "@/components/calculator/calculator-form";
import { ComparisonTable } from "@/components/calculator/comparison-table";
import { SnippetTable } from "@/components/seo/snippet-table";
import {
  WebApplicationSchema,
  HowToSchema,
  OrganizationSchema,
} from "@/components/seo/schemas";
import { AdSlot } from "@/components/ads/ad-slot";
import Link from "next/link";
import { SEO_PAGES } from "@/lib/slug-config";
import { REVERSE_PAGES, SPACING_VARIANT_PAGES } from "@/lib/slug-config";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero */}
      <section className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Word to Pages
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Convert your word count to an estimated number of pages. Adjust font,
          size, spacing, margins, and page size for accurate results.
        </p>
      </section>

      {/* Ad Banner */}
      <AdSlot type="banner" className="mb-8 mx-auto max-w-3xl" />

      {/* Calculator */}
      <section className="max-w-4xl mx-auto mb-12">
        <CalculatorForm />
      </section>

      {/* Featured Snippet Table — optimized for Google answer boxes */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-2">
          How Many Pages Is 1,000 Words?
        </h2>
        <p className="text-muted-foreground mb-4">
          1,000 words is approximately 2 pages single-spaced or 4 pages
          double-spaced using 12pt Times New Roman with standard 1-inch margins.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Words to Pages Conversion Table
        </h2>
        <SnippetTable />
      </section>

      {/* Ad In-Content */}
      <AdSlot type="in-content" className="mb-12 mx-auto max-w-3xl" />

      {/* Detailed Comparison Table */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Page Count by Font and Spacing
        </h2>
        <p className="text-muted-foreground mb-4">
          See how 1,000 words fills different numbers of pages depending on font
          choice and line spacing.
        </p>
        <ComparisonTable wordCount={1000} />
      </section>

      {/* SEO Content — How To section */}
      <section className="max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="text-2xl font-bold">How to Convert Words to Pages</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed">
          <li>
            Enter your word count into the calculator above, or paste your text
            to count words automatically.
          </li>
          <li>
            Select your font — choose from 14 system fonts like Times New Roman,
            Arial, and Calibri, or search 200+ Google Fonts.
          </li>
          <li>
            Set your font size between 6pt and 72pt. The most common academic
            sizes are 11pt and 12pt.
          </li>
          <li>
            Choose your line spacing — single (1.0), 1.15, 1.5, or double
            (2.0). Double spacing is standard for most academic papers.
          </li>
          <li>
            Get your result instantly — the calculator shows estimated pages,
            reading time, paragraph count, and sentence count.
          </li>
        </ol>

        <h2 className="text-2xl font-bold">Why Font Choice Matters</h2>
        <p className="text-muted-foreground leading-relaxed">
          Different fonts have different character widths. A monospaced font like
          Courier New takes up significantly more space than a proportional font
          like Arial or Calibri. This means the same 1,000 words could fill
          anywhere from 2 to 6 pages depending on your font choice and spacing
          settings. Use the calculator above to find the exact page count for
          your specific formatting.
        </p>

        <h2 className="text-2xl font-bold">
          Understanding Line Spacing and Margins
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Line spacing is the biggest factor in page count after word count
          itself. Double-spaced text uses twice as many pages as single-spaced.
          Margins also play a role — narrow margins (0.5&quot;) fit about 40%
          more text per page than wide margins (1.25&quot;). Most academic
          institutions require 12pt Times New Roman, double-spaced, with 1-inch
          margins — which gives approximately 250 words per page.
        </p>
      </section>

      {/* Internal Links — Words to Pages */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Words to Pages Conversions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {SEO_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="text-sm p-3 rounded-lg border hover:bg-accent transition-colors text-center"
            >
              {page.wordCount.toLocaleString()} Words
            </Link>
          ))}
        </div>
      </section>

      {/* Internal Links — Pages to Words */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Pages to Words Conversions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {REVERSE_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="text-sm p-3 rounded-lg border hover:bg-accent transition-colors text-center"
            >
              {page.pageCount} {page.pageCount === 1 ? "Page" : "Pages"}
            </Link>
          ))}
        </div>
      </section>

      {/* Internal Links — Spacing Variants */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Double &amp; Single-Spaced Conversions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SPACING_VARIANT_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="text-sm p-3 rounded-lg border hover:bg-accent transition-colors text-center"
            >
              {page.wordCount.toLocaleString()} Words{" "}
              {page.spacingType === "double" ? "Double" : "Single"}-Spaced
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Footer */}
      <AdSlot type="footer" className="mx-auto max-w-3xl" />

      {/* Structured Data */}
      <WebApplicationSchema />
      <HowToSchema />
      <OrganizationSchema />
    </div>
  );
}
