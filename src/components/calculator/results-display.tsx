"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { CalculatorResult } from "@/types/calculator";

function StatCard({
  label,
  value,
  sublabel,
}: {
  label: string;
  value: string;
  sublabel?: string;
}) {
  return (
    <Card>
      <CardContent className="pt-4 pb-4 text-center">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-3xl font-bold tracking-tight mt-1">{value}</p>
        {sublabel && (
          <p className="text-xs text-muted-foreground mt-1">{sublabel}</p>
        )}
      </CardContent>
    </Card>
  );
}

function formatReadingTime(minutes: number): string {
  if (minutes < 1) {
    const seconds = Math.round(minutes * 60);
    return `${seconds} sec`;
  }
  const mins = Math.floor(minutes);
  const secs = Math.round((minutes - mins) * 60);
  if (secs === 0) return `${mins} min`;
  return `${mins} min ${secs} sec`;
}

export function ResultsDisplay({
  result,
  wordCount,
}: {
  result: CalculatorResult;
  wordCount: number;
}) {
  return (
    <div className="space-y-4">
      {/* Primary result */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-6 pb-6 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Estimated Pages
          </p>
          <p className="text-5xl font-bold tracking-tight mt-2">
            {wordCount === 0 ? "0" : result.pages.toFixed(3)}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {wordCount === 0
              ? "Enter your word count"
              : `${result.pagesRounded} page${result.pagesRounded !== 1 ? "s" : ""} when printed`}
          </p>
        </CardContent>
      </Card>

      {/* Secondary stats */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          label="Words Per Page"
          value={wordCount === 0 ? "—" : String(result.wordsPerPage)}
          sublabel="for this formatting"
        />
        <StatCard
          label="Reading Time"
          value={
            wordCount === 0 ? "—" : formatReadingTime(result.readingTimeMinutes)
          }
          sublabel="at 238 wpm"
        />
        <StatCard
          label="Paragraphs"
          value={wordCount === 0 ? "—" : String(result.paragraphs)}
          sublabel="~100 words each"
        />
        <StatCard
          label="Sentences"
          value={wordCount === 0 ? "—" : String(result.sentences)}
          sublabel="~15 words each"
        />
      </div>
    </div>
  );
}
