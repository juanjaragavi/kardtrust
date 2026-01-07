import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Affirm Card: Pay Over Time with Flexible Payment Plans - KardTrust",
    description:
      "Discover the Affirm Card—a Visa debit card with pay-over-time flexibility. No annual fees, no hidden charges, 0%-36% APR payment plans, and no credit impact to apply. Split purchases after checkout or plan ahead.",
    keywords:
      "Affirm Card, pay over time, flexible payment plans, Visa debit card, no annual fee, buy now pay later, 0% APR, Evolve Bank, Stride Bank, split payments, affirm payment options",
  };
}

export default function AffirmCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Affirm Card: Flexible Payment Plans Without Hidden Fees
            </h1>

            <div id="square02" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Affirm Card is a Visa debit card that lets you pay now or pay
                over time with transparent 0%–36% APR plans, no annual fee, and
                no late fees. Pre-qualify with a soft credit check, then pick
                the schedule that fits your budget.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Plan big-ticket buys in advance or split eligible purchases
                within 24 hours after checkout. Either way, you see the full
                cost before you commit and avoid compound interest entirely.
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-[#4a4af4]/30 bg-[#4a4af4]/5 p-4 text-sm text-[#1f1fb3]">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>No annual fee, late fee, or hidden penalty charges</li>
                    <li>
                      Soft inquiry pre-qualification; check spending power
                      upfront
                    </li>
                    <li>0% Pay in 4 and monthly plans up to 36% APR</li>
                    <li>Issued by Evolve Bank & Trust or Stride Bank, N.A.</li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/affirm-card-requirements">
                  <Button className="bg-[#4a4af4] hover:bg-[#3838d9] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/affirm-card.webp"
                  alt="Affirm Card"
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
                Choose How You Pay
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Tap your linked bank account for instant, no-interest purchases,
                or request a plan before or within 24 hours after a $50+
                transaction. Affirm shows every option in the app—from 0% Pay in
                4 to longer schedules up to 36% APR—so you know the exact
                payment, term, and total interest before checkout.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Why Affirm Card Stands Out
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Pricing is flat and transparent: no annual fees, no late fees,
                and no retroactive interest spikes. Simple-interest plans mean
                the amount quoted is the amount you pay. Use a physical or
                virtual Visa anywhere in the U.S., then track every purchase in
                one dashboard.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Manage Everything in the App
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                The Affirm app (iOS and Android) lets you check spending power,
                activate cards, enroll in autopay, and receive alerts before a
                payment is due. Funds pull from your linked bank within one to
                three days, and accounts benefit from FDIC insurance through the
                issuing bank.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Is the Affirm Card Right for You?
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Consider Affirm if you want debit-style control with the option
                to spread larger purchases, avoid revolving balances, or prefer
                clear total costs. If you carry rewards credit cards and pay in
                full every month, compare potential rewards earnings against
                Affirm’s fee-free simplicity before switching.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> A $800 purchase on a
                  12-month plan at 30% APR would cost about $77.99 per month and
                  $135 in interest. Rates range from 0%–36% APR depending on
                  credit, merchant, and term length.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Reminder:</strong> Missing a payment may limit
                  future plan approvals even though Affirm does not charge late
                  fees. The Affirm Card is issued by Evolve Bank & Trust or
                  Stride Bank, N.A., Members FDIC.
                </p>
              </section>

              <div className="text-left my-8">
                <a href="https://www.affirm.com/card" rel="noopener noreferrer">
                  <Button className="bg-[#4a4af4] hover:bg-[#3838d9] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Apply for Affirm Card
                  </Button>
                </a>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Explore Other Flexible Payment Solutions
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/tilt-card"
                      className="text-red-800 hover:underline"
                    >
                      Tilt Card
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/step-visa-card"
                      className="text-red-800 hover:underline"
                    >
                      Step Visa Card
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/first-digital-nextgen-mastercard-benefits"
                      className="text-red-800 hover:underline"
                    >
                      First Digital NextGen Mastercard
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
