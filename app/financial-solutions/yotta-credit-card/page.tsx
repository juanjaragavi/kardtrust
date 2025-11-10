import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Yotta Credit Card Review: Win Cash Back With Every Purchase | KardTrust",
    description:
      "Discover how the Yotta Credit Card transforms spending into winning opportunities. Every purchase enters you to win up to 100% cash back, with prizes up to $5,000. Learn about Lucky Swipe rewards and better-than-average winning odds.",
    keywords: [
      "Yotta Credit Card",
      "lucky swipe credit card",
      "sweepstakes credit card",
      "gamified credit card",
      "win cash back",
      "prize-linked spending",
      "Yotta card review",
      "credit card rewards",
      "Synapse Credit",
      "Evolve Bank",
    ].join(", "),
  };
}

export default function YottaCreditCardPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  GAMIFIED CREDIT CARD
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Yotta Credit Card: Every Purchase is a Winning Opportunity
                </h1>
                <p className="text-lg md:text-xl text-purple-100 mb-6">
                  Transform ordinary spending into extraordinary wins. With
                  Lucky Swipe technology, every transaction gives you a chance
                  to win up to 100% cash back—instantly reimbursing your
                  purchase up to $5,000.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://banking.withyotta.com/"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-full transition-colors duration-200"
                    style={{ backgroundColor: "#4e0cdc" }}
                  >
                    Apply Now
                  </a>
                  <Button
                    href="/financial-solutions/yotta-credit-card-requirements"
                    variant="secondary"
                  >
                    View Requirements
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-96">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/yotta-credit-card.webp"
                  alt="Yotta Credit Card with Lucky Swipe feature showing winning opportunities"
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
                Why Choose the Yotta Credit Card?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Yotta reinvents credit card rewards with prize-linked spending.
                Instead of earning points that take months to redeem, you get
                instant winning opportunities on every single transaction—no
                caps, no categories, no rotating bonuses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Lucky Swipe Rewards
                </h3>
                <p className="text-gray-600 mb-4">
                  Every purchase automatically enters you to win up to 100% of
                  the transaction amount back. Buy coffee for $5? Win $5 back.
                  Book a flight for $400? Potentially win $400 back.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Maximum prize: $5,000 per transaction
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Automatic entry on every purchase
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Reimbursement credited within 30 days
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Better Than Average Odds
                </h3>
                <p className="text-gray-600 mb-4">
                  With direct deposit, your base winning odds are 1 in 75 per
                  transaction—significantly better than most sweepstakes and
                  lottery games. Refer friends to unlock even better 1 in 50
                  odds.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>1 in 75 odds
                    with direct deposit
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Boost to 1 in 50 with referrals
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Better than debit card odds
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  No Complex Redemption
                </h3>
                <p className="text-gray-600 mb-4">
                  Forget navigating confusing rewards portals or waiting for
                  statement credits. Yotta's Lucky Swipe winners get automatic
                  reimbursements directly to their account—no forms, no hoops to
                  jump through.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Automatic prize notification
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Direct account credit in 30 days
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    No minimum redemption thresholds
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
                  Built on Trust
                </h3>
                <p className="text-gray-600 mb-4">
                  Banking services through Evolve Bank & Trust (Member FDIC),
                  with lending via Synapse Credit LLC. Your deposits are
                  FDIC-insured, and sweepstakes are independently verified for
                  fairness.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    FDIC-insured banking partner
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Licensed lending services
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    Transparent sweepstakes rules
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Lucky Swipe Works */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Lucky Swipe Technology Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Yotta's proprietary Lucky Swipe system uses a verified random
                number generator to determine winners instantly after each
                transaction settles. Here's the process:
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Make a Purchase
                  </h3>
                  <p className="text-gray-600">
                    Use your Yotta Credit Card anywhere. Every qualifying
                    purchase—groceries, gas, dining, travel—automatically enters
                    you into the Lucky Swipe sweepstakes. No manual entry
                    needed.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-indigo-200">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Random Number Generation
                  </h3>
                  <p className="text-gray-600">
                    Once your transaction settles, Yotta's system assigns your
                    purchase a random integer between 0 and your odds threshold.
                    If it draws 0, you win up to 100% cash back.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Get Your Reimbursement
                  </h3>
                  <p className="text-gray-600">
                    Winners receive instant notification through the Yotta app.
                    Your prize (up to $5,000 or 100% of purchase amount) is
                    credited to your account within 30 days—no redemption forms
                    required.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-xl border-2 border-purple-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  🎲 Example: How Your Odds Work
                </h4>
                <p className="text-gray-700 mb-3">
                  Let's say you have 1 in 75 odds (base rate with direct
                  deposit). When you buy $50 worth of groceries:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">→</span>
                    The system generates a random number between 0 and 74
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">→</span>
                    If it selects 0, you win a $50 reimbursement (free
                    groceries!)
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">→</span>
                    If it selects 1-74, you don't win (but you still earned
                    credit on the purchase)
                  </li>
                </ul>
                <p className="text-gray-600 mt-3 text-sm italic">
                  This happens instantly for <em>every</em> transaction—no caps,
                  no categories, no limits on how many times you can win.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison with Traditional Rewards */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Yotta vs. Traditional Rewards Cards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how Yotta's gamified approach compares to conventional cash
                back and points programs:
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-left font-bold">
                      Yotta Credit Card
                    </th>
                    <th className="px-6 py-4 text-left font-bold">
                      Traditional Cards
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Reward Structure
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Win up to 100% cash back per transaction (lottery-style)
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      Earn 1-5% cash back or points per dollar spent
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Redemption
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Automatic reimbursement within 30 days (no action needed)
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      Manual redemption, often with minimums ($25-$50)
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Earning Potential
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Maximum $5,000 per winning transaction
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      Capped by spending (e.g., $100 spend = $1-$5 back)
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Category Restrictions
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      None—all purchases qualify
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      Often limited to rotating categories or specific merchants
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Excitement Factor
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Every purchase = potential jackpot
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      Predictable, incremental rewards accumulation
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Best For
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      People who enjoy gamification and sweepstakes
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      People who prefer guaranteed, steady rewards
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
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
                    Important Consideration
                  </h4>
                  <p className="text-gray-700">
                    <strong>Yotta's model is probabilistic</strong>, meaning
                    most transactions won't win prizes. If you prefer guaranteed
                    returns, a traditional cash back card (earning 1.5-2% on all
                    purchases) may provide more consistent value. However, if
                    you enjoy the thrill of potentially winning big and don't
                    mind occasional losses, Yotta's gamified approach can be
                    significantly more rewarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Apply */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Is the Yotta Credit Card Right for You?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                This card works best for specific types of spenders and
                financial personalities:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Ideal For */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
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
                        You enjoy gamification:
                      </strong>
                      <p className="text-gray-600">
                        You find sweepstakes and lottery-style rewards more
                        exciting than traditional cash back
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">
                      ✓
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You're okay with variance:
                      </strong>
                      <p className="text-gray-600">
                        You understand that some months you might win nothing,
                        while others could yield substantial prizes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">
                      ✓
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You have direct deposit:
                      </strong>
                      <p className="text-gray-600">
                        Setting up direct deposit unlocks the best odds (1 in
                        75) and maximizes your winning potential
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">
                      ✓
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You're a frequent spender:
                      </strong>
                      <p className="text-gray-600">
                        More transactions = more chances to win. High-volume
                        spenders benefit most from Yotta's model
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">
                      ✓
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You want simplicity:
                      </strong>
                      <p className="text-gray-600">
                        No category tracking, no redemption portals, no
                        expiration dates—just spend and potentially win
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Not Ideal For */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-red-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Probably Not Right If...
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">
                      ✗
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You prefer guaranteed returns:
                      </strong>
                      <p className="text-gray-600">
                        If you want predictable 1.5-2% cash back on every
                        purchase, a traditional rewards card is safer
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">
                      ✗
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You're optimizing for maximum value:
                      </strong>
                      <p className="text-gray-600">
                        Category-specific cards (5% on gas, 3% on dining) often
                        deliver higher guaranteed returns
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">
                      ✗
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You're building credit:
                      </strong>
                      <p className="text-gray-600">
                        If credit building is your primary goal, consider cards
                        that report to all three bureaus with longer track
                        records
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">
                      ✗
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You need travel perks:
                      </strong>
                      <p className="text-gray-600">
                        Yotta doesn't offer airport lounge access, travel
                        insurance, or airline-specific benefits
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">
                      ✗
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        You can't qualify:
                      </strong>
                      <p className="text-gray-600">
                        Yotta credit cards are only available in 42 states (see
                        eligibility requirements for details)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Turn Spending Into Winning?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Apply for the Yotta Credit Card today and start enjoying Lucky
              Swipe rewards on every purchase. Every transaction is a new
              opportunity to win up to $5,000.
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
                href="/financial-solutions/yotta-credit-card-requirements"
                variant="secondary"
                className="bg-white text-purple-700 hover:bg-gray-100"
              >
                Check Eligibility Requirements
              </Button>
            </div>
            <p className="mt-6 text-sm text-purple-200">
              Banking services through Evolve Bank & Trust, Member FDIC. Lending
              via Synapse Credit LLC.
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
                  Compare traditional rewards cards vs. gamified options like
                  Yotta to find your best match.
                </p>
                <span className="text-purple-600 font-semibold hover:underline">
                  Read Guide →
                </span>
              </Link>

              <Link
                href="/personal-finance/maximizing-credit-card-rewards"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Maximizing Credit Card Rewards
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn strategies to optimize your credit card rewards,
                  including sweepstakes-based systems.
                </p>
                <span className="text-purple-600 font-semibold hover:underline">
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
                  Decode credit card costs to make informed decisions beyond
                  just reward structures.
                </p>
                <span className="text-purple-600 font-semibold hover:underline">
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
