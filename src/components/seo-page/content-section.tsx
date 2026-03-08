export function ContentSection({
  sections,
}: {
  sections: Array<{ heading: string; body: string }>;
}) {
  return (
    <div className="space-y-6">
      {sections.map((section, i) => (
        <section key={i}>
          <h2 className="text-xl font-bold mb-2">{section.heading}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {section.body}
          </p>
        </section>
      ))}
    </div>
  );
}
