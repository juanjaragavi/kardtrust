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

            <div className="my-8 text-left sm:text-left">
              <div
                id="kardtrust_ad_1"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <hr className="my-8" />

              <p className="text-gray-700 mb-8">
                For food lovers and frequent diners, the DoorDash Rewards
                Mastercard is your ultimate companion for every order and
                outing.
              </p>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>
                  <strong>Earn 4% cashback</strong> on all DoorDash orders.
                </li>
                <li>
                  <strong>No annual fee,</strong> making it perfect for frequent
                  users.
                </li>
                <li>
                  <strong>3% cashback</strong> on dining at restaurants.
                </li>
                <li>
                  <strong>Access to exclusive DoorDash offers</strong> and
                  promotions.
                </li>
              </ul>

              <p className="text-gray-700 mb-8">
                The DoorDash Rewards Mastercard is designed to reward food
                enthusiasts, offering impressive cashback and exclusive benefits
                whether you're ordering in or dining out.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                4% Cashback on DoorDash Orders: Your Key to Significant Savings
              </h2>

              <p className="text-gray-700 mb-8">
                With the DoorDash Rewards Mastercard, you earn an exceptional 4%
                cashback on all your DoorDash orders. This is one of the highest
                cashback rates available for food delivery services, making it
                incredibly rewarding for frequent users. Every breakfast, lunch,
                dinner, or grocery order through DoorDash helps you accumulate
                substantial savings over time, directly reducing your food
                costs. It's a smart way to turn your regular food expenses into
                valuable rewards.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                No Annual Fee: Enjoy Perks Without Extra Costs
              </h2>

              <p className="text-gray-700 mb-8">
                One of the standout features of the DoorDash Rewards Mastercard
                is its zero annual fee. This means you can enjoy all the
                impressive benefits and cashback opportunities without worrying
                about additional yearly costs. It's an accessible option for
                everyone, whether you're a student, a young professional, or
                simply someone who wants to maximize their savings without
                justifying an annual fee. Use it occasionally or regularly; the
                value remains clear.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Additional Cashback on Dining: Rewards Beyond Delivery
              </h2>

              <p className="text-gray-700 mb-8">
                Beyond DoorDash orders, this Mastercard offers a generous 3%
                cashback on all restaurant purchases. Whether you're enjoying a
                casual meal at a local cafe, grabbing a quick bite, or indulging
                in a fine dining experience, your card rewards you. This
                versatility means you don't need multiple cards to cover your
                food-related expenses; the DoorDash Rewards Mastercard has you
                covered from deliveries to dine-in meals.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Exclusive DoorDash Promotions and Offers: Unlock More Value
              </h2>

              <p className="text-gray-700 mb-8">
                As a cardholder, you gain access to special discounts, free
                delivery on selected orders, and seasonal promotions available
                exclusively to DoorDash Rewards Mastercard holders. These offers
                are regularly updated, providing continuous new ways to save and
                enhancing your overall DoorDash experience. It's like having a
                VIP pass to better deals and more convenient service, making
                every order more rewarding.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Maximize Your Food Experience with the DoorDash Rewards
                Mastercard
              </h2>

              <p className="text-gray-700 mb-8">
                The DoorDash Rewards Mastercard is an essential tool for anyone
                who loves food delivery and dining out. With:
              </p>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>4% cashback on DoorDash orders</li>
                <li>No annual fee</li>
                <li>3% cashback on restaurant dining</li>
                <li>Exclusive DoorDash promotions</li>
              </ul>

              <p className="text-gray-700 mb-8">
                This card offers exceptional value for food enthusiasts. To
                fully benefit from its features, ensure you meet the eligibility
                requirements before applying. If you’re looking to save money on
                your food expenses while enjoying the convenience of delivery
                and dining out, the DoorDash Rewards Mastercard is the perfect
                financial tool for you.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Explore Other Financial Solutions
              </h2>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>
                  <Link
                    href="/financial-solutions/capital-one-savor-rewards-credit-card-benefits"
                    className="text-blue-600 hover:underline"
                  >
                    <strong>Capital One Savor Rewards Credit Card</strong>
                  </Link>
                  : Earn unlimited 3% cashback on dining and entertainment.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/wells-fargo-autograph-card-benefits"
                    className="text-blue-600 hover:underline"
                  >
                    <strong>Wells Fargo Autograph Card</strong>
                  </Link>
                  : Earn 3x points on restaurants, travel, gas, and more.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/amazon-rewards-visa-credit-card-benefits"
                    className="text-blue-600 hover:underline"
                  >
                    <strong>Amazon Rewards Visa</strong>
                  </Link>
                  : Great for Amazon shoppers with tiered cashback rewards,
                  including 2% on restaurants.
                </li>
              </ul>

              <div className="my-8 flex justify-center">
                <Link href="/financial-solutions/doordash-rewards-mastercard-requirements">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    See Requirements
                  </Button>
                </Link>
              </div>

              <div
                id="kardtrust_ad_2"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

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

              <hr className="my-8" />
            </div>
          </div>
        </div>

        <AIContentDisclaimer />
      </article>

      <CompactFooter />
    </main>
  );
}
