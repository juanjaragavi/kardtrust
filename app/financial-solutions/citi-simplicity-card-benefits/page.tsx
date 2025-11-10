import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Discover the Benefits of the Citi Simplicity Card - KardTrust",
    description:
      "Simplify your credit management with the Citi Simplicity Card. No late fees, no penalty APR, and 0% intro APR on purchases and balance transfers.",
    keywords: "credit cards, no fees, balance transfer, simplicity",
  };
}

export default function CitiSimplicityCardBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Discover the Benefits of the Citi Simplicity Card
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4">
                Citi Simplicity® removes the usual credit card penalties: no
                late fees, no penalty APR, and an extended 0% intro APR window
                for purchases and balance transfers.
              </p>
              <p className="text-base text-gray-700 mb-6">
                Use it to consolidate debt or spread large expenses without the
                fear of surprise rate spikes. Pay on your schedule while you
                reset your budget.
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
                      0% intro APR for 21 months on purchases and transfers
                    </li>
                    <li>No late fees and no penalty APR ever</li>
                    <li>No annual fee</li>
                    <li>
                      Balance transfer fee: 3% or $5, whichever is greater
                    </li>
                  </ul>
                </div>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://us.topfinanzas.com/wp-content/uploads/2024/12/download-12-1-1024x536.webp"
                  alt="Citi Simplicity Card"
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
                Extend Cash Flow with 0% Intro APR
              </h2>

              <p className="text-gray-700 mb-6">
                Citi Simplicity® offers 0% intro APR for 21 months on purchases
                and balance transfers. Move high-interest balances or fund a big
                expense, then set a payoff timeline that clears the balance
                before the variable APR (19.24% – 29.99%) takes over. Transfer
                fees apply, so weigh the savings before you move debt.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                No Late Fees or Penalty APR
              </h2>

              <p className="text-gray-700 mb-6">
                Miss a due date and you still avoid late fees and penalty APR
                jumps. Your rate stays consistent, giving you room to recover
                without compounding charges. Use this flexibility to rebuild
                habits, not to normalize late payments.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Fee-Free Ownership
              </h2>

              <p className="text-gray-700 mb-6">
                There is no annual fee, so you keep the card in your wallet for
                the long haul to support your credit age and available credit.
                Pairing Citi Simplicity® with a rewards card covers purchases
                while this card handles financing needs.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Who This Card Fits
              </h2>

              <p className="text-gray-700 mb-6">
                Ideal for borrowers targeting debt payoff or anyone who wants a
                forgiving safety net. If you prioritize cash back or travel
                rewards, layer Citi Simplicity® with a dedicated rewards card
                once balances are under control.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Transferring $5,000
                  at 24% APR to Citi Simplicity® and paying it off within 21
                  months avoids roughly $2,000 in interest. A 3% transfer fee
                  ($150) applies upfront.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Late or missed payments can
                  still impact your credit profile. Review Citi’s Pricing &amp;
                  Terms for full conditions before applying.
                </p>
              </section>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Explore Other Financial Solutions
              </h2>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>
                  <Link
                    href="/financial-solutions/td-flexpay-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>TD FlexPay Credit Card</strong>
                  </Link>
                  : Offers flexible payment options and an intro APR on balance
                  transfers.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/chase-freedom-unlimited-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Chase Freedom Unlimited Credit Card</strong>
                  </Link>
                  : Provides a 0% intro APR on purchases and balance transfers.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/citi-double-cash-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Citi Double Cash Card</strong>
                  </Link>
                  : Earn 2% cash back to offset everyday expenses.
                </li>
              </ul>

              <div className="my-8 flex justify-center">
                <Link href="/financial-solutions/citi-simplicity-card-requirements">
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
