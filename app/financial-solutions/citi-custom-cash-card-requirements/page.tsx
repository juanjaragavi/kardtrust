import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Citi Custom Cash® Card Requirements: Complete Eligibility Guide - KardTrust",
    description:
      "Learn about Citi Custom Cash® Card eligibility requirements, credit score needs, income verification, application process, and one-per-person restrictions. Discover if you qualify for this intelligent 5% cash back card.",
    keywords:
      "Citi Custom Cash requirements, Citi credit card eligibility, automatic cash back card application, Citi Custom Cash credit score, one card per person rule",
  };
}

export default function CitiCustomCashCardRequirementsPage() {
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
              Requirements for the Citi Custom Cash® Card
            </h1>

            <div id="square03" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Citi Custom Cash® Card represents one of the most
                innovative cash back credit cards available in the United
                States, offering automatic 5% cash back on your top spending
                category without requiring activation or enrollment. While Citi
                maintains reasonable eligibility criteria to ensure responsible
                credit usage, the card is generally accessible to applicants
                with good to excellent credit who demonstrate financial
                stability. Importantly, Citi enforces a strict
                one-card-per-person policy for the Custom Cash® Card and
                imposes a 48-month restriction on welcome bonus eligibility for
                those who have previously held the card or converted from
                another Citi product. Here's everything you need to know about
                qualifying, applying, and understanding the costs associated
                with this intelligent rewards card.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/citi-custom-cash-card-requirements.webp"
                  alt="Citi Custom Cash Card Requirements"
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
                  How to Qualify for the Citi Custom Cash® Card
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Good to Excellent Credit Score:
                      </span>{" "}
                      The Citi Custom Cash® Card typically requires a credit
                      score of 670 or higher (good credit range), though many
                      approved applicants report credit scores of 700+. Citi
                      evaluates your FICO® Score from major credit bureaus
                      (Experian, Equifax, TransUnion) along with your overall
                      credit profile including payment history, credit
                      utilization, length of credit history, recent credit
                      inquiries, and mix of credit accounts. A strong credit
                      history includes consistent on-time payment history with
                      no recent late payments or collections, credit utilization
                      below 30% of available limits (preferably below 10% for
                      optimal approval chances), at least 2-3 years of credit
                      history though longer is better, and a diverse mix of
                      credit accounts including revolving credit (credit cards)
                      and installment loans. Before applying, check your credit
                      reports for accuracy at AnnualCreditReport.com and dispute
                      any errors that could negatively impact your application.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        One Card Per Person Restriction:
                      </span>{" "}
                      Citi will only issue one Citi Custom Cash® Card account
                      per person—this is a strict, non-negotiable policy
                      enforced by Citi's systems. If you currently have a Custom
                      Cash® Card, you cannot apply for an additional one, even
                      if your first account is closed. If you've had a Custom
                      Cash® Card in the past (whether currently open or
                      previously closed), you cannot open a new Custom Cash®
                      Card account. This differs from many other credit cards
                      where you can apply for multiple accounts over time.
                      Additionally, you are not eligible for the $200 welcome
                      bonus if you received a new account bonus for a Citi
                      Custom Cash® Card in the past 48 months (4 years), or if
                      you converted another Citi credit card on which you earned
                      a new account bonus in the last 48 months into a Citi
                      Custom Cash® Card. This means even if you product-changed
                      from a different Citi card that had a bonus to the Custom
                      Cash, you're ineligible for the Custom Cash welcome offer
                      for 48 months from when you earned the original bonus.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        US Residency & Age Requirements:
                      </span>{" "}
                      You must be at least 18 years old (19 in Alabama and
                      Nebraska, 21 in Mississippi and Puerto Rico) and either a
                      US citizen, permanent resident with a valid Social
                      Security Number, or resident alien with an Individual
                      Taxpayer Identification Number (ITIN). Citi requires a
                      permanent US residential address—P.O. boxes are not
                      accepted as primary addresses, though they can be listed
                      as separate mailing addresses. Military personnel
                      stationed overseas can apply using their APO/FPO address.
                      You must have verifiable income or access to income
                      sufficient to demonstrate ability to repay credit
                      obligations in accordance with federal regulations and
                      Citi's underwriting standards.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Income Verification:
                      </span>{" "}
                      Citi requires applicants to provide their annual gross
                      income, which includes salary, wages, bonuses,
                      commissions, self-employment income, rental property
                      income, investment income, retirement distributions
                      (Social Security, pensions, 401(k) withdrawals), alimony,
                      child support, and other regular income sources that can
                      be verified. If you're 21 or older, you can include
                      household income you have reasonable access to and
                      expectation to use for credit card payments (such as a
                      spouse's or partner's income, even if you're not
                      employed). If you're under 21, federal regulations
                      restrict you to reporting only personal income or income
                      for which you're a co-signer or guarantor. While Citi
                      doesn't publish minimum income requirements for the Custom
                      Cash® Card, having stable, verifiable income
                      significantly improves approval chances and typically
                      results in higher initial credit limits.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Existing Citi Relationship:
                      </span>{" "}
                      While not required, having an existing relationship with
                      Citi (checking account, savings account, investment
                      account, mortgage, or other Citi credit card) may
                      positively influence your application, especially if you
                      maintain positive account history with no overdrafts,
                      returned payments, or delinquencies. Existing Citi
                      customers often report smoother application experiences
                      and may receive targeted offers with enhanced terms.
                      However, if you have negative history with Citi (closed
                      accounts due to delinquency, chargeoffs, or collections),
                      this will negatively impact your application and likely
                      result in automatic denial even if your credit scores are
                      sufficient. Citi also considers your existing Citi credit
                      card portfolio—holding multiple Citi cards with high
                      balances or utilization may reduce approval chances or
                      result in lower credit limits on new applications.
                    </div>
                  </div>
                </div>
              </section>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation for Application
                </h2>

                <div id="square04" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Personal Identification:
                      </span>{" "}
                      You'll need your full legal name exactly as it appears on
                      government-issued identification, date of birth, Social
                      Security Number or Individual Taxpayer Identification
                      Number (ITIN), current residential address with at least 2
                      years of address history, email address, and primary phone
                      number (mobile or landline). Citi may request additional
                      identity verification documents during the application
                      process, such as a government-issued photo ID (driver's
                      license, state ID, or passport) or recent utility bills,
                      bank statements, or lease agreements to confirm your
                      current address. Having these documents ready before
                      applying can expedite the approval process if additional
                      verification is required.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Income Documents:</span>{" "}
                      While not always required upfront, be prepared to provide
                      income verification documents if Citi requests them during
                      application review or within 30 days of account opening.
                      Acceptable documentation includes recent pay stubs (last
                      2-3 months showing year-to-date earnings), W-2 forms or
                      tax returns for the most recent year, bank statements
                      showing regular salary or business income deposits, Social
                      Security or retirement income statements (Form SSA-1099 or
                      pension statements), proof of investment income (1099-DIV,
                      1099-INT), or rental income documentation (lease
                      agreements, rental income statements). Self-employed
                      applicants may need to provide business tax returns
                      (Schedule C or 1120), profit and loss statements, or bank
                      statements for business accounts showing consistent
                      revenue. Having these documents organized and readily
                      available ensures smooth processing if verification is
                      requested.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Housing Information:
                      </span>{" "}
                      You'll need to indicate your housing status (own with
                      mortgage, own free and clear, rent, or live with family)
                      and provide your monthly housing payment amount (mortgage
                      or rent). If you own your home, Citi may ask about your
                      estimated home value and remaining mortgage balance as
                      part of their financial assessment and debt-to-income
                      ratio calculation. This information helps Citi evaluate
                      your overall financial stability, debt obligations, and
                      ability to manage additional credit responsibly. If you
                      live rent-free with family, indicate this accurately on
                      the application—do not inflate housing costs as this
                      constitutes fraud and can result in application denial or
                      account closure if discovered.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#233A79] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Employment Details:</span>{" "}
                      Provide your current employer name and address,
                      occupation/job title, years with current employer (and
                      total years in your profession), work phone number (if
                      available), and employment status (full-time, part-time,
                      self-employed, retired, student, homemaker). If you're
                      self-employed, provide your business name, type of
                      business/industry, and years in business. Retired
                      applicants should indicate retirement status and list all
                      income sources such as Social Security benefits, pension
                      payments, IRA or 401(k) distributions, investment income,
                      or rental property income. Students can list part-time
                      employment or indicate student status along with any
                      scholarship funds, parental support (if 21+), or personal
                      income sources. Military personnel should indicate their
                      branch of service, rank, and years of service.
                    </div>
                  </div>
                </div>
              </section>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs: APR, Fees & Charges
                </h2>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Annual Fee:</strong> $0 - The Citi Custom Cash® Card
                  charges no annual fee, making premium automatic 5% cash back
                  rewards accessible without ongoing yearly costs. You'll never
                  pay a fee simply to keep this card active, regardless of how
                  much or how little you use it.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Purchase APR:</strong> Variable APR of 17.99% - 27.99%
                  based on your creditworthiness. Your specific APR will be
                  disclosed in your approval notice and depends on factors
                  including your credit score, credit history, income, and
                  debt-to-income ratio. For example, if you have a $3,000
                  balance at 22.99% APR (midpoint) and make only minimum
                  payments, you'd pay approximately $689 in interest over one
                  year. To avoid interest charges entirely, pay your full
                  statement balance by the due date each month.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Balance Transfer APR:</strong> 0% intro APR for 18
                  months from account opening on balance transfers completed
                  within 4 months of account opening. After the intro period,
                  the variable APR of 17.99% - 27.99% applies to any remaining
                  balance. Balance transfer fee: Either $5 or 5% of the amount
                  of each transfer, whichever is greater. For example,
                  transferring $6,000 would incur a $300 fee (5% of $6,000), but
                  you'd save approximately $1,320 in interest charges over 18
                  months compared to leaving that balance on a card charging 22%
                  APR, resulting in a net savings of $1,020 even after the
                  transfer fee. Note: The intro APR applies only to balance
                  transfers, not purchases.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Cash Advance APR:</strong> Variable APR applies to
                  cash advances (typically 27.99% or higher based on your
                  creditworthiness). Cash advance fee: Either $10 or 5% of the
                  amount of each cash advance, whichever is greater. Cash
                  advances begin accruing interest immediately with no grace
                  period and are generally not recommended due to high costs.
                  Citi also considers ATM withdrawals, cash equivalents (money
                  orders, traveler's checks, prepaid gift cards), casino gaming
                  chips, wire transfers, and peer-to-peer payments as cash
                  advances or cash equivalents that don't earn rewards and incur
                  fees.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Foreign Transaction Fee:</strong> 3% of each
                  transaction in US dollars - The Citi Custom Cash® Card
                  charges a foreign transaction fee of 3% on purchases made
                  outside the United States or with foreign merchants. If you
                  travel internationally frequently or make regular foreign
                  purchases, consider pairing this card with a
                  no-foreign-transaction-fee card for international spending
                  while using the Custom Cash for domestic 5% category earning.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Late Payment Fee:</strong> Up to $40 if you fail to
                  make at least the minimum payment by the due date. The first
                  late payment fee is up to $30; subsequent late payments within
                  the next six billing cycles result in fees up to $40.
                  Additionally, late payments can trigger penalty APRs up to
                  29.99%, damage your credit score significantly (drops of
                  60-110 points for a single 30-day late payment), and result in
                  loss of promotional APR offers. Set up automatic payments
                  through Citi Online or the Citi Mobile® App to avoid late
                  fees and protect your credit score.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Returned Payment Fee:</strong> Up to $40 if your
                  payment is returned unpaid due to insufficient funds or closed
                  account. Ensure sufficient funds are available in your payment
                  account before the due date to avoid this fee. Returned
                  payments can also result in late fees, penalty APRs, and
                  negative credit reporting if the minimum payment is not made
                  by the due date.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Minimum Interest Charge:</strong> $0.50 per billing
                  cycle if you carry a balance and interest is assessed. Even if
                  your calculated interest would be less than $0.50, you'll be
                  charged the minimum $0.50 fee. This applies when you carry any
                  balance that accrues interest, including purchases, balance
                  transfers, or cash advances.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Other Fees:</strong> Citi charges no fees for
                  additional authorized user cards, account maintenance, or
                  standard balance inquiries. Expedited card shipping, emergency
                  card replacement in certain situations, and paper statement
                  fees (if you opt out of paperless statements) may apply.
                  Review the Citi Custom Cash® Pricing and Terms for a complete
                  list of potential fees and charges.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Step-by-Step Application Process
                </h2>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Step 1: Review Your Credit Profile</strong> - Before
                  applying, check your credit score and credit reports at
                  AnnualCreditReport.com to ensure accuracy. Verify your credit
                  score is at least 670 (preferably 700+) and review your credit
                  reports for errors, incorrect information, or negative items
                  that could impact your application. Dispute any errors with
                  the credit bureaus at least 30-60 days before applying. If
                  your credit needs improvement, consider waiting several months
                  while building positive payment history, reducing credit
                  utilization below 30%, and addressing any collections or
                  delinquencies before applying for premium rewards cards like
                  the Custom Cash.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Step 2: Verify Eligibility for Welcome Bonus</strong>{" "}
                  - Confirm you haven't received a new account bonus for a Citi
                  Custom Cash® Card in the past 48 months. Check if you've
                  converted another Citi credit card (on which you earned a new
                  account bonus in the last 48 months) into a Citi Custom Cash®
                  Card, as this also disqualifies you from the welcome offer.
                  Remember that Citi will only issue one Citi Custom Cash® Card
                  per person—if you currently have or previously had a Custom
                  Cash account (even if closed), you cannot apply for a new one.
                  If you're unsure about your Citi credit card history, review
                  your credit reports or contact Citi customer service before
                  applying.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Step 3: Gather Required Information</strong> - Collect
                  all necessary information and documents including your Social
                  Security Number or ITIN, current and previous addresses (2
                  years history), annual gross income documentation, employer
                  information and contact details, monthly housing payment
                  amount, and identification documents. If you have an existing
                  Citi account, have your Citi username and password ready to
                  sign in during the application, which may pre-fill some fields
                  with information from your profile and potentially improve
                  approval chances if you have a positive relationship with
                  Citi.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Step 4: Complete the Online Application</strong> -
                  Visit the official Citi Custom Cash® Card page and click
                  "Apply Now." You can sign in to your existing Citi account or
                  apply as a guest. Complete all required fields accurately,
                  including personal information, income details, housing
                  information, and employment data. Double-check all entries for
                  accuracy before submitting, as errors or inconsistencies can
                  delay processing, trigger requests for additional
                  documentation, or result in denial. The application typically
                  takes 5-10 minutes to complete. Citi uses secure encryption to
                  protect your personal and financial information throughout the
                  application process.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Step 5: Await Application Decision</strong> - Many
                  applicants with strong credit profiles receive instant
                  approval or denial decisions within 30-60 seconds of
                  submitting their application. If your application requires
                  further review, Citi will notify you that a decision will be
                  provided within 7-10 business days. You can check your
                  application status by calling Citi's automated application
                  status line at 1-800-362-0526 or by signing into your Citi
                  account online. If approved, you'll receive notification of
                  your credit limit, APR, and account terms. If additional
                  verification is needed, Citi will contact you by phone, email,
                  or mail with specific document requests—respond promptly to
                  avoid application expiration (typically 30 days).
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-4 text-left">
                  <strong>Step 6: Receive and Activate Your Card</strong> - Upon
                  approval, your Citi Custom Cash® Card will arrive by standard
                  mail within 7-10 business days. Once received, activate your
                  card immediately by calling the activation phone number on the
                  sticker attached to the card, online through Citi Online, or
                  via the Citi Mobile® App. Set up your online account access
                  if you're not already a Citi customer, enroll in Citi Online
                  for online account management, enable paperless statements to
                  reduce clutter and help the environment, set up autopay or
                  payment reminders to avoid late fees, and explore your
                  ThankYou® Points account for reward redemption options.
                  Download the Citi Mobile® App for convenient account
                  management, instant transaction notifications, mobile check
                  deposit, and secure messaging.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      Q: What credit score do I need to be approved for the Citi
                      Custom Cash® Card?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      A: While Citi doesn't publish official credit score
                      requirements, the Custom Cash® Card typically requires a
                      credit score of 670 or higher (good credit range). Most
                      approved applicants report credit scores of 700+. Citi
                      considers your entire credit profile, including payment
                      history (especially recent payment behavior), credit
                      utilization ratios, length of credit history, recent
                      credit inquiries, and types of credit accounts. Having a
                      strong credit profile beyond just the score—such as no
                      recent late payments, utilization below 30%, and several
                      years of credit history—significantly improves your
                      approval chances and may result in a higher credit limit
                      and better APR terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      Q: Can I get the $200 bonus if I already have another Citi
                      credit card?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      A: It depends on your specific situation. You can be
                      approved for the Citi Custom Cash® Card if you have other
                      Citi credit cards (such as the Citi Double Cash® or Citi
                      Premier® Card), as long as you don't currently have or
                      haven't previously had a Citi Custom Cash® Card (remember
                      the one-per-person rule). However, you won't be eligible
                      for the $200 welcome bonus if you received a new account
                      bonus for a Citi Custom Cash® Card in the past 48 months,
                      or if you converted another Citi credit card (on which you
                      earned a new account bonus in the last 48 months) into a
                      Citi Custom Cash® Card. This 48-month restriction is
                      specific to the Custom Cash product and its bonus—bonuses
                      earned on other Citi cards don't affect your eligibility
                      for the Custom Cash bonus unless you product-changed that
                      card to the Custom Cash.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      Q: How does the automatic 5% category selection work? Do I
                      need to activate anything?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      A: The automatic category selection is completely
                      hands-off and requires no activation, enrollment, or
                      manual intervention. Each billing cycle, Citi's systems
                      automatically analyze your spending across the 10 eligible
                      categories (restaurants, gas stations, grocery stores,
                      select travel, select transit, select streaming services,
                      drugstores, home improvement stores, fitness clubs, live
                      entertainment) and identify which category had your
                      highest spending. You automatically earn 5% cash back (5
                      ThankYou® Points per $1) on up to $500 spent in that top
                      category, and 1% cash back on all other purchases. You can
                      view which category is currently earning 5% in the Citi
                      Mobile® App or online account, but you don't need to
                      select or activate anything—it happens automatically in
                      the background based on your actual spending behavior.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      Q: Can I redeem my ThankYou® Points for airline miles or
                      hotel points like with other rewards programs?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      A: No, ThankYou® Points earned on the Citi Custom Cash®
                      Card cannot be transferred to airline or hotel loyalty
                      programs. Point transfers to partners like Emirates,
                      Singapore Airlines, JetBlue, and Wyndham Hotels are
                      exclusive to Citi's premium ThankYou® Points-earning
                      cards such as the Citi Premier® Card and Citi Prestige®
                      Card. However, you can redeem Custom Cash points for cash
                      back (statement credit, direct deposit, or check), gift
                      cards, travel bookings through Citi Travel, merchandise,
                      Shop with Points at Amazon.com, student loan payments,
                      mortgage payments, and charitable donations. If you want
                      transfer capabilities, consider pairing the Custom Cash
                      with the Citi Premier® Card—points from both cards pool
                      into your ThankYou® account, and once pooled, you can
                      transfer the combined balance to airline/hotel partners
                      using the Premier's transfer capabilities.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      Q: What happens if I close my Citi Custom Cash® Card and
                      want to reopen it later?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      A: Due to Citi's strict one-card-per-person policy for the
                      Custom Cash® Card, once you close your Citi Custom Cash®
                      Card account, you cannot reopen it or apply for a new Citi
                      Custom Cash® Card in the future. This restriction is
                      permanent and applies even years after closing your
                      original account. Before closing your Custom Cash account,
                      consider whether you might want the card in the future, as
                      you'll lose the ability to have this product forever. If
                      you're considering closing the card due to wanting
                      different benefits, explore product change options with
                      Citi—you might be able to convert your Custom Cash to a
                      different Citi card (like the Double Cash® or
                      Simplicity®) while preserving your credit history and
                      keeping the account open, though you'd lose the Custom
                      Cash benefits. Contact Citi customer service to discuss
                      product change alternatives before closing the account
                      permanently.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      Q: Does the 0% intro APR apply to purchases or only
                      balance transfers?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      A: The 0% intro APR applies only to balance transfers
                      completed within 4 months of account opening for 18
                      months. The intro rate does not apply to purchases—new
                      purchases are subject to the standard variable APR of
                      17.99% - 27.99% from day one. However, you can avoid
                      interest on purchases entirely by paying your full
                      statement balance by the due date each month, which
                      provides an interest-free grace period on new purchases.
                      If you carry a balance after making a balance transfer,
                      interest will be charged on your purchases unless you pay
                      your entire balance (including balance transfers and new
                      purchases) by the due date each month. For optimal
                      results, focus on paying down your transferred balance
                      during the 18-month intro period while paying new
                      purchases in full monthly to avoid interest charges
                      altogether.
                    </p>
                  </div>
                </div>
              </section>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  ⚠️ Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative APR Example:</strong> The Citi Custom
                  Cash® Card has a variable APR of 17.99% - 27.99% for
                  purchases based on your creditworthiness. If you carry a
                  balance of $3,000 at the midpoint APR of 22.99% and make only
                  minimum payments, you would pay approximately $689 in interest
                  charges over one year. To avoid interest charges entirely, pay
                  your full statement balance by the due date each month.
                  Balance transfer intro APR: 0% for 18 months on transfers
                  completed within 4 months of account opening; thereafter
                  17.99% - 27.99% variable APR. Balance transfer fee: $5 or 5%
                  of each transfer, whichever is greater.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Credit Impact:</strong> Applying for a credit card
                  results in a hard inquiry on your credit report, which may
                  temporarily lower your credit score by 2-5 points. Opening a
                  new credit account affects your average age of accounts and
                  can impact your score in the short term. However, responsible
                  use (on-time payments, low utilization below 30%) typically
                  improves your credit score over 6-12 months through positive
                  payment history and increased available credit.
                </p>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Risk Warning:</strong> Credit cards are a form of
                  borrowing. Missing payments can damage your credit score
                  significantly (drops of 60-110 points for a single 30-day late
                  payment), result in late fees up to $40, and trigger penalty
                  APRs up to 29.99%. High credit utilization (using more than
                  30% of your available credit) can negatively impact your
                  credit score. Only apply for credit if you can manage
                  repayment responsibly. The 0% intro APR is temporary and
                  applies only to balance transfers—plan to pay off balances
                  before the 18-month promotional period ends to avoid interest
                  charges at the standard variable APR.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Product Restrictions:</strong> Citi will only issue
                  one Citi Custom Cash® Card account per person. You are not
                  eligible for the welcome bonus if you received a new account
                  bonus for a Citi Custom Cash® Card in the past 48 months, or
                  if you converted another Citi credit card (on which you earned
                  a new account bonus in the last 48 months) into a Citi Custom
                  Cash® Card. Subject to credit approval. This content is for
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
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
