"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { useState, useEffect, useMemo } from "react";
import { sortPostsByDate } from "@/lib/utils/date-utils";

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
  const allLoansContent = useMemo(
    () => [
      // Personal Loans (Traditional Banks)
      {
        title: "HSBC Personal Loan",
        slug: "hsbc-personal-loan",
        description:
          "Discover HSBC Personal Loans with competitive rates, flexible repayment terms, and quick application process.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
        date: "4 April 2025",
        type: "personal",
      },
      {
        title: "Barclays Personal Loan",
        slug: "barclays-personal-loan",
        description:
          "Explore Barclays Personal Loans with competitive rates, flexible terms, and a streamlined application process.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136012-fotosprestamo-barclays2uk.webp",
        date: "4 April 2025",
        type: "personal",
      },
      {
        title: "Lloyds Bank Personal Loan",
        slug: "lloyds-bank-personal-loan",
        description:
          "Explore Lloyds Bank Personal Loans with competitive rates, flexible repayment options, and trusted service.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136057-fotosprestamo-lloyds1uk.webp",
        date: "4 April 2025",
        type: "personal",
      },
      {
        title: "NatWest Personal Loan",
        slug: "natwest-personal-loan",
        description:
          "Explore NatWest Personal Loans with competitive rates, flexible repayment terms, and a straightforward application process.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136156-fotosprestamo-nawest1uk.webp",
        date: "4 April 2025",
        type: "personal",
      },
      {
        title: "Santander US Personal Loan",
        slug: "santander-uk-personal-loan",
        description:
          "Explore Santander US Personal Loans with competitive rates, flexible repayment terms, and potential benefits for 1|2|3 World customers.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136214-fotosprestamo-santander1uk.webp",
        date: "4 April 2025",
        type: "personal",
      },
      {
        title: "TSB Personal Loan",
        slug: "tsb-personal-loan",
        description:
          "Explore TSB Personal Loans with competitive rates, flexible repayment options, and a focus on clear, simple banking solutions.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136271-fotosprestamo-tbs1uk.webp",
        date: "4 April 2025",
        type: "personal",
      },
      {
        title: "Virgin Money Personal Loan",
        slug: "virgin-money-personal-loan",
        description:
          "Explore Virgin Money Personal Loans with competitive rates, flexible terms, and potential benefits linked to the Virgin Red rewards program.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136330-fotosprestamo-virginmoney1uk.webp",
        date: "4 April 2025",
        type: "personal",
      },
      {
        title: "Halifax Personal Loan",
        slug: "halifax-personal-loan",
        description:
          "Explore Halifax Personal Loans with competitive rates, flexible repayment options, and the trusted service of a major US bank.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136403-fotosprestamo-halifax1uk.webp",
        date: "4 April 2025",
        type: "personal",
      },
      {
        title: "Nationwide Personal Loan",
        slug: "nationwide-personal-loan",
        description:
          "Explore Nationwide Personal Loans with competitive rates, flexible terms, and benefits for existing members.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136476-fotosprestamo-nationwide1uk.webp",
        date: "4 April 2025",
        type: "personal",
      },
      // Personal Loans (Fintech/Neobank)
      {
        title: "Revolut Personal Loan",
        slug: "revolut-personal-loan",
        description:
          "Explore Revolut Personal Loans offering quick decisions, flexible terms, and seamless management through the Revolut app.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136529-fotosprestamo-revoult1uk.webp",
        date: "4 April 2025",
        type: "fintech", // Could also be 'personal' depending on desired filter logic
      },
      {
        title: "Monzo Personal Loan",
        slug: "monzo-personal-loan",
        description:
          "Explore Monzo Personal Loans offering quick decisions, clear terms, and seamless management through the Monzo app.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136607-fotosprestamo-monzo2uk.webp",
        date: "4 April 2025",
        type: "neobank", // Could also be 'personal'
      },
      {
        title: "Starling Bank Personal Loan",
        slug: "starling-bank-personal-loan",
        description:
          "Explore Starling Bank Personal Loans offering competitive rates, clear terms, and seamless management via the Starling app.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136704-fotosprestamo-starlinkbanck1uk.webp",
        date: "4 April 2025",
        type: "neobank", // Could also be 'personal'
      },
      // SME Fintech Loans
      {
        title: "Funding Circle Business Loan",
        slug: "funding-circle-personal-loan", // Keep slug as created
        description:
          "Explore Funding Circle's business loans offering fast, flexible financing solutions designed specifically for US SMEs.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
        date: "4 April 2025",
        type: "sme_fintech",
      },
      {
        title: "Funding Options Marketplace",
        slug: "funding-options-personal-loan", // Keep slug as created
        description:
          "Explore Funding Options, a leading US platform connecting SMEs with a wide range of business finance solutions.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718138018-fotosprestamo-fundingoption1uk.webp",
        date: "4 April 2025",
        type: "marketplace", // Specific type for marketplaces
      },
      {
        title: "iwoca Flexi-Loan",
        slug: "iwoca-personal-loan", // Keep slug as created
        description:
          "Explore iwoca's Flexi-Loan, offering fast, flexible working capital solutions designed for US SMEs.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718137033-fotosprestamo-iwoca1uk.webp",
        date: "4 April 2025",
        type: "sme_fintech",
      },
      {
        title: "MarketFinance Business Finance",
        slug: "marketfinance-personal-loan", // Keep slug as created
        description:
          "Explore MarketFinance's solutions for US SMEs, including fast business loans and flexible invoice finance.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718137315-fotosprestamo-fundingchange2uk.webp",
        date: "4 April 2025",
        type: "sme_fintech",
      },
      {
        title: "Funding Xchange Platform",
        slug: "funding-xchange-personal-loan", // Keep slug as created
        description:
          "Explore Funding Xchange, a smart platform helping US SMEs compare and access business finance options.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718136896-fotosprestamo-fundingchange1uk.webp",
        date: "4 April 2025",
        type: "marketplace", // Specific type for marketplaces
      },
      {
        title: "Capify Business Finance",
        slug: "capify-personal-loan", // Keep slug as created
        description:
          "Explore Capify's financing solutions for US SMEs, including Merchant Cash Advances and Business Loans.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718137374-fotosprestamo-capify1uk.webp",
        date: "4 April 2025",
        type: "sme_fintech",
      },
      {
        title: "Fleximize Business Loans",
        slug: "fleximize-personal-loan", // Keep slug as created
        description:
          "Explore Fleximize's flexible business loans (Flexiloan & Flexiloan Lite) offering tailored repayment options for US SMEs.",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718137416-fotosprestamo-fleximize1uk.webp",
        date: "4 April 2025",
        type: "sme_fintech",
      },
    ],
    [],
  );

  // List of credit card content with types
  const creditCardsContent = useMemo(
    () => [
      {
        title: "Yotta Credit Card",
        slug: "yotta-credit-card",
        description:
          "Win up to 100% cash back on every purchase with Lucky Swipe sweepstakes. Every transaction enters you for prizes up to $5,000. Better-than-average odds (1 in 75 with direct deposit), no complex redemption, and automatic prize credits within 30 days. Issued via Synapse Credit with Evolve Bank & Trust.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/yotta-credit-card-lucky-swipe.webp",
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

      <p className="text-lg text-gray-700 mb-8 leading-tight text-left sm:text-left">
        Find detailed information about the best credit cards available in the
        UK, requirements for applying, and comprehensive guides to help you
        choose the best option based on your financial needs.
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
            className={`px-6 py-3 font-medium text-md transition-colors focus:outline-none ${
              activeCategory === key
                ? "text-blue-600 border-b-2 border-blue-600"
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
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCreditCardType === key
                    ? "bg-blue-600 text-white"
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
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeLoanType === key
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
