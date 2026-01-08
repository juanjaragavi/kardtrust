import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Tilt Card: Build Credit with Cash Back Rewards and No Security Deposit - KardTrust",
    description:
      "Discover Tilt credit cards offering credit building without security deposits or credit history. Get up to 10% cash back, automatic limit increases, and approval even if denied elsewhere. Compare Tilt Essentials, Motion, and Engage cards.",
    keywords:
      "Tilt Card, Tilt credit card, build credit, no security deposit, cash back credit card, credit building, bad credit, no credit history, Tilt Essentials, Tilt Motion, Tilt Engage, credit limit increase",
  };
}

export default function TiltCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Tilt Card: Revolutionary Credit Building with Cash Back Rewards
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            ></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                Tilt credit cards break the mold of traditional credit building
                by offering approval to those denied elsewhere, requiring no
                security deposit or credit history. Choose from three cards
                offering up to 10% cash back at select merchants, automatic
                credit limit increases, and a proven track record of helping 2
                out of 3 customers increase their limits within the first 6
                months.
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      No Security Deposit Required:
                    </span>{" "}
                    Unlike traditional secured credit cards demanding $200-$500
                    upfront, all three Tilt cards require absolutely no security
                    deposit. Pre-qualify with no impact to your credit score and
                    no credit history required, making credit building
                    accessible to everyone.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Approved When Others Say No:
                    </span>{" "}
                    Over 50% of customers approved via Tilt's website were
                    denied credit elsewhere in the past 6 months. Tilt's
                    innovative approach considers your real-time financial
                    habits through bank linking, giving you a chance to prove
                    your creditworthiness even without a credit score.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Cash Back Rewards Up to 10%:
                    </span>{" "}
                    Earn rewards while building credit with the Tilt Essentials
                    Card offering 3% cash back on gas and groceries with
                    AutoPay, or the Motion and Engage cards offering 1%-10% cash
                    back at select merchants. Watch your cash back grow
                    automatically in the Tilt app.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Automatic Credit Limit Increases:
                    </span>{" "}
                    2 out of 3 Tilt customers receive a credit limit increase in
                    their first 6 months. You have 4 ways to qualify for
                    increases: linking your bank account, reaching 4 months of
                    card ownership, achieving 6 on-time payments, and automatic
                    reviews over time.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/tilt-card-requirements">
                  <Button className="bg-[#e4e24e] hover:bg-yellow-400 text-gray-900 font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/tilt-card.webp"
                  alt="Tilt Credit Cards"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <div className="my-6">
                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Tilt is revolutionizing credit building for millions of
                  Americans who've been denied traditional credit cards. As a
                  financial technology company powered by their mission to say
                  "yes" when others say "no," Tilt considers your finances
                  today—not just your history. With over 5 million customers,
                  450,000 five-star reviews, and $2.5 billion in purchases made
                  possible, Tilt has established itself as a leader in
                  democratizing access to credit for underserved consumers.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Three Cards, One Mission: Building Your Credit
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Tilt offers three distinct credit cards, each designed for
                  different credit-building needs. When you apply, you'll be
                  automatically considered for all three cards and matched with
                  your best offer:
                </p>

                <div className="space-y-6 my-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                      Tilt Essentials Card
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Annual Fee:</span> $0
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Cash Back:</span> 3% on
                        gas & groceries with AutoPay
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Variable APR:</span>{" "}
                        29.74%
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Best For:</span>{" "}
                        Everyday expenses and maximizing bonus cash back on
                        essential purchases
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                      Tilt Motion Card
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Annual Fee:</span> $0
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Cash Back:</span> 1%-10%
                        at select merchants
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Variable APR:</span>{" "}
                        28.74%-33.74%
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Best For:</span> New to
                        credit or rebuilding credit scores with flexible rewards
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                      Tilt Engage Card
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Annual Fee:</span> $59
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Cash Back:</span> 1%-10%
                        at select merchants
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Variable APR:</span>{" "}
                        28.74%-33.74%
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Best For:</span>{" "}
                        Rebuilding credit with enhanced rewards and premium
                        features
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  How Tilt's Approval Process Works
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Tilt's innovative three-step approval process is designed to
                  maximize your chances of approval even if you've been denied
                  credit elsewhere. By considering your real-time financial
                  habits rather than just your credit history, Tilt can say
                  "yes" when traditional banks say "no."
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-7 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-gray-800 mb-1 text-left">
                        Check Your Eligibility in Minutes
                      </h3>
                      <p className="text-sm leading-5 text-left">
                        Pre-qualify with no impact to your credit score. Tilt
                        uses a soft credit pull that won't affect your credit
                        report, making it safe to check your eligibility even if
                        you're worried about further credit damage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-7 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-gray-800 mb-1 text-left">
                        Be Considered for All 3 Cards
                      </h3>
                      <p className="text-sm leading-5 text-left">
                        Find your Tilt Card match automatically. Tilt evaluates
                        your financial profile and recommends the best card
                        option—whether that's Essentials, Motion, or
                        Engage—based on your real-time money habits and
                        creditworthiness.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-7 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-gray-800 mb-1 text-left">
                        Make It Official
                      </h3>
                      <p className="text-sm leading-5 text-left">
                        Submit an application for your final decision. If
                        approved, you'll receive your card and can start
                        building credit immediately while earning cash back on
                        your everyday purchases.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/kardtrust/kardtrust-credit-cards-banner-ad.webp"
                      alt="Learn About Credit Cards"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      style={{ width: "auto", height: "auto" }}
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                {/* Related Articles Section */}
                <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                    Learn More About Building Credit:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-red-800">
                    <li>
                      <Link
                        href="/personal-finance/credit-card-types-benefits/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Credit Card Types and Benefits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximizing Credit Card Rewards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/no-annual-fee-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best No Annual Fee Credit Cards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/getting-out-of-debt/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Practical Guide to Getting Out of Debt
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Four Ways to Increase Your Credit Limit
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Tilt's innovative LEAP program provides multiple pathways to
                  credit limit increases, helping you build purchasing power as
                  you demonstrate responsible credit use. Unlike traditional
                  cards that rarely offer increases without requests, Tilt
                  automatically considers you for increases multiple times
                  throughout your card ownership:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Link Your Bank Account:
                      </span>{" "}
                      Didn't link your bank account during application? Receive
                      an automatic credit limit increase when you connect your
                      checking account. Bank linking helps Tilt verify your
                      income and spending patterns, demonstrating your ability
                      to handle a higher credit limit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">4-Month Milestone:</span>{" "}
                      Be automatically considered for a higher credit limit as
                      early as 4 months after receiving your card. This early
                      review recognizes responsible card usage and provides a
                      quick path to increased purchasing power.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        6 On-Time Payment Streak:
                      </span>{" "}
                      Make 6 qualifying consecutive on-time payments and qualify
                      for a credit limit increase. This reward for consistent
                      payment behavior demonstrates your creditworthiness and
                      financial discipline.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Ongoing Automatic Reviews:
                      </span>{" "}
                      Get more chances for credit limit increases with each
                      milestone you achieve. Tilt continuously reviews your
                      account and considers you for further increases over time
                      as you continue using your card responsibly.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features and Benefits:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Integration:
                      </span>{" "}
                      Add your Tilt Card to Apple Pay, Google Pay, or Samsung
                      Pay for secure, contactless payments anywhere digital
                      wallets are accepted. Enjoy the convenience of tap-to-pay
                      shopping while building your credit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        In-App Credit Score Monitoring:
                      </span>{" "}
                      Track your credit score progress directly within the Tilt
                      mobile app. Monitor your score updates and see how your
                      responsible card usage is improving your credit profile
                      over time, providing real-time feedback on your
                      credit-building journey.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Personalized Budgeting Tools:
                      </span>{" "}
                      Stay responsible with comprehensive spend breakdowns and
                      customizable budget caps. The Tilt app helps you monitor
                      your spending patterns and maintain financial discipline
                      while using your credit card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Automatic Savings Feature:
                      </span>{" "}
                      Enable Tilt's AI-powered automatic savings to set aside
                      money you can afford based on your income and spending
                      patterns. This optional feature helps you build emergency
                      funds while managing your credit card responsibly.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Comprehensive Mobile App:
                      </span>{" "}
                      Manage your entire Tilt experience from your smartphone
                      with the highly-rated Tilt app (4.8 stars on App Store).
                      View transactions, redeem cash back, monitor your credit
                      score, and access customer support—all in one place.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Real Customer Success Stories
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Tilt customers consistently report positive experiences with
                  credit building and approvals:
                </p>

                <div className="space-y-6 my-8">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#e4e24e]">
                    <p className="text-sm italic text-gray-700 mb-2">
                      "Gave me a chance and I thank them for that."
                    </p>
                    <p className="text-xs text-gray-600">
                      - David T., March 2025
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#e4e24e]">
                    <p className="text-sm italic text-gray-700 mb-2">
                      "Great system for building credit!"
                    </p>
                    <p className="text-xs text-gray-600">
                      - John S., October 2024
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#e4e24e]">
                    <p className="text-sm italic text-gray-700 mb-2">
                      "The first credit card that gave me a higher limit with my
                      low credit score at the time."
                    </p>
                    <p className="text-xs text-gray-600">
                      - Kalei C., June 2024
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#e4e24e]">
                    <p className="text-sm italic text-gray-700 mb-2">
                      "Thank you [Tilt] for giving me a chance when nobody else
                      would."
                    </p>
                    <p className="text-xs text-gray-600">
                      - Dawn B., January 2025
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Who Should Consider Tilt Cards?
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Tilt credit cards are ideal for several groups of consumers
                  looking to build or rebuild credit:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit Building Beginners:
                      </span>{" "}
                      Young adults, recent immigrants, or anyone with no credit
                      history can establish their credit profile without needing
                      an existing credit score or security deposit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Previously Denied Applicants:
                      </span>{" "}
                      Individuals who've been turned down by traditional banks
                      have a strong chance of approval with Tilt, as over 50% of
                      approved customers were denied credit elsewhere.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Rebuilding:</span>{" "}
                      Those recovering from past financial challenges can
                      rebuild their credit with a card designed to help them
                      succeed, including multiple opportunities for limit
                      increases as they demonstrate responsible use.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Cash Back Seekers:</span>{" "}
                      Consumers who want to earn rewards while building credit
                      will appreciate the bonus cash back opportunities on gas,
                      groceries, and select merchants—features rarely offered on
                      credit-building cards.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Mobile-First Users:</span>{" "}
                      Tech-savvy consumers who prefer managing finances through
                      smartphone apps will appreciate Tilt's comprehensive
                      mobile platform with credit monitoring, budgeting tools,
                      and automatic savings features.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Disclosures and Considerations
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">Representative APR:</span> The
                  Tilt Essentials Card has a variable APR of 29.74%, while the
                  Motion and Engage cards range from 28.74% to 33.74% variable
                  APR. For example, if you carried a $1,000 balance with a
                  29.74% APR for one year and made only minimum payments, you
                  could pay approximately $297 in interest charges. To avoid
                  interest, always pay your full statement balance by the due
                  date each month. The APR is variable and may change with
                  market conditions.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">Subscription Fee:</span> Tilt
                  offers a 14-day free trial for first-time customers. After the
                  trial concludes, Tilt charges an auto-recurring $8 per month
                  subscription fee to access the full suite of products and
                  services. If you do not wish to pay the subscription fee, you
                  must cancel your subscription before the end of your trial
                  period. You can cancel anytime by visiting "Billing" in the
                  mobile app or contacting help@tilt.com.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">Credit Score Impact:</span>{" "}
                  Pre-qualification uses a soft credit pull that does not affect
                  your credit score. However, if you proceed with a full
                  application after pre-qualifying, Tilt and WebBank will
                  perform a hard credit inquiry which may temporarily lower your
                  credit score by a few points. On-time payments reported to
                  credit bureaus may have a positive impact on your credit
                  score, while late or missed payments may negatively impact
                  your score.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">
                    Limit Increase Eligibility:
                  </span>{" "}
                  Not everyone will qualify for credit limit increases.
                  Eligibility requirements apply for each type of increase. If
                  you fail to pay at least your minimum payment by the due date,
                  you will not be considered for a credit limit increase and
                  your existing credit limit may be decreased. Terms and
                  conditions apply to the LEAP program.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">Not Financial Advice:</span>{" "}
                  This information is for educational and informational purposes
                  only and does not constitute financial advice. Your individual
                  financial situation, goals, and credit needs should guide your
                  credit card selection. Consider consulting with a financial
                  advisor to determine if a Tilt card aligns with your
                  credit-building strategy and overall financial plan.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Important:</span> Missing
                    payments can have serious consequences including late fees,
                    increased APR, negative credit reporting, and potential
                    account closure. Always make at least your minimum payment
                    by the due date. Tilt credit cards are issued by WebBank.
                    Consider your ability to repay before using credit. Tilt is
                    a financial technology company, not a bank.
                  </p>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/tilt-card-requirements">
                  <Button className="bg-[#e4e24e] hover:bg-yellow-400 text-gray-900 font-medium text-md py-2 px-8 rounded-full w-full">
                    Check Eligibility Requirements
                  </Button>
                </Link>
              </div>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
