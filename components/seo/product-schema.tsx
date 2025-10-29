/**
 * Financial Product Structured Data Component
 * Generates JSON-LD schema for credit cards and financial products
 */

import Script from "next/script";

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  brand?: string;
  url: string;
  category?: string;
  features?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function ProductSchema({
  name,
  description,
  image,
  brand = "Various Issuers",
  url,
  category = "FinancialProduct",
  features = [],
  aggregateRating,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": category,
    name: name,
    description: description,
    image: image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    url: url,
    provider: {
      "@type": "Organization",
      name: "KardTrust",
      url: "https://kardtrust.com",
    },
    ...(features.length > 0 && {
      additionalProperty: features.map((feature) => ({
        "@type": "PropertyValue",
        name: "Feature",
        value: feature,
      })),
    }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
      },
    }),
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
