"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { motion, AnimatePresence } from "framer-motion";
import { BlogLayout } from "@/components/mdx/blog-layout"; // Assuming this layout is suitable
import { Button } from "@/components/ui/button"; // For pagination
import { sortPostsByDate } from "@/lib/utils/date-utils";

// Define the structure for each post item, adding category
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: "Personal Finance" | "Financial Solutions";
  categoryPath: string;
  date?: string; // Optional date
}

// Helper function to clean titles
const cleanTitle = (title: string): string => {
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

export default function BlogArchivePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const postsPerPage = 9; // Display 9 posts per page (3x3 grid)

  // Categories for filtering
  const categories = {
    all: "All Articles",
    personalFinance: "Personal Finance",
    financialSolutions: "Financial Solutions",
    creditCards: "Credit Cards",
    loans: "Loans",
  };

  // Combine posts from both categories
  const allPosts: PostItem[] = [
    // Personal Finance Posts
    {
      title:
        "The 5-Minute Financial Health Check: Where Does Your Money Go? | KardTrust",
      slug: "5-minute-financial-health-check",
      description:
        "Discover where your money goes with this quick 5-minute financial health check. Learn simple tracking methods, identify spending leaks, and take control of your personal finances today.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/5-minute-financial-health-check.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "November 5, 2025",
    },
    {
      title:
        "The Hidden Costs of Homeownership That No One Talks About | KardTrust",
      slug: "hidden-costs-of-homeownership",
      description:
        "Discover the unexpected expenses of owning a home beyond your mortgage payment. Learn how to budget for maintenance, repairs, insurance, and other hidden homeownership costs.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/hidden-costs-homeownership.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "October 28, 2025",
    },
    // Financial Solutions Posts
    {
      title:
        "Unlock the Benefits of the Amazon Rewards Visa Credit Card | KardTrust",
      slug: "amazon-rewards-visa-credit-card-benefits",
      description:
        "Make the most of your purchases with the Amazon Rewards Visa Credit Card. Earn cash rewards, discounts on Amazon, and much more.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/09/Amazon1.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title:
        "Blue Cash Preferred® Card from American Express: Maximize Your Cash Back Rewards | KardTrust",
      slug: "blue-cash-preferred-card-from-american-express",
      description:
        "Discover the Blue Cash Preferred® Card from American Express with 6% cash back at U.S. supermarkets, 6% on streaming, 3% at gas stations, and a $250 welcome bonus. Turn everyday spending into substantial rewards.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/blue-cash-preferred-card-from-american-express.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title: "Capital One Quicksilver Student Credit Card Benefits | KardTrust",
      slug: "capital-one-quicksilver-student-credit-card-benefits",
      description:
        "Discover the student-friendly features and competitive rewards of the Capital One Quicksilver Student Credit Card. Earn unlimited cash back with no annual fee.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/09/Capitalone2.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title: "Capital One Savor Rewards Credit Card Benefits | KardTrust",
      slug: "capital-one-savor-rewards-credit-card-benefits",
      description:
        "Explore the Capital One Savor Rewards Credit Card benefits, offering unlimited 3% cash back on dining, entertainment, and more.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-14-1.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title:
        "Citi Custom Cash® Card: 5% Cash Back That Automatically Adapts | KardTrust",
      slug: "citi-custom-cash-card",
      description:
        "Discover the Citi Custom Cash® Card with automatic 5% cash back on your top spending category, $200 welcome bonus, 0% intro APR for 18 months on balance transfers, and no annual fee. Your rewards adapt as your spending changes.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/citi-custom-cash-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title:
        "Citi Double Cash® Card Benefits: Earn 2% Back Everywhere | KardTrust",
      slug: "citi-double-cash-credit-card-benefits",
      description:
        "Maximize your cash back effortlessly with the Citi Double Cash Credit Card. Earn 2% on every purchase—1% when you buy and 1% when you pay—with no annual fee.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-2.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title: "Citi Simplicity® Card Benefits | KardTrust",
      slug: "citi-simplicity-card-benefits",
      description:
        "Simplify your credit management with the Citi Simplicity Card. No late fees, no penalty APR, and 0% intro APR on purchases and balance transfers.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-12-1-1024x536.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title: "Discover it® Student Chrome Credit Card Benefits | KardTrust",
      slug: "discover-it-student-chrome-credit-card-benefits",
      description:
        "Discover the key benefits of the Discover it Student Chrome Credit Card: 2% cashback at restaurants and gas stations, no annual fee, and double rewards in your first year.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/11/Discoverst1.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title:
        "Wells Fargo Active Cash® Card: Unlimited 2% Cash Back on Everything | KardTrust",
      slug: "wells-fargo-active-cash-card",
      description:
        "Discover the Wells Fargo Active Cash® Card with unlimited 2% cash back on all purchases, $200 welcome bonus, 0% intro APR for 12 months, and no annual fee. Award-winning simplicity with Visa Signature benefits.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/wells-fargo-active-cash-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title: "Wells Fargo Autograph℠ Card Benefits | KardTrust",
      slug: "wells-fargo-autograph-card-benefits",
      description:
        "Explore the Wells Fargo Autograph Card benefits to earn 3X points on top everyday categories, access premium travel protections, and enjoy no annual fee.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-16-1024x536.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title:
        "Chase Freedom Flex℠: Cash Back Credit Card with Rotating Categories | KardTrust",
      slug: "chase-freedom-flex",
      description:
        "Discover the Chase Freedom Flex℠ with 5% cash back in quarterly bonus categories, $200 welcome bonus, 0% intro APR for 15 months, and no annual fee. Earn 5% on travel through Chase, 3% on dining and drugstores.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/chase-freedom-flex.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title: "Chase Freedom Unlimited® Credit Card Benefits | KardTrust",
      slug: "chase-freedom-unlimited-credit-card-benefits",
      description:
        "Turn every dollar you spend into unlimited rewards and effortless savings with the Chase Freedom Unlimited Credit Card. Enjoy unlimited cashback, 0% intro APR, and no annual fee.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-11.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title: "DoorDash Rewards Mastercard® Benefits | KardTrust",
      slug: "doordash-rewards-mastercard-benefits",
      description:
        "Discover the benefits of the DoorDash Rewards Mastercard: earn high cashback on DoorDash orders and dining, enjoy no annual fee, and access exclusive promotions.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-4.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title: "First Digital NextGen Mastercard® Benefits | KardTrust",
      slug: "first-digital-nextgen-mastercard-benefits",
      description:
        "Discover the benefits of the First Digital NextGen Mastercard: instant approval, no credit check, low fees, and full digital management.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-15.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title: "TD FlexPay Credit Card Benefits | KardTrust",
      slug: "td-flexpay-credit-card-benefits",
      description:
        "See how the TD FlexPay Credit Card delivers flexibility with 0% intro APR on balance transfers, no annual fee, and cashback on everyday purchases.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/11/Flexpay1.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title:
        "Titanium Rewards Visa Signature® Credit Card Benefits | KardTrust",
      slug: "titanium-rewards-visa-signature-credit-card-benefits",
      description:
        "Maximize everyday spending with the Titanium Rewards Visa Signature Credit Card. Earn 5X points on gas and groceries and enjoy premium benefits with no annual fee.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-1-2.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title: "U.S. Bank Cash+® Visa Signature® Card Benefits | KardTrust",
      slug: "us-bank-cash-plus-visa-signature-card-benefits",
      description:
        "Customize your rewards with the U.S. Bank Cash+ Visa Signature Card: earn up to 5% cashback in your chosen categories, 2% on everyday essentials, and pay no annual fee.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/11/Usbanck1.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title: "Current Build Visa Signature® Credit Card Benefits | KardTrust",
      slug: "visa-signature-us-current-build-credit-card-benefits",
      description:
        "Discover the benefits of the Current Build Visa Signature Credit Card. Build credit with no annual fees, flexible rewards, and no hidden charges from this modern neobank.",
      image:
        "https://us.topfinanzas.com/wp-content/uploads/2024/09/Curren1.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title:
        "Tomo Credit Card Benefits: Build Credit, Earn Rewards, No Fees | KardTrust",
      slug: "tomo-credit-card-benefits",
      description:
        "Discover the unique benefits of the Tomo Credit Card: no credit history required, flexible cashback rewards, and zero annual fees to jumpstart your credit journey.",
      image: "https://us.topfinanzas.com/wp-content/uploads/2024/11/Tomo1.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "28 October 2025",
    },
    {
      title:
        "Bank of America® Unlimited Cash Rewards: Straightforward Cash Back Card | KardTrust",
      slug: "bank-of-america-unlimited-cash-rewards",
      description:
        "Discover the Bank of America® Unlimited Cash Rewards credit card with unlimited 1.5% cash back on all purchases, $200 online cash rewards bonus, 0% intro APR for 18 billing cycles, no annual fee, and Preferred Rewards benefits up to 75% bonus cash back.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/bank-of-america-unlimited-cash-rewards.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title:
        "Chase Sapphire Reserve®: Premium Travel Rewards Card | KardTrust",
      slug: "chase-sapphire-reserve",
      description:
        "Discover the Chase Sapphire Reserve® with 3X points on travel & dining, $300 annual travel credit, Priority Pass lounge access, and premium travel protections. Earn 60,000 bonus points after spending $4,000 in first 3 months.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/chase-sapphire-reserve.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title:
        "Self Credit Builder Account + Visa Card: Build Credit with One Ecosystem | KardTrust",
      slug: "self-credit-builder-account-visa-card",
      description:
        "Explore how Self's Credit Builder Account and secured Visa card report to all three bureaus, follow a 24-month $35 plan, and use a $100 refundable security interest to unlock revolving credit.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/self-credit-builder-account-visa-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title:
        "SIREN Card: Premium Metal Card with Automatic Credit Building | KardTrust",
      slug: "siren-card",
      description:
        "Exclusive to Starbucks partners: SIREN Card is a hybrid debit/credit card powered by cred.ai that builds credit automatically while guaranteeing zero fees and zero interest. Get paid up to 2 days early, access 55K+ free ATMs, and enjoy premium metal card benefits.",
      image: "https://media.topfinanzas.com/images/kardtrust/siren-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title: "Yotta Credit Card: Win Cash Back With Every Purchase | KardTrust",
      slug: "yotta-credit-card",
      description:
        "Discover how the Yotta Credit Card transforms spending into winning opportunities. Every purchase enters you to win up to 100% cash back, with prizes up to $5,000. Learn about Lucky Swipe rewards and better-than-average winning odds.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/yotta-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title:
        "Mission Lane Visa Credit Card: Build Credit with Fair-to-Good Approval Odds | KardTrust",
      slug: "mission-lane-visa-credit-card",
      description:
        "Discover the Mission Lane Visa Credit Card designed for building and rebuilding credit. Features 19.99%-33.99% APR, $0-$59 annual fee, credit lines from $300-$3,000, and cash back rewards on select cards. No security deposit required.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/mission-lane-visa-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title:
        "Avant Credit Card: Your Path to Healthy Credit Starts Here | KardTrust",
      slug: "avant-credit-card",
      description:
        "Build or rebuild your credit with the Avant Credit Card. No security deposit required, proactive credit line increases, and transparent pricing. 29.99%-35.99% APR, $39-$75 annual fee, $300-$3,000 credit limits. WebBank issuer.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/avant-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title: "Klarna Card: Pay Now or Pay Later Everywhere - KardTrust",
      slug: "klarna-card",
      description:
        "Discover the Klarna Card—switch instantly between debit mode and flexible pay later plans. No annual fees, no credit impact to apply, earn cashback with membership plans, and enjoy 0%-35.99% APR on payment plans.",
      image: "https://media.topfinanzas.com/images/kardtrust/klarna-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title:
        "Affirm Card: Pay Over Time with Flexible Payment Plans - KardTrust",
      slug: "affirm-card",
      description:
        "Discover the Affirm Card—a Visa debit card with pay-over-time flexibility. No annual fees, no hidden charges, 0%-36% APR payment plans, and no credit impact to apply. Split purchases after checkout or plan ahead.",
      image: "https://media.topfinanzas.com/images/kardtrust/affirm-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title:
        "Step Visa Card: Build Credit for Free Starting at Age 13 | KardTrust",
      slug: "step-visa-card",
      description:
        "Discover the Step Visa Card—build credit history for free with no credit score required, no fees, and no interest. Perfect for teens 13+ and young adults. Reports to all 3 credit bureaus with an average 57-point score increase.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/step-visa-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title:
        "Robinhood Gold Card: 3% Cash Back on Everything with Premium Benefits | KardTrust",
      slug: "robinhood-gold-card",
      description:
        "Discover the Robinhood Gold Card offering 3% cash back on all purchases, 5% back on travel, no annual fee, virtual cards, family card sharing, and Visa Signature benefits. Exclusive to Robinhood Gold members.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/robinhood-gold-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title:
        "Tilt Card: Build Credit with Cash Back Rewards and No Security Deposit | KardTrust",
      slug: "tilt-card",
      description:
        "Discover Tilt credit cards offering credit building without security deposits or credit history. Get up to 10% cash back, automatic limit increases, and approval even if denied elsewhere.",
      image: "https://media.topfinanzas.com/images/kardtrust/tilt-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "27 October 2025",
    },
    {
      title: "Upgrade OneCard: Pay Now or Pay Later Credit Card | KardTrust",
      slug: "upgrade-credit-card",
      description:
        "Discover the Upgrade OneCard offering flexible payment options with pay now or pay later features, no annual fee, 14.99%-29.99% APR, and the convenience of a credit card with the predictability of a personal loan.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/upgrade-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "SoFi Credit Card: Unlimited 2% Cash Back with No Annual Fee | KardTrust",
      slug: "sofi-credit-card",
      description:
        "Discover the SoFi Unlimited 2% Credit Card offering straightforward cash back rewards on all purchases, Mastercard World Elite benefits, and premium travel perks—all with no annual fee.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/sofi-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Varo Believe Card: Build Credit with Zero Fees and No Security Deposit | KardTrust",
      slug: "varo-believe-card",
      description:
        "Discover how the Varo Believe Card revolutionizes credit building with no security deposit, 0% APR, no annual fees, and an average 40+ point credit score increase in just 3 months.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/varo-believe-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Chime Credit Builder Visa Secured Card: Build Credit with No Fees | KardTrust",
      slug: "chime-credit-builder-visa-secured-card",
      description:
        "Discover the Chime Credit Builder Visa Secured Card offering fee-free credit building, 1.5% cash back on rotating categories, no annual fees, no interest, and no credit check to apply.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/chime-credit-builder-visa-secured-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    // Personal Finance Posts
    {
      title:
        "Financial Uncoupling: A Compassionate Guide to Separating Finances During a Breakup | KardTrust",
      slug: "financial-uncoupling-breakup-guide",
      description:
        "Navigate the financial side of a breakup with confidence. Learn how to untangle joint accounts, split shared debts, protect your credit, and rebuild your financial independence after a relationship ends.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/financial-uncoupling-breakup-guide.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "23 October 2025",
    },
    {
      title:
        "Inflation-Proof Your Life: 7 Smart Money Moves to Make When Prices Are High | KardTrust",
      slug: "inflation-proof-your-life",
      description:
        "Discover seven practical strategies to protect your purchasing power during high inflation. Learn how to cut invisible spending leaks, lock in fixed rates, build emergency buffers, and keep your personal finance on track when costs are rising.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/inflation-proof-your-life-7-smart-money-moves.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "15 October 2025",
    },
    {
      title: "Best Personal Loans in the US: Your Complete Guide | KardTrust",
      slug: "best-personal-loans",
      description: "Comprehensive guide to the US's top personal loans...",
      image:
        "https://media.topfinanzas.com/images/kardtrust/best-personal-loans.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "30 March 2025",
    },
    {
      title: "Top Rewards Credit Cards to Maximize Your Spending | KardTrust",
      slug: "best-rewards-credit-cards",
      description: "Discover the best rewards credit cards...",
      image:
        "https://media.topfinanzas.com/images/kardtrust/Top_Finance_uk_credit_cards.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Best Cashback Credit Cards for Maximizing Your Rewards | KardTrust",
      slug: "cashback-credit-cards",
      description: "Discover the top cashback credit cards!...",
      image: "https://media.topfinanzas.com/images/kardtrust/download-8-1.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Credit Cards - Types, Benefits, and Keys to Financial Health | KardTrust",
      slug: "credit-card-types-benefits",
      description: "Discover everything you need to know about credit cards...",
      image:
        "https://media.topfinanzas.com/images/kardtrust/Top_Finanzas_Top_tarjeta_de_credito-1.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Practical Guide to Getting Out of Debt | KardTrust",
      slug: "getting-out-of-debt",
      description: "Feeling overwhelmed by debt? Get practical strategies...",
      image:
        "https://media.topfinanzas.com/images/kardtrust/Top_Finance_how_to_get_out_of_debt.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Top Credit Cards With No Annual Fees | KardTrust",
      slug: "no-annual-fee-credit-cards",
      description: "Find the best no annual fee credit cards...",
      image:
        "https://media.topfinanzas.com/images/kardtrust/Top_Finance_credit_cards_without_annual_fee.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Personal Loans - A Strategy for Managing Debt | KardTrust",
      slug: "personal-loans-debt-strategy",
      description:
        "Discover how personal loans can help you consolidate debt...",
      image:
        "https://media.topfinanzas.com/images/kardtrust/Top-Finances_personal_loans.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "5 Essential Tips for Choosing an Online Loan: Quick Guide | KardTrust",
      slug: "tips-for-choosing-an-online-loan",
      description: "Navigate the world of online loans with confidence...",
      image:
        "https://media.topfinanzas.com/images/kardtrust/choosing-online-loan-uk.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "30 March 2025",
    },
    {
      title: "Best Credit Cards with 0% Intro APR Offers in the US | KardTrust",
      slug: "top-credit-cards-0-intro-apr",
      description:
        "Compare the best credit cards offering 0% introductory APR...",
      image: "https://media.topfinanzas.com/images/kardtrust/APR.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Understanding Credit Card Interest Rates - A Consumer Guide | KardTrust",
      slug: "understanding-credit-card-interest-rates",
      description: "Learn how credit card interest rates work...",
      image: "https://media.topfinanzas.com/images/kardtrust/download-5-2.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Side Hustle or Second Job? How to Choose the Right Income Booster",
      slug: "side-hustle-or-second-job",
      description:
        "With rising living costs across the US, many people are seeking ways to boost their income. Whether you're considering a traditional second job or exploring the world of side hustles, making the right choice can significantly impact your personal finance goals and lifestyle.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/side-hustle-second-job.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "27 August 2025",
    },
    {
      title:
        "Beyond Spreadsheets: Create a Personal Finance Budget You'll Actually Stick To | KardTrust",
      slug: "creating-a-budget-youll-actually-stick-to",
      description:
        "A modern UK-friendly budgeting guide covering 50/30/20, zero‑based budgeting, digital pots, and a 7‑day quick start.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/modern-budget-guide.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "4 September 2025",
    },
    {
      title:
        "How to Confidently Ask for a Raise (with Scripts and a Preparation Guide)",
      slug: "how-to-ask-for-a-raise",
      description:
        "Learn exactly what to say when asking for a pay rise. This UK-focused guide includes preparation steps, conversation scripts, salary research tips, and how to handle both positive and negative responses professionally.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/how-to-ask-for-a-raise.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 October 2025",
    },
    {
      title:
        "What Is 'Lifestyle Creep' and How Is It Silently Draining Your Wallet?",
      slug: "what-is-lifestyle-creep",
      description:
        "Discover how lifestyle creep gradually increases your spending as your income grows, and learn practical strategies to prevent this silent wealth-drainer from sabotaging your personal finance goals whilst still enjoying life.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/lifestyle-creep-personal-finance.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "9 October 2025",
    },
    {
      title:
        "Yours, Mine, or Ours? How to Strategically Combine Finances After Marriage (or Moving In)",
      slug: "combine-finances-after-marriage-or-moving-in",
      description:
        "Thinking about merging money with a partner? Whether you've just tied the knot or moved in together, combining finances is more than opening a joint account. This US-focused guide walks you through practical options, common pitfalls, and an easy step-by-step plan.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/combine-finances-after-marriage-or-moving-in.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "20 October 2025",
    },
    {
      title: "Ditching the Impulse Buys: A Practical Guide to Mindful Spending",
      slug: "ditching-impulse-buys-mindful-spending",
      description:
        "Learn practical strategies to stop impulse buying and develop mindful spending habits. US-focused guide with real examples, budgeting tips, and proven techniques for better personal finance control.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/ditching-impulse-buys-mindful-spending-guide.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "26 September 2025",
    },
    {
      title: "What Is Financial Health? A Quick Guide to Checking Your Vitals",
      slug: "what-is-financial-health",
      description:
        "A simple US-focused guide to checking your money vitals—cash flow, savings, borrowing, and habits—plus quick steps to improve your financial health.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/what-is-financial-health.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "13 August 2025",
    },
    {
      title: "Money Management for Beginners: Where Do I Even Start?",
      slug: "money-management-for-beginners",
      description:
        "New to personal finance? Learn simple US-based steps to budget, save, manage debt, and build steady money habits that stick.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/money-management-for-beginners.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "13 August 2025",
    },
    {
      title:
        "Setting Financial Goals: A Beginner's Guide to Personal Finance Planning",
      slug: "setting-financial-goals",
      description:
        "Learn how to set SMART financial goals, align your budget, and build habits that stick. A simple US-focused personal finance guide for beginners.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/setting-financial-goals.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "15 August 2025",
    },
    {
      title: "Best Travel Credit Cards US",
      slug: "travel-credit-cards",
      description:
        "Compare the best travel credit cards in the US with no foreign transaction fees, travel insurance, and rewards for international spending.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/travel-cards-explained.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "7 April 2025",
    },
    // Financial Solutions Posts (Add relevant ones)
    // Example: Add a few key ones, more can be added later
    {
      title:
        "Chime Credit Builder Visa Secured Card: Build Credit with No Fees | KardTrust",
      slug: "chime-credit-builder-visa-secured-card",
      description:
        "Discover the Chime Credit Builder Visa Secured Card offering fee-free credit building, 1.5% cash back on rotating categories, no annual fees, no interest, and no credit check to apply.",
      image:
        "https://media.topfinanzas.com/images/kardtrust/chime-credit-builder-visa-secured-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    // Additional Financial Solutions posts can be added here
  ];

  // Sort posts by date (newest first) using the centralized utility
  const allPostsSorted: PostItem[] = sortPostsByDate(allPosts);

  // Filter posts based on active category
  const filterPosts = useCallback(() => {
    let filteredPosts = [...allPostsSorted];

    if (activeCategory === "personalFinance") {
      filteredPosts = allPostsSorted.filter(
        (post) => post.category === "Personal Finance",
      );
    } else if (activeCategory === "financialSolutions") {
      filteredPosts = allPostsSorted.filter(
        (post) => post.category === "Financial Solutions",
      );
    } else if (activeCategory === "creditCards") {
      filteredPosts = allPostsSorted.filter(
        (post) =>
          post.title.toLowerCase().includes("credit card") ||
          post.slug.toLowerCase().includes("credit-card") ||
          post.description.toLowerCase().includes("credit card"),
      );
    } else if (activeCategory === "loans") {
      filteredPosts = allPostsSorted.filter(
        (post) =>
          post.title.toLowerCase().includes("loan") ||
          post.slug.toLowerCase().includes("loan") ||
          post.description.toLowerCase().includes("loan"),
      );
    }

    return filteredPosts;
  }, [activeCategory, allPostsSorted]);

  // Get filtered posts
  const filteredPosts = filterPosts();

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6">KardTrust Blog</h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Your source for insights on personal finance and financial solutions in
        the US.
      </p>

      {/* Category Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link
          href="/personal-finance"
          className="block p-6 bg-red-50 rounded-xl hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-primary-dark mb-2">
            Personal Finance Guides
          </h2>
          <p className="text-primary">
            Explore tips on budgeting, saving, debt management, credit cards,
            and more.
          </p>
        </Link>
        <Link
          href="/financial-solutions"
          className="block p-6 bg-green-50 rounded-xl hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Financial Solutions
          </h2>
          <p className="text-green-700">
            Discover detailed reviews and comparisons of credit cards and loans
            available in the US.
          </p>
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-4">
        {activeCategory
          ? categories[activeCategory as keyof typeof categories]
          : "All Articles"}
      </h2>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key === "all" ? null : key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              (key === "all" && !activeCategory) || activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            data-category={key}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid of posts with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory || "all"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="relative"
              style={{ position: "relative" }}
              data-category={post.category.toLowerCase().replace(" ", "-")}
            >
              <FeaturedPostCard
                title={cleanTitle(post.title)}
                description={post.description}
                image={post.image}
                slug={post.slug}
                category={post.category}
                categorySlug={post.categoryPath}
                date={post.date}
                priority={index < 2}
                showBadge={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-12">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="secondary" // Changed from outline
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="secondary" // Changed from outline
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );

  // The BlogLayout component might handle this automatically if set up,
  // otherwise, you might pass the imported metadata object.
  // For simplicity, assuming BlogLayout handles it or metadata is implicitly used.
  return (
    <BlogLayout metadata={{}}>
      {" "}
      {/* Pass empty or specific metadata if needed by layout */}
      {content}
    </BlogLayout>
  );
}
