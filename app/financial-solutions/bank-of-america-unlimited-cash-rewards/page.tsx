import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Bank of America® Unlimited Cash Rewards: Straightforward Cash Back Card - KardTrust",
    description:
      "Discover the Bank of America® Unlimited Cash Rewards credit card with unlimited 1.5% cash back on all purchases, $200 online cash rewards bonus, 0% intro APR for 18 billing cycles, no annual fee, and Preferred Rewards benefits up to 75% bonus cash back.",
    keywords:
      "Bank of America Unlimited Cash Rewards, BofA cash back card, unlimited cash back, no annual fee credit card, Preferred Rewards, 1.5% cash back, intro APR offer, Bank of America credit card",
  };
}

export default function BankOfAmericaUnlimitedCashRewardsPage() {
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
              Bank of America® Unlimited Cash Rewards: Simple, Unlimited Cash
              Back on Every Purchase
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Bank of America® Unlimited Cash Rewards credit card
                delivers straightforward, unlimited cash back rewards without
                rotating categories, spending caps, or annual fees. Earn an
                unlimited 1.5% cash back on every purchase you make—whether
                buying groceries, filling up gas, booking travel, paying bills,
                or shopping online. New cardholders receive a $200 online cash
                rewards bonus after making at least $1,000 in purchases within
                the first 90 days of account opening, plus enjoy a 0%
                introductory APR on purchases and balance transfers for 18
                billing cycles (then 19.24% - 29.24% variable APR). Bank of
                America Preferred Rewards members can boost rewards by 25%-75%,
                turning that 1.5% into up to 2.625% cash back on every
                purchase—all with no annual fee.
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
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Unlimited 1.5% Cash Back on Everything:
                    </span>{" "}
                    Earn a flat, unlimited 1.5% cash back on every purchase you
                    make with no categories to track, no quarterly activations
                    required, and no annual spending caps to worry about.
                    Whether you spend $100 or $100,000 annually, every dollar
                    earns the same straightforward 1.5% cash back rate. This
                    simplicity makes budgeting and reward tracking
                    effortless—just use your card for all purchases and
                    automatically earn cash back on 100% of your spending
                    without complex redemption calculations or category
                    restrictions.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      $200 Online Cash Rewards Bonus:
                    </span>{" "}
                    New cardholders qualify for a $200 online cash rewards bonus
                    after making at least $1,000 in purchases within the first
                    90 days of account opening. This achievable spending
                    threshold means you can earn the bonus through normal
                    everyday purchases like groceries, gas, utilities, and
                    monthly subscriptions without changing your spending habits.
                    The $1,000 requirement works out to just $333 per month over
                    three months, making it accessible for most cardholders.
                    Combined with the 1.5% earned on those purchases ($15),
                    you'll receive $215 in total cash back rewards during your
                    first three months.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      0% Intro APR for 18 Billing Cycles:
                    </span>{" "}
                    Take advantage of 0% introductory APR on both purchases and
                    balance transfers for 18 billing cycles from account opening
                    (then 19.24% - 29.24% variable APR applies). This extended
                    promotional period provides flexibility for larger purchases
                    or consolidating existing credit card debt from
                    higher-interest cards. Balance transfers made within 60 days
                    of account opening qualify for the intro rate, with a 3%
                    balance transfer fee (minimum $10) applied to each transfer.
                    The 18-month window gives you substantial time to pay down
                    balances interest-free, potentially saving hundreds of
                    dollars in interest charges compared to cards with standard
                    APRs.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Preferred Rewards Bonus Cash Back:
                    </span>{" "}
                    Bank of America Preferred Rewards program members
                    automatically receive bonus rewards on their credit card
                    cash back earnings based on their combined average daily
                    balance in eligible Bank of America deposit accounts and/or
                    Merrill investment accounts. Gold tier members (qualifying
                    balance of $20,000+) earn a 25% rewards bonus, Platinum tier
                    ($50,000+) earns 50%, and Platinum Honors tier ($100,000+)
                    earns 75%. This means Platinum Honors members effectively
                    earn 2.625% cash back on every purchase (1.5% base + 75%
                    bonus), ranking among the highest flat-rate cash back cards
                    available without spending category restrictions.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/bank-of-america-unlimited-cash-rewards-requirements">
                  <Button className="bg-[#012169] hover:bg-[#011a4d] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/bank-of-america-unlimited-cash-rewards.webp"
                  alt="Bank of America Unlimited Cash Rewards Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={80}
                />
              </div>

              <div className="my-6">
                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Bank of America® Unlimited Cash Rewards credit card
                  represents an ideal solution for consumers who want
                  straightforward, predictable cash back rewards without the
                  complexity of rotating bonus categories, quarterly
                  activations, or spending caps that characterize many competing
                  rewards cards. By offering unlimited 1.5% cash back on every
                  single purchase, Bank of America eliminates the mental
                  overhead of tracking which categories earn bonus rewards each
                  quarter or remembering to activate special earning rates. This
                  simplicity appeals to busy consumers who want to earn rewards
                  passively without studying spending patterns or optimizing
                  category usage—just use the card for all purchases and
                  automatically maximize cash back earnings.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  No Annual Fee, Maximum Value
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Unlike premium cash back cards that charge annual fees ranging
                  from $95 to $550, the Bank of America® Unlimited Cash Rewards
                  carries no annual fee—ever. This means every dollar of cash
                  back you earn goes directly into your pocket without being
                  offset by annual membership costs. For cardholders who spend
                  $20,000 annually (roughly $1,667 per month), the 1.5% cash
                  back rate delivers $300 in annual rewards with zero annual
                  fee, providing genuine net value. By comparison, a card with a
                  2% cash back rate but a $95 annual fee would net just $305 on
                  the same spending, offering minimal advantage while requiring
                  you to remember and budget for the annual charge. The
                  no-annual-fee structure makes this card accessible to
                  consumers at all spending levels, from modest budgets to
                  high-volume spenders.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Powerful Preferred Rewards Integration
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Bank of America Preferred Rewards program transforms the
                  Unlimited Cash Rewards card from a solid 1.5% cash back card
                  into an exceptional value proposition for customers who
                  maintain qualifying balances with Bank of America and/or
                  Merrill. Preferred Rewards membership is free and
                  automatically applied when you maintain the minimum qualifying
                  balance. At the Platinum Honors tier (requiring a combined
                  average daily balance of $100,000 or more in eligible Bank of
                  America deposit accounts and/or Merrill investment accounts),
                  cardholders earn a 75% bonus on base credit card rewards,
                  effectively earning 2.625% cash back on every purchase (1.5% ×
                  1.75 = 2.625%). This positions the card among the highest
                  earning flat-rate cash back cards available, rivaling or
                  exceeding many premium fee-based alternatives.
                </p>

                <div
                  id="kardtrust_ad_2"
                  className="items-center justify-center flex w-full my-8"
                >
                  {/* Empty responsive, centered div */}
                </div>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Strategic Balance Transfer Opportunity
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The 0% introductory APR on balance transfers for 18 billing
                  cycles provides a valuable opportunity to consolidate and pay
                  down existing credit card debt from higher-interest cards. If
                  you currently carry balances on cards charging 20%-30% APR,
                  transferring those balances to this card can save substantial
                  interest charges while you work toward paying off the debt.
                  For example, transferring a $5,000 balance from a card with
                  24% APR saves approximately $1,800 in interest charges over 18
                  months if you pay the balance down steadily. The 3% balance
                  transfer fee ($150 on a $5,000 transfer) is significantly
                  lower than the interest you'd pay on the original card,
                  creating net savings of $1,650 in this scenario. Balance
                  transfers must be completed within 60 days of account opening
                  to qualify for the promotional rate.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/cashback-credit-cards/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Best Cash Back Credit Cards Guide"
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
                    Learn More About Cash Back Credit Cards:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700 text-left">
                    <li className="text-left">
                      <Link
                        href="/personal-finance/cashback-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best Cash Back Credit Cards Comparison
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximizing Credit Card Rewards
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Credit Card Interest Rates
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Premium Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Flexible Redemption Options:
                      </span>{" "}
                      Redeem your cash back rewards as a statement credit to
                      reduce your balance, direct deposit to your Bank of
                      America checking or savings account, transfer to eligible
                      Merrill accounts, donate to eligible charitable
                      organizations, or request a check. Cash back rewards never
                      expire as long as your account remains open and in good
                      standing. There are no minimum redemption
                      thresholds—redeem any amount at any time. Statement credit
                      redemptions typically post within 1-2 business days,
                      providing quick access to your earned rewards.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Visa Signature Benefits:
                      </span>{" "}
                      Access exclusive Visa Signature benefits including
                      emergency card replacement, emergency cash disbursement,
                      roadside dispatch (available 24/7 for towing, flat tire
                      service, locksmith service, and more), travel and
                      emergency assistance services, and concierge services for
                      travel planning, restaurant reservations, entertainment
                      bookings, and gift purchases. These complementary benefits
                      enhance the card's value beyond cash back rewards.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Compatibility:
                      </span>{" "}
                      Add your card to Apple Pay, Google Pay, or Samsung Pay for
                      secure contactless payments using your smartphone or
                      smartwatch. Digital wallet transactions use tokenization
                      technology that replaces your actual card number with a
                      unique digital identifier, enhancing security for in-store
                      and online purchases. Earn the same 1.5% cash back on
                      digital wallet transactions as you do with your physical
                      card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        BankAmeriDeals Cash Back Offers:
                      </span>{" "}
                      Access exclusive BankAmeriDeals offers that provide
                      additional cash back at participating merchants beyond the
                      standard 1.5% rewards rate. Browse available deals in
                      online banking or the mobile app, add deals to your card
                      with a single click, and automatically receive cash back
                      when you use your card at participating merchants. These
                      stackable offers can increase your total cash back to 3%,
                      5%, or even higher at specific retailers, restaurants, and
                      service providers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Account Alerts and Controls:
                      </span>{" "}
                      Set up customizable account alerts via email, text
                      message, or push notification to monitor spending, track
                      reward earnings, receive payment reminders, and detect
                      potential fraud. Temporarily lock and unlock your card
                      instantly through the mobile app if you misplace it,
                      preventing unauthorized use while you search for it. These
                      digital controls provide peace of mind and help you manage
                      your account proactively.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Smart Everyday Spending Strategy
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Bank of America® Unlimited Cash Rewards card excels as an
                  everyday spending card for consumers who want simplicity
                  without sacrificing rewards earning potential:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Groceries and Gas:</span>{" "}
                      Earn 1.5% cash back on groceries, gas, and other essential
                      purchases that form the foundation of household spending.
                      Unlike category bonus cards that might offer 3% or 5% on
                      groceries for one quarter only, this card delivers
                      consistent 1.5% year-round without tracking or quarterly
                      limits.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Recurring Bills:</span>{" "}
                      Set up autopay for utilities, phone bills, internet
                      service, streaming subscriptions, insurance premiums, and
                      other monthly recurring payments to automatically earn
                      1.5% cash back on expenses you're paying anyway. These
                      regular charges add up to substantial annual cash back
                      with zero extra effort.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Online Shopping:</span>{" "}
                      Earn 1.5% cash back on all online purchases from Amazon,
                      eBay, specialty retailers, and any other e-commerce
                      platform. The card works seamlessly for online
                      transactions with no foreign transaction fees, making it
                      suitable for purchases from international merchants as
                      well.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Large Purchases:</span>{" "}
                      Use the 0% intro APR period strategically for large
                      planned purchases like appliances, furniture, electronics,
                      home repairs, or medical expenses. The 18-month
                      interest-free period provides flexibility to spread
                      payments across multiple months while still earning 1.5%
                      cash back on the full purchase amount.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Ideal Cardholder Profile
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Bank of America® Unlimited Cash Rewards card delivers
                  maximum value for specific consumer profiles. You'll benefit
                  most if you prefer simplicity over complexity in rewards
                  earning, value consistent cash back over rotating categories,
                  want a no-annual-fee card that delivers genuine rewards, have
                  good to excellent credit (typically 690+ credit score), are a
                  Bank of America banking customer or willing to become one,
                  maintain or plan to maintain deposit/investment balances with
                  Bank of America or Merrill for Preferred Rewards benefits,
                  want flexibility for balance transfers or large purchases with
                  0% intro APR, and prefer cash back that can be redeemed
                  flexibly without complicated redemption systems.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  This card particularly excels for current Bank of America
                  customers who maintain banking relationships with the
                  institution. The Preferred Rewards program integration
                  provides substantial upside for customers with qualifying
                  deposit and investment account balances, transforming the base
                  1.5% cash back into 2.625% for Platinum Honors members. Even
                  customers who don't qualify for Preferred Rewards tiers
                  benefit from the card's straightforward earning structure,
                  generous welcome bonus, extended 0% intro APR period, and no
                  annual fee.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Conversely, this card may not suit you if you prefer travel
                  rewards over cash back, want to maximize category bonuses
                  through rotating or fixed bonus categories, don't have
                  established credit history (this card typically requires good
                  to excellent credit), prefer cards with extensive travel
                  protections and insurance benefits, or want premium perks like
                  airport lounge access. In these cases, consider alternatives
                  like travel rewards cards, category-specific bonus cards,
                  secured credit cards for credit building, or premium annual
                  fee cards with luxury benefits.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Rates, Fees, and Important Disclosures
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Annual Fee:</strong> $0.{" "}
                  <strong>Welcome Offer:</strong> $200 online cash rewards bonus
                  after making at least $1,000 in purchases within the first 90
                  days of account opening. <strong>Earning Rate:</strong>{" "}
                  Unlimited 1.5% cash back on all purchases.{" "}
                  <strong>Preferred Rewards Bonus:</strong> Bank of America
                  Preferred Rewards members earn 25%-75% bonus rewards based on
                  tier (Gold: 25%, Platinum: 50%, Platinum Honors: 75%).{" "}
                  <strong>Introductory APR:</strong> 0% intro APR on purchases
                  and balance transfers for 18 billing cycles from account
                  opening. <strong>Standard Purchase APR:</strong> 19.24% -
                  29.24% variable APR after intro period ends, based on
                  creditworthiness. <strong>Balance Transfer APR:</strong>{" "}
                  19.24% - 29.24% variable (same as purchase APR).{" "}
                  <strong>Cash Advance APR:</strong> 29.24% variable.{" "}
                  <strong>Balance Transfer Fee:</strong> 3% of the amount of
                  each transaction (minimum $10). Balance transfers must be
                  completed within 60 days of account opening to qualify for 0%
                  intro APR. <strong>Cash Advance Fee:</strong> Either $10 or 5%
                  of the amount of each cash advance, whichever is greater.{" "}
                  <strong>Foreign Transaction Fee:</strong> 3% of each
                  transaction in U.S. dollars.{" "}
                  <strong>Late Payment Fee:</strong> Up to $40.{" "}
                  <strong>Returned Payment Fee:</strong> Up to $40.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Representative Example (Required by TILA):</strong> If
                  you make $10,000 in purchases with an APR of 24% and make only
                  minimum payments, you will pay approximately $3,200 in
                  interest over approximately 12 years before the balance is
                  paid off. Your actual APR, interest charges, and payoff period
                  will vary based on your creditworthiness and payment behavior.
                  To avoid interest charges on purchases, pay your full
                  statement balance by the due date each billing cycle. The 0%
                  intro APR period provides an opportunity to make purchases or
                  transfer balances without accruing interest for 18 billing
                  cycles, but interest at the standard variable APR will apply
                  to any remaining balance after the promotional period ends.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Important Risk Warnings:</strong> Credit cards are a
                  form of borrowing that must be managed responsibly. Missing
                  payments can damage your credit score, result in late fees up
                  to $40, trigger penalty APRs, and create long-term financial
                  difficulties. The standard variable APR of 19.24% - 29.24% is
                  substantial—carrying balances month-to-month will accrue
                  significant interest charges that can quickly negate the value
                  of cash back rewards earned. Only borrow what you can afford
                  to repay, and always aim to pay more than the minimum payment
                  to reduce interest charges and pay down balances faster. This
                  card works best for consumers who pay their balance in full
                  each month to avoid interest charges while maximizing cash
                  back rewards.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Preferred Rewards Qualification:</strong> To qualify
                  for Preferred Rewards bonus rewards, you must enroll in the
                  Bank of America Preferred Rewards program (free enrollment)
                  and maintain the required combined average daily balance in
                  eligible Bank of America deposit accounts (checking, savings,
                  certificates of deposit) and/or Merrill investment accounts.
                  Qualifying balances are calculated based on your combined
                  average daily balance for the three-month period ending on the
                  last day of each calendar month. Gold tier requires $20,000+,
                  Platinum requires $50,000+, and Platinum Honors requires
                  $100,000+. Bonus rewards are calculated on the base rewards
                  you earn and deposited separately.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Disclaimer:</strong> This content is for informational
                  purposes only and does not constitute financial advice. Credit
                  card terms, rates, fees, and benefits are subject to change by
                  Bank of America without notice. Always review the current
                  Pricing Information, Key Terms, and Cardmember Agreement from
                  Bank of America before applying. Approval is not guaranteed
                  and depends on your creditworthiness, income, debt
                  obligations, and other factors. For the most current and
                  accurate product information, visit the official Bank of
                  America website or contact Bank of America customer service
                  directly. We are not affiliated with, sponsored by, or
                  endorsed by Bank of America.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/bank-of-america-unlimited-cash-rewards-requirements">
                    <Button className="bg-[#012169] hover:bg-[#011a4d] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      View Detailed Requirements
                    </Button>
                  </Link>
                </div>

                {/* AI Content Disclaimer */}
                <AIContentDisclaimer />
              </div>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
