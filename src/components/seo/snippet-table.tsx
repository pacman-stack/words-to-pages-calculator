import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SNIPPET_DATA = [
  { words: 250, single: "0.5", double: "1" },
  { words: 500, single: "1", double: "2" },
  { words: 750, single: "1.5", double: "3" },
  { words: 1000, single: "2", double: "4" },
  { words: 1500, single: "3", double: "6" },
  { words: 2000, single: "4", double: "8" },
  { words: 2500, single: "5", double: "10" },
  { words: 3000, single: "6", double: "12" },
  { words: 4000, single: "8", double: "16" },
  { words: 5000, single: "10", double: "20" },
  { words: 7500, single: "15", double: "30" },
  { words: 10000, single: "20", double: "40" },
];

export function SnippetTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Word Count</TableHead>
            <TableHead className="text-center">Pages (Single-Spaced)</TableHead>
            <TableHead className="text-center">Pages (Double-Spaced)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {SNIPPET_DATA.map((row) => (
            <TableRow key={row.words}>
              <TableCell className="font-medium">
                {row.words.toLocaleString()} words
              </TableCell>
              <TableCell className="text-center tabular-nums">
                {row.single} {Number(row.single) === 1 ? "page" : "pages"}
              </TableCell>
              <TableCell className="text-center tabular-nums">
                {row.double} {Number(row.double) === 1 ? "page" : "pages"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-xs text-muted-foreground mt-2">
        *Based on 12pt Times New Roman, letter-size paper, 1-inch margins
      </p>
    </div>
  );
}
