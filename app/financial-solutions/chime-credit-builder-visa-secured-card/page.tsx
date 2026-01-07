import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Chime Credit Builder Visa Secured Card Benefits - KardTrust",
    description:
      "See how the Chime Credit Builder Visa Secured Card helps you build credit without fees or interest, unlock Chime+ rewards, and keep payments on track.",
    keywords:
      "Chime Credit Builder, secured credit card, build credit, no annual fee, no interest, Chime+",
  };
}

export default function ChimeCreditBuilderPage() {
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
              Chime Credit Builder Visa Secured Card: Build Credit Without Fees
            </h1>

            <div id="square02" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Pair a Chime Checking Account with the Chime Credit Builder Visa
                Secured Card and build payment history with zero annual fees,
                zero interest, and no credit check.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                You load the card with your own money, swipe like a traditional
                credit card, and Chime automatically pays the statement each
                month, so your score benefits without the risk of carrying a
                balance.
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>No annual fee, no interest, and no credit check</li>
                    <li>
                      Load spending power from your secured Credit Builder
                      account
                    </li>
                    <li>
                      Average 30-point FICO increase after 8 months of on-time
                      use*
                    </li>
                    <li>
                      Chime+ unlocks 1.5% cash back rotating categories and
                      SpotMe on Credit
                    </li>
                  </ul>
                  <p className="mt-2 text-[11px] text-emerald-800">
                    *Experian study of Credit Builder members, January 2024.
                    Individual results vary.
                  </p>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/chime-credit-builder-visa-secured-card-requirements">
                  <Button className="bg-[#1CC461] hover:bg-green-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/chime-credit-builder-visa-secured-card.webp"
                  alt="Chime Credit Builder Visa Secured Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={85}
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                How the Secured Spending Cycle Works
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Transfer money from your Chime Checking Account to the Credit
                Builder secured account before you spend. Purchases process on
                the Visa network, then Chime automatically pays the balance at
                month end using those secured funds. The payment reports to all
                three bureaus, so you avoid interest charges while building
                history.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Unlock Extra Value With Chime+
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Set up qualifying direct deposit (typically $200+) to upgrade to
                Chime+. Members get access to rotating 1.5% cash back tiers, a
                high-yield savings account, early paycheck access, and SpotMe on
                Credit, which can advance up to $200 with no interest or late
                fees when eligibility criteria are met.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Trackable Credit Score Progress
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                A January 2024 Experian study found Credit Builder members who
                made their first purchase mid-2022 increased their FICO Score 8
                by an average of 30 points after eight months of consistent use.
                Top performers saw improvements up to 71 points, proof that
                automation works when you keep other accounts in good standing.
              </p>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-left mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Who the Card Helps Most
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    First-time credit builders who want to avoid hard pulls
                  </li>
                  <li>
                    People rebuilding after setbacks who need predictable
                    payments
                  </li>
                  <li>
                    Budgeters who prefer managing spending through a mobile app
                  </li>
                  <li>
                    Direct-deposit customers seeking SpotMe and early paycheck
                    access
                  </li>
                </ul>
              </div>

              <div className="items-center justify-center flex w-full my-8">
                {/* Reserved for contextual content */}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Security and Everyday Management
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                The card includes Visa Zero Liability protection, real-time push
                alerts, and 24/7 access through the Chime app. Deposits are held
                at FDIC-insured partner banks up to $250,000 per depositor,
                giving you the same protections you expect from a traditional
                bank relationship.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Moving $400 each
                  month from Checking to Credit Builder gives you a $400 limit.
                  Spending it and allowing Chime to auto-pay in full yields a
                  reported on-time payment with no interest cost. Skipping the
                  transfer or overdrawing the secured balance can delay payments
                  and may impact your credit profile.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Credit outcomes vary and depend
                  on activity across all accounts. Cash-back offers, SpotMe
                  limits, and direct-deposit thresholds change, so confirm the
                  latest terms directly with Chime. This article is educational
                  only, not financial advice.
                </p>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/chime-credit-builder-visa-secured-card-requirements">
                  <Button className="bg-[#1CC461] hover:bg-green-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Check Eligibility Requirements
                  </Button>
                </Link>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Other Credit-Building Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/varo-believe-card"
                      className="text-primary hover:underline"
                    >
                      Varo Believe Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/self-credit-builder-account-visa-card"
                      className="text-primary hover:underline"
                    >
                      Self Credit Builder Account Visa Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/visa-signature-us-current-build-credit-card-benefits"
                      className="text-primary hover:underline"
                    >
                      Current Build Visa Signature Credit Card Benefits
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
