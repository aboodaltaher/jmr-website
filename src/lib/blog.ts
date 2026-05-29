import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
  image: string;
  description: string;
}

export interface Post extends PostMeta {
  content: string;
}

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "Untitled";
}

function stripTitle(content: string): string {
  return content.replace(/^#\s+.+$/m, "").trim();
}

function generateExcerpt(content: string, wordCount = 30): string {
  const body = stripTitle(content);
  const firstParagraph =
    body
      .split("\n")
      .map((line) => line.trim())
      .find(
        (line) =>
          line.length > 0 &&
          !line.startsWith("#") &&
          !line.startsWith("---") &&
          !line.startsWith("|"),
      ) ?? "";

  const plain = firstParagraph
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")
    .replace(/[*_`]/g, "");

  const words = plain.split(/\s+/);
  return words.length > wordCount
    ? words.slice(0, wordCount).join(" ") + "…"
    : plain;
}

function parsePost(slug: string): Post {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: extractTitle(content),
    excerpt: generateExcerpt(content),
    date: String(data.date ?? ""),
    author: String(data.author ?? "JMR Technical Services Team"),
    readingTime: String(data.readingTime ?? ""),
    image: String(data.image ?? ""),
    description: String(data.description ?? generateExcerpt(content)),
    content: stripTitle(content),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => parsePost(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return parsePost(slug);
}

export function formatDate(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
