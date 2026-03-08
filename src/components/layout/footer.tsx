import Link from "next/link";
import { SEO_PAGES, REVERSE_PAGES } from "@/lib/slug-config";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-3">Word to Pages</h3>
            <p className="text-sm text-muted-foreground">
              Free online tool to convert word count to page count. Supports
              multiple fonts, sizes, and spacing options.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Words to Pages</h3>
            <div className="grid grid-cols-2 gap-1.5">
              {SEO_PAGES.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {page.wordCount.toLocaleString()} Words
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Pages to Words</h3>
            <div className="grid grid-cols-2 gap-1.5">
              {REVERSE_PAGES.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {page.pageCount} {page.pageCount === 1 ? "Page" : "Pages"}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Word to Pages. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
