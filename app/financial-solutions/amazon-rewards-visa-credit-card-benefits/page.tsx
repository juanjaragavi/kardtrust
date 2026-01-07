import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Unlock the Benefits of the Amazon Rewards Visa Credit Card - KardTrust",
    description:
      "Make the most of your purchases with the Amazon Rewards Visa Credit Card. Earn cash rewards, discounts on Amazon, and much more.",
    keywords:
      "credit cards, rewards, cashback, Amazon Rewards Visa, Amazon credit card, Whole Foods cashback",
  };
}

export default function AmazonRewardsVisaBenefitsPage() {
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
              Amazon Rewards Visa®: Everyday Cash Back for Prime Shoppers
            </h1>

            <div id="square02" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

            <div className="my-8 text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Earn rich rewards at Amazon and Whole Foods, pick up value in
                everyday categories, and keep every dollar of cash back thanks
                to a $0 annual fee.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Prime members earn 5% back instantly, while non-Prime
                cardholders still grab strong 3% returns, making this a go-to
                wallet staple for repeat Amazon shoppers.
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>
                      Prime members earn 5% back at Amazon and Whole Foods (3%
                      without Prime)
                    </li>
                    <li>
                      2% back at restaurants, gas stations, and drugstores
                    </li>
                    <li>1% back on everything else, no rotating categories</li>
                    <li>No annual fee and no foreign transaction fees</li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/amazon-rewards-visa-credit-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://us.topfinanzas.com/wp-content/uploads/2024/09/Amazon1.webp"
                  alt="Amazon Rewards Visa Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={85}
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Maximize Amazon and Whole Foods Spending
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Prime members get 5% back on every Amazon.com and Whole Foods
                transaction; non-Prime customers still collect 3%. Apply rewards
                at checkout, grab them as statement credits, or bank them for
                Prime Day splurges.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Hit Everyday Essentials with 2% Back
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Pick up 2% cash back at restaurants, gas stations, and
                drugstores—common spend categories that keep rewards flowing
                even when you step away from Amazon’s ecosystem.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Flat 1% Everywhere Else, No Annual Fee
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Every other purchase earns 1% cash back without the hassle of
                rotating categories or activation windows. Because the card has
                no annual fee, every reward dollar stays in your pocket.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Stack Perks When You Travel
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Pay abroad without foreign transaction fees, and use Visa travel
                protections for rental cars and trip interruptions—an easy win
                for Prime members booking vacations with Amazon Travel or
                partners.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Spending $1,200 per
                  month—$600 at Amazon/Whole Foods, $300 across 2% categories,
                  and $300 elsewhere—as a Prime member yields roughly $45 in
                  monthly rewards ($540 annually). Keep balances paid to avoid
                  the variable 19.49%–27.49% APR erasing gains.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Carrying a balance or missing
                  payments can wipe out rewards with interest and fees. Confirm
                  current rates, bonuses, and Prime eligibility directly with
                  Amazon and Chase before applying.
                </p>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/amazon-rewards-visa-credit-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    See Detailed Requirements
                  </Button>
                </Link>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Other Everyday Cards
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
                      href="/financial-solutions/us-bank-cash-plus-visa-signature-card-benefits"
                      className="text-primary hover:underline"
                    >
                      U.S. Bank Cash+ Visa Signature Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/doordash-rewards-mastercard-benefits"
                      className="text-primary hover:underline"
                    >
                      DoorDash Rewards Mastercard Benefits
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
