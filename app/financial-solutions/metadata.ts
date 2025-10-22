import type { Metadata } from "next";

// Metadata specifically for the /financial-solutions landing page
export const metadata: Metadata = {
  title: "US Financial Solutions: Credit Cards & Loans | KardTrust",
  description:
    "Explore comprehensive guides and comparisons of the best US credit cards and personal loans. Find requirements, benefits, and apply for the right financial solution.",
  keywords:
    "US financial solutions, credit cards US, personal loans US, compare credit cards, compare loans, Chase, Capital One, American Express, Discover, Citi, best US finance",
  openGraph: {
    title: "US Financial Solutions: Credit Cards & Loans | KardTrust",
    description:
      "Your guide to the top credit cards and personal loans available in the US. Compare options and find the best fit for your needs.",
    images: [
      {
        // Using a relevant UK product image
        url: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
        width: 1200, // Adjust if necessary
        height: 630, // Adjust if necessary
        alt: "US Financial Solutions from KardTrust",
      },
    ],
    type: "website",
    url: "https://kardtrust.com/financial-solutions", // Assuming this is the correct URL
  },
  twitter: {
    card: "summary_large_image",
    title: "US Financial Solutions: Credit Cards & Loans | KardTrust",
    description:
      "Your guide to the top credit cards and personal loans available in the US. Compare options and find the best fit for your needs.",
    images: ["https://media.topfinanzas.com/images/barclaycard-avios-plus.webp"],
  },
};
