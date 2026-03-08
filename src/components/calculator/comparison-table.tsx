import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { calculateWordsPerPage } from "@/lib/calculator";
import {
  ALL_FONT_TYPES,
  ALL_LINE_SPACINGS,
  FONT_LABELS,
  SPACING_LABELS,
} from "@/lib/constants";

export function ComparisonTable({ wordCount }: { wordCount: number }) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px]">Font</TableHead>
            {ALL_LINE_SPACINGS.map((spacing) => (
              <TableHead key={spacing} className="text-center">
                {SPACING_LABELS[String(spacing)]}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ALL_FONT_TYPES.map((font) => (
            <TableRow key={font}>
              <TableCell className="font-medium">
                {FONT_LABELS[font]}
              </TableCell>
              {ALL_LINE_SPACINGS.map((spacing) => {
                const wpp = calculateWordsPerPage({
                  fontType: font,
                  fontSize: 12,
                  lineSpacing: spacing,
                  pageSize: "letter",
                  marginSize: "normal",
                });
                const pages = Math.round((wordCount / wpp) * 10) / 10;
                return (
                  <TableCell key={spacing} className="text-center tabular-nums">
                    {pages}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-xs text-muted-foreground mt-2">
        *Based on 12pt font, letter-size paper, 1-inch margins
      </p>
    </div>
  );
}
