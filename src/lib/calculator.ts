import type {
  FontType,
  FontSize,
  LineSpacing,
  PageSize,
  MarginSize,
  CalculatorSettings,
  CalculatorResult,
} from "@/types/calculator";
import {
  BASE_WORDS_PER_PAGE,
  PAGE_DIMENSIONS,
  MARGIN_VALUES,
  READING_WPM,
  AVG_WORDS_PER_SENTENCE,
  AVG_WORDS_PER_PARAGRAPH,
  interpolateWpp,
} from "./constants";
import { calculateGoogleFontWpp } from "./google-fonts";

function getMarginFactor(marginSize: MarginSize, pageSize: PageSize): number {
  const pageDim = PAGE_DIMENSIONS[pageSize];
  const margin = MARGIN_VALUES[marginSize];
  const normalMargin = MARGIN_VALUES["normal"];

  const usableArea =
    (pageDim.width - 2 * margin) * (pageDim.height - 2 * margin);
  const baseArea =
    (PAGE_DIMENSIONS["letter"].width - 2 * normalMargin) *
    (PAGE_DIMENSIONS["letter"].height - 2 * normalMargin);

  return usableArea / baseArea;
}

export function calculateWordsPerPage(settings: {
  fontType: FontType;
  fontSize: FontSize;
  lineSpacing: LineSpacing;
  pageSize: PageSize;
  marginSize: MarginSize;
}): number {
  const spacingKey = String(settings.lineSpacing);
  const anchorData = BASE_WORDS_PER_PAGE[settings.fontType];
  const baseWpp = interpolateWpp(anchorData, settings.fontSize, spacingKey);
  const factor = getMarginFactor(settings.marginSize, settings.pageSize);
  return Math.max(10, Math.round(baseWpp * factor));
}

export function calculate(settings: CalculatorSettings): CalculatorResult {
  const { wordCount, ...rest } = settings;
  const wordsPerPage = calculateWordsPerPage(rest);

  const pages = wordCount / wordsPerPage;
  const pagesRounded = Math.ceil(pages);
  const paragraphs = Math.round(wordCount / AVG_WORDS_PER_PARAGRAPH);
  const sentences = Math.round(wordCount / AVG_WORDS_PER_SENTENCE);
  const readingTimeMinutes = wordCount / READING_WPM;

  // Round to 3 decimal places for precision (e.g. 0.042, 0.500, 2.133)
  const pagesDisplay =
    wordCount > 0
      ? Math.round(pages * 1000) / 1000
      : 0;

  return {
    pages: pagesDisplay,
    pagesRounded: Math.max(1, pagesRounded),
    paragraphs: Math.max(1, paragraphs),
    sentences: Math.max(1, sentences),
    readingTimeMinutes: Math.round(readingTimeMinutes * 10) / 10,
    wordsPerPage,
  };
}

export function calculateWithCategory(settings: {
  wordCount: number;
  category: string;
  fontSize: FontSize;
  lineSpacing: LineSpacing;
  pageSize: PageSize;
  marginSize: MarginSize;
}): CalculatorResult {
  const { wordCount, category, ...rest } = settings;
  const wordsPerPage = calculateGoogleFontWpp(
    category,
    rest.fontSize,
    rest.lineSpacing,
    rest.pageSize,
    rest.marginSize
  );

  const pages = wordCount / wordsPerPage;
  const pagesRounded = Math.ceil(pages);
  const paragraphs = Math.round(wordCount / AVG_WORDS_PER_PARAGRAPH);
  const sentences = Math.round(wordCount / AVG_WORDS_PER_SENTENCE);
  const readingTimeMinutes = wordCount / READING_WPM;

  const pagesDisplay =
    wordCount > 0 ? Math.round(pages * 1000) / 1000 : 0;

  return {
    pages: pagesDisplay,
    pagesRounded: Math.max(1, pagesRounded),
    paragraphs: Math.max(1, paragraphs),
    sentences: Math.max(1, sentences),
    readingTimeMinutes: Math.round(readingTimeMinutes * 10) / 10,
    wordsPerPage,
  };
}

export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}
