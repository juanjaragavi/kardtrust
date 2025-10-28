import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Blue Cash Preferred® Card from American Express: Maximize Your Cash Back Rewards - KardTrust",
    description:
      "Discover the Blue Cash Preferred® Card from American Express offering 6% cash back at U.S. supermarkets, 6% on streaming, 3% at gas stations, and a $250 welcome bonus. Learn about benefits, rewards, and how to apply.",
    keywords:
      "Blue Cash Preferred, American Express cash back, Amex Blue Cash, supermarket cash back, streaming rewards, gas station rewards, grocery cash back, best cash back cards, Amex rewards card, US credit cards",
  };
}

export default function BlueCashPreferredPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Blue Cash Preferred® Card from American Express: Earn More on
              Everyday Spending
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Blue Cash Preferred® Card from American Express is designed
                for households that want to maximize cash back on everyday
                purchases. With industry-leading 6% cash back at U.S.
                supermarkets, 6% on select U.S. streaming subscriptions, and 3%
                at U.S. gas stations and on transit, this card turns routine
                expenses into substantial rewards. Plus, earn a $250 statement
                credit after spending $3,000 in your first 6 months.
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
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      6% Cash Back at U.S. Supermarkets:
                    </span>{" "}
                    Earn 6% cash back on up to $6,000 per year in purchases at
                    U.S. supermarkets (then 1%). This means you can earn up to
                    $360 annually just from grocery shopping, making it one of
                    the most rewarding cards for families who regularly shop for
                    groceries.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      6% Cash Back on Select Streaming:
                    </span>{" "}
                    Earn 6% cash back on select U.S. streaming subscriptions,
                    including popular services like Netflix, Hulu, Disney+,
                    Spotify, Apple Music, and more. With the average American
                    subscribing to multiple streaming services, this benefit
                    helps offset entertainment costs.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      3% Cash Back at Gas Stations:
                    </span>{" "}
                    Earn 3% cash back at U.S. gas stations and on transit
                    (including taxis/rideshare, parking, tolls, trains, buses,
                    and more). For commuters and frequent drivers, this category
                    delivers significant savings on transportation costs
                    throughout the year.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      $250 Welcome Bonus Offer:
                    </span>{" "}
                    Earn a $250 statement credit after you spend $3,000 in
                    purchases on your new card within your first 6 months of
                    card membership. This generous welcome bonus can help offset
                    the annual fee and jumpstart your cash back earnings.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/blue-cash-preferred-card-from-american-express-requirements">
                  <Button className="bg-[#180053] hover:bg-[#2a0080] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div
                id="kardtrust_ad_2"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <hr className="my-8" />

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/blue-cash-preferred-card-from-american-express.webp"
                  alt="Blue Cash Preferred Card from American Express"
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
                  The Blue Cash Preferred® Card from American Express has
                  established itself as one of the most valuable cash back cards
                  for American households, particularly those with significant
                  grocery and streaming expenses. Unlike many cash back cards
                  that offer flat-rate rewards across all categories, the Blue
                  Cash Preferred takes a strategic approach by providing
                  elevated earning rates in the spending categories where most
                  families allocate the largest portions of their budgets. This
                  targeted rewards structure means that cardholders can earn
                  substantially more cash back compared to traditional 1.5% or
                  2% flat-rate cards, making it an exceptional value proposition
                  for the right spending profile.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Maximizing Supermarket Rewards
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The card's standout feature is its 6% cash back at U.S.
                  supermarkets on up to $6,000 in purchases per year, then 1%
                  thereafter. To put this in perspective, according to the U.S.
                  Bureau of Labor Statistics, the average American household
                  spends approximately $5,259 annually on groceries. This means
                  that a typical family using the Blue Cash Preferred for all
                  supermarket purchases would earn approximately $316 in cash
                  back annually from groceries alone—more than three times the
                  $95 annual fee. The $6,000 annual cap is strategically set to
                  accommodate most households' grocery spending while
                  maintaining the card's profitability for American Express.
                  It's important to note that "supermarkets" include major
                  grocery chains like Kroger, Safeway, Whole Foods Market,
                  Trader Joe's, and regional supermarkets, but exclude
                  superstores like Walmart and Target, warehouse clubs like
                  Costco and Sam's Club, and convenience stores. Understanding
                  these distinctions is crucial for maximizing your rewards
                  potential.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Streaming Subscriptions: A Modern Rewards Category
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The 6% cash back on select U.S. streaming subscriptions
                  represents American Express's recognition of how modern
                  entertainment consumption has evolved. With Americans now
                  subscribing to an average of 4-5 streaming services—including
                  video platforms (Netflix, Disney+, Hulu, HBO Max, Apple TV+),
                  music services (Spotify, Apple Music, Amazon Music), and other
                  digital subscriptions—monthly streaming costs can easily reach
                  $50-$100 per household. The Blue Cash Preferred's 6% cash back
                  on these subscriptions means that a household spending $75
                  monthly on streaming services would earn $54 annually in cash
                  back from this category alone. This benefit applies to a wide
                  range of eligible subscriptions, including video streaming,
                  music streaming, audiobook services, podcast platforms, and
                  gaming subscriptions. The streamlined earning structure makes
                  it easy to offset the rising costs of digital entertainment
                  while enjoying your favorite content.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Transportation and Transit Benefits
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The 3% cash back at U.S. gas stations and on transit provides
                  valuable rewards for both drivers and those who rely on public
                  transportation. According to the American Automobile
                  Association (AAA), the average American driver spends
                  approximately $2,000-$3,000 annually on gasoline. With the
                  Blue Cash Preferred, this translates to $60-$90 in annual cash
                  back from gas purchases alone. The transit category is
                  particularly valuable for urban dwellers and commuters,
                  covering taxis, rideshare services (Uber, Lyft), parking fees,
                  tolls, trains, buses, subways, and ferries. This broad
                  definition ensures that whether you're driving, taking public
                  transportation, or using rideshare services, you're earning
                  enhanced rewards on your daily commute and travel expenses.
                  For city residents who don't own cars but regularly use
                  rideshare services or public transit, this category can
                  deliver substantial value that's often overlooked in
                  traditional cash back card comparisons.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-rewards-credit-cards/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Learn About Credit Card Rewards"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                {/* Related Articles Section */}
                <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                    Related Credit Card Resources:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700">
                    <li>
                      <Link
                        href="/personal-finance/cashback-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Complete Guide to Cash Back Credit Cards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best Rewards Credit Cards for 2025
                      </Link>
                    </li>
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
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Credit Card Interest Rates and APR
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Understanding the Annual Fee Value Proposition
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Blue Cash Preferred Card carries a $0 introductory annual
                  fee for the first year, then $95 thereafter. While some
                  consumers prefer no-annual-fee cards on principle, it's
                  essential to understand the mathematical value proposition
                  that justifies this cost for the right cardholders. Let's
                  break down the break-even analysis: If you spend just $125 per
                  month ($1,500 annually) at supermarkets, you'll earn $90 in
                  cash back from the 6% rate, nearly covering the $95 annual
                  fee. Add even modest spending in the streaming (6%) and
                  gas/transit (3%) categories, and the card quickly delivers net
                  positive value. For example, a household spending $250 monthly
                  at supermarkets ($3,000/year = $180 cash back), $50 monthly on
                  streaming ($600/year = $36 cash back), and $150 monthly at gas
                  stations ($1,800/year = $54 cash back) would earn $270
                  annually in enhanced category rewards alone—$175 more than the
                  annual fee. This doesn't even account for the $250 welcome
                  bonus, which provides significant first-year value. The key is
                  honestly assessing your spending patterns: if you spend at
                  least $1,500+ annually at supermarkets and regularly use
                  streaming services, the Blue Cash Preferred will almost
                  certainly deliver more value than its no-annual-fee
                  counterpart, the Blue Cash Everyday® Card.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features and Benefits:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        1% Cash Back on All Other Purchases:
                      </span>{" "}
                      Earn 1% cash back on all other purchases with no caps or
                      restrictions. This ensures you're always earning rewards
                      regardless of where you shop, making the Blue Cash
                      Preferred a viable everyday spending card even for
                      purchases outside the bonus categories.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Flexible Redemption Options:
                      </span>{" "}
                      Redeem your cash back as a statement credit, direct
                      deposit to eligible bank accounts, or use it toward
                      eligible purchases. Cash back is automatically credited to
                      your account and can be redeemed in any amount, with no
                      minimum thresholds or blackout dates. You can also use
                      your rewards to shop with points at Amazon or request
                      checks mailed to your address.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Purchase Protection and Extended Warranty:
                      </span>{" "}
                      American Express provides purchase protection covering
                      eligible purchases against accidental damage or theft for
                      up to 90 days from the purchase date (up to $1,000 per
                      occurrence, $50,000 per calendar year). Additionally,
                      eligible purchases with a manufacturer's warranty of 5
                      years or less receive an extended warranty for up to 1
                      additional year beyond the original warranty.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Car Rental Loss and Damage Insurance:
                      </span>{" "}
                      When you use your Blue Cash Preferred Card to reserve and
                      pay for your entire car rental, you may be covered for
                      damage or theft of a rental vehicle in a covered territory
                      (terms and conditions apply). This secondary coverage can
                      save you from purchasing expensive collision damage
                      waivers at rental counters.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Entertainment and Dining Access:
                      </span>{" "}
                      Get access to special ticket presales and exclusive
                      cardmember events through American Express Experiences.
                      This includes priority access to concerts, sporting
                      events, dining experiences, and cultural events before
                      tickets go on sale to the general public, enhancing your
                      lifestyle beyond just cash back rewards.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Global Assist Hotline:
                      </span>{" "}
                      When traveling more than 100 miles from home, American
                      Express Global Assist provides 24/7 assistance with
                      emergency card services, medical and legal referrals,
                      emergency transportation assistance, and help with lost
                      luggage or travel documents. This concierge-style service
                      adds travel peace of mind at no additional charge.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Security and Fraud Protection
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  American Express is renowned for industry-leading security
                  features and customer protection:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fraud Protection Guarantee:
                      </span>{" "}
                      You won't be held responsible for unauthorized charges on
                      your card. American Express's fraud detection systems
                      monitor transactions 24/7 for suspicious activity, and if
                      your card is compromised, you're protected under their $0
                      fraud liability guarantee. Simply report fraudulent
                      charges promptly to receive full protection.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Real-Time Purchase Alerts:
                      </span>{" "}
                      Receive instant notifications via the Amex mobile app,
                      email, or text message for every purchase made with your
                      card. These real-time alerts enable you to immediately
                      identify and report any unauthorized transactions,
                      enhancing your account security and fraud prevention.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Account Freeze Feature:
                      </span>{" "}
                      Temporarily lock your card instantly through the mobile
                      app or website if you misplace it, without needing to
                      cancel and replace the card. This feature provides peace
                      of mind if your card is temporarily lost but might still
                      be found, and you can unlock it with a single tap.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        EMV Chip and Contactless Technology:
                      </span>{" "}
                      Your Blue Cash Preferred Card comes equipped with EMV chip
                      technology for secure in-person transactions and
                      contactless payment capability for fast, secure tap-to-pay
                      purchases. These technologies provide enhanced security
                      compared to traditional magnetic stripe transactions.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Who Should Apply for This Card?
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Blue Cash Preferred® Card is ideally suited for:
                </p>

                <div className="space-y-4 my-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Families with Significant Grocery Spending:
                      </span>{" "}
                      If your household spends $1,500 or more annually at U.S.
                      supermarkets, the 6% cash back rate delivers exceptional
                      value. Larger families, those who cook frequently at home,
                      or households that purchase organic or specialty groceries
                      will see the greatest benefit from the supermarket
                      category.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Streaming Enthusiasts:
                      </span>{" "}
                      If you subscribe to multiple streaming services—whether
                      for video entertainment, music, audiobooks, or gaming—the
                      6% cash back on streaming subscriptions provides
                      meaningful savings on services you're already paying for
                      monthly.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Commuters and Frequent Drivers:
                      </span>{" "}
                      Regular commuters, rideshare users, or those with long
                      daily drives will appreciate the 3% cash back at gas
                      stations and on transit. This category covers gasoline,
                      tolls, parking, public transportation, and rideshare
                      services, making it valuable for both car owners and urban
                      residents.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Those Who Value American Express Benefits:
                      </span>{" "}
                      If you appreciate American Express's renowned customer
                      service, robust purchase protections, and access to
                      exclusive experiences and presale events, the Blue Cash
                      Preferred provides these benefits alongside category cash
                      back rewards.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Terms and Considerations
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-800 leading-5">
                    <span className="font-semibold">
                      Representative APR Example:
                    </span>{" "}
                    19.24%-29.99% variable APR on purchases and balance
                    transfers. Your APR will be based on your creditworthiness
                    and will be determined at the time of account opening. APR
                    will vary with the market based on the Prime Rate.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-800 leading-5">
                    <span className="font-semibold">Annual Fee:</span> $0
                    introductory annual fee for the first year, then $95. The
                    annual fee value depends on your spending patterns—calculate
                    your expected cash back earnings to ensure the card delivers
                    positive net value for your household.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                  <p className="text-sm text-gray-800 leading-5">
                    <span className="font-semibold">Important Warning:</span>{" "}
                    Missing payments or carrying balances can result in
                    significant interest charges that may outweigh cash back
                    rewards. To maximize the value of this card, pay your
                    balance in full each month. Cash back rewards are most
                    valuable when you avoid interest charges by paying on time
                    and in full.
                  </p>
                </div>

                <p className="text-xs text-gray-600 italic mb-6 text-left">
                  <span className="font-semibold">Disclaimer:</span> This
                  content is for informational purposes only and does not
                  constitute financial advice. Credit card terms, rates, fees,
                  and rewards are subject to change and may vary based on your
                  creditworthiness and application details. Always review the
                  Schumer Box, terms and conditions, and pricing information
                  provided by American Express before applying. We recommend
                  consulting with a qualified financial advisor to determine if
                  this card aligns with your personal financial situation and
                  goals.
                </p>

                <div className="text-left my-8">
                  <a
                    href="https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#180053] hover:bg-[#2a0080] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Check Your Eligibility
                    </Button>
                  </a>
                </div>
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
