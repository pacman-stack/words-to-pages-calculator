"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FONT_CSS, FONT_LABELS } from "@/lib/constants";
import { loadGoogleFont } from "@/lib/google-fonts";
import type { FontType, FontSize, LineSpacing } from "@/types/calculator";

const SAMPLE_TEXT =
  "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump.";

const LINE_HEIGHT_MAP: Record<number, string> = {
  1: "1",
  1.15: "1.15",
  1.5: "1.5",
  2: "2",
};

export function FontPreview({
  fontType,
  fontSize,
  lineSpacing,
  googleFontFamily,
  googleFontName,
}: {
  fontType: FontType;
  fontSize: FontSize;
  lineSpacing: LineSpacing;
  googleFontFamily?: string;
  googleFontName?: string;
}) {
  const fontInfo = FONT_CSS[fontType];
  const prevSystemFont = useRef<string | null>(null);

  // Load system font's Google equivalent if needed
  useEffect(() => {
    if (!googleFontFamily && fontInfo.googleName && fontInfo.googleName !== prevSystemFont.current) {
      loadGoogleFont(fontInfo.googleName);
      prevSystemFont.current = fontInfo.googleName;
    }
  }, [fontInfo.googleName, googleFontFamily]);

  const isGoogle = !!googleFontFamily;
  const displayFamily = isGoogle ? googleFontFamily : fontInfo.family;
  const displayName = isGoogle ? googleFontName : FONT_LABELS[fontType];
  const spacingLabel =
    lineSpacing === 2 ? "double" : lineSpacing === 1 ? "single" : String(lineSpacing);

  return (
    <Card>
      <CardContent className="pt-4 pb-4">
        <p className="text-xs text-muted-foreground mb-2">
          Preview &mdash; {displayName}, {fontSize}pt, {spacingLabel} spacing
        </p>
        <div
          className="border rounded-md p-4 bg-white dark:bg-zinc-950 text-black dark:text-white overflow-hidden"
          style={{
            fontFamily: displayFamily,
            fontSize: `${fontSize}pt`,
            lineHeight: LINE_HEIGHT_MAP[lineSpacing] || String(lineSpacing),
          }}
        >
          {SAMPLE_TEXT}
        </div>
      </CardContent>
    </Card>
  );
}
