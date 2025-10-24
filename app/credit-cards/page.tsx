"use client";

import { BlogLayout } from "@/components/mdx/blog-layout"; // Assuming BlogLayout is suitable
import { FeaturedPostCard } from "@/components/ui/featured-post-card"; // Reusing card component
import { useState, useEffect, useMemo } from "react"; // Keep state hooks for consistency, though filtering is static now
import { sortPostsByDate } from "@/lib/utils/date-utils";

// Define the structure for each post item (can be imported if shared)
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string;
  type?: string; // Keep type if used by FeaturedPostCard
}

export default function CreditCardsArchivePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Hardcoded list of credit card content (copied from financial-solutions/page.tsx)
  const creditCardsContent: PostItem[] = [
    {
      title: "SoFi Credit Card",
      slug: "sofi-credit-card",
      description:
        "Earn unlimited 2% cash back rewards on all purchases with no annual fee. Enjoy Mastercard World Elite benefits, 3% cash back on travel, cell phone protection, and no foreign transaction fees.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/sofi-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Varo Believe Card",
      slug: "varo-believe-card",
      description:
        "Revolutionize credit building with no security deposit, 0% APR, and no annual fees. See an average 40+ point credit score increase in just 3 months with automatic payment management.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/varo-believe-card-benefits.webp",
      date: "24 October 2025",
      type: "fintech",
    },
    {
      title: "Chime Credit Builder Visa Secured Card",
      slug: "chime-credit-builder-visa-secured-card",
      description:
        "Build credit with no annual fees, no interest, and no credit check. Earn 1.5% cash back on rotating categories with qualifying direct deposit. Average credit score increase of 30 points after 8 months.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/chime-credit-builder-visa-secured-card.webp",
      date: "24 October 2025",
      type: "fintech",
    },
    {
      title: "Lloyds Bank Credit Card",
      slug: "lloyds-bank-credit-card",
      description:
        "Explore the Lloyds Bank Credit Card with competitive rates, no annual fees, and Everyday Offers cashback program for existing Lloyds customers.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719906900-top_prestamos-y-tarjetas-uk_v1-16.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "NatWest Credit Card",
      slug: "natwest-credit-card",
      description:
        "Discover the NatWest Credit Card with MyRewards program, mobile banking integration, and flexible payment options for everyday spending.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644866-top_prestamos-y-tarjetas-uk_v1_mesa-de-trabajo-1-copia.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Santander US Credit Card",
      slug: "santander-uk-credit-card",
      description:
        "Learn about the Santander US Credit Card with All in One cashback, no foreign transaction fees, and balance transfer options for smart financial management.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644935-top_prestamos-y-tarjetas-uk_v1-03.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "TSB Credit Card",
      slug: "tsb-credit-card",
      description:
        "Explore the TSB Credit Card with everyday value, low fees, and seamless integration with TSB's mobile and online banking platforms.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645155-top_prestamos-y-tarjetas-uk_v1-06.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Virgin Money Credit Card",
      slug: "virgin-money-credit-card",
      description:
        "Discover the Virgin Money Credit Card with lifestyle-focused rewards, Virgin Points, and exclusive offers across the Virgin Group ecosystem.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645561-top_prestamos-y-tarjetas-uk_v1-08.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Halifax World Elite MasterCard",
      slug: "halifax-world-elite-mastercard",
      description:
        "Explore the Halifax World Elite MasterCard, offering premium travel benefits, comprehensive insurance, and exclusive rewards.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719906760-top_prestamos-y-tarjetas-uk_v1-14.webp", // Placeholder image
      date: "4 April 2025",
      type: "traditional",
    },
    // Added Barclaycard Avios Plus as it's a key featured card
    {
      title: "Barclaycard Avios Plus Credit Card",
      slug: "barclaycard-avios-plus",
      description:
        "Discover why the Barclaycard Avios Plus Credit Card has become one of the most popular options among those looking for a credit card with excellent benefits and favourable conditions.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "4 April 2025", // Assuming date
      type: "travel", // Or rewards
    },
    {
      title: "Monzo Credit Card",
      slug: "monzo-credit-card",
      description:
        "Learn about the Monzo Credit Card with real-time spending notifications, smart budgeting tools, and seamless integration with Monzo's digital banking services.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907302-top_prestamos-y-tarjetas-uk_v1-18.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    {
      title: "Revolut Credit Card",
      slug: "revolut-credit-card",
      description:
        "Explore the Revolut Credit Card with multi-currency capabilities, competitive exchange rates, and real-time control for modern international lifestyles.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645626-top_prestamos-y-tarjetas-uk_v1-10.webp",
      date: "2 April 2025",
      type: "fintech",
    },
    {
      title: "Starling Bank Credit Card",
      slug: "starling-bank-credit-card",
      description:
        "Discover the Starling Bank Credit Card with transparent pricing, ethical banking practices, and advanced digital features for modern financial management.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907598-top_prestamos-y-tarjetas-uk_v1-20.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    {
      title: "Curve Credit Card",
      slug: "curve-credit-card",
      description:
        "Learn about the innovative Curve Card that consolidates all your existing cards into a single smart card with time-travel functionality and enhanced rewards.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.webp",
      date: "2 April 2025",
      type: "fintech",
    },
  ];

  // Sort posts by date (newest first)
  const creditCardsContentSorted = useMemo(
    () => sortPostsByDate(creditCardsContent),
    [],
  );

  // No filtering needed, just display the sorted credit card content
  const filteredPosts = creditCardsContentSorted;

  // Avoid rendering until client-side code is running
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* Basic loading skeleton */}
        <div className="animate-pulse bg-gray-200 rounded-xl p-8 w-full max-w-4xl">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-40 bg-gray-300 rounded"></div>
            <div className="h-40 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const pageContent = (
    <div>
      <h1 className="text-4xl font-bold mb-6">US Credit Card Solutions</h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explore detailed guides and reviews of the best credit cards available
        in the US. Find the right card based on rewards, fees, and your
        financial needs.
      </p>

      {/* Grid of credit card posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post: PostItem) => (
          <div
            key={post.slug}
            className="relative"
            style={{ position: "relative" }} // Needed for FeaturedPostCard image positioning
          >
            <FeaturedPostCard
              title={post.title}
              description={post.description}
              image={post.image}
              // Posts are located under /financial-solutions/
              slug={post.slug}
              category="Credit Cards" // Static category for this page
              categorySlug="/financial-solutions" // Base path for these posts
              date={post.date}
              type={post.type}
              showBadge={true} // Show type badge if desired
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "US Credit Cards: Reviews & Guides | KardTrust",
        description:
          "Compare the best US credit cards. Find reviews, guides, and comparisons for rewards, cashback, travel, and low-interest cards.",
      }}
    >
      {pageContent}
    </BlogLayout>
  );
}
