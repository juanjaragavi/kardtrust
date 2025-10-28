"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/layout/hero-section";
import { FiftyFiftySection } from "@/components/layout/fifty-fifty-section";
import { FeaturedPostsGrid } from "@/components/ui/featured-posts-grid";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Dynamically import components that aren't needed for the initial render
const DynamicPagination = dynamic(
  () => import("@/components/ui/pagination").then((mod) => mod.Pagination),
  {
    ssr: false,
    loading: () => <div className="flex justify-center mt-8 h-10"></div>,
  },
);

// Interface for post frontmatter
interface PostFrontmatter {
  title: string;
  date?: string; // Made date optional
  categories?: Array<{ name: string; slug: string }>;
  featuredImage?: string;
  description: string;
  excerpt?: string;
  [key: string]: unknown;
}

// Interface for post data, matching the structure used in blog archive
interface PostData {
  slug: string;
  frontmatter: PostFrontmatter;
  category: string; // Added category field
  categoryPath: string;
}

// Helper function to clean titles (copied from blog archive)
const cleanTitle = (title: string): string => {
  // Added safety check for undefined/null title
  if (!title) return "Untitled Post";
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

// --- Hardcoded Post Data (Similar to app/page.tsx) ---
// Using a subset of posts for the homepage, sorted by date descending
const allPosts: PostData[] = [
  {
    slug: "self-credit-builder-account-visa-card",
    frontmatter: {
      title:
        "Self Credit Builder Account + Visa Card: Build Credit with One Ecosystem",
      description:
        "Combine Self's Credit Builder Account and secured Visa card to report to all three bureaus, follow a $35-per-month plan example, and unlock a $100 refundable security deposit.",
      date: "2025-10-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/self-credit-builder-account-visa-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "siren-card",
    frontmatter: {
      title: "SIREN Card: Premium Metal Card with Automatic Credit Building",
      description:
        "Exclusive to Starbucks partners: SIREN Card is a hybrid debit/credit card powered by cred.ai that builds credit automatically while guaranteeing zero fees and zero interest. Get paid up to 2 days early, access 55K+ free ATMs, and enjoy premium metal card benefits.",
      date: "2025-10-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/siren-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "yotta-credit-card",
    frontmatter: {
      title: "Yotta Credit Card: Win Cash Back With Every Purchase",
      description:
        "Discover how the Yotta Credit Card transforms spending into winning opportunities. Every purchase enters you to win up to 100% cash back, with prizes up to $5,000. Learn about Lucky Swipe rewards and better-than-average winning odds.",
      date: "2025-10-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/yotta-credit-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "mission-lane-visa-credit-card",
    frontmatter: {
      title:
        "Mission Lane Visa Credit Card: Build Credit with Fair-to-Good Approval Odds",
      description:
        "Discover the Mission Lane Visa Credit Card designed for building and rebuilding credit. Features 19.99%-33.99% APR, $0-$59 annual fee, credit lines from $300-$3,000, and cash back rewards on select cards. No security deposit required.",
      date: "2025-10-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/mission-lane-visa-credit-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "avant-credit-card",
    frontmatter: {
      title: "Avant Credit Card: Your Path to Healthy Credit Starts Here",
      description:
        "Build or rebuild your credit with the Avant Credit Card. No security deposit required, proactive credit line increases, and transparent pricing. 29.99%-35.99% APR, $39-$75 annual fee, $300-$3,000 credit limits. WebBank issuer.",
      date: "2025-10-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/avant-credit-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "klarna-card",
    frontmatter: {
      title: "Klarna Card: Pay Now or Pay Later Everywhere Visa is Accepted",
      description:
        "Discover the Klarna Card—switch instantly between debit mode and flexible pay later plans. No annual fees, no credit impact to apply, earn cashback with membership plans, and enjoy 0%-35.99% APR on payment plans.",
      date: "2025-10-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/klarna-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "affirm-card",
    frontmatter: {
      title: "Affirm Card: Flexible Payment Plans Without Hidden Fees",
      description:
        "Discover the Affirm Card—a Visa debit card with pay-over-time flexibility. No annual fees, no hidden charges, 0%-36% APR payment plans, and no credit impact to apply. Split purchases after checkout or plan ahead.",
      date: "2025-10-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/affirm-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "revolut-credit-card",
    frontmatter: {
      title: "Revolut Credit Card: Digital-First Banking for Modern Life",
      description:
        "Experience the Revolut Credit Card with multi-currency capabilities, instant virtual cards, advanced security controls, and premium subscription tiers. Choose Revolut Visa Credit Card or Revolut Secured Mastercard for innovative fintech banking.",
      date: "2025-10-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/revolut-credit-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "step-visa-card",
    frontmatter: {
      title: "Step Visa Card: Build Credit for Free Starting at Age 13",
      description:
        "Discover the Step Visa Card—build credit history for free with no credit score required, no fees, and no interest. Perfect for teens 13+ and young adults. Reports to all 3 credit bureaus with an average 57-point score increase.",
      date: "2025-10-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/step-visa-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "robinhood-gold-card",
    frontmatter: {
      title:
        "Robinhood Gold Card: 3% Cash Back on Everything with Premium Benefits",
      description:
        "Discover the Robinhood Gold Card offering 3% cash back on all purchases, 5% back on travel, no annual fee, virtual cards, family card sharing, and Visa Signature benefits. Exclusive to Robinhood Gold members.",
      date: "2025-10-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/robinhood-gold-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "tilt-card",
    frontmatter: {
      title:
        "Tilt Card: Build Credit with Cash Back Rewards and No Security Deposit",
      description:
        "Discover Tilt credit cards offering credit building without security deposits or credit history. Get up to 10% cash back, automatic limit increases, and approval even if denied elsewhere. Choose from Tilt Essentials, Motion, or Engage cards.",
      date: "2025-10-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/tilt-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "upgrade-credit-card",
    frontmatter: {
      title: "Upgrade OneCard: Pay Now or Pay Later Credit Card",
      description:
        "Discover the Upgrade OneCard offering flexible payment options with pay now or pay later features, no annual fee, 14.99%-29.99% APR, and the convenience of a credit card with the predictability of a personal loan.",
      date: "2025-10-24T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/upgrade-credit-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "sofi-credit-card",
    frontmatter: {
      title: "SoFi Credit Card: Unlimited 2% Cash Back on Everything",
      description:
        "Earn unlimited 2% cash back rewards on all purchases with no annual fee. Enjoy Mastercard World Elite benefits, 3% cash back on travel, cell phone protection, and no foreign transaction fees.",
      date: "2025-10-24T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/sofi-credit-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "varo-believe-card",
    frontmatter: {
      title: "Varo Believe Card: Build Credit Without a Security Deposit",
      description:
        "Revolutionize credit building with no security deposit, 0% APR, and no annual fees. See an average 40+ point credit score increase in just 3 months with automatic payment management.",
      date: "2025-10-24T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/varo-believe-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "chime-credit-builder-visa-secured-card",
    frontmatter: {
      title: "Chime Credit Builder: No Fees, No Interest, Build Credit Fast",
      description:
        "Build credit with no annual fees, no interest, and no credit check. Earn 1.5% cash back on rotating categories with qualifying direct deposit. Average credit score increase of 30 points after 8 months.",
      date: "2025-10-24T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/chime-credit-builder-visa-secured-card.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "barclaycard-avios-plus",
    frontmatter: {
      title: "Barclaycard Avios Plus Credit Card: Premium Travel Rewards",
      description:
        "The Barclaycard Avios Plus Credit Card offers premium travel perks...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "hsbc-personal-loan",
    frontmatter: {
      title:
        "HSBC Personal Loan: Flexible Financing from a Global Banking Leader",
      description: "Discover HSBC Personal Loans with competitive rates...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "funding-circle-personal-loan", // Example Loan
    frontmatter: {
      title: "Funding Circle Business Loan",
      description:
        "Explore Funding Circle's business loans offering fast, flexible financing...",
      date: "2025-04-04T00:00:00Z", // Example Date
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      categories: [
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "best-rewards-credit-cards",
    frontmatter: {
      title: "Top Rewards Credit Cards to Maximize Your Spending | KardTrust",
      description: "Discover the best rewards credit cards...",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/Top_Finance_uk_credit_cards.webp", // Placeholder
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "getting-out-of-debt",
    frontmatter: {
      title: "Practical Guide to Getting Out of Debt | KardTrust",
      description: "Feeling overwhelmed by debt? Get practical strategies...",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/Top_Finance_how_to_get_out_of_debt.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "top-credit-cards-0-intro-apr",
    frontmatter: {
      title: "Best Credit Cards with 0% Intro APR Offers in the US | KardTrust",
      description:
        "Compare the best credit cards offering 0% introductory APR...",
      date: "2025-04-03T00:00:00Z",
      featuredImage: "https://media.topfinanzas.com/images/kardtrust/APR.webp", // Placeholder
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "best-personal-loans",
    frontmatter: {
      title: "Best Personal Loans in the US: Your Complete Guide | KardTrust",
      description: "Comprehensive guide to the US's top personal loans...",
      date: "2025-03-30T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/best-personal-loans.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "tips-for-choosing-an-online-loan",
    frontmatter: {
      title:
        "5 Essential Tips for Choosing an Online Loan: Quick Guide | KardTrust",
      description: "Navigate the world of online loans with confidence...",
      date: "2025-03-30T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/choosing-online-loan-uk.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "cashback-credit-cards",
    frontmatter: {
      title:
        "Best Cashback Credit Cards for Maximizing Your Rewards | KardTrust",
      description:
        "Discover the top cashback credit cards! Compare benefits like unlimited rewards, flexible redemption options, and introductory APR offers.",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/download-8-1.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "credit-card-types-benefits",
    frontmatter: {
      title:
        "Credit Cards - Types, Benefits, and Keys to Financial Health | KardTrust",
      description:
        "Discover everything you need to know about credit cards, from types and benefits to tips for responsible usage and maintaining healthy finances.",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/Top_Finanzas_Top_tarjeta_de_credito-1.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "no-annual-fee-credit-cards",
    frontmatter: {
      title: "Top Credit Cards With No Annual Fees | KardTrust",
      description:
        "Find the best no annual fee credit cards with great cashback, rewards, and flexible benefits. Perfect for managing expenses while saving on fees.",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/Top_Finance_credit_cards_without_annual_fee.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "personal-loans-debt-strategy",
    frontmatter: {
      title: "Personal Loans - A Strategy for Managing Debt | KardTrust",
      description:
        "Discover how personal loans can help you consolidate debt and manage your finances efficiently. Learn how to choose the right loan for your needs.",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/Top-Finances_personal_loans.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "understanding-credit-card-interest-rates",
    frontmatter: {
      title:
        "Understanding Credit Card Interest Rates - A Consumer Guide | KardTrust",
      description:
        "Learn how credit card interest rates work, including APR calculations, and discover ways to manage and minimize your debt effectively.",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/download-5-2.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "travel-credit-cards",
    frontmatter: {
      title: "Best Travel Credit Cards US | KardTrust",
      description:
        "Compare the best travel credit cards in the US with no foreign transaction fees, travel insurance, and rewards for international spending.",
      date: "2025-04-07T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/travel-cards-explained.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "what-is-financial-health",
    frontmatter: {
      title:
        "What Is Financial Health? A Quick Guide to Checking Your Vitals | KardTrust",
      description:
        "A simple US-focused guide to checking your money vitals—cash flow, savings, borrowing, and habits—plus quick steps to improve your financial health.",
      date: "2025-08-13T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/what-is-financial-health.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "money-management-for-beginners",
    frontmatter: {
      title:
        "Money Management for Beginners: Where Do I Even Start? | KardTrust",
      description:
        "New to personal finance? Learn simple US-based steps to budget, save, manage debt, and build steady money habits that stick.",
      date: "2025-08-13T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/money-management-for-beginners.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "setting-financial-goals",
    frontmatter: {
      title:
        "Setting Financial Goals: A Beginner's Guide to Personal Finance Planning | KardTrust",
      description:
        "Learn how to set SMART financial goals, align your budget, and build habits that stick. A simple US-focused personal finance guide for beginners.",
      date: "2025-08-15T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/setting-financial-goals.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "side-hustle-or-second-job",
    frontmatter: {
      title:
        "Side Hustle or Second Job? How to Choose the Right Income Booster | KardTrust",
      description:
        "With rising living costs across the US, many people are seeking ways to boost their income. Whether you're considering a traditional second job or exploring the world of side hustles, making the right choice can significantly impact your personal finance goals and lifestyle.",
      date: "2025-08-27T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/side-hustle-second-job.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "creating-a-budget-youll-actually-stick-to",
    frontmatter: {
      title:
        "Beyond Spreadsheets: Create a Personal Finance Budget You'll Actually Stick To | KardTrust",
      description:
        "A modern US-friendly budgeting guide covering 50/30/20, zero-based budgeting, digital pots, and a 7-day quick start.",
      date: "2025-09-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/modern-budget-guide.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "ditching-impulse-buys-mindful-spending",
    frontmatter: {
      title:
        "Ditching the Impulse Buys: A Practical Guide to Mindful Spending | KardTrust",
      description:
        "Learn practical strategies to stop impulse buying and develop mindful spending habits. US-focused guide with real examples, budgeting tips, and proven techniques for better personal finance control.",
      date: "2025-09-26T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/ditching-impulse-buys-mindful-spending-guide.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "how-to-ask-for-a-raise",
    frontmatter: {
      title:
        "How to Confidently Ask for a Raise (with Scripts and a Preparation Guide) | KardTrust",
      description:
        "Learn exactly what to say when asking for a pay rise. This US-focused guide includes preparation steps, conversation scripts, salary research tips, and how to handle both positive and negative responses professionally.",
      date: "2025-10-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/how-to-ask-for-a-raise.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "what-is-lifestyle-creep",
    frontmatter: {
      title:
        "What Is 'Lifestyle Creep' and How Is It Silently Draining Your Wallet? | KardTrust",
      description:
        "Discover how lifestyle creep gradually increases your spending as your income grows, and learn practical strategies to prevent this silent wealth-drainer from sabotaging your personal finance goals whilst still enjoying life.",
      date: "2025-10-09T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/lifestyle-creep-personal-finance.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "inflation-proof-your-life",
    frontmatter: {
      title:
        "Inflation-Proof Your Life: 7 Smart Money Moves to Make When Prices Are High | KardTrust",
      description:
        "Discover seven practical strategies to protect your purchasing power during high inflation. Learn how to cut invisible spending leaks, lock in fixed rates, build emergency buffers, and keep your personal finance on track when costs are rising.",
      date: "2025-10-15T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/inflation-proof-your-life-7-smart-money-moves.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
  {
    slug: "combine-finances-after-marriage-or-moving-in",
    frontmatter: {
      title:
        "Yours, Mine, or Ours? How to Strategically Combine Finances After Marriage (or Moving In) | KardTrust",
      description:
        "Thinking about merging money with a partner? Whether you've just tied the knot or moved in together, combining finances is more than opening a joint account. This US-focused guide walks you through practical options, common pitfalls, and an easy step-by-step plan.",
      date: "2025-10-20T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/kardtrust/combine-finances-after-marriage-or-moving-in.webp",
      categories: [{ name: "Personal Finance", slug: "personal-finance" }],
    },
    category: "Personal Finance",
    categoryPath: "/personal-finance",
  },
];
// --- End of Hardcoded Data ---

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page for homepage

  // Calculate paginated posts using useMemo
  const { paginatedPosts, totalPages } = useMemo(() => {
    // Sort posts by date descending (if date exists)
    const sortedPosts = [...allPosts].sort((a, b) => {
      const dateA = a.frontmatter.date
        ? new Date(a.frontmatter.date).getTime()
        : 0;
      const dateB = b.frontmatter.date
        ? new Date(b.frontmatter.date).getTime()
        : 0;
      return dateB - dateA; // Descending order
    });

    const calculatedTotalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const postsToDisplay = sortedPosts.slice(
      startIndex,
      startIndex + postsPerPage,
    );
    return { paginatedPosts: postsToDisplay, totalPages: calculatedTotalPages };
  }, [currentPage, postsPerPage]);

  // Convert posts to the format expected by FeaturedPostsGrid
  const featuredPostsData = useMemo(() => {
    return paginatedPosts.map((post) => ({
      title: cleanTitle(post.frontmatter.title),
      description: post.frontmatter.description,
      image:
        post.frontmatter.featuredImage ||
        "https://media.topfinanzas.com/images/placeholder.webp",
      slug: post.slug,
      category: post.category,
      categorySlug: post.categoryPath,
      date: post.frontmatter.date
        ? new Date(post.frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : undefined,
      type: post.category === "Financial Solutions" ? "financial" : "personal",
    }));
  }, [paginatedPosts]);

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - New BudgetBee-style design */}
      <HeroSection
        title="Your Trusted Partner for Smart Financial Decisions"
        subtitle="Make smarter financial decisions with KardTrust. We provide clear, unbiased guidance on credit cards, personal loans, and financial planning – helping you choose wisely and live fully."
        ctaText="Start Your Journey"
        ctaLink="/blog"
        imageSrc="https://media.topfinanzas.com/images/kardtrust/banner-home.webp"
        imageAlt="KardTrust - Financial guidance and comparison"
      />

      {/* 50/50 Sections - Placed before blog posts */}
      <FiftyFiftySection
        title="Find the Perfect Credit Card for Your Lifestyle"
        description="Navigate the overwhelming world of credit cards with confidence. We analyze hundreds of options to recommend cards that actually match your spending habits and financial goals. Whether you're building credit, maximizing rewards, or consolidating debt, we'll help you find the right fit – without the sales pitch."
        imageSrc="https://media.topfinanzas.com/images/kardtrust/Top_Finance_uk_credit_cards.webp"
        imageAlt="Credit card comparison"
        ctaText="Explore Credit Cards"
        ctaLink="/credit-cards"
        imagePosition="right"
        bgColor="white"
      />

      <FiftyFiftySection
        title="Smart Personal Loan Solutions"
        description="Finding the right personal loan doesn't have to be complicated. We break down your options, compare rates from leading lenders, and help you understand the terms that matter. From debt consolidation to major purchases, make informed decisions with our comprehensive loan guides."
        imageSrc="https://media.topfinanzas.com/images/kardtrust/best-personal-loans.webp"
        imageAlt="Personal loan comparison"
        ctaText="Compare Loans"
        ctaLink="/personal-loans"
        imagePosition="left"
        bgColor="light"
      />

      {/* Blog Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured post - Using standard Next.js Image component */}
          <div className="mb-12 relative">
            <FeaturedPostCard
              title="Best Personal Loans in the US: Your Complete Guide"
              description="Comprehensive guide to the US's top personal loans, including rates, terms, and application requirements from leading lenders like Nationwide, Santander, and Barclays."
              image="https://media.topfinanzas.com/images/kardtrust/best-personal-loans.webp"
              slug="best-personal-loans"
              category="Personal Finance"
              categorySlug="/personal-finance"
              date="March 30, 2025"
              orientation="horizontal"
              priority={false} // Removed priority to avoid competing with LCP hero image
            />
          </div>

          {/* Latest Articles */}
          <FeaturedPostsGrid
            posts={featuredPostsData}
            title="Latest Articles"
            columns={3}
          />

          {/* Pagination Controls */}
          {totalPages > 1 &&
            (totalPages <= 3 ? (
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </Button>
                <span className="text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </Button>
              </div>
            ) : (
              <DynamicPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
