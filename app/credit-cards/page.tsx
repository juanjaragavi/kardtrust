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
  const creditCardsContent = useMemo(
    () => [
      {
        title: "Revolut Credit Card",
        slug: "revolut-credit-card",
        description:
          "Discover the Revolut Credit Card offering customizable spending controls, virtual cards with regenerating details, real-time fraud protection, and exclusive Metal card benefits. Available on Standard, Premium, and Metal plans.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/revolut-credit-card.webp",
        date: "14 November 2025",
        type: "neobank",
      },
      {
        title: "Blue Cash Preferred® Card from American Express",
        slug: "blue-cash-preferred-card-from-american-express",
        description:
          "Earn 6% cash back at U.S. supermarkets (up to $6,000/year, then 1%), 6% on select U.S. streaming subscriptions, 3% at U.S. gas stations and on transit, and 1% on all other purchases. Welcome bonus: $250 statement credit after $3,000 spend in 6 months. $0 intro annual fee for first year, then $95. 19.24%-29.99% variable APR.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/blue-cash-preferred-card-from-american-express.webp",
        date: "28 October 2025",
        type: "traditional",
      },
      {
        title: "Citi Custom Cash® Card",
        slug: "citi-custom-cash-card",
        description:
          "Earn automatic 5% cash back on up to $500 spent in your highest eligible spending category each billing cycle—no activation required. Eligible categories: restaurants, gas, grocery, select travel, transit, streaming, drugstores, home improvement, fitness, live entertainment. Welcome bonus: $200 after $1,500 spend in 6 months. 0% intro APR for 18 months on balance transfers. 17.99%-27.99% variable APR, no annual fee.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/citi-custom-cash-card.webp",
        date: "28 October 2025",
        type: "traditional",
      },
      {
        title: "Wells Fargo Active Cash® Card",
        slug: "wells-fargo-active-cash-card",
        description:
          "Earn unlimited 2% cash back on all purchases with no categories to track or activate. Welcome bonus: $200 after $500 spend in 3 months. 0% intro APR for 12 months on purchases and balance transfers. 18.99%-24.99%-28.99% variable APR, no annual fee. Includes Visa Signature benefits with cellular protection, auto rental waiver, and concierge services.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/wells-fargo-active-cash-card.webp",
        date: "28 October 2025",
        type: "traditional",
      },
      {
        title: "Chase Freedom Flex℠",
        slug: "chase-freedom-flex",
        description:
          "Earn 5% cash back on up to $1,500 in combined purchases each quarter in rotating bonus categories you activate, plus 5% on travel through Chase Travel℠, 3% on dining and drugstores, and 1% on all other purchases. Welcome bonus: $200 after $500 spend in 3 months. 0% intro APR for 15 months on purchases and balance transfers. 18.74%-28.24% variable APR, no annual fee.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/chase-freedom-flex.webp",
        date: "28 October 2025",
        type: "traditional",
      },
      {
        title: "Bank of America® Unlimited Cash Rewards",
        slug: "bank-of-america-unlimited-cash-rewards",
        description:
          "Earn unlimited 1.5% cash back on all purchases, receive a $200 online bonus after $1,000 spend in 90 days, enjoy 0% intro APR for 18 billing cycles on purchases and balance transfers, and boost rewards up to 2.625% with Preferred Rewards. No annual fee, 19.24%-29.24% variable APR.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/bank-of-america-unlimited-cash-rewards.webp",
        date: "27 October 2025",
        type: "traditional",
      },
      {
        title: "Chase Sapphire Reserve®",
        slug: "chase-sapphire-reserve",
        description:
          "Earn 3X points on travel & dining, receive a $300 annual travel credit, enjoy Priority Pass Select lounge access at 1,300+ airports, and benefit from comprehensive travel insurance. Welcome bonus: 60,000 points after $4,000 spend in 3 months. 21.49%-28.49% variable APR, $550 annual fee.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/chase-sapphire-reserve.webp",
        date: "27 October 2025",
        type: "traditional",
      },
      {
        title: "Self Credit Builder Account + Visa Card",
        slug: "self-credit-builder-account-visa-card",
        description:
          "Pair Self's Credit Builder Account with the secured Visa card to report payments to all three bureaus. Follow a $35 per month plan at 15.69% APR, build a $100 refundable security interest, and access a $0 intro annual fee with a 27.99% variable APR after activation.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/self-credit-builder-account-visa-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "SIREN Card",
        slug: "siren-card",
        description:
          "Exclusive to Starbucks partners: hybrid debit/credit card powered by cred.ai that builds credit automatically with guaranteed zero fees and zero interest. Get paid up to 2 days early, access 55K+ free ATMs, premium metal card, 24/7 support. Issued by WSFS Bank, Member FDIC. No FICO score required to apply.",
        image: "https://media.topfinanzas.com/images/kardtrust/siren-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Yotta Credit Card",
        slug: "yotta-credit-card",
        description:
          "Win up to 100% cash back on every purchase with Lucky Swipe sweepstakes. Every transaction enters you for prizes up to $5,000. Better-than-average odds (1 in 75 with direct deposit), no complex redemption, and automatic prize credits within 30 days. Issued via Synapse Credit with Evolve Bank & Trust.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/yotta-credit-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Mission Lane Visa Credit Card",
        slug: "mission-lane-visa-credit-card",
        description:
          "Build or rebuild credit with three card options designed for fair-to-good credit. Starting credit lines from $300-$3,000, 19.99%-33.99% variable APR, $0-$59 annual fee. Silver Line offers 1.5% cash back. No security deposit on Green Line and Silver Line. Issued by TAB Bank or WebBank.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/mission-lane-visa-credit-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Avant Credit Card",
        slug: "avant-credit-card",
        description:
          "Build or rebuild your credit with no security deposit required. Proactive credit line increases, transparent pricing, and mobile app management. 29.99%-35.99% APR, $39-$75 annual fee, $300-$3,000 credit limits. Issued by WebBank with Mastercard acceptance.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/avant-credit-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Klarna Card",
        slug: "klarna-card",
        description:
          "Switch instantly between debit and pay later modes. No annual fees, no credit impact to apply, earn cashback with membership plans, and flexible financing with 0%-35.99% APR. Issued by WebBank with up to 3.02% APY on balance.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/klarna-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Affirm Card",
        slug: "affirm-card",
        description:
          "Pay over time with flexible payment plans. Visa debit card with no annual fees, no hidden charges, 0%-36% APR payment plans, and no credit impact to apply. Split purchases after checkout or plan ahead. Issued by Evolve Bank & Trust or Stride Bank.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/affirm-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Step Visa Card",
        slug: "step-visa-card",
        description:
          "Build credit for free starting at age 13 with no credit score required, no fees, and 0% APR. Secured card reports to all 3 bureaus with average 57-point score increase. Perfect for teens building credit.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/step-visa-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Robinhood Gold Card",
        slug: "robinhood-gold-card",
        description:
          "Earn 3% cash back on all purchases and 5% on travel with no annual fee (requires Robinhood Gold membership). Enjoy virtual cards, family card sharing, Visa Signature benefits, and seamless investment integration with 29.99%-32.99% APR.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/robinhood-gold-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Tilt Card",
        slug: "tilt-card",
        description:
          "Build credit with no security deposit or credit history required. Get up to 10% cash back, automatic limit increases, and approval even if denied elsewhere with variable APR 28.74%-33.74%.",
        image: "https://media.topfinanzas.com/images/kardtrust/tilt-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Upgrade OneCard",
        slug: "upgrade-credit-card",
        description:
          "Discover the Upgrade OneCard offering flexible payment options with pay now or pay later features, no annual fee, 14.99%-29.99% APR, and the convenience of a credit card with the predictability of a personal loan.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/upgrade-credit-card.webp",
        date: "24 October 2025",
        type: "fintech",
      },
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
          "https://media.topfinanzas.com/images/kardtrust/varo-believe-card.webp",
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
      // Additional US credit cards can be added here
    ],
    [],
  );

  // Sort posts by date (newest first)
  const creditCardsContentSorted = useMemo(
    () => sortPostsByDate(creditCardsContent),
    [creditCardsContent],
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
