"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { sortPostsByDate } from "@/lib/utils/date-utils";

// Define the structure for each post item
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string; // Optional date
  category: string; // Add category for filtering
}

// Define filter categories
const categories = {
  all: "All Posts",
  creditCards: "Credit Cards",
  loans: "Loans",
  debt: "Debt Management",
  guide: "Guides",
};

export default function PersonalFinanceArchivePage() {
  // State for active category filter - with client-side initialization via useEffect
  const [activeCategory, setActiveCategory] = useState("all");

  // Force client-side state initialization to ensure React hydration
  useEffect(() => {
    // Keep the default value but force client-side initialization
    setActiveCategory("all");
  }, []);
  // Array of all posts in this category
  const allPosts = useMemo<PostItem[]>(
    () => [
      {
        title:
          "Unlock the Benefits of the Amazon Rewards Visa Credit Card | KardTrust",
        slug: "amazon-rewards-visa-credit-card-benefits",
        description:
          "Make the most of your purchases with the Amazon Rewards Visa Credit Card. Earn cash rewards, discounts on Amazon, and much more.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/09/Amazon1.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Blue Cash Preferred® Card from American Express: Maximize Your Cash Back Rewards | KardTrust",
        slug: "blue-cash-preferred-card-from-american-express",
        description:
          "Discover the Blue Cash Preferred® Card from American Express offering 6% cash back at U.S. supermarkets, 6% on streaming, 3% at gas stations, and a $250 welcome bonus. Learn about benefits, rewards, and how to apply.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/blue-cash-preferred-card-from-american-express.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Capital One Quicksilver Student Credit Card Benefits | KardTrust",
        slug: "capital-one-quicksilver-student-credit-card-benefits",
        description:
          "Discover the student-friendly features and competitive rewards of the Capital One Quicksilver Student Credit Card. Earn unlimited cash back with no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/09/Capitalone2.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title: "Capital One Savor Rewards Credit Card Benefits | KardTrust",
        slug: "capital-one-savor-rewards-credit-card-benefits",
        description:
          "Explore the Capital One Savor Rewards Credit Card benefits, offering unlimited 3% cash back on dining, entertainment, and more.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-14-1.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Citi Custom Cash® Card: 5% Cash Back That Automatically Adapts | KardTrust",
        slug: "citi-custom-cash-card",
        description:
          "Discover the Citi Custom Cash® Card with automatic 5% cash back on your top spending category, $200 welcome bonus, 0% intro APR for 18 months on balance transfers, and no annual fee. Your rewards adapt as your spending changes.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/citi-custom-cash-card.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Citi Double Cash® Card Benefits: Earn 2% Back Everywhere | KardTrust",
        slug: "citi-double-cash-credit-card-benefits",
        description:
          "Maximize your cash back effortlessly with the Citi Double Cash Credit Card. Earn 2% on every purchase—1% when you buy and 1% when you pay—with no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-2.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title: "Citi Simplicity® Card Benefits | KardTrust",
        slug: "citi-simplicity-card-benefits",
        description:
          "Simplify your credit management with the Citi Simplicity Card. No late fees, no penalty APR, and 0% intro APR on purchases and balance transfers.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-12-1-1024x536.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title: "Discover it® Student Chrome Credit Card Benefits | KardTrust",
        slug: "discover-it-student-chrome-credit-card-benefits",
        description:
          "Discover the key benefits of the Discover it Student Chrome Credit Card: 2% cashback at restaurants and gas stations, no annual fee, and double rewards in your first year.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/Discoverst1.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Wells Fargo Active Cash® Card: Unlimited 2% Cash Back Rewards | KardTrust",
        slug: "wells-fargo-active-cash-card",
        description:
          "Discover the Wells Fargo Active Cash® Card with unlimited 2% cash back on all purchases, $200 welcome bonus, 0% intro APR for 12 months, no annual fee, and Visa Signature benefits. Award-winning flat-rate cash back card.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/wells-fargo-active-cash-card.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title: "Wells Fargo Autograph℠ Card Benefits | KardTrust",
        slug: "wells-fargo-autograph-card-benefits",
        description:
          "Explore the Wells Fargo Autograph Card benefits to earn 3X points on top everyday categories, access premium travel protections, and enjoy no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-16-1024x536.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Chase Freedom Flex℠: Cash Back Credit Card with Rotating Categories | KardTrust",
        slug: "chase-freedom-flex",
        description:
          "Discover the Chase Freedom Flex℠ with 5% cash back in quarterly bonus categories, $200 welcome bonus, 0% intro APR for 15 months, and no annual fee. Earn 5% on travel through Chase, 3% on dining and drugstores.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/chase-freedom-flex.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title: "Chase Freedom Unlimited® Credit Card Benefits | KardTrust",
        slug: "chase-freedom-unlimited-credit-card-benefits",
        description:
          "Turn every dollar you spend into unlimited rewards and effortless savings with the Chase Freedom Unlimited Credit Card. Enjoy unlimited cashback, 0% intro APR, and no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-11.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title: "DoorDash Rewards Mastercard® Benefits | KardTrust",
        slug: "doordash-rewards-mastercard-benefits",
        description:
          "Discover the benefits of the DoorDash Rewards Mastercard: earn high cashback on DoorDash orders and dining, enjoy no annual fee, and access exclusive promotions.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-4.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title: "First Digital NextGen Mastercard® Benefits | KardTrust",
        slug: "first-digital-nextgen-mastercard-benefits",
        description:
          "Discover the benefits of the First Digital NextGen Mastercard: instant approval, no credit check, low fees, and full digital management.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/download-15.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title: "TD FlexPay Credit Card Benefits | KardTrust",
        slug: "td-flexpay-credit-card-benefits",
        description:
          "See how the TD FlexPay Credit Card delivers flexibility with 0% intro APR on balance transfers, no annual fee, and cashback on everyday purchases.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/Flexpay1.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Titanium Rewards Visa Signature® Credit Card Benefits | KardTrust",
        slug: "titanium-rewards-visa-signature-credit-card-benefits",
        description:
          "Maximize everyday spending with the Titanium Rewards Visa Signature Credit Card. Earn 5X points on gas and groceries and enjoy premium benefits with no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/12/download-1-2.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title: "U.S. Bank Cash+® Visa Signature® Card Benefits | KardTrust",
        slug: "us-bank-cash-plus-visa-signature-card-benefits",
        description:
          "Customize your rewards with the U.S. Bank Cash+ Visa Signature Card: earn up to 5% cashback in your chosen categories, 2% on everyday essentials, and pay no annual fee.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/Usbanck1.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Tomo Credit Card Benefits: Build Credit, Earn Rewards, No Fees | KardTrust",
        slug: "tomo-credit-card-benefits",
        description:
          "Discover the unique benefits of the Tomo Credit Card: no credit history required, flexible cashback rewards, and zero annual fees to jumpstart your credit journey.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/Tomo1.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Current Build Visa Signature® Credit Card Benefits | KardTrust",
        slug: "visa-signature-us-current-build-credit-card-benefits",
        description:
          "Discover the benefits of the Current Build Visa Signature Credit Card. Build credit with no annual fees, flexible rewards, and no hidden charges from this modern neobank.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/09/Curren1.webp",
        date: "28 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Bank of America® Unlimited Cash Rewards: Straightforward Cash Back Card | KardTrust",
        slug: "bank-of-america-unlimited-cash-rewards",
        description:
          "Discover the Bank of America® Unlimited Cash Rewards credit card with unlimited 1.5% cash back on all purchases, $200 online cash rewards bonus, 0% intro APR for 18 billing cycles, no annual fee, and Preferred Rewards benefits up to 75% bonus cash back.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/bank-of-america-unlimited-cash-rewards.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Chase Sapphire Reserve®: Premium Travel Rewards Card | KardTrust",
        slug: "chase-sapphire-reserve",
        description:
          "Discover the Chase Sapphire Reserve® with 3X points on travel & dining, $300 annual travel credit, Priority Pass lounge access, and premium travel protections. Earn 60,000 bonus points after spending $4,000 in first 3 months.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/chase-sapphire-reserve.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Self Credit Builder Account + Visa Card: Build Credit with Savings and Secured Spending | KardTrust",
        slug: "self-credit-builder-account-visa-card",
        description:
          "See how the Self Credit Builder Account and Visa Secured Card pair to report to all three bureaus, offer $35-per-month plans with 15.69% APR, and deliver a $0 intro annual fee with a $100 deposit.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/self-credit-builder-account-visa-card.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "SIREN Card: Premium Metal Card with Automatic Credit Building | KardTrust",
        slug: "siren-card",
        description:
          "Discover SIREN Card - the hybrid debit/credit card that builds credit automatically with 0% interest guaranteed. Get paid 2 days early, premium metal card, 55K+ free ATMs, advanced security features, and never pay fees. Exclusive for Starbucks partners.",
        image: "https://media.topfinanzas.com/images/kardtrust/siren-card.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Yotta Credit Card Review: Win Cash Back With Every Purchase | KardTrust",
        slug: "yotta-credit-card",
        description:
          "Discover how the Yotta Credit Card transforms spending into winning opportunities. Every purchase enters you to win up to 100% cash back, with prizes up to $5,000. Learn about Lucky Swipe rewards and better-than-average winning odds.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/yotta-credit-card.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Mission Lane Visa Credit Card: Build Credit with Fair-to-Good Approval Odds | KardTrust",
        slug: "mission-lane-visa-credit-card",
        description:
          "Discover the Mission Lane Visa Credit Card designed for building and rebuilding credit. Features 19.99%-33.99% APR, $0-$59 annual fee, credit lines from $300-$3,000, and cash back rewards on select cards. No security deposit required.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/mission-lane-visa-credit-card.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Avant Credit Card: Build Credit with No Hidden Fees | KardTrust",
        slug: "avant-credit-card",
        description:
          "Discover the Avant Credit Card designed for credit building. No security deposit, no hidden fees, proactive credit line increases, and mobile app management. 29.99%-35.99% APR with $39-$75 annual membership fee. Issued by WebBank.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/avant-credit-card.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Klarna Card: Pay Now or Pay Later Everywhere Visa is Accepted | KardTrust",
        slug: "klarna-card",
        description:
          "Discover the Klarna Card—switch instantly between debit mode and flexible pay later plans. No annual fees, no credit impact to apply, earn cashback with membership plans, and enjoy 0%-35.99% APR on payment plans.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/klarna-card.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Affirm Card: Pay Over Time with Flexible Payment Plans | KardTrust",
        slug: "affirm-card",
        description:
          "Discover the Affirm Card—a Visa debit card with pay-over-time flexibility. No annual fees, no hidden charges, 0%-36% APR payment plans, and no credit impact to apply. Split purchases after checkout or plan ahead.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/affirm-card.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Step Visa Card: Build Credit for Free Starting at Age 13 | KardTrust",
        slug: "step-visa-card",
        description:
          "Discover the Step Visa Card—build credit history for free with no credit score required, no fees, and no interest. Perfect for teens 13+ and young adults. Reports to all 3 credit bureaus with an average 57-point score increase.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/step-visa-card.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Robinhood Gold Card: 3% Cash Back on Everything with Premium Benefits | KardTrust",
        slug: "robinhood-gold-card",
        description:
          "Discover the Robinhood Gold Card offering 3% cash back on all purchases, 5% back on travel, no annual fee, virtual cards, family card sharing, and Visa Signature benefits. Exclusive to Robinhood Gold members.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/robinhood-gold-card.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Tilt Card: Build Credit with Cash Back Rewards and No Security Deposit | KardTrust",
        slug: "tilt-card",
        description:
          "Discover Tilt credit cards offering credit building without security deposits or credit history. Get up to 10% cash back, automatic limit increases, and approval even if denied elsewhere. Compare Tilt Essentials, Motion, and Engage cards.",
        image: "https://media.topfinanzas.com/images/kardtrust/tilt-card.webp",
        date: "27 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Upgrade OneCard: Pay Now or Pay Later Credit Card with No Annual Fee | KardTrust",
        slug: "upgrade-credit-card",
        description:
          "Discover the Upgrade OneCard offering flexible payment options with pay now or pay later features, no annual fee, 14.99%-29.99% APR, and the convenience of a credit card with the predictability of a personal loan. Build credit while managing finances your way.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/upgrade-credit-card.webp",
        date: "24 October 2025",
        category: "creditCards",
      },
      {
        title:
          "SoFi Credit Card: Unlimited 2% Cash Back with No Annual Fee | KardTrust",
        slug: "sofi-credit-card",
        description:
          "Discover the SoFi Unlimited 2% Credit Card offering unlimited cash back rewards on all purchases, no annual fees, Mastercard World Elite benefits, and exclusive travel perks. Perfect for building wealth with every purchase.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/sofi-credit-card.webp",
        date: "24 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Varo Believe Card: Build Credit with Zero Fees and No Security Deposit | KardTrust",
        slug: "varo-believe-card",
        description:
          "Discover the Varo Believe secured credit card offering revolutionary credit building with no security deposit, no annual fees, no interest, and no credit check. Average 40+ point credit score increase in just 3 months.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/varo-believe-card.webp",
        date: "24 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Chime Credit Builder Visa Secured Card: Build Credit with No Fees | KardTrust",
        slug: "chime-credit-builder-visa-secured-card",
        description:
          "Discover the Chime Credit Builder Visa Secured Card offering fee-free credit building, 1.5% cash back on rotating categories, no annual fees, no interest, and no credit check to apply.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/chime-credit-builder-visa-secured-card.webp",
        date: "24 October 2025",
        category: "creditCards",
      },
      {
        title:
          "Financial Uncoupling: A Compassionate Guide to Separating Finances During a Breakup | KardTrust",
        slug: "financial-uncoupling-breakup-guide",
        description:
          "Navigate the financial side of a breakup with confidence. Learn how to untangle joint accounts, split shared debts, protect your credit, and rebuild your financial independence after a relationship ends.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/financial-uncoupling-breakup-guide.webp",
        date: "23 October 2025",
        category: "guide",
      },
      {
        title:
          "Inflation-Proof Your Life: 7 Smart Money Moves to Make When Prices Are High | KardTrust",
        slug: "inflation-proof-your-life",
        description:
          "Discover seven practical strategies to protect your purchasing power during high inflation. Learn how to cut invisible spending leaks, lock in fixed rates, build emergency buffers, and keep your personal finance on track when costs are rising.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/inflation-proof-your-life-7-smart-money-moves.webp",
        date: "15 October 2025",
        category: "guide",
      },
      {
        title: "Best Personal Loans in the US: Your Complete Guide | KardTrust",
        slug: "best-personal-loans",
        description:
          "Comprehensive guide to the US's top personal loans, including rates, terms, and application requirements from leading US lenders.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/best-personal-loans.webp",
        date: "30 March 2025",
        category: "loans",
      },
      {
        title: "Top Rewards Credit Cards to Maximize Your Spending | KardTrust",
        slug: "best-rewards-credit-cards",
        description:
          "Discover the best rewards credit cards that turn your everyday spending into valuable perks. From cashback to points and miles, find the perfect card.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/Top_Finance_uk_credit_cards.webp",
        date: "3 April 2025",
        category: "creditCards",
      },
      {
        title:
          "Best Cashback Credit Cards for Maximizing Your Rewards | KardTrust",
        slug: "cashback-credit-cards",
        description:
          "Discover the top cashback credit cards! Compare benefits like unlimited rewards, flexible redemption options, and introductory APR offers.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/download-8-1.webp",
        date: "3 April 2025",
        category: "creditCards",
      },
      {
        title:
          "Credit Cards - Types, Benefits, and Keys to Financial Health | KardTrust",
        slug: "credit-card-types-benefits",
        description:
          "Discover everything you need to know about credit cards, from types and benefits to tips for responsible usage and maintaining healthy finances.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/Top_Finanzas_Top_tarjeta_de_credito-1.webp",
        date: "3 April 2025",
        category: "creditCards",
      },
      {
        title: "Practical Guide to Getting Out of Debt | KardTrust",
        slug: "getting-out-of-debt",
        description:
          "Feeling overwhelmed by debt? Get practical strategies for getting out of debt, building an emergency fund, and taking control of your finances.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/Top_Finance_how_to_get_out_of_debt.webp",
        date: "3 April 2025",
        category: "debt",
      },
      {
        title: "Top Credit Cards With No Annual Fees | KardTrust",
        slug: "no-annual-fee-credit-cards",
        description:
          "Find the best no annual fee credit cards with great cashback, rewards, and flexible benefits. Perfect for managing expenses while saving on fees.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/Top_Finance_credit_cards_without_annual_fee.webp",
        date: "3 April 2025",
        category: "creditCards",
      },
      {
        title: "Personal Loans - A Strategy for Managing Debt | KardTrust",
        slug: "personal-loans-debt-strategy",
        description:
          "Discover how personal loans can help you consolidate debt and manage your finances efficiently. Learn how to choose the right loan for your needs.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/Top-Finances_personal_loans.webp",
        date: "3 April 2025",
        category: "loans",
      },
      {
        title:
          "5 Essential Tips for Choosing an Online Loan: Quick Guide | KardTrust",
        slug: "tips-for-choosing-an-online-loan",
        description:
          "Navigate the world of online loans with confidence using these essential tips to find the best rates and terms for your financial needs.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/choosing-online-loan-uk.webp",
        date: "30 March 2025",
        category: "loans",
      },
      {
        title:
          "Best Credit Cards with 0% Intro APR Offers in the US | KardTrust",
        slug: "top-credit-cards-0-intro-apr",
        description:
          "Compare the best credit cards offering 0% introductory APR on purchases and balance transfers in the US. Save money on interest and manage debt effectively.",
        image: "https://media.topfinanzas.com/images/kardtrust/APR.webp",
        date: "3 April 2025",
        category: "creditCards",
      },
      {
        title:
          "Understanding Credit Card Interest Rates - A Consumer Guide | KardTrust",
        slug: "understanding-credit-card-interest-rates",
        description:
          "Learn how credit card interest rates work, including APR calculations, and discover ways to manage and minimize your debt effectively.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/download-5-2.webp",
        date: "3 April 2025",
        category: "creditCards",
      },
      {
        title:
          "What Is Financial Health? A Quick Guide to Checking Your Vitals | KardTrust",
        slug: "what-is-financial-health",
        description:
          "A simple UK-focused guide to checking your money vitals—cash flow, savings, borrowing, and habits—plus quick steps to improve your financial health.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/what-is-financial-health.webp",
        date: "13 August 2025",
        category: "guide",
      },
      {
        title:
          "Money Management for Beginners: Where Do I Even Start? | KardTrust",
        slug: "money-management-for-beginners",
        description:
          "New to personal finance? Learn simple UK-based steps to budget, save, manage debt, and build steady money habits that stick.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/money-management-for-beginners.webp",
        date: "13 August 2025",
        category: "guide",
      },
      {
        title:
          "Setting Financial Goals: A Beginner's Guide to Personal Finance Planning | KardTrust",
        slug: "setting-financial-goals",
        description:
          "Learn how to set SMART financial goals, align your budget, and build habits that stick. A simple UK-focused personal finance guide for beginners.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/setting-financial-goals.webp",
        date: "15 August 2025",
        category: "guide",
      },
      {
        title:
          "Side Hustle or Second Job? How to Choose the Right Income Booster",
        slug: "side-hustle-or-second-job",
        description:
          "With rising living costs across the US, many people are seeking ways to boost their income. Whether you're considering a traditional second job or exploring the world of side hustles, making the right choice can significantly impact your personal finance goals and lifestyle.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/side-hustle-second-job.webp",
        date: "27 August 2025",
        category: "guide",
      },
      {
        title:
          "Beyond Spreadsheets: Create a Personal Finance Budget You'll Actually Stick To | KardTrust",
        slug: "creating-a-budget-youll-actually-stick-to",
        description:
          "A modern UK-friendly budgeting guide covering 50/30/20, zero‑based budgeting, digital pots, and a 7‑day quick start — built to help you actually stick to it.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/modern-budget-guide.webp",
        date: "4 September 2025",
        category: "guide",
      },
      {
        title:
          "What Is 'Lifestyle Creep' and How Is It Silently Draining Your Wallet? | KardTrust",
        slug: "what-is-lifestyle-creep",
        description:
          "Discover how lifestyle creep gradually increases your spending as your income grows, and learn practical strategies to prevent this silent wealth-drainer from sabotaging your personal finance goals whilst still enjoying life.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/lifestyle-creep-personal-finance.webp",
        date: "9 October 2025",
        category: "guide",
      },
      {
        title:
          "Yours, Mine, or Ours? How to Strategically Combine Finances After Marriage (or Moving In) | KardTrust",
        slug: "combine-finances-after-marriage-or-moving-in",
        description:
          "Thinking about merging money with a partner? Whether you've just tied the knot or moved in together, combining finances is more than opening a joint account. This US-focused guide walks you through practical options, common pitfalls, and an easy step-by-step plan.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/combine-finances-after-marriage-or-moving-in.webp",
        date: "20 October 2025",
        category: "guide",
      },
      {
        title:
          "Ditching the Impulse Buys: A Practical Guide to Mindful Spending | KardTrust",
        slug: "ditching-impulse-buys-mindful-spending",
        description:
          "Learn practical strategies to stop impulse buying and develop mindful spending habits. US-focused guide with real examples, budgeting tips, and proven techniques for better personal finance control.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/ditching-impulse-buys-mindful-spending-guide.webp",
        date: "26 September 2025",
        category: "guide",
      },
      {
        title:
          "How to Confidently Ask for a Raise (with Scripts and a Preparation Guide) | KardTrust",
        slug: "how-to-ask-for-a-raise",
        description:
          "Learn exactly what to say when asking for a pay rise. This US-focused guide includes preparation steps, conversation scripts, salary research tips, and how to handle both positive and negative responses professionally.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/how-to-ask-for-a-raise.webp",
        date: "3 October 2025",
        category: "guide",
      },
      {
        title: "Best Travel Credit Cards US | KardTrust",
        slug: "travel-credit-cards",
        description:
          "Compare the best travel credit cards in the US with no foreign transaction fees, travel insurance, and rewards for international spending.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/travel-cards-explained.webp",
        date: "7 April 2025",
        category: "creditCards",
      },
    ],
    [],
  );

  // Sort all posts by date (newest first)
  const allPostsSorted = useMemo(() => sortPostsByDate(allPosts), [allPosts]);

  // Filter posts based on the selected category
  const filteredPosts =
    activeCategory === "all"
      ? allPostsSorted
      : allPostsSorted.filter((post) => post.category === activeCategory);

  const content = (
    <div data-category="personal-finance">
      <h1 className="text-4xl font-bold mb-6">Personal Finance Guides</h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explore our guides on credit cards, loans, debt management, and other
        personal finance topics to help you make informed decisions.
      </p>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid of filtered posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col relative"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title.split("|")[0].trim()} // Cleaner alt text
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Basic responsive sizes
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://media.topfinanzas.com/images/kardtrust/kardtrust-og-image.webp";
                  }} // Fallback image
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                {post.date && (
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                )}
                <Link
                  href={`/personal-finance/${post.slug}`}
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2"
                >
                  {post.title.split("|")[0].trim()} {/* Show cleaner title */}
                </Link>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {post.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/personal-finance/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-left py-12">
            <p className="text-gray-500">No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );

  // Metadata for the archive page itself
  const pageMetadata = {
    title: "Personal Finance Guides | KardTrust",
    description:
      "Explore guides on credit cards, loans, debt management, and other personal finance topics in the US.",
  };

  return <BlogLayout metadata={pageMetadata}>{content}</BlogLayout>;
}
