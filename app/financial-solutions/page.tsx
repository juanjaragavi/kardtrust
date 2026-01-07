"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { useState, useEffect, useMemo } from "react";
import { sortPostsByDate } from "@/lib/utils/date-utils";

type ContentItem = {
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
  type: string;
};

export default function FinancialSolutionsPage() {
  // Category definitions
  const categories = {
    creditCards: "Credit Cards",
    loans: "Loans",
  };

  // Content type definitions
  const creditCardTypes = {
    all: "All",
    traditional: "Traditional Banks",
    neobank: "Neobanks",
    fintech: "Fintech Solutions",
  };

  // Loan type definitions
  const loanTypes = {
    all: "All",
    personal: "Personal Loans",
    sme_fintech: "SME Fintech",
    neobank: "Neobank Loans",
    marketplace: "Marketplaces",
    guide: "Guides",
  };

  // State for active category and filters with more reliable client-side initialization
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState("creditCards");
  const [activeCreditCardType, setActiveCreditCardType] = useState("all");
  const [activeLoanType, setActiveLoanType] = useState("all");

  // Force client-side state initialization to ensure React hydration
  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);

    // Force re-render after mount to ensure hydration issues are resolved
    const timer = setTimeout(() => {
      setActiveCategory("creditCards");
      setActiveCreditCardType("all");
      setActiveLoanType("all");
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // List of all loan content with types
  // IMPORTANT: Define data arrays BEFORE any conditional returns to avoid hook order issues
  const allLoansContent = useMemo<ContentItem[]>(
    () => [
      {
        title: "CIT Bank Home Loans",
        slug: "cit-bank-home-loans-benefits",
        description:
          "Discover CIT Bank Home Loans with competitive rates, flexible options, and expert guidance. Get pre-approved fast and access fixed-rate, adjustable-rate, and jumbo loans for your dream home.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/12/CitiBL1-820x429.png",
        date: "28 October 2025",
        type: "guide",
      },
    ],
    [],
  );

  // Hardcoded list of all credit card content with types
  const creditCardsContent = useMemo<ContentItem[]>(
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
        title: "Amazon Rewards Visa Credit Card",
        slug: "amazon-rewards-visa-credit-card-benefits",
        description:
          "Make the most of your purchases with the Amazon Rewards Visa Credit Card. Earn cash rewards, discounts on Amazon, and much more.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/09/Amazon1.webp",
        date: "28 October 2025",
        type: "traditional",
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
        title: "Capital One Quicksilver Student Credit Card",
        slug: "capital-one-quicksilver-student-credit-card-benefits",
        description:
          "Discover the student-friendly features and competitive rewards of the Capital One Quicksilver Student Credit Card. Earn unlimited cash back with no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/09/Capitalone2.webp",
        date: "28 October 2025",
        type: "traditional",
      },
      {
        title: "Capital One Savor Rewards Credit Card",
        slug: "capital-one-savor-rewards-credit-card-benefits",
        description:
          "Explore the Capital One Savor Rewards Credit Card benefits, offering unlimited 3% cash back on dining, entertainment, and more.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-14-1.webp",
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
        title: "Citi Double Cash® Card",
        slug: "citi-double-cash-credit-card-benefits",
        description:
          "Maximize your cash back effortlessly with the Citi Double Cash Credit Card. Earn 2% on every purchase—1% when you buy and 1% when you pay—with no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-2.webp",
        date: "28 October 2025",
        type: "traditional",
      },
      {
        title: "Citi Simplicity® Card",
        slug: "citi-simplicity-card-benefits",
        description:
          "Simplify your credit management with the Citi Simplicity Card. No late fees, no penalty APR, and 0% intro APR on purchases and balance transfers.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-12-1-1024x536.webp",
        date: "28 October 2025",
        type: "traditional",
      },
      {
        title: "Discover it® Student Chrome",
        slug: "discover-it-student-chrome-credit-card-benefits",
        description:
          "Discover the key benefits of the Discover it Student Chrome Credit Card: 2% cashback at restaurants and gas stations, no annual fee, and double rewards in your first year.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/Discoverst1.webp",
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
        title: "Wells Fargo Autograph℠ Card",
        slug: "wells-fargo-autograph-card-benefits",
        description:
          "Explore the Wells Fargo Autograph Card benefits to earn 3X points on top everyday categories, access premium travel protections, and enjoy no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-16-1024x536.webp",
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
        title: "Chase Freedom Unlimited® Credit Card",
        slug: "chase-freedom-unlimited-credit-card-benefits",
        description:
          "Turn every dollar you spend into unlimited rewards and effortless savings with the Chase Freedom Unlimited Credit Card. Enjoy unlimited cashback, 0% intro APR, and no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-11.webp",
        date: "28 October 2025",
        type: "traditional",
      },
      {
        title: "DoorDash Rewards Mastercard®",
        slug: "doordash-rewards-mastercard-benefits",
        description:
          "Discover the benefits of the DoorDash Rewards Mastercard: earn high cashback on DoorDash orders and dining, enjoy no annual fee, and access exclusive promotions.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-4.webp",
        date: "28 October 2025",
        type: "traditional",
      },
      {
        title: "First Digital NextGen Mastercard®",
        slug: "first-digital-nextgen-mastercard-benefits",
        description:
          "Discover the benefits of the First Digital NextGen Mastercard: instant approval, no credit check, low fees, and full digital management.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-15.webp",
        date: "28 October 2025",
        type: "fintech",
      },
      {
        title: "TD FlexPay Credit Card",
        slug: "td-flexpay-credit-card-benefits",
        description:
          "See how the TD FlexPay Credit Card delivers flexibility with 0% intro APR on balance transfers, no annual fee, and cashback on everyday purchases.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/Flexpay1.webp",
        date: "28 October 2025",
        type: "traditional",
      },
      {
        title: "Titanium Rewards Visa Signature® Credit Card",
        slug: "titanium-rewards-visa-signature-credit-card-benefits",
        description:
          "Maximize everyday spending with the Titanium Rewards Visa Signature Credit Card. Earn 5X points on gas and groceries and enjoy premium benefits with no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-1-2.webp",
        date: "28 October 2025",
        type: "traditional",
      },
      {
        title: "U.S. Bank Cash+® Visa Signature® Card",
        slug: "us-bank-cash-plus-visa-signature-card-benefits",
        description:
          "Customize your rewards with the U.S. Bank Cash+ Visa Signature Card: earn up to 5% cashback in your chosen categories, 2% on everyday essentials, and pay no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/Usbanck1.webp",
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
          "Build or rebuild your credit with no security deposit required. Proactive credit line increases, transparent pricing, and mobile app management. 29.99%-35.99% APR, $39-$75 annual membership fee, $300-$3,000 credit limits. Issued by WebBank with Mastercard acceptance.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/avant-credit-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Klarna Card",
        slug: "klarna-card",
        description:
          "Switch instantly between debit mode and pay later plans. No annual fees, no credit impact to apply, earn cashback with membership plans (0.5%-1%), and enjoy flexible financing with 0%-35.99% APR. Issued by WebBank with up to 3.02% APY on balance.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/klarna-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Affirm Card",
        slug: "affirm-card",
        description:
          "Pay over time with flexible payment plans. Visa debit card with no annual fees, no hidden charges, 0%-36% APR payment plans, and no credit impact to apply. Split purchases after checkout or plan ahead with transparent terms. Issued by Evolve Bank & Trust or Stride Bank.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/affirm-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Step Visa Card",
        slug: "step-visa-card",
        description:
          "Build credit for free starting at age 13 with no credit score required, no fees, and 0% APR. Secured card reports to all 3 bureaus with average 57-point score increase. Perfect for teens and young adults building credit history.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/step-visa-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Current Build Visa Signature® Credit Card",
        slug: "visa-signature-us-current-build-credit-card-benefits",
        description:
          "Discover the benefits of the Current Build Visa Signature Credit Card. Build credit with no annual fees, flexible rewards, and no hidden charges from this modern neobank.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/09/Curren1.webp",
        date: "28 October 2025",
        type: "neobank",
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
          "Build credit with no security deposit or credit history required. Get up to 10% cash back, automatic limit increases, and approval even if denied elsewhere. Choose from Tilt Essentials, Motion, or Engage cards with variable APR 28.74%-33.74%.",
        image: "https://media.topfinanzas.com/images/kardtrust/tilt-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Tomo Credit Card",
        slug: "tomo-credit-card-benefits",
        description:
          "Discover the unique benefits of the Tomo Credit Card: no credit history required, flexible cashback rewards, and zero annual fees to jumpstart your credit journey.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/Tomo1.webp",
        date: "28 October 2025",
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
    ],
    [],
  );

  // Sort all content by date (newest first)
  const creditCardsContentSorted = useMemo(
    () => sortPostsByDate(creditCardsContent),
    [creditCardsContent],
  );

  const allLoansContentSorted = useMemo(
    () => sortPostsByDate(allLoansContent),
    [allLoansContent],
  );

  // Filter content based on selected category and type
  const filteredCreditCards =
    activeCreditCardType === "all"
      ? creditCardsContentSorted
      : creditCardsContentSorted.filter(
        (card) => card.type === activeCreditCardType,
      );

  const filteredLoans =
    activeLoanType === "all"
      ? allLoansContentSorted
      : allLoansContentSorted.filter((loan) => loan.type === activeLoanType);

  // Custom content for this category page
  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-left sm:text-left">
        Financial Solutions
      </h1>

      <div id="square02" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

      <p className="text-lg text-gray-700 mb-8 leading-tight text-left sm:text-left">
        Find detailed information about top United States credit cards, the
        requirements for applying, and comprehensive guides to help you choose
        the best option based on your financial needs.
      </p>

      {/* Main category selector */}
      <div className="flex mb-8 border-b border-gray-200">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => {
              setActiveCategory(key);
              // Reset filters when changing main categories
              setActiveCreditCardType("all");
              setActiveLoanType("all");
            }}
            className={`px-6 py-3 font-medium text-md transition-colors focus:outline-none ${activeCategory === key
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-800"
              }`}
          >
            {value}
          </button>
        ))}
      </div>

      {activeCategory === "creditCards" && (
        <div className="mb-8">
          {/* Subcategory filter for credit cards */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(creditCardTypes).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveCreditCardType(key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeCreditCardType === key
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Credit cards grid with fixed positioning to accommodate Image components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCreditCards.map((post) => (
              <div
                key={post.slug}
                className="relative"
                style={{ position: "relative" }}
              >
                <FeaturedPostCard
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  slug={post.slug}
                  category="Financial Solutions"
                  categorySlug="/financial-solutions"
                  date={post.date}
                  type={post.type}
                  showBadge={true}
                  priority={
                    post.type === "traditional" &&
                    activeCreditCardType === "traditional"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {activeCategory === "loans" && (
        <div className="mb-8">
          {/* Subcategory filter for loans */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(loanTypes).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveLoanType(key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeLoanType === key
                    ? "bg-green-600 text-white" // Use a different color for loan filters
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Loans grid with fixed positioning for Image components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLoans.map((post) => (
              <div
                key={post.slug}
                className="relative"
                style={{ position: "relative" }}
              >
                <FeaturedPostCard
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  slug={post.slug}
                  category="Financial Solutions"
                  categorySlug="/financial-solutions"
                  date={post.date}
                  type={post.type}
                  showBadge={true}
                  priority={post.type === "guide" && activeLoanType === "guide"}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA section */}
      <div className="bg-red-50 p-8 rounded-xl shadow-sm mb-10">
        <h2 className="text-2xl font-bold mb-4 text-left sm:text-left">
          Looking for the ideal card for you?
        </h2>
        <p className="text-gray-700 mb-6 text-left sm:text-left">
          Use our credit card recommender and find the option that best suits
          your financial profile and specific needs.
        </p>
        <Link
          href="/credit-card-recommender-p1"
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 inline-block transition-colors rounded-full"
        >
          Go to Recommender
        </Link>
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Financial Solutions - KardTrust",
        description:
          "Discover information about the best credit cards, requirements and comprehensive guides to choose the right option for your financial needs.",
      }}
    >
      {!isClient ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse bg-gray-200 rounded-xl p-8">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      ) : (
        content
      )}
    </BlogLayout>
  );
}
