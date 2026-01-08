import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Avant Credit Card Requirements: How to Apply & Eligibility - KardTrust",
    description:
      "Learn the requirements for the Avant Credit Card. Designed for credit building with no security deposit. 29.99%-35.99% APR, $39-$75 annual membership fee, $300-$3,000 credit limits. Issued by WebBank. Check eligibility without credit impact.",
    keywords:
      "Avant Credit Card requirements, Avant eligibility, how to apply Avant Card, WebBank credit card, credit building requirements, no security deposit card, fair credit card application",
  };
}

export default function AvantCreditCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Avant Credit Card Requirements: Eligibility & How to Apply
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            ></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Avant Credit Card is available to eligible consumers who are
                building or rebuilding their credit. The application process is
                straightforward—check if you qualify without impacting your
                credit score, complete the simple online application in minutes,
                and receive a fast decision. If approved, you'll receive your
                card and can start building positive credit history through the
                convenient Avant mobile app, with no security deposit required.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Basic Eligibility Requirements
              </h2>

              <div
                id="square04"
                data-topads
                data-topads-size="square"
                className="items-center justify-center flex w-full my-8"
              ></div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      U.S. Residency and Age
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      You must be at least 18 years old and a U.S. resident with
                      a valid U.S. mailing address to apply for the Avant Credit
                      Card. International applicants and temporary residents are
                      not currently eligible. Avant verifies identity during the
                      application process, so ensure your personal information
                      matches your government-issued identification. Residency
                      verification helps Avant comply with lending regulations
                      and ensures the card is available only to consumers within
                      its authorized service area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Credit Profile Considerations
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      The Avant Credit Card is specifically designed for
                      consumers with fair credit or those building/rebuilding
                      their credit history. While Avant doesn't publish a
                      minimum credit score requirement, the card is positioned
                      for consumers who may not qualify for traditional rewards
                      cards or premium credit products. Your credit profile will
                      be evaluated during the application process, but checking
                      if you qualify won't impact your credit score—only the
                      formal application after pre-qualification will involve a
                      hard credit inquiry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Income and Ability to Repay
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      You'll need to provide information about your income
                      during the application process. Avant evaluates your
                      ability to repay based on your stated income, existing
                      debts, and credit profile. Acceptable income sources
                      typically include employment wages, self-employment
                      income, retirement benefits, investment income, or other
                      regular income streams. The income verification helps
                      Avant determine an appropriate credit limit and ensure you
                      can manage the credit card payments responsibly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Valid Personal Information
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      During the application, you'll provide your legal name,
                      date of birth, Social Security Number, current address,
                      contact information (phone number and email), and income
                      details. This information must be accurate and
                      verifiable—Avant uses identity verification procedures to
                      prevent fraud and ensure applicants are who they claim to
                      be. Providing false information can result in application
                      denial and may have legal consequences, so ensure all
                      details are current and correct.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Bank Account for Payments
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      You'll need a valid U.S. bank account to make payments on
                      your Avant Credit Card. While you can make payments
                      through various methods including the mobile app, online
                      banking, phone payments, or mailed checks, having a linked
                      bank account simplifies automatic payments and helps
                      ensure you never miss a due date. Setting up automatic
                      minimum payments from your bank account can protect your
                      credit score by preventing late payment reports to credit
                      bureaus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Agreement to Terms and Conditions
                    </h3>
                    <p className="text-gray-800 text-md leading-5 text-left">
                      By applying for the Avant Credit Card, you agree to the
                      terms outlined in the AvantCard Cardmember Agreement
                      issued by WebBank. This agreement includes details about
                      APR, fees, payment terms, credit limit policies, and your
                      rights and responsibilities as a cardholder. You'll also
                      consent to receive electronic communications from Avant
                      regarding your account, payments, promotions, and other
                      card-related information. Review these terms carefully
                      before submitting your application.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/avant-credit-card">
                  <Button className="bg-[#0d5bff] hover:bg-[#0a4acc] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Card Benefits
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/avant-credit-card-requirements.webp"
                  alt="Avant Credit Card Requirements"
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
                Cost Breakdown & Card Terms
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3 text-left">
                    Standard Fees (Website Applications)
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">APR:</span>
                      <span className="font-semibold text-gray-800 text-sm">
                        35.99%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Annual Membership Fee:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $39-$75
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Minimum Credit Limit:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $300
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Security Deposit:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $0
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Overlimit Fees:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $0
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 text-left">
                    These terms apply to applications submitted directly through
                    the Avant website. If you received a pre-approved offer in
                    the mail, refer to your letter for specific terms offered to
                    you. Pricing may vary based on offers provided through
                    different channels.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3 text-left">
                    APR Range for All Applications
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Purchase APR Range:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        29.99%-35.99%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">APR Type:</span>
                      <span className="font-semibold text-gray-800 text-sm">
                        Variable
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 text-left">
                    Your actual APR depends on your creditworthiness and the
                    specific offer extended to you. The APR is variable and may
                    change based on market conditions. Website applications
                    currently receive 35.99% APR, while mailed offers may have
                    different rates.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-semibold text-gray-800 mb-3 text-left">
                    Credit Limit Options
                  </h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Credit Limit Range:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $300-$3,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Typical Starting Limit:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $300 (website applications)
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-left">
                    If you qualify, your actual credit line may vary based on
                    credit history, ability to repay, and other factors. Avant
                    may proactively offer credit line increases to qualifying
                    cardholders who demonstrate responsible credit management
                    over time.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-semibold text-gray-800 mb-3 text-left">
                    Representative Example
                  </h3>
                  <p className="text-sm text-gray-800 mb-3 text-left">
                    <strong>Scenario:</strong> $1,000 balance at 35.99% APR
                  </p>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Minimum Payment (3%):
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        $30/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Monthly Interest Charge:
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        ~$30 (first month)
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">
                        Time to Pay Off (minimum payments):
                      </span>
                      <span className="font-semibold text-gray-800 text-sm">
                        ~8+ years
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-left">
                    This example illustrates why paying more than the minimum
                    payment is crucial. At 35.99% APR, interest charges
                    accumulate quickly. Paying your balance in full each month
                    avoids interest charges entirely and maximizes the card's
                    credit-building benefits.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                How to Apply for the Avant Credit Card
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#0d5bff] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Check If You Qualify
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      Start by visiting avant.com/credit-card and clicking "See
                      If You Qualify." This pre-qualification process uses a
                      soft credit check that won't impact your credit score.
                      You'll provide basic information including your name, date
                      of birth, address, income, and Social Security Number.
                      Avant will evaluate your eligibility and, if you
                      pre-qualify, show you the credit card terms you're
                      eligible for before you formally apply.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> Instant results (1-2 minutes)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#0d5bff] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Complete the Full Application
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      If you pre-qualify and decide to proceed, complete the
                      full credit card application. This step involves providing
                      additional details about your income, employment, housing
                      situation, and financial obligations. You'll also review
                      and accept the terms of the AvantCard Cardmember
                      Agreement, including the APR, annual membership fee, and
                      credit limit you're being offered. The application takes
                      just a few minutes to complete online.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> 3-5 minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#0d5bff] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Receive Your Decision
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      Avant provides credit decisions as quickly as possible,
                      often within minutes of submitting your application.
                      You'll receive notification of your approval status, and
                      if approved, you'll see your credit limit and card terms.
                      Some applications may require additional verification or
                      documentation before a final decision can be made, in
                      which case Avant will contact you with specific
                      instructions on what's needed.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> Instant to few minutes (most
                      cases)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#0d5bff] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Wait for Your Card to Arrive
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      If approved and verified, your Avant Credit Card will be
                      issued and mailed to the address you provided during the
                      application. The card typically arrives within 7-10
                      business days, though delivery times may vary depending on
                      your location and postal service. Your card will arrive in
                      plain packaging for security purposes. Keep an eye on your
                      mailbox and contact Avant if your card doesn't arrive
                      within the expected timeframe.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> 7-10 business days
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#0d5bff] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Activate Your Card
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      When your card arrives, activate it following the
                      instructions included with your card. You can typically
                      activate online at dashboard.avant.com/activate-card,
                      through the Avant mobile app, or by calling the activation
                      phone number. Activation confirms you've received the card
                      and authorizes it for use. Once activated, your card is
                      ready to use immediately for purchases anywhere Mastercard
                      is accepted.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Timeframe:</strong> 2-3 minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#0d5bff] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Download the Mobile App and Start Building Credit
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 mb-2 text-left">
                      Download the Avant mobile app from the App Store or Google
                      Play to manage your credit card conveniently. The app lets
                      you check your balance, view transactions, make payments,
                      set up payment reminders, track your credit progress, and
                      contact customer support. Start using your card
                      responsibly—make purchases within your means, pay on time
                      (ideally in full), and watch as your positive payment
                      history potentially improves your credit score over time.
                    </p>
                    <p className="text-xs text-gray-600 text-left">
                      <strong>Ongoing:</strong> Manage your card and build
                      credit
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Link href="/personal-finance/credit-card-types-benefits/">
                  <Image
                    src="https://media.topfinanzas.com/images/kardtrust/kardtrust-credit-cards-banner-ad.webp"
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
                <ul className="space-y-2 list-disc list-inside text-red-800 text-left">
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
                    Does checking if I qualify impact my credit score?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    No, checking if you qualify for the Avant Credit Card uses a
                    soft credit check that does not affect your credit score.
                    Only when you proceed with the full application after
                    pre-qualifying will Avant perform a hard credit inquiry,
                    which may temporarily impact your credit score. This
                    pre-qualification process allows you to see if you're
                    eligible and view potential terms before formally applying.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    What credit score do I need for the Avant Credit Card?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    Avant doesn't publish a specific minimum credit score
                    requirement, but the card is designed for consumers with
                    fair credit or those building/rebuilding their credit.
                    Generally, fair credit ranges from approximately 580-669 on
                    the FICO scale. However, Avant evaluates multiple factors
                    beyond just credit score, including income, debt-to-income
                    ratio, and credit history. The best way to know if you
                    qualify is to check your eligibility on Avant's website.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    How is the Avant Credit Card different from a secured card?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    The Avant Credit Card is an unsecured card, meaning you
                    don't need to provide a security deposit to open the
                    account. Secured cards typically require you to deposit
                    $200-$500 or more, which serves as collateral and usually
                    equals your credit limit. With the Avant Credit Card, your
                    approved credit limit (ranging from $300-$3,000) is
                    available to use immediately without tying up your cash in a
                    deposit. However, the card does have an annual membership
                    fee, which secured cards may not have.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    Can I get a credit line increase with the Avant Credit Card?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    Yes, Avant proactively monitors accounts and may offer
                    credit line increases to qualifying cardholders who
                    demonstrate responsible credit management. If you qualify
                    for a higher credit limit, Avant will notify you—you don't
                    need to request increases manually. Factors that may help
                    you qualify for increases include consistent on-time
                    payments, maintaining low credit utilization, and overall
                    positive credit management over time.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    What happens if I pay late or miss a payment?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    Late or missed payments can have serious consequences. Avant
                    reports payment activity to the major credit bureaus, so
                    late payments may negatively impact your credit score. You
                    may also incur late fees and penalty APR increases. To avoid
                    these issues, set up payment reminders in the Avant mobile
                    app or consider enrolling in automatic payments to ensure
                    your minimum payment is always made on time. Timely payments
                    are crucial for building positive credit history.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2 text-left">
                    Who issues the Avant Credit Card?
                  </h3>
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    The Avant Credit Card is issued by WebBank, a Utah-chartered
                    industrial bank that partners with fintech companies like
                    Avant to offer credit products. Avant, LLC (Nationwide
                    Multistate Licensing System #1246731) is the servicer and
                    handles customer service, account management, and
                    collections. The card operates on the Mastercard network,
                    giving you acceptance at millions of locations worldwide.
                    WebBank is the actual creditor, while Avant manages the
                    customer experience.
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
                        <strong>High APR requires careful management.</strong>{" "}
                        At 29.99%-35.99% APR (35.99% for website applications),
                        interest charges accumulate quickly on unpaid balances.
                        Pay your balance in full each month whenever possible to
                        avoid interest charges and maximize the card's
                        credit-building benefits.
                      </p>
                      <p className="text-left">
                        <strong>Annual membership fee applies.</strong> Website
                        applications currently have a $39-$75 annual membership
                        fee. This fee is charged once per year and cannot be
                        waived. Factor this cost into your decision when
                        comparing credit card options.
                      </p>
                      <p className="text-left">
                        <strong>Starting credit limits may be low.</strong>{" "}
                        Website applications typically start with a $300 minimum
                        credit limit. While proactive increases are possible
                        with responsible use, initial limits may be lower than
                        you need for large purchases.
                      </p>
                      <p className="text-left">
                        <strong>
                          Designed for credit building, not rewards.
                        </strong>{" "}
                        This card focuses on helping you build or rebuild
                        credit, not on earning rewards points or cashback. If
                        you have good to excellent credit, you may qualify for
                        cards with better terms and rewards programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link
                  href="https://www.avant.com/credit-card"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#0d5bff] hover:bg-[#0a4acc] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Check If You Qualify
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
