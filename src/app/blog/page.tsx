import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Words to Pages Guides & Tips | Word to Pages",
  description:
    "Practical guides on word counts, page estimates, essay formatting, and academic writing standards. Free resources from wordtopages.com.",
  alternates: {
    canonical: "https://wordtopages.com/blog",
  },
};

const posts = [
  {
    slug: "how-many-pages-is-1000-words",
    title: "How Many Pages Is 1,000 Words?",
    description:
      "A complete breakdown of 1,000-word page counts across every common font, spacing, and margin setting — with a quick reference table.",
    date: "March 8, 2026",
    readTime: "5 min read",
  },
  {
    slug: "words-to-pages-essay",
    title: "Words to Pages for Essays: Academic Formatting Guide",
    description:
      "How many pages is your essay? Covers MLA, APA, Chicago formats, double vs. single spacing, and typical academic paper lengths.",
    date: "March 8, 2026",
    readTime: "6 min read",
  },
  {
    slug: "double-spaced-pages",
    title: "Double Spaced Pages: Word Count Guide for Students",
    description:
      "Everything you need to know about double spacing — how it affects page count, word count tables, and why teachers require it.",
    date: "March 8, 2026",
    readTime: "5 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-10">
        Guides on word counts, page estimates, and academic formatting.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8 last:border-0">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:text-primary transition-colors mb-1">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-muted-foreground mb-2">
              {post.date} · {post.readTime}
            </p>
            <p className="text-muted-foreground">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-3 text-sm font-medium text-primary hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-lg font-semibold mb-2">
          Need a quick word count estimate?
        </h2>
        <p className="text-muted-foreground mb-4">
          Use our free calculator to convert word counts to pages with your
          exact font, size, and spacing settings.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          Try the Calculator →
        </Link>
      </div>
    </main>
  );
}
