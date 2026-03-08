export function WebApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Word to Pages",
    url: "https://wordtopages.com",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free online tool to convert word count to page count. Supports multiple fonts, sizes, spacing, margins, and page sizes.",
    featureList: [
      "Convert word count to pages",
      "Support for 14+ system fonts and 200+ Google Fonts",
      "Adjustable font size (6-72pt)",
      "Single, 1.15, 1.5, and double line spacing",
      "Letter and A4 page sizes",
      "Normal, narrow, and wide margins",
      "Live font preview",
      "Reading time estimation",
      "Paragraph and sentence estimation",
    ],
    browserRequirements: "Requires JavaScript",
    softwareVersion: "1.0",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Convert Words to Pages",
    description:
      "Use the Word to Pages calculator to find out how many pages your word count will fill based on your formatting settings.",
    step: [
      {
        "@type": "HowToStep",
        name: "Enter your word count",
        text: "Type your word count into the calculator or paste your text to count words automatically.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Choose your font",
        text: "Select from 14 system fonts like Times New Roman, Arial, and Calibri, or search 200+ Google Fonts.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Set your font size",
        text: "Enter a font size between 6pt and 72pt. Common academic sizes are 11pt and 12pt.",
        position: 3,
      },
      {
        "@type": "HowToStep",
        name: "Select line spacing",
        text: "Choose single (1.0), 1.15, 1.5, or double (2.0) spacing. Double spacing is standard for academic papers.",
        position: 4,
      },
      {
        "@type": "HowToStep",
        name: "Get your result",
        text: "The calculator instantly shows the estimated number of pages, along with reading time, paragraph count, and sentence count.",
        position: 5,
      },
    ],
    tool: {
      "@type": "HowToTool",
      name: "Word to Pages Calculator",
    },
    totalTime: "PT1M",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Word to Pages",
    url: "https://wordtopages.com",
    logo: "https://wordtopages.com/og-image.png",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
