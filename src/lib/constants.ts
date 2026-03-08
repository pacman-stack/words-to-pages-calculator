import type {
  FontType,
  FontSize,
  LineSpacing,
  PageSize,
  MarginSize,
  FontOption,
  FontSizeOption,
  LineSpacingOption,
  PageSizeOption,
  MarginSizeOption,
} from "@/types/calculator";

// Calibrated base words-per-page values for Letter size, 1" margins.
// Keys: [fontType][fontSize][lineSpacing]
export const BASE_WORDS_PER_PAGE: Record<
  FontType,
  Record<FontSize, Record<string, number>>
> = {
  "times-new-roman": {
    10: { "1": 600, "1.15": 520, "1.5": 400, "2": 300 },
    11: { "1": 550, "1.15": 480, "1.5": 365, "2": 275 },
    12: { "1": 500, "1.15": 435, "1.5": 335, "2": 250 },
    14: { "1": 400, "1.15": 350, "1.5": 265, "2": 200 },
  },
  arial: {
    10: { "1": 550, "1.15": 480, "1.5": 365, "2": 275 },
    11: { "1": 500, "1.15": 435, "1.5": 335, "2": 250 },
    12: { "1": 450, "1.15": 390, "1.5": 300, "2": 225 },
    14: { "1": 350, "1.15": 300, "1.5": 235, "2": 175 },
  },
  calibri: {
    10: { "1": 560, "1.15": 490, "1.5": 375, "2": 280 },
    11: { "1": 500, "1.15": 400, "1.5": 340, "2": 255 },
    12: { "1": 470, "1.15": 410, "1.5": 315, "2": 235 },
    14: { "1": 370, "1.15": 320, "1.5": 245, "2": 185 },
  },
  "courier-new": {
    10: { "1": 420, "1.15": 365, "1.5": 280, "2": 210 },
    11: { "1": 380, "1.15": 330, "1.5": 255, "2": 190 },
    12: { "1": 350, "1.15": 300, "1.5": 230, "2": 175 },
    14: { "1": 275, "1.15": 240, "1.5": 185, "2": 140 },
  },
  verdana: {
    10: { "1": 470, "1.15": 410, "1.5": 315, "2": 235 },
    11: { "1": 420, "1.15": 365, "1.5": 280, "2": 210 },
    12: { "1": 380, "1.15": 330, "1.5": 255, "2": 190 },
    14: { "1": 300, "1.15": 260, "1.5": 200, "2": 150 },
  },
  georgia: {
    10: { "1": 560, "1.15": 490, "1.5": 375, "2": 280 },
    11: { "1": 510, "1.15": 445, "1.5": 340, "2": 255 },
    12: { "1": 470, "1.15": 410, "1.5": 315, "2": 235 },
    14: { "1": 370, "1.15": 320, "1.5": 245, "2": 185 },
  },
  helvetica: {
    10: { "1": 550, "1.15": 480, "1.5": 365, "2": 275 },
    11: { "1": 500, "1.15": 435, "1.5": 335, "2": 250 },
    12: { "1": 450, "1.15": 390, "1.5": 300, "2": 225 },
    14: { "1": 350, "1.15": 300, "1.5": 235, "2": 175 },
  },
  garamond: {
    10: { "1": 620, "1.15": 540, "1.5": 415, "2": 310 },
    11: { "1": 570, "1.15": 495, "1.5": 380, "2": 285 },
    12: { "1": 520, "1.15": 450, "1.5": 345, "2": 260 },
    14: { "1": 415, "1.15": 360, "1.5": 275, "2": 210 },
  },
  palatino: {
    10: { "1": 550, "1.15": 480, "1.5": 370, "2": 275 },
    11: { "1": 500, "1.15": 435, "1.5": 335, "2": 250 },
    12: { "1": 460, "1.15": 400, "1.5": 305, "2": 230 },
    14: { "1": 360, "1.15": 315, "1.5": 240, "2": 180 },
  },
  tahoma: {
    10: { "1": 510, "1.15": 445, "1.5": 340, "2": 255 },
    11: { "1": 460, "1.15": 400, "1.5": 305, "2": 230 },
    12: { "1": 420, "1.15": 365, "1.5": 280, "2": 210 },
    14: { "1": 330, "1.15": 285, "1.5": 220, "2": 165 },
  },
  "trebuchet-ms": {
    10: { "1": 520, "1.15": 450, "1.5": 345, "2": 260 },
    11: { "1": 470, "1.15": 410, "1.5": 315, "2": 235 },
    12: { "1": 430, "1.15": 375, "1.5": 285, "2": 215 },
    14: { "1": 340, "1.15": 295, "1.5": 225, "2": 170 },
  },
  "century-gothic": {
    10: { "1": 450, "1.15": 390, "1.5": 300, "2": 225 },
    11: { "1": 400, "1.15": 350, "1.5": 265, "2": 200 },
    12: { "1": 365, "1.15": 315, "1.5": 245, "2": 180 },
    14: { "1": 285, "1.15": 250, "1.5": 190, "2": 145 },
  },
  "book-antiqua": {
    10: { "1": 555, "1.15": 485, "1.5": 370, "2": 280 },
    11: { "1": 505, "1.15": 440, "1.5": 335, "2": 255 },
    12: { "1": 465, "1.15": 405, "1.5": 310, "2": 235 },
    14: { "1": 365, "1.15": 315, "1.5": 245, "2": 185 },
  },
  "comic-sans-ms": {
    10: { "1": 470, "1.15": 410, "1.5": 315, "2": 235 },
    11: { "1": 420, "1.15": 365, "1.5": 280, "2": 210 },
    12: { "1": 380, "1.15": 330, "1.5": 255, "2": 190 },
    14: { "1": 300, "1.15": 260, "1.5": 200, "2": 150 },
  },
};

