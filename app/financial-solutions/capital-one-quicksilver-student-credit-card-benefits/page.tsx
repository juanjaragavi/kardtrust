import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Unlock the Benefits of the Capital One Quicksilver Student Credit Card - KardTrust",
    description:
      "Discover the student-friendly features and competitive rewards of the Capital One Quicksilver Student Credit Card. Earn unlimited cash back with no annual fee.",
    keywords: "credit cards, student cards, cashback, no annual fee",
  };
}

export default function CapitalOneQuicksilverStudentCreditCardBenefitsPage() {
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
              Capital One Quicksilver Student®: Flat Cash Back for Campus Life
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            ></div>

            <div className="my-8 text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Earn 1.5% cash back on every purchase, skip annual fees, and use
                Capital One’s tools to build credit while you juggle classes,
                travel, and campus costs.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Keep spending simple with a flat rate, then graduate to richer
                rewards once your credit history and income grow.
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>1.5% unlimited cash back on every purchase</li>
                    <li>No annual fee, no foreign transaction fees</li>
                    <li>CreditWise®, alerts, and autopay to stay on track</li>
                    <li>
                      Automatic credit line reviews after on-time payments
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/capital-one-quicksilver-student-credit-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://us.topfinanzas.com/wp-content/uploads/2024/09/Capitalone1-1024x536.webp"
                  alt="Capital One Quicksilver Student Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={85}
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Earn the Same Cash Back on Every Purchase
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                No rotating categories or activation hoops—just 1.5% cash back
                on everything from textbooks to late-night takeout. Spend $500 a
                month and pocket about $90 each year.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Travel and Study Abroad Without Extra Fees
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                No foreign transaction fee means a $1,000 semester abroad
                purchase avoids the usual $30 surcharge, making it a smart
                companion for exchange programs or spring break trips.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Use Built-In Tools to Build Credit Faster
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Access CreditWise® to watch your score, set custom alerts, and
                automate payments to avoid missed due dates. Capital One reviews
                your account for credit line increases after consistent on-time
                payments.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Keep Costs Predictable While You Learn
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                No annual fee keeps rewards net positive. Student-focused
                underwriting helps thin credit files qualify, so you can start
                building history before graduation.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Spending $600 per
                  month and paying in full earns about $108 cash back yearly. If
                  you carried the same balance at a 29.99% APR, interest charges
                  could exceed $180 in 12 months—wiping out rewards.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Late payments can trigger a
                  penalty APR and stall credit-building progress. Review Capital
                  One’s latest student card terms before you apply.
                </p>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/capital-one-quicksilver-student-credit-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    See Detailed Requirements
                  </Button>
                </Link>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Other Student-Friendly Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/discover-it-student-chrome-credit-card-benefits"
                      className="text-primary hover:underline"
                    >
                      Discover it® Student Chrome Credit Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/tomo-credit-card-benefits"
                      className="text-primary hover:underline"
                    >
                      Tomo Credit Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/visa-signature-us-current-build-credit-card-benefits"
                      className="text-primary hover:underline"
                    >
                      Visa Signature U.S. Current Build Card Benefits
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
