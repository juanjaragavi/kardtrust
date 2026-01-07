import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Blue Cash Preferred® Card Requirements: Eligibility and Application Guide - KardTrust",
    description:
      "Learn about Blue Cash Preferred® Card from American Express requirements, eligibility criteria, credit score expectations, required documentation, and the complete application process. Discover if you qualify for this premium cash back card.",
    keywords:
      "Blue Cash Preferred requirements, Amex eligibility, American Express application, credit card requirements, good credit cards, cash back card eligibility, Amex application process, credit score requirements",
  };
}

export default function BlueCashPreferredRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for the Blue Cash Preferred® Card from American
              Express
            </h1>

            <div id="square03" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Blue Cash Preferred® Card from American Express is designed
                for consumers with good to excellent credit who want to maximize
                cash back rewards on everyday spending. Here's everything you
                need to know about qualifying for this premium cash back card,
                including eligibility criteria, credit score expectations,
                required documentation, and the complete application process.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/blue-cash-preferred-card-from-american-express-requirements.webp"
                  alt="Blue Cash Preferred Card Requirements"
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

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  How to Qualify for the Blue Cash Preferred® Card
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Age and Residency Requirements:
                      </span>{" "}
                      You must be at least 18 years old to apply for the Blue
                      Cash Preferred Card. You must be a U.S. citizen, U.S.
                      permanent resident, or have a valid U.S. work visa with a
                      U.S. residential address. American Express does not accept
                      P.O. boxes as primary addresses. You must also have a
                      valid Social Security Number (SSN) or Individual Taxpayer
                      Identification Number (ITIN) for identity verification and
                      credit reporting purposes. International students studying
                      in the U.S. may apply if they meet income and credit
                      history requirements.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit Score Expectations:
                      </span>{" "}
                      The Blue Cash Preferred Card typically requires good to
                      excellent credit, generally corresponding to FICO scores
                      of 670 or higher, with the best approval odds for scores
                      above 700. American Express is known for conducting
                      thorough creditworthiness evaluations that consider more
                      than just your credit score, including payment history,
                      credit utilization, length of credit history, recent
                      credit inquiries, and existing debt obligations. While
                      there's no published minimum credit score requirement,
                      applicants with excellent credit (750+) have the highest
                      approval rates and may receive more favorable terms.
                      Recent negative marks such as late payments, collections,
                      charge-offs, or bankruptcies may significantly reduce
                      approval odds or result in denial.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Income and Employment Verification:
                      </span>{" "}
                      You must have a verifiable source of income to demonstrate
                      your ability to make monthly payments on the card.
                      American Express does not publish a minimum income
                      requirement, but applicants should have sufficient income
                      to comfortably manage the card's annual fee and potential
                      spending. Acceptable income sources include employment
                      income (salary, wages, bonuses, commissions),
                      self-employment income, business income, retirement income
                      (Social Security, pension, 401(k) distributions),
                      investment income (dividends, interest, rental income), or
                      alimony and child support (if you choose to include it).
                      If you're under 21, the Credit CARD Act requires that you
                      demonstrate independent income or have a co-signer.
                      American Express may verify your income through pay stubs,
                      tax returns, bank statements, or third-party verification
                      services.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit History and Payment Patterns:
                      </span>{" "}
                      American Express carefully reviews your credit history,
                      looking for consistent on-time payment patterns across all
                      credit obligations. They evaluate the length of your
                      credit history—longer histories with established accounts
                      improve approval odds. American Express also considers
                      your credit utilization ratio (the percentage of available
                      credit you're using); lower utilization rates (ideally
                      below 30%) indicate responsible credit management. Recent
                      credit inquiries are also assessed—multiple recent hard
                      inquiries may suggest credit-seeking behavior that could
                      reduce approval odds. If you have limited credit history,
                      consider starting with American Express's entry-level
                      cards like the Blue Cash Everyday® Card before upgrading
                      to the Blue Cash Preferred.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Existing American Express Relationship:
                      </span>{" "}
                      If you currently have an American Express card in good
                      standing, your approval odds may be higher due to your
                      established relationship with the company. American
                      Express values existing customers who demonstrate
                      responsible account management. However, be aware that
                      American Express enforces certain restrictions: You cannot
                      hold multiple versions of the same card simultaneously,
                      and you may not be eligible for the welcome bonus if
                      you've had the card or received a welcome bonus on a Blue
                      Cash product within the past 24 months. Check American
                      Express's current bonus eligibility rules before applying.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Debt-to-Income Ratio Considerations:
                      </span>{" "}
                      While American Express doesn't publicly disclose a maximum
                      debt-to-income (DTI) ratio, they assess your ability to
                      manage additional credit responsibly. A DTI ratio below
                      40% is generally favorable for credit card approvals,
                      though lower ratios (under 30%) provide the best approval
                      odds. American Express calculates your DTI by dividing
                      your monthly debt obligations by your gross monthly
                      income. High DTI ratios suggest financial stress and may
                      result in application denial or lower credit limits even
                      with good credit scores.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation for Application:
                </h2>

                <div id="square04" data-topads data-topads-size="square"></div>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Personal Information:
                      </span>{" "}
                      Provide your full legal name (as it appears on your
                      government-issued ID), date of birth, Social Security
                      Number or ITIN, current residential address (physical
                      address, not P.O. box), mailing address if different from
                      residential, email address, and phone number (mobile
                      preferred). American Express uses this information for
                      identity verification, fraud prevention, and credit bureau
                      reporting. Ensure all information is accurate and matches
                      your credit report to avoid application delays or denials.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Employment and Income Details:
                      </span>{" "}
                      Report your current employment status (employed,
                      self-employed, retired, student, unemployed), employer
                      name and contact information (if employed), job title or
                      occupation, length of employment at current position, and
                      gross annual income (before taxes and deductions). Include
                      all sources of income if you have multiple income streams.
                      Be honest and accurate—American Express may verify your
                      income, and misrepresenting income can result in
                      application denial, account closure, or legal
                      consequences. If you're self-employed, be prepared to
                      provide additional documentation such as tax returns or
                      profit and loss statements if requested during the
                      verification process.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Housing and Monthly Expenses:
                      </span>{" "}
                      Indicate your housing status (own, rent, live with family,
                      other), monthly housing payment amount (mortgage or rent),
                      and length of time at your current address. American
                      Express uses this information to assess your financial
                      stability and debt-to-income ratio. Stable housing history
                      (2+ years at current address) and reasonable housing costs
                      relative to your income improve your approval odds. If
                      you've moved recently, you may be asked to provide your
                      previous address as well.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Authorization and Consent:
                      </span>{" "}
                      By applying, you authorize American Express to obtain your
                      credit report from one or more credit bureaus (Experian,
                      TransUnion, Equifax) through a hard credit inquiry. This
                      hard inquiry will temporarily impact your credit score by
                      a few points and will remain on your credit report for up
                      to 2 years. You also authorize American Express to verify
                      your income, employment, and identity through third-party
                      databases and verification services. Review the Privacy
                      Policy and Terms and Conditions carefully before
                      submitting your application.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs: APR, Fees, and Charges
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Variable APR Structure:
                      </span>{" "}
                      The Blue Cash Preferred Card charges a variable Annual
                      Percentage Rate (APR) ranging from 19.24% to 29.99% on
                      purchases and balance transfers, based on your
                      creditworthiness. The APR is variable, meaning it can
                      change when the U.S. Prime Rate changes. As of October
                      2025, the Prime Rate is approximately 7.5%, and American
                      Express adds a margin determined by your credit profile
                      (typically 11.74% to 22.49%). Applicants with excellent
                      credit scores (750+) and strong payment histories
                      typically receive APRs at the lower end of the range,
                      while those with fair credit or limited credit histories
                      may receive higher APRs. Your specific APR will be
                      disclosed in your approval notification and is subject to
                      periodic adjustment based on Prime Rate changes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Annual Fee:</span> The
                      Blue Cash Preferred Card has a $0 introductory annual fee
                      for the first year, then $95 per year thereafter. The
                      annual fee is charged to your account annually and is
                      non-refundable once charged, even if you close your
                      account. However, if you spend just $125 per month at
                      supermarkets ($1,500/year), you'll earn $90 in cash
                      back—nearly covering the fee. When combined with spending
                      in other bonus categories (streaming, gas/transit), most
                      active cardholders earn significantly more than the $95
                      annual fee. Calculate your expected annual cash back
                      earnings before applying to ensure the card delivers
                      positive net value for your spending patterns.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Late Payment and Returned Payment Fees:
                      </span>{" "}
                      If you fail to make at least the minimum payment by the
                      due date, American Express charges a late payment fee of
                      up to $40 (amount varies based on your balance and payment
                      history). Late payments can also result in penalty APRs,
                      negative impacts to your credit score, and potential
                      account restrictions. Similarly, if your payment is
                      returned unpaid by your bank due to insufficient funds or
                      closed accounts, you'll be charged a returned payment fee
                      of up to $40. To avoid these fees and protect your credit
                      score, set up automatic payments for at least the minimum
                      amount due, or better yet, pay your balance in full each
                      month to avoid interest charges entirely.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Cash Advance and Foreign Transaction Fees:
                      </span>{" "}
                      If you use your Blue Cash Preferred Card for cash advances
                      (at ATMs, bank branches, or through convenience checks),
                      you'll be charged a cash advance fee equal to the greater
                      of $10 or 5% of each cash advance amount. Cash advances
                      also begin accruing interest immediately at the cash
                      advance APR with no grace period, making them an expensive
                      way to access cash. For transactions made in foreign
                      currencies or with merchants located outside the United
                      States, American Express charges a foreign transaction fee
                      of 2.7% of the transaction amount after conversion to U.S.
                      dollars. If you travel internationally frequently,
                      consider using a no-foreign-transaction-fee card for those
                      purchases to avoid these charges.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Grace Period and Interest Calculations:
                      </span>{" "}
                      American Express provides a grace period of at least 25
                      days between the end of a billing cycle and the payment
                      due date for purchases. This means you won't be charged
                      interest on new purchases if you pay your new balance in
                      full by the due date each billing cycle. The grace period
                      only applies to purchases, not cash advances or balance
                      transfers. If you carry a balance from one month to the
                      next, you'll lose the grace period and pay interest on new
                      purchases from the transaction date. To maximize the value
                      of your cash back rewards and avoid interest charges,
                      always pay your balance in full each month.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/cashback-credit-cards/">
                    <Image
                      src="https://media.topfinanzas.com/images/kardtrust/kardtrust-credit-cards-banner-ad.webp"
                      alt="Learn About Cash Back Credit Cards"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Benefits and Features Summary
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Before applying, review the key benefits that make the Blue
                  Cash Preferred Card valuable for qualified applicants:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Exceptional Cash Back Rates:
                      </span>{" "}
                      6% cash back at U.S. supermarkets (up to $6,000/year, then
                      1%), 6% on select U.S. streaming subscriptions, 3% at U.S.
                      gas stations and on transit, and 1% on all other
                      purchases. These category rates are among the highest
                      available in the U.S. credit card market.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Welcome Bonus:</span> Earn
                      a $250 statement credit after you spend $3,000 in
                      purchases within your first 6 months of card membership.
                      This bonus provides substantial first-year value and helps
                      offset the annual fee.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Purchase Protection:
                      </span>{" "}
                      Coverage against accidental damage or theft for eligible
                      purchases within 90 days (up to $1,000 per occurrence,
                      $50,000 per year), plus extended warranty coverage adding
                      up to 1 additional year to original manufacturer
                      warranties of 5 years or less.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        American Express Benefits:
                      </span>{" "}
                      Access to Amex Experiences (presale tickets and exclusive
                      events), car rental loss and damage insurance, Global
                      Assist hotline when traveling 100+ miles from home, and
                      American Express's renowned customer service and fraud
                      protection.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Step-by-Step Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Applying for the Blue Cash Preferred Card is a straightforward
                  online process that typically takes 5-10 minutes. Here's how
                  to complete your application successfully:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">1</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Review Your Credit Report:
                      </span>{" "}
                      Before applying, obtain a free copy of your credit report
                      from AnnualCreditReport.com (the official site authorized
                      by Federal law) and review it for accuracy. Check your
                      FICO score through your existing credit card or bank (many
                      provide free score access). Ensure your credit score is in
                      the good to excellent range (670+) for the best approval
                      odds. If you find errors on your credit report, dispute
                      them with the credit bureaus before applying to improve
                      your credit profile.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">2</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Calculate Your Expected Value:
                      </span>{" "}
                      Before applying, honestly assess your monthly spending in
                      the bonus categories. Calculate your expected annual cash
                      back earnings: multiply your annual supermarket spending
                      (up to $6,000) by 6%, streaming subscriptions by 6%,
                      gas/transit spending by 3%, and other purchases by 1%.
                      Subtract the $95 annual fee (after the first year) to
                      determine your net annual value. If the net value is
                      positive and substantial, proceed with the application. If
                      your grocery spending is under $1,500 annually, consider
                      the no-annual-fee Blue Cash Everyday® Card instead.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">3</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Gather Required Information:
                      </span>{" "}
                      Before starting the application, collect all necessary
                      information: your Social Security Number or ITIN, current
                      residential address, phone number and email address,
                      employment information (employer name, job title, length
                      of employment), gross annual income from all sources,
                      monthly housing payment amount (mortgage or rent), and
                      banking information if you want to set up automatic
                      payments. Having this information ready will streamline
                      the application process and reduce the risk of errors.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">4</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Visit the American Express Website:
                      </span>{" "}
                      Navigate to americanexpress.com and search for the "Blue
                      Cash Preferred Card" or click "Credit Cards" in the main
                      navigation menu. Review the current welcome bonus offer
                      and terms carefully, as offers can change. Click the
                      "Apply Now" button on the Blue Cash Preferred Card page to
                      begin your secure online application. Ensure you're on the
                      official American Express website (check for the secure
                      "https://" and padlock icon in your browser) to protect
                      your personal information.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">5</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Complete the Online Application:
                      </span>{" "}
                      Fill out the secure application form with accurate,
                      truthful information. Provide your full legal name, date
                      of birth, SSN/ITIN, residential address, contact
                      information, employment details, and income information.
                      Review each section carefully for typos or errors before
                      proceeding. The application will ask about your housing
                      status and monthly housing costs, which American Express
                      uses to calculate your debt-to-income ratio. Be honest
                      about your income—overstating income is considered fraud
                      and can result in application denial, account closure, or
                      legal consequences. The online application typically takes
                      5-10 minutes to complete.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">6</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Review Terms and Submit:
                      </span>{" "}
                      Carefully review the Terms and Conditions, Privacy Policy,
                      and pricing information (Schumer Box) provided during the
                      application process. Pay particular attention to the APR
                      range, annual fee, grace period, and late payment fees.
                      Review the welcome bonus terms to understand the spending
                      requirement and timeframe. Check the box(es) authorizing
                      American Express to obtain your credit report (hard
                      inquiry) and verify your information. Once you're
                      confident all information is accurate and you understand
                      the terms, click "Submit Application" to send your
                      application for review.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">7</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Receive Instant Decision or Pending Review:
                      </span>{" "}
                      In many cases, American Express provides an instant
                      decision within seconds of submitting your application. If
                      approved instantly, you'll see your approval notification
                      on screen, including your credit limit and APR. Some
                      applications require additional review and will show a
                      "pending" status. If your application is pending, American
                      Express will notify you via email within 5-7 business days
                      with a decision or request for additional documentation.
                      If denied, you'll receive an adverse action letter within
                      30 days explaining the reasons for denial, which often
                      include credit score, income concerns, or debt-to-income
                      ratio issues.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#180053] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">8</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Activate Your Card and Start Earning:
                      </span>{" "}
                      If approved, your Blue Cash Preferred Card will arrive via
                      USPS within 7-10 business days. Some applicants may
                      receive instant card numbers for immediate online use
                      while waiting for the physical card. Once you receive your
                      card, activate it by calling the phone number on the
                      activation sticker, using the Amex mobile app, or
                      activating online at americanexpress.com. Set up your
                      online account to manage payments, track rewards, and
                      monitor transactions. Consider setting up automatic
                      payments to avoid late fees and protect your credit score.
                      Start using your card for eligible bonus category
                      purchases to begin earning cash back and working toward
                      your $250 welcome bonus.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6 my-8">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      What credit score do I need to be approved for the Blue
                      Cash Preferred Card?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      While American Express doesn't publish a minimum credit
                      score requirement, the Blue Cash Preferred Card typically
                      requires good to excellent credit, generally corresponding
                      to FICO scores of 670 or higher. Applicants with scores
                      above 700 have the best approval odds and may receive more
                      favorable APR terms. If your credit score is below 670,
                      consider improving your credit profile before applying or
                      explore credit-building alternatives.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Can I upgrade from the Blue Cash Everyday to the Blue Cash
                      Preferred?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      Yes, American Express allows existing Blue Cash Everyday
                      cardholders to upgrade to the Blue Cash Preferred Card,
                      typically through an online request or by calling customer
                      service. However, product upgrades may not be eligible for
                      the welcome bonus offer. If you're considering upgrading
                      and want the welcome bonus, you may need to apply for a
                      new card as a separate account (if eligible under Amex's
                      bonus eligibility rules). Contact American Express to
                      discuss your upgrade options and bonus eligibility before
                      making a decision.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Does the 6% supermarket cash back include Walmart, Target,
                      or warehouse clubs?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      No, the 6% cash back rate applies specifically to U.S.
                      supermarkets, which includes traditional grocery stores
                      like Kroger, Safeway, Whole Foods Market, and regional
                      supermarket chains. It does not include superstores
                      (Walmart, Target), warehouse clubs (Costco, Sam's Club,
                      BJ's), convenience stores, or specialty food stores. These
                      merchants earn 1% cash back. To maximize your rewards, use
                      the Blue Cash Preferred at traditional supermarkets and
                      use other cards for warehouse club or superstore
                      purchases.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      How long does it take to receive my card after approval?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      If approved, your Blue Cash Preferred Card typically
                      arrives within 7-10 business days via USPS standard mail.
                      Some applicants may receive instant card numbers through
                      the Amex mobile app or online account for immediate use on
                      online purchases while waiting for the physical card. If
                      your card doesn't arrive within 10 business days, contact
                      American Express customer service to check the delivery
                      status or request a replacement card.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Will applying for this card hurt my credit score?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      Yes, applying for the Blue Cash Preferred Card will result
                      in a hard credit inquiry, which can temporarily lower your
                      credit score by a few points (typically 5-10 points). This
                      inquiry remains on your credit report for up to 2 years
                      but has less impact over time. However, if approved and
                      used responsibly (paying on time, maintaining low
                      utilization), the card can help improve your credit score
                      over time by increasing your available credit and building
                      positive payment history. Avoid applying for multiple
                      credit cards within a short period to minimize cumulative
                      hard inquiry impacts.
                    </p>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Important Regulatory Disclosures
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-800 leading-5">
                    <span className="font-semibold">
                      Representative APR Example:
                    </span>{" "}
                    19.24%-29.99% variable APR on purchases and balance
                    transfers. Your actual APR will be based on your
                    creditworthiness and determined at account opening. APR will
                    vary with the market based on the U.S. Prime Rate. For
                    example, if you have an APR of 24.99% and carry a balance of
                    $1,000, you would pay approximately $250 in interest charges
                    over one year if only making minimum payments.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-800 leading-5">
                    <span className="font-semibold">Annual Fee Notice:</span>{" "}
                    This card has a $0 introductory annual fee for the first
                    year, then $95 per year thereafter. Calculate your expected
                    cash back earnings in the bonus categories to ensure the
                    annual fee is justified by the rewards you'll earn. If you
                    spend less than $1,500 annually at supermarkets, the
                    no-annual-fee Blue Cash Everyday® Card may be a better
                    value.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                  <p className="text-sm text-gray-800 leading-5">
                    <span className="font-semibold">Important Warning:</span>{" "}
                    Missing payments or carrying balances will result in
                    interest charges that can significantly outweigh any cash
                    back rewards earned. Late payments can damage your credit
                    score, result in late payment fees up to $40, and may
                    trigger penalty APRs. To maximize the value of this card,
                    pay your balance in full each billing cycle to avoid
                    interest charges. Cash back rewards are most valuable when
                    you practice responsible credit management and avoid debt
                    accumulation.
                  </p>
                </div>

                <p className="text-xs text-gray-600 italic mb-6 text-left">
                  <span className="font-semibold">Legal Disclaimer:</span> This
                  content is for informational purposes only and does not
                  constitute financial, legal, or tax advice. Credit card terms,
                  rates, fees, and rewards are subject to change without notice
                  and may vary based on your creditworthiness, application
                  details, and account management. The APR, credit limit, and
                  specific terms you receive will be disclosed in your approval
                  notification and cardholder agreement. Always carefully review
                  the Schumer Box (pricing information), Terms and Conditions,
                  and Privacy Policy provided by American Express during the
                  application process and before accepting a card offer. We
                  strongly recommend consulting with a qualified financial
                  advisor, credit counselor, or tax professional to determine if
                  this card aligns with your personal financial situation,
                  goals, and creditworthiness. American Express is a federally
                  registered trademark of American Express Company.
                </p>

                <div className="text-left my-8">
                  <a
                    href="https://www.americanexpress.com/us/credit-cards/card/blue-cash-preferred"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#180053] hover:bg-[#2a0080] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Apply Now at American Express
                    </Button>
                  </a>
                </div>
              </section>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
