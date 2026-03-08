import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostSlugs, getPostBySlugWithHtml, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post;
  try {
    post = await getPostBySlugWithHtml(params.slug);
  } catch {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block"
      >
        &larr; Back to Blog
      </Link>

      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span>&middot;</span>
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </header>

      <div
        className="prose prose-neutral dark:prose-invert max-w-none
          prose-headings:font-semibold
          prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
          prose-p:text-muted-foreground prose-p:leading-7
          prose-li:text-muted-foreground
          prose-a:underline prose-a:text-foreground hover:prose-a:text-primary
          prose-table:text-sm
          prose-th:text-left prose-th:font-semibold prose-th:p-2 prose-th:border-b
          prose-td:p-2 prose-td:border-b"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
