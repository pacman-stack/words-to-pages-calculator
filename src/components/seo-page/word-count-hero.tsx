import Link from "next/link";

export function WordCountHero({
  h1,
  quickAnswer,
}: {
  h1: string;
  quickAnswer: string;
}) {
  return (
    <header className="mb-8">
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground font-medium truncate">
            {h1}
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{h1}</h1>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        {quickAnswer}
      </p>
    </header>
  );
}
