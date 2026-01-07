import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Benefits of the First Digital NextGen Mastercard - KardTrust",
    description:
      "Discover the benefits of the First Digital NextGen Mastercard: instant approval, no credit check, low fees, and digital management.",
    keywords: "credit cards, digital card, no credit check",
  };
}

export default function FirstDigitalNextgenMastercardBenefitsPage() {
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
              First Digital NextGen Mastercard®: Fast Approval for Credit
              Builders
            </h1>

            <div className="my-8 text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                First Digital NextGen Mastercard® offers a speedy decision,
                avoids a hard credit inquiry, and lays out clear program costs
                so you can focus on rebuilding credit with predictable payments.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Treat it as a bridge to stronger offers: establish positive
                payment history, manage the account from your phone, and plan a
                future graduation into rewards cards once scores improve.
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>
                      Instant approval path with no traditional credit check
                    </li>
                    <li>
                      Flat setup and monthly program fees with upfront
                      transparency
                    </li>
                    <li>
                      Full digital management, alerts, and mobile wallet support
                    </li>
                    <li>Reports to all three bureaus to help rebuild credit</li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/first-digital-nextgen-mastercard-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://us.topfinanzas.com/wp-content/uploads/2024/11/download-15.webp"
                  alt="First Digital NextGen Mastercard"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={85}
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Skip the Hard Pull, Keep the Speed
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Applications rely on your banking profile instead of a hard
                credit inquiry, so you get an almost instant decision without a
                temporary score hit. Credit lines typically start small, making
                it easier to manage utilization while you rebuild.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Predictable Pricing You Can Budget
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Expect a one-time $95 setup charge plus a published monthly
                program fee. Knowing the costs in advance helps you automate
                payments and avoid surprises that could stall progress.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Manage Everything from Your Phone
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Schedule payments, track spending, and add the card to mobile
                wallets via the online dashboard. Real-time alerts flag unusual
                activity and keep utilization in check.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Build Credit, Then Graduate
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Because the account reports to all major bureaus, on-time
                payments and low balances can steadily raise scores. Revisit
                your options after 6–12 months to secure lower fees or richer
                rewards once your profile improves.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Paying the $95 setup
                  fee plus a $10 monthly program fee while carrying a $300
                  balance at 35.99% APR results in about $247 in combined fees
                  and interest over 12 months. Automate payments to stay current
                  and limit balance carry.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Late or missed payments can add
                  penalties and stall credit recovery. Review First Digital’s
                  latest fee schedule and Cardholder Agreement before applying.
                </p>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/first-digital-nextgen-mastercard-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    See Detailed Requirements
                  </Button>
                </Link>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Explore Additional Credit-Building Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/tomo-credit-card-benefits"
                      className="text-primary hover:underline"
                    >
                      Tomo Credit Card Overview
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
                  <li>
                    <Link
                      href="/financial-solutions/capital-one-quicksilver-student-credit-card-benefits"
                      className="text-primary hover:underline"
                    >
                      Capital One Quicksilver Student Credit Card Benefits
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
