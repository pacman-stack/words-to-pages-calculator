"use client";

import { useEffect, useRef } from "react";

const AD_CLIENT = "ca-pub-7168203322368504";

const formats: Record<string, { format: string; className: string }> = {
  banner: { format: "horizontal", className: "w-full min-h-[90px]" },
  sidebar: { format: "vertical", className: "w-full min-h-[250px]" },
  "in-content": { format: "fluid", className: "w-full min-h-[250px]" },
  footer: { format: "horizontal", className: "w-full min-h-[90px]" },
};

export function AdSlot({
  type = "banner",
  className = "",
}: {
  type?: "banner" | "sidebar" | "in-content" | "footer";
  className?: string;
}) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      ((window as unknown as Record<string, unknown[]>).adsbygoogle =
        (window as unknown as Record<string, unknown[]>).adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet or ad blocker active
    }
  }, []);

  const { format, className: sizeClass } = formats[type] ?? formats.banner;

  return (
    <div className={`${sizeClass} ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
