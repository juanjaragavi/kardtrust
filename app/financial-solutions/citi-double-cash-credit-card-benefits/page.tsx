import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Citi Double Cash Credit Card Benefits: Earn 2% Cashback on Every Purchase - KardTrust",
    description:
      "Maximize your cash back effortlessly with the Citi Double Cash Credit Card. Earn 2% on every purchase (1% when you buy, 1% when you pay) with no annual fee.",
    keywords: "credit cards, cashback, no annual fee, balance transfer",
  };
}

export default function CitiDoubleCashCreditCardBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Citi Double Cash Credit Card Benefits: Earn 2% Cashback on Every
              Purchase
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-5 text-left">
                Citi Double Cash® pays 1% when you buy and another 1% when you
                pay the balance—an easy 2% cash back pipeline without category
                tracking or annual fees.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-5 text-left">
                Add a 0% intro APR for 18 months on balance transfers (then
                19.24% – 29.24% variable; 3% or $5 transfer fee) and you have a
                straightforward debt-paydown option alongside everyday rewards.
              </p>

              <div
                id="kardtrust_ad_1"
                className="items-center justify-center flex w-full my-6"
              >
                {/* Empty responsive, centered div */}
              </div>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>
                      2% cash back total: 1% at purchase + 1% when you pay
                    </li>
                    <li>No annual fee or rotating categories</li>
                    <li>0% intro APR on balance transfers for 18 months</li>
                    <li>
                      Rewards redeemable as cash back, deposits, or checks
                    </li>
                  </ul>
                </div>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://us.topfinanzas.com/wp-content/uploads/2024/11/download-2.webp"
                  alt="Citi Double Cash Credit Card"
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

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                How the 2% Cash Back Flow Works
              </h2>

              <p className="text-gray-700 mb-6">
                You earn 1% cash back on every eligible purchase, then unlock
                the second 1% as you pay off that balance. No quarterly
                activations, no merchant gimmicks—just consistent rewards with
                no cap as long as you pay at least the minimum due.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Balance Transfers as a Paydown Tool
              </h2>

              <p className="text-gray-700 mb-6">
                Move higher-interest balances to Citi Double Cash® and pay 0%
                intro APR for 18 months (3% or $5 transfer fee applies). Build a
                payoff schedule that clears the balance before the standard
                19.24% – 29.24% variable APR resumes.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                No Annual Fee: Maximize Your Net Rewards
              </h2>

              <p className="text-gray-700 mb-8">
                No annual fee means every dollar of cash back stays in your
                pocket. If you want guaranteed value without offsetting a fee,
                Citi Double Cash® keeps the math simple.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Redemption Options Without Hassle
              </h2>

              <p className="text-gray-700 mb-6">
                Once you reach $25 in rewards, redeem as a statement credit,
                direct deposit (to Citi or external accounts), or request a
                check. Pair Citi Double Cash® with a Citi Premier® later to
                turn cash back into transferable ThankYou® Points.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Added Perks & Who Benefits Most
              </h2>

              <p className="text-gray-700 mb-6">
                Citi Entertainment® presales, 24/7 customer support, and $0
                liability protection keep the card practical day to day. Citi
                Double Cash® is best for spenders who want dependable 2% cash
                back without juggling bonus categories or annual fees. If you
                chase higher rewards on dining or travel, consider pairing with
                a category card.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative APR Example:</strong> After the intro
                  period, balance transfers and purchases move to the 19.24% –
                  29.24% variable APR band. Carrying a $5,000 balance at 24% and
                  making minimum payments would cost roughly $1,140 in interest
                  over 12 months.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Transfer fees apply, and missed
                  or late payments can trigger penalty APRs and credit score
                  impacts. Review Citi’s Pricing & Terms before applying; this
                  overview is informational only.
                </p>
              </section>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Explore Other Financial Solutions
              </h2>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>
                  <Link
                    href="/financial-solutions/chase-freedom-unlimited-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Chase Freedom Unlimited Credit Card</strong>
                  </Link>
                  : Earn unlimited cashback on every purchase with flexible
                  redemption.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/us-bank-cash-plus-visa-signature-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>US Bank Cash+ Visa Signature Card</strong>
                  </Link>
                  : Customize your cashback categories for up to 5% back.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/amazon-rewards-visa-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Amazon Rewards Visa</strong>
                  </Link>
                  : Great for Amazon shoppers with tiered cashback rewards.
                </li>
              </ul>

              <div className="my-8 flex justify-center">
                <Link href="/financial-solutions/citi-double-cash-credit-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white px-8 py-3">
                    See Requirements
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
            </div>
          </div>
        </div>

        <AIContentDisclaimer />
      </article>

      <CompactFooter />
    </main>
  );
}