export const PAGE_DIMENSIONS: Record<
  PageSize,
  { width: number; height: number }
> = {
  letter: { width: 8.5, height: 11.0 },
  a4: { width: 8.27, height: 11.69 },
};

export const MARGIN_VALUES: Record<MarginSize, number> = {
  normal: 1.0,
  narrow: 0.5,
  wide: 1.25,
};

export const READING_WPM = 238;
export const AVG_WORDS_PER_SENTENCE = 15;
export const AVG_WORDS_PER_PARAGRAPH = 100;

// UI Options
export const FONT_OPTIONS: FontOption[] = [
  { value: "arial", label: "Arial" },
  { value: "times-new-roman", label: "Times New Roman" },
  { value: "calibri", label: "Calibri" },
  { value: "courier-new", label: "Courier New" },
  { value: "verdana", label: "Verdana" },
  { value: "georgia", label: "Georgia" },
  { value: "helvetica", label: "Helvetica" },
  { value: "garamond", label: "Garamond" },
  { value: "palatino", label: "Palatino" },
  { value: "tahoma", label: "Tahoma" },
  { value: "trebuchet-ms", label: "Trebuchet MS" },
  { value: "century-gothic", label: "Century Gothic" },
  { value: "book-antiqua", label: "Book Antiqua" },
  { value: "comic-sans-ms", label: "Comic Sans MS" },
];

export const FONT_SIZE_MIN = 6;
export const FONT_SIZE_MAX = 72;

// Anchor sizes used in the lookup tables
export const ANCHOR_SIZES: number[] = [10, 11, 12, 14];

// Common presets shown as quick-pick buttons
export const FONT_SIZE_PRESETS = [8, 10, 11, 12, 14, 16, 18, 24, 36, 48, 72];

export const FONT_SIZE_OPTIONS: FontSizeOption[] = [
  { value: 10, label: "10 pt" },
  { value: 11, label: "11 pt" },
  { value: 12, label: "12 pt" },
  { value: 14, label: "14 pt" },
];

// Interpolate WPP for any font size from the 4 anchor points (10, 11, 12, 14).
// Uses linear interpolation between anchors and extrapolation outside.
export function interpolateWpp(
  anchorData: Record<number, Record<string, number>>,
  fontSize: number,
  spacingKey: string
): number {
  const anchors = ANCHOR_SIZES;

  // Exact match
  if (anchorData[fontSize]?.[spacingKey] !== undefined) {
    return anchorData[fontSize][spacingKey];
  }

  // Find surrounding anchors
  let lower = anchors[0];
  let upper = anchors[anchors.length - 1];

  for (let i = 0; i < anchors.length - 1; i++) {
    if (fontSize >= anchors[i] && fontSize <= anchors[i + 1]) {
      lower = anchors[i];
      upper = anchors[i + 1];
      break;
    }
  }

  const lowerWpp = anchorData[lower][spacingKey];
  const upperWpp = anchorData[upper][spacingKey];

  if (fontSize <= anchors[0]) {
    // Extrapolate below: use slope from 10→11
    const slope = (anchorData[11][spacingKey] - anchorData[10][spacingKey]);
    return Math.round(lowerWpp + slope * (fontSize - anchors[0]));
  }

  if (fontSize >= anchors[anchors.length - 1]) {
    // Extrapolate above: use slope from 12→14, scale per pt
    const slope = (anchorData[14][spacingKey] - anchorData[12][spacingKey]) / 2;
    return Math.max(20, Math.round(upperWpp + slope * (fontSize - anchors[anchors.length - 1])));
  }

  // Linear interpolation
  const t = (fontSize - lower) / (upper - lower);
  return Math.round(lowerWpp + t * (upperWpp - lowerWpp));
}

