import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Robinhood Gold Card Requirements: Eligibility, Costs & Application Guide - KardTrust",
    description:
      "Complete eligibility requirements, costs, fees, and application process for the Robinhood Gold Card. Learn what you need to qualify, documentation required, and how to apply for this premium 3% cash back credit card.",
    keywords:
      "Robinhood Gold Card requirements, credit card eligibility, Robinhood credit card application, Gold membership requirements, credit score requirements, credit card approval, Robinhood card costs, credit card fees",
  };
}

export default function RobinhoodGoldCardRequirementsPage() {
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
              Robinhood Gold Card Requirements: Complete Eligibility &
              Application Guide
            </h1>

            <div id="square03" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Robinhood Gold Card offers exceptional rewards with 3% cash
                back on all purchases, but it has specific eligibility
                requirements. Beyond standard credit qualifications, applicants
                must maintain an active Robinhood Gold membership and Robinhood
                Financial brokerage account. This guide details everything you
                need to know about qualifying for and applying for the Robinhood
                Gold Card.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/robinhood-gold-card-requirements.webp"
                  alt="Robinhood Gold Card Requirements"
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
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#EDECDB] flex items-center justify-center mr-4 mt-1">
                    <span className="text-gray-900 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      Active Robinhood Gold Membership Required
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      You must be an active Robinhood Gold subscriber at the
                      time of application and maintain your subscription to keep
                      your card. The Gold membership costs $5/month or $50/year
                      (saving $10 annually). This membership includes 3% APY on
                      uninvested cash, professional research from Morningstar,
                      Level II market data (Nasdaq TotalView), margin investing,
                      and larger instant deposits. If you're not already a Gold
                      member, you'll need to subscribe before applying for the
                      card. Canceling your Gold membership may result in
                      suspension of your credit card account.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#EDECDB] flex items-center justify-center mr-4 mt-1">
                    <span className="text-gray-900 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      Robinhood Financial Brokerage Account
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      You must have an active Robinhood Financial brokerage
                      account in good standing. This account is necessary to
                      redeem cash back rewards, which are deposited directly
                      into your brokerage as cash. The brokerage account must be
                      fully opened and verified before you can apply for the
                      credit card. Both your Gold membership and brokerage
                      account must remain active to continue using the card and
                      accessing rewards. If you don't already have a Robinhood
                      brokerage account, opening one is free and typically takes
                      5-10 minutes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#EDECDB] flex items-center justify-center mr-4 mt-1">
                    <span className="text-gray-900 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      Age and Legal Requirements
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      Applicants must be at least 18 years old and a legal U.S.
                      resident with a valid Social Security Number (SSN) or
                      Individual Taxpayer Identification Number (ITIN). You must
                      have a valid U.S. mailing address (P.O. boxes may not be
                      accepted). Non-U.S. citizens can apply if they are legal
                      permanent residents with valid documentation. The card is
                      not available to residents of U.S. territories or
                      international addresses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#EDECDB] flex items-center justify-center mr-4 mt-1">
                    <span className="text-gray-900 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      Good to Excellent Credit Recommended
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      While Robinhood doesn't publicly specify minimum credit
                      score requirements, the Gold Card typically requires good
                      to excellent credit for approval. Generally, applicants
                      with FICO scores of 670 or higher have the best approval
                      odds, though some with lower scores may be approved based
                      on other factors. Your credit history, income, existing
                      debt levels, and recent credit inquiries all influence the
                      approval decision. Robinhood performs a "soft" credit
                      check during pre-qualification that won't impact your
                      score, but accepting an offer triggers a "hard" inquiry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#EDECDB] flex items-center justify-center mr-4 mt-1">
                    <span className="text-gray-900 font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      Sufficient Income Verification
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      You must provide verifiable income information during
                      application. The credit card issuer (Coastal Community
                      Bank) evaluates your income against your existing debt
                      obligations to ensure you can reasonably manage credit
                      card payments. Acceptable income sources include
                      employment wages, self-employment income, investment
                      income, rental property income, retirement distributions,
                      Social Security benefits, and alimony or child support. If
                      you're 21 or older, you can include household income you
                      have reasonable access to. Documentation may be requested
                      to verify income claims.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-6 rounded-full bg-[#EDECDB] flex items-center justify-center mr-4 mt-1">
                    <span className="text-gray-900 font-bold text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-left">
                      Clean Credit and Banking History
                    </h3>
                    <p className="text-gray-800 text-sm leading-5 font-light text-left">
                      Applicants should not have recent bankruptcies,
                      foreclosures, or charge-offs on their credit report. A
                      history of missed payments, high credit utilization, or
                      defaulted accounts significantly reduces approval chances.
                      Additionally, issues in ChexSystems (a consumer reporting
                      agency for banking) such as unpaid overdrafts, bounced
                      checks, or closed accounts due to fraud may impact your
                      ability to open the required Robinhood brokerage account.
                      Maintaining good standing across both credit and banking
                      systems is important for approval.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Complete Cost Breakdown
              </h2>

              <div id="square04" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">
                  Interest Rates and Fees
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        Purchase APR (Variable)
                      </p>
                      <p className="text-sm text-gray-600">
                        Applies to all purchases
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">29.99% - 32.99%</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        Balance Transfer APR (Variable)
                      </p>
                      <p className="text-sm text-gray-600">
                        Same as Purchase APR
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">29.99% - 32.99%</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        Cash Advance APR (Variable)
                      </p>
                      <p className="text-sm text-gray-600">
                        Interest charges immediately
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">29.99% - 32.99%</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Annual Fee</p>
                      <p className="text-sm text-gray-600">
                        No card annual fee
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">$0</p>
                      <p className="text-xs text-gray-600">
                        Gold: $5/mo or $50/yr
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        Late Payment Fee
                      </p>
                      <p className="text-sm text-gray-600">
                        After missed payment
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-600">Up to $40</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        Returned Payment Fee
                      </p>
                      <p className="text-sm text-gray-600">
                        If payment doesn't clear
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-600">Up to $40</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-b border-gray-300 pb-3">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        Cash Advance Fee
                      </p>
                      <p className="text-sm text-gray-600">Per transaction</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-600">
                        $10 or 5% of amount
                      </p>
                      <p className="text-xs text-gray-600">
                        (whichever is greater)
                      </p>
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

                  <div className="flex justify-between items-start">
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">
                        Balance Transfer Fee
                      </p>
                      <p className="text-sm text-gray-600">
                        Not explicitly disclosed
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-600">
                        Check current terms
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-sm text-gray-700 text-left">
                  <span className="font-semibold">APR Calculation:</span> Your
                  actual APR is determined by adding a margin of 29.99% to
                  32.99% to the U.S. Prime Rate. The Prime Rate varies based on
                  market conditions. As of the latest update, the Prime Rate is
                  approximately 8.50%, but this fluctuates. Your specific APR
                  within the 29.99%-32.99% range is determined during the
                  application process based on your creditworthiness.
                </p>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Link href="/personal-finance/credit-card-types-benefits/">
                  <Image
                    src="https://media.topfinanzas.com/images/kardtrust/kardtrust-credit-cards-banner-ad.webp"
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
                Understanding the True Cost
              </h2>

              <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                The Robinhood Gold Card's APR range of 29.99% to 32.99% is
                higher than many credit cards on the market. This rate is
                important to understand if you ever carry a balance. Here are
                representative examples of interest costs:
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 text-left">
                  Representative APR Examples (Using 31% APR):
                </h3>

                <div className="space-y-4">
                  <div className="border-b border-yellow-200 pb-3">
                    <p className="text-sm text-gray-800 text-left">
                      <span className="font-semibold">$500 Balance:</span> If
                      you carry a $500 balance for 12 months making only minimum
                      payments, you would pay approximately{" "}
                      <strong>$155</strong> in interest charges, bringing your
                      total cost to $655.
                    </p>
                  </div>

                  <div className="border-b border-yellow-200 pb-3">
                    <p className="text-sm text-gray-800 text-left">
                      <span className="font-semibold">$1,000 Balance:</span> A
                      $1,000 balance over 12 months with minimum payments
                      results in approximately <strong>$310</strong> in
                      interest, for a total of $1,310.
                    </p>
                  </div>

                  <div className="border-b border-yellow-200 pb-3">
                    <p className="text-sm text-gray-800 text-left">
                      <span className="font-semibold">$2,500 Balance:</span>{" "}
                      Carrying $2,500 for a year costs approximately{" "}
                      <strong>$775</strong> in interest charges, totaling
                      $3,275.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-800 text-left">
                      <span className="font-semibold">$5,000 Balance:</span> A
                      $5,000 balance maintained for 12 months with minimum
                      payments accumulates approximately <strong>$1,550</strong>{" "}
                      in interest, bringing the total to $6,550.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mt-4 text-left">
                  <strong>Important Note:</strong> These examples assume minimum
                  monthly payments and no additional purchases. Actual costs may
                  vary based on your payment amounts, timing, and whether you
                  make additional purchases. To avoid all interest charges, pay
                  your full statement balance by the due date each month.
                </p>
              </div>

              <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                <span className="font-semibold">Best Practice:</span> The
                Robinhood Gold Card is best used as a "pay in full every month"
                rewards card. With 3% cash back on all purchases, the card
                provides excellent value when paid off monthly. However,
                carrying a balance quickly negates rewards due to the high APR.
                If you anticipate needing to carry balances, consider cards with
                lower APRs or promotional 0% APR offers for balance transfers.
              </p>

              {/* Related Articles Section */}
              <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left sm:text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                  Learn More About Credit Requirements:
                </h3>
                <ul className="space-y-2 list-disc list-inside text-red-800">
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
                      Increase Your Credit Card Approval Odds
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/personal-finance/understanding-apr/"
                      className="hover:underline hover:text-blue-900 transition-colors"
                    >
                      Understanding APR and Interest Rates
                    </Link>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Required Documentation for Application
              </h2>

              <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                While the initial application is primarily informational, be
                prepared to provide or verify the following:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gray-900 font-bold">✓</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Personal Identification:
                    </span>{" "}
                    Full legal name, date of birth, Social Security Number or
                    ITIN, current residential address, and contact information
                    (phone and email). Your information must match
                    government-issued ID.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gray-900 font-bold">✓</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">Income Information:</span>{" "}
                    Annual gross income from all sources, employer name (if
                    applicable), employment status, and monthly housing payment
                    amount (rent or mortgage). Be honest and
                    accurate—overstating income can result in denial or account
                    closure.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gray-900 font-bold">✓</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Robinhood Account Details:
                    </span>{" "}
                    Verified Robinhood Financial brokerage account with
                    completed identity verification and an active Robinhood Gold
                    subscription. Your brokerage account must be in good
                    standing with no restrictions.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EDECDB] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-gray-900 font-bold">✓</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Additional Verification (If Requested):
                    </span>{" "}
                    In some cases, Robinhood Credit may request additional
                    documentation such as recent pay stubs, tax returns, bank
                    statements, or proof of identity. Having these documents
                    readily available can speed up approval if requested.
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Step-by-Step Application Process
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-[#EDECDB] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Step 1: Meet Prerequisites
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Before applying, ensure you have an active Robinhood
                    Financial brokerage account and Robinhood Gold subscription.
                    If you don't have these, open a brokerage account first
                    (free), then subscribe to Robinhood Gold ($5/month or
                    $50/year). Allow 1-2 business days for full account
                    verification to complete.
                  </p>
                </div>

                <div className="border-l-4 border-[#EDECDB] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Step 2: Check Pre-Qualification
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Within the Robinhood app, navigate to the credit card
                    section. Complete the pre-qualification process, which
                    performs a soft credit inquiry that won't affect your credit
                    score. You'll receive an instant decision about whether
                    you're pre-qualified and what credit limit range you might
                    receive. Pre-qualification doesn't guarantee approval but
                    indicates strong likelihood.
                  </p>
                </div>

                <div className="border-l-4 border-[#EDECDB] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Step 3: Submit Full Application
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    If pre-qualified, proceed with the full application. Provide
                    complete personal information, income details, housing
                    costs, and review terms and conditions carefully. This step
                    triggers a hard credit inquiry that will appear on your
                    credit report and may temporarily lower your score by a few
                    points. The application typically takes 5-10 minutes to
                    complete.
                  </p>
                </div>

                <div className="border-l-4 border-[#EDECDB] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Step 4: Await Credit Decision
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Most applicants receive an instant decision. Some
                    applications require additional review and may take 7-10
                    business days for a final decision. If approved, you'll see
                    your credit limit and APR. If additional information is
                    needed, Robinhood will contact you via email or in-app
                    notification with specific documentation requests.
                  </p>
                </div>

                <div className="border-l-4 border-[#EDECDB] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Step 5: Receive and Activate Your Card
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Upon approval, your physical stainless steel card ships
                    within 1-2 business days and typically arrives within 7-10
                    business days. While waiting, you can activate a digital
                    card number immediately for online purchases or add it to
                    Apple Pay/Google Pay. Once your physical card arrives,
                    activate it through the Robinhood app to begin earning 3%
                    cash back on all purchases.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <p className="text-sm text-gray-700 text-left">
                  <span className="font-semibold">Pro Tip:</span> Before
                  applying, check your credit report for errors at
                  AnnualCreditReport.com (free once per year from each bureau).
                  Dispute any inaccuracies that could hurt your approval
                  chances. Also, avoid applying for multiple credit cards within
                  a short period, as numerous hard inquiries can negatively
                  impact your credit score and approval odds.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    What credit score do I need for the Robinhood Gold Card?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    While Robinhood doesn't publish minimum credit score
                    requirements, the Gold Card generally requires good to
                    excellent credit for approval. Most successful applicants
                    have FICO scores of 670 or higher. Applicants with scores in
                    the 740+ range typically have the highest approval rates and
                    receive better credit limits. Your overall credit profile—
                    including payment history, credit utilization, length of
                    credit history, and recent inquiries—also influences the
                    decision beyond just your score.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Can I apply if I don't have a Robinhood brokerage account
                    yet?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    No, you must have an active Robinhood Financial brokerage
                    account before applying for the Gold Card. However, opening
                    a brokerage account is free and typically takes only 5-10
                    minutes. You'll need to complete identity verification,
                    which usually processes instantly but can take up to 1-2
                    business days. Once your brokerage account is verified,
                    subscribe to Robinhood Gold ($5/month), then apply for the
                    credit card. You don't need to fund your brokerage account
                    to apply for the card, though cash back rewards are
                    deposited there.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    What happens if I cancel my Robinhood Gold subscription?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Maintaining an active Robinhood Gold membership is required
                    to keep your credit card. If you cancel your Gold
                    subscription, Robinhood may suspend or close your credit
                    card account. Before canceling Gold, contact Robinhood
                    support to understand the specific implications for your
                    card. You would need to pay off any outstanding balance and
                    potentially lose access to rewards redemption. Consider
                    whether the combined benefits of Gold membership (3% APY on
                    cash, research tools, etc.) plus the card's rewards justify
                    the $5/month cost.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    How long does the application and approval process take?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Most applicants receive an instant decision during the
                    application process. If approved instantly, you can start
                    using a virtual card number immediately for online
                    purchases. Your physical stainless steel card ships within
                    1-2 business days and arrives in 7-10 business days. Some
                    applications require additional review due to credit
                    complexity, income verification, or identity confirmation.
                    In these cases, expect a final decision within 7-10 business
                    days. Robinhood will notify you via email or in-app if they
                    need additional documentation.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    What credit limit can I expect if approved?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Credit limits vary widely based on individual
                    creditworthiness, income, existing debt, and other factors
                    evaluated during underwriting. Initial credit limits
                    typically range from $500 to $10,000+ for most approved
                    applicants. High credit score applicants with strong income
                    and low debt may receive limits of $15,000 or higher. Your
                    pre-qualification offer will show an estimated credit limit
                    range. After account opening, you can request credit limit
                    increases through the Robinhood app, typically after 6
                    months of responsible use.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Will applying hurt my credit score?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    The pre-qualification step uses a soft credit inquiry that
                    does not impact your credit score. However, if you accept
                    the offer and submit a full application, Robinhood Credit
                    performs a hard inquiry that will appear on your credit
                    report and may temporarily lower your score by approximately
                    5-10 points. This impact is typically minor and
                    temporary—scores usually recover within a few months with
                    continued responsible credit use. Hard inquiries remain on
                    your credit report for 2 years but generally only affect
                    scores for about 12 months.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-left">
                    Can I add authorized users to my Robinhood Gold Card?
                  </h3>
                  <p className="text-sm text-gray-800 leading-5 font-light text-left">
                    Yes, one of the unique features of the Robinhood Gold Card
                    is the ability to add authorized users of any age, including
                    children and teenagers. This allows families to help young
                    members build credit history early. As the primary
                    cardholder, you maintain complete control with the ability
                    to set individual spending limits for each authorized user,
                    monitor all transactions in real-time, and instantly lock or
                    remove cards. All authorized user spending consolidates
                    under your account and earns the same 3% cash back. Plastic
                    cards for authorized users are free; metal card upgrades are
                    available for a fee.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-sm text-gray-700 text-left">
                  <span className="font-semibold">Important Notice:</span> The
                  Robinhood Gold Card is issued by Coastal Community Bank,
                  Member FDIC, pursuant to a license from Visa U.S.A. Inc.
                  Robinhood Credit, Inc. offers this product but is not a bank.
                  Credit card approval and terms are determined by Coastal
                  Community Bank based on creditworthiness. Maintaining your
                  Robinhood Gold membership and brokerage account in good
                  standing is required to keep your credit card active. This
                  information is current as of publication but terms and
                  requirements are subject to change. Visit Robinhood.com for
                  the most current terms and conditions.
                </p>
              </div>

              <div className="text-center my-8">
                <a
                  href="https://robinhood.com/creditcard"
                  rel="noopener noreferrer sponsored"
                  className="inline-block"
                >
                  <Button className="bg-[#EDECDB] hover:bg-[#d8d7c2] text-gray-900 font-medium text-md py-3 px-12 rounded-full">
                    Apply for Robinhood Gold Card →
                  </Button>
                </a>
                <p className="text-xs text-gray-600 mt-3">
                  Opens in new window. Review full terms before applying.
                </p>
              </div>

              <div className="text-center my-8">
                <Link href="/financial-solutions/robinhood-gold-card">
                  <Button
                    variant="secondary"
                    className="border-[#EDECDB] text-gray-900 hover:bg-gray-50 font-medium text-md py-3 px-12 rounded-full"
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
