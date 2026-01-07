import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Chase Freedom Unlimited Credit Card Benefits: Unlimited Cashback & More - KardTrust",
    description:
      "Turn every dollar you spend into unlimited rewards and effortless savings with the Chase Freedom Unlimited Credit Card. Enjoy unlimited cashback, 0% intro APR, and no annual fee.",
    keywords: "credit cards, cashback, no annual fee, intro APR",
  };
}

export default function ChaseFreedomUnlimitedCreditCardBenefitsPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="credit-cards"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Chase Freedom Unlimited®: Flat Cash Back Powerhouse with $0
              Annual Fee
            </h1>

            <div id="square02" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Earn 5% on Chase Travel℠ bookings, 3% on dining and drugstores,
                and 1.5% everywhere else—no bonus tracking, no annual fee.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                New cardmembers knock out the $200 bonus after $500 spend in
                three months and enjoy 0% intro APR for 15 months on purchases
                and balance transfers before the variable 19.24%–28.99% range
                applies (3% or $5 balance transfer fee).
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>5% back on travel through Chase Travel℠</li>
                    <li>
                      3% back on dining (including delivery) and drugstores
                    </li>
                    <li>1.5% back on every other purchase with no caps</li>
                    <li>
                      $200 bonus after $500 spend + 0% intro APR for 15 months
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/chase-freedom-unlimited-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://us.topfinanzas.com/wp-content/uploads/2024/11/download-11.webp"
                  alt="Chase Freedom Unlimited Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={85}
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Everyday Rewards That Scale Automatically
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Use Freedom Unlimited® as your all-purpose card: 1.5% applies
                to every swipe, while dining, drugstores, and Chase Travel℠
                purchases unlock higher tiers without activation checklists.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Leverage the Intro APR for Planned Purchases
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Spread out a big expense or consolidate high-interest balances
                over 15 months interest-free, then pay the balance before the
                variable APR resumes. Factor the 3% (or $5) balance transfer fee
                into your payoff math.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Redeem Cash Back or Supercharge Travel
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Cash out any amount as statement credits, deposits, or gift
                cards. Pair with a Sapphire Preferred® or Reserve® to turn
                rewards into Ultimate Rewards points worth 1.25x–1.5x for travel
                or transferable to partners.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Who Should Carry This Card
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Ideal for set-and-forget earners who still want elevated dining
                and travel returns, or anyone building a two-card Sapphire +
                Freedom combo. If you rarely dine out, compare a flat 2% card to
                ensure the math works.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Spending $1,000
                  monthly— $400 on dining/drugstores, $200 on Chase Travel℠, and
                  $400 on other purchases—earns roughly $306 annually. Carrying
                  a $5,000 balance at 23.99% after the intro period could cost
                  about $1,200 in interest in a year if you pay only the
                  minimum.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Missing payments can trigger
                  late fees and penalty APRs. Confirm current rates, categories,
                  and bonus offers with Chase before applying.
                </p>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/chase-freedom-unlimited-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    See Detailed Requirements
                  </Button>
                </Link>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Alternative Cash Back Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/citi-double-cash-credit-card-benefits"
                      className="text-primary hover:underline"
                    >
                      Citi Double Cash Credit Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/chase-freedom-flex"
                      className="text-primary hover:underline"
                    >
                      Chase Freedom Flex℠ Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/us-bank-cash-plus-visa-signature-card-benefits"
                      className="text-primary hover:underline"
                    >
                      U.S. Bank Cash+ Visa Signature Card Benefits
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
