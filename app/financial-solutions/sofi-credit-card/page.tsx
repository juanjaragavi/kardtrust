import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "SoFi Credit Card: Unlimited 2% Cash Back with No Annual Fee - KardTrust",
    description:
      "Discover the SoFi Unlimited 2% Credit Card offering unlimited cash back rewards on all purchases, no annual fees, Mastercard World Elite benefits, and exclusive travel perks. Perfect for building wealth with every purchase.",
    keywords:
      "SoFi credit card, unlimited 2% cash back, no annual fee, Mastercard World Elite, travel rewards, cell phone protection, cash back rewards, SoFi banking, US credit cards, excellent credit",
  };
}

export default function SoFiCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              SoFi Credit Card: Earn Unlimited 2% Cash Back on Every Purchase
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            ></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The SoFi Unlimited 2% Credit Card delivers straightforward value
                with unlimited 2% cash back rewards on all eligible purchases,
                no annual fee, and premium Mastercard World Elite benefits.
                Designed for members with excellent credit, this card eliminates
                complexity with no rotating categories, spending caps, or
                minimum redemption thresholds.
              </p>

              <section className="my-8">
                <h2 className="text-lg font-bold text-gray-800 mb-6 text-left">
                  Key Features of the SoFi Unlimited 2% Card
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Unlimited 2% Cash Back Rewards:
                      </span>{" "}
                      Earn 2 rewards points for every dollar spent on all
                      eligible purchases with no limits, caps, or rotating
                      categories. Your rewards are automatically applied and can
                      be redeemed at a rate of 1 cent per point toward active
                      SoFi accounts including Checking & Savings, investing
                      accounts, loan payments, or SoFi Travel bookings.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Annual Fee Whatsoever:
                      </span>{" "}
                      Keep more money in your pocket with absolutely no annual
                      fee. Unlike premium rewards cards that charge $95-$550
                      annually, the SoFi Unlimited 2% Card lets you build wealth
                      through cash back without paying for the privilege year
                      after year.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        3% Cash Back on SoFi Travel:
                      </span>{" "}
                      Boost your rewards to 3% when you book trips through the
                      SoFi Travel Portal powered by Expedia. This elevated
                      earning rate applies to flights, hotels, car rentals, and
                      vacation packages, potentially saving you up to 10% or
                      more on eligible bookings when combined with portal
                      discounts.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mastercard World Elite Benefits:
                      </span>{" "}
                      Access premium perks including 24/7 Travel Concierge
                      service, $5 monthly Lyft credits, free 2-day shipping with
                      ShopRunner, a 2-month Instacart free trial, and exclusive
                      entertainment and dining experiences nationwide.
                    </div>
                  </div>
                </div>
              </section>

              <div className="my-8 text-left sm:text-left">
                <Link href="/financial-solutions/sofi-credit-card-requirements">
                  <Button className="bg-[#329192] hover:bg-teal-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Check Requirements & Apply
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/sofi-credit-card.webp"
                  alt="SoFi Credit Card Benefits"
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

              <section className="my-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Why Choose the SoFi Unlimited 2% Card?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The SoFi Unlimited 2% Credit Card stands out in the crowded
                  cash back rewards market by offering simplicity without
                  sacrificing value. While many cards require you to track
                  quarterly bonus categories or maintain minimum spending
                  thresholds, SoFi's approach is refreshingly straightforward:
                  earn unlimited 2% on everything you buy, all the time.
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Exceptional Flat-Rate Rewards:
                      </span>{" "}
                      The 2% unlimited cash back rate places this card among the
                      top tier of flat-rate rewards cards in the US market. This
                      means you're earning $20 in rewards for every $1,000 you
                      spend, regardless of merchant category, time of year, or
                      spending caps.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Redemption Hassles:
                      </span>{" "}
                      Unlike cards that impose minimum redemption thresholds
                      (often $25 or more), SoFi allows flexible redemption with
                      no minimums. Redeem your rewards as statement credits or
                      distribute them across SoFi products including your
                      checking account, savings, investment accounts, or toward
                      loan payments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Integrated Financial Ecosystem:
                      </span>{" "}
                      The card works seamlessly with SoFi's broader financial
                      platform, allowing you to manage banking, investing,
                      loans, and credit cards all in one place. This integration
                      enables holistic financial management with your rewards
                      flowing directly into accounts that help you build wealth.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Premium Protections Without Premium Fees:
                      </span>{" "}
                      Mastercard World Elite benefits typically come with cards
                      charging annual fees. SoFi provides these premium
                      perks—24/7 concierge, travel benefits, shopping perks—at
                      no cost, delivering exceptional value for cardholders with
                      excellent credit.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Premium Protection Features
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Beyond cash back rewards, the SoFi Unlimited 2% Card includes
                  comprehensive protection features that safeguard your finances
                  and provide peace of mind:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Zero Fraud Liability Protection:
                      </span>{" "}
                      Never pay for unauthorized charges on your account. If
                      your card information is compromised or used fraudulently,
                      you're protected with $0 liability, ensuring fraudulent
                      transactions won't cost you anything.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mastercard ID Theft Protection:
                      </span>{" "}
                      Receive proactive monitoring and alerts if your personal
                      information is found on suspicious websites or in data
                      breaches. This service, provided by Generali Global
                      Assistance, comes at no additional cost when you register
                      your card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Cell Phone Protection:
                      </span>{" "}
                      Get up to $1,000 in yearly cell phone protection coverage
                      ($800 maximum per claim, 2 claims per year) when you pay
                      your monthly cell phone bill with your SoFi Credit Card.
                      This covers theft and certain repairs, saving you from
                      expensive out-of-pocket replacement costs.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Foreign Transaction Fees:
                      </span>{" "}
                      Travel internationally without penalty. The SoFi Unlimited
                      2% Card charges no foreign transaction fees, meaning you
                      earn the same 2% cash back on international purchases
                      without the typical 3% surcharge many cards impose.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Mastercard World Elite Exclusive Benefits
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  As a Mastercard World Elite cardholder, you gain access to a
                  suite of premium services and experiences that elevate your
                  lifestyle:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        24/7 Travel Concierge Service:
                      </span>{" "}
                      Call anytime for assistance with travel planning,
                      restaurant reservations, entertainment bookings, gift
                      purchases, and more. This personal concierge service
                      handles time-consuming tasks so you can focus on enjoying
                      your experiences.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        $5 Monthly Lyft Credits:
                      </span>{" "}
                      Receive $5 in Lyft ride credits every month, totaling $60
                      annually. These credits automatically apply to your Lyft
                      account when you link your SoFi Credit Card, offsetting
                      regular transportation costs.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Free 2-Day Shipping with ShopRunner:
                      </span>{" "}
                      Enjoy complimentary 2-day shipping and free returns from
                      140+ online stores including Saks Fifth Avenue, Neiman
                      Marcus, GNC, and more. This perk alone can save hundreds
                      annually if you shop frequently online.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        2-Month Instacart Free Trial:
                      </span>{" "}
                      Get two months of Instacart Express membership free,
                      providing unlimited free delivery on orders over $35 from
                      thousands of grocery stores. After the trial, decide if
                      you want to continue the membership.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-rewards-strategies/">
                    <Image
                      src="https://media.topfinanzas.com/images/kardtrust/kardtrust-credit-cards-banner-ad.webp"
                      alt="Credit Card Rewards Strategies"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Maximize Your Rewards with SoFi Travel
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The SoFi Travel Portal, powered by Expedia, offers an elevated
                  rewards earning opportunity and exclusive member savings:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        3% Cash Back on Travel Bookings:
                      </span>{" "}
                      When you book flights, hotels, car rentals, or vacation
                      packages through the SoFi Travel Portal using your SoFi
                      Credit Card, you earn 3% cash back instead of the standard
                      2%. This 50% boost in rewards can add up significantly on
                      major travel expenses.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Save Up to 10% or More:
                      </span>{" "}
                      SoFi members can access exclusive discounts on eligible
                      bookings through the travel portal, potentially saving 10%
                      or more on hotels, vacation packages, and other travel
                      services. Combined with your 3% cash back, this represents
                      substantial savings on travel spending.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Access to Expedia's Inventory:
                      </span>{" "}
                      The SoFi Travel Portal provides access to Expedia's
                      massive travel inventory including hundreds of airlines,
                      over 500,000 hotels worldwide, rental cars from all major
                      companies, and bundled vacation packages that offer
                      additional savings.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Simple Earning Process:
                      </span>{" "}
                      Your 3% travel rewards are automatically calculated and
                      credited to your account within 7 business days after
                      transactions post. You don't need to activate categories
                      or jump through hoops—just book through the portal and
                      earn.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding Your Cash Back Rewards
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  SoFi's rewards program is designed for simplicity and
                  flexibility, ensuring you get maximum value from your
                  spending:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Automatic Points Earning:
                      </span>{" "}
                      You earn 2 rewards points for every dollar spent on
                      purchases automatically—whether you swipe, dip, tap, or
                      pay online. There's no need to activate quarterly
                      categories or track spending limits. Your rewards
                      accumulate passively with every transaction.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Flexible Redemption Options:
                      </span>{" "}
                      Redeem rewards points at a rate of 1 cent per point toward
                      active SoFi accounts including Checking & Savings
                      accounts, SoFi Money accounts, Active Invest or Automated
                      Invest accounts, Personal Loans, Student Loan Refinance,
                      or SoFi Travel purchases. This flexibility lets you deploy
                      rewards where they're most valuable to you.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Expiration or Limits:
                      </span>{" "}
                      Your rewards don't expire as long as your account remains
                      open and in good standing. There are no annual earning
                      caps, no quarterly spending limits, and no restrictions on
                      when or how you can redeem your accumulated rewards.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Real-Time Tracking:</span>{" "}
                      Monitor your rewards balance in real-time through the SoFi
                      mobile app or website. You can see exactly how many points
                      you've earned, track your progress toward redemption
                      goals, and manage all aspects of your rewards in one
                      convenient location.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Should Apply for This Card?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The SoFi Unlimited 2% Credit Card is ideally suited for:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Consumers with Excellent Credit:
                      </span>{" "}
                      This card is designed for applicants with excellent credit
                      histories. SoFi considers factors including no loan
                      defaults in the past 7 years, more than 5 years of on-time
                      payments on loans and credit cards, and no payments more
                      than 30 days late in the past year.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Everyday Spenders Seeking Simplicity:
                      </span>{" "}
                      If you prefer a straightforward rewards structure without
                      tracking rotating categories or activating bonus earning
                      periods, this card's unlimited flat-rate 2% cash back
                      eliminates complexity while delivering consistent value.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        SoFi Ecosystem Members:
                      </span>{" "}
                      Current SoFi banking, investing, or loan customers benefit
                      most from this card's integration with other SoFi
                      products. You can seamlessly redeem rewards toward your
                      existing accounts and manage your entire financial life in
                      one platform.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Frequent Travelers:</span>{" "}
                      The combination of no foreign transaction fees, 3% cash
                      back on SoFi Travel bookings, Mastercard World Elite
                      travel benefits, and cell phone protection makes this an
                      excellent choice for regular domestic and international
                      travelers.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Important Terms and Conditions
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Before applying, understand these key terms:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Approval:</span>{" "}
                      Accounts are subject to additional credit approval. To
                      qualify, you must meet SoFi's pre-established underwriting
                      requirements, including verification of sufficient income
                      to support your ability to pay. SoFi will not extend
                      credit if you don't meet their pre-established criteria.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Minimum Credit Line:
                      </span>{" "}
                      If approved for a SoFi Credit Card, your credit access
                      line will be at least $500. Your actual credit limit will
                      be determined based on your creditworthiness, income, and
                      other factors assessed during the underwriting process.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Rewards Exclusions:</span>{" "}
                      No rewards points are earned on reversed transactions,
                      returned purchases, or other similar transactions. This is
                      standard industry practice to prevent rewards gaming and
                      ensure legitimate earning.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Application Processing Time:
                      </span>{" "}
                      Please allow up to 30 days from date of submission to
                      process your application. Most applications receive a
                      decision much faster, but complex cases may require
                      additional review time.
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Important:</span> The SoFi
                    Unlimited 2% Card is recommended for customers with
                    excellent credit. Factors considered include loan default
                    history, years of on-time payments (5+ years preferred), and
                    recent payment behavior (no 30+ day late payments in the
                    past year). Meeting these criteria does not guarantee
                    approval as additional factors from your application and
                    credit history will be considered.
                  </p>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Representative APR Example
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">Variable APR:</span> The SoFi
                  Unlimited 2% Card carries a variable Annual Percentage Rate
                  (APR) that will be determined based on your creditworthiness
                  at the time of approval. Variable APRs on credit cards are
                  tied to an underlying index (typically the Prime Rate) and can
                  change quarterly.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">Representative Example:</span>{" "}
                  If you carry a balance of $3,000 for one year at a variable
                  APR of 18.99% (assuming this rate for illustration purposes),
                  you would pay approximately $570 in interest charges over that
                  year. However, since the card offers unlimited 2% cash back,
                  spending $3,000 would also earn you approximately $60 in
                  rewards, partially offsetting the interest cost. The best
                  strategy is to pay your balance in full each month to avoid
                  interest charges entirely while maximizing your rewards.
                </p>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/sofi-credit-card-requirements">
                  <Button className="bg-[#329192] hover:bg-teal-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Full Requirements
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
