import type { LineSpacing, PageSize, MarginSize } from "@/types/calculator";
import { PAGE_DIMENSIONS, MARGIN_VALUES, interpolateWpp } from "./constants";

export interface GoogleFont {
  name: string;
  category: "serif" | "sans-serif" | "monospace" | "display" | "handwriting";
}

// Category-based WPP values (Letter, 1" margins) — used to estimate page count
// for Google Fonts based on their category, since we can't calibrate each one.
const CATEGORY_WPP: Record<
  string,
  Record<number, Record<string, number>>
> = {
  serif: {
    10: { "1": 560, "1.15": 490, "1.5": 375, "2": 280 },
    11: { "1": 510, "1.15": 445, "1.5": 340, "2": 255 },
    12: { "1": 470, "1.15": 410, "1.5": 315, "2": 235 },
    14: { "1": 370, "1.15": 320, "1.5": 245, "2": 185 },
  },
  "sans-serif": {
    10: { "1": 520, "1.15": 455, "1.5": 350, "2": 260 },
    11: { "1": 470, "1.15": 410, "1.5": 315, "2": 235 },
    12: { "1": 430, "1.15": 375, "1.5": 285, "2": 215 },
    14: { "1": 335, "1.15": 290, "1.5": 225, "2": 170 },
  },
  monospace: {
    10: { "1": 420, "1.15": 365, "1.5": 280, "2": 210 },
    11: { "1": 380, "1.15": 330, "1.5": 255, "2": 190 },
    12: { "1": 350, "1.15": 300, "1.5": 230, "2": 175 },
    14: { "1": 275, "1.15": 240, "1.5": 185, "2": 140 },
  },
  display: {
    10: { "1": 460, "1.15": 400, "1.5": 305, "2": 230 },
    11: { "1": 410, "1.15": 355, "1.5": 275, "2": 205 },
    12: { "1": 375, "1.15": 325, "1.5": 250, "2": 190 },
    14: { "1": 295, "1.15": 255, "1.5": 195, "2": 150 },
  },
  handwriting: {
    10: { "1": 440, "1.15": 385, "1.5": 295, "2": 220 },
    11: { "1": 400, "1.15": 345, "1.5": 265, "2": 200 },
    12: { "1": 360, "1.15": 315, "1.5": 240, "2": 180 },
    14: { "1": 285, "1.15": 245, "1.5": 190, "2": 145 },
  },
};

export function calculateGoogleFontWpp(
  category: string,
  fontSize: number,
  lineSpacing: LineSpacing,
  pageSize: PageSize,
  marginSize: MarginSize
): number {
  const cat = CATEGORY_WPP[category] || CATEGORY_WPP["sans-serif"];
  const spacingKey = String(lineSpacing);
  const baseWpp = interpolateWpp(cat, fontSize, spacingKey);

  const pageDim = PAGE_DIMENSIONS[pageSize];
  const margin = MARGIN_VALUES[marginSize];
  const normalMargin = MARGIN_VALUES["normal"];
  const usableArea = (pageDim.width - 2 * margin) * (pageDim.height - 2 * margin);
  const baseArea =
    (PAGE_DIMENSIONS["letter"].width - 2 * normalMargin) *
    (PAGE_DIMENSIONS["letter"].height - 2 * normalMargin);

  return Math.round(baseWpp * (usableArea / baseArea));
}

