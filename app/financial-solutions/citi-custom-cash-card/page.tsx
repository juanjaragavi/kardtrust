import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Citi Custom Cash® Card: 5% Cash Back That Automatically Adapts - KardTrust",
    description:
      "Discover the Citi Custom Cash® Card with automatic 5% cash back on your top spending category, $200 welcome bonus, 0% intro APR for 18 months on balance transfers, and no annual fee. Your rewards adapt as your spending changes.",
    keywords:
      "Citi Custom Cash Card, automatic cash back, 5% cash back, adaptive rewards, no annual fee, balance transfer, Citi credit card, ThankYou Points",
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
              Citi Custom Cash® Card: Automatic 5% Cash Back That Adapts to
              Your Spending
            </h1>

            <p className="text-lg text-gray-800 mb-4 leading-5 text-left">
              The Citi Custom Cash® Card automatically applies 5% cash back to
              the eligible category where you spend the most each billing cycle,
              up to $500 in purchases. There is no activation calendar, no
              rotating enrollment, and no annual fee standing between you and
              the bonus rate.
            </p>
            <p className="text-base text-gray-700 mb-8 leading-5 text-left">
              Spend $1,500 within six months to earn a $200 welcome bonus, enjoy
              0% intro APR for 18 months on balance transfers completed in the
              first four months, and earn 1% back on everything else. This
              structure favors cardholders who want quick upside without
              spreadsheets or quarterly reminders.
            </p>

            <div
              id="kardtrust_ad_1"
              className="items-center justify-center flex w-full my-6"
            >
              {/* Empty responsive, centered div */}
            </div>

            <div className="my-8 space-y-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Key Features of the Citi Custom Cash® Card
              </h2>

              <div className="space-y-6 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Automatic 5% bonus category:
                    </span>{" "}
                    Earn 5% cash back on up to $500 in purchases in your top
                    eligible category every billing cycle (worth up to $300 per
                    year) with zero activation requirements.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      $200 bonus + 0% intro APR:
                    </span>{" "}
                    Earn $200 cash back (20,000 ThankYou® Points) after $1,500
                    in purchases within six months and secure a 0% intro APR for
                    18 months on balance transfers made in the first four months
                    (balance transfer fee applies).
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      No annual fee + Citi Travel boost:
                    </span>{" "}
                    Pay $0 annually, earn an extra 4% on hotels, car rentals,
                    and attractions booked through Citi Travel®, and collect 1%
                    back on every other purchase.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Flexible ThankYou® Points redemption:
                    </span>{" "}
                    Rewards post as ThankYou® Points, redeemable at one cent
                    per point for statement credits, direct deposits, gift
                    cards, or Citi Travel bookings with no minimum threshold.
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left my-8">
              <Link href="/financial-solutions/citi-custom-cash-card-requirements">
                <Button className="bg-[#233A79] hover:bg-[#1a2b5c] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                  View Eligibility Requirements
                </Button>
              </Link>
            </div>

            <div className="my-8 text-left sm:text-left">
              <Image
                src="https://media.topfinanzas.com/images/kardtrust/citi-custom-cash-card.webp"
                alt="Citi Custom Cash Card"
                width={900}
                height={507}
                className="w-full h-auto rounded-xl"
                style={{ width: "auto", height: "auto" }}
                loading="lazy"
                quality={80}
              />
            </div>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                How the Citi Custom Cash® Card Automatically Maximizes Your
                Rewards
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                The Custom Cash tracks spending in real time and tags the
                category with the highest dollar total each statement cycle.
                Purchases in that category earn 5% back on up to $500, so maxing
                out the cap delivers $25 per month or $300 per year in automatic
                rewards.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Eligible categories cover everyday costs: restaurants, grocery
                stores, gas stations, select travel and transit, streaming,
                drugstores, home improvement stores, fitness clubs, and live
                entertainment. When your spending shifts, the bonus follows
                without any action required.
              </p>
              <p className="text-sm text-gray-700 leading-5 text-left">
                Book hotels, car rentals, and attractions through Citi Travel®
                to add an extra 4% cash back on top of the base 1%, keeping the
                card competitive with travel-focused alternatives while staying
                fee-free.
              </p>
            </section>

            <div
              id="kardtrust_ad_2"
              className="items-center justify-center flex w-full my-8"
            >
              {/* Empty responsive, centered div */}
            </div>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Welcome Bonus, Intro APR, and Balance Transfer Playbook
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                The $200 bonus returns 13.3% on the required spend and stacks
                with your early 5% category earnings. Aim for roughly $250 per
                month in everyday purchases to clear the threshold without
                forcing extra swipes.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Balance transfers booked within four months receive 0% intro APR
                for 18 months. Divide your transferred balance by 18 to set a
                payoff target that keeps you interest-free once the standard
                17.99% – 27.99% variable APR resumes. Remember that new
                purchases accrue interest if you are still carrying the
                transferred balance, so keep routine spending focused on the 5%
                cap or pay new charges in full.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                ThankYou® Points Ecosystem and Flexible Redemption Options
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Rewards accrue as ThankYou® Points at a clean one cent per
                point value for statement credits, direct deposits, or mailed
                checks. Redemptions are available instantly—no minimum balance
                gets in the way.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                You can also funnel points into gift cards, Citi Travel bookings
                (where the 4% boost applies), Shop with Points at Amazon, or
                eligible loan payments. Holders of other ThankYou® cards can
                pool balances to unlock premium airline and hotel transfers down
                the road.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Comparing Citi Custom Cash to Other Popular Cash Back Cards
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Flat-rate cards such as the{" "}
                <Link
                  href="/financial-solutions/wells-fargo-active-cash-card"
                  className="text-primary hover:underline"
                >
                  Wells Fargo Active Cash® Card
                </Link>{" "}
                and Citi Double Cash® deliver 2% everywhere. The Custom Cash
                wins when you consistently run $500 in a single category each
                month, effectively lifting blended earnings above 2% while
                staying fee-free.
              </p>
              <p className="text-sm text-gray-700 leading-5 text-left">
                Prefer simplicity over quarterly rotations on the{" "}
                <Link
                  href="/financial-solutions/chase-freedom-flex"
                  className="text-primary hover:underline"
                >
                  Chase Freedom Flex℠
                </Link>{" "}
                or Discover it® Cash Back? The Custom Cash keeps the same $300
                annual 5% ceiling but spreads it across 12 months and does the
                category selection for you. Pair it with a 2% card for a
                reliable one-two punch: 5% on the category cap, 2% on everything
                else.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Convenience Features, Digital Wallets, and Citi Mobile App
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Tap-to-pay, zero-liability protection, and widespread digital
                wallet support keep daily purchases fast and secure while you
                continue earning rewards.
              </p>
              <p className="text-sm text-gray-700 leading-5 text-left">
                The Citi Mobile® App shows real-time category tracking, lets
                you set custom alerts, schedule payments, and pick a due date
                that matches your cash-flow routine, keeping the card easy to
                manage.
              </p>
            </section>

            <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
              <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                ⚠️ Important Disclosure
              </h3>
              <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                <strong>Representative APR Example:</strong> Purchases carry a
                variable 17.99% – 27.99% APR. A $3,000 balance at 22.99% costs
                roughly $689 in interest over 12 months if you pay only the
                minimum. Balance transfers made within four months qualify for
                0% APR for 18 months, then revert to the variable range. Balance
                transfer fee: $5 or 5%, whichever is greater.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                <strong>Credit Impact:</strong> Applications trigger a hard
                inquiry that may temporarily trim scores. Keep utilization below
                30% and pay on time to rebuild momentum.
              </p>
              <p className="text-sm text-gray-700 leading-5 text-left">
                <strong>Product Restrictions:</strong> One Citi Custom Cash®
                account per person. You are ineligible for the welcome bonus if
                you received one for this product in the last 48 months. Subject
                to credit approval. This information is educational; KardTrust
                is not affiliated with Citi.
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

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
