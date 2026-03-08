"use client";

const sizes: Record<string, string> = {
  banner: "w-full h-[90px]",
  sidebar: "w-[300px] min-h-[250px]",
  "in-content": "w-full h-[250px]",
  footer: "w-full h-[90px]",
};

export function AdSlot({
  type = "banner",
  className = "",
}: {
  type?: "banner" | "sidebar" | "in-content" | "footer";
  className?: string;
}) {
  return (
    <div
      className={`${sizes[type]} bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center text-muted-foreground/40 text-sm ${className}`}
      aria-hidden="true"
    >
      Ad Space
    </div>
  );
}
