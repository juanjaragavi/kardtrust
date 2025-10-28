import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Klarna Card: Pay Now or Pay Later Everywhere Visa is Accepted - KardTrust",
    description:
      "Discover the Klarna Card—switch instantly between debit mode and flexible pay later plans. No annual fees, no credit impact to apply, earn cashback with membership plans, and enjoy 0%-35.99% APR on payment plans.",
    keywords:
      "Klarna Card, pay later card, flexible payment card, Visa debit card, no annual fee, buy now pay later, Klarna balance, cashback card, 0% APR, WebBank card",
  };
}

export default function KlarnaCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Klarna Card: The Ultimate Flexible Payment Solution
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Klarna Card revolutionizes how you pay by giving you instant
                control over every purchase. Switch seamlessly between debit
                mode for real-time payments from your Klarna balance or pay
                later mode to split purchases into flexible payment plans. With
                no annual fees, no credit impact when applying, and acceptance
                anywhere Visa is used, the Klarna Card combines the convenience
                of a debit card with the flexibility of buy now, pay later—all
                in one beautifully designed card you can customize with your
                choice of colors.
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
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Dual Payment Modes in One Card:
                    </span>{" "}
                    The Klarna Card uniquely offers two payment modes you can
                    switch between instantly in the app. Use debit mode to pay
                    directly from your Klarna balance like any traditional debit
                    card—funds are deducted immediately and you're done. When
                    you need more flexibility, tap "Plan a purchase" to activate
                    pay later mode before your next transaction, choosing from
                    payment options that fit your budget. After completing a pay
                    later purchase, the card automatically reverts to debit mode
                    for your next transaction.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">No Annual Fees, Ever:</span>{" "}
                    The Klarna Card is completely free with no monthly or annual
                    charges to maintain your account. Using the card in debit
                    mode costs nothing—simply add funds to your Klarna balance
                    and spend freely. Pay later options display any fees or
                    interest rates upfront before you commit, ensuring complete
                    transparency. While optional membership plans offer enhanced
                    perks for a small monthly fee, the card itself remains free
                    regardless of how you use it.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      No Credit Impact to Apply:
                    </span>{" "}
                    Applying for the Klarna Card won't affect your credit score,
                    making it a risk-free way to access flexible payment
                    options. Simply download the Klarna app, choose your
                    preferred card color, and activate your card in 60
                    seconds—no lengthy credit check process or hard inquiry.
                    Start using your virtual card immediately for online
                    purchases or add it to your digital wallet for contactless
                    in-store shopping while you wait for your physical card to
                    arrive.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Earn Cashback with Membership Plans:
                    </span>{" "}
                    Upgrade to a Member ($3.49/month) or Plus ($7.99/month) plan
                    to unlock cashback rewards, higher interest on your Klarna
                    balance, and exclusive deals at partner stores. Member plans
                    earn 0.5% cashback while Plus plans earn 1% cashback when
                    you pay in full from your Klarna balance (up to $5,000 spend
                    per month). Plus members also enjoy up to $80 in monthly
                    exclusive savings at brands like Nike and Sephora, plus an
                    $8 discount every three months at any partner store.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/klarna-card-requirements">
                  <Button className="bg-[#E27EAC] hover:bg-[#d16a9a] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/klarna-card.webp"
                  alt="Klarna Card"
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
                  The Klarna Card represents a new category of payment
                  flexibility—combining the instant gratification of debit card
                  spending with the budget-friendly approach of installment
                  plans. Issued by WebBank (Member FDIC), this Visa card works
                  everywhere you need it to, from your local coffee shop to
                  international retailers, both online and in physical stores.
                  The integrated Klarna balance account serves as your funding
                  source, allowing you to add money manually or set up automatic
                  top-ups to ensure you're always ready to shop.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Understanding Payment Flexibility
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Klarna Card's dual-mode payment system gives you control
                  over every transaction. In debit mode, the card functions like
                  any traditional debit card—purchases are deducted immediately
                  from your Klarna balance, which you fund by transferring money
                  from your bank account. There are no fees for debit mode
                  transactions, and you'll see funds leave your balance in
                  real-time, making budgeting straightforward and transparent.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  When you need more time to pay, pay later mode transforms your
                  next purchase into an installment plan. Before shopping, open
                  the Klarna app and tap "Plan a purchase" to request your
                  preferred payment option. Choose from Pay in 4 (four
                  interest-free payments every two weeks) or monthly financing
                  plans with rates from 0%-35.99% APR based on your
                  creditworthiness. The app shows you all available options
                  upfront, including any service fees, so you'll know exactly
                  what you'll pay before completing your purchase.
                </p>

                <div
                  id="kardtrust_ad_2"
                  className="items-center justify-center flex w-full my-8"
                >
                  {/* Empty responsive, centered div */}
                </div>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Klarna Balance: Your Built-In Money Account
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  When you activate your Klarna Card, you automatically gain
                  access to Klarna balance—a WebBank-held money account (Member
                  FDIC) that serves as your card's funding source. Add money to
                  your balance manually from your linked bank account, or set up
                  automatic top-ups to trigger when your balance drops below a
                  threshold you specify or on a regular schedule you choose.
                  Your Klarna balance isn't just for card spending—it's a
                  full-featured money account where you can store funds, track
                  transactions, and earn interest.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Standard plan cardholders earn 0.01% interest on their Klarna
                  balance, but upgrade to a paid membership plan to
                  significantly boost your earnings. Member plans earn 2.65% APY
                  while Plus plans earn up to 3.02% APY on your
                  balance—competitive rates that help your money grow while you
                  save for future purchases. Deposits in your Klarna balance are
                  held at WebBank and are eligible for FDIC pass-through deposit
                  insurance coverage when certain conditions are met, providing
                  peace of mind for your stored funds.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Learn About Credit Cards"
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
                    Learn More About Flexible Payments:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700 text-left">
                    <li className="text-left">
                      <Link
                        href="/personal-finance/credit-card-types-benefits/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Different Credit Card Types
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        How Credit Card Interest Rates Work
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
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Membership Plans: Unlock Premium Perks
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Klarna Card works perfectly with the free Standard plan,
                  giving you all core features at no cost. However, upgrading to
                  a paid membership unlocks significant additional value. The
                  Member plan ($3.49/month with first month free) includes a
                  physical card alongside your virtual card, 2.65% APY on your
                  Klarna balance, 0.5% cashback when paying in full from your
                  balance, and two free service-fee-waived Pay in 4 purchases
                  per month—potentially saving you $6 in fees alone.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Plus plan ($7.99/month with first month free) delivers
                  maximum value with up to $207/month in benefits. You'll earn
                  the highest 3.02% APY on your Klarna balance, 1% cashback on
                  all purchases paid in full (up to $5,000 spend monthly),
                  unlimited service-fee-waived Pay in 4 purchases, an $8
                  discount every three months at any partner store, and up to
                  $80 in exclusive monthly savings at premium brands like Nike
                  and Sephora. For frequent shoppers, Plus membership pays for
                  itself many times over through interest earnings and exclusive
                  deals.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Instant Activation in 60 Seconds:
                      </span>{" "}
                      Getting started with the Klarna Card is remarkably fast.
                      Download the Klarna app, navigate to the Wallet tab,
                      choose your favorite card color from multiple options, and
                      complete activation in just one minute. Your virtual card
                      is ready to use immediately—add it to Apple Pay, Google
                      Pay, or your preferred digital wallet to start shopping
                      online or in-store wherever contactless Visa payments are
                      accepted.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Physical Card with Membership Plans:
                      </span>{" "}
                      While Standard plan members have access to a virtual card
                      for online and contactless payments, Member and Plus
                      subscribers receive a free physical Klarna Card delivered
                      to their address. The physical card is perfect for
                      merchants that don't accept virtual cards or situations
                      where you prefer a tangible card experience. Choose from
                      multiple color options to match your personal style during
                      the activation process.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Automatic Top-Up Options:
                      </span>{" "}
                      Never worry about insufficient balance again with
                      automatic top-ups. Configure your Klarna balance to
                      automatically transfer funds from your linked bank account
                      on a schedule (weekly, biweekly, monthly) or when your
                      balance drops below an amount you choose. This hands-off
                      approach ensures your card always has funds available for
                      debit mode purchases without requiring constant manual
                      transfers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Works Internationally:
                      </span>{" "}
                      Take your Klarna Card anywhere in the world—it works at
                      millions of locations globally wherever Visa is accepted.
                      Whether you're shopping abroad, booking international
                      travel, or making online purchases from foreign retailers,
                      your Klarna Card provides seamless payment flexibility.
                      Both debit mode and pay later mode function
                      internationally, giving you the same control over your
                      purchases regardless of location.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Real-Time Transaction Tracking:
                      </span>{" "}
                      The Klarna app provides comprehensive visibility into your
                      spending with real-time transaction tracking for both
                      debit and pay later purchases. See exactly where your
                      money goes, review payment plan schedules in the Purchases
                      tab, track your Klarna balance, and monitor upcoming
                      payments—all from one intuitive dashboard. Notifications
                      alert you to transactions, payment due dates, and
                      important account updates.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Robust Security Features:
                      </span>{" "}
                      Your Klarna Card comes with multiple layers of protection
                      including real-time fraud alerts, the ability to instantly
                      freeze your card from the app if it's lost or stolen, and
                      secure authentication for all transactions. Deposits in
                      your Klarna balance are held at WebBank (Member FDIC) and
                      may be eligible for pass-through FDIC insurance coverage,
                      protecting your funds in the event of bank failure.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Seamless Shopping Experience
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Klarna Card eliminates the friction from everyday shopping
                  by combining flexibility with simplicity. For routine
                  purchases where you prefer immediate payment, debit mode
                  handles transactions instantly without the overhead of payment
                  plans or interest calculations. When a larger purchase comes
                  up—furniture, electronics, travel bookings—simply switch to
                  pay later mode in seconds to spread the cost over time with
                  transparent terms shown upfront.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Unlike traditional credit cards with revolving balances and
                  compound interest, Klarna's pay later plans are fixed-term
                  installments with clear payoff dates. You'll know exactly when
                  you'll be debt-free from each purchase rather than carrying
                  balances indefinitely. Service fees for Pay in 4 plans range
                  from $0.75-$3 (or free with membership plans), while monthly
                  financing rates from 0%-35.99% APR are displayed before you
                  commit. This transparency helps you make informed decisions
                  about which payment method works best for each specific
                  purchase.
                </p>

                <div className="text-left my-8">
                  <Link
                    href="https://www.klarna.com/us/klarna-card"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#E27EAC] hover:bg-[#d16a9a] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Apply for Klarna Card
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
