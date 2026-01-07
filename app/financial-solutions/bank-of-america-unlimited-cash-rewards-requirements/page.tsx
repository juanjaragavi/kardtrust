import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Bank of America® Unlimited Cash Rewards Requirements: Complete Application Guide - KardTrust",
    description:
      "Learn about Bank of America® Unlimited Cash Rewards eligibility requirements, credit score needs, income verification, application process, and documentation. Discover if you qualify for unlimited 1.5% cash back with no annual fee.",
    keywords:
      "Bank of America Unlimited Cash Rewards requirements, BofA credit card eligibility, cash back card application, Bank of America credit requirements, Preferred Rewards enrollment, credit card approval",
  };
}

export default function BankOfAmericaUnlimitedCashRewardsRequirementsPage() {
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
              Requirements for the Bank of America® Unlimited Cash Rewards
              Credit Card
            </h1>

            <div id="square03" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Bank of America® Unlimited Cash Rewards credit card offers
                unlimited 1.5% cash back on every purchase with no annual fee,
                making it an attractive option for consumers seeking
                straightforward rewards. However, Bank of America maintains
                specific eligibility criteria to ensure applicants can
                responsibly manage this credit product. Here's everything you
                need to know about qualifying, applying, and understanding the
                costs associated with the Bank of America® Unlimited Cash
                Rewards card.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/bank-of-america-unlimited-cash-rewards-requirements.webp"
                  alt="Bank of America Unlimited Cash Rewards Requirements"
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
                  How to Qualify for the Bank of America® Unlimited Cash
                  Rewards
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Good to Excellent Credit Score:
                      </span>{" "}
                      The Bank of America® Unlimited Cash Rewards card
                      typically requires a credit score of 690 or higher for
                      approval, though many approved applicants have scores in
                      the 720+ range. Bank of America evaluates your FICO®
                      Score and comprehensive credit report from major credit
                      bureaus (Experian, Equifax, TransUnion) to assess
                      creditworthiness. A strong credit history demonstrates
                      responsible credit management including consistent on-time
                      payments, low credit utilization (ideally under 30% of
                      available credit limits), a reasonable number of credit
                      inquiries, and a healthy mix of credit accounts (credit
                      cards, auto loans, mortgages, etc.). Before applying,
                      review your credit reports for accuracy at
                      AnnualCreditReport.com and dispute any errors that could
                      negatively impact your application.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Age and Legal Status:
                      </span>{" "}
                      You must be at least 18 years old to apply independently
                      (or 21 in some states per state law requirements).
                      Applicants aged 18-20 must demonstrate independent income
                      or have a creditworthy co-signer in states that allow it.
                      You must be a U.S. citizen, permanent resident with a
                      green card, or have valid work authorization with a U.S.
                      residential address. International students with valid
                      student visas and Social Security Numbers may qualify if
                      they meet other eligibility requirements and can
                      demonstrate sufficient income. Bank of America requires a
                      valid Social Security Number or Individual Taxpayer
                      Identification Number (ITIN) for identity verification and
                      credit reporting purposes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Sufficient Income:</span>{" "}
                      While Bank of America doesn't publish a specific minimum
                      income requirement, you must demonstrate verifiable income
                      sufficient to manage credit responsibly and make required
                      minimum payments. Most approved applicants report annual
                      incomes of $25,000 or higher, though income requirements
                      vary based on your overall financial profile, existing
                      debt obligations, and housing costs. You may report total
                      household income if you're at least 21 years old and have
                      reasonable access to those funds (such as spousal income),
                      which can strengthen your application if your personal
                      income is modest. Bank of America evaluates your
                      debt-to-income ratio—your total monthly debt payments
                      divided by monthly income—to ensure you can comfortably
                      handle additional credit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Clean Credit History:
                      </span>{" "}
                      Bank of America carefully reviews your credit history for
                      negative marks including recent late payments (especially
                      30+ days late), charge-offs, collections, bankruptcies,
                      foreclosures, or repossessions. Recent negative marks
                      significantly reduce approval odds, while older negative
                      items (7+ years) have diminishing impact as positive
                      payment history accumulates. If you have recent negative
                      marks, consider waiting 6-12 months while building
                      positive payment history before applying to improve
                      approval chances and secure better APR terms.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Reasonable Credit Utilization:
                      </span>{" "}
                      Maintain credit utilization below 30% of total available
                      credit limits across all cards, with under 10% being
                      ideal. High utilization signals financial stress and
                      reduces approval odds even if you pay balances in full
                      monthly. For example, if you have $10,000 in total credit
                      limits across all cards, keep combined balances below
                      $3,000 (30%) or ideally under $1,000 (10%) when applying.
                      Pay down existing balances before applying to present the
                      strongest financial profile.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Existing Bank of America Relationship:
                      </span>{" "}
                      While not strictly required, having an existing
                      relationship with Bank of America (checking account,
                      savings account, other credit card, mortgage, or
                      investment account) may strengthen your application. Bank
                      of America can evaluate your banking behavior, account
                      history, and relationship tenure when assessing credit
                      applications. However, many applicants are approved
                      without prior Bank of America accounts if they meet other
                      eligibility criteria. Opening a checking or savings
                      account before applying may improve approval odds for
                      applicants with borderline credit profiles.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation:
                </h2>

                <div id="square04" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  When applying for the Bank of America® Unlimited Cash Rewards
                  card, prepare the following information and documents:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Personal Information:
                      </span>{" "}
                      Full legal name (exactly as it appears on
                      government-issued identification), date of birth, Social
                      Security Number or Individual Taxpayer Identification
                      Number (ITIN), current residential address (must be a
                      physical street address, not a P.O. Box or mail forwarding
                      service), email address, and primary phone number. Ensure
                      all information matches your official documents precisely
                      to avoid processing delays, verification requirements, or
                      application denial due to discrepancies.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Employment and Income:
                      </span>{" "}
                      Current employer name and contact information, occupation
                      or job title, length of employment, total annual gross
                      income (before taxes and deductions), and additional
                      income sources if applicable such as investment income,
                      rental property income, retirement benefits, alimony,
                      child support, or spousal income (if you're 21+ and have
                      reasonable access to these funds). Accurately report all
                      income you have legal access to, as underreporting may
                      result in lower credit limits or denial. Self-employed
                      applicants should report average annual income based on
                      tax returns.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Financial Information:
                      </span>{" "}
                      Monthly housing payment amount (rent or mortgage payment
                      including property taxes and insurance if applicable).
                      Bank of America uses this to calculate your debt-to-income
                      ratio. You may need to provide information about other
                      monthly debt obligations such as auto loans, student
                      loans, personal loans, and other credit card minimum
                      payments to help Bank of America assess your ability to
                      manage additional credit responsibly.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Identification Documents:
                      </span>{" "}
                      Government-issued photo identification such as driver's
                      license, state ID card, passport, or military ID. Non-U.S.
                      citizens must provide visa documentation or permanent
                      resident card (green card). In some cases, Bank of America
                      may request additional verification such as recent pay
                      stubs, W-2 forms, tax returns (especially for
                      self-employed applicants), bank statements showing
                      deposits, or utility bills to verify your residential
                      address. Respond promptly to verification requests to
                      avoid application expiration.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs:
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Bank of America® Unlimited Cash Rewards card carries the
                  following fees and charges that applicants should understand
                  before applying:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Annual Fee:</span> $0
                      annual fee—one of the card's major benefits. There are no
                      annual membership costs, no first-year promotional waivers
                      that expire, and no hidden charges. This means every
                      dollar of cash back you earn represents genuine net value
                      without being offset by annual fees. The $0 annual fee
                      applies for as long as you keep the account open in good
                      standing, making this card accessible to consumers at all
                      spending levels.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Interest Rates (APR):
                      </span>{" "}
                      0% introductory APR on purchases and balance transfers for
                      18 billing cycles from account opening (a substantial
                      promotional period). After the intro period ends, variable
                      purchase APR of 19.24% - 29.24% applies based on your
                      creditworthiness at approval. Your specific APR within
                      this range depends on your credit score, credit history,
                      income, and overall financial profile. Balance transfer
                      APR is the same as purchase APR (19.24% - 29.24%
                      variable). Cash advance APR is 29.24% variable. These
                      rates are variable and can increase based on changes to
                      the U.S. Prime Rate. To avoid interest charges entirely,
                      pay your full statement balance by the due date each
                      billing cycle.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Balance Transfer Fee:
                      </span>{" "}
                      3% of the amount of each balance transfer (minimum $10).
                      Balance transfers must be completed within 60 days of
                      account opening to qualify for the 0% introductory APR.
                      For example, transferring a $5,000 balance costs $150 in
                      transfer fees, but saves substantial interest compared to
                      keeping the balance on a card with standard APR. The intro
                      APR period provides 18 months to pay down transferred
                      balances interest-free, potentially saving hundreds or
                      thousands in interest charges.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Transaction Fees:</span>{" "}
                      Cash advance fee: Either $10 or 5% of the amount of each
                      cash advance, whichever is greater. Cash advances are
                      expensive and should be avoided—they incur immediate
                      interest charges at the cash advance APR with no grace
                      period, plus the transaction fee. Foreign transaction fee:
                      3% of each transaction in U.S. dollars (this is a notable
                      drawback for international travelers—consider a
                      no-foreign-transaction-fee card for travel abroad). Late
                      payment fee: Up to $40 if you miss a payment deadline.
                      Returned payment fee: Up to $40 if a payment is returned
                      due to insufficient funds or other issues.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Penalty APR Provision:
                      </span>{" "}
                      If you make a late payment, Bank of America may apply a
                      penalty APR up to 29.99% variable to your account. This
                      penalty rate can remain in effect indefinitely and applies
                      to existing balances as well as new purchases,
                      significantly increasing borrowing costs. The penalty APR
                      represents one of the highest costs of credit card
                      delinquency. Always make at least the minimum payment by
                      the due date to avoid triggering this penalty and damaging
                      your credit score.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/cashback-credit-cards/">
                    <Image
                      src="https://media.topfinanzas.com/images/kardtrust/kardtrust-credit-cards-banner-ad.webp"
                      alt="Best Cash Back Credit Cards Comparison"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Benefits Overview:
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Before applying, understand the key benefits that make this
                  card valuable:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Welcome Bonus:</span> Earn
                      a $200 online cash rewards bonus after making at least
                      $1,000 in purchases within the first 90 days of account
                      opening. This achievable spending requirement means most
                      cardholders can earn the bonus through normal everyday
                      purchases without manufactured spending. Combined with the
                      1.5% earned on those purchases ($15), you'll receive $215
                      in total cash back during your first three months,
                      providing immediate value that offsets any concerns about
                      the card's earning rate.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Unlimited 1.5% Cash Back:
                      </span>{" "}
                      Earn unlimited 1.5% cash back on every purchase you make
                      with no rotating categories to track, no quarterly
                      activations required, and no annual spending caps. This
                      simplicity eliminates the mental overhead of optimizing
                      category bonuses and ensures you always earn rewards at a
                      competitive rate on 100% of your spending. For cardholders
                      who spend $20,000 annually, this delivers $300 in cash
                      back rewards with zero effort beyond using the card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Preferred Rewards Bonus:
                      </span>{" "}
                      Bank of America Preferred Rewards program members
                      automatically receive bonus rewards on credit card cash
                      back earnings. Gold tier members (qualifying balance
                      $20,000+) earn 25% bonus rewards, Platinum ($50,000+)
                      earns 50%, and Platinum Honors ($100,000+) earns 75%. This
                      transforms the base 1.5% into up to 2.625% cash back for
                      Platinum Honors members, positioning this no-annual-fee
                      card among the highest earning flat-rate cash back cards
                      available. Enrollment in Preferred Rewards is free and
                      automatic when you meet qualifying balance requirements.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Extended 0% Intro APR:
                      </span>{" "}
                      The 18 billing cycle 0% intro APR on purchases and balance
                      transfers provides valuable flexibility for large planned
                      purchases or consolidating existing high-interest debt.
                      This extended promotional period gives you substantial
                      time to pay down balances without accruing interest
                      charges, potentially saving hundreds or thousands compared
                      to cards with standard APRs. Use this benefit
                      strategically for planned large purchases or debt
                      consolidation, not as an excuse to overspend beyond your
                      means.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process:
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Follow these steps to apply for the Bank of America®
                  Unlimited Cash Rewards card:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">1.</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Check Your Credit:</span>{" "}
                      Review your credit report from all three bureaus
                      (Experian, Equifax, TransUnion) at AnnualCreditReport.com
                      to verify accuracy and identify your approximate credit
                      score. Look for errors, unauthorized accounts, or negative
                      marks that could impact your application. Dispute any
                      inaccuracies through the credit bureau's dispute process
                      before applying. Aim for a credit score of 690 or higher
                      for best approval odds, with 720+ being ideal. If your
                      score is below 690, consider credit-building strategies
                      before applying.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">2.</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Gather Documentation:
                      </span>{" "}
                      Compile all required information including personal
                      details, employment information, income documentation,
                      identification, and financial information. Having
                      everything ready streamlines the application process and
                      reduces errors or omissions that could delay approval or
                      trigger verification requests. Double-check that your
                      income figure is accurate and includes all qualifying
                      sources you legally have access to.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">3.</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Complete Online Application:
                      </span>{" "}
                      Visit the official Bank of America website and locate the
                      Unlimited Cash Rewards card application page. Complete all
                      required fields accurately and honestly. The application
                      typically takes 10-15 minutes to complete. Review all
                      information carefully before submitting, as errors can
                      result in denial or processing delays. Be prepared to
                      answer security questions if you're an existing Bank of
                      America customer.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">4.</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Wait for Decision:</span>{" "}
                      Many applicants receive instant approval or denial
                      decisions online within seconds. If Bank of America needs
                      additional information or time to review your application,
                      you may receive a "pending" status message. In this case,
                      you'll receive a decision letter within 7-10 business days
                      via mail. You can check application status by calling Bank
                      of America's automated status line or logging into your
                      online banking account if you're an existing customer.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">5.</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Handle Verification (If Required):
                      </span>{" "}
                      If Bank of America requests additional verification,
                      respond promptly with requested documents such as pay
                      stubs, tax returns, bank statements, or identification
                      verification. You may be asked to upload documents through
                      secure online portal, fax documents, mail documents, or
                      visit a Bank of America branch in person. Delayed
                      responses can result in application expiration, requiring
                      you to reapply and generating another hard credit inquiry.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">6.</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Receive and Activate Card:
                      </span>{" "}
                      Once approved, your Bank of America® Unlimited Cash
                      Rewards card typically arrives within 7-10 business days
                      via U.S. mail. Activate your card immediately upon receipt
                      by calling the number on the activation sticker,
                      activating through online banking, or using the Bank of
                      America mobile app. Set up your online account if you're
                      not already a Bank of America customer, add the card to
                      digital wallets (Apple Pay, Google Pay, Samsung Pay), and
                      review your credit limit and account details.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">7.</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Meet Bonus Spending Requirement:
                      </span>{" "}
                      To earn the $200 online cash rewards bonus, make at least
                      $1,000 in purchases within 90 days of account opening.
                      Track your spending progress through online banking or the
                      mobile app. Focus on everyday spending categories and
                      planned purchases rather than manufactured spending that
                      violates terms. Once you meet the requirement, the bonus
                      typically posts within 1-2 billing cycles. The bonus
                      appears as a credit to your cash rewards balance, not a
                      statement credit.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions:
                </h2>

                <div className="space-y-6 my-8">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      What credit score do I need for the Bank of America®
                      Unlimited Cash Rewards?
                    </p>
                    <p className="text-gray-700 text-sm leading-5 text-left">
                      While Bank of America doesn't publish a minimum credit
                      score, most approved applicants have scores of 690 or
                      higher, with many in the 720+ range. Good to excellent
                      credit (690+) provides the best approval odds and most
                      favorable APR terms. If your score is below 690, consider
                      building credit with a secured credit card or becoming an
                      authorized user on someone else's account before applying
                      for this card.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      How do I qualify for Preferred Rewards bonus cash back?
                    </p>
                    <p className="text-gray-700 text-sm leading-5 text-left">
                      To qualify for Preferred Rewards bonus rewards, enroll in
                      the free Bank of America Preferred Rewards program and
                      maintain the required combined average daily balance in
                      eligible Bank of America deposit accounts (checking,
                      savings, CDs) and/or Merrill investment accounts. Gold
                      tier requires $20,000+ (25% bonus), Platinum requires
                      $50,000+ (50% bonus), and Platinum Honors requires
                      $100,000+ (75% bonus). Qualifying balances are calculated
                      based on your combined average daily balance for the
                      three-month period ending on the last day of each calendar
                      month.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      When will I receive my $200 welcome bonus?
                    </p>
                    <p className="text-gray-700 text-sm leading-5 text-left">
                      The $200 online cash rewards bonus typically posts within
                      1-2 billing cycles after you meet the spending requirement
                      of $1,000 in purchases within 90 days of account opening.
                      The bonus appears as a credit to your cash rewards
                      balance, not as a statement credit. You can then redeem it
                      according to your preference—as a statement credit, direct
                      deposit to a Bank of America account, or other redemption
                      options.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      Can I use this card for balance transfers?
                    </p>
                    <p className="text-gray-700 text-sm leading-5 text-left">
                      Yes, the card offers 0% intro APR on balance transfers for
                      18 billing cycles from account opening (then 19.24% -
                      29.24% variable APR). Balance transfers must be completed
                      within 60 days of account opening to qualify for the
                      promotional rate. A 3% balance transfer fee applies to
                      each transfer (minimum $10). This feature makes the card
                      valuable for consolidating high-interest debt from other
                      cards, potentially saving hundreds or thousands in
                      interest charges during the promotional period.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      Is there an annual fee for this card?
                    </p>
                    <p className="text-gray-700 text-sm leading-5 text-left">
                      No, the Bank of America® Unlimited Cash Rewards card has
                      no annual fee—ever. This $0 annual fee applies for as long
                      as you keep the account open and in good standing. There
                      are no introductory offers that expire or hidden charges.
                      This makes the card accessible to consumers at all
                      spending levels and ensures that every dollar of cash back
                      represents genuine net value without being offset by
                      annual membership costs.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-2 text-left">
                      Do I need to be a Bank of America customer to apply?
                    </p>
                    <p className="text-gray-700 text-sm leading-5 text-left">
                      No, you don't need existing Bank of America accounts to
                      apply for the Unlimited Cash Rewards card. While having a
                      banking relationship may strengthen your application in
                      some cases, many applicants are approved without prior
                      Bank of America accounts if they meet credit score,
                      income, and other eligibility requirements. However,
                      opening a checking or savings account before applying may
                      improve approval odds for applicants with borderline
                      credit profiles.
                    </p>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Important Disclaimers and Risk Warnings:
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Risk Warning:</strong> Credit cards are a form of
                  borrowing that must be managed responsibly. Missing payments
                  can severely damage your credit score, result in late fees up
                  to $40, trigger penalty APRs up to 29.99%, and create
                  long-term financial difficulties. The Bank of America®
                  Unlimited Cash Rewards card carries interest rates of 19.24% -
                  29.24% variable APR after the intro period—these rates can
                  quickly negate the value of cash back rewards if you carry
                  balances month-to-month. Only apply for this card if you can
                  commit to paying your balance in full each month to avoid
                  interest charges and maximize the value of the 1.5% cash back
                  rewards. The card works best for consumers with stable income,
                  good to excellent credit, and disciplined spending habits.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Credit Impact:</strong> Applying for any credit card
                  generates a hard inquiry on your credit report, which may
                  temporarily lower your credit score by a few points. Opening a
                  new account also reduces your average age of accounts, which
                  can impact your score. However, responsible use of the card
                  (consistent on-time payments, low utilization, avoiding maxing
                  out the card) typically improves your credit score over time.
                  Only apply if you genuinely need the card and meet the
                  eligibility criteria—avoid speculative applications that
                  create unnecessary hard inquiries.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>
                    Representative APR Example (Required by TILA):
                  </strong>{" "}
                  If you charge $10,000 in purchases at an APR of 24% and make
                  only minimum payments, you will pay approximately $3,200 in
                  interest charges over approximately 12 years before the
                  balance is fully paid off. Your actual APR, interest charges,
                  and payoff period depend on your creditworthiness, payment
                  behavior, and changes in the U.S. Prime Rate. To avoid
                  interest entirely, pay your full statement balance by the due
                  date each billing cycle. The 0% intro APR period provides an
                  opportunity to make purchases or transfer balances without
                  accruing interest for 18 billing cycles, but standard APR
                  applies to remaining balances after the promotional period
                  ends.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Balance Transfer Considerations:</strong> While the 0%
                  intro APR on balance transfers can save substantial interest,
                  it's not a solution to overspending or poor financial habits.
                  The 3% balance transfer fee ($150 on a $5,000 transfer) adds
                  to the amount you owe. Only transfer balances if you have a
                  realistic plan to pay them down during the 18-month
                  promotional period. If you don't pay off the balance before
                  the intro period ends, standard APR applies to the remaining
                  balance, which could be higher than your original card's rate.
                  Use balance transfers strategically as part of a comprehensive
                  debt payoff plan, not as a way to avoid addressing underlying
                  spending issues.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>General Disclaimer:</strong> This content is for
                  informational purposes only and does not constitute financial,
                  legal, or tax advice. We are not affiliated with, sponsored
                  by, or endorsed by Bank of America. Credit card terms, rates,
                  fees, benefits, and eligibility requirements are determined
                  solely by Bank of America and are subject to change without
                  notice. Approval is not guaranteed and depends on your
                  individual creditworthiness, income, debt obligations, and
                  other factors. Always review the current Pricing Information,
                  Key Terms, and Cardmember Agreement from Bank of America
                  before applying. For the most accurate and up-to-date product
                  information, visit the official Bank of America website or
                  contact Bank of America customer service directly.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Before Applying:</strong> Carefully consider whether
                  the Bank of America® Unlimited Cash Rewards card aligns with
                  your financial situation, spending habits, and credit goals.
                  Evaluate whether you can realistically pay your balance in
                  full each month to avoid interest charges and maximize cash
                  back value. Review your credit report to ensure you meet
                  eligibility criteria and have no errors. Consider whether you
                  can qualify for Preferred Rewards benefits by maintaining
                  qualifying balances, as this significantly enhances the card's
                  value. If you're unsure whether this card is appropriate for
                  your circumstances, consider consulting with a financial
                  advisor.
                </p>

                <div className="text-left my-8">
                  <a
                    href="https://www.bankofamerica.com/credit-cards/products/unlimited-cash-back-credit-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#012169] hover:bg-[#011a4d] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Apply Now at Bank of America Official Website
                    </Button>
                  </a>
                </div>

                {/* AI Content Disclaimer */}
                <AIContentDisclaimer />
              </section>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
