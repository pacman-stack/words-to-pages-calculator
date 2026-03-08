export type FontType =
  | "arial"
  | "times-new-roman"
  | "calibri"
  | "courier-new"
  | "verdana"
  | "georgia"
  | "helvetica"
  | "garamond"
  | "palatino"
  | "tahoma"
  | "trebuchet-ms"
  | "century-gothic"
  | "book-antiqua"
  | "comic-sans-ms";

export type FontSize = number; // 6–72pt

export type LineSpacing = 1.0 | 1.15 | 1.5 | 2.0;

export type PageSize = "letter" | "a4";

export type MarginSize = "normal" | "narrow" | "wide";

export interface CalculatorSettings {
  wordCount: number;
  fontType: FontType;
  fontSize: FontSize;
  lineSpacing: LineSpacing;
  pageSize: PageSize;
  marginSize: MarginSize;
}

export interface CalculatorResult {
  pages: number;
  pagesRounded: number;
  paragraphs: number;
  sentences: number;
  readingTimeMinutes: number;
  wordsPerPage: number;
}

export interface FontOption {
  value: FontType;
  label: string;
}

export interface FontSizeOption {
  value: FontSize;
  label: string;
}

export interface LineSpacingOption {
  value: LineSpacing;
  label: string;
}

export interface PageSizeOption {
  value: PageSize;
  label: string;
}

export interface MarginSizeOption {
  value: MarginSize;
  label: string;
}
