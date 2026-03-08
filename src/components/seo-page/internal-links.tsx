import Link from "next/link";
import { SEO_PAGES } from "@/lib/slug-config";

export function InternalLinks({ currentSlug }: { currentSlug: string }) {
  const otherPages = SEO_PAGES.filter((p) => p.slug !== currentSlug);

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Other Word Count Conversions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {otherPages.map((page) => (
          <Link
            key={page.slug}
            href={`/${page.slug}`}
            className="text-sm p-3 rounded-lg border hover:bg-accent transition-colors text-center"
          >
            {page.wordCount.toLocaleString()} Words to Pages
          </Link>
        ))}
      </div>
    </section>
  );
}
