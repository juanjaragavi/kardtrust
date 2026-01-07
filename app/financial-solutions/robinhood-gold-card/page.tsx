import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Robinhood Gold Card: 3% Cash Back on Everything with Premium Benefits - KardTrust",
    description:
      "Discover the Robinhood Gold Card offering 3% cash back on all purchases, 5% back on travel, no annual fee, virtual cards, family card sharing, and Visa Signature benefits. Exclusive to Robinhood Gold members.",
    keywords:
      "Robinhood Gold Card, 3% cash back credit card, Robinhood credit card, no annual fee, virtual cards, family credit card, Visa Signature benefits, travel rewards, cash back rewards, investment credit card",
  };
}

export default function RobinhoodGoldCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Robinhood Gold Card: Revolutionary 3% Cash Back on Every Purchase
            </h1>

            <div id="square02" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Robinhood Gold Card redefines premium credit cards by
                offering an unprecedented 3% cash back on all purchases—no
                categories, no rotating calendars, no caps. Exclusive to
                Robinhood Gold members, this stainless steel Visa Signature card
                combines industry-leading rewards with innovative features like
                virtual cards, family card sharing, and seamless integration
                with your Robinhood investment portfolio.
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Industry-Leading 3% Cash Back:
                    </span>{" "}
                    Earn 3% cash back on absolutely everything—gas, groceries,
                    dining, streaming, bills, and all other everyday purchases.
                    Unlike traditional rewards cards with rotating categories or
                    complex tier systems, Robinhood gives you the same generous
                    3% rate across the board with no spending caps or annual
                    limits.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Boosted 5% Travel Rewards:
                    </span>{" "}
                    Get even more when you book travel through the Robinhood
                    Travel Portal. Earn 5% cash back on flights, hotels, rental
                    cars, and vacation packages—making the Gold Card one of the
                    best travel rewards cards available without complicated
                    point transfers or blackout dates.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      No Annual Fee with Gold Membership:
                    </span>{" "}
                    The Robinhood Gold Card has no annual fee when you maintain
                    your Robinhood Gold subscription ($5/month). This membership
                    also includes 3% APY on uninvested cash, professional
                    research, Level II market data, and other premium investing
                    features—making the combined value exceptional.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Virtual Cards for Smart Spending:
                    </span>{" "}
                    Generate unlimited disposable virtual card numbers for safer
                    online shopping and subscription management. Use different
                    virtual numbers for each merchant to protect your actual
                    card details and easily track or cancel specific
                    subscriptions without affecting other purchases.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/robinhood-gold-card-requirements">
                  <Button className="bg-[#EDECDB] hover:bg-[#d8d7c2] text-gray-900 font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/robinhood-gold-card.webp"
                  alt="Robinhood Gold Card"
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
                  The Robinhood Gold Card represents a fundamental shift in how
                  credit cards reward consumers. By offering a flat 3% cash back
                  rate on all purchases, Robinhood eliminates the complexity and
                  mental overhead of traditional rewards programs. You don't
                  need to track rotating categories, activate quarterly bonuses,
                  or remember which card to use where. Every purchase earns the
                  same generous 3% back automatically, with cash deposited
                  directly into your Robinhood brokerage account where it can be
                  invested for potential long-term growth.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  The Power of Unlimited 3% Cash Back
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Most credit cards claiming "unlimited rewards" offer only 1.5%
                  or 2% cash back on everything. Cards with higher rates
                  typically impose category restrictions, spending caps, or
                  complex tier systems. The Robinhood Gold Card's flat 3% rate
                  on all purchases—with no annual spending limit—means you earn
                  more on every dollar you spend. For someone spending $30,000
                  annually on their credit card, that's $900 in cash back
                  compared to just $450 with a typical 1.5% card or $600 with a
                  2% card. The extra $300-$450 annually adds up significantly
                  over time, especially when invested in your Robinhood
                  portfolio.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Premium Travel Benefits Without the Premium Price
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The 5% cash back on travel bookings through the Robinhood
                  Travel Portal rivals cards with $450+ annual fees. Whether
                  you're booking a business trip or family vacation, that extra
                  2% back (compared to the standard 3%) can quickly offset the
                  cost of your Robinhood Gold membership. A $3,000 family
                  vacation booked through the portal earns $150 back instead of
                  $90—a $60 difference that covers your entire year of Gold
                  membership ($60). The travel portal offers competitive rates
                  on flights, hotels, and rental cars from major providers,
                  making it easy to maximize your rewards without sacrificing
                  choice or convenience.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Revolutionary Virtual Card Technology
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Virtual cards are one of the Gold Card's most innovative
                  features, offering enhanced security and control over your
                  online spending. Generate unique, disposable card numbers for
                  each merchant or subscription service. If a virtual card
                  number is compromised in a data breach, only that number is
                  affected— your physical card and other virtual numbers remain
                  secure. You can also set spending limits or lock individual
                  virtual cards without affecting your other payment methods.
                  This makes managing subscriptions effortless: assign each
                  service its own virtual card, and simply delete the virtual
                  card when you want to cancel without worrying about lingering
                  charges.
                </p>

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
                    Learn More About Premium Credit Cards:
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
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Family Card Sharing: Credit Building for Everyone
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Robinhood Gold Card's family features are uniquely
                  generous in the credit card industry. Add authorized users of
                  any age—including children and teens—so everyone in your
                  family can build their credit history early. You maintain
                  complete control with the ability to set individual spending
                  limits, monitor all transactions in real-time, and instantly
                  lock any card if it's lost or if spending needs to be
                  temporarily restricted. All family spending consolidates under
                  your account, and everyone benefits from the same 3% cash back
                  rate. Authorized users receive plastic cards at no cost, with
                  optional stainless steel upgrades available for a fee.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Seamless Robinhood Ecosystem Integration
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Cash back earned with the Robinhood Gold Card is automatically
                  calculated in points (1 point = $0.01) and can be redeemed
                  directly into your Robinhood brokerage account. This seamless
                  integration means your rewards can immediately start working
                  for you through investments. Redeem points for stocks, ETFs,
                  options, or crypto, or keep them as cash earning 3% APY.
                  Unlike traditional cash back cards where rewards sit idle or
                  get spent on purchases, Robinhood rewards can grow through the
                  power of compound returns. You can also redeem points for
                  travel bookings, gift cards, statement credits, or special
                  items like metal card upgrades and airport lounge passes.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Comprehensive Visa Signature Benefits
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Trip Interruption Protection:
                      </span>{" "}
                      Reimbursement up to $1,500 per trip if your trip is
                      interrupted due to covered reasons like illness, severe
                      weather, or injury. Coverage includes unused travel
                      expenses and additional transportation costs to reach your
                      original destination or return home.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Purchase Security:</span>{" "}
                      New purchases made with your Gold Card are protected
                      against theft or accidental damage for 90 days from the
                      date of purchase, up to $10,000 per claim and $50,000 per
                      cardholder. This coverage provides peace of mind on
                      expensive electronics, appliances, and other valuable
                      items.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Auto Rental Collision Damage Waiver:
                      </span>{" "}
                      Decline the rental company's collision insurance with
                      confidence. When you rent a car with your Gold Card,
                      coverage for theft and collision damage is provided as a
                      secondary benefit for rentals up to 31 consecutive days,
                      potentially saving $15-$30 per day.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Extended Warranty Protection:
                      </span>{" "}
                      Extends the manufacturer's warranty by up to one
                      additional year on eligible purchases with original
                      warranties of 3 years or less. Maximum benefit of $10,000
                      per claim helps protect against unexpected repair costs on
                      appliances, electronics, and other covered items.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Return Protection:</span>{" "}
                      If a merchant won't take back an item you purchased within
                      90 days, Visa may refund the purchase price up to $250 per
                      item, with a maximum of $1,000 per year. Provides
                      flexibility when merchant return policies are restrictive
                      or items can't be returned.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Visa Signature Concierge Service:
                      </span>{" "}
                      24/7 access to concierge services for travel planning,
                      restaurant reservations, event ticket assistance, and
                      general lifestyle requests. Get help booking hard-to-find
                      reservations, planning trips, or finding unique
                      experiences and gift ideas.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Roadside Dispatch®:
                      </span>{" "}
                      Connect to emergency roadside assistance services
                      including towing, jump starts, flat tire changes, lockout
                      service, and fuel delivery. While you pay for services
                      rendered, Roadside Dispatch helps coordinate assistance
                      quickly when you're stranded.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Premium Design and Materials
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Robinhood Gold Card itself is a statement piece. Crafted
                  from stainless steel weighing 17 grams, it's noticeably
                  heavier and more substantial than plastic cards. The premium
                  metal construction not only feels luxurious but is also more
                  durable than traditional plastic cards. The distinctive gold
                  and cream design stands out in any wallet, and the metal
                  construction includes advanced security features. While
                  authorized users receive plastic cards by default, they can
                  upgrade to stainless steel for an additional fee if they want
                  to match the premium feel of the primary cardholder's card.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Innovative Rewards Redemption Options
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Beyond standard cash back redemptions, the Robinhood Gold Card
                  offers unique ways to use your rewards:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Brokerage Account Deposits:
                      </span>{" "}
                      Transfer points as cash (1 cent per point) directly into
                      your Robinhood investment account. Invest rewards in
                      stocks, ETFs, or crypto to potentially grow your cash back
                      beyond its initial value.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Pay With Points at Merchants:
                      </span>{" "}
                      Use points directly at participating merchants like
                      Amazon, applying your rewards instantly at checkout
                      without waiting for statement credits or redemption
                      processing.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mystery Box Gamification:
                      </span>{" "}
                      Try your luck with the Mystery Box feature where you can
                      win enhanced cash back bonuses (up to 10% back), bonus
                      points (up to 10,000), or category-specific rewards. Adds
                      an element of fun to rewards redemption with chances for
                      significant bonus rewards.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Special Experiences and Items:
                      </span>{" "}
                      Redeem points for unique items like physical gold bars,
                      Robinhood merchandise, metal card upgrades for authorized
                      users, or airport lounge passes—items rarely available
                      through traditional credit card rewards programs.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Who Should Consider the Robinhood Gold Card?
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Robinhood Gold Card is ideal for several types of
                  consumers:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Active Robinhood Investors:
                      </span>{" "}
                      If you already have or plan to get Robinhood Gold ($5/
                      month), the Gold Card becomes a no-brainer addition with
                      zero marginal cost and the ability to invest your rewards
                      directly into your portfolio.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Simplicity Seekers:</span>{" "}
                      Those tired of juggling multiple credit cards for
                      different bonus categories will appreciate having one card
                      that earns top-tier rewards on everything without mental
                      overhead.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Frequent Travelers:</span>{" "}
                      The 5% cash back on travel bookings and comprehensive Visa
                      Signature travel protections rival premium travel cards
                      costing hundreds annually in fees.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Security-Conscious Consumers:
                      </span>{" "}
                      Virtual card capabilities provide enhanced online shopping
                      security and subscription management that traditional
                      cards can't match.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Families Building Credit:
                      </span>{" "}
                      Parents who want to help children and teens build credit
                      early while maintaining control over spending limits and
                      monitoring all activity.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Disclosures and Considerations
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">Representative APR:</span> The
                  Robinhood Gold Card has a variable APR of 29.99% to 32.99% for
                  purchases, balance transfers, cash advances, and APR-based Pay
                  Over Time plans. For example, if you carried a $1,000 balance
                  with a 31% APR for one year and made only minimum payments,
                  you could pay approximately $310 in interest charges. To avoid
                  interest entirely, pay your full statement balance by the due
                  date each month. You have at least 21 days after each billing
                  cycle closes to pay without interest on purchases.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">
                    Gold Membership Requirement:
                  </span>{" "}
                  The Robinhood Gold Card requires an active Robinhood Gold
                  subscription ($5/month or $50/year) to apply for the card and
                  maintain it. If you cancel your Gold membership, you may lose
                  access to your card. The Gold subscription includes other
                  benefits like 3% APY on uninvested cash, professional research
                  from Morningstar, and Level II market data.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">
                    Rewards Redemption Terms:
                  </span>{" "}
                  Cash back is calculated in points (1 point = 1 cent when
                  redeemed for cash in Robinhood brokerage). Some redemption
                  options may offer less than 1 cent per point value. You must
                  have a Robinhood Financial brokerage account to redeem points
                  for cash. Points may be rescinded if you fail to pay at least
                  the minimum payment due. Certain transactions don't earn
                  points, including balance transfers, cash advances, and
                  business-type purchases.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">Not Financial Advice:</span>{" "}
                  This information is for educational and informational purposes
                  only and does not constitute financial advice. Your individual
                  financial situation, spending patterns, and credit goals
                  should guide your credit card selection. Consider whether the
                  combined value of Robinhood Gold membership and the credit
                  card benefits justify the $5/month subscription cost for your
                  situation. Consult with a financial advisor to determine if
                  this card aligns with your financial strategy.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Important:</span> The
                    Robinhood Gold Card is issued by Coastal Community Bank and
                    offered by Robinhood Credit, Inc. Robinhood Credit, Inc. is
                    a financial technology company, not a bank. Missing payments
                    can result in late fees up to $40, may negatively impact
                    your credit score, and could result in loss of rewards
                    points. Credit limits are determined individually and
                    subject to credit approval. Your credit score will not be
                    impacted during the pre-approval check unless you accept the
                    card offer.
                  </p>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/robinhood-gold-card-requirements">
                  <Button className="bg-[#EDECDB] hover:bg-[#d8d7c2] text-gray-900 font-medium text-md py-2 px-8 rounded-full w-full">
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