export const LINE_SPACING_OPTIONS: LineSpacingOption[] = [
  { value: 1.0, label: "Single (1.0)" },
  { value: 1.15, label: "1.15" },
  { value: 1.5, label: "1.5" },
  { value: 2.0, label: "Double (2.0)" },
];

export const PAGE_SIZE_OPTIONS: PageSizeOption[] = [
  { value: "letter", label: 'Letter (8.5" x 11")' },
  { value: "a4", label: "A4 (210mm x 297mm)" },
];

export const MARGIN_SIZE_OPTIONS: MarginSizeOption[] = [
  { value: "normal", label: 'Normal (1")' },
  { value: "narrow", label: 'Narrow (0.5")' },
  { value: "wide", label: 'Wide (1.25")' },
];

export const ALL_LINE_SPACINGS: LineSpacing[] = [1.0, 1.15, 1.5, 2.0];
export const ALL_FONT_TYPES: FontType[] = [
  "arial",
  "times-new-roman",
  "calibri",
  "courier-new",
  "verdana",
  "georgia",
  "helvetica",
  "garamond",
  "palatino",
  "tahoma",
  "trebuchet-ms",
  "century-gothic",
  "book-antiqua",
  "comic-sans-ms",
];

export const FONT_LABELS: Record<FontType, string> = {
  arial: "Arial",
  "times-new-roman": "Times New Roman",
  calibri: "Calibri",
  "courier-new": "Courier New",
  verdana: "Verdana",
  georgia: "Georgia",
  helvetica: "Helvetica",
  garamond: "Garamond",
  palatino: "Palatino",
  tahoma: "Tahoma",
  "trebuchet-ms": "Trebuchet MS",
  "century-gothic": "Century Gothic",
  "book-antiqua": "Book Antiqua",
  "comic-sans-ms": "Comic Sans MS",
};

export const SPACING_LABELS: Record<string, string> = {
  "1": "Single",
  "1.15": "1.15",
  "1.5": "1.5",
  "2": "Double",
};

// CSS font-family values and Google Fonts names for live preview.
// `googleName` is the family name to load from Google Fonts API.
// `null` means it's a system font that doesn't need loading.
export const FONT_CSS: Record<
  FontType,
  { family: string; googleName: string | null }
> = {
  arial: { family: "Arial, Helvetica, sans-serif", googleName: null },
  "times-new-roman": {
    family: '"Times New Roman", Times, serif',
    googleName: null,
  },
  calibri: { family: "Calibri, Carlito, sans-serif", googleName: "Carlito" },
  "courier-new": {
    family: '"Courier New", Courier, monospace',
    googleName: null,
  },
  verdana: { family: "Verdana, Geneva, sans-serif", googleName: null },
  georgia: { family: "Georgia, serif", googleName: null },
  helvetica: { family: "Helvetica, Arial, sans-serif", googleName: null },
  garamond: {
    family: '"EB Garamond", Garamond, serif',
    googleName: "EB Garamond",
  },
  palatino: {
    family: '"Palatino Linotype", Palatino, "Book Antiqua", serif',
    googleName: null,
  },
  tahoma: { family: "Tahoma, Geneva, sans-serif", googleName: null },
  "trebuchet-ms": {
    family: '"Trebuchet MS", Helvetica, sans-serif',
    googleName: null,
  },
  "century-gothic": {
    family: '"Century Gothic", CenturyGothic, Poppins, sans-serif',
    googleName: "Poppins",
  },
  "book-antiqua": {
    family: '"Book Antiqua", "Palatino Linotype", Palatino, serif',
    googleName: null,
  },
  "comic-sans-ms": {
    family: '"Comic Sans MS", "Comic Neue", cursive',
    googleName: "Comic Neue",
  },
};
