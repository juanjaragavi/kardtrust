import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Avant Credit Card: Build Credit with No Hidden Fees - KardTrust",
    description:
      "Discover the Avant Credit Card designed for credit building. No security deposit, no hidden fees, proactive credit line increases, and mobile app management. 29.99%-35.99% APR with $39-$75 annual membership fee. Issued by WebBank.",
    keywords:
      "Avant Credit Card, credit building card, no hidden fees, no security deposit, WebBank credit card, fair credit card, credit line increases, mobile app credit management",
  };
}

export default function AvantCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Avant Credit Card: Your Path to Healthy Credit Starts Here
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Avant Credit Card is designed specifically for consumers
                building or rebuilding their credit. With transparent terms, no
                security deposit required, and proactive credit line increases
                for qualifying cardholders, the Avant Credit Card helps you take
                steps toward stronger credit while accessing the buying power
                you need. Issued by WebBank with Mastercard acceptance
                worldwide, this card combines simplicity with practical
                credit-building features—all manageable through a convenient
                mobile app.
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
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      No Hidden Fees or Surprises:
                    </span>{" "}
                    The Avant Credit Card maintains transparent pricing with no
                    hidden fees—what you see is what you get. There are zero
                    overlimit fees, no security deposit required to open your
                    account, and $0 fraud liability protection through
                    Mastercard Zero Liability. While the card carries an annual
                    membership fee ($39-$75 for applications through the Avant
                    website), you'll never encounter unexpected charges or
                    penalties that suddenly inflate your costs.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Build Your Credit with Responsible Use:
                    </span>{" "}
                    The Avant Credit Card reports your payment activity to the
                    major credit bureaus, meaning responsible use and on-time
                    payments can help improve your credit score over time. This
                    card is specifically designed for consumers looking to
                    establish or rebuild credit, providing a pathway to stronger
                    credit health. As you demonstrate responsible credit
                    management, you're building a positive payment history that
                    lenders review when considering future credit applications.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Proactive Credit Line Increases:
                    </span>{" "}
                    Avant monitors your account activity and may proactively
                    offer credit line increases if you qualify based on your
                    credit management and payment history. You won't need to
                    request increases manually—if you're eligible for a higher
                    credit limit, Avant will notify you directly. These
                    proactive increases recognize your responsible credit use
                    and provide additional buying power as your financial
                    situation improves, helping you access more credit as you
                    need it.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Mobile App Management:
                    </span>{" "}
                    The Avant mobile app gives you complete control over your
                    credit card from anywhere. Check your balance, view
                    transactions, make payments, track your spending, and
                    monitor your credit progress—all from your smartphone. The
                    app provides real-time access to your account, making it
                    easy to stay on top of your finances and avoid missed
                    payments. Manage your credit card on your schedule without
                    needing to call customer service or visit a website.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/avant-credit-card-requirements">
                  <Button className="bg-[#0d5bff] hover:bg-[#0a4acc] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/avant-credit-card.webp"
                  alt="Avant Credit Card"
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
                  The Avant Credit Card addresses a specific need in the credit
                  market—providing access to credit for consumers who may not
                  qualify for traditional rewards cards or premium credit
                  products. Issued by WebBank and backed by Mastercard's global
                  payment network, this card works at millions of locations
                  worldwide, both online and in physical stores. The focus here
                  isn't on earning points or cashback—it's on building a
                  positive credit history while accessing the credit you need
                  for everyday purchases and unexpected expenses.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Designed for Credit Building
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Avant Credit Card recognizes that not everyone has perfect
                  credit, and many consumers need a credit product that works
                  with their current financial situation while helping them
                  improve it. Unlike secured credit cards that require you to
                  deposit hundreds of dollars upfront as collateral, the Avant
                  Credit Card requires no security deposit—your approved credit
                  limit is available to use immediately without tying up your
                  cash. This makes the card more accessible for consumers who
                  need credit but don't have extra funds to lock away in a
                  security deposit.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Credit limits range from $300 to $3,000 depending on your
                  creditworthiness and ability to repay, giving you meaningful
                  buying power for essential purchases. As you use the card
                  responsibly—making purchases, staying within your credit
                  limit, and paying on time—your activity is reported to the
                  major credit bureaus. This reporting helps you build a
                  positive credit history, which is essential for improving your
                  credit score and qualifying for better credit products in the
                  future.
                </p>

                <div
                  id="kardtrust_ad_2"
                  className="items-center justify-center flex w-full my-8"
                >
                  {/* Empty responsive, centered div */}
                </div>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Transparent Terms and Pricing
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Avant Credit Card maintains straightforward pricing with
                  no hidden surprises. Applications submitted directly through
                  the Avant website currently receive terms of 35.99% APR,
                  $39-$75 annual membership fee, and a minimum credit limit of
                  $300. If you received a pre-approved offer in the mail, refer
                  to your letter for the specific terms offered to you, as
                  pricing may vary based on offers provided through different
                  channels. The annual membership fee is charged once per year
                  and covers the cost of account maintenance and card services.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  While the APR is higher than cards designed for consumers with
                  excellent credit, this reflects the card's positioning as a
                  credit-building product for consumers with fair or building
                  credit. The key to managing this card cost-effectively is
                  paying your balance in full each month when possible to avoid
                  interest charges. The transparent fee structure means you'll
                  always know what you're paying—no overlimit fees, no penalty
                  APR increases, and no hidden charges that suddenly appear on
                  your statement.
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
                    Learn More About Credit Building:
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Quick Application and Fast Decisions:
                      </span>{" "}
                      The Avant Credit Card application process is designed for
                      speed and simplicity. Checking if you qualify won't impact
                      your credit score—you can see if you're eligible before
                      formally applying. The simple application takes just a few
                      minutes to complete online, and Avant provides decisions
                      as quickly as possible, often within minutes. This fast
                      turnaround means you can know where you stand and
                      potentially start using your credit card within days
                      rather than weeks.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mastercard Worldwide Acceptance:
                      </span>{" "}
                      Your Avant Credit Card is accepted at millions of
                      locations worldwide wherever Mastercard is accepted. Use
                      it for online purchases, in-store shopping, bill payments,
                      and everyday expenses. The card works anywhere Mastercard
                      does, giving you global payment flexibility without
                      needing to carry cash or rely solely on debit cards that
                      directly access your bank account.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Zero Fraud Liability Protection:
                      </span>{" "}
                      Mastercard Zero Liability protection means you won't be
                      held responsible for unauthorized transactions on your
                      Avant Credit Card, provided you've taken reasonable care
                      with your card and account. If your card is lost, stolen,
                      or used fraudulently, you're protected from liability for
                      those unauthorized charges. This security feature gives
                      you peace of mind when using your card for purchases both
                      online and in physical stores.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Personal Customer Support:
                      </span>{" "}
                      Avant provides customer support via phone and email,
                      giving you access to real people who can answer questions
                      about your account, help with payments, address concerns,
                      or provide guidance on using your card. The personal touch
                      of human customer service means you can get help when you
                      need it, whether you're calling about a transaction,
                      asking about your credit limit, or resolving an issue with
                      your account.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Security Deposit Required:
                      </span>{" "}
                      Unlike secured credit cards that require you to deposit
                      money as collateral (often $200-$500 or more), the Avant
                      Credit Card is an unsecured card—no deposit needed. Your
                      approved credit limit is available to use immediately
                      without tying up your cash in a security deposit. This
                      makes the card more accessible for consumers who need
                      credit but don't have extra funds to lock away, and it
                      means your cash remains liquid for other expenses.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0d5bff] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit Monitoring and Progress Tracking:
                      </span>{" "}
                      Through the Avant mobile app, you can monitor your credit
                      card usage, track your payment history, and watch as your
                      responsible credit use potentially improves your credit
                      score over time. The app provides visibility into your
                      credit journey, helping you stay motivated and on track
                      with your credit-building goals. Seeing your progress
                      reinforces positive financial habits and keeps you
                      informed about your credit health.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Using Your Card Responsibly
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Avant Credit Card's primary value lies in its
                  credit-building potential, which is maximized through
                  responsible use. To get the most benefit from this card, focus
                  on making regular purchases within your means, paying your
                  balance on time every month (ideally in full to avoid
                  interest), and keeping your credit utilization ratio
                  low—experts typically recommend using no more than 30% of your
                  available credit limit. These habits not only help you avoid
                  fees and interest charges but also demonstrate
                  creditworthiness to the bureaus that track your payment
                  behavior.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The mobile app makes responsible credit management easier by
                  providing real-time access to your account. Set up payment
                  reminders to ensure you never miss a due date, monitor your
                  spending to stay within your budget, and check your balance
                  before making purchases to avoid approaching your credit
                  limit. Over time, this consistent responsible use can help
                  improve your credit score, potentially opening doors to better
                  credit products with lower interest rates, higher credit
                  limits, and more favorable terms in the future.
                </p>

                <div className="text-left my-8">
                  <Link
                    href="https://www.avant.com/credit-card"
                    target="_blank"
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
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
