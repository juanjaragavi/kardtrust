import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Affirm Card Requirements: How to Apply & Eligibility - KardTrust",
    description:
      "Learn the requirements for the Affirm Card. Must be 18+, have a U.S. address, and link a bank account. No credit impact to check eligibility. Get transparent payment plans from 0%-36% APR with no hidden fees.",
    keywords:
      "Affirm Card requirements, Affirm eligibility, how to apply Affirm Card, bank account linking, Evolve Bank, Stride Bank, 0% APR, payment plan eligibility, no credit check apply",
  };
}

export default function AffirmCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Affirm Card Requirements: Eligibility & How to Apply
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Affirm Card is available to eligible U.S. residents who meet
                basic requirements. Getting started is straightforward—check
                your eligibility without impacting your credit score, then apply
                online through the Affirm app or website. Once approved, you'll
                link a bank account, receive your virtual card instantly, and
                get a free physical card by mail. Payment plan eligibility for
                specific purchases is determined based on your credit profile
                and the purchase amount.
              </p>

              <div
                id="kardtrust_ad_1"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <hr className="my-8" />

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Basic Eligibility Requirements
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Age and Residency
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      You must be at least 18 years old with a valid Social
                      Security Number and a U.S. mailing address. Affirm
                      currently only offers the Affirm Card to U.S.
                      residents—international applicants are not eligible at
                      this time. A valid government-issued ID may be required
                      during the application process to verify your identity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Bank Account Requirement
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      To use the Affirm Card, you must link a U.S. bank account
                      (checking or savings) or an Affirm Money Account. This
                      linked account is where funds will be pulled from for
                      pay-in-full purchases and payment plan installments.
                      You'll connect your bank account during the application
                      process using secure authentication through the Affirm
                      app.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Credit and Eligibility Review
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      While checking your purchasing power uses a soft credit
                      check that doesn't impact your credit score, applying for
                      the Affirm Card and requesting payment plans may involve
                      additional eligibility checks. Payment plan options
                      (including APR rates from 0%-36%) are determined based on
                      your credit profile, purchase amount, and merchant. Not
                      all purchases will qualify for payment plans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Mobile Device and Internet Access
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      The Affirm Card requires the Affirm mobile app (available
                      on iOS and Android) or website access to manage your card,
                      check purchasing power, request payment plans, and view
                      transactions. You'll need a compatible smartphone or
                      computer with internet connectivity to apply, activate
                      your card, and manage your account ongoing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Understanding the Debit Card Nature
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      The Affirm Card is a Visa debit card, not a traditional
                      credit card. This means you're not accessing a revolving
                      line of credit—instead, you're using linked bank funds
                      with optional payment plans for eligible purchases.
                      Understanding this distinction helps you use the card
                      responsibly. Affirm reports some payment plan activity to
                      credit bureaus, which can impact your credit score.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#4a4af4] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Agreement to Terms and Conditions
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      During application, you'll need to review and accept
                      Affirm's Terms of Service, Privacy Policy, and the Card
                      Agreement. You must also agree to receive electronic
                      communications from Affirm and the issuing bank (Evolve
                      Bank & Trust or Stride Bank, N.A.). These documents
                      outline important details about fees (none for the card
                      itself), payment plan terms, and your rights and
                      responsibilities as a cardholder.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/affirm-card">
                  <Button className="bg-[#4a4af4] hover:bg-[#3838d9] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Card Benefits
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/affirm-card-requirements.webp"
                  alt="Affirm Card Requirements"
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

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Cost Breakdown & Payment Plan Details
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3 text-left">
                    Card Fees (None!)
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">Annual Fee:</span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $0
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Monthly Fee:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $0
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">Late Fees:</span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $0
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Hidden Fees:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $0
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Compound Interest:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        None
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 text-left">
                    The Affirm Card has zero fees for the card itself. You'll
                    never pay annual fees, monthly maintenance fees, late fees,
                    or encounter hidden charges.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3 text-left">
                    Payment Plan APR Range
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Pay in 4 Plans:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        0% APR
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Monthly Payment Plans:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        0%-36% APR
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Interest Type:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        Simple Interest (No Compounding)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 text-left">
                    Payment plan APR is determined based on your credit profile,
                    purchase amount, and merchant. You'll see exact terms before
                    accepting any payment plan. Pay in 4 plans offer 0% APR—four
                    payments every two weeks. Longer payment plans may have APR
                    from 0%-36% with simple interest (never compounding).
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-semibold text-gray-800 mb-3 text-left">
                    Example Payment Plan
                  </h3>
                  <p className="text-sm text-gray-800 mb-3 text-left">
                    <strong>Purchase Amount:</strong> $800
                  </p>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Option 1 - Pay in 4:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        4 payments of $200 (0% APR)
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Option 2 - Monthly Plan:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        12 payments of $77.99 (30% APR)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-left">
                    This is an illustrative example. Actual payment plan
                    options, APR rates, payment amounts, and terms vary based on
                    your credit, purchase amount, and merchant. You'll see all
                    available options in the Affirm app before committing to a
                    plan. Some plans may require a down payment.
                  </p>
                </div>
              </div>

              <div
                id="kardtrust_ad_2"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <hr className="my-8" />

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                How to Apply for the Affirm Card
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#4a4af4] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Check Your Purchasing Power
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      Start by downloading the Affirm mobile app (iOS or
                      Android) or visiting affirm.com/card on your computer. Use
                      the "Check Purchasing Power" feature to see how much you
                      can spend without impacting your credit score. This soft
                      credit check gives you insight into your eligibility
                      before formally applying.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> Instant results
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#4a4af4] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Complete the Application
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      Fill out the online application with your personal
                      information including your name, date of birth, Social
                      Security Number, U.S. mailing address, and mobile phone
                      number. You'll also provide details about your income and
                      employment. The application takes just a few minutes to
                      complete and is entirely digital—no paperwork required.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> 5-10 minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#4a4af4] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Link Your Bank Account
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      During or immediately after approval, you'll link a U.S.
                      bank account using secure authentication. You can connect
                      an external checking or savings account from your existing
                      bank, or create an Affirm Money Account. This linked
                      account is essential—it's where payments will pull from
                      for purchases and payment plan installments.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> 2-5 minutes (instant
                      verification)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#4a4af4] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Receive Instant Approval Decision
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      Affirm will review your application and provide an instant
                      approval decision in most cases. If approved, you'll
                      immediately gain access to your virtual Affirm Card in the
                      app, which you can start using right away for online
                      purchases. Your physical card will be mailed to your
                      address and typically arrives within 7-10 business days.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> Instant to few minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#4a4af4] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Activate Your Physical Card
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      When your physical Affirm Card arrives in the mail,
                      activate it through the Affirm mobile app following the
                      on-screen instructions. Once activated, you can use the
                      physical card at any retailer that accepts Visa, both
                      in-store and online. Your virtual card remains active as
                      well, giving you both options for maximum flexibility.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> Physical card arrives in 7-10
                      business days
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#4a4af4] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Start Using Your Affirm Card
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      With your Affirm Card active, you're ready to shop with
                      payment flexibility. Use your card anywhere Visa is
                      accepted—pay in full immediately from your linked bank
                      account, or request a payment plan (0%-36% APR) for
                      eligible purchases. For purchases $50+, you can even split
                      them into installments within 24 hours after checkout if
                      you didn't plan ahead.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Ongoing:</strong> Manage everything through the
                      Affirm app
                    </p>
                  </div>
                </div>
              </div>

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
                  Related Financial Guidance:
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

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    Does applying for the Affirm Card impact my credit score?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    Checking your purchasing power uses a soft credit check that
                    does not impact your credit score. However, when you
                    formally apply for the Affirm Card and when you request
                    payment plans for specific purchases, Affirm may perform
                    additional credit checks that could affect your score.
                    Affirm also reports payment plan activity to credit bureaus,
                    so on-time payments can help build credit while missed
                    payments may hurt your score.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    What's the difference between the Affirm Card and a
                    traditional credit card?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    The Affirm Card is a Visa debit card, not a credit card.
                    Instead of accessing a revolving line of credit with
                    compound interest, you link a bank account and decide how to
                    pay for each purchase—in full immediately or through a fixed
                    payment plan (0%-36% APR with simple interest). There are no
                    card fees, no late fees, and no compound interest.
                    Traditional credit cards charge interest on revolving
                    balances and often have annual fees, late fees, and other
                    charges.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    Can I use the Affirm Card anywhere Visa is accepted?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    Yes! The Affirm Card works at millions of locations
                    throughout the United States wherever Visa is accepted, both
                    in-store and online. You'll receive a physical card for
                    in-person purchases and can use your virtual card for online
                    shopping. However, payment plan availability varies by
                    merchant and purchase—not all purchases will qualify for
                    installment plans, though you can always pay in full
                    immediately.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    How do I know if I qualify for 0% APR payment plans?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    Payment plan eligibility, including 0% APR options like Pay
                    in 4, is determined for each purchase based on your credit
                    profile, the purchase amount, and the merchant. Many
                    purchases qualify for interest-free payment plans, but some
                    may have APR from 0%-36%. You'll see all available payment
                    plan options in the Affirm app before you commit to any
                    purchase or plan, ensuring full transparency before you
                    decide.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    What happens if I miss a payment on a payment plan?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    While the Affirm Card itself has no late fees, missing
                    payments on payment plans can have consequences. Affirm may
                    attempt to collect the payment from your linked bank account
                    and may report late or missed payments to credit bureaus,
                    which can negatively impact your credit score. It's
                    important to ensure your linked bank account has sufficient
                    funds for scheduled payment plan installments. If you're
                    having trouble making payments, contact Affirm customer
                    support as soon as possible.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    Which bank issues the Affirm Card?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    The Affirm Card is issued by either Evolve Bank & Trust or
                    Stride Bank, N.A., both of which are FDIC Members. Affirm
                    itself is not a bank—it partners with these federally
                    insured banks to issue the card and provide banking
                    services. Your funds are protected by FDIC insurance up to
                    applicable limits through the issuing bank, providing
                    security in the event of bank failure.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-semibold text-yellow-800 mb-2 text-left">
                      Important Considerations
                    </h3>
                    <div className="text-sm text-yellow-700 space-y-2 text-left">
                      <p className="text-left">
                        <strong>
                          The Affirm Card is a debit card, not a credit card.
                        </strong>{" "}
                        You're not building a revolving credit line—instead,
                        you're using linked bank funds with optional payment
                        plans for specific purchases. Payment plans are subject
                        to approval and eligibility checks for each purchase.
                      </p>
                      <p className="text-left">
                        <strong>APR varies significantly (0%-36%).</strong>{" "}
                        While many purchases qualify for 0% APR plans like Pay
                        in 4, other plans may charge interest rates up to 36%
                        APR based on your credit and the purchase. Always review
                        payment plan terms carefully before accepting.
                      </p>
                      <p className="text-left">
                        <strong>
                          Requires active bank account management.
                        </strong>{" "}
                        You must maintain a linked bank account with sufficient
                        funds for scheduled payments. Insufficient funds could
                        result in payment failures, potential fees from your
                        bank, and negative credit reporting.
                      </p>
                      <p className="text-left">
                        <strong>
                          Not all purchases qualify for payment plans.
                        </strong>{" "}
                        While you can use the Affirm Card anywhere Visa is
                        accepted, payment plan availability depends on the
                        merchant, purchase amount, and your eligibility. Some
                        purchases may only be eligible for immediate payment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

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
      </article>

      <CompactFooter />
    </main>
  );
}
