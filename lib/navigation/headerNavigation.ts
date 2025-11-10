/**
 * Navigation items for the header component
 * Localized for the US market
 * Easily modifiable by LLM agents to update site navigation
 */

export interface NavigationItem {
  text: string;
  href: string;
  isEmphasis?: boolean; // Optional flag for "Show more..."
}

export interface DropdownItem {
  text: string;
  items: NavigationItem[];
}

export interface MegaMenuColumn {
  title: string;
  items: NavigationItem[];
}

export interface MegaMenu {
  title: string;
  columns: MegaMenuColumn[];
  featuredPosts?: {
    title: string;
    posts: Array<{
      title: string;
      href: string;
      image: string;
      category: string;
      categoryHref: string;
    }>;
  };
}

// Helper function to clean titles (remove potential pipe and extra text)
const cleanTitle = (title: string): string => {
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

export const headerNavigation = {
  /** Main navigation items */
  mainNavItems: [
    {
      text: "BLOG",
      href: "/blog",
    },
    {
      text: "ABOUT US",
      href: "/about-us",
    },
    {
      text: "CONTACT US",
      href: "/contact-us",
    },
  ],

  /** Categories dropdown */
  categoryDropdown: {
    text: "CATEGORIES",
    items: [
      {
        text: "Financial Solutions", // Main MOFU category
        href: "/financial-solutions",
      },
      {
        text: "Credit Cards", // Specific MOFU sub-category
        href: "/credit-cards", // Link to new dedicated page
      },
      {
        text: "Personal Loans", // Specific MOFU sub-category
        href: "/personal-loans", // Link to new dedicated page
      },
      {
        text: "Personal Finance", // TOFU category
        href: "/personal-finance",
      },
      {
        text: "Card Recommender", // Tool
        href: "/credit-card-recommender-p1",
      },
    ],
  },

  /** Blog megamenu - Updated with limited items and "Show more..." */
  blogMegaMenu: {
    title: "BLOG",
    columns: [
      // Column 1: Personal Finance Guides (Top 5 + Show more)
      {
        title: "Personal Finance",
        items: [
          {
            text: cleanTitle("Best Personal Loans in the US"),
            href: "/personal-finance/best-personal-loans",
          },
          {
            text: cleanTitle("Top Rewards Credit Cards"),
            href: "/personal-finance/best-rewards-credit-cards",
          },
          {
            text: cleanTitle("Best Cashback Credit Cards"),
            href: "/personal-finance/cashback-credit-cards",
          },
          {
            text: cleanTitle("Credit Cards - Types, Benefits..."),
            href: "/personal-finance/credit-card-types-benefits",
          },
          {
            text: cleanTitle("Practical Guide to Getting Out of Debt"),
            href: "/personal-finance/getting-out-of-debt",
          },
          { text: "Show more...", href: "/personal-finance", isEmphasis: true }, // Link to category archive
        ],
      },
      // Column 2: Financial Solutions - Credit Cards (Top 5 + Show more)
      {
        title: "Credit Cards",
        items: [
          {
            text: cleanTitle("Affirm Card"),
            href: "/financial-solutions/affirm-card",
          },
          {
            text: cleanTitle("Chase Sapphire Reserve"),
            href: "/financial-solutions/chase-sapphire-reserve",
          },
          {
            text: cleanTitle("Wells Fargo Active Cash Card"),
            href: "/financial-solutions/wells-fargo-active-cash-card",
          },
          {
            text: cleanTitle("SoFi Credit Card"),
            href: "/financial-solutions/sofi-credit-card",
          },
          {
            text: cleanTitle("Chime Credit Builder Visa Secured Card"),
            href: "/financial-solutions/chime-credit-builder-visa-secured-card",
          },
          {
            text: "Show more...",
            href: "/financial-solutions",
            isEmphasis: true,
          }, // Link to category archive
        ],
      },
      // Column 3: Financial Solutions - Loans (Top 5 + Show more)
      {
        title: "Loans",
        items: [
          {
            text: cleanTitle("Barclays Personal Loan"),
            href: "/financial-solutions/barclays-personal-loan",
          },
          {
            text: cleanTitle("Capify Business Finance"),
            href: "/financial-solutions/capify-personal-loan",
          },
          {
            text: cleanTitle("Fleximize Business Loans"),
            href: "/financial-solutions/fleximize-personal-loan",
          },
          {
            text: cleanTitle("Funding Circle Business Loan"),
            href: "/financial-solutions/funding-circle-personal-loan",
          },
          {
            text: cleanTitle("Funding Options Marketplace"),
            href: "/financial-solutions/funding-options-personal-loan",
          },
          {
            text: "Show more...",
            href: "/financial-solutions",
            isEmphasis: true,
          }, // Link to category archive
        ],
      },
    ],
    // Featured Posts Section - Remains the same
    featuredPosts: {
      title: "Featured Articles",
      posts: [
        {
          title: cleanTitle(
            "The 5-Minute Financial Health Check: Where Does Your Money Go?",
          ),
          href: "/personal-finance/5-minute-financial-health-check",
          image:
            "https://media.topfinanzas.com/images/kardtrust/5-minute-financial-health-check.webp",
          category: "Personal Finance",
          categoryHref: "/personal-finance",
        },
        {
          title: cleanTitle("Best Personal Loans in the US"),
          href: "/personal-finance/best-personal-loans",
          image:
            "https://media.topfinanzas.com/images/kardtrust/best-personal-loans.webp",
          category: "Personal Finance",
          categoryHref: "/personal-finance",
        },
        {
          title: cleanTitle("Affirm Card"),
          href: "/financial-solutions/affirm-card",
          image:
            "https://media.topfinanzas.com/images/kardtrust/affirm-card.webp",
          category: "Credit Cards",
          categoryHref: "/financial-solutions",
        },
        {
          title: cleanTitle("Chase Sapphire Reserve"),
          href: "/financial-solutions/chase-sapphire-reserve",
          image:
            "https://media.topfinanzas.com/images/kardtrust/chase-sapphire-reserve.webp",
          category: "Credit Cards",
          categoryHref: "/financial-solutions",
        },
      ],
    },
  },
};
