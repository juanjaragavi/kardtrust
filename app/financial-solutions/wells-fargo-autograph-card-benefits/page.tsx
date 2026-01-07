import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Discover the Wells Fargo Autograph Card Benefits - KardTrust",
    description:
      "Explore the comprehensive benefits of the Wells Fargo Autograph Card. Earn rewards, enjoy travel perks, and discover why it's perfect for everyday spending.",
    keywords: "credit cards, rewards, travel, dining",
  };
}

export default function WellsFargoAutographCardBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Discover the Wells Fargo Autograph Card Benefits
            </h1>

            <div className="my-8 text-left sm:text-left">
              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/wells-fargo-autograph-card.webp"
                  alt="Wells Fargo Autograph Card"
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

              <p className="text-gray-700 mb-8">
                Versatile rewards for every purchase with no annual fee and
                valuable benefits.
              </p>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>
                  <strong>Earn 3x points</strong> on restaurants, travel, gas
                  stations, streaming services, and phone plans.
                </li>
                <li>
                  <strong>Earn 1x point</strong> on all other purchases.
                </li>
                <li>
                  <strong>No annual fee</strong> - ever.
                </li>
                <li>
                  <strong>$300 welcome bonus</strong> after spending $1,500 in
                  the first 3 months.
                </li>
              </ul>

              <div className="text-left my-6">
                <Link href="/financial-solutions/wells-fargo-autograph-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <p className="text-gray-700 mb-8">
                The Wells Fargo Autograph Card offers a balanced rewards
                structure that makes it easy to earn on everyday purchases. With
                bonus categories covering dining, travel, gas, streaming, and
                phone services, plus a generous welcome bonus, it's designed for
                modern spending habits.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                3x Points on Popular Categories: Maximize Your Daily Spending
              </h2>

              <p className="text-gray-700 mb-8">
                The Wells Fargo Autograph Card shines with its 3x points earning
                structure across five popular spending categories. Whether
                you're dining out, booking travel, filling up at gas stations,
                enjoying streaming services, or paying your phone bill, every
                dollar earns triple points.
              </p>

              <p className="text-gray-700 mb-8">
                For example, spending $200 monthly on dining and $100 on gas
                earns 900 points each month—that's 10,800 points annually from
                just these two categories. This broad category coverage ensures
                you're earning enhanced rewards on purchases you're already
                making, without having to track rotating categories or
                activation requirements.
              </p>

              <p className="text-gray-700 mb-8">
                The card's approach to bonus categories reflects modern spending
                patterns, recognizing that consumers frequently spend on digital
                services and everyday essentials. This makes it particularly
                valuable for younger cardholders and tech-savvy users who
                prioritize streaming and mobile services.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                $300 Welcome Bonus: Strong Start to Your Rewards Journey
              </h2>

              <p className="text-gray-700 mb-8">
                New cardholders can earn a substantial $300 welcome bonus after
                spending $1,500 within the first three months of account
                opening. This requirement is reasonable and achievable for most
                households through normal spending patterns.
              </p>

              <p className="text-gray-700 mb-8">
                The welcome bonus provides immediate value and can be redeemed
                for cash back, statement credits, or travel. This upfront reward
                effectively covers several months' worth of spending benefits,
                making the card attractive from day one. Combined with ongoing
                category bonuses, the welcome offer provides strong initial
                motivation to use the card regularly.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                1x Points on Everything Else: No Spending Goes Unrewarded
              </h2>

              <p className="text-gray-700 mb-8">
                Beyond the bonus categories, the Wells Fargo Autograph Card
                earns 1x point on all other purchases, ensuring every
                transaction contributes to your rewards balance. This universal
                earning rate means you can use the card for any purchase without
                sacrificing rewards potential.
              </p>

              <p className="text-gray-700 mb-8">
                Whether you're shopping for groceries, buying clothes, paying
                utilities, or making unexpected purchases, you'll always earn
                points. This comprehensive earning structure eliminates the need
                to carry multiple cards or worry about which card to use for
                different purchase types.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                No Annual Fee: Keep More of Your Rewards
              </h2>

              <p className="text-gray-700 mb-8">
                The Wells Fargo Autograph Card comes with no annual fee, ever.
                This means 100% of your earned rewards translate to actual value
                without any offset from annual costs. Unlike premium cards that
                charge annual fees, every point you earn with the Autograph Card
                represents pure benefit.
              </p>

              <p className="text-gray-700 mb-8">
                The absence of an annual fee makes the card suitable for any
                spending level. Whether you're a light spender who values
                simplicity or a heavy spender maximizing rewards, you won't face
                ongoing costs that diminish your rewards value. This fee
                structure ensures the card remains beneficial regardless of how
                your spending patterns change over time.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Flexible Redemption Options: Your Rewards, Your Way
              </h2>

              <p className="text-gray-700 mb-8">
                Points earned with the Wells Fargo Autograph Card can be
                redeemed in multiple ways to suit your preferences. Options
                include cash back, statement credits, travel bookings, gift
                cards, and merchandise. This flexibility ensures your rewards
                can adapt to changing needs and preferences.
              </p>

              <p className="text-gray-700 mb-8">
                The redemption process is straightforward through Wells Fargo's
                online portal or mobile app. Whether you prefer immediate cash
                back to offset purchases or want to save points for larger
                redemptions, the card accommodates different reward strategies.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Additional Card Benefits: Enhanced Value Beyond Rewards
              </h2>

              <p className="text-gray-700 mb-8">
                Beyond earning rewards, the Wells Fargo Autograph Card includes
                valuable additional benefits. Cardholders enjoy cell phone
                protection when paying their monthly bill with the card,
                providing coverage against damage and theft up to $600 per
                claim.
              </p>

              <p className="text-gray-700 mb-8">
                The card also includes zero liability protection for
                unauthorized transactions, ensuring peace of mind for everyday
                use. These additional benefits add practical value beyond the
                rewards program, making the card a comprehensive financial tool
                for daily spending.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Perfect for Everyday Spending
              </h2>

              <p className="text-gray-700 mb-8">
                The Wells Fargo Autograph Card combines strong bonus categories,
                a generous welcome offer, and no annual fee to create an
                attractive package for everyday spending. Its broad 3x
                categories ensure you'll earn enhanced rewards on common
                expenses, while the 1x rate on everything else means no purchase
                goes unrewarded. Before applying, review the eligibility
                requirements to ensure you can take full advantage of these
                benefits.
              </p>

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
                    href="/financial-solutions/titanium-rewards-visa-signature-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Titanium Rewards Visa Signature Credit Card</strong>
                  </Link>
                  : Offers high points on gas and groceries.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/doordash-rewards-mastercard-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>DoorDash Rewards Mastercard</strong>
                  </Link>
                  : Ideal for those who frequently use food delivery services
                  and dine out.
                </li>
              </ul>

              <div className="text-left my-8">
                <Link href="/financial-solutions/wells-fargo-autograph-card-requirements">
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
