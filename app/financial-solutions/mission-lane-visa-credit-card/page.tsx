import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Mission Lane Visa Credit Card: Build Credit with Fair-to-Good Approval Odds - KardTrust",
    description:
      "Discover the Mission Lane Visa Credit Card designed for building and rebuilding credit. Features 19.99%-33.99% APR, $0-$59 annual fee, credit lines from $300-$3,000, and cash back rewards on select cards. No security deposit required.",
    keywords:
      "Mission Lane Visa Credit Card, credit building card, fair credit card, good credit card, Mission Lane credit card, rebuild credit, unsecured credit card, cash back credit card, US credit cards, credit repair",
  };
}

export default function MissionLaneVisaCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Mission Lane Visa Credit Card: Credit Cards Built for Where You're
              Headed
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Mission Lane’s family of Visa credit cards targets borrowers
                rebuilding credit with unsecured lines from $300 to $3,000,
                transparent fees, and a soft-pull prequalification process.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Choose between the cash-back Silver Line, deposit-free Green
                Line, or secured option based on where you are in the journey.
                Each card reports to all major bureaus, helping consistent
                payment history translate into score gains.
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
                    <li>Soft inquiry prequalification with instant decision</li>
                    <li>Credit lines from $300 to $3,000 depending on card</li>
                    <li>Silver Line earns 1.5% cash back on every purchase</li>
                    <li>
                      $0–$59 annual fee; APR range 19.99% – 33.99% variable
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/mission-lane-visa-credit-card-requirements">
                  <Button className="bg-[#0f60c2] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/mission-lane-visa-credit-card.webp"
                  alt="Mission Lane Visa Credit Card"
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
                Pick the Mission Lane Card That Fits
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                The Silver Line Visa® unlocks unlimited 1.5% cash back and
                higher limits for borrowers with stronger profiles. The Green
                Line Visa® targets fair credit borrowers with unsecured limits
                up to $2,000. New-to-credit users can start with the Secured
                Visa® and graduate once payment history strengthens.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Understand Pricing Upfront
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Expect an annual fee between $0 and $59 and a variable APR of
                19.99% – 33.99%. Late or returned payments cost $30 for a first
                incident (up to $41 thereafter), and cash advances carry an 8%
                fee. Paying statements in full and avoiding cash advances keeps
                total costs low.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Build Credit With Consistent Habits
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Mission Lane reports to Experian, Equifax, and TransUnion every
                month. Keep utilization under 30%, schedule autopay, and review
                in-app alerts to protect the 35% of your FICO score tied to
                on-time payments. Use the account as a bridge to lower-fee cards
                once scores improve.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Know if You’re the Right Fit
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Mission Lane suits fair-to-good credit borrowers, credit
                rebuilders, and newcomers who can’t lock up a large deposit but
                want unsecured access. If you already qualify for premium
                rewards or low-APR cards, explore those alternatives instead.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative APR Example:</strong> Carrying a $1,000
                  balance for 12 months at 29.99% APR adds roughly $300 in
                  interest if you only make minimum payments.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Late or missed payments can
                  trigger up to $41 in fees and stall credit rebuilding. Terms
                  vary by card agreement—review Mission Lane disclosures before
                  applying.
                </p>
              </section>
              <div className="text-left my-8">
                <a href="https://www.missionlane.com" rel="noopener noreferrer">
                  <Button className="bg-[#0f60c2] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Visit Official Website
                  </Button>
                </a>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Explore Other Financial Solutions
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/chime-credit-builder-visa-credit-card-benefits"
                      className="text-red-800 hover:underline"
                    >
                      Chime Credit Builder Visa Credit Card Benefits
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
