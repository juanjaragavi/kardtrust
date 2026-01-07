import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Chase Sapphire Reserve®: Premium Travel Rewards Card - KardTrust",
    description:
      "Discover the Chase Sapphire Reserve® with 3X points on travel & dining, $300 annual travel credit, Priority Pass lounge access, and premium travel protections. Earn 60,000 bonus points after spending $4,000 in first 3 months.",
    keywords:
      "Chase Sapphire Reserve, premium travel credit card, Chase Ultimate Rewards, travel rewards, airport lounge access, Priority Pass, travel insurance, Chase credit card, premium credit card",
  };
}

export default function ChaseSapphireReservePage() {
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
              Chase Sapphire Reserve®: Premium Travel Rewards on Repeat
            </h1>

            <div id="square02" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Earn 60,000 bonus points after $4,000 spend in three months, net
                $300 back each year on travel automatically, and stack 3X points
                on travel and dining worldwide.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Chase Travel℠ bookings climb to 10X on hotels and car rentals
                and 5X on flights, while Priority Pass lounges, Visa Infinite
                concierge, and comprehensive insurance keep frequent flyers
                covered.
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>60,000 bonus points after $4,000 spend in 3 months</li>
                    <li>$300 annual travel credit applied automatically</li>
                    <li>
                      3X points on travel and dining, no foreign transaction
                      fees
                    </li>
                    <li>
                      10X hotels & car rentals / 5X flights through Chase
                      Travel℠
                    </li>
                    <li>Priority Pass Select access for you + two guests</li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/chase-sapphire-reserve-requirements">
                  <Button className="bg-[#002855] hover:bg-[#003d7a] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/chase-sapphire-reserve.webp"
                  alt="Chase Sapphire Reserve Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={80}
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Make the Most of Ultimate Rewards®
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Redeem points at 1.5¢ each in the Chase Travel℠ portal or
                transfer 1:1 to partners like United, Southwest, Air Canada, and
                World of Hyatt—often unlocking 2¢+ value on premium flights and
                hotel stays.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Everyday Luxury and Protection
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Visa Infinite concierge, DashPass, Lyft credits, and no foreign
                transaction fees elevate daily use. Purchases stay covered with
                120-day damage/theft protection, extended warranty, and return
                protection.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Travel Safeguards Built In
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Trip delay, trip cancellation/interruption, primary rental car
                coverage, baggage protections, and emergency evacuation
                insurance ride along every time you swipe.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Does the Fee Make Sense?
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Start with the $550 annual fee, subtract the $300 travel credit,
                and weigh lounge visits, 3X earnings, and insurance coverage.
                Frequent travelers often come out ahead after a couple of trips.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Spending $1,500
                  monthly— $800 on travel/dining and $700 on other
                  purchases—earns roughly 45,600 points annually (worth about
                  $684 via Chase Travel℠). Carrying a $10,000 balance at 25% APR
                  could add ~$2,500 in interest over 12 months, eroding rewards
                  quickly.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Late payments can trigger
                  penalty APRs and fees. Confirm current rates, lounge partners,
                  and bonus offers with Chase before applying.
                </p>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/chase-sapphire-reserve-requirements">
                  <Button className="bg-[#002855] hover:bg-[#003d7a] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    See Detailed Requirements
                  </Button>
                </Link>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Other Travel Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/chase-freedom-flex"
                      className="text-[#002855] hover:underline"
                    >
                      Chase Freedom Flex℠ Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/capital-one-savor-rewards-credit-card-benefits"
                      className="text-[#002855] hover:underline"
                    >
                      Capital One Savor Rewards Credit Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/wells-fargo-autograph-card-benefits"
                      className="text-[#002855] hover:underline"
                    >
                      Wells Fargo Autograph Card Benefits
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/chase-sapphire-reserve-requirements">
                  <Button className="bg-[#002855] hover:bg-[#003d7a] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Learn About Eligibility
                  </Button>
                </Link>
              </div>

              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
