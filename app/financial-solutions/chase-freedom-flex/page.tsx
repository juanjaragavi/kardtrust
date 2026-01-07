import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Chase Freedom Flex℠: Cash Back Credit Card with Rotating Categories - KardTrust",
    description:
      "Discover the Chase Freedom Flex℠ with 5% cash back in quarterly bonus categories, $200 welcome bonus, 0% intro APR for 15 months, and no annual fee. Earn 5% on travel through Chase, 3% on dining and drugstores.",
    keywords:
      "Chase Freedom Flex, cash back credit card, rotating categories, quarterly bonus, Chase Ultimate Rewards, no annual fee, Chase credit card, 0% intro APR, travel rewards",
  };
}

export default function ChaseFreedomFlexPage() {
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
              Chase Freedom Flex℠: Rotating 5% Cash Back with $0 Annual Fee
            </h1>

            <div className="my-8 text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                Activate quarterly 5% categories, earn elevated rewards on Chase
                Travel℠ bookings, dining, and drugstores, and keep every dollar
                of value thanks to a $0 annual fee.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                New cardholders collect a $200 bonus after $500 spend and enjoy
                0% intro APR for 15 months on purchases and balance transfers
                before the rate resets to the 18.74%–28.24% variable range (5%
                or $5 balance transfer fee).
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>
                      5% cash back on quarterly rotating categories (activation
                      required, $1,500 cap)
                    </li>
                    <li>
                      5% on travel booked via Chase Travel℠; 3% on dining and
                      drugstores
                    </li>
                    <li>
                      $200 bonus after $500 spend + 0% intro APR for 15 months
                    </li>
                    <li>
                      Redeem as cash back or transfer points to Sapphire cards
                      for travel value
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/chase-freedom-flex-requirements">
                  <Button className="bg-[#2d65a7] hover:bg-[#244d85] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/chase-freedom-flex.webp"
                  alt="Chase Freedom Flex Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={80}
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Master the Rotating 5% Calendar
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Activate each quarter in the Chase app to earn 5% on up to
                $1,500 in combined spending. Categories often include gas,
                grocery stores, Amazon.com, PayPal, and home improvement—making
                it easy to align normal purchases with the cap.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Elevated Everyday Categories Year-Round
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Book travel through Chase Travel℠ for 5% back, and pick up 3% on
                dining (including takeout and delivery) and drugstores without
                any activation requirements. All other purchases earn a base 1%.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Use the Intro APR Window Strategically
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Finance large purchases or consolidate balances interest-free
                for 15 months, then pay off the balance before the variable APR
                kicks in. Remember the 5% (or $5) balance transfer fee when
                comparing savings.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Pair With Sapphire for Travel Upside
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Freedom Flex cash back converts to Ultimate Rewards points. Move
                them to Sapphire Preferred® or Reserve® to redeem travel at
                1.25x–1.5x or transfer to partners like United, Southwest, and
                Hyatt.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Spending $1,500 per
                  quarter in 5% categories and $600 monthly on dining/drugstores
                  yields about $480 in annual rewards. Carrying a $5,000 balance
                  at a post-promo APR of 23.49% could cost roughly $1,175 in
                  interest over 12 months.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Missing payments or failing to
                  activate quarterly categories can reduce rewards and trigger
                  penalty APRs. Review current terms with Chase before applying.
                </p>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/chase-freedom-flex-requirements">
                  <Button className="bg-[#2d65a7] hover:bg-[#244d85] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    See Detailed Requirements
                  </Button>
                </Link>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Other No-Fee Cash Back Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/chase-freedom-unlimited-credit-card-benefits"
                      className="text-[#2d65a7] hover:underline"
                    >
                      Chase Freedom Unlimited® Credit Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/citi-custom-cash-card"
                      className="text-[#2d65a7] hover:underline"
                    >
                      Citi Custom Cash℠ Card Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/amazon-rewards-visa-credit-card-benefits"
                      className="text-[#2d65a7] hover:underline"
                    >
                      Amazon Rewards Visa Credit Card Benefits
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-left my-8">
                <a
                  href="https://creditcards.chase.com/cash-back-credit-cards/freedom/flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#2d65a7] hover:bg-[#244d85] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Apply on Chase.com
                  </Button>
                </a>
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
