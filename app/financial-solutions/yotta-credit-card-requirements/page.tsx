import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Yotta Credit Card Requirements & Eligibility | Application Guide",
    description:
      "Learn Yotta Credit Card eligibility requirements, application process, and state availability. Find out if you qualify for Lucky Swipe rewards and sweepstakes credit in 42 US states.",
    keywords: [
      "Yotta Credit Card requirements",
      "Yotta eligibility",
      "Yotta application",
      "credit card approval",
      "Yotta state availability",
      "Lucky Swipe requirements",
      "Synapse Credit approval",
    ].join(", "),
  };
}

export default function YottaCreditCardRequirementsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                ELIGIBILITY & REQUIREMENTS
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Yotta Credit Card Requirements & Application Process
              </h1>

              <div id="square03" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>
              <p className="text-lg text-purple-100">
                Everything you need to know about qualifying for Yotta's
                gamified credit card with Lucky Swipe rewards. Available in 42
                US states for residents 18 and older.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Basic Eligibility */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Basic Eligibility Requirements
                </h2>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border-2 border-purple-200 mb-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The Yotta Credit Card has straightforward eligibility
                    criteria designed to make gamified credit accessible to most
                    US consumers. Unlike traditional credit cards, Yotta
                    emphasizes financial engagement through sweepstakes rather
                    than complex rewards tiers.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-3 text-xl">
                        ✓
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Age Requirement:
                        </strong>
                        <p className="text-gray-700">
                          Must be at least 18 years old at the time of
                          application
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-3 text-xl">
                        ✓
                      </span>
                      <div>
                        <strong className="text-gray-900">Residency:</strong>
                        <p className="text-gray-700">
                          Legal US resident in one of 42 eligible states (see
                          state list below)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-3 text-xl">
                        ✓
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Valid Identification:
                        </strong>
                        <p className="text-gray-700">
                          Government-issued ID (driver's license, state ID, or
                          passport)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-3 text-xl">
                        ✓
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Social Security Number:
                        </strong>
                        <p className="text-gray-700">
                          Required for credit check and identity verification
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-3 text-xl">
                        ✓
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          US Mailing Address:
                        </strong>
                        <p className="text-gray-700">
                          Physical address (no PO boxes) for card delivery
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* State Availability */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  State Availability
                </h2>

                <div id="square04" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

                <div className="bg-white p-6 rounded-xl border-2 border-gray-200 mb-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Yotta Credit Card and lending services are currently
                    available in{" "}
                    <strong>42 US states plus Washington, DC</strong>. The
                    following states are eligible:
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700">
                    <ul className="space-y-1">
                      <li>✓ Alaska</li>
                      <li>✓ Arizona</li>
                      <li>✓ Arkansas</li>
                      <li>✓ California</li>
                      <li>✓ Colorado</li>
                      <li>✓ Connecticut</li>
                      <li>✓ Delaware</li>
                      <li>✓ District of Columbia</li>
                      <li>✓ Florida</li>
                      <li>✓ Georgia</li>
                      <li>✓ Hawaii</li>
                      <li>✓ Idaho</li>
                      <li>✓ Illinois</li>
                      <li>✓ Iowa</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>✓ Kansas</li>
                      <li>✓ Louisiana</li>
                      <li>✓ Maine</li>
                      <li>✓ Maryland</li>
                      <li>✓ Massachusetts</li>
                      <li>✓ Michigan</li>
                      <li>✓ Minnesota</li>
                      <li>✓ Missouri</li>
                      <li>✓ Montana</li>
                      <li>✓ Nebraska</li>
                      <li>✓ New Hampshire</li>
                      <li>✓ New Jersey</li>
                      <li>✓ New Mexico</li>
                      <li>✓ New York</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>✓ North Carolina</li>
                      <li>✓ North Dakota</li>
                      <li>✓ Ohio</li>
                      <li>✓ Oklahoma</li>
                      <li>✓ Oregon</li>
                      <li>✓ Pennsylvania</li>
                      <li>✓ Rhode Island</li>
                      <li>✓ South Carolina</li>
                      <li>✓ South Dakota</li>
                      <li>✓ Tennessee</li>
                      <li>✓ Texas</li>
                      <li>✓ Utah</li>
                      <li>✓ Virginia</li>
                      <li>✓ West Virginia</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Not Available In:</strong> Alabama, Indiana,
                      Kentucky, Mississippi, Nevada, Vermont, Washington,
                      Wisconsin, Wyoming
                    </p>
                  </div>
                </div>
              </section>

              {/* Credit Requirements */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Credit Profile & Financial Criteria
                </h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      📊 Credit Score Expectations
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      While Yotta doesn't publish specific minimum credit score
                      requirements, the card is designed for consumers with{" "}
                      <strong>
                        fair to good credit (typically 580-720 FICO)
                      </strong>
                      . Yotta's credit model through Synapse Credit LLC
                      considers:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">→</span>
                        <span>
                          <strong>Payment History:</strong> Most important
                          factor—consistently paying bills on time
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">→</span>
                        <span>
                          <strong>Credit Utilization:</strong> How much of your
                          available credit you're using
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">→</span>
                        <span>
                          <strong>Credit History Length:</strong> How long your
                          accounts have been open
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">→</span>
                        <span>
                          <strong>Recent Credit Inquiries:</strong> Number of
                          recent credit applications
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      💰 Income Verification
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Applicants must provide proof of income or ability to make
                      payments. Acceptable income sources include:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                      <li>✓ Employment income (W-2)</li>
                      <li>✓ Self-employment income</li>
                      <li>✓ Retirement benefits</li>
                      <li>✓ Social Security income</li>
                      <li>✓ Investment income</li>
                      <li>✓ Alimony/child support</li>
                      <li>✓ Government benefits</li>
                      <li>✓ Rental property income</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3 italic">
                      Note: There is no published minimum income requirement,
                      but you must demonstrate ability to repay credit.
                    </p>
                  </div>
                </div>
              </section>

              {/* Application Process */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  How to Apply: Step-by-Step Process
                </h2>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl border-2 border-purple-200 shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Create a Yotta Account
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Visit{" "}
                          <a
                            href="https://banking.withyotta.com/"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:underline"
                          >
                            banking.withyotta.com
                          </a>{" "}
                          and create a free Yotta account. You'll download the
                          Yotta mobile app (iOS or Android) and complete account
                          registration with your email, phone number, and basic
                          personal information.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-indigo-200 shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Apply for Credit Card
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Within the Yotta app, navigate to the credit card
                          application section. You'll provide:
                        </p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>→ Full legal name and date of birth</li>
                          <li>→ Social Security Number</li>
                          <li>
                            → Current residential address (minimum 6 months)
                          </li>
                          <li>→ Annual income and employment status</li>
                          <li>→ Housing payment (rent/mortgage amount)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-green-200 shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Credit Check & Approval Decision
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Yotta (through Synapse Credit LLC) will perform a{" "}
                          <strong>hard credit inquiry</strong> that may
                          temporarily impact your credit score by 5-10 points.
                          You'll receive an instant approval decision in most
                          cases. If approved, you'll see your credit limit, APR,
                          and Lucky Swipe odds.
                        </p>
                        <p className="text-sm text-gray-600 mt-2 italic">
                          Typical approval time: Instant to 1-2 business days
                          for additional verification
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-orange-200 shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Receive & Activate Card
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Your Yotta Credit Card will arrive by mail within 7-10
                          business days. Once received, activate it through the
                          Yotta app by following the prompts. Set up direct
                          deposit to unlock the best Lucky Swipe odds (1 in 75
                          instead of standard rates).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-purple-300 shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        5
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Start Spending & Winning
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Make your first purchase to enter the Lucky Swipe
                          sweepstakes automatically. Every transaction gives you
                          a chance to win up to 100% cash back (maximum $5,000).
                          Winners are notified instantly through the app, with
                          reimbursements credited within 30 days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Costs & Terms */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Costs, Fees & Terms
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                      <tr>
                        <th className="px-6 py-3 text-left font-bold">
                          Fee Type
                        </th>
                        <th className="px-6 py-3 text-left font-bold">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left font-bold">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-purple-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Annual Fee
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          Varies by applicant
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          Disclosed upon approval, typically competitive for
                          fintech credit cards
                        </td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          APR (Purchase)
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          Variable rate
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          Based on Prime Rate + margin, determined by
                          creditworthiness
                        </td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Balance Transfer APR
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          Same as purchase APR
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          No special promotional rates
                        </td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Cash Advance APR
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          Variable rate + fee
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          Higher than purchase APR, avoid cash advances when
                          possible
                        </td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Late Payment Fee
                        </td>
                        <td className="px-6 py-4 text-gray-700">Up to $40</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          Charged if minimum payment not received by due date
                        </td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Foreign Transaction
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          Typically 0-3%
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          Check card terms for international usage fees
                        </td>
                      </tr>
                      <tr className="hover:bg-purple-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Returned Payment
                        </td>
                        <td className="px-6 py-4 text-gray-700">Up to $40</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          If payment method fails (insufficient funds, closed
                          account)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> Final APR, fees, and credit
                    limit are determined during the application process based on
                    your credit profile. Yotta will provide a detailed Terms &
                    Conditions document before you accept the card.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Do I need perfect credit to qualify?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      No. Yotta Credit Card is designed for consumers with{" "}
                      <strong>fair to good credit (580-720 FICO)</strong>. You
                      don't need excellent credit, though higher scores may
                      qualify for better terms and lower APRs.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Will applying hurt my credit score?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Yotta performs a <strong>hard credit inquiry</strong> when
                      you submit an application, which may temporarily lower
                      your credit score by 5-10 points. This impact is typical
                      for any credit card application and diminishes over time
                      as you use credit responsibly.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      What if I don't have direct deposit?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      You can still use the Yotta Credit Card and participate in
                      Lucky Swipe sweepstakes, but your winning odds will be
                      lower than the 1 in 75 rate offered to direct deposit
                      users. Setting up direct deposit (even for a portion of
                      your paycheck) unlocks the best odds.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Can I use Yotta Credit Card for all purchases?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Yes. The Yotta Credit Card works anywhere that accepts
                      Mastercard. Every qualifying purchase automatically enters
                      you into the Lucky Swipe sweepstakes—groceries, gas,
                      dining, online shopping, bills, subscriptions, and more.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      How long does approval take?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Most applicants receive an{" "}
                      <strong>instant approval decision</strong> within the app.
                      Some applications may require additional verification (1-2
                      business days). Once approved, expect your physical card
                      within 7-10 business days by mail.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Is there a minimum income requirement?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Yotta doesn't publish a specific minimum income
                      requirement. However, you must demonstrate{" "}
                      <strong>ability to repay credit</strong> through income
                      verification. This can include employment income,
                      self-employment, retirement benefits, or other regular
                      income sources.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-8 md:p-12 rounded-2xl text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Apply?
                  </h2>
                  <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
                    If you meet the eligibility requirements and live in an
                    available state, you can apply for the Yotta Credit Card in
                    minutes through the mobile app.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://banking.withyotta.com/"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-full transition-colors duration-200"
                      style={{ backgroundColor: "#4e0cdc" }}
                    >
                      Apply for Yotta Credit Card
                    </a>
                    <Button
                      href="/financial-solutions/yotta-credit-card"
                      variant="secondary"
                      className="bg-white text-purple-700 hover:bg-gray-100"
                    >
                      ← Back to Benefits Overview
                    </Button>
                  </div>
                  <p className="mt-6 text-sm text-purple-200">
                    Banking services through Evolve Bank & Trust, Member FDIC.
                    Lending via Synapse Credit LLC.
                  </p>
                </div>
              </section>

              {/* AI Disclaimer */}
              <section className="mb-8">
                <AIContentDisclaimer />
              </section>
            </div>
          </div>
        </article>
      </main>
      <CompactFooter />
    </>
  );
}
