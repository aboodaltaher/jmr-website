import { Inter, Saira_Condensed, Cairo } from "next/font/google";

// Shared by both root layouts (English and Arabic) so each font is defined once.

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // Body font. Not preloaded: the preload (48 KB) competes with the hero image.
  // It still loads from CSS right away and swaps in (font-display: swap).
  preload: false,
});

export const saira = Saira_Condensed({
  variable: "--font-saira",
  weight: ["600", "700"],
  subsets: ["latin"],
});

// Only the Arabic root layout uses this font. Not preloaded; it loads via CSS
// when the Arabic chrome renders.
export const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
  preload: false,
});
