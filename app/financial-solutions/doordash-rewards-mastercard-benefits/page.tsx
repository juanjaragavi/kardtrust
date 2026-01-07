import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "DoorDash Rewards Mastercard Benefits: Maximize Your Food Savings - KardTrust",
    description:
      "Discover the benefits of the DoorDash Rewards Mastercard: earn high cashback on DoorDash orders and dining, enjoy no annual fee, and access exclusive promotions.",
    keywords: "credit cards, rewards, cashback, food delivery",
  };
}

export default function DoordashRewardsMastercardBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              DoorDash Rewards Mastercard Benefits: Maximize Your Food Savings
            </h1>

            <div id="square02" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4">
                DoorDash Rewards Mastercard® turns delivery habits into cash
                back: earn 4% on DoorDash and Caviar orders, 3% at restaurants,
                and 1% everywhere else with no annual fee or category tracking.
              </p>
              <p className="text-base text-gray-700 mb-6">
                Pair the high earn rates with rotating cardholder promos and
                DashPass credits to lower your food budget without juggling
                multiple cards.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://us.topfinanzas.com/wp-content/uploads/2024/11/download-4.webp"
                  alt="DoorDash Rewards Mastercard"
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

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>4% cash back on DoorDash and Caviar purchases</li>
                    <li>3% cash back on dining at restaurants worldwide</li>
                    <li>1% cash back on all other eligible spend</li>
                    <li>
                      No annual fee; rotating cardholder offers and DashPass
                      perks
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/doordash-rewards-mastercard-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Turn DoorDash Spending into 4% Cash Back
              </h2>

              <p className="text-gray-700 mb-6">
                Every delivery, grocery drop, or pickup through DoorDash and
                Caviar earns 4% cash back. Stack that with in-app promo codes to
                drive your effective discount higher, especially if you place
                multiple orders a week.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Dine-In Rewards Without Switching Cards
              </h2>

              <p className="text-gray-700 mb-6">
                Swipe the card at restaurants worldwide for 3% cash back, then
                fall back to 1% on everything else. It keeps your food spending
                consolidated instead of juggling separate category cards for
                delivery versus dining out.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                No Annual Fee and Ongoing Perks
              </h2>

              <p className="text-gray-700 mb-6">
                You pay no annual fee, yet still access rotating DashPass
                membership credits, statement credits, and limited-time offers.
                Activate new promos in the Chase or DoorDash app so you never
                miss bonus opportunities.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Place $250 in
                  DoorDash orders and spend $150 dining out each month. Expect
                  roughly $18 in monthly cash back, or $216 yearly, without
                  paying an annual fee.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Offers and earn rates can
                  change. Late payments may forfeit promotional credits and
                  trigger interest at the ongoing variable APR. Review the
                  DoorDash Rewards Mastercard terms before applying.
                </p>
              </section>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Explore Other Financial Solutions
              </h2>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>
                  <Link
                    href="/financial-solutions/capital-one-savor-rewards-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Capital One Savor Rewards Credit Card</strong>
                  </Link>
                  : Earn unlimited 3% cashback on dining and entertainment.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/wells-fargo-autograph-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Wells Fargo Autograph Card</strong>
                  </Link>
                  : Earn 3x points on restaurants, travel, gas, and more.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/amazon-rewards-visa-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Amazon Rewards Visa</strong>
                  </Link>
                  : Great for Amazon shoppers with tiered cashback rewards,
                  including 2% on restaurants.
                </li>
              </ul>

              <div className="text-left my-8">
                <Link href="/financial-solutions/doordash-rewards-mastercard-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    See Detailed Requirements
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <AIContentDisclaimer />
      <CompactFooter />

      <CompactFooter />
    </main>
  );
}
