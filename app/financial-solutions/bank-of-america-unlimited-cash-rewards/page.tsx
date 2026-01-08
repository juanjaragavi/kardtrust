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
      "Discover the Bank of America® Unlimited Cash Rewards credit card with unlimited 1.5% cash back on all purchases, $200 bonus, 0% intro APR for 18 billing cycles, no annual fee, and Preferred Rewards boosts up to 2.625% cash back.",
    keywords:
      "Bank of America Unlimited Cash Rewards, cash back credit card, no annual fee card, flat-rate rewards card, preferred rewards bonus, intro APR offer",
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

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            ></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Bank of America® Unlimited Cash Rewards keeps things simple:
                earn unlimited 1.5% cash back on every purchase, pay no annual
                fee, unlock a $200 online cash bonus after $1,000 in purchases
                during the first 90 days, and enjoy 0% intro APR for 18 billing
                cycles.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Preferred Rewards members can push returns as high as 2.625%,
                turning a flat-rate card into one of the most lucrative everyday
                earners available to Bank of America loyalists.
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-[#012169]/30 bg-[#012169]/5 p-4 text-sm text-[#021742]">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>Unlimited 1.5% cash back with no caps or categories</li>
                    <li>
                      $200 online cash bonus after $1,000 spend in 90 days
                    </li>
                    <li>
                      0% intro APR on purchases and transfers for 18 billing
                      cycles (3% transfer fee)
                    </li>
                    <li>
                      Preferred Rewards bonus boosts cash back by 25% to 75%
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
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

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Earn Cash Back Without Micromanaging Categories
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Charge everyday expenses—groceries, utilities, subscriptions,
                and travel—and collect a flat 1.5% on everything. Rewards never
                expire while the account stays open, and you can redeem in any
                amount as a statement credit, direct deposit, or transfer to
                eligible Merrill accounts.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Preferred Rewards Turns 1.5% Into 2.625%
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Maintain $20,000 or more in combined Bank of America or Merrill
                balances to join Preferred Rewards and earn 25%, 50%, or 75%
                bonus cash back. Platinum Honors members see every swipe earn
                2.625% without paying an annual fee.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Use the Intro APR Window Strategically
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                The 0% intro APR for 18 billing cycles on purchases and balance
                transfers gives you time to finance major buys or consolidate
                higher-rate debt. Factor in the 3% transfer fee and set a payoff
                plan so no balance remains once the variable 19.24% to 29.24%
                APR begins.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Who Should Carry This Card
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                This card fits cash-back generalists who value simplicity, Bank
                of America clients chasing Preferred Rewards bonuses, and anyone
                needing a long 0% financing runway. If you want premium travel
                perks or category multipliers, compare alternative cards first.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Transferring $5,000
                  at 0% intro APR for 18 billing cycles incurs a $150 fee. Pay
                  the balance before the promotion ends or interest resumes at
                  the standard 19.24% to 29.24% variable APR.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Late payments can void intro
                  APR benefits and add fees up to $40. Always review current
                  Pricing Information and Preferred Rewards requirements with
                  Bank of America before applying.
                </p>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/bank-of-america-unlimited-cash-rewards-requirements">
                  <Button className="bg-[#012169] hover:bg-[#011a4d] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Detailed Requirements
                  </Button>
                </Link>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Other Flat-Rate Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/chase-freedom-unlimited-credit-card-benefits"
                      className="text-red-800 hover:underline"
                    >
                      Chase Freedom Unlimited Credit Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/citi-double-cash-credit-card-benefits"
                      className="text-red-800 hover:underline"
                    >
                      Citi Double Cash Credit Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/sofi-credit-card"
                      className="text-red-800 hover:underline"
                    >
                      SoFi Credit Card Overview
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      <AIContentDisclaimer />
      <CompactFooter />
    </main>
  );
}
