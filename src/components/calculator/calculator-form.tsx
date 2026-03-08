"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultsDisplay } from "./results-display";
import { FontPreview } from "./font-preview";
import { GoogleFontPicker } from "./google-font-picker";
import { useCalculator } from "@/hooks/use-calculator";
import { countWords } from "@/lib/calculator";
import {
  FONT_OPTIONS,
  FONT_SIZE_PRESETS,
  FONT_SIZE_MIN,
  FONT_SIZE_MAX,
  LINE_SPACING_OPTIONS,
  PAGE_SIZE_OPTIONS,
  MARGIN_SIZE_OPTIONS,
} from "@/lib/constants";
import type {
  FontType,
  LineSpacing,
  PageSize,
  MarginSize,
} from "@/types/calculator";

export function CalculatorForm({
  defaultWordCount = 1000,
}: {
  defaultWordCount?: number;
}) {
  const calc = useCalculator(defaultWordCount);
  const [text, setText] = useState("");
  const [fontMode, setFontMode] = useState<"system" | "google">("system");

  function handleTextChange(value: string) {
    setText(value);
    calc.setWordCount(countWords(value));
  }

  function handleWordCountChange(value: string) {
    const num = parseInt(value, 10);
    calc.setWordCount(isNaN(num) ? 0 : num);
  }

  // Determine what font to show in the preview
  const previewFontFamily = calc.googleFont
    ? `"${calc.googleFont.name}", ${calc.googleFont.category}`
    : undefined;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Input Section */}
      <Card>
        <CardContent className="pt-6 space-y-5">
          <Tabs defaultValue="number">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="number">Enter Word Count</TabsTrigger>
              <TabsTrigger value="paste">Paste Your Text</TabsTrigger>
            </TabsList>
            <TabsContent value="number" className="mt-4">
              <div className="space-y-2">
                <Label htmlFor="word-count">Number of Words</Label>
                <Input
                  id="word-count"
                  type="number"
                  min={0}
                  value={calc.wordCount || ""}
                  onChange={(e) => handleWordCountChange(e.target.value)}
                  placeholder="Enter word count (e.g. 1000)"
                  className="text-lg"
                />
              </div>
            </TabsContent>
            <TabsContent value="paste" className="mt-4">
              <div className="space-y-2">
                <Label htmlFor="text-input">
                  Paste Your Text
                  {text && (
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({calc.wordCount} words)
                    </span>
                  )}
                </Label>
                <Textarea
                  id="text-input"
                  rows={6}
                  value={text}
                  onChange={(e) => handleTextChange(e.target.value)}
                  placeholder="Paste your text here to automatically count words..."
                />
              </div>
            </TabsContent>
          </Tabs>

          {/* Settings */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Font selection with system / Google toggle */}
            <div className="space-y-2 sm:col-span-2">
              <Label>Font</Label>
              <Tabs
                value={fontMode}
                onValueChange={(v) => {
                  const mode = v as "system" | "google";
                  setFontMode(mode);
                  if (mode === "system") {
                    calc.setGoogleFont(null);
                  }
                }}
              >
                <TabsList className="grid w-full grid-cols-2 h-8">
                  <TabsTrigger value="system" className="text-xs">
                    System Fonts
                  </TabsTrigger>
                  <TabsTrigger value="google" className="text-xs">
                    Google Fonts
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="system" className="mt-2">
                  <Select
                    value={calc.fontType}
                    onValueChange={(v) => calc.setFontType(v as FontType)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {FONT_OPTIONS.map((f) => (
                        <SelectItem key={f.value} value={f.value}>
                          {f.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TabsContent>
                <TabsContent value="google" className="mt-2">
                  <GoogleFontPicker
                    selectedFont={calc.googleFont}
                    onSelect={(font) => calc.setGoogleFont(font)}
                    onClear={() => calc.setGoogleFont(null)}
                  />
                  {calc.googleFont && (
                    <p className="text-[11px] text-muted-foreground mt-1">
                      Page estimate based on {calc.googleFont.category} category
                      metrics
                    </p>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-2">
              <Label>Font Size ({FONT_SIZE_MIN}–{FONT_SIZE_MAX} pt)</Label>
              <div className="flex gap-2 items-center">
                <Input
                  type="number"
                  min={FONT_SIZE_MIN}
                  max={FONT_SIZE_MAX}
                  value={calc.fontSize}
                  onChange={(e) => {
                    const v = parseInt(e.target.value, 10);
                    if (!isNaN(v) && v >= FONT_SIZE_MIN && v <= FONT_SIZE_MAX) {
                      calc.setFontSize(v);
                    }
                  }}
                  className="w-20 text-center"
                />
                <span className="text-xs text-muted-foreground">pt</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {FONT_SIZE_PRESETS.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => calc.setFontSize(size)}
                    className={`px-2 py-0.5 text-xs rounded border transition-colors ${
                      calc.fontSize === size
                        ? "bg-primary text-primary-foreground border-primary"
                        : "hover:bg-accent border-input"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Line Spacing</Label>
              <Select
                value={String(calc.lineSpacing)}
                onValueChange={(v) =>
                  calc.setLineSpacing(Number(v) as LineSpacing)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LINE_SPACING_OPTIONS.map((s) => (
                    <SelectItem key={s.value} value={String(s.value)}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Page Size</Label>
              <Select
                value={calc.pageSize}
                onValueChange={(v) => calc.setPageSize(v as PageSize)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PAGE_SIZE_OPTIONS.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Margins</Label>
              <Select
                value={calc.marginSize}
                onValueChange={(v) => calc.setMarginSize(v as MarginSize)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MARGIN_SIZE_OPTIONS.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Font Preview */}
          <FontPreview
            fontType={calc.fontType}
            fontSize={calc.fontSize}
            lineSpacing={calc.lineSpacing}
            googleFontFamily={previewFontFamily}
            googleFontName={calc.googleFont?.name}
          />
        </CardContent>
      </Card>

      {/* Results Section */}
      <ResultsDisplay result={calc.result} wordCount={calc.wordCount} />
    </div>
  );
}
