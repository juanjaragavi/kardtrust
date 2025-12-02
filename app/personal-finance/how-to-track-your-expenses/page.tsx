import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title:
      "How to Track Your Expenses for 30 Days (Without Going Crazy) - KardTrust",
    description:
      "Stop guessing where your money goes. Learn simple, stress-free methods to track your spending for 30 days and finally gain clarity over your personal finances.",
    keywords:
      "track expenses, expense tracking, spending tracker, personal finance, budgeting, money management, 30 day challenge, how to track spending",
  };
}

export default function HowToTrackYourExpensesPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-category="personal-finance"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              How to Track Your Expenses for 30 Days (Without Going Crazy)
            </h1>

            {/* Ad Placeholder 1 */}
            <div
              id="kardtrust_ad_1"
              className="items-center justify-center flex w-full my-8"
            >
              {/* Ad unit placeholder */}
            </div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left sm:text-left text-lg text-gray-800 mb-4 leading-6">
                Do you ever reach the end of the month and wonder where all your
                money went? You're not alone. Millions of Americans experience
                this financial fog, and the solution is simpler than you might
                think: tracking your spending for just 30 days can transform how
                you understand and manage your money.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/how-to-track-your-expenses.webp"
                  alt="Person tracking expenses on a notepad and smartphone for personal finance management"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl"
                  style={{ width: "auto", height: "auto" }}
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Why 30 Days Makes All the Difference
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  A single week of tracking won't capture your full spending
                  picture—monthly bills, irregular purchases, and weekly habits
                  all play a role. But 30 days? That's enough time to see
                  patterns emerge without feeling like you're locked into a
                  lifelong commitment. Think of it as a financial snapshot that
                  finally brings your money story into focus.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  The{" "}
                  <a
                    href="https://www.consumerfinance.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Consumer Financial Protection Bureau
                  </a>{" "}
                  recommends knowing where your money goes as the first step
                  toward building financial stability. And studies show that
                  simply becoming aware of spending can reduce impulse purchases
                  by up to 20%.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Pick a Method That Fits Your Life
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  There's no single "right" way to track expenses. The best
                  system is one you'll actually use. Here are three approaches
                  that work for different personalities:
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  1. The Notes App Method (Minimalist)
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Keep it dead simple. Open your phone's notes app and jot down
                  each purchase as you make it: "$4.50 coffee, $32 gas, $15
                  lunch." At the end of each week, total it up by category.
                  Perfect for people who hate apps but always have their phone
                  handy.
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  2. The Envelope System (Visual Learners)
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Label envelopes for your main spending categories—groceries,
                  entertainment, transport, dining out—and physically move cash
                  or receipts into each one. When the envelope is empty, you've
                  hit your limit. This tactile approach makes your spending feel
                  real and helps visual learners stay on track.
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  3. The Spreadsheet or App Method (Detail-Oriented)
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  If you love data, a simple spreadsheet or budgeting app can
                  automatically categorize transactions pulled from your bank.
                  Many free tools connect to your accounts and do the sorting
                  for you. Just remember: the goal is awareness, not analysis
                  paralysis.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  What to Track (and What to Ignore)
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Don't overwhelm yourself by logging every penny. Focus on
                  discretionary spending—the purchases you have control over.
                  Here's a simple breakdown:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Track:</strong> Groceries, dining out, coffee,
                    subscriptions, entertainment, gas, shopping, personal care
                  </li>
                  <li className="mb-2">
                    <strong>Don't stress about:</strong> Fixed bills like rent,
                    utilities, and insurance (you already know those amounts)
                  </li>
                  <li className="mb-2">
                    <strong>Watch for:</strong> Small, repeated purchases that
                    add up—streaming services you forgot about, daily snacks,
                    convenience store stops
                  </li>
                </ul>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  If you're new to{" "}
                  <Link
                    href="/personal-finance/money-management-for-beginners"
                    className="text-primary hover:underline"
                  >
                    money management for beginners
                  </Link>
                  , this 30-day exercise is the perfect starting point before
                  building a full budget.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  A Simple 30-Day Tracking Plan
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Ready to start? Here's a week-by-week approach that keeps
                  things manageable:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Week 1:</strong> Log every single purchase without
                    judgment. Don't change your behavior—just observe.
                  </li>
                  <li className="mb-2">
                    <strong>Week 2:</strong> Start sorting purchases into 5-6
                    categories. Notice which ones surprise you.
                  </li>
                  <li className="mb-2">
                    <strong>Week 3:</strong> Identify one or two spending leaks
                    you want to reduce. Make small adjustments.
                  </li>
                  <li className="mb-2">
                    <strong>Week 4:</strong> Review your full month. Calculate
                    totals by category and compare to your income.
                  </li>
                </ol>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  By the end of 30 days, you'll have a clear picture of where
                  your money actually goes—not where you think it goes. That
                  clarity is priceless.
                </p>
              </section>

              {/* Ad Placeholder 2 */}
              <div
                id="kardtrust_ad_2"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Ad unit placeholder */}
              </div>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  What to Do With Your Insights
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Once you've tracked for a month, you'll likely spot patterns
                  you never noticed. Maybe dining out costs more than you
                  realized, or subscription services are quietly draining your
                  account. Now you can take action:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Trim the easy wins:</strong> Cancel unused
                    subscriptions, batch errands to save on gas, meal-prep to
                    reduce takeout
                  </li>
                  <li className="mb-2">
                    <strong>Build a simple budget:</strong> Use your real
                    numbers to create a{" "}
                    <Link
                      href="/personal-finance/creating-a-budget-youll-actually-stick-to"
                      className="text-primary hover:underline"
                    >
                      budget you'll actually stick to
                    </Link>
                  </li>
                  <li className="mb-2">
                    <strong>Redirect savings:</strong> Even $50 a month toward
                    an emergency fund or paying down debt makes a difference
                    over time
                  </li>
                  <li className="mb-2">
                    <strong>Set realistic goals:</strong> Our guide to{" "}
                    <Link
                      href="/personal-finance/setting-financial-goals"
                      className="text-primary hover:underline"
                    >
                      setting financial goals
                    </Link>{" "}
                    can help you turn insights into a clear action plan
                  </li>
                </ul>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Tips to Stay Motivated
                </h2>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Set a daily reminder:</strong> A quick phone alert
                    at 8 PM gives you time to log the day's purchases before bed
                  </li>
                  <li className="mb-2">
                    <strong>Use round numbers:</strong> A $4.73 coffee can just
                    be "$5"—close enough to spot trends without slowing you down
                  </li>
                  <li className="mb-2">
                    <strong>Track with a partner:</strong> If you share
                    finances, doing this together builds accountability and
                    opens conversations about money
                  </li>
                  <li className="mb-2">
                    <strong>Celebrate small wins:</strong> Found $100 in monthly
                    savings? Treat yourself to something meaningful (within
                    reason)
                  </li>
                </ul>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Your Next Steps
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Tracking expenses isn't about restriction—it's about clarity.
                  When you know exactly where your money goes, you can make
                  intentional choices that align with what truly matters to you.
                  Start today, keep it simple, and remember: progress beats
                  perfection every time.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  For more practical advice on taking control of your finances,
                  explore our{" "}
                  <Link
                    href="/personal-finance"
                    className="text-primary hover:underline"
                  >
                    Personal Finance guides
                  </Link>{" "}
                  or check out our{" "}
                  <Link
                    href="/personal-finance/5-minute-financial-health-check"
                    className="text-primary hover:underline"
                  >
                    5-Minute Financial Health Check
                  </Link>{" "}
                  to see how your overall money picture is shaping up.
                </p>
              </section>

              <div className="mt-12 mb-6 text-center">
                <Link href="/personal-finance" className="cta-button-red">
                  Explore More Personal Finance Guides
                </Link>
              </div>

              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
