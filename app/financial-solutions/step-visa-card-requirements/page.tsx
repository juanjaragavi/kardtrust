import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Step Visa Card Requirements: Eligibility, Application & Setup Guide - KardTrust",
    description:
      "Complete eligibility requirements and application process for the Step Visa Card. Learn what you need to qualify, documentation required, and how to start building credit for free starting at age 13.",
    keywords:
      "Step Visa Card requirements, Step card eligibility, how to apply Step, teen credit card requirements, credit building requirements, no credit check card, Step sponsor requirements, Step application process",
  };
}

export default function StepVisaCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-category="credit-card-requirements"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Step Visa Card Requirements: Complete Eligibility & Application
              Guide
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Step Visa Card has minimal requirements designed to make
                credit building accessible to everyone—especially teens and
                young adults just starting their financial journey. Unlike
                traditional credit cards, Step requires no credit score, no
                credit history check, no income verification, and charges zero
                fees. This guide details everything you need to qualify and
                apply for the Step Visa Card.
              </p>

              <div
                id="kardtrust_ad_1"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <hr className="my-8" />

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/step-visa-card-requirements.webp"
                  alt="Step Visa Card Requirements"
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
                Essential Eligibility Requirements
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#f6629d] flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      Age Requirements: 13+ with Sponsor, 18+ Independent
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      Teens ages 13-17 can open a Step account with a sponsor
                      (parent or legal guardian age 18+). The sponsor maintains
                      oversight and control while the teen builds credit
                      history. Starting at age 18, you can create an independent
                      Step account without a sponsor and manage your finances
                      completely on your own. For younger children under 13,
                      Step offers parent-managed accounts that teach money
                      management but don't yet report to credit bureaus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#f6629d] flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      U.S. Residency and Valid Social Security Number
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      You must be a U.S. resident with a valid U.S. mailing
                      address and Social Security Number (SSN). Step is not
                      currently available to international residents or those
                      outside the United States. Your SSN is required for
                      identity verification, FDIC insurance compliance, and
                      credit bureau reporting. Step uses bank-level security to
                      protect your personal information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#f6629d] flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      Valid Mobile Phone Number
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      A valid U.S. mobile phone number is required to create
                      your Step account for security verification, two-factor
                      authentication, and account recovery. You'll receive SMS
                      verification codes during setup and important security
                      notifications. For sponsored teen accounts (ages 13-17),
                      the teen can initially use the sponsor's phone number and
                      add their own phone when they get one or turn 18.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#f6629d] flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      No Credit Score or History Required
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      Unlike traditional credit cards, Step does not check your
                      credit score or credit history during the application
                      process. You can have zero credit history, bad credit, or
                      excellent credit—all applicants meeting basic eligibility
                      requirements are approved. This makes Step ideal for
                      first- time credit builders, teens with no history, or
                      adults recovering from financial setbacks. There are no
                      hard inquiries on your credit report from applying.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#f6629d] flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      No Income Verification Needed
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      Step does not require proof of income, employment
                      verification, or financial statements. Since the Step Visa
                      Card is a secured card backed by funds in your account
                      (rather than a line of credit), your income is irrelevant
                      to approval. Students, part-time workers, unemployed
                      individuals, and teens with no income can all qualify. You
                      simply need sufficient funds in your Step account to cover
                      purchases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#f6629d] flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      Clean Standing with Step and Partner Banks
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      You cannot have a previously suspended or terminated Step
                      account due to fraud, violations of terms of service, or
                      other account issues. Banking services are provided by
                      Evolve Bank & Trust—you cannot have unresolved issues with
                      Evolve such as outstanding debts, chargebacks, or fraud
                      flags. Most applicants have no issues, but past banking
                      problems could affect approval.
                    </p>
                  </div>
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
                Complete Cost Breakdown
              </h2>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">
                  Fees and Costs (NONE!)
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Annual Fee</p>
                      <p className="text-sm text-gray-600">
                        No yearly membership cost
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">$0</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Monthly Fee</p>
                      <p className="text-sm text-gray-600">
                        No maintenance charges
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">$0</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        APR / Interest
                      </p>
                      <p className="text-sm text-gray-600">
                        Secured card = no interest
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">0%</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        Credit Reporting Fee
                      </p>
                      <p className="text-sm text-gray-600">
                        Build credit at no cost
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">$0</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        Application Fee
                      </p>
                      <p className="text-sm text-gray-600">
                        Free to apply and open
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">$0</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        Security Deposit
                      </p>
                      <p className="text-sm text-gray-600">
                        No upfront deposit required
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">$0</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        Foreign Transaction Fee
                      </p>
                      <p className="text-sm text-gray-600">
                        International purchases
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">$0</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        ATM Withdrawal Fee (In-Network)
                      </p>
                      <p className="text-sm text-gray-600">
                        37,000+ fee-free ATMs
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">$0</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        ATM Withdrawal Fee (Out-of-Network)
                      </p>
                      <p className="text-sm text-gray-600">
                        ATM operator may charge
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-600">Varies by ATM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-sm text-gray-700 text-left">
                  <span className="font-semibold">
                    Zero Cost Credit Building:
                  </span>{" "}
                  The Step Visa Card is completely free to use with no hidden
                  charges. As a secured card backed by your account balance,
                  there's no APR or interest because you're not borrowing money.
                  Simply maintain sufficient funds to cover purchases and you'll
                  build credit at absolutely zero cost.
                </p>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Link href="/personal-finance/credit-card-types-benefits/">
                  <Image
                    src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                    alt="Learn About Credit Cards"
                    width={1000}
                    height={563}
                    className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                    style={{ width: "auto", height: "auto" }}
                    loading="lazy"
                    quality={80}
                  />
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Understanding How a Secured Card Works
              </h2>

              <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                The Step Visa Card is a secured card, which is fundamentally
                different from traditional credit cards:
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 text-left">
                  How Step's Secured Card Model Works:
                </h3>

                <div className="space-y-4">
                  <div className="border-b border-yellow-200 pb-3">
                    <p className="text-sm text-gray-800 text-left">
                      <span className="font-semibold">No Line of Credit:</span>{" "}
                      Unlike traditional credit cards that extend a line of
                      credit (money you borrow and pay back), Step is secured by
                      funds already in your account. You're spending your own
                      money, not borrowing from the issuer.
                    </p>
                  </div>

                  <div className="border-b border-yellow-200 pb-3">
                    <p className="text-sm text-gray-800 text-left">
                      <span className="font-semibold">
                        Immediate Deductions:
                      </span>{" "}
                      When you make a purchase with your Step Visa Card, the
                      amount is immediately deducted from your Step account
                      balance—similar to a debit card. There are no monthly
                      bills to pay or minimum payments to make.
                    </p>
                  </div>

                  <div className="border-b border-yellow-200 pb-3">
                    <p className="text-sm text-gray-800 text-left">
                      <span className="font-semibold">
                        Zero Interest Charges:
                      </span>{" "}
                      Since you're not borrowing money, there's no APR or
                      interest to worry about. You'll never pay a penny in
                      interest charges regardless of how much you spend, making
                      Step dramatically cheaper than traditional credit cards
                      for those who carry balances.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-800 text-left">
                      <span className="font-semibold">
                        Reports Like Credit Card:
                      </span>{" "}
                      Despite functioning like a debit card, Step reports your
                      usage to all three major credit bureaus (TransUnion,
                      Experian, Equifax) as credit card activity. This builds
                      your credit history and score just like a traditional
                      credit card, but without the debt risk.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                <span className="font-semibold">Key Advantage:</span> This
                secured card structure eliminates the possibility of
                accumulating credit card debt while still providing full
                credit-building benefits. You can only spend money you actually
                have, teaching responsible money management while establishing
                credit history.
              </p>

              {/* Related Articles Section */}
              <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left sm:text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                  Learn More About Credit Building:
                </h3>
                <ul className="space-y-2 list-disc list-inside text-blue-700">
                  <li>
                    <Link
                      href="/personal-finance/improve-credit-score/"
                      className="hover:underline hover:text-blue-900 transition-colors"
                    >
                      How to Improve Your Credit Score Quickly
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/personal-finance/credit-card-approval-tips/"
                      className="hover:underline hover:text-blue-900 transition-colors"
                    >
                      Credit Card Approval Tips and Strategies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/personal-finance/understanding-credit-scores/"
                      className="hover:underline hover:text-blue-900 transition-colors"
                    >
                      Understanding Credit Scores and Reports
                    </Link>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Required Information for Application
              </h2>

              <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                The Step application is quick and simple, requiring only basic
                information:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Personal Identification:
                    </span>{" "}
                    Full legal name, date of birth, Social Security Number, home
                    address, and email address. Information must match
                    government-issued identification for verification purposes.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">Mobile Phone Number:</span>{" "}
                    Valid U.S. mobile phone number for SMS verification and
                    two-factor authentication. You'll receive a verification
                    code during signup to confirm your number.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">Username Creation:</span>{" "}
                    You'll create a unique Step username (handle) that
                    identifies you within the app for peer-to-peer transfers and
                    social features. Choose something memorable—it's like a
                    Venmo handle or social media username.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Sponsor Information (Ages 13-17):
                    </span>{" "}
                    If you're under 18, you'll need a sponsor (parent or legal
                    guardian). Provide their name, contact information, and have
                    them complete sponsor verification. They'll need their own
                    SSN and basic information.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#f6629d] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Identity Verification:
                    </span>{" "}
                    Step verifies your identity to comply with banking
                    regulations and prevent fraud. This process is typically
                    automatic and instant using your SSN and personal
                    information. Occasionally, additional documentation may be
                    requested.
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Step-by-Step Application Process
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-[#f6629d] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Step 1: Download the Step Mobile App
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Download the Step app from the Apple App Store (iOS) or
                    Google Play Store (Android). The app is free and compatible
                    with most modern smartphones and tablets. Step is
                    mobile-first—all account management, card controls, and
                    features are accessed through the app.
                  </p>
                </div>

                <div className="border-l-4 border-[#f6629d] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Step 2: Create Your Account
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Tap "Get Started" and provide your basic information: name,
                    date of birth, email, mobile number, home address, and
                    Social Security Number. Create a unique username (handle)
                    and secure password. Verify your phone number by entering
                    the SMS code sent to your phone. The entire process takes
                    3-5 minutes.
                  </p>
                </div>

                <div className="border-l-4 border-[#f6629d] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Step 3: Identity Verification
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Step automatically verifies your identity using your SSN and
                    personal information. This process is typically instant.
                    Occasionally, additional verification may be required where
                    you'll be prompted to upload a photo of your
                    government-issued ID (driver's license or state ID).
                    Verification usually completes within minutes to a few
                    hours.
                  </p>
                </div>

                <div className="border-l-4 border-[#f6629d] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Step 4: Set Up Sponsorship (Ages 13-17 Only)
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    If you're under 18, you'll invite your sponsor (parent or
                    guardian) through the app. They'll receive an invitation via
                    email or SMS and need to download Step, create their own
                    account, verify their identity, and accept the sponsorship.
                    Once connected, the sponsor has oversight over your account
                    while you begin building credit. Adults 18+ skip this step
                    entirely.
                  </p>
                </div>

                <div className="border-l-4 border-[#f6629d] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Step 5: Order Your Physical Step Visa Card
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Once your account is approved and verified, order your
                    physical Step Visa Card through the app—it's free with no
                    shipping charges. Your card typically arrives within 7-10
                    business days. While waiting, you can use the digital card
                    for online purchases and mobile wallet payments (Apple Pay,
                    Google Pay). When your physical card arrives, activate it in
                    the app and start building credit immediately.
                  </p>
                </div>

                <div className="border-l-4 border-[#f6629d] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Step 6: Add Funds and Start Using Your Card
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Add money to your Step account via bank transfer (ACH),
                    direct deposit, or from other Step users. Once funded, use
                    your Step Visa Card for purchases anywhere Visa is accepted.
                    Every purchase automatically reports to credit bureaus when
                    your account is in good standing—you're building credit just
                    by using your card normally.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <p className="text-sm text-gray-700 text-left">
                  <span className="font-semibold">Pro Tip:</span> To maximize
                  credit building, use your Step Visa Card regularly for small
                  purchases (like gas, groceries, or subscriptions) and ensure
                  sufficient funds in your account to cover transactions.
                  Consistent usage over time builds stronger credit history than
                  sporadic large purchases.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Can I get approved with no credit history or bad credit?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Yes! Step does not check your credit score or history during
                    approval. Whether you have zero credit, damaged credit from
                    past mistakes, or excellent credit, you can qualify for a
                    Step Visa Card. The card is specifically designed for people
                    building or rebuilding credit. As long as you meet basic
                    eligibility (age, U.S. residency, SSN), you'll be approved.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    How long does it take to get approved and receive my card?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Account creation and approval are typically instant—most
                    users are approved within minutes of submitting their
                    application. Identity verification usually completes
                    immediately but can occasionally take a few hours if
                    additional documentation is needed. Your physical Step Visa
                    Card ships for free and arrives within 7-10 business days.
                    You can use the digital card for online and mobile wallet
                    purchases immediately upon approval.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    What happens when a sponsored teen turns 18?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    When a sponsored teen account holder turns 18, they can
                    continue using their Step account independently—the sponsor
                    relationship automatically transitions. The teen gains full
                    control over their account while maintaining all the credit
                    history built since age 13. This means an 18-year-old can
                    have up to two years of established credit history—a massive
                    advantage over peers just starting. The sponsor can remain
                    connected if desired or separate entirely.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    How quickly will I see improvements in my credit score?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Step begins reporting to credit bureaus shortly after you
                    activate your card and start using it. Most users see their
                    first credit score within 30-60 days of initial card usage.
                    TransUnion research shows Step users in their 20s improve
                    their credit score by an average of 57 points within a
                    360-day period. Some users report 85-100+ point increases.
                    Consistent usage over 6-12 months typically yields the best
                    results.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    What controls do sponsors have over teen accounts?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Sponsors (parents/guardians) can view all transactions in
                    real-time, receive spending notifications, set spending
                    limits, approve or decline certain purchases, instantly lock
                    the card, and monitor account balances. Sponsors can also
                    add money to the teen's account and control withdrawal
                    permissions. This oversight teaches responsible money
                    management while parents maintain security and control. The
                    teen builds credit under parental guidance rather than
                    independently.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Are there spending limits on the Step Visa Card?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Your spending limit equals your Step account balance—you can
                    only spend money you've added to your account. There are
                    daily transaction limits for security purposes that vary
                    based on account age and verification status, but these
                    limits are generous for typical spending. ATM withdrawal
                    limits also apply. Sponsors can set additional spending
                    limits for sponsored teen accounts for budgeting and
                    teaching purposes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    What happens if I don't have enough money in my account?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    If you attempt a purchase with insufficient funds, the
                    transaction will be declined—there's no overdraft or
                    negative balance possible. This protects you from fees and
                    debt. Some transactions like gas station pre-authorizations
                    may temporarily hold more than the final purchase amount, so
                    keep a buffer in your account. Unlike traditional credit
                    cards, you can never spend more than you have or accumulate
                    debt.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-sm text-gray-700 text-left">
                  <span className="font-semibold">Important Notice:</span> The
                  Step Visa Card is issued by Evolve Bank & Trust, Member FDIC,
                  pursuant to a license from Visa U.S.A., Inc. Step is a
                  financial technology company, not a bank. Credit reporting
                  requires maintaining your account in good standing with
                  sufficient funds. Step reports positive payment history to
                  TransUnion, Experian, and Equifax—your overall credit scores
                  may be affected by financial activity outside of Step. Visit
                  Step.com for current terms and conditions.
                </p>
              </div>

              <div className="text-center my-8">
                <a
                  href="https://step.com/build-credit"
                  rel="noopener noreferrer sponsored"
                  className="inline-block"
                >
                  <Button className="bg-[#f6629d] hover:bg-[#e04f89] text-white font-medium text-md py-3 px-12 rounded-full">
                    Get Started with Step →
                  </Button>
                </a>
                <p className="text-xs text-gray-600 mt-3">
                  Opens in new window. Download app to begin.
                </p>
              </div>

              <div className="text-center my-8">
                <Link href="/financial-solutions/step-visa-card">
                  <Button
                    variant="secondary"
                    className="border-[#f6629d] text-gray-900 hover:bg-gray-50 font-medium text-md py-3 px-12 rounded-full"
                  >
                    ← Back to Benefits Overview
                  </Button>
                </Link>
              </div>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
