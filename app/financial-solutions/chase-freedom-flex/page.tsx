import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Chase Freedom Flex℠: Cash Back Credit Card with Rotating Categories - KardTrust",
    description:
      "Discover the Chase Freedom Flex℠ with 5% cash back in quarterly bonus categories, $200 welcome bonus, 0% intro APR for 15 months, and no annual fee. Earn 5% on travel through Chase, 3% on dining and drugstores.",
    keywords:
      "Chase Freedom Flex, cash back credit card, rotating categories, quarterly bonus, Chase Ultimate Rewards, no annual fee, Chase credit card, 0% intro APR, travel rewards",
  };
}

export default function ChaseFreedomFlexPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="credit-cards"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Chase Freedom Flex℠: Maximize Your Cash Back Rewards with Rotating
              Categories and No Annual Fee
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Chase Freedom Flex℠ stands out as one of the most versatile
                cash back credit cards available in the United States, offering
                exceptional earning potential without the burden of an annual
                fee. With 5% cash back on up to $1,500 in combined purchases
                each quarter in rotating bonus categories you activate, plus 5%
                on travel purchased through Chase Travel℠, 3% on dining
                including takeout and eligible delivery services, 3% at
                drugstores, and 1% on all other purchases, this card delivers
                outstanding value for everyday spending. New cardholders can
                earn a $200 bonus after spending $500 on purchases in the first
                3 months, and benefit from a 0% intro APR for 15 months on
                purchases and balance transfers, making it an ideal choice for
                both rewards maximizers and those seeking financial flexibility.
              </p>

              <div
                id="kardtrust_ad_1"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#2d65a7] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      5% Cash Back in Rotating Quarterly Categories:
                    </span>{" "}
                    Earn 5% cash back on up to $1,500 in combined purchases each
                    quarter you activate in bonus categories that change
                    quarterly. Categories have included gas stations (excluding
                    Target and Walmart gas), grocery stores (excluding Target
                    and Walmart), internet, cable and phone services, select
                    streaming services, home improvement stores, department
                    stores, PayPal purchases, Amazon.com, wholesale clubs, and
                    fitness club and gym memberships. After reaching the $1,500
                    quarterly limit, earn 1% back on additional purchases in
                    those categories. Simply activate your categories each
                    quarter through the Chase website or mobile app to maximize
                    your rewards earning potential.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#2d65a7] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Enhanced Earning on Travel, Dining & Drugstores:
                    </span>{" "}
                    Earn 5% cash back on travel purchased through Chase Travel℠,
                    including flights, hotels, car rentals, cruises, and
                    vacation packages—no annual fee required to access these
                    travel earning rates. Earn 3% cash back at restaurants,
                    including takeout and eligible delivery services from
                    providers like DoorDash, Grubhub, and Uber Eats. Earn an
                    additional 3% back on drugstore purchases at chains like
                    CVS, Walgreens, and Rite Aid. These elevated earning rates
                    on everyday spending categories ensure consistent rewards
                    beyond the quarterly bonus categories, with no spending caps
                    or activation required.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#2d65a7] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      $200 Welcome Bonus & 0% Intro APR:
                    </span>{" "}
                    Earn a $200 bonus after you spend $500 on purchases in the
                    first 3 months from account opening—one of the most
                    achievable welcome bonuses in the cash back credit card
                    category. This product is available to you if you do not
                    have this card and have not received a new cardmember bonus
                    for this card in the past 24 months. Additionally, enjoy a
                    0% intro APR for 15 months from account opening on both
                    purchases and balance transfers. After the intro period, a
                    variable APR of 18.74% - 28.24% applies. Balance transfer
                    fee applies ($5 or 5% of the amount transferred, whichever
                    is greater). This combination of rewards and financing
                    flexibility makes it ideal for both new purchases and debt
                    consolidation.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#2d65a7] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      No Annual Fee & Flexible Redemption:
                    </span>{" "}
                    Enjoy all the benefits of the Chase Freedom Flex℠ with
                    absolutely no annual fee—you won't pay a penny to keep this
                    card in your wallet year after year. Your cash back rewards
                    never expire as long as your account remains open, and there
                    is no minimum amount required to redeem. Redeem your cash
                    back for statement credits, direct deposits to your bank
                    account, checks, gift cards, or shop with your points at
                    Amazon.com. If you have a Chase Ultimate Rewards earning
                    card like the Chase Sapphire Preferred® or Chase Sapphire
                    Reserve®, you can transfer your Freedom Flex points to your
                    Ultimate Rewards account and then to travel partners for
                    even greater value—potentially getting 1.5 to 2+ cents per
                    point value when booking travel or transferring to airline
                    and hotel partners.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/chase-freedom-flex-requirements">
                  <Button className="bg-[#2d65a7] hover:bg-[#244d85] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/chase-freedom-flex.webp"
                  alt="Chase Freedom Flex Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={80}
                />
              </div>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Unmatched Flexibility in Cash Back Rewards
                </h2>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  The Chase Freedom Flex℠ excels in providing extraordinary
                  flexibility in how you earn and use your cash back rewards.
                  Unlike many credit cards that lock you into fixed earning
                  rates, the Freedom Flex adapts to your spending throughout the
                  year with rotating 5% bonus categories that align with
                  seasonal spending patterns. During the holiday shopping
                  season, you might see Amazon.com or department stores as bonus
                  categories. In summer, gas stations often appear as a bonus
                  category. This strategic rotation ensures you earn maximum
                  rewards on purchases you're already making throughout the
                  year.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  The card's earning structure is particularly powerful for
                  households that plan their spending strategically. By
                  activating your bonus categories each quarter (a simple
                  process that takes less than 30 seconds online or in the Chase
                  mobile app), you can earn 5% back on common spending
                  categories like groceries, gas, streaming services, and home
                  improvement purchases. Combined with the card's permanent 3%
                  categories on dining and drugstores, you'll consistently earn
                  elevated rewards on everyday purchases without paying an
                  annual fee.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  Perhaps most impressively, Chase Freedom Flex rewards maintain
                  their value and flexibility even as your financial situation
                  evolves. Your cash back never expires as long as your account
                  stays open, you can redeem any amount (no minimum redemption
                  threshold), and redemption options include statement credits,
                  direct deposits, checks, and gift cards. For cardholders who
                  also hold a Chase Sapphire Preferred® or Reserve®, the
                  points become even more valuable—you can combine your Freedom
                  Flex points with Ultimate Rewards points and transfer them to
                  airline and hotel partners at a 1:1 ratio, potentially
                  unlocking values of 1.5 to 2+ cents per point when booking
                  premium travel experiences.
                </p>
              </section>

              <div
                id="kardtrust_ad_2"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Strategic Use of the 0% Intro APR Period
                </h2>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  Beyond its exceptional cash back earning potential, the Chase
                  Freedom Flex℠ offers one of the longest 0% intro APR periods
                  available in the cash back credit card market. With 0% intro
                  APR for 15 months from account opening on both purchases and
                  balance transfers, you have more than a year to finance large
                  purchases interest-free or consolidate high-interest credit
                  card debt from other cards. After the intro period ends, a
                  variable APR of 18.74% - 28.24% applies based on your
                  creditworthiness.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  The balance transfer feature is particularly valuable for
                  consumers carrying high-interest debt on other credit cards.
                  By transferring balances to the Chase Freedom Flex℠ during the
                  intro period, you can save hundreds or even thousands of
                  dollars in interest charges while paying down your debt. A
                  balance transfer fee applies (either $5 or 5% of the amount
                  transferred, whichever is greater), but this one-time cost is
                  typically far less than 15 months of interest on another card
                  charging 18-29% APR. For example, if you transfer a $5,000
                  balance from a card charging 25% APR, you'd save approximately
                  $1,465 in interest over 15 months, even after paying the $250
                  balance transfer fee.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  The purchase APR offer is equally compelling for planned
                  expenses. If you're facing a large expense like home repairs,
                  medical bills, or major appliances, you can use the Freedom
                  Flex to finance these purchases interest-free for 15 months
                  while still earning cash back rewards on every dollar spent.
                  This dual benefit of earning rewards while avoiding interest
                  charges makes the card an exceptionally smart choice for
                  consumers who can pay off their balances strategically during
                  the promotional period. Just be mindful to pay off the full
                  balance before the intro period ends to avoid paying interest
                  on any remaining balance at the standard variable APR.
                </p>
              </section>

              <div className="my-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">
                  Related Articles
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/personal-finance/maximize-credit-card-rewards"
                      className="text-[#2d65a7] hover:text-[#244d85] font-medium text-sm flex items-center group"
                    >
                      <span className="mr-2 text-[#2d65a7] group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                      How to Maximize Credit Card Rewards: Expert Strategies for
                      2025
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/personal-finance/credit-card-rotating-categories-guide"
                      className="text-[#2d65a7] hover:text-[#244d85] font-medium text-sm flex items-center group"
                    >
                      <span className="mr-2 text-[#2d65a7] group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                      Mastering Rotating Category Cards: Complete Activation
                      Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/chase-sapphire-reserve"
                      className="text-[#2d65a7] hover:text-[#244d85] font-medium text-sm flex items-center group"
                    >
                      <span className="mr-2 text-[#2d65a7] group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                      Chase Sapphire Reserve®: Premium Travel Rewards Card
                    </Link>
                  </li>
                </ul>
              </div>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Additional Protections and Benefits
                </h2>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  Beyond cash back rewards and intro APR offers, the Chase
                  Freedom Flex℠ includes valuable purchase protections and
                  benefits that provide peace of mind on every transaction.
                  These protections include purchase protection covering new
                  purchases against damage or theft for 120 days after purchase
                  (up to $10,000 per claim and $50,000 per account), extended
                  warranty protection that extends the manufacturer's warranty
                  by an additional year on eligible warranties of three years or
                  less, and auto rental collision damage waiver that provides
                  secondary coverage when you decline the rental company's
                  collision insurance and charge the entire rental to your card.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  Chase also provides robust fraud protection with $0 liability
                  for unauthorized charges, real-time fraud monitoring, instant
                  purchase notifications through the Chase mobile app, and the
                  ability to lock your card instantly if it's misplaced. The
                  Chase mobile app offers additional security features including
                  the ability to set spending limits, create temporary virtual
                  card numbers for online shopping, and receive alerts for
                  specific transaction types. These security features ensure
                  your account and personal information remain protected while
                  you maximize your rewards earning.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  Cardholders also gain access to Chase Offers, a program that
                  provides additional cash back opportunities at participating
                  merchants beyond the card's standard earning rates. By
                  activating offers through the Chase website or mobile app, you
                  can earn extra cash back at popular retailers, restaurants,
                  and service providers. These offers stack with your regular
                  rewards earning, potentially adding hundreds of dollars in
                  additional cash back annually. The Chase Credit Journey
                  feature also provides free credit score monitoring and
                  analysis, helping you track and improve your credit health
                  over time.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Chase Ultimate Rewards Ecosystem Integration
                </h2>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  One of the Chase Freedom Flex℠'s most powerful features is its
                  integration with the Chase Ultimate Rewards ecosystem. While
                  Freedom Flex cash back can be redeemed as statement credits or
                  direct deposits at a value of 1 cent per point, cardholders
                  who also hold a Chase Sapphire Preferred® or Chase Sapphire
                  Reserve® can unlock significantly higher values by
                  transferring their Freedom Flex points to their Sapphire
                  card's Ultimate Rewards account. Once combined, these points
                  can be redeemed for 1.25 cents per point value when booking
                  travel through Chase Travel℠ with Sapphire Preferred®, or 1.5
                  cents per point with Sapphire Reserve®.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  Even more valuable, combined Ultimate Rewards points can be
                  transferred to Chase's airline and hotel partners at a 1:1
                  ratio, including United MileagePlus, Southwest Rapid Rewards,
                  JetBlue TrueBlue, British Airways Executive Club, Air France
                  KLM Flying Blue, Emirates Skywards, Singapore Airlines
                  KrisFlyer, Aer Lingus AerClub, Iberia Plus, Virgin Atlantic
                  Flying Club, World of Hyatt, IHG One Rewards, and Marriott
                  Bonvoy. Strategic travelers regularly achieve values of 2
                  cents per point or higher by transferring points to partners
                  and booking premium cabin flights or luxury hotel
                  stays—effectively making the Freedom Flex's 5% quarterly
                  categories worth 10% or more when redeemed optimally.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  This ecosystem approach creates a powerful strategy: use the
                  no-annual-fee Chase Freedom Flex℠ to earn points at elevated
                  rates in bonus categories, then transfer those points to a
                  Chase Sapphire card to unlock premium redemption options. Many
                  rewards optimization experts consider this pairing one of the
                  most valuable credit card strategies available in the US
                  market, as it allows you to earn points at rates as high as 5X
                  without paying annual fees, then redeem those points for
                  premium travel experiences worth thousands of dollars. For
                  example, earning 5% back in the quarterly gas station category
                  could translate to 10 cents per dollar spent when points are
                  transferred to airline partners and used for premium cabin
                  flights—an exceptional return unmatched by most other no
                  annual fee cards.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Should Consider the Chase Freedom Flex℠?
                </h2>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  The Chase Freedom Flex℠ is ideally suited for consumers who
                  want to maximize cash back rewards without paying an annual
                  fee and are willing to activate rotating bonus categories each
                  quarter. This card excels for households that can
                  strategically time their spending to align with bonus
                  categories—for example, stocking up on groceries when grocery
                  stores are a 5% category, or concentrating gas purchases
                  during quarters when gas stations earn 5% back. The card is
                  also excellent for consumers who frequently dine out or order
                  delivery, as the permanent 3% earning rate on dining ensures
                  consistent rewards year-round.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  The Freedom Flex is particularly valuable for consumers who
                  already hold or plan to obtain a Chase Sapphire Preferred® or
                  Reserve® card, as the ability to pool and transfer points
                  dramatically increases redemption value. This makes the
                  Freedom Flex an essential card for travel rewards enthusiasts
                  who want to earn points at high rates on everyday spending
                  while reserving their premium travel card for categories that
                  earn elevated rewards on those cards. The no annual fee
                  structure means there's virtually no downside to keeping this
                  card active long-term, even if you don't use it as your
                  primary card.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  Additionally, the Chase Freedom Flex℠ serves as an excellent
                  first rewards credit card for consumers building credit or new
                  to the rewards game, as the earning structure is
                  straightforward to understand and the $200 welcome bonus
                  provides immediate value with minimal spending requirements.
                  The 0% intro APR offer also makes it attractive for consumers
                  planning large purchases or looking to consolidate debt from
                  higher-interest cards. However, consumers who rarely activate
                  bonus categories or prefer simpler flat-rate cash back cards
                  might be better served by alternative cards that offer
                  consistent earning rates across all categories without
                  requiring quarterly activation.
                </p>
              </section>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  ⚠️ Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative APR Example:</strong> When you carry a
                  balance after the 15-month intro period, you will be charged
                  interest. For example, if you have a balance of $5,000 at a
                  variable APR of 23.49% (midpoint of the 18.74% - 28.24% range)
                  and make only minimum payments, you would pay approximately
                  $1,175 in interest over one year, assuming no additional
                  purchases. Your actual APR depends on your creditworthiness
                  and will be disclosed during the application process.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Risk Warning:</strong> Credit cards are a form of
                  borrowing. Missing payments or carrying high balances can
                  damage your credit score and result in late fees, penalty
                  APRs, and collection actions. Only apply for credit if you can
                  manage repayment responsibly. The 0% intro APR offer is
                  temporary—plan to pay off balances before the promotional
                  period ends to avoid interest charges.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Not Financial Advice:</strong> This content is for
                  informational purposes only and does not constitute financial,
                  legal, or credit advice. Credit card features, terms, and
                  availability are subject to change and may vary based on your
                  creditworthiness, location, and other factors. Always review
                  the official terms and conditions, Schumer Box disclosures,
                  and pricing and terms before applying. Consult with a
                  qualified financial advisor to determine if this product
                  aligns with your specific financial situation and goals.
                </p>
              </section>

              <div className="text-left my-8">
                <a
                  href="https://creditcards.chase.com/cash-back-credit-cards/freedom/flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#2d65a7] hover:bg-[#244d85] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Apply Now - Visit Official Chase Website
                  </Button>
                </a>
              </div>

              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
