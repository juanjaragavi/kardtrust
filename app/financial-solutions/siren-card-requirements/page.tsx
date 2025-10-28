import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "SIREN Card Requirements & Eligibility | Application Guide for Starbucks Partners",
    description:
      "Learn SIREN Card eligibility requirements for Starbucks partners. USA residents 18+, no FICO score required to apply, mobile device needed. Get details on the application process, cred.ai Guaranty terms, and how to start building credit automatically.",
    keywords: [
      "SIREN Card requirements",
      "SIREN eligibility",
      "Starbucks partner card",
      "SIREN application",
      "cred.ai guaranty",
      "no fee credit card requirements",
      "WSFS Bank card",
      "automatic credit builder",
    ].join(", "),
  };
}

export default function SirenCardRequirementsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          className="relative text-white py-12 md:py-16"
          style={{
            background: "linear-gradient(135deg, #007042 0%, #005832 100%)",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                ELIGIBILITY & REQUIREMENTS
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                SIREN Card Requirements & Application Process
              </h1>
              <p className="text-lg text-green-100">
                Everything you need to know about qualifying for SIREN Card.
                Exclusively for Starbucks partners—simple eligibility, no FICO
                score required to apply, and guaranteed zero fees with the
                cred.ai Guaranty.
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
                <div
                  className="p-6 rounded-xl border-2 mb-6"
                  style={{
                    background:
                      "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                    borderColor: "#007042",
                  }}
                >
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    SIREN Card has straightforward eligibility criteria designed
                    specifically for Starbucks partners. Here's what you need to
                    qualify:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span
                        className="font-bold mr-3 text-xl"
                        style={{ color: "#007042" }}
                      >
                        ✓
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Starbucks Partner Status:
                        </strong>
                        <p className="text-gray-700">
                          Must be a current Starbucks employee (partner). SIREN
                          is exclusively available to Starbucks partners and is
                          not open to the general public.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="font-bold mr-3 text-xl"
                        style={{ color: "#007042" }}
                      >
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
                      <span
                        className="font-bold mr-3 text-xl"
                        style={{ color: "#007042" }}
                      >
                        ✓
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          USA Residency:
                        </strong>
                        <p className="text-gray-700">
                          Must be a legal resident of the United States with a
                          valid US address
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="font-bold mr-3 text-xl"
                        style={{ color: "#007042" }}
                      >
                        ✓
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Mobile Device:
                        </strong>
                        <p className="text-gray-700">
                          Requires a smartphone with iOS 13 (or higher) or
                          Android 9 (or higher) to use the SIREN mobile app
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="font-bold mr-3 text-xl"
                        style={{ color: "#007042" }}
                      >
                        ✓
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          No FICO Score Required:
                        </strong>
                        <p className="text-gray-700">
                          Unlike traditional credit cards, SIREN does not
                          require a FICO credit score to apply—making it
                          accessible regardless of credit history
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        Important Note About Credit Checks
                      </h4>
                      <p className="text-gray-700">
                        Applying for SIREN Card <strong>does not</strong> impact
                        your FICO credit score. While WSFS Bank will review your
                        application, the initial application process uses a soft
                        inquiry that won't show up on your credit report or
                        affect your score.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Application Process */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  How to Apply: Step-by-Step Process
                </h2>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl border-2 border-green-200 shadow-sm">
                    <div className="flex items-start">
                      <div
                        className="flex-shrink-0 w-10 h-10 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4"
                        style={{ backgroundColor: "#007042" }}
                      >
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Verify Your Starbucks Partner Status
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          SIREN is exclusively available to Starbucks employees.
                          You'll need to verify your partner status during the
                          application process using your Starbucks partner
                          credentials or employee ID.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-blue-200 shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Download the SIREN Mobile App
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Visit{" "}
                          <a
                            href="https://sirencard.com/go"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            sirencard.com/go
                          </a>{" "}
                          or search for "SIREN Card" in the App Store (iOS) or
                          Google Play Store (Android). Download and install the
                          app on your mobile device.
                        </p>
                        <p className="text-sm text-gray-600 italic">
                          Requirements: iOS 13+ or Android 9+ operating system
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-purple-200 shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Complete the Application
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Open the SIREN app and begin the application process.
                          You'll provide:
                        </p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>→ Full legal name and date of birth</li>
                          <li>
                            → Social Security Number (for identity verification)
                          </li>
                          <li>→ Current residential address</li>
                          <li>→ Email address and phone number</li>
                          <li>→ Starbucks partner verification information</li>
                        </ul>
                        <p className="text-sm text-gray-600 mt-3 italic">
                          The application takes approximately 5-10 minutes to
                          complete
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
                          Review Terms & Accept cred.ai Guaranty
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Review the SIREN Card Agreement, Deposit Account
                          Agreement, and the cred.ai Services Amendment. The
                          cred.ai Guaranty is what ensures you'll never pay fees
                          or interest. Once you understand and accept the terms,
                          you can proceed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-green-200 shadow-sm">
                    <div className="flex items-start">
                      <div
                        className="flex-shrink-0 w-10 h-10 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4"
                        style={{ backgroundColor: "#007042" }}
                      >
                        5
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Receive Approval & Activate Card
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Most applicants receive instant approval. Your premium
                          metal SIREN Card will be mailed to your address within
                          7-10 business days. Once received, activate it through
                          the app and start building credit automatically.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* The cred.ai Guaranty Explained */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Understanding the cred.ai Guaranty
                </h2>
                <div className="bg-gradient-to-br from-green-900 to-green-700 text-white p-8 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold mb-4">
                    100% Guaranteed: Never Pay Fees or Interest
                  </h3>
                  <p className="text-green-100 mb-4 leading-relaxed">
                    The cred.ai Guaranty is the cornerstone of SIREN Card's
                    value proposition. Here's exactly how it works:
                  </p>
                  <div className="space-y-3 text-green-50">
                    <div className="flex items-start">
                      <span className="text-green-300 font-bold mr-3">1.</span>
                      <p>
                        <strong>Automatic Payment Management:</strong> The
                        cred.ai service manages your SIREN Card payments
                        automatically in the background according to the SIREN
                        Card cardholder agreement rules.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-300 font-bold mr-3">2.</span>
                      <p>
                        <strong>Payment Before Interest Accrues:</strong> The
                        system pays your balance strategically to ensure you
                        never accumulate interest charges (despite the 17.76%
                        APR on the card).
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-300 font-bold mr-3">3.</span>
                      <p>
                        <strong>Safety Net if Automation Fails:</strong> If the
                        automated payment management fails for any reason and
                        you are charged interest or fees, cred.ai will cover
                        that fee or interest charge on your behalf.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-300 font-bold mr-3">4.</span>
                      <p>
                        <strong>Guaranteed Protection:</strong> Therefore, with
                        the cred.ai Guaranty, you will never pay fees or
                        interest on your SIREN Deposit Account or SIREN Card—
                        guaranteed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-yellow-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        Important Disclaimer
                      </h4>
                      <p className="text-gray-700">
                        While the cred.ai Guaranty provides exceptional
                        protection, cred.ai cannot account for all variables in
                        your financial life or changes to reporting practices.
                        Increases or specific changes to your credit score are
                        not guaranteed—though most users see improvement with
                        consistent use.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Card Details */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Card Terms & Technical Details
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead
                      className="text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, #007042 0%, #005832 100%)",
                      }}
                    >
                      <tr>
                        <th className="px-6 py-3 text-left font-bold">
                          Feature
                        </th>
                        <th className="px-6 py-3 text-left font-bold">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Card Issuer
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          Wilmington Savings Fund Society, FSB (WSFS Bank),
                          Member FDIC
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Card Network
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          Visa® credit card (accepted everywhere Visa is
                          accepted)
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          APR on Purchases
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          17.76% (but you never pay it due to cred.ai Guaranty)
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          APR on Cash Advances
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          24.99% (but covered by cred.ai Guaranty for ATM
                          withdrawals)
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Annual Fee
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          $0 (guaranteed forever)
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Monthly Fees
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          $0 (guaranteed forever)
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Late Payment Fees
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          $0 (cred.ai Guaranty prevents all fees)
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Overdraft Fees
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          $0 (no overdraft fees on deposit account)
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Foreign Transaction Fees
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          Check cardholder agreement for specific terms
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          ATM Fees
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          $0 at 55,000+ in-network ATMs (use app ATM finder)
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          Early Paycheck Access
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          Up to 2 days early (with direct deposit setup)
                        </td>
                      </tr>
                      <tr className="hover:bg-green-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          FDIC Insurance
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          Yes, deposit account insured by FDIC through WSFS Bank
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                      Do I need good credit to qualify?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      No. SIREN does not require a FICO credit score to apply,
                      and applying won't impact your credit score. The card is
                      designed to help you build credit regardless of your
                      current credit situation.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Can non-Starbucks employees get SIREN Card?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      No. SIREN Card is exclusively available to Starbucks
                      partners (employees) as part of Starbucks' financial
                      wellbeing benefits program. You must verify your
                      employment status during the application process.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      How does the cred.ai Guaranty actually work?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      cred.ai's automated system manages your SIREN Card
                      payments in the background, paying balances strategically
                      to avoid interest and fees. If the automation ever fails
                      and you're charged, cred.ai covers those charges on your
                      behalf. This creates a true zero-cost guarantee.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Will SIREN really help build my credit?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Yes. SIREN is a real Visa credit card that reports to
                      credit bureaus. The automatic credit optimizer ensures
                      your credit utilization and payment history are managed
                      optimally. However, credit score improvements depend on
                      your overall financial situation and aren't guaranteed.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      What happens if I leave Starbucks?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Check the SIREN Card Terms and Conditions for specific
                      details about account status changes. Typically, you
                      should contact SIREN support at 1-855-774-2155 or
                      help@sirencard.com to discuss your options if your
                      employment status changes.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Can I use SIREN for all my purchases?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Yes. SIREN works anywhere Visa credit cards are accepted
                      worldwide. Use it for groceries, gas, bills, online
                      shopping, and more. The automatic credit optimizer handles
                      all purchases regardless of amount or merchant.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mb-12">
                <div
                  className="text-white p-8 md:p-12 rounded-2xl text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #007042 0%, #005832 100%)",
                  }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Apply?
                  </h2>
                  <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
                    If you're a Starbucks partner 18 or older living in the USA,
                    you can apply for SIREN Card today and start building credit
                    automatically—with zero fees guaranteed.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://sirencard.com/go"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full transition-all duration-200 bg-white hover:bg-gray-100"
                      style={{ color: "#007042" }}
                    >
                      Apply for SIREN Card
                    </a>
                    <Button
                      href="/financial-solutions/siren-card"
                      variant="secondary"
                      className="bg-green-700 text-white hover:bg-green-800 border-2 border-white"
                    >
                      ← Back to Benefits Overview
                    </Button>
                  </div>
                  <p className="mt-6 text-sm text-green-200">
                    Issued by WSFS Bank, Member FDIC. Powered by cred.ai
                    financial technology.
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
