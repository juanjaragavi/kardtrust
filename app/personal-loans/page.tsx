"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { sortPostsByDate } from "@/lib/utils/date-utils";

// Define the structure for each post item
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string;
  type?: string;
}

export default function PersonalLoansArchivePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // US Personal Loans and Credit-Building Solutions
  const allLoansContent = useMemo<PostItem[]>(
    () => [
      // Home Loans
      {
        title: "CIT Bank Home Loans",
        slug: "cit-bank-home-loans-benefits",
        description:
          "Discover CIT Bank Home Loans with competitive rates, flexible options, and expert guidance. Get pre-approved fast and access fixed-rate, adjustable-rate, and jumbo loans for your dream home.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/12/CitiBL1-820x429.png",
        date: "28 October 2025",
        type: "home",
      },
      // Credit Builder Cards (help with financing goals)
      {
        title: "Self Credit Builder Account + Visa Card",
        slug: "self-credit-builder-account-visa-card",
        description:
          "Build credit to qualify for better loan rates. Self's Credit Builder Account reports payments to all three bureaus with a $35/month plan at 15.69% APR.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/self-credit-builder-account-visa-card.webp",
        date: "27 October 2025",
        type: "credit_builder",
      },
      {
        title: "Chime Credit Builder Visa Secured Card",
        slug: "chime-credit-builder-visa-secured-card",
        description:
          "Build credit to access better financing options with no annual fees, no interest, and no credit check. Average 30-point credit score increase after 8 months.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/chime-credit-builder-visa-secured-card.webp",
        date: "24 October 2025",
        type: "credit_builder",
      },
      {
        title: "Varo Believe Card",
        slug: "varo-believe-card",
        description:
          "Build credit for future loan applications with no security deposit, 0% APR, and no annual fees. Average 40+ point credit score increase in just 3 months.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/varo-believe-card.webp",
        date: "24 October 2025",
        type: "credit_builder",
      },
      {
        title: "Step Visa Card",
        slug: "step-visa-card",
        description:
          "Start building credit early for free starting at age 13 with no credit score required, no fees, and 0% APR. Reports to all 3 bureaus with average 57-point score increase.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/step-visa-card.webp",
        date: "27 October 2025",
        type: "credit_builder",
      },
      {
        title: "Tilt Card",
        slug: "tilt-card",
        description:
          "Build credit with no security deposit or credit history required. Get up to 10% cash back, automatic limit increases, and approval even if denied elsewhere.",
        image: "https://media.topfinanzas.com/images/kardtrust/tilt-card.webp",
        date: "27 October 2025",
        type: "credit_builder",
      },
      // Pay-Over-Time Solutions
      {
        title: "Upgrade OneCard",
        slug: "upgrade-credit-card",
        description:
          "Combines credit card flexibility with personal loan predictability. Pay now or pay later with no annual fee and 14.99%-29.99% APR for structured financing.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/upgrade-credit-card.webp",
        date: "24 October 2025",
        type: "fintech",
      },
      {
        title: "Affirm Card",
        slug: "affirm-card",
        description:
          "Pay over time with flexible payment plans. No annual fees, no hidden charges, 0%-36% APR payment plans. Split purchases after checkout with transparent terms.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/affirm-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      {
        title: "Klarna Card",
        slug: "klarna-card",
        description:
          "Switch between debit mode and pay later plans. No annual fees, 0%-35.99% APR flexible financing, and up to 3.02% APY on balance.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/klarna-card.webp",
        date: "27 October 2025",
        type: "fintech",
      },
      // Cards for Fair/Rebuilding Credit
      {
        title: "Mission Lane Visa Credit Card",
        slug: "mission-lane-visa-credit-card",
        description:
          "Build or rebuild credit with starting credit lines from $300-$3,000. 19.99%-33.99% variable APR, $0-$59 annual fee. No security deposit on most options.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/mission-lane-visa-credit-card.webp",
        date: "27 October 2025",
        type: "credit_builder",
      },
      {
        title: "Avant Credit Card",
        slug: "avant-credit-card",
        description:
          "Build or rebuild your credit with no security deposit required. Proactive credit line increases and $300-$3,000 credit limits.",
        image:
          "https://media.topfinanzas.com/images/kardtrust/avant-credit-card.webp",
        date: "27 October 2025",
        type: "credit_builder",
      },
      {
        title: "Tomo Credit Card",
        slug: "tomo-credit-card-benefits",
        description:
          "No credit history required to apply. Flexible cashback rewards and zero annual fees to jumpstart your credit journey.",
        image:
          "https://us.topfinanzas.com/wp-content/uploads/2024/11/Tomo1.webp",
        date: "28 October 2025",
        type: "credit_builder",
      },
    ],
    [],
  );

  // Sort posts by date (newest first)
  const allLoansContentSorted = useMemo(
    () => sortPostsByDate(allLoansContent),
    [allLoansContent],
  );

  const filteredPosts = allLoansContentSorted;

  // Avoid rendering until client-side code is running
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
      <h1 className="text-4xl font-bold mb-6">
        Personal Loans & Credit Building
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explore financing options available in the US. From home loans to
        credit-building solutions and flexible payment plans, find the right
        financial products for your needs.
      </p>

      {/* Information callout */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          Building Credit for Better Loan Rates
        </h2>
        <p className="text-blue-700">
          A strong credit score helps you qualify for personal loans with lower
          interest rates. Many of the credit builder cards below can help
          improve your credit profile, making you eligible for better financing
          options in the future.
        </p>
      </div>

      {/* Grid of loan posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post: PostItem) => (
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
              category="Financing"
              categorySlug="/financial-solutions"
              date={post.date}
              type={post.type}
              showBadge={true}
            />
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div className="bg-primary/10 p-8 rounded-xl shadow-sm mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Looking for Credit Card Options?
        </h2>
        <p className="text-gray-700 mb-6">
          Explore our comprehensive guide to credit cards, including cashback
          rewards, travel cards, and options for all credit levels.
        </p>
        <Link
          href="/financial-solutions"
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 inline-block transition-colors rounded-full"
        >
          View All Financial Solutions
        </Link>
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Personal Loans & Credit Building Solutions | KardTrust",
        description:
          "Compare the best US personal loans, home loans, and credit-building options. Find financing solutions and credit builder cards to meet your financial goals.",
      }}
    >
      {pageContent}
    </BlogLayout>
  );
}
