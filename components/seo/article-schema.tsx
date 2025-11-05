/**
 * Article Structured Data Component
 * Generates JSON-LD schema for blog articles to improve SEO and rich snippet eligibility
 */

import Script from "next/script";

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
  category?: string;
  url: string;
  keywords?: string[];
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = {
    name: "KardTrust Editorial Team",
    url: "https://kardtrust.com/about-us",
  },
  category,
  url,
  keywords = [],
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Organization",
      name: "KardTrust",
      url: "https://kardtrust.com",
      logo: {
        "@type": "ImageObject",
        url: "https://media.topfinanzas.com/images/kardtrust/kardtrust-logo-dark.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(category && { articleSection: category }),
    ...(keywords.length > 0 && { keywords: keywords.join(", ") }),
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
