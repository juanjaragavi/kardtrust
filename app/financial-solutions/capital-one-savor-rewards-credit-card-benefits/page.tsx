import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Capital One Savor Rewards Credit Card Benefits - KardTrust",
    description:
      "Explore the Capital One Savor Rewards Credit Card Benefits, offering unlimited 3% cash back on dining, entertainment, and more.",
    keywords: "credit cards, rewards, cashback, capital one",
  };
}

export default function CapitalOneSavorRewardsCreditCardBenefitsPage() {
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
              Capital One Savor® Rewards: Cash Back for Dining and
              Entertainment
            </h1>

            <div id="square02" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

            <div className="my-8 text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Earn 3% cash back on dining, entertainment, and select streaming
                platforms, plus 1% everywhere else—without annual fees or reward
                tracking headaches.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Use it as your go-to card for nights out, concerts, and food
                delivery while enjoying Capital One’s exclusive event access.
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm text-orange-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>
                      3% cash back on dining, entertainment, and select
                      streaming
                    </li>
                    <li>
                      3% at grocery stores (excluding superstores), 1%
                      everywhere else
                    </li>
                    <li>No annual fee and no foreign transaction fees</li>
                    <li>
                      Capital One Entertainment access for presales and VIP
                      events
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/capital-one-savor-rewards-credit-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://us.topfinanzas.com/wp-content/uploads/2024/12/download-14-1.webp"
                  alt="Capital One Savor Rewards Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={85}
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Turn Dining and Entertainment Into Monthly Savings
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Spend $400 a month on restaurants, concerts, and streaming and
                you’ll pocket roughly $12 back each month. Rewards post as soon
                as purchases settle, so you can redeem as statement credits,
                gift cards, or travel through Capital One.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Grocery Stores Covered, Superstores Excluded
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                The card includes traditional grocery stores in its 3% tier.
                Big-box stores like Walmart or Target code differently, so keep
                that in mind when planning weekly shopping.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Skip Foreign Fees When You Travel
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Take the Savor abroad without worrying about the standard 3%
                surcharge most cards charge. Every international meal still
                earns the same elevated cash back rate.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Get More Than Cash Back With Capital One Entertainment
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Access presales, VIP lounge upgrades, and curated events through
                Capital One’s entertainment portal. It’s a perk that turns the
                card into a lifestyle companion rather than just a cash back
                tool.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Spending $900 per
                  month—$400 in dining/entertainment/streaming, $250 at grocery
                  stores, and $250 elsewhere—earns roughly $29 per month ($348
                  per year). Carrying that balance at the variable 19.99%–29.99%
                  APR could cost $180+ annually in interest, erasing cash back
                  gains.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Missing payments can trigger
                  late fees and penalty APRs. Verify current categories, sign-up
                  bonuses, and terms with Capital One before applying.
                </p>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/capital-one-savor-rewards-credit-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    See Detailed Requirements
                  </Button>
                </Link>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Other Entertainment-Focused Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/wells-fargo-autograph-card-benefits"
                      className="text-primary hover:underline"
                    >
                      Wells Fargo Autograph Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/doordash-rewards-mastercard-benefits"
                      className="text-primary hover:underline"
                    >
                      DoorDash Rewards Mastercard Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/amazon-rewards-visa-credit-card-benefits"
                      className="text-primary hover:underline"
                    >
                      Amazon Rewards Visa Credit Card Benefits
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
