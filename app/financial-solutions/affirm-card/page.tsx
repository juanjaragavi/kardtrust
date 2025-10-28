import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Affirm Card: Pay Over Time with Flexible Payment Plans - KardTrust",
    description:
      "Discover the Affirm Card—a Visa debit card with pay-over-time flexibility. No annual fees, no hidden charges, 0%-36% APR payment plans, and no credit impact to apply. Split purchases after checkout or plan ahead.",
    keywords:
      "Affirm Card, pay over time, flexible payment plans, Visa debit card, no annual fee, buy now pay later, 0% APR, Evolve Bank, Stride Bank, split payments, affirm payment options",
  };
}

export default function AffirmCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Affirm Card: Flexible Payment Plans Without Hidden Fees
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Affirm Card is a Visa debit card that gives you the power to
                pay over time with transparent, flexible payment plans. Unlike
                traditional credit cards with compound interest and hidden fees,
                the Affirm Card offers straightforward payment options from
                0%-36% APR with no annual fees, no late fees, and no surprise
                charges. Check your purchasing power without impacting your
                credit score, then decide how to pay—in full immediately or
                split into manageable installments over time.
              </p>

              <div
                id="kardtrust_ad_1"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      No Card Fees or Hidden Charges:
                    </span>{" "}
                    The Affirm Card has zero annual fees, no hidden fees, and no
                    compound interest. You'll see exactly what you owe upfront
                    with transparent payment plans. There are no late fees or
                    penalty APR increases—Affirm believes in straightforward
                    pricing that helps you manage your finances confidently
                    without worrying about surprise charges appearing on your
                    statement.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Flexible Payment Options:
                    </span>{" "}
                    Choose how to pay for each purchase. Pay in full immediately
                    using your linked bank account, or request a payment plan
                    (0%-36% APR based on credit) to split larger purchases into
                    monthly installments. You can even split eligible purchases
                    of $50+ after checkout—you have 24 hours post-purchase to
                    request a payment plan in the app. Plans vary by merchant
                    and purchase amount.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      No Credit Impact to Apply:
                    </span>{" "}
                    See how much you can spend before you shop without affecting
                    your credit score. Checking your purchasing power with
                    Affirm uses a soft credit check that doesn't impact your
                    credit. You'll know your available spending amount ahead of
                    time, helping you plan purchases with confidence and
                    transparency rather than discovering limits only after being
                    declined.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Use Everywhere Visa is Accepted:
                    </span>{" "}
                    Get both a free physical card for in-store purchases and a
                    virtual card for online shopping. The Affirm Card works at
                    millions of locations across the U.S. wherever Visa is
                    accepted—from everyday retailers to online merchants. Carry
                    one card but have the flexibility to pay your way, whether
                    that's immediately or over time with a payment plan.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/affirm-card-requirements">
                  <Button className="bg-[#4a4af4] hover:bg-[#3838d9] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/affirm-card.webp"
                  alt="Affirm Card"
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

              <div className="my-6">
                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Affirm Card reimagines how debit cards work by combining
                  the convenience of instant payments with the flexibility of
                  installment plans. Issued by Evolve Bank & Trust or Stride
                  Bank, N.A. (both FDIC Members), the Affirm Card isn't a
                  traditional credit card—it's a Visa debit card with
                  intelligent payment options built in. This unique approach
                  means you avoid the debt spiral of revolving credit while
                  still accessing the payment flexibility you need for larger
                  purchases.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  How Payment Plans Work
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Affirm Card offers multiple ways to structure your
                  payments. For everyday purchases, simply pay in full from your
                  linked bank account or Affirm Money Account—funds pull within
                  1-3 days of purchase with no interest or fees. For larger
                  purchases, request a payment plan before or after checkout
                  (within 24 hours for purchases $50+). Payment plans range from
                  interest-free Pay in 4 options (four payments every two weeks
                  at 0% APR) to extended monthly plans with rates from 0%-36%
                  APR based on your credit and the purchase amount.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  For example, an $800 purchase might be split into 12 monthly
                  payments of $77.99 at 30% APR, or four interest-free payments
                  of $200 every two weeks. Available plans vary by merchant and
                  your eligibility—you'll see all options upfront in the Affirm
                  app before committing. A down payment may be required for some
                  plans. This transparency helps you make informed decisions
                  about which payment structure works best for your budget.
                </p>

                <div
                  id="kardtrust_ad_2"
                  className="items-center justify-center flex w-full my-8"
                >
                  {/* Empty responsive, centered div */}
                </div>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  The Buy Now, Pay Later Advantage
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Unlike traditional credit cards that charge compound interest
                  on revolving balances, Affirm uses simple interest for payment
                  plans—you'll never pay interest on interest. Each payment plan
                  has a fixed amount and schedule visible upfront, eliminating
                  surprises. This structure helps you budget effectively because
                  you know exactly what you'll pay each month without worrying
                  about changing minimum payments or variable interest rates
                  that make debt harder to manage.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Affirm Card also gives you the flexibility to decide after
                  your purchase. Made an eligible purchase over $50 but didn't
                  plan ahead for a payment plan? You have 24 hours post-purchase
                  to split it into installments through the Affirm app. This
                  "split after checkout" feature provides a safety net for
                  unexpected expenses or when you realize a purchase would be
                  easier to manage with monthly payments rather than one
                  immediate debit.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Learn About Credit Cards"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                {/* Related Articles Section */}
                <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                    Learn More About Payment Options:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700 text-left">
                    <li className="text-left">
                      <Link
                        href="/personal-finance/credit-card-types-benefits/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Different Credit Card Types
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        How Credit Card Interest Rates Work
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximizing Credit Card Rewards
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Transparent Eligibility Checks:
                      </span>{" "}
                      Before you shop, check your purchasing power in the Affirm
                      app to see how much you can spend. This soft credit check
                      won't impact your credit score and gives you confidence
                      about what you can afford before you start shopping.
                      Payment plan eligibility is determined for each purchase
                      based on amount, merchant, and your credit profile.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Link Your Bank Account or Affirm Money Account:
                      </span>{" "}
                      Connect an external bank account or use an Affirm Money
                      Account to unlock all card features. For pay-in-full
                      purchases, funds automatically pull from your linked
                      account within 1-3 days. For payment plans, you'll make
                      scheduled payments according to your chosen plan terms,
                      with no overdraft fees to worry about.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Physical and Virtual Cards:
                      </span>{" "}
                      Receive a free physical Affirm Card to use in stores
                      everywhere Visa is accepted. Plus, use your virtual card
                      for secure online purchases. Having both options ensures
                      you can use the Affirm Card for any purchase, whether
                      you're shopping in-person or browsing online from the
                      comfort of home.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Interest-Free Options Available:
                      </span>{" "}
                      Affirm offers Pay in 4 payment plans at 0% APR for
                      eligible purchases. Discover additional interest-free
                      options and longer payment plans directly in the Affirm
                      app—available plans depend on your purchase amount and may
                      vary by merchant. Many purchases qualify for 0% APR plans,
                      helping you avoid interest charges entirely.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Seamless Digital Experience
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Affirm Card is designed for mobile-first convenience:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Manage Everything in the App:
                      </span>{" "}
                      The Affirm mobile app (available on iOS and Android) is
                      your control center for the Affirm Card. Check your
                      purchasing power, request payment plans before or after
                      purchases, view upcoming payments, manage your linked bank
                      accounts, and track all your Affirm transactions in one
                      convenient location. The intuitive interface makes it easy
                      to stay on top of your finances.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Plan Ahead or Split After:
                      </span>{" "}
                      For major purchases, request a payment plan in the Affirm
                      app before you shop to know exactly how much you can
                      spend. For everyday purchases, use the card like a regular
                      debit card and decide later—you have 24 hours after
                      eligible purchases of $50+ to split them into payment
                      plans if you change your mind about paying in full.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        FDIC Insurance Protection:
                      </span>{" "}
                      The Affirm Card is issued by Evolve Bank & Trust or Stride
                      Bank, N.A., both FDIC Members. While Affirm is not a bank,
                      your funds are protected by FDIC insurance up to
                      applicable limits through the issuing bank. This
                      protection covers the failure of Evolve or Stride,
                      providing peace of mind for your linked account balances.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Smart Financial Management
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Affirm Card helps you take control of your spending with
                  transparent terms and flexible options. Unlike traditional
                  credit cards that can lead to growing debt through compound
                  interest and minimum payments, Affirm's approach encourages
                  responsible financial management. You'll always know what you
                  owe, when payments are due, and exactly how much interest
                  you'll pay (if any) before you commit to a payment plan.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  This transparency is especially valuable for larger purchases
                  where spreading payments over time makes practical sense.
                  Whether you're buying furniture, electronics, or making other
                  significant purchases, the Affirm Card gives you the freedom
                  to choose payment terms that work for your budget. No surprise
                  fees, no hidden charges, and no compound interest—just
                  straightforward payment options that help you manage your
                  finances with confidence.
                </p>

                <div className="text-left my-8">
                  <Link
                    href="https://www.affirm.com/card"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#4a4af4] hover:bg-[#3838d9] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Apply for Affirm Card
                    </Button>
                  </Link>
                </div>

                {/* AI Content Disclaimer */}
                <AIContentDisclaimer />
              </div>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
