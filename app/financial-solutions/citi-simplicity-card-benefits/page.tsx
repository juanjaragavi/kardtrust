import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Citi Simplicity Card Benefits: 0% Intro APR and No Late Fees - KardTrust",
    description:
      "Review the Citi Simplicity Card’s 0% intro APR window, lack of late fees or penalty APR, and fee-free ownership for balance transfer planners.",
    keywords:
      "Citi Simplicity Card, 0 percent intro APR, no late fees, balance transfer",
  };
}

export default function CitiSimplicityCardBenefitsPage() {
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
              Citi Simplicity Card Benefits: Keep Payments Flexible Without Fees
            </h1>

            <div id="square02" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Citi Simplicity removes late fees and penalty APRs while giving
                you a long 0% intro APR window on purchases and balance
                transfers. It is built for payoff plans, not points chasing.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Use the intro period to consolidate higher-rate balances or fund
                a large expense, then repay on your terms without surprise rate
                jumps. Once you are back on track, layer a rewards card for
                daily spending.
              </p>

              <div className="my-8 text-left">
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

              <div className="text-left my-6">
                <Link href="/financial-solutions/citi-simplicity-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Extend Cash Flow with 0% Intro APR
              </h2>

              <p className="text-gray-700 mb-6 leading-6">
                The card delivers 0% intro APR for 21 months on purchases and
                balance transfers. Shift higher-interest balances or cover a
                large expense, then map out payments that wrap up before the
                variable 19.24% to 29.99% APR kicks in. Transfer fees apply, so
                confirm that the savings outweigh the upfront cost.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                No Late Fees or Penalty APR
              </h2>

              <p className="text-gray-700 mb-6 leading-6">
                Miss a due date and you still avoid late fees and penalty APR
                hikes. Your rate stays steady, giving you time to catch up
                without compounding charges. Use that buffer to reinforce good
                habits, not to make late payments routine.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Fee-Free Ownership
              </h2>

              <p className="text-gray-700 mb-6 leading-6">
                There is no annual fee, so you can hold the card for the long
                haul to support your credit age and available credit. Pair it
                with a rewards card once balances are under control to cover
                everyday spending separately from financing needs.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Who This Card Fits
              </h2>

              <p className="text-gray-700 mb-6 leading-6">
                Simplicity is ideal for borrowers focused on paying down debt or
                anyone who wants a safety net without fees. If you prioritize
                rewards, layer a cash back or travel card once you have a payoff
                plan in motion.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Transferring $5,000
                  at 24% APR to Citi Simplicity and paying it off within 21
                  months avoids roughly $2,000 in interest. A 3% transfer fee
                  ($150) applies upfront.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Late or missed payments can
                  still impact your credit profile. Review Citi pricing and
                  terms for full conditions before applying.
                </p>
              </section>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Other Intro APR Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/td-flexpay-credit-card-benefits"
                      className="text-primary hover:underline"
                    >
                      TD FlexPay Credit Card Benefits
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
                      href="/financial-solutions/citi-double-cash-credit-card-benefits"
                      className="text-primary hover:underline"
                    >
                      Citi Double Cash Credit Card Benefits
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/citi-simplicity-card-requirements">
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