// Top ~200 most popular Google Fonts with categories
export const GOOGLE_FONTS: GoogleFont[] = [
  { name: "Roboto", category: "sans-serif" },
  { name: "Open Sans", category: "sans-serif" },
  { name: "Lato", category: "sans-serif" },
  { name: "Montserrat", category: "sans-serif" },
  { name: "Poppins", category: "sans-serif" },
  { name: "Roboto Condensed", category: "sans-serif" },
  { name: "Inter", category: "sans-serif" },
  { name: "Oswald", category: "sans-serif" },
  { name: "Noto Sans", category: "sans-serif" },
  { name: "Raleway", category: "sans-serif" },
  { name: "Nunito", category: "sans-serif" },
  { name: "Ubuntu", category: "sans-serif" },
  { name: "Rubik", category: "sans-serif" },
  { name: "Playfair Display", category: "serif" },
  { name: "Merriweather", category: "serif" },
  { name: "PT Sans", category: "sans-serif" },
  { name: "Roboto Slab", category: "serif" },
  { name: "Nunito Sans", category: "sans-serif" },
  { name: "Work Sans", category: "sans-serif" },
  { name: "Lora", category: "serif" },
  { name: "Fira Sans", category: "sans-serif" },
  { name: "Quicksand", category: "sans-serif" },
  { name: "Barlow", category: "sans-serif" },
  { name: "Mulish", category: "sans-serif" },
  { name: "Inconsolata", category: "monospace" },
  { name: "PT Serif", category: "serif" },
  { name: "Karla", category: "sans-serif" },
  { name: "Manrope", category: "sans-serif" },
  { name: "Heebo", category: "sans-serif" },
  { name: "Libre Baskerville", category: "serif" },
  { name: "Arimo", category: "sans-serif" },
  { name: "Noto Serif", category: "serif" },
  { name: "Josefin Sans", category: "sans-serif" },
  { name: "Hind", category: "sans-serif" },
  { name: "DM Sans", category: "sans-serif" },
  { name: "Dosis", category: "sans-serif" },
  { name: "Oxygen", category: "sans-serif" },
  { name: "Source Code Pro", category: "monospace" },
  { name: "Libre Franklin", category: "sans-serif" },
  { name: "Cabin", category: "sans-serif" },
  { name: "Abel", category: "sans-serif" },
  { name: "Anton", category: "sans-serif" },
  { name: "Lobster", category: "display" },
  { name: "Bebas Neue", category: "sans-serif" },
  { name: "Crimson Text", category: "serif" },
  { name: "Fjalla One", category: "sans-serif" },
  { name: "Maven Pro", category: "sans-serif" },
  { name: "Exo 2", category: "sans-serif" },
  { name: "Archivo", category: "sans-serif" },
  { name: "Overpass", category: "sans-serif" },
  { name: "Bitter", category: "serif" },
  { name: "Varela Round", category: "sans-serif" },
  { name: "Assistant", category: "sans-serif" },
  { name: "Cormorant Garamond", category: "serif" },
  { name: "Rajdhani", category: "sans-serif" },
  { name: "Catamaran", category: "sans-serif" },
  { name: "IBM Plex Sans", category: "sans-serif" },
  { name: "IBM Plex Mono", category: "monospace" },
  { name: "Signika", category: "sans-serif" },
  { name: "Questrial", category: "sans-serif" },
  { name: "Teko", category: "sans-serif" },
  { name: "Yanone Kaffeesatz", category: "sans-serif" },
  { name: "Arvo", category: "serif" },
  { name: "Asap", category: "sans-serif" },
  { name: "Nanum Gothic", category: "sans-serif" },
  { name: "Prompt", category: "sans-serif" },
  { name: "Kanit", category: "sans-serif" },
  { name: "ABeeZee", category: "sans-serif" },
  { name: "Comfortaa", category: "display" },
  { name: "Righteous", category: "display" },
  { name: "Vollkorn", category: "serif" },
  { name: "Alegreya", category: "serif" },
  { name: "Alegreya Sans", category: "sans-serif" },
  { name: "Shadows Into Light", category: "handwriting" },
  { name: "Dancing Script", category: "handwriting" },
  { name: "Pacifico", category: "handwriting" },
  { name: "Satisfy", category: "handwriting" },
  { name: "Caveat", category: "handwriting" },
  { name: "Great Vibes", category: "handwriting" },
  { name: "Indie Flower", category: "handwriting" },
  { name: "Permanent Marker", category: "handwriting" },
  { name: "Amatic SC", category: "handwriting" },
  { name: "Courgette", category: "handwriting" },
  { name: "Patrick Hand", category: "handwriting" },
  { name: "Kalam", category: "handwriting" },
  { name: "Sacramento", category: "handwriting" },
  { name: "Architects Daughter", category: "handwriting" },
  { name: "Yellowtail", category: "handwriting" },
  { name: "Bangers", category: "display" },
  { name: "Abril Fatface", category: "display" },
  { name: "Fredoka One", category: "display" },
  { name: "Passion One", category: "display" },
  { name: "Alfa Slab One", category: "display" },
  { name: "Bungee", category: "display" },
  { name: "Concert One", category: "display" },
  { name: "Secular One", category: "display" },
  { name: "Baloo 2", category: "display" },
  { name: "Bree Serif", category: "serif" },
  { name: "Crete Round", category: "serif" },
  { name: "Domine", category: "serif" },
  { name: "EB Garamond", category: "serif" },
  { name: "Gentium Book Plus", category: "serif" },
  { name: "Literata", category: "serif" },
  { name: "Spectral", category: "serif" },
  { name: "Source Serif 4", category: "serif" },
  { name: "Zilla Slab", category: "serif" },
  { name: "Rokkitt", category: "serif" },
  { name: "Noticia Text", category: "serif" },
  { name: "Neuton", category: "serif" },
  { name: "Sorts Mill Goudy", category: "serif" },
  { name: "Old Standard TT", category: "serif" },
  { name: "Cardo", category: "serif" },
  { name: "Crimson Pro", category: "serif" },
  { name: "Fira Code", category: "monospace" },
  { name: "JetBrains Mono", category: "monospace" },
  { name: "Roboto Mono", category: "monospace" },
  { name: "Space Mono", category: "monospace" },
  { name: "Ubuntu Mono", category: "monospace" },
  { name: "Cousine", category: "monospace" },
  { name: "PT Mono", category: "monospace" },
  { name: "Anonymous Pro", category: "monospace" },
  { name: "Overpass Mono", category: "monospace" },
  { name: "Red Hat Mono", category: "monospace" },
  { name: "Azeret Mono", category: "monospace" },
  { name: "Outfit", category: "sans-serif" },
  { name: "Plus Jakarta Sans", category: "sans-serif" },
  { name: "Space Grotesk", category: "sans-serif" },
  { name: "Sora", category: "sans-serif" },
  { name: "Lexend", category: "sans-serif" },
  { name: "Red Hat Display", category: "sans-serif" },
  { name: "Albert Sans", category: "sans-serif" },
  { name: "Figtree", category: "sans-serif" },
  { name: "Urbanist", category: "sans-serif" },
  { name: "Bricolage Grotesque", category: "sans-serif" },
  { name: "Geist", category: "sans-serif" },
  { name: "Instrument Sans", category: "sans-serif" },
  { name: "Onest", category: "sans-serif" },
  { name: "Schibsted Grotesk", category: "sans-serif" },
  { name: "General Sans", category: "sans-serif" },
  { name: "Satoshi", category: "sans-serif" },
  { name: "Wix Madefor Display", category: "sans-serif" },
  { name: "Gabarito", category: "display" },
  { name: "Playpen Sans", category: "handwriting" },
  { name: "Geologica", category: "sans-serif" },
  { name: "Afacad", category: "sans-serif" },
  { name: "Inclusive Sans", category: "sans-serif" },
  { name: "Noto Sans Mono", category: "monospace" },
  { name: "Courier Prime", category: "monospace" },
  { name: "Cutive Mono", category: "monospace" },
  { name: "Share Tech Mono", category: "monospace" },
  { name: "Major Mono Display", category: "monospace" },
  { name: "Cormorant", category: "serif" },
  { name: "Fraunces", category: "serif" },
  { name: "Newsreader", category: "serif" },
  { name: "Brygada 1918", category: "serif" },
  { name: "Libre Caslon Text", category: "serif" },
  { name: "Gelasio", category: "serif" },
  { name: "DM Serif Display", category: "serif" },
  { name: "DM Serif Text", category: "serif" },
  { name: "Unna", category: "serif" },
  { name: "Faustina", category: "serif" },
  { name: "Aleo", category: "serif" },
  { name: "Sedan", category: "serif" },
  { name: "Young Serif", category: "serif" },
  { name: "Instrument Serif", category: "serif" },
  { name: "Libre Bodoni", category: "serif" },
  { name: "Bodoni Moda", category: "serif" },
  { name: "Gloock", category: "serif" },
  { name: "Fresca", category: "sans-serif" },
  { name: "Gloria Hallelujah", category: "handwriting" },
  { name: "Homemade Apple", category: "handwriting" },
  { name: "Just Another Hand", category: "handwriting" },
  { name: "Reenie Beanie", category: "handwriting" },
  { name: "Rock Salt", category: "handwriting" },
  { name: "Covered By Your Grace", category: "handwriting" },
  { name: "Handlee", category: "handwriting" },
  { name: "Nothing You Could Do", category: "handwriting" },
  { name: "Kaushan Script", category: "handwriting" },
  { name: "Cookie", category: "handwriting" },
  { name: "Damion", category: "handwriting" },
  { name: "Mr Dafoe", category: "handwriting" },
  { name: "Allura", category: "handwriting" },
  { name: "Alex Brush", category: "handwriting" },
  { name: "Pinyon Script", category: "handwriting" },
  { name: "Tangerine", category: "handwriting" },
  { name: "Sue Ellen Francisco", category: "handwriting" },
  { name: "Sedgwick Ave", category: "handwriting" },
  { name: "Pangolin", category: "handwriting" },
  { name: "Neucha", category: "handwriting" },
  { name: "Sriracha", category: "handwriting" },
  { name: "Gochi Hand", category: "handwriting" },
  { name: "Leckerli One", category: "handwriting" },
];

// Load a Google Font via CSS API (no API key needed)
const loadedGoogleFonts = new Set<string>();

export function loadGoogleFont(fontName: string) {
  if (typeof window === "undefined") return;
  if (loadedGoogleFonts.has(fontName)) return;
  loadedGoogleFonts.add(fontName);

  const encoded = encodeURIComponent(fontName);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${encoded}:wght@400;700&display=swap`;
  document.head.appendChild(link);
}
