import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Self Credit Builder Account + Visa Card: Build Credit with Savings and Secured Spending - KardTrust",
    description:
      "See how the Self Credit Builder Account and Visa Secured Card pair to report to all three bureaus, offer $35-per-month plans with 15.69% APR, and deliver a $0 intro annual fee with a $100 deposit.",
    keywords:
      "Self Credit Builder Account, Self Visa Credit Card, Self secured card, credit builder loan, build credit with savings, secured credit card USA, Self Financial credit card",
  };
}

export default function SelfCreditBuilderAccountVisaCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Self Credit Builder Account + Visa Card: Build Credit with One
              Ecosystem
            </h1>

            <div id="square02" data-topads data-topads-size="square"></div>

            <p className="text-lg text-gray-800 font-medium mb-8 leading-6 text-left">
              Self Financial combines an installment-style Credit Builder
              Account with the secured Self Visa Credit Card so you can build
              credit history, set aside savings, and unlock revolving credit
              backed by your own $100 security deposit. The program reports to
              all three credit bureaus, avoids hard credit inquiries when you
              open the Credit Builder Account, and provides transparent pricing
              on both the loan and the card.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#4298F0] flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <div className="text-sm leading-5 text-left text-gray-800">
                  <span className="font-semibold">
                    Monthly payments reported to all three bureaus:
                  </span>{" "}
                  Every Credit Builder Account payment is shared with Experian,
                  Equifax, and TransUnion, helping you demonstrate positive
                  history while you save toward the card deposit.
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#4298F0] flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-semibold">2</span>
                </div>
                <div className="text-sm leading-5 text-left text-gray-800">
                  <span className="font-semibold">
                    Representative $35 plan builds savings:
                  </span>{" "}
                  A sample plan shown by Self requires $35 monthly payments for
                  24 months at 15.69% APR, generating $123 in finance charges on
                  $840 of total payments and returning $717 when the account
                  matures.
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#4298F0] flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-semibold">3</span>
                </div>
                <div className="text-sm leading-5 text-left text-gray-800">
                  <span className="font-semibold">
                    Self Visa Credit Card offers $0 intro annual fee:
                  </span>{" "}
                  The secured card charges $0 in the first year, $25 annually
                  after, and carries a transparent 27.99% variable APR tied to
                  the Prime Rate, with late and returned payment fees capped at
                  $15.
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#4298F0] flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-semibold">4</span>
                </div>
                <div className="text-sm leading-5 text-left text-gray-800">
                  <span className="font-semibold">
                    No hard credit pull to get started:
                  </span>{" "}
                  Opening a Credit Builder Account does not involve a hard
                  credit inquiry, and Self highlights high approval rates for
                  the Visa card with a refundable security interest starting at
                  $100.
                </div>
              </div>
            </div>

            <div className="text-left my-8">
              <Link href="/financial-solutions/self-credit-builder-account-visa-card-requirements">
                <Button className="bg-[#4298F0] hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                  View Requirements
                </Button>
              </Link>
            </div>

            <div className="my-8 text-left sm:text-left">
              <Image
                src="https://media.topfinanzas.com/images/kardtrust/self-credit-builder-account-visa-card.webp"
                alt="Self Credit Builder Account and Visa Card"
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

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  How the Self Credit Builder Account Works
                </h2>
                <p className="text-gray-800 mb-4 text-md leading-6 font-light text-left">
                  Self's Credit Builder Account operates like a secured
                  installment loan that helps you build payment history while
                  accumulating savings. When you activate the account, you
                  choose a monthly commitment, and Self lists options such as
                  $25, $35, $48, and $150 per month before you agree to a fixed
                  term. Funds are held in a certificate of deposit by partner
                  banks (Lead Bank, Sunrise Banks, N.A., or First Century Bank,
                  N.A., each Member FDIC) until the term ends. Because there is
                  no hard credit pull, most applicants can begin even with
                  limited history or a challenged score.
                </p>
                <p className="text-gray-800 mb-4 text-md leading-6 font-light text-left">
                  During the 24-month representative plan highlighted on the
                  pricing page, you pay $35 per month at a 15.69% fixed APR.
                  Payments total $840, including $123 in finance charges. At
                  maturity, Self returns $717 (the amount saved minus interest)
                  provided the account remains in good standing. You can also
                  close the account early with no prepayment penalty, though you
                  may receive less interest refund if you exit before the
                  savings fully accumulate.
                </p>
                <p className="text-gray-800 mb-4 text-md leading-6 font-light text-left">
                  FAQs published by Self confirm that the installment account
                  reports to all three major credit bureaus, can be paid off
                  early, and is not a traditional personal loan, which means you
                  cannot access the loan proceeds up front. Payments are
                  reported monthly, which supports score-building efforts as
                  long as you pay on time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Transitioning to the Secured Self Visa Credit Card
                </h2>
                <p className="text-gray-800 mb-4 text-md leading-6 font-light text-left">
                  Once you have progress in your Credit Builder Account, you can
                  apply for the Self Visa Credit Card. Self emphasizes that the
                  secured card is designed for building or rebuilding credit,
                  advertises high approval rates, and does not require a
                  traditional credit inquiry. Instead, you establish a
                  refundable security interest of at least $100, either by
                  transferring funds from your Credit Builder Account or by
                  using a debit card or bank account. That deposit becomes your
                  starting credit limit.
                </p>
                <p className="text-gray-800 mb-4 text-md leading-6 font-light text-left">
                  The card's pricing is straightforward: a $0 annual fee in the
                  first year, a $25 annual fee thereafter, a 27.99% variable APR
                  on purchases, a $3.50 instant debit funding fee, and late or
                  returned payment fees capped at $15. Self reports card
                  activity to all three credit bureaus. The company notes that
                  eligibility also considers income and expenses, and criteria
                  may change, so maintaining steady cash flow and a current
                  Credit Builder Account balance are important before you
                  request the card.
                </p>
                <p className="text-gray-800 mb-4 text-md leading-6 font-light text-left">
                  Using the Credit Builder Account and secured card together
                  provides both installment and revolving activity. Keeping
                  utilization below 30% and making payments by the due date are
                  key strategies Self highlights for supporting long-term score
                  improvements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Managing Costs and Staying Compliant
                </h2>
                <p className="text-gray-800 mb-4 text-md leading-6 font-light text-left">
                  The Truth in Lending Act requires a representative example,
                  which Self supplies with the $35 plan: borrowing activity
                  results in $123 of finance charges on $717 of savings returned
                  at term. For the secured card, carrying a $1,000 balance for
                  12 months at the 27.99% APR would generate roughly $279 in
                  interest if you made only minimum payments. Paying in full
                  every month avoids interest and preserves the card's value.
                </p>
                <p className="text-gray-800 mb-4 text-md leading-6 font-light text-left">
                  <strong>Risk warning:</strong> Self discloses that missing
                  monthly minimum payments may result in delinquent reporting to
                  credit bureaus and can reduce the amount returned from your
                  Credit Builder Account. Because fees may reduce the security
                  deposit, closing the card with an outstanding balance can
                  lower the refund you receive. Only commit to payment amounts
                  that fit your budget, and contact Self support at (877)
                  883-0999 if you anticipate hardship.
                </p>
                <p className="text-gray-800 mb-4 text-md leading-6 font-light text-left">
                  The Consumer Financial Protection Bureau recommends comparing
                  multiple credit-building tools. Review Self's current
                  agreements and disclosures at the official website before
                  applying, and remember that terms, rates, and program
                  availability can change based on your state of residence.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Tools and Resources to Maximize Results
                </h2>
                <p className="text-gray-800 mb-4 text-md leading-6 font-light text-left">
                  Self's mobile app and online dashboard allow you to track
                  payment history, monitor progress toward the $100 security
                  interest, and manage automatic transfers. Consider enabling
                  autopay to prevent late fees, reviewing spending against your
                  budget each month, and keeping utilization low once the card
                  is active. Watching both your VantageScore and FICO updates
                  can help you measure the impact of the program over time.
                </p>
                <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                    Learn more about building credit:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-red-800">
                    <li>
                      <Link
                        href="/financial-solutions/chime-credit-builder-visa-secured-card/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Chime Credit Builder Visa Secured Card Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/credit-card-types-benefits/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Credit Card Types and Benefits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        How Credit Card Interest Rates Affect Your Balance
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Final Thoughts
                </h2>
                <p className="text-gray-800 mb-4 text-md leading-6 font-light text-left">
                  The Self Credit Builder Account plus Visa Secured Card
                  ecosystem is built for U.S. consumers who need a structured
                  way to establish or rebuild credit. Transparent pricing,
                  automated reporting, and the combination of installment and
                  revolving trade lines make the program a compelling option
                  when paired with disciplined budgeting and timely payments.
                </p>
                <div className="text-left my-8">
                  <Link href="/financial-solutions/self-credit-builder-account-visa-card-requirements">
                    <Button className="bg-[#4298F0] hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Review Eligibility and Application Steps
                    </Button>
                  </Link>
                </div>
                <div className="text-left my-8">
                  <a href="https://www.self.inc/" rel="noopener noreferrer">
                    <Button className="bg-[#4298F0] hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Self to Start Your Application
                    </Button>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      <AIContentDisclaimer />
      <CompactFooter />
    </main>
  );
}
