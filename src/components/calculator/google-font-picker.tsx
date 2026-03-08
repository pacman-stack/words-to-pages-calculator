"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { GOOGLE_FONTS, loadGoogleFont } from "@/lib/google-fonts";
import type { GoogleFont } from "@/lib/google-fonts";

const CATEGORY_COLORS: Record<string, string> = {
  serif: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "sans-serif": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  monospace: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  display: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  handwriting: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
};

export function GoogleFontPicker({
  selectedFont,
  onSelect,
  onClear,
}: {
  selectedFont: GoogleFont | null;
  onSelect: (font: GoogleFont) => void;
  onClear: () => void;
}) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return GOOGLE_FONTS.slice(0, 30);
    const q = query.toLowerCase();
    return GOOGLE_FONTS.filter((f) => f.name.toLowerCase().includes(q)).slice(0, 30);
  }, [query]);

  // Close on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSelect(font: GoogleFont) {
    loadGoogleFont(font.name);
    onSelect(font);
    setQuery("");
    setIsOpen(false);
  }

  if (selectedFont) {
    return (
      <div className="flex items-center gap-2 p-2 border rounded-md bg-background">
        <span
          className="flex-1 font-medium"
          style={{ fontFamily: `"${selectedFont.name}", sans-serif` }}
        >
          {selectedFont.name}
        </span>
        <Badge variant="secondary" className={`text-[10px] ${CATEGORY_COLORS[selectedFont.category] || ""}`}>
          {selectedFont.category}
        </Badge>
        <button
          onClick={onClear}
          className="text-muted-foreground hover:text-foreground text-sm px-1"
          aria-label="Clear selection"
        >
          &times;
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <Input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        placeholder="Search Google Fonts (e.g. Roboto, Lora...)"
        className="text-sm"
      />
      {isOpen && filtered.length > 0 && (
        <div className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto rounded-md border bg-popover shadow-lg">
          {filtered.map((font) => (
            <button
              key={font.name}
              onClick={() => handleSelect(font)}
              className="flex items-center justify-between w-full px-3 py-2 text-sm text-left hover:bg-accent transition-colors"
            >
              <span>{font.name}</span>
              <Badge
                variant="secondary"
                className={`text-[10px] ml-2 ${CATEGORY_COLORS[font.category] || ""}`}
              >
                {font.category}
              </Badge>
            </button>
          ))}
        </div>
      )}
      {isOpen && query && filtered.length === 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover shadow-lg p-3 text-sm text-muted-foreground">
          No fonts found for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
