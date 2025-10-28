import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Citi Custom Cash® Card: 5% Cash Back That Automatically Adapts - KardTrust",
    description:
      "Discover the Citi Custom Cash® Card with automatic 5% cash back on your top spending category, $200 welcome bonus, 0% intro APR for 18 months on balance transfers, and no annual fee. Your rewards adapt as your spending changes.",
    keywords:
      "Citi Custom Cash Card, automatic cash back, 5% cash back, adaptive rewards, no annual fee, balance transfer, Citi credit card, ThankYou Points",
  };
}

export default function CitiCustomCashCardPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="credit-cards"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Citi Custom Cash® Card: Automatic 5% Cash Back That Adapts to
              Your Spending
            </h1>

            <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
              The Citi Custom Cash® Card represents a revolutionary approach to
              cash back credit cards in the United States—combining the
              simplicity of flat-rate rewards with the earning power of bonus
              categories, without requiring any activation or enrollment. This
              intelligent card automatically identifies your highest spending
              category each billing cycle and awards you 5% cash back on up to
              $500 spent in that category, earning you up to $25 per month ($300
              annually) in maximum bonus rewards. Whether you're spending on
              restaurants this month, groceries the next, or gas stations after
              that, the Citi Custom Cash adapts to your lifestyle changes
              without any manual intervention. With a $200 welcome bonus after
              spending $1,500 in the first 6 months, 0% intro APR for 18 months
              on balance transfers, no annual fee, and additional 4% cash back
              on Citi Travel bookings, this card delivers exceptional value for
              cardholders who want premium rewards without the complexity of
              traditional rotating category cards.
            </p>

            <div
              id="kardtrust_ad_1"
              className="items-center justify-center flex w-full my-6"
            >
              {/* Empty responsive, centered div */}
            </div>

            <div className="my-8 space-y-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Key Features of the Citi Custom Cash® Card
              </h2>

              <div className="space-y-6 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Automatic 5% Cash Back on Top Category:
                    </span>{" "}
                    Earn 5% cash back on up to $500 spent in your highest
                    eligible spending category each billing cycle (up to $25
                    maximum per month, $300 per year). Eligible categories
                    include restaurants, gas stations, grocery stores, select
                    travel, select transit, select streaming services,
                    drugstores, home improvement stores, fitness clubs, and live
                    entertainment. No enrollment, no activation—the card
                    automatically identifies and rewards your top category.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      $200 Welcome Bonus + 0% Intro APR:
                    </span>{" "}
                    Earn $200 cash back (20,000 ThankYou® Points) after
                    spending $1,500 on purchases within the first 6 months of
                    account opening. Plus, enjoy 0% intro APR for 18 months on
                    balance transfers completed within 4 months of account
                    opening. After the intro period, a variable APR of 17.99% -
                    27.99% applies based on your creditworthiness. Balance
                    transfer fee: $5 or 5% of each transfer, whichever is
                    greater.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      No Annual Fee + Additional Citi Travel Bonus:
                    </span>{" "}
                    The Citi Custom Cash® Card charges $0 annual fee forever,
                    making premium rewards accessible without yearly costs.
                    Additionally, earn 4% extra cash back on hotels, car
                    rentals, and attractions booked through Citi Travel®,
                    combining with your base earning for a total of 5% on travel
                    purchases through the portal. Unlimited 1% cash back on all
                    other purchases ensures every dollar spent earns rewards.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Flexible ThankYou® Points Redemption:
                    </span>{" "}
                    Cash back is earned as ThankYou® Points (5 points per $1 in
                    top category, 1 point per $1 on other purchases) and can be
                    redeemed for cash back via statement credit, direct deposit,
                    or check. You can also redeem points for gift cards, travel
                    bookings, or use Shop with Points at Amazon.com. Unlike some
                    rewards programs, there's no minimum redemption threshold
                    for cash back options, providing maximum flexibility.
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left my-8">
              <Link href="/financial-solutions/citi-custom-cash-card-requirements">
                <Button className="bg-[#233A79] hover:bg-[#1a2b5c] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                  View Eligibility Requirements
                </Button>
              </Link>
            </div>

            <div className="my-8 text-left sm:text-left">
              <Image
                src="https://media.topfinanzas.com/images/kardtrust/citi-custom-cash-card.webp"
                alt="Citi Custom Cash Card"
                width={900}
                height={507}
                className="w-full h-auto rounded-xl"
                style={{ width: "auto", height: "auto" }}
                loading="lazy"
                quality={80}
              />
            </div>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                How the Citi Custom Cash® Card Automatically Maximizes Your
                Rewards
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                The Citi Custom Cash® Card's defining feature is its
                intelligent, automatic rewards system that eliminates the
                complexity and hassle associated with traditional rotating
                category cards. Unlike cards that require quarterly activation
                (such as the Chase Freedom Flex℠ or Discover it® Cash Back),
                the Citi Custom Cash works behind the scenes to identify your
                highest spending category each billing cycle and automatically
                awards you 5% cash back on up to $500 spent in that category.
                This means you can earn up to $25 per month ($300 per year) in
                maximum bonus rewards without ever logging in to activate
                categories, remembering which quarter features which bonus, or
                worrying about spending caps resetting mid-purchase.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                The 10 eligible categories provide comprehensive coverage for
                most household spending: restaurants (including fast food,
                takeout, delivery, and dining out), gas stations (perfect for
                commuters and road trippers), grocery stores (everyday
                essentials and food shopping), select travel (airlines, hotels,
                cruises, travel agencies), select transit (parking, tolls,
                trains, buses, ride-sharing), select streaming services
                (Netflix, Spotify, Hulu, and similar platforms), drugstores
                (CVS, Walgreens, Rite Aid for prescriptions and health items),
                home improvement stores (Home Depot, Lowe's for renovation
                projects), fitness clubs (gym memberships, yoga studios, fitness
                classes), and live entertainment (concert tickets, sporting
                events, theater shows). This breadth of categories ensures that
                whether your spending patterns change seasonally (holiday
                shopping in December, travel in summer), situationally (home
                renovation projects), or due to lifestyle changes (new gym
                membership), the card adapts automatically to maximize your
                rewards.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                What makes this system particularly valuable is its flexibility
                without sacrifice. In months where you spend $500 or more on
                groceries, you'll earn 5% ($25) on those grocery purchases. The
                next month, if your highest spending shifts to gas stations
                because you're taking a road trip, you'll automatically earn 5%
                ($25) on that gas spending instead—no action required on your
                part. If you spend $300 on restaurants and $200 on groceries in
                a billing cycle, the card identifies restaurants as your top
                category and awards 5% on the full $300, then 1% on the grocery
                purchases and all other spending. Compare this to rotating
                category cards where you might miss activating a quarter and
                forfeit 5% earnings entirely, or flat-rate cards where you're
                stuck at 1.5% or 2% on everything regardless of spending
                patterns. The Citi Custom Cash gives you the best of both
                worlds: premium category bonuses with zero-effort automation.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                The additional 4% cash back on Citi Travel® bookings (hotels,
                car rentals, attractions) further enhances the card's value
                proposition for travelers. Since travel is also one of the
                eligible 5% bonus categories, you're effectively earning 5%
                total (1% base + 4% travel bonus) when booking through Citi's
                portal, making this card competitive with dedicated travel
                rewards cards despite having no annual fee. For families,
                professionals, or anyone with diverse and changing spending
                patterns, this automatic optimization removes mental overhead
                while delivering premium rewards that can easily exceed $300+
                annually if you consistently maximize the $500 monthly category
                bonus limit. The card essentially functions as a personal
                rewards optimizer that works 24/7 to ensure you're always
                earning at the highest possible rate based on your actual
                spending behavior.
              </p>
            </section>

            <div
              id="kardtrust_ad_2"
              className="items-center justify-center flex w-full my-8"
            >
              {/* Empty responsive, centered div */}
            </div>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Welcome Bonus, Intro APR, and Strategic Balance Transfer
                Opportunity
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                The Citi Custom Cash® Card offers a compelling $200 cash back
                welcome bonus (awarded as 20,000 ThankYou® Points) after you
                spend $1,500 on purchases within the first 6 months of account
                opening. This represents a 13.3% return on your initial spending
                requirement, making it one of the most accessible welcome
                bonuses in the cash back category. At just $250 per month in
                spending over six months to earn the bonus, most cardholders can
                easily meet this threshold through normal everyday purchases
                like groceries, gas, dining, and household expenses. Combined
                with the 5% cash back you'll be earning on your top category
                during the bonus earning period, new cardholders can
                realistically earn $275-$300+ in total rewards during the first
                six months—exceptional value with no annual fee.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Beyond the welcome offer, the Citi Custom Cash® Card provides
                substantial value for debt consolidation through its 0% intro
                APR for 18 months on balance transfers completed within 4 months
                of account opening. This extended promotional period gives you a
                year and a half of interest-free time to pay down existing
                high-interest credit card debt, which is particularly valuable
                when the national average credit card APR hovers around 21-24%.
                For example, if you transfer a $6,000 balance from a card
                charging 22% APR, you would normally pay approximately $1,320 in
                interest charges over 18 months if making only minimum payments.
                With the Citi Custom Cash's 0% intro APR, you'd save that entire
                $1,320 (minus the balance transfer fee of $300 at 5%), resulting
                in net savings of $1,020 while paying down your debt
                strategically.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                The balance transfer feature becomes even more powerful when you
                create a structured payoff plan. Divide your transferred balance
                by 18 months to determine the monthly payment needed to become
                debt-free before the promotional period ends. For a $6,000
                balance transfer, this would be approximately $333 per month. By
                making consistent payments above the minimum throughout the
                18-month window, you eliminate debt while avoiding interest
                charges and building positive payment history that strengthens
                your credit score. The key is completing balance transfers
                within the first 4 months of opening your account to qualify for
                the intro rate—transfers made after this window will be subject
                to the standard variable APR of 17.99% - 27.99%.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                It's important to note that the intro APR applies only to
                balance transfers, not purchases. New purchases will be subject
                to the standard variable APR from day one, though you can avoid
                interest charges entirely by paying your full statement balance
                by the due date each month. If you carry a balance after
                transferring debt, interest will be charged on new purchases
                unless you pay both the transferred balance and new purchases in
                full each month. For optimal results, consider using the Citi
                Custom Cash® Card primarily for its 5% bonus category spending
                during the 18-month balance transfer period, while directing
                discretionary purchases to another card you can pay in full
                monthly. This strategy allows you to maximize rewards earnings
                while eliminating debt interest-free, positioning you for
                long-term financial health and ongoing rewards optimization once
                your balance is paid off.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                ThankYou® Points Ecosystem and Flexible Redemption Options
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Unlike many cash back cards that provide rewards as simple
                statement credits, the Citi Custom Cash® Card earns cash back
                in the form of ThankYou® Points—Citi's flexible rewards
                currency. This structure provides significantly more redemption
                flexibility while maintaining the simplicity of cash back
                earning (5 points per $1 in your top category equals 5% cash
                back, 1 point per $1 elsewhere equals 1% cash back). You can
                redeem ThankYou® Points for cash back via statement credit
                (applied to your account balance), direct deposit to your linked
                bank account, or physical check mailed to your address. The
                beauty of this system is that it gives you the straightforward
                value of cash back with the added optionality of the broader
                ThankYou® ecosystem.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Beyond cash redemptions, ThankYou® Points can be redeemed for
                gift cards from hundreds of popular brands (often at face value,
                sometimes with promotional bonuses), travel bookings through
                Citi's travel portal, Shop with Points at Amazon.com (where you
                can use points at checkout like cash), electronics and
                merchandise through the ThankYou® shopping portal, student loan
                payments (if you hold eligible student loans), mortgage payments
                (if you have a Citi mortgage), and charitable donations to
                select nonprofit organizations. While the standard redemption
                value is typically 1 cent per point for cash back and most other
                redemptions, gift cards occasionally offer enhanced value during
                promotional periods, and travel redemptions can provide
                additional value when booking through Citi Travel (especially
                when combined with the 4% bonus on travel bookings).
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                One significant advantage of the ThankYou® Points structure is
                that there's no minimum redemption threshold for cash back
                options—you can redeem any amount of points at any time, unlike
                some programs that require minimum balances of $25, $50, or more
                before you can access your rewards. This means you're never
                sitting on "trapped" rewards waiting to reach a threshold.
                Additionally, ThankYou® Points don't expire as long as your
                account remains open and in good standing, giving you unlimited
                time to accumulate and redeem rewards at your convenience. For
                cardholders who prefer simplicity, you can set up automatic
                redemption for statement credits, converting your points to cash
                back without manual intervention.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                An often-overlooked opportunity within the ThankYou® ecosystem
                is point pooling if you hold multiple Citi cards earning
                ThankYou® Points (such as the Citi Premier® Card or Citi
                Double Cash® Card). Points from all your Citi cards combine
                into a single ThankYou® account, allowing you to accumulate
                points faster and access more valuable redemption options. While
                the Citi Custom Cash® Card doesn't earn points that can
                transfer to airline or hotel partners (that benefit requires
                premium cards like the Citi Premier®), cardholders who later
                add a Citi Premier® to their wallet can pool points from both
                cards and then transfer combined balances to partners like
                Emirates, Singapore Airlines, or Wyndham Hotels. This creates a
                potential upgrade path where the Custom Cash serves as a daily
                driver for 5% bonus category earning, while a premium card
                unlocks enhanced redemption values—a strategy that maximizes
                both earning and redemption efficiency across your entire credit
                card portfolio.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Comparing Citi Custom Cash to Other Popular Cash Back Cards
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                When evaluating the Citi Custom Cash® Card against competing
                cash back options, several key distinctions emerge. Compared to
                flat-rate cards like the{" "}
                <Link
                  href="/financial-solutions/wells-fargo-active-cash-card"
                  className="text-blue-600 hover:underline"
                >
                  Wells Fargo Active Cash® Card
                </Link>{" "}
                (unlimited 2% everywhere) or Citi's own Double Cash® Card (2%
                total: 1% when you buy, 1% when you pay), the Custom Cash
                delivers higher earning rates on your top spending category (5%
                vs. 2%) but lower earnings on other purchases (1% vs. 2%). The
                math works strongly in the Custom Cash's favor if you
                consistently max out the $500 monthly bonus category
                limit—earning $25 per month in the 5% category plus 1% on other
                spending will outperform flat 2% cards for most spending
                patterns, especially when factoring in the $200 welcome bonus.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Compared to rotating category cards like the{" "}
                <Link
                  href="/financial-solutions/chase-freedom-flex"
                  className="text-blue-600 hover:underline"
                >
                  Chase Freedom Flex℠
                </Link>{" "}
                or Discover it® Cash Back (both offering 5% in rotating
                categories up to $1,500 quarterly spend after activation), the
                Citi Custom Cash trades higher spending caps for superior
                convenience. The Chase and Discover cards allow you to earn 5%
                on up to $1,500 per quarter ($75 maximum per quarter, $300
                annually), while the Custom Cash caps you at $500 per month ($25
                maximum per month, also $300 annually). The annual maximum is
                identical, but the Custom Cash spreads the limit across 12
                months rather than concentrating it in four quarters, which
                better accommodates varied spending patterns. More importantly,
                the Custom Cash's automatic category selection means you'll
                never miss activating a quarter or find yourself stuck earning
                5% on categories you don't use—you're always earning the bonus
                on whatever you naturally spend the most on.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                For strategic card pairing, the Citi Custom Cash® Card works
                exceptionally well alongside a flat-rate 2% card. Use the Custom
                Cash for your highest spending category each month (up to $500)
                to earn 5% ($25), then use a 2% card for all other purchases.
                This combination ensures you're never earning less than 2% on
                any purchase while maximizing the 5% bonus where it matters
                most. Alternatively, pair the Custom Cash with the Citi Double
                Cash® Card (both are no annual fee, earn ThankYou® Points that
                pool together) to create a two-card Citi ecosystem: 5% on your
                top category via Custom Cash, 2% on everything else via Double
                Cash, all points pooling into one ThankYou® account for
                flexible redemption. This strategy delivers premium earning
                rates without the complexity of managing multiple rewards
                programs or paying annual fees.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Convenience Features, Digital Wallets, and Citi Mobile App
              </h2>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Beyond rewards earning, the Citi Custom Cash® Card includes
                comprehensive convenience features that enhance the day-to-day
                cardholder experience. Contactless payment technology
                (tap-to-pay) allows you to complete transactions in seconds by
                simply tapping your card on enabled payment terminals—no
                swiping, inserting, or signature required for most purchases.
                This technology uses secure encryption and tokenization to
                protect your card information during transactions, reducing
                fraud risk compared to traditional magnetic stripe transactions.
                Combined with $0 liability on unauthorized charges (Citi's zero
                fraud liability protection), you can use your card confidently
                knowing you're protected against fraudulent activity.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Digital wallet compatibility further expands payment
                convenience, allowing you to add your Citi Custom Cash® Card to
                Apple Pay, Google Pay, Samsung Pay, and other mobile payment
                platforms. With digital wallets, you can leave your physical
                card at home and make purchases using just your smartphone or
                smartwatch. Digital wallet transactions use device-specific
                number and unique transaction codes, so your actual card number
                is never shared with merchants—adding an extra layer of security
                for online shopping, in-app purchases, and in-store contactless
                payments. You'll continue earning all the same rewards (5% on
                top category, 1% on other purchases) when using digital wallets,
                with no restrictions or limitations on earning rates.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                The Citi Mobile® App provides comprehensive account management
                from your smartphone or tablet, giving you 24/7 access to view
                your current balance, available credit, detailed transaction
                history, pending charges, ThankYou® Points balance, and payment
                due dates. The app allows you to make payments easily (one-time
                or scheduled), set up automatic monthly payments to avoid late
                fees, view your monthly statements digitally, track your
                spending by category to understand where your money goes, set up
                custom account alerts (balance levels, payment reminders, large
                transaction notifications), and contact customer service via
                secure messaging. The app also displays which category is
                currently earning you 5% cash back for the billing cycle, so you
                can optimize spending accordingly if desired.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                Automatic account alerts keep you informed and help you avoid
                costly mistakes. You can configure email or mobile alerts for
                payment due date reminders (never miss a payment), balance
                threshold notifications (when balance exceeds a specific
                amount), credit limit alerts (when approaching your limit),
                large transaction alerts (purchases over a specified dollar
                amount for fraud monitoring), and international transaction
                alerts (when card used outside the US). Additionally, Citi's
                "Choose Your Payment Due Date" feature lets you select a payment
                due date that aligns with your pay schedule—choose from
                available dates at the beginning, middle, or end of the month to
                optimize cash flow and ensure you always have funds available
                when payments are due. This flexibility helps you avoid late
                payments and maintain a positive payment history that
                strengthens your credit score over time.
              </p>
            </section>

            <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
              <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                ⚠️ Important Disclosure
              </h3>
              <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                <strong>Representative APR Example:</strong> The Citi Custom
                Cash® Card has a variable APR of 17.99% - 27.99% for purchases
                based on your creditworthiness. If you carry a balance of $3,000
                at the midpoint APR of 22.99% and make only minimum payments,
                you would pay approximately $689 in interest charges over one
                year. To avoid interest charges entirely, pay your full
                statement balance by the due date each month. Balance transfer
                intro APR: 0% for 18 months on transfers completed within 4
                months of account opening; thereafter 17.99% - 27.99% variable
                APR. Balance transfer fee: $5 or 5% of each transfer, whichever
                is greater.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                <strong>Credit Impact:</strong> Applying for a credit card
                results in a hard inquiry on your credit report, which may
                temporarily lower your credit score by 2-5 points. Opening a new
                account affects your average age of accounts. However,
                responsible use with on-time payments and low utilization (below
                30%) typically improves your credit score over 6-12 months by
                building positive payment history and increasing available
                credit.
              </p>
              <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                <strong>Risk Warning:</strong> Credit cards are a form of
                borrowing. Missing payments can damage your credit score
                significantly (drops of 60-110 points for a single 30-day late
                payment), result in late fees up to $40, and trigger penalty
                APRs. High credit utilization negatively impacts your credit
                score. Only apply if you can manage repayment responsibly and
                understand the risks of carrying balances.
              </p>
              <p className="text-sm text-gray-700 leading-5 text-left">
                <strong>Product Restrictions:</strong> Citi will only issue one
                Citi Custom Cash® Card account per person. You are not eligible
                for the welcome bonus if you received a new account bonus for a
                Citi Custom Cash® Card in the past 48 months, or if you
                converted another Citi credit card (on which you earned a new
                account bonus in the last 48 months) into a Citi Custom Cash®
                Card. Subject to credit approval. This content is for
                informational purposes only and does not constitute financial
                advice. KardTrust is not affiliated with or endorsed by Citi.
              </p>
            </section>

            <div className="text-left my-8">
              <a
                href="https://www.citi.com/credit-cards/citi-custom-cash-credit-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#233A79] hover:bg-[#1a2b5c] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                  Apply Now - Visit Official Citi Website
                </Button>
              </a>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
