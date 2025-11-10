import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Discover it Student Chrome Credit Card Benefits: Smart Rewards for Students - KardTrust",
    description:
      "Discover the key benefits of the Discover it Student Chrome Credit Card: 2% cashback on restaurants and gas, no annual fees, and double rewards in your first year. Perfect for students building credit.",
    keywords: "credit cards, student, cashback, rewards, no annual fee",
  };
}

export default function DiscoverItStudentChromeCreditCardBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Discover it Student Chrome Credit Card Benefits: Smart Rewards for
              Students
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4">
                Discover it® Student Chrome delivers simple rewards: 2% cash
                back at restaurants and gas stations (up to $1,000 in combined
                purchases each quarter) and 1% everywhere else with no annual
                fee.
              </p>
              <p className="text-base text-gray-700 mb-6">
                It doubles all cash back earned in year one and equips you with
                free budgeting and FICO® tools so you can build credit while
                you manage campus spending.
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
                    <li>2% cash back at restaurants and gas (cap applies)</li>
                    <li>1% cash back on all other purchases</li>
                    <li>
                      Cashback Match doubles first-year rewards automatically
                    </li>
                    <li>No annual fee; no foreign transaction fees</li>
                  </ul>
                </div>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://us.topfinanzas.com/wp-content/uploads/2024/11/Discoverst1.webp"
                  alt="Discover it Student Chrome Credit Card"
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
                Everyday Categories That Matter
              </h2>

              <p className="text-gray-700 mb-6">
                Earn 2% cash back at restaurants and gas stations up to $1,000
                in combined spend per quarter, plus 1% everywhere else. Cover
                coffee runs, rideshare fuel, and campus supplies while building
                a payment track record.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                First-Year Cashback Match
              </h2>

              <p className="text-gray-700 mb-6">
                Discover automatically doubles all rewards after your first 12
                billing cycles. That turns 2% dining and gas into 4% and 1%
                baseline spend into 2% with no activation hoops—just use the
                card responsibly throughout year one.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Student-Friendly Fees and Tools
              </h2>

              <p className="text-gray-700 mb-6">
                No annual fee, no foreign transaction fees, and a $0 first late
                payment fee help student budgets breathe. The mobile app shows
                your FICO® Score, delivers spending alerts, and supports
                category-level budgeting so you stay ahead of due dates.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Build Credit Without Guesswork
              </h2>

              <p className="text-gray-700 mb-6">
                Discover reports to all three major bureaus, so on-time payments
                compound into a stronger file. Set up autopay, keep utilization
                low, and graduate to premium rewards once your credit profile
                stabilizes.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Spend $900 per
                  quarter on dining and gas and $400 elsewhere. In year one you
                  earn $68 in cash back plus an extra $68 from Cashback Match,
                  for $136 total.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Introductory match applies once
                  and late payments after the first waived incident can trigger
                  fees and promotional loss. Review Discover’s Student Chrome
                  terms prior to applying.
                </p>
              </section>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Explore Other Financial Solutions
              </h2>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>
                  <Link
                    href="/financial-solutions/capital-one-quicksilver-student-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Capital One Quicksilver Student Credit Card</strong>
                  </Link>
                  : Earn unlimited 1.5% cashback on every purchase.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/tomo-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Tomo Credit Card</strong>
                  </Link>
                  : Build credit without a credit history, based on your banking
                  activity.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/visa-signature-us-current-build-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Visa Signature U.S. Current Build Card</strong>
                  </Link>
                  : Another great option for building or improving your credit
                  score.
                </li>
              </ul>

              <div className="my-8 flex justify-center">
                <Link href="/financial-solutions/discover-it-student-chrome-credit-card-requirements">
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
