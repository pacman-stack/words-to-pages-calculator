"use client";

import { useState, useMemo } from "react";
import type {
  FontType,
  FontSize,
  LineSpacing,
  PageSize,
  MarginSize,
  CalculatorResult,
} from "@/types/calculator";
import { calculate, calculateWithCategory } from "@/lib/calculator";
import type { GoogleFont } from "@/lib/google-fonts";

export function useCalculator(defaultWordCount: number = 1000) {
  const [wordCount, setWordCount] = useState(defaultWordCount);
  const [fontType, setFontType] = useState<FontType>("times-new-roman");
  const [fontSize, setFontSize] = useState<FontSize>(12);
  const [lineSpacing, setLineSpacing] = useState<LineSpacing>(2.0);
  const [pageSize, setPageSize] = useState<PageSize>("letter");
  const [marginSize, setMarginSize] = useState<MarginSize>("normal");
  const [googleFont, setGoogleFont] = useState<GoogleFont | null>(null);

  const result: CalculatorResult = useMemo(() => {
    const wc = Math.max(0, wordCount);

    if (googleFont) {
      return calculateWithCategory({
        wordCount: wc,
        category: googleFont.category,
        fontSize,
        lineSpacing,
        pageSize,
        marginSize,
      });
    }

    return calculate({
      wordCount: wc,
      fontType,
      fontSize,
      lineSpacing,
      pageSize,
      marginSize,
    });
  }, [wordCount, fontType, fontSize, lineSpacing, pageSize, marginSize, googleFont]);

  return {
    wordCount,
    setWordCount,
    fontType,
    setFontType,
    fontSize,
    setFontSize,
    lineSpacing,
    setLineSpacing,
    pageSize,
    setPageSize,
    marginSize,
    setMarginSize,
    googleFont,
    setGoogleFont,
    result,
  };
}
