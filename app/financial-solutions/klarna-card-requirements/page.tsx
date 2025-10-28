import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Klarna Card Requirements: How to Apply & Eligibility - KardTrust",
    description:
      "Learn the requirements for the Klarna Card. Must be 18+, U.S. resident with valid SSN. No credit impact to apply, no annual fees. Get instant virtual card with flexible pay later plans and optional membership benefits.",
    keywords:
      "Klarna Card requirements, Klarna eligibility, how to apply Klarna Card, Klarna balance account, WebBank card, no credit check, pay later plans, Klarna membership",
  };
}

export default function KlarnaCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Klarna Card Requirements: Eligibility & How to Apply
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Klarna Card is available to eligible U.S. residents who meet
                straightforward requirements. Getting started takes just 60
                seconds—download the Klarna app, complete a quick application
                with no credit impact, choose your card color, and start using
                your virtual card immediately. A physical card is available with
                Member or Plus membership plans. Both debit mode and pay later
                options work wherever Visa is accepted, giving you flexible
                payment control from day one.
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
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Age and Residency Status
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      You must be at least 18 years old and a U.S. resident with
                      a valid U.S. mailing address to apply for the Klarna Card.
                      International applicants and temporary residents are not
                      currently eligible. Klarna may verify your identity during
                      the application process using government-issued
                      identification and other standard verification procedures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Valid Social Security Number
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      A valid Social Security Number (SSN) is required to apply
                      for the Klarna Card. This information is used for identity
                      verification and to assess eligibility for pay later
                      plans. Klarna maintains strict data security protocols to
                      protect your personal information, and your SSN is never
                      shared with unauthorized third parties or used for
                      purposes beyond account verification and credit
                      assessment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      No Credit Impact During Application
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      Applying for the Klarna Card does not affect your credit
                      score—this is a major advantage over traditional credit
                      cards that perform hard credit inquiries. You can check
                      your eligibility and activate your card without worrying
                      about negative impacts on your credit report. However,
                      when you request specific pay later plans for purchases,
                      those transactions may be subject to credit checks
                      depending on the plan type and amount.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Mobile Device and App Access
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      The Klarna Card requires the Klarna mobile app (available
                      on iOS and Android) for activation, management, and
                      switching between payment modes. You'll need a compatible
                      smartphone with internet connectivity to apply, activate
                      your card, switch between debit and pay later modes, track
                      transactions, and manage your Klarna balance. The app is
                      essential for all core card functionality, so ensure you
                      have a device that meets minimum requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Bank Account for Funding
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      To use your Klarna Card, you'll need to link a U.S. bank
                      account to fund your Klarna balance (for debit mode
                      purchases) and/or to serve as a backup payment source for
                      pay later plans. The linked bank account is used to add
                      money to your Klarna balance manually or through automatic
                      top-ups. You can also choose to fund pay later plans
                      directly from a connected bank account or credit/debit
                      card instead of your Klarna balance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E27EAC] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Agreement to Terms and Conditions
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      During the application process, you must review and accept
                      Klarna's Terms of Service, Privacy Policy, and the Klarna
                      Card Agreement issued by WebBank. These documents outline
                      your rights and responsibilities as a cardholder,
                      including how payment modes work, fees for pay later
                      plans, membership plan terms, and dispute resolution
                      procedures. You'll also consent to receive electronic
                      communications from Klarna regarding your account
                      activity, payment reminders, and promotional offers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/klarna-card">
                  <Button className="bg-[#E27EAC] hover:bg-[#d16a9a] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Card Benefits
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/klarna-card-requirements.webp"
                  alt="Klarna Card Requirements"
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
                Cost Breakdown & Membership Plans
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3 text-left">
                    Card Fees (Free!)
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
                      <span className="text-gray-700 text-sm">
                        Debit Mode Transaction Fees:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $0
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 text-left">
                    The Klarna Card has no annual or monthly fees. Using debit
                    mode is completely free. Pay later plans may have service
                    fees or interest charges that are displayed upfront before
                    you commit to a plan.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3 text-left">
                    Pay Later Plan Fees
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Pay in 4 Service Fee:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $0.75-$3
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Monthly Financing APR:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        0%-35.99%
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 text-left">
                    Pay in 4 plans have a service fee between $0.75-$3 per plan
                    (waived for Member and Plus members on select purchases).
                    Monthly financing rates from 0%-35.99% APR are based on your
                    creditworthiness and term length. All fees and rates are
                    shown upfront in the app before you commit.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-semibold text-gray-800 mb-3 text-left">
                    Membership Plan Options
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-1">
                        Standard (Free):
                      </p>
                      <p className="text-sm text-gray-700">
                        Virtual card only, 0.01% APY on balance, pay in 4 with
                        service fees
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-1">
                        Member ($3.49/month, first month free):
                      </p>
                      <p className="text-sm text-gray-700">
                        Physical + virtual card, 2.65% APY, 0.5% cashback, 2
                        fee-free Pay in 4/month
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-1">
                        Plus ($7.99/month, first month free):
                      </p>
                      <p className="text-sm text-gray-700">
                        Physical + virtual card, 3.02% APY, 1% cashback,
                        unlimited fee-free Pay in 4, $8 discount every 3 months,
                        up to $80/month in exclusive brand deals
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 text-left">
                    Membership plans are optional and can be canceled anytime in
                    the app. Upgrade to unlock higher interest rates, cashback
                    rewards, and exclusive partner deals.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-semibold text-gray-800 mb-3 text-left">
                    Example Pay in 4 Plan
                  </h3>
                  <p className="text-sm text-gray-800 mb-3 text-left">
                    <strong>Purchase Amount:</strong> $160
                  </p>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Down Payment:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $40
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Service Fee:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $2
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        3 Biweekly Payments:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $40 each
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-2">
                      <span className="text-gray-700 text-sm font-semibold">
                        Total Repayment:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $162 (21.97% APR)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-left">
                    Pay in 4 requires a 25% down payment and includes a service
                    fee. Member and Plus plans waive service fees on eligible
                    purchases. Monthly financing options available for larger
                    purchases with 0%-35.99% APR based on credit.
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
                How to Apply for the Klarna Card
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#E27EAC] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Download the Klarna App
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      Start by downloading the free Klarna app from the App
                      Store (iOS) or Google Play Store (Android). The app is
                      your command center for everything Klarna Card—from
                      activation and payment mode switching to transaction
                      tracking and balance management. Once installed, create a
                      Klarna account or sign in if you already have one from
                      previous Klarna purchases.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> 2-3 minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#E27EAC] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Navigate to the Wallet Tab
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      Open the Klarna app and tap the "Wallet" tab at the bottom
                      of the screen. Here you'll see the option to apply for
                      your Klarna Card. The application process is entirely
                      in-app—no need to visit a website or fill out paperwork.
                      The streamlined digital experience means you can complete
                      everything from your smartphone in about 60 seconds.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> Instant
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#E27EAC] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Complete the Quick Application
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      Provide basic information including your legal name, date
                      of birth, U.S. mailing address, Social Security Number,
                      and contact information. Klarna will verify your identity
                      and check eligibility—this process doesn't impact your
                      credit score. Most applicants receive instant approval,
                      though some applications may require additional
                      verification steps or documentation.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> 1-2 minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#E27EAC] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Choose Your Card Color
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      One of Klarna's unique features is the ability to
                      personalize your card color. Choose from multiple color
                      options to match your style—whether you prefer classic
                      black, vibrant pink, or something in between. Your virtual
                      card displays your chosen color in the app immediately,
                      and if you have a paid membership plan, your physical card
                      will arrive in your selected color.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> 30 seconds
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#E27EAC] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Activate Your Virtual Card
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      Once approved, your virtual Klarna Card is instantly
                      available in the app. Add it to Apple Pay, Google Pay, or
                      your preferred digital wallet to start shopping online or
                      using contactless payments in stores wherever Visa is
                      accepted. The virtual card works immediately in debit mode
                      once you fund your Klarna balance, or you can request pay
                      later plans for upcoming purchases.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> Instant
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#E27EAC] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Fund Your Klarna Balance & Start Shopping
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      Link your U.S. bank account to add money to your Klarna
                      balance, which serves as your card's funding source for
                      debit mode purchases. Transfer funds manually or set up
                      automatic top-ups to maintain a balance. You can also
                      configure pay later plans to pull payments from your
                      linked bank account or a connected card instead of your
                      Klarna balance. Start shopping immediately—the Klarna Card
                      works at millions of locations worldwide wherever Visa is
                      accepted.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Ongoing:</strong> Manage everything through the
                      Klarna app
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
                    Does applying for the Klarna Card impact my credit score?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    No, applying for the Klarna Card does not affect your credit
                    score. You can check your eligibility and activate your card
                    without any impact on your credit report. However, when you
                    request specific pay later plans for individual purchases,
                    those transactions may involve credit checks depending on
                    the plan type and purchase amount, which could potentially
                    impact your credit.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    What's the difference between debit mode and pay later mode?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    Debit mode works like a traditional debit card—purchases are
                    paid immediately from your Klarna balance with no fees or
                    interest. Pay later mode allows you to split purchases into
                    installment plans (Pay in 4 or monthly financing) with
                    transparent fees and rates shown upfront. You switch between
                    modes in the Klarna app before making a purchase, and the
                    card automatically returns to debit mode after each pay
                    later transaction.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    Do I need a physical card or can I use just the virtual
                    card?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    All Klarna Card holders receive a virtual card instantly
                    upon approval, which works for online purchases and
                    contactless in-store payments when added to your digital
                    wallet. Physical cards are included only with Member
                    ($3.49/month) and Plus ($7.99/month) membership plans—the
                    free Standard plan provides virtual card access only. Many
                    merchants accept virtual cards, but some require physical
                    cards.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    What are the fees for Pay in 4 plans?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    Pay in 4 plans have a service fee between $0.75-$3 per plan
                    for Standard members. For example, a $160 purchase with a
                    $40 down payment and $2 service fee results in 21.97% APR,
                    followed by three biweekly payments of $40 (total: $162).
                    Member plan subscribers get 2 fee-waived Pay in 4 purchases
                    per month, while Plus members enjoy unlimited fee-free Pay
                    in 4 transactions—potentially saving significant amounts for
                    frequent users.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    Can I use the Klarna Card internationally?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    Yes, the Klarna Card works internationally at millions of
                    locations worldwide wherever Visa is accepted. Both debit
                    mode and pay later mode function abroad, giving you the same
                    flexible payment options whether you're shopping locally or
                    internationally. Currency conversion rates and any
                    associated fees will be clearly displayed in the Klarna app
                    for international transactions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    How does FDIC insurance work with Klarna balance?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    Deposits in your Klarna balance account are held at WebBank,
                    Member FDIC. While Klarna is not an FDIC-insured bank, your
                    deposits are eligible for pass-through deposit insurance
                    coverage if certain conditions are satisfied, protecting
                    your funds up to applicable FDIC limits in the event of
                    WebBank failure. Note that funds made available to you
                    before WebBank receives them ("early availability funds")
                    may not be FDIC insured until received by WebBank, and loans
                    obtained using the Klarna Card are not FDIC insured.
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
                        <strong>Pay later plans have fees and interest.</strong>{" "}
                        While using the card in debit mode is free, Pay in 4
                        plans have service fees ($0.75-$3) and monthly financing
                        plans charge 0%-35.99% APR based on creditworthiness.
                        All fees are disclosed upfront before you commit to a
                        plan.
                      </p>
                      <p className="text-left">
                        <strong>Physical card requires paid membership.</strong>{" "}
                        The free Standard plan includes only a virtual card. To
                        receive a physical Klarna Card, you must upgrade to
                        Member ($3.49/month) or Plus ($7.99/month) membership
                        plans.
                      </p>
                      <p className="text-left">
                        <strong>Requires active balance management.</strong> To
                        use debit mode, you must maintain a funded Klarna
                        balance by transferring money from your linked bank
                        account. Insufficient balance means you can't complete
                        debit mode purchases until you add funds.
                      </p>
                      <p className="text-left">
                        <strong>
                          Pay later eligibility varies by purchase.
                        </strong>{" "}
                        Not all transactions will qualify for pay later
                        plans—eligibility depends on purchase amount, merchant,
                        and your creditworthiness. Some purchases may only be
                        available for debit mode payment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link
                  href="https://www.klarna.com/us/klarna-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#E27EAC] hover:bg-[#d16a9a] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Apply for Klarna Card
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
