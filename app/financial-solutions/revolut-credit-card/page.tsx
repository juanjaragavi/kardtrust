import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Revolut Credit Card: Premium Banking with Advanced Security - KardTrust",
    description:
      "Discover the Revolut Credit Card offering customizable spending controls, virtual cards with regenerating details, real-time fraud protection, and exclusive Metal card benefits. Available on Standard, Premium, and Metal plans.",
    keywords:
      "Revolut Credit Card, virtual credit card, Metal card, customizable card controls, fraud protection, premium banking, fintech credit card, secure credit card",
  };
}

export default function RevolutCreditCardPage() {
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
              Revolut Credit Card: Next-Generation Financial Control and
              Security
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            ></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4 leading-6">
                The Revolut Credit Card combines cutting-edge fintech innovation
                with premium banking features, offering customizable controls,
                virtual cards with regenerating security details, and 24/7 fraud
                monitoring across Standard, Premium, and exclusive Metal plans.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-6">
                Issued by Cross River Bank, Member FDIC, Revolut's Visa Credit
                Card transforms how you manage spending with app-based controls,
                instant card freezing, multi-card options, and advanced security
                that has helped prevent over $590 million in fraud globally.
              </p>

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>
                      Standard Plan at $0/month, Premium at $9.99/month, Metal
                      at $16.99/month
                    </li>
                    <li>
                      Customize card color, add personal notes or sketches (fees
                      apply)
                    </li>
                    <li>
                      Virtual cards with regenerating details for maximum
                      security
                    </li>
                    <li>
                      Exclusive steel Metal cards available in 5 premium colors
                    </li>
                    <li>
                      24/7 fraud monitoring with instant card freeze capability
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/revolut-credit-card-requirements">
                  <Button className="bg-[#000000] hover:bg-gray-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/revolut-credit-card.webp"
                  alt="Revolut Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  loading="lazy"
                  quality={85}
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Revolutionary Card Customization and Options
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Revolut elevates card personalization beyond traditional banking
                limits. The Standard Plan ($0/month) offers iconic card designs
                you can customize with personal notes or sketches for a $3.99
                fee, with delivery fees applying. Premium Plan ($9.99/month)
                members choose from three exclusive card colors—Rose Gold,
                Lavender, and Space Gray—with complimentary customization and
                delivery fees. Metal Plan ($16.99/month) subscribers unlock five
                shades of contactless stainless steel cards (Black, Gold,
                Lavender, Space Gray, Rose Gold) that double as travel and
                trading companions, with customization included and only
                delivery fees applying.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Advanced Security Features That Lead the Industry
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Revolut's security infrastructure operates 24/7 with specialized
                fraud prevention teams and AI-powered monitoring systems that
                prevented over $590 million in fraud globally in 2023 alone.
                Virtual cards feature regenerating details after every purchase,
                making unauthorized use virtually impossible. Customize spending
                controls by merchant category, location, transaction type, and
                amount limits directly in the app. If you suspect suspicious
                activity, freeze your physical or virtual card instantly with
                one tap and unfreeze just as quickly when needed—no phone calls
                or waiting required.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Virtual Cards: Indestructible Digital Security
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Revolut's virtual card technology represents the future of
                secure spending. Available to Premium and Metal members, virtual
                cards eliminate the risk of physical card loss or theft
                entirely. Link them to Apple Pay or Google Pay for seamless,
                contactless payments at millions of merchants worldwide. The
                card details regenerate automatically after each transaction,
                creating a moving target that renders stolen credentials
                useless. Perfect for online shopping, subscription services, or
                any situation where you want maximum security without carrying
                physical plastic.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Metal Plan: The Ultimate Premium Experience
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                For $16.99 per month, the Metal Plan delivers Revolut's full
                suite of premium features wrapped in an exclusive contactless
                steel card. Choose from five sophisticated finishes that make a
                statement while providing durability traditional plastic cards
                can't match. Metal members enjoy priority customer support,
                enhanced travel insurance provided by Chubb Group, exclusive
                trading benefits, and access to Revolut's most advanced
                financial tools. The steel card's weight and finish signal
                premium status while maintaining the same contactless
                functionality and global acceptance as any Visa card.
              </p>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-left mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Who Benefits Most from Revolut Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    International travelers seeking transparent foreign exchange
                    rates
                  </li>
                  <li>
                    Security-conscious users who want granular spending controls
                  </li>
                  <li>
                    Digital-first consumers who prioritize mobile app
                    functionality
                  </li>
                  <li>
                    Premium banking enthusiasts seeking exclusive Metal card
                    status
                  </li>
                  <li>
                    Investors and traders wanting integrated financial services
                  </li>
                </ul>
              </div>

              <div className="items-center justify-center flex w-full my-8">
                {/* Reserved for contextual content */}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Comprehensive Banking Ecosystem Integration
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                Revolut Credit Cards connect seamlessly with the broader Revolut
                ecosystem, which includes FDIC-insured banking services through
                Lead Bank (prepaid cards and secured credit) or Cross River Bank
                (credit cards and personal loans). Funds in your Revolut Prepaid
                Card Account transfer to Lead Bank with full FDIC insurance up
                to applicable limits. Savings Vaults created after July 29, 2025
                are provided by Cross River Bank with $250,000 FDIC coverage.
                Securities trading through Revolut Securities Inc. (member
                FINRA/SIPC) and automated investing via Revolut Wealth Inc. (SEC
                registered) round out a complete financial platform accessible
                from one mobile app.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Plan Comparison: Standard, Premium, and Metal
              </h2>
              <p className="text-gray-700 mb-6 leading-6">
                <strong>Standard ($0/month):</strong> Iconic customizable card
                design with $3.99 customization fee, delivery fees may apply,
                basic fraud protection, standard customer support, global Visa
                acceptance.
                <br />
                <br />
                <strong>Premium ($9.99/month):</strong> Choice of three premium
                card colors (Rose Gold, Lavender, Space Gray), complimentary
                customization, delivery fees may apply, virtual card access,
                enhanced fraud protection, priority support, travel benefits.
                <br />
                <br />
                <strong>Metal ($16.99/month):</strong> Five steel card finishes
                (Black, Gold, Lavender, Space Gray, Rose Gold), complimentary
                customization, delivery fees may apply, virtual card access,
                maximum security features, premium support, Chubb travel
                insurance, exclusive trading and investing benefits, full
                financial ecosystem access.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Revolut Credit Card
                  issued by Cross River Bank, Member FDIC. The Revolut Prepaid
                  Visa® and Mastercard® cards are issued by Lead Bank, Member
                  FDIC, pursuant to respective licenses. Standard plan costs
                  $0/month; Premium costs $9.99/month; Metal costs $16.99/month.
                  Customization fees ($3.99 on Standard, free on Premium/Metal)
                  and delivery fees apply to physical cards. Terms and
                  Conditions apply to all card programs and membership levels.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Revolut Technologies Inc. is a
                  technology services provider and program manager, not an
                  FDIC-insured bank. Banking services provided by Lead Bank or
                  Cross River Bank. Securities products not insured by FDIC or
                  any federal government agency and subject to investment risks,
                  including possible loss of principal. This article is
                  educational only, not financial advice. Plans, fees, benefits,
                  and availability subject to change. Verify current terms at
                  Revolut.com.
                </p>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/revolut-credit-card-requirements">
                  <Button className="bg-[#000000] hover:bg-gray-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Check Eligibility Requirements
                  </Button>
                </Link>
              </div>

              <div className="mt-10 space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Compare Other Premium Credit Cards
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/financial-solutions/chase-sapphire-reserve"
                      className="text-primary hover:underline"
                    >
                      Chase Sapphire Reserve® Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/robinhood-gold-card"
                      className="text-primary hover:underline"
                    >
                      Robinhood Gold Card Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions/sofi-credit-card"
                      className="text-primary hover:underline"
                    >
                      SoFi Credit Card Benefits
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
