import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  content: string; // raw markdown
}

export interface BlogPostWithHtml extends BlogPost {
  html: string;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("._"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    author: data.author ?? "Word to Pages",
    content,
  };
}

export async function getPostBySlugWithHtml(
  slug: string
): Promise<BlogPostWithHtml> {
  const post = getPostBySlug(slug);
  const result = await remark().use(html).process(post.content);

  return { ...post, html: result.toString() };
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map(getPostBySlug)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
