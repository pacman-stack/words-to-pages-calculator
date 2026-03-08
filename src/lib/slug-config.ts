export interface SeoPage {
  slug: string;
  wordCount: number;
}

export interface ReversePage {
  slug: string;
  pageCount: number;
}

export interface SpacingVariantPage {
  slug: string;
  wordCount: number;
  spacingType: "single" | "double";
}

// Original word-to-pages pages
export const SEO_PAGES: SeoPage[] = [
  { slug: "how-many-pages-is-500-words", wordCount: 500 },
  { slug: "how-many-pages-is-750-words", wordCount: 750 },
  { slug: "how-many-pages-is-1000-words", wordCount: 1000 },
  { slug: "how-many-pages-is-1500-words", wordCount: 1500 },
  { slug: "how-many-pages-is-2000-words", wordCount: 2000 },
  { slug: "how-many-pages-is-2500-words", wordCount: 2500 },
  { slug: "how-many-pages-is-3000-words", wordCount: 3000 },
  { slug: "how-many-pages-is-4000-words", wordCount: 4000 },
  { slug: "how-many-pages-is-5000-words", wordCount: 5000 },
  { slug: "how-many-pages-is-7500-words", wordCount: 7500 },
  { slug: "how-many-pages-is-10000-words", wordCount: 10000 },
];

// Reverse pages-to-words pages
export const REVERSE_PAGES: ReversePage[] = [
  { slug: "how-many-words-is-1-pages", pageCount: 1 },
  { slug: "how-many-words-is-2-pages", pageCount: 2 },
  { slug: "how-many-words-is-3-pages", pageCount: 3 },
  { slug: "how-many-words-is-4-pages", pageCount: 4 },
  { slug: "how-many-words-is-5-pages", pageCount: 5 },
  { slug: "how-many-words-is-6-pages", pageCount: 6 },
  { slug: "how-many-words-is-8-pages", pageCount: 8 },
  { slug: "how-many-words-is-10-pages", pageCount: 10 },
  { slug: "how-many-words-is-15-pages", pageCount: 15 },
  { slug: "how-many-words-is-20-pages", pageCount: 20 },
];

// Spacing variant pages — all 11 word counts × 2 spacing types = 22 pages
export const SPACING_VARIANT_PAGES: SpacingVariantPage[] = [
  { slug: "how-many-pages-is-500-words-double-spaced", wordCount: 500, spacingType: "double" },
  { slug: "how-many-pages-is-500-words-single-spaced", wordCount: 500, spacingType: "single" },
  { slug: "how-many-pages-is-750-words-double-spaced", wordCount: 750, spacingType: "double" },
  { slug: "how-many-pages-is-750-words-single-spaced", wordCount: 750, spacingType: "single" },
  { slug: "how-many-pages-is-1000-words-double-spaced", wordCount: 1000, spacingType: "double" },
  { slug: "how-many-pages-is-1000-words-single-spaced", wordCount: 1000, spacingType: "single" },
  { slug: "how-many-pages-is-1500-words-double-spaced", wordCount: 1500, spacingType: "double" },
  { slug: "how-many-pages-is-1500-words-single-spaced", wordCount: 1500, spacingType: "single" },
  { slug: "how-many-pages-is-2000-words-double-spaced", wordCount: 2000, spacingType: "double" },
  { slug: "how-many-pages-is-2000-words-single-spaced", wordCount: 2000, spacingType: "single" },
  { slug: "how-many-pages-is-2500-words-double-spaced", wordCount: 2500, spacingType: "double" },
  { slug: "how-many-pages-is-2500-words-single-spaced", wordCount: 2500, spacingType: "single" },
  { slug: "how-many-pages-is-3000-words-double-spaced", wordCount: 3000, spacingType: "double" },
  { slug: "how-many-pages-is-3000-words-single-spaced", wordCount: 3000, spacingType: "single" },
  { slug: "how-many-pages-is-4000-words-double-spaced", wordCount: 4000, spacingType: "double" },
  { slug: "how-many-pages-is-4000-words-single-spaced", wordCount: 4000, spacingType: "single" },
  { slug: "how-many-pages-is-5000-words-double-spaced", wordCount: 5000, spacingType: "double" },
  { slug: "how-many-pages-is-5000-words-single-spaced", wordCount: 5000, spacingType: "single" },
  { slug: "how-many-pages-is-7500-words-double-spaced", wordCount: 7500, spacingType: "double" },
  { slug: "how-many-pages-is-7500-words-single-spaced", wordCount: 7500, spacingType: "single" },
  { slug: "how-many-pages-is-10000-words-double-spaced", wordCount: 10000, spacingType: "double" },
  { slug: "how-many-pages-is-10000-words-single-spaced", wordCount: 10000, spacingType: "single" },
];

// All slugs combined for generateStaticParams
export function getAllSlugs(): string[] {
  return [
    ...SEO_PAGES.map((p) => p.slug),
    ...REVERSE_PAGES.map((p) => p.slug),
    ...SPACING_VARIANT_PAGES.map((p) => p.slug),
  ];
}

export function getPageBySlug(slug: string): SeoPage | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

export function getReversePageBySlug(slug: string): ReversePage | undefined {
  return REVERSE_PAGES.find((p) => p.slug === slug);
}

export function getSpacingPageBySlug(slug: string): SpacingVariantPage | undefined {
  return SPACING_VARIANT_PAGES.find((p) => p.slug === slug);
}
