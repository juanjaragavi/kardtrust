import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Citi Custom Cash Card Benefits: Automatic 5% Cash Back Highlights - KardTrust",
    description:
      "See how the Citi Custom Cash Card automatically assigns 5% cash back to your top category, adds a $200 bonus, and offers 0% intro APR on balance transfers, all with no annual fee.",
    keywords:
      "Citi Custom Cash Card, 5 percent cash back, automatic rewards, no annual fee, balance transfer offer",
  };
}

export default function CitiCustomCashCardPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="credit-cards"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Citi Custom Cash Card: Automatic 5% Cash Back That Adapts to You
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            ></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Let the Citi Custom Cash Card pick your 5% category every
                billing cycle. It tracks where you spend the most, applies the
                elevated rate to that category on up to $500 in purchases, and
                handles the rotation automatically with no annual fee.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Complete $1,500 in purchases within six months to earn a $200
                bonus, then leverage the 0% intro APR window on balance
                transfers for 18 months to tackle higher-rate debt. All other
                purchases earn 1% cash back.
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-[#233A79]/30 bg-[#233A79]/5 p-4 text-sm text-[#1a2b5c]">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>
                      5% cash back on up to $500 in your top category each cycle
                    </li>
                    <li>$200 bonus after $1,500 spend in six months</li>
                    <li>
                      0% intro APR for 18 months on balance transfers (fee
                      applies)
                    </li>
                    <li>No annual fee; 1% cash back on all other spending</li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/citi-custom-cash-card-requirements">
                  <Button className="bg-[#233A79] hover:bg-[#1a2b5c] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Eligibility Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/citi-custom-cash-card.webp"
                  alt="Citi Custom Cash Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={80}
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Let the Card Pick Your 5% Category
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Restaurants one month, grocery stores the next, then streaming
                or gas, the Custom Cash follows your highest eligible category
                and applies 5% cash back automatically. Maxing out the $500 cap
                nets $25 per cycle, or $300 per year, without quarterly
                enrollments.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Pair the Bonus With the Intro APR Window
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Average roughly $250 per month in everyday purchases to trigger
                the $200 bonus naturally. Moving a balance? Divide the transfer
                by 18 to stay on track before the variable 17.99% to 27.99% APR
                returns. New purchases accrue interest if you carry that
                transfer, so plan payments accordingly.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Everyday Management and ThankYou Points
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Rewards post as ThankYou Points worth one cent each toward
                statement credits, direct deposits, gift cards, or Citi Travel
                bookings. The Citi Mobile app tracks category performance, lets
                you set alerts, and keeps tap-to-pay, card lock, and autopay
                tools close at hand.
              </p>

              <div className="mt-6 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Other Cash Back Cards
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
                      href="/financial-solutions/wells-fargo-active-cash-card"
                      className="text-primary hover:underline"
                    >
                      Wells Fargo Active Cash Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/chase-freedom-flex"
                      className="text-primary hover:underline"
                    >
                      Chase Freedom Flex Card Benefits
                    </Link>
                  </li>
                </ul>
              </div>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative APR Example:</strong> Purchases carry a
                  variable 17.99% to 27.99% APR. A $3,000 balance at 22.99%
                  accrues about $689 in interest over 12 months if you make only
                  minimum payments. Balance transfers completed within four
                  months receive 0% APR for 18 months, then switch to the same
                  variable range. Balance transfer fee: $5 or 5%, whichever is
                  greater.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Credit Impact:</strong> Citi limits Custom Cash
                  bonuses to once every 48 months and typically allows one
                  account per person. Applications trigger a hard inquiry and
                  approval is not guaranteed. Payment history and utilization
                  across all accounts still drive overall credit performance.
                </p>
              </section>

              <div className="text-left my-8">
                <a
                  href="https://www.citi.com/credit-cards/citi-custom-cash-credit-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#233A79] hover:bg-[#1a2b5c] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Apply Now - Visit Official Citi Website
                  </Button>
                </a>
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
