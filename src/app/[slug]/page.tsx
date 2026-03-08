import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getPageBySlug,
  getReversePageBySlug,
  getSpacingPageBySlug,
} from "@/lib/slug-config";
import { getSeoDataBySlug } from "@/lib/seo-data";
import { getExtendedSeoData } from "@/lib/seo-data-extended";
import { WordCountHero } from "@/components/seo-page/word-count-hero";
import { ComparisonTable } from "@/components/calculator/comparison-table";
import { CalculatorForm } from "@/components/calculator/calculator-form";
import { ContentSection } from "@/components/seo-page/content-section";
import {
  FaqSection,
  FaqSchema,
  BreadcrumbSchema,
} from "@/components/seo-page/faq-section";
import { InternalLinks } from "@/components/seo-page/internal-links";
import { AdSlot } from "@/components/ads/ad-slot";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function getPageData(slug: string) {
  // Try original word-to-pages
  const seoPage = getPageBySlug(slug);
  const seoData = getSeoDataBySlug(slug);
  if (seoPage && seoData) {
    return {
      type: "words-to-pages" as const,
      wordCount: seoPage.wordCount,
      seo: seoData,
    };
  }

  // Try extended pages (reverse + spacing variants)
  const extData = getExtendedSeoData(slug);
  if (extData) {
    const reversePage = getReversePageBySlug(slug);
    const spacingPage = getSpacingPageBySlug(slug);

    if (reversePage) {
      // Reverse page: default word count for the calculator = pageCount * 250 (double-spaced estimate)
      return {
        type: "pages-to-words" as const,
        wordCount: reversePage.pageCount * 250,
        seo: extData,
      };
    }

    if (spacingPage) {
      return {
        type: "spacing-variant" as const,
        wordCount: spacingPage.wordCount,
        seo: extData,
      };
    }
  }

  return null;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getPageData(slug);
  if (!data) return {};

  return {
    title: data.seo.metaTitle,
    description: data.seo.metaDescription,
    alternates: {
      canonical: `https://wordtopages.com/${slug}`,
    },
    openGraph: {
      title: data.seo.h1,
      description: data.seo.metaDescription,
      type: "article",
      url: `https://wordtopages.com/${slug}`,
    },
  };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getPageData(slug);

  if (!data) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <WordCountHero h1={data.seo.h1} quickAnswer={data.seo.quickAnswer} />

      <AdSlot type="in-content" className="mb-8" />

      {/* Comparison Table */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          Page Count by Font and Spacing for{" "}
          {data.wordCount.toLocaleString()} Words
        </h2>
        <ComparisonTable wordCount={data.wordCount} />
      </section>

      {/* Interactive Calculator */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          Calculate Your Exact Page Count
        </h2>
        <CalculatorForm defaultWordCount={data.wordCount} />
      </section>

      <AdSlot type="in-content" className="mb-10" />

      {/* Content Sections */}
      <div className="mb-10">
        <ContentSection sections={data.seo.contentSections} />
      </div>

      {/* FAQ */}
      <div className="mb-10">
        <FaqSection faqs={data.seo.faqs} />
      </div>

      {/* Internal Links */}
      <div className="mb-10">
        <InternalLinks currentSlug={slug} />
      </div>

      <AdSlot type="footer" />

      {/* Structured Data */}
      <FaqSchema faqs={data.seo.faqs} />
      <BreadcrumbSchema slug={slug} h1={data.seo.h1} />
    </article>
  );
}
