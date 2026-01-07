import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title:
      "The 5-Minute Financial Health Check: Where Does Your Money Go? - KardTrust",
    description:
      "Discover where your money goes with this quick 5-minute financial health check. Learn simple tracking methods, identify spending leaks, and take control of your personal finances today.",
    keywords:
      "personal finance, money management, financial health check, track expenses, spending habits, budget tracking, where does my money go, financial wellness",
  };
}

export default function FinancialHealthCheckPage() {
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
              The 5-Minute Financial Health Check: Where Does Your Money Go?
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left sm:text-left text-lg text-gray-800 mb-4 leading-6">
                You work hard, you earn, and somehow by mid-month you're left
                wondering: where did it all go? If that sounds familiar, you're
                not alone. Most Americans have a fuzzy idea of where their money
                flows — rent and groceries are obvious, but subscriptions, quick
                trips to the coffee shop, and impulse buys? Those often vanish
                from memory. The good news: a quick five-minute check can give
                you surprising clarity and help you take back control.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/5-minute-financial-health-check.webp"
                  alt="Person reviewing expenses and tracking where money goes with personal finance tools"
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
                  Why tracking where your money goes matters
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Think of expense tracking like a financial GPS. You can't
                  reach your destination — whether that's paying off debt,
                  building an emergency fund, or simply feeling less stressed at
                  month's end — if you don't know where you're starting from.
                  The small, invisible purchases often derail budgets more than
                  big-ticket items. When you shine a light on them, you regain
                  power to redirect that cash toward goals that actually matter
                  to you.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Understanding your spending patterns is the first step in
                  effective{" "}
                  <Link
                    href="/personal-finance/money-management-for-beginners"
                    className="text-primary hover:underline"
                  >
                    money management for beginners
                  </Link>
                  . Once you see the full picture, you can make intentional
                  decisions instead of reacting to a low bank balance each
                  month.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  The 5-minute financial health check method
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  You don't need fancy software or a finance degree. Set a timer
                  for five minutes and follow these steps:
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  1. Grab your last bank statement or mobile banking app
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Open your checking account and scroll through the past 30
                  days. Don't judge yourself — just observe. This is data
                  collection, not a guilt trip.
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  2. Create three quick buckets
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  On a scrap of paper or your phone's notes app, jot down three
                  categories:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Essentials</strong> — rent/mortgage, utilities,
                    insurance, groceries, transportation
                  </li>
                  <li className="mb-2">
                    <strong>Recurring extras</strong> — subscriptions
                    (streaming, gym, apps), automatic payments you forgot about
                  </li>
                  <li className="mb-2">
                    <strong>Variable spending</strong> — dining out, online
                    shopping, entertainment, impulse buys
                  </li>
                </ul>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  3. Tally each bucket's rough total
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  You don't need exact cents — round numbers are fine. The goal
                  is to see proportions. Does your variable spending surprise
                  you? Are you paying for subscriptions you barely use?
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  4. Spot one quick win
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Look for the easiest change that saves you money without major
                  sacrifice. Maybe it's canceling that $15/month streaming
                  service you last opened in June, or switching to a generic
                  brand for everyday items. Small tweaks compound over time.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Common spending leaks (and how to plug them)
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Here are the usual suspects that drain budgets without most
                  people noticing:
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  Subscription creep
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  That free trial you forgot to cancel? The app you signed up
                  for "just in case"? Americans waste an average of $200+ per
                  year on unused subscriptions. Review your statements and
                  cancel what you don't actively use.
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  Convenience charges
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Food delivery fees, late payment penalties, ATM charges from
                  out-of-network machines. These add up fast. Set calendar
                  reminders for bill due dates and stick to in-network ATMs when
                  possible.
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  The "small treat" trap
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  A $5 coffee here, a $10 impulse purchase there — individually
                  harmless, but together they can drain $150-$300 per month. Try
                  the one-week challenge: track every single purchase under $20.
                  You might be shocked. For deeper strategies on managing
                  impulse spending, check out our guide on{" "}
                  <Link
                    href="/personal-finance/ditching-impulse-buys-mindful-spending"
                    className="text-primary hover:underline"
                  >
                    ditching impulse buys for mindful spending
                  </Link>
                  .
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  Credit card interest
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  If you're only paying minimums, interest charges quietly erode
                  your budget month after month. Consider a{" "}
                  <Link
                    href="/personal-finance/top-credit-cards-0-intro-apr"
                    className="text-primary hover:underline"
                  >
                    0% intro APR credit card
                  </Link>{" "}
                  to buy yourself breathing room while you tackle balances, or
                  explore how{" "}
                  <Link
                    href="/personal-finance/understanding-credit-card-interest-rates"
                    className="text-primary hover:underline"
                  >
                    credit card interest rates work
                  </Link>{" "}
                  to make smarter payment decisions.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  What to do with what you discover
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Information without action is just trivia. Once you've
                  completed your five-minute check, pick one concrete next step:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Redirect found money</strong> — canceled a $15
                    subscription? Immediately transfer that amount to savings or
                    put it toward debt.
                  </li>
                  <li className="mb-2">
                    <strong>Set a spending cap</strong> — if dining out totaled
                    $200 last month and you want to trim, set a $120 limit for
                    this month and track daily.
                  </li>
                  <li className="mb-2">
                    <strong>Automate savings first</strong> — before spending
                    begins, schedule a small automatic transfer on payday. Even
                    $25 per paycheck builds a buffer fast.
                  </li>
                  <li className="mb-2">
                    <strong>Plan for predictable extras</strong> — if you know
                    holiday spending or annual insurance is coming, set aside a
                    little each month so it doesn't derail your budget.
                  </li>
                </ul>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  For more detailed guidance on turning insights into lasting
                  habits, our article on{" "}
                  <Link
                    href="/personal-finance/creating-a-budget-youll-actually-stick-to"
                    className="text-primary hover:underline"
                  >
                    creating a budget you'll actually stick to
                  </Link>{" "}
                  offers practical frameworks that work with real life, not
                  against it.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Making this a monthly habit
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  The power of this check isn't in perfection — it's in
                  repetition. Set a recurring calendar reminder for the first
                  Sunday of each month. Grab coffee, open your banking app, and
                  spend five minutes reviewing where your money went. Over time,
                  you'll spot patterns, catch problems early, and feel more in
                  control.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Think of it like brushing your teeth — not glamorous, but the
                  results are worth it. Financial health, like physical health,
                  improves with consistent small actions. If you want to dive
                  deeper into overall financial wellness, explore what{" "}
                  <Link
                    href="/personal-finance/what-is-financial-health"
                    className="text-primary hover:underline"
                  >
                    financial health actually means
                  </Link>{" "}
                  and how to measure it beyond just checking account balances.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Next steps to strengthen your financial foundation
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Now that you've completed your first financial health check,
                  keep the momentum going:
                </p>
                <ul className="list-disc pl-6 mb-6 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    Learn{" "}
                    <Link
                      href="/personal-finance/money-management-for-beginners"
                      className="text-primary hover:underline"
                    >
                      money management basics
                    </Link>{" "}
                    if you're just getting started with personal finance.
                  </li>
                  <li className="mb-2">
                    Understand the difference between{" "}
                    <Link
                      href="/personal-finance/understanding-credit-card-interest-rates"
                      className="text-primary hover:underline"
                    >
                      credit card interest rates and APR
                    </Link>{" "}
                    to avoid costly mistakes.
                  </li>
                  <li className="mb-2">
                    If you're juggling debt, read our guide on{" "}
                    <Link
                      href="/personal-finance/getting-out-of-debt"
                      className="text-primary hover:underline"
                    >
                      how to get out of debt
                    </Link>{" "}
                    with strategies that work for real budgets.
                  </li>
                  <li className="mb-2">
                    Explore more resources in our{" "}
                    <Link
                      href="/personal-finance"
                      className="text-primary hover:underline"
                    >
                      Personal Finance section
                    </Link>
                    .
                  </li>
                </ul>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Remember: you don't need to overhaul your entire financial
                  life overnight. Start with five minutes. Find one leak. Plug
                  it. Then repeat next month. That's how lasting financial
                  confidence is built — one small, intentional step at a time.
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
