import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "SIREN Card: Premium Metal Card with Automatic Credit Building | KardTrust",
    description:
      "Discover SIREN Card - the hybrid debit/credit card that builds credit automatically with 0% interest guaranteed. Get paid 2 days early, premium metal card, 55K+ free ATMs, advanced security features, and never pay fees. Exclusive for Starbucks partners.",
    keywords: [
      "SIREN Card",
      "Starbucks credit card",
      "metal card",
      "credit building card",
      "no interest credit card",
      "no fee card",
      "early paycheck",
      "automatic credit optimizer",
      "WSFS Bank",
      "cred.ai",
    ].join(", "),
  };
}

export default function SirenCardPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  PREMIUM METAL CARD • ZERO FEES GUARANTEED
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  SIREN Card: A Debit Card with Superpowers
                </h1>
                <p className="text-lg md:text-xl text-green-100 mb-6">
                  Built exclusively for Starbucks partners, SIREN combines the
                  simplicity of a debit card with automatic credit building
                  technology. Get paid up to 2 days early, spend with a premium
                  metal card, and never pay interest or fees—100% guaranteed by
                  cred.ai.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://sirencard.com/go"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-full transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#007042" }}
                  >
                    Apply Now
                  </a>
                  <Button
                    href="/financial-solutions/siren-card-requirements"
                    variant="secondary"
                  >
                    View Requirements
                  </Button>
                </div>
                <p className="text-sm text-green-200 mt-4">
                  *Applying does not impact your FICO score. USA residents 18+
                  only.
                </p>
              </div>
              <div className="relative h-64 md:h-96">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/siren-card.webp"
                  alt="SIREN premium metal card with credit building technology"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why SIREN Card is Different
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SIREN isn't just another card—it's a complete financial wellness
                tool designed specifically for Starbucks partners. Here's what
                makes it revolutionary:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#007042" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Automatic Credit Building
                </h3>
                <p className="text-gray-600 mb-4">
                  SIREN's automatic credit optimizer works in the background to
                  build your credit score without you having to think about it.
                  Use it like a debit card while the technology handles credit
                  optimization automatically.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Real Visa credit card reports to bureaus
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    17.76% APR but you never pay it
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Credit optimization framework by cred.ai
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Never Pay Fees or Interest
                </h3>
                <p className="text-gray-600 mb-4">
                  The cred.ai Guaranty ensures you'll never pay a single penny
                  in fees or interest—guaranteed. If the automated system fails
                  and you're charged, cred.ai covers it on your behalf.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    $0 monthly fees, forever
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    $0 overdraft or late payment fees
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    0% interest charged, guaranteed
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Get Paid Up to 2 Days Early
                </h3>
                <p className="text-gray-600 mb-4">
                  Set up direct deposit and access your paycheck up to 2 days
                  before your scheduled payday—with absolutely no fees. Make
                  payday extra hot with early access to your funds.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Access funds when deposit file received
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    No advance fees or charges
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Simple direct deposit setup
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Advanced Security Features
                </h3>
                <p className="text-gray-600 mb-4">
                  Protect yourself with exclusive security tech like Check
                  Please, Repeat Defender, and Friend and Foe. Use
                  self-destructing digital cards for phone orders and online
                  shopping.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Self-destructing digital cards
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Advanced fraud protection
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    FDIC insured by WSFS Bank
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How SIREN's Hybrid Card Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SIREN is unique: it replaces your debit card but functions as a
                credit card behind the scenes. Here's how the magic happens:
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
                  <div
                    className="w-12 h-12 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4"
                    style={{ backgroundColor: "#007042" }}
                  >
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Spend Like Debit
                  </h3>
                  <p className="text-gray-600">
                    Use your premium metal SIREN Card anywhere Visa is accepted.
                    It works exactly like a debit card—no thinking required, no
                    balance management stress.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Credit Works Behind Scenes
                  </h3>
                  <p className="text-gray-600">
                    SIREN is actually a Visa credit card issued by WSFS Bank.
                    This means your purchases report to credit bureaus, building
                    your credit history automatically.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Auto-Optimization Runs
                  </h3>
                  <p className="text-gray-600">
                    cred.ai's proprietary optimizer manages payments
                    automatically, ensuring optimal credit utilization and
                    preventing any interest or fee charges.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-200">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Credit Score Improves
                  </h3>
                  <p className="text-gray-600">
                    Over time, your credit score improves as positive payment
                    history builds. You're becoming a "credit rockstar" without
                    doing anything differently.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-xl border-2 border-green-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  💳 The Technical Details (You Don't Need to Worry About)
                </h4>
                <p className="text-gray-700 mb-3">
                  SIREN Card has a 17.76% APR on purchases and 24.99% APR on
                  cash advances—but you'll never pay these rates thanks to the
                  cred.ai Guaranty:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span
                      className="font-bold mr-2"
                      style={{ color: "#007042" }}
                    >
                      →
                    </span>
                    <span>
                      The automated payment system pays your balance in full
                      before interest accrues
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="font-bold mr-2"
                      style={{ color: "#007042" }}
                    >
                      →
                    </span>
                    <span>
                      If the automation fails, cred.ai covers any interest or
                      fees charged
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="font-bold mr-2"
                      style={{ color: "#007042" }}
                    >
                      →
                    </span>
                    <span>
                      ATM withdrawals at 55,000+ free ATMs are technically cash
                      advances, but still covered by the guaranty
                    </span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-3 text-sm italic">
                  This unique structure allows SIREN to build your credit while
                  protecting you from all credit card costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Premium Card, Premium Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SIREN isn't just functional—it's designed to feel premium and
                provide a best-in-class banking experience:
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Metal Card Design */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8 rounded-xl">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Premium Metal Card Design
                </h3>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  Your SIREN Card is made from durable metal—not plastic. It
                  feels premium, looks sophisticated, and makes a statement
                  every time you use it.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Heavy-weight metal construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Sleek, modern design aesthetic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Contactless payment chip included</span>
                  </li>
                </ul>
              </div>

              {/* 24/7 Support */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-xl">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">24/7 Live Support</h3>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  Need help at 3 AM? No problem. SIREN provides around-the-clock
                  live customer support via phone, email, and in-app chat.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">✓</span>
                    <span>Call: 1-855-774-2155 anytime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">✓</span>
                    <span>Email: help@sirencard.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">✓</span>
                    <span>In-app chat for instant answers</span>
                  </li>
                </ul>
              </div>

              {/* ATM Network */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-xl">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">55,000+ Free ATMs</h3>
                <p className="text-purple-100 mb-4 leading-relaxed">
                  Access cash at over 55,000 ATMs nationwide without paying ATM
                  fees. Use the in-app ATM finder to locate the nearest free
                  machine.
                </p>
                <ul className="space-y-2 text-purple-200">
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    <span>Nationwide ATM coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    <span>$0 ATM withdrawal fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    <span>In-app ATM locator tool</span>
                  </li>
                </ul>
              </div>

              {/* Additional Banking Features */}
              <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white p-8 rounded-xl">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Full Banking Suite</h3>
                <p className="text-green-100 mb-4 leading-relaxed">
                  SIREN includes everything you need for modern banking: mobile
                  check deposit, account linking, budgeting tools, and more.
                </p>
                <ul className="space-y-2 text-green-200">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Mobile check deposit via app</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>Connect other banks and fintechs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>FDIC insurance via WSFS Bank</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Is SIREN Card Right for You?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SIREN is specifically designed for Starbucks partners and offers
                unique benefits for this community:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Ideal For */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-300">
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "#007042" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Perfect For You If...
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">
                      ✓
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You're a Starbucks partner:
                      </strong>
                      <p className="text-gray-600">
                        SIREN is exclusively available to Starbucks employees
                        and builds on Starbucks' financial wellbeing resources
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">
                      ✓
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You want to build credit effortlessly:
                      </strong>
                      <p className="text-gray-600">
                        Perfect if you want credit building to happen
                        automatically without changing your spending habits
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">
                      ✓
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You're tired of banking fees:
                      </strong>
                      <p className="text-gray-600">
                        The cred.ai Guaranty means absolutely zero fees or
                        interest, ever—100% guaranteed
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">
                      ✓
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You value simplicity:
                      </strong>
                      <p className="text-gray-600">
                        Use it exactly like a debit card—no balance
                        calculations, no payment due dates to remember
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">
                      ✓
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You want premium features:
                      </strong>
                      <p className="text-gray-600">
                        Metal card, early paycheck access, 55K+ free ATMs, and
                        advanced security features
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What Makes It Unique */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    What Makes SIREN Unique
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">
                      →
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        Exclusive to Starbucks:
                      </strong>
                      <p className="text-gray-600">
                        Not available to the general public—only Starbucks
                        partners can access this benefit
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">
                      →
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        Hybrid debit/credit:
                      </strong>
                      <p className="text-gray-600">
                        Functions like debit but reports as credit—best of both
                        worlds in one card
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">
                      →
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        Powered by cred.ai:
                      </strong>
                      <p className="text-gray-600">
                        Proprietary financial technology that optimizes credit
                        automatically—nothing else like it
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">
                      →
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        Zero-risk design:
                      </strong>
                      <p className="text-gray-600">
                        Even if automation fails, the cred.ai Guaranty protects
                        you from all fees and interest
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">
                      →
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        Credit without the hassle:
                      </strong>
                      <p className="text-gray-600">
                        Build credit without thinking about payment dates,
                        interest rates, or utilization ratios
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-12 md:py-16 text-white"
          style={{
            background: "linear-gradient(135deg, #007042 0%, #005832 100%)",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Your SIREN Card?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join thousands of Starbucks partners who are building credit
              automatically with SIREN. Apply today and start enjoying premium
              metal card benefits with zero fees—guaranteed.
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
                href="/financial-solutions/siren-card-requirements"
                variant="secondary"
                className="bg-green-700 text-white hover:bg-green-800 border-2 border-white"
              >
                Check Eligibility Requirements
              </Button>
            </div>
            <p className="mt-6 text-sm text-green-200">
              Issued by WSFS Bank, Member FDIC. Powered by cred.ai financial
              technology.
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Related Financial Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/personal-finance/how-to-choose-the-right-credit-card"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How to Choose the Right Credit Card
                </h3>
                <p className="text-gray-600 mb-4">
                  Compare hybrid cards like SIREN vs traditional credit cards to
                  find your best match.
                </p>
                <span
                  className="font-semibold hover:underline"
                  style={{ color: "#007042" }}
                >
                  Read Guide →
                </span>
              </Link>

              <Link
                href="/personal-finance/building-credit-from-scratch"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Building Credit From Scratch
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn proven strategies for establishing credit history,
                  including automatic credit builders.
                </p>
                <span
                  className="font-semibold hover:underline"
                  style={{ color: "#007042" }}
                >
                  Read Guide →
                </span>
              </Link>

              <Link
                href="/personal-finance/understanding-apr-and-fees"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Understanding APR and Fees
                </h3>
                <p className="text-gray-600 mb-4">
                  Decode credit card costs and learn how cards like SIREN
                  eliminate them entirely.
                </p>
                <span
                  className="font-semibold hover:underline"
                  style={{ color: "#007042" }}
                >
                  Read Guide →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* AI Disclaimer */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AIContentDisclaimer />
          </div>
        </section>
      </main>
      <CompactFooter />
    </>
  );
}
