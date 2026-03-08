import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and insights about word counts, page formatting, essay writing, and academic formatting from Word to Pages.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-8">
        Guides, tips, and insights about word counts, page formatting, and
        writing.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-lg border bg-card p-6 transition-colors hover:bg-muted/50"
          >
            <time className="text-xs text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h2 className="mt-2 text-lg font-semibold group-hover:underline">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
