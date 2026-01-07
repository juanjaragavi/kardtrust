import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Citi Double Cash Credit Card Benefits: Unlimited 2% Cash Back - KardTrust",
    description:
      "Review the Citi Double Cash Card’s 2% cash back structure, balance transfer intro APR, and redemption options with no annual fee.",
    keywords:
      "Citi Double Cash Card, two percent cash back, no annual fee, balance transfer",
  };
}

export default function CitiDoubleCashCreditCardBenefitsPage() {
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
              Citi Double Cash Credit Card Benefits: Earn 2% Cash Back on Every
              Purchase
            </h1>

            <div id="square02" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Citi Double Cash pays 1% when you buy and another 1% when you
                pay the balance, delivering a dependable 2% cash back stream
                with no categories to track and no annual fee.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Pair the flat rewards with a 0% intro APR on balance transfers
                for 18 months (then 19.24% to 29.24% variable; 3% or $5 transfer
                fee) to smooth out debt payoff while you keep earning on new
                swipes.
              </p>

              <div className="my-8 text-left">
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

              <div className="text-left my-6">
                <Link href="/financial-solutions/citi-double-cash-credit-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                How the 2% Cash Back Flow Works
              </h2>

              <p className="text-gray-700 mb-6 leading-6">
                You earn 1% cash back on every eligible purchase, then unlock
                the second 1% as you pay off that balance. No quarterly
                activations, no merchant gimmicks, just consistent rewards with
                no cap as long as you pay at least the minimum due.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Balance Transfers as a Paydown Tool
              </h2>

              <p className="text-gray-700 mb-6 leading-6">
                Move higher-interest balances to Citi Double Cash and pay 0%
                intro APR for 18 months (3% or $5 transfer fee applies). Build a
                payoff schedule that clears the balance before the standard
                19.24% to 29.24% variable APR resumes.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                No Annual Fee: Maximize Your Net Rewards
              </h2>

              <p className="text-gray-700 mb-6 leading-6">
                No annual fee means every dollar of cash back stays in your
                pocket. If you want guaranteed value without offsetting a fee,
                Citi Double Cash keeps the math simple.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Redemption Options Without Hassle
              </h2>

              <p className="text-gray-700 mb-6 leading-6">
                Once you reach $25 in rewards, redeem as a statement credit,
                direct deposit (to Citi or external accounts), or request a
                check. Pair Citi Double Cash with a Citi Premier later to turn
                cash back into transferable ThankYou Points.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Added Perks & Who Benefits Most
              </h2>

              <p className="text-gray-700 mb-6 leading-6">
                Citi Entertainment presales, 24/7 support, and zero liability
                protection keep the card practical day to day. Citi Double Cash
                is best for spenders who want dependable 2% cash back without
                juggling bonus categories or annual fees. If you chase higher
                rewards on dining or travel, pair it with a category card.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative APR Example:</strong> After the intro
                  period, balance transfers and purchases move to the 19.24% to
                  29.24% variable APR band. Carrying a $5,000 balance at 24% and
                  making only minimum payments would cost roughly $1,140 in
                  interest over 12 months.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Transfer fees apply, and missed
                  or late payments can trigger penalty APRs and credit score
                  impacts. Review Citi pricing and terms before applying; this
                  overview is informational only.
                </p>
              </section>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Other Flat-Rate Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/wells-fargo-active-cash-card"
                      className="text-primary hover:underline"
                    >
                      Wells Fargo Active Cash Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/chase-freedom-unlimited-credit-card-benefits"
                      className="text-primary hover:underline"
                    >
                      Chase Freedom Unlimited Credit Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/us-bank-cash-plus-visa-signature-card-benefits"
                      className="text-primary hover:underline"
                    >
                      US Bank Cash Plus Visa Signature Card Benefits
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/citi-double-cash-credit-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    See Detailed Requirements
                  </Button>
                </Link>
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
