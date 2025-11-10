import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Avant Credit Card: Build Credit with No Hidden Fees - KardTrust",
    description:
      "Discover the Avant Credit Card designed for credit building. No security deposit, no hidden fees, proactive credit line increases, and mobile app management. 29.99%-35.99% APR with $39-$75 annual membership fee. Issued by WebBank.",
    keywords:
      "Avant Credit Card, credit building card, no hidden fees, no security deposit, WebBank credit card, fair credit card, credit line increases, mobile app credit management",
  };
}

export default function AvantCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Avant Credit Card: Your Path to Healthy Credit Starts Here
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Avant Credit Card targets credit builders who want an unsecured
                line without locking up a deposit, Mastercard acceptance
                everywhere, and clear pricing from day one.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Expect a fast decision, proactive credit line reviews, and a
                mobile app that keeps payments, alerts, and utilization front
                and center so you can graduate to stronger rewards cards later.
              </p>

              <div
                id="kardtrust_ad_1"
                className="items-center justify-center flex w-full my-6"
              >
                {/* Empty responsive, centered div */}
              </div>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-[#0d5bff]/30 bg-[#0d5bff]/5 p-4 text-sm text-[#0a3da3]">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>
                      No security deposit; credit limits from $300 to $3,000
                    </li>
                    <li>
                      $39–$75 annual fee; 29.99%–35.99% APR based on offer
                    </li>
                    <li>
                      Automatic line reviews after consistent on-time payments
                    </li>
                    <li>
                      Full digital management with Mastercard Zero Liability
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/avant-credit-card-requirements">
                  <Button className="bg-[#0d5bff] hover:bg-[#0a4acc] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/avant-credit-card.webp"
                  alt="Avant Credit Card"
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
                Why Avant Works for Builders
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Avant reports to all major bureaus and reviews your account for
                line increases as payment history strengthens. Because the card
                is unsecured, approved credit is ready immediately, and
                Mastercard coverage means the account fits both in-store and
                online purchases.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Understand the Costs Upfront
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Most applicants see a $39–$75 annual membership fee and a
                purchase APR that can land between 29.99% and 35.99%. Budget the
                fee, avoid cash advances, and plan to pay statements in full so
                the card remains a low-cost credit-building tool.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Manage Everything From the App
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Use the Avant mobile app to activate autopay, set reminders, and
                monitor balances in real time. Alerts help keep utilization
                under 30%, and you can lock the card instantly if anything looks
                off.
              </p>

              <div
                id="kardtrust_ad_2"
                className="items-center justify-center flex w-full my-6"
              >
                {/* Empty responsive, centered div */}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Is the Avant Credit Card a Fit?
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Choose Avant if you need unsecured access while rebuilding and
                can handle a moderate annual fee. If you already qualify for
                lower-APR rewards cards or don’t want to pay annual costs,
                compare alternatives before applying.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Carrying a $500
                  balance for 12 months at 35.99% APR adds roughly $157 in
                  interest, plus the $39–$75 annual fee. Paying in full each
                  month avoids these financing charges entirely.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Late payments can lead to fee
                  assessments and stall future limit increases. Review Avant’s
                  full pricing and cardholder agreement prior to submitting an
                  application.
                </p>
              </section>

              <div className="text-left my-8">
                <a
                  href="https://www.avant.com/credit-card"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#0d5bff] hover:bg-[#0a4acc] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Check If You Qualify
                  </Button>
                </a>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Explore More Credit-Building Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/mission-lane-visa-credit-card"
                      className="text-red-800 hover:underline"
                    >
                      Mission Lane Visa Credit Card
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/tomo-credit-card-benefits"
                      className="text-red-800 hover:underline"
                    >
                      Tomo Credit Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/first-digital-nextgen-mastercard-benefits"
                      className="text-red-800 hover:underline"
                    >
                      First Digital NextGen Mastercard Benefits
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
