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
        "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp", // Placeholder
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
        "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
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
      featuredImage: "https://media.topfinanzas.com/images/uk/APR.webp", // Placeholder
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
        "https://media.topfinanzas.com/images/best-personal-loans.webp",
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
        "https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp",
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
        imageSrc="https://media.topfinanzas.com/images/banner-home.webp"
        imageAlt="KardTrust - Financial guidance and comparison"
      />

      {/* 50/50 Sections - Placed before blog posts */}
      <FiftyFiftySection
        title="Find the Perfect Credit Card for Your Lifestyle"
        description="Navigate the overwhelming world of credit cards with confidence. We analyze hundreds of options to recommend cards that actually match your spending habits and financial goals. Whether you're building credit, maximizing rewards, or consolidating debt, we'll help you find the right fit – without the sales pitch."
        imageSrc="https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp"
        imageAlt="Credit card comparison"
        ctaText="Explore Credit Cards"
        ctaLink="/credit-cards"
        imagePosition="right"
        bgColor="white"
      />

      <FiftyFiftySection
        title="Smart Personal Loan Solutions"
        description="Finding the right personal loan doesn't have to be complicated. We break down your options, compare rates from leading lenders, and help you understand the terms that matter. From debt consolidation to major purchases, make informed decisions with our comprehensive loan guides."
        imageSrc="https://media.topfinanzas.com/images/best-personal-loans.webp"
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
              image="https://media.topfinanzas.com/images/best-personal-loans.webp"
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
