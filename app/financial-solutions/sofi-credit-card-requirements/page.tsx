import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "SoFi Credit Card Requirements: Application Guide and Eligibility - KardTrust",
    description:
      "Learn about the SoFi Unlimited 2% Credit Card requirements, application process, eligibility criteria for excellent credit, prequalification steps, and how to maximize your approval chances.",
    keywords:
      "SoFi credit card requirements, SoFi application, excellent credit requirements, credit card eligibility, prequalification, soft credit pull, SoFi underwriting, credit card approval",
  };
}

export default function SoFiCreditCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for the SoFi Unlimited 2% Credit Card
            </h1>

            <div id="square03" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The SoFi Unlimited 2% Credit Card is designed for applicants
                with excellent credit who want straightforward unlimited cash
                back rewards. Here's everything you need to know about
                qualifying, applying, and getting approved for this premium
                no-fee cash back card.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/sofi-credit-card-requirements.webp"
                  alt="SoFi Credit Card Requirements"
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
                  How to Qualify for the SoFi Unlimited 2% Card
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Excellent Credit Required:
                      </span>{" "}
                      The SoFi Unlimited 2% Card is recommended for customers
                      with excellent credit. While SoFi doesn't publish a
                      specific minimum credit score, "excellent credit"
                      typically means a FICO score of 720 or higher. SoFi
                      evaluates multiple factors beyond your credit score to
                      determine eligibility.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Recent Loan Defaults:
                      </span>{" "}
                      SoFi looks for applicants who have not defaulted on any
                      loans in the past 7 years. This includes credit cards,
                      student loans, auto loans, mortgages, and personal loans.
                      A clean default history demonstrates financial
                      responsibility and borrowing reliability.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        5+ Years of On-Time Payments:
                      </span>{" "}
                      Ideal candidates have more than 5 years of consistent
                      on-time payments on their loans and credit cards. This
                      extended payment history shows long-term financial
                      stability and responsible credit management habits that
                      predict future payment behavior.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Recent Late Payments:
                      </span>{" "}
                      You should not have any payments more than 30 days late in
                      the past year. Even one 30-day late payment can
                      significantly impact your approval chances as it indicates
                      recent payment difficulties. Keep all accounts current
                      before applying.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Sufficient Verifiable Income:
                      </span>{" "}
                      You must have sufficient income to support your ability to
                      pay. SoFi will verify your stated income during the
                      underwriting process and assess whether your income level
                      can comfortably handle the credit line they're considering
                      extending to you.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        US Residency Required:
                      </span>{" "}
                      Applicants must be at least 18 years old (or the legal age
                      required by their state of residence) and have a physical
                      US mailing address. The card is only available to US
                      residents and cannot be shipped to PO boxes or
                      international addresses.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation for Application:
                </h2>

                <div id="square04" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Social Security Number or ITIN:
                      </span>{" "}
                      You must possess a valid Social Security Number (SSN) or
                      an Individual Taxpayer Identification Number (ITIN). This
                      is required by federal law for credit reporting purposes
                      and to verify your identity and creditworthiness.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Personal Information:
                      </span>{" "}
                      Provide your full legal name, date of birth, physical US
                      mailing address, email address, and phone number. This
                      information must match your official records and will be
                      verified during the application process.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Income Information:</span>{" "}
                      State your annual gross income including salary, wages,
                      bonuses, commissions, and other regular income sources. If
                      you're over 21, you may include income from sources you
                      have reasonable access to, such as household income.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Employment Information:
                      </span>{" "}
                      Provide your current employer name, position, length of
                      employment, and work contact information. Self-employed
                      applicants should provide business name and documentation
                      of income sources.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding SoFi's Prequalification Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  SoFi offers a prequalification process that lets you check for
                  offers without impacting your credit score:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Soft Credit Pull:</span>{" "}
                      When you check for prequalified offers, SoFi conducts only
                      a soft credit inquiry that will not affect your credit
                      score. This allows you to see if you have any prequalified
                      offers without the risk of a hard inquiry appearing on
                      your credit report.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Quick Results:</span> You
                      can find out if you have a prequalified offer in minutes
                      after submitting your basic information. The
                      prequalification tool provides an initial assessment of
                      your eligibility based on the information you provide and
                      your credit profile.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        SoFi Profile Required:
                      </span>{" "}
                      To check for prequalified offers, you'll need to either
                      log in to your existing SoFi profile or create a new
                      profile if you don't have one. This one-time setup allows
                      you to access SoFi's full suite of financial products and
                      track your applications.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Not a Guarantee of Approval:
                      </span>{" "}
                      Having a prequalified offer does not guarantee final
                      approval. After you proceed with a full application, SoFi
                      will conduct a hard credit inquiry and additional
                      verification that may result in approval or denial based
                      on complete information.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Step-by-Step Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Applying for the SoFi Unlimited 2% Card follows a streamlined
                  digital process:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">1</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check for Prequalification (Recommended):
                      </span>{" "}
                      Visit the SoFi prequalification page and submit your basic
                      information to see if you have any prequalified offers.
                      This soft pull won't impact your credit score and gives
                      you an initial indication of approval likelihood.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">2</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Review Prequalified Offers:
                      </span>{" "}
                      If you have a prequalified offer, you'll see the card
                      details including your potential credit limit range and
                      estimated APR. Review these terms carefully before
                      deciding to proceed with a full application.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">3</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Submit Full Application:
                      </span>{" "}
                      Complete the full application by answering additional
                      questions including detailed personal information,
                      employment details, income verification, and identity
                      confirmation. This step triggers the hard credit inquiry
                      if you're approved.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">4</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Identity Verification:
                      </span>{" "}
                      SoFi will verify your identity using the information
                      provided and may request additional documentation if
                      needed. This step helps prevent fraud and ensures
                      compliance with federal banking regulations.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">5</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Decision:</span>{" "}
                      SoFi will evaluate your completed application and credit
                      report. A hard credit inquiry will be conducted only if
                      you're approved, which may temporarily impact your credit
                      score by a few points. Most applicants receive a decision
                      within minutes, though some cases may require additional
                      review.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">6</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Card Delivery and Activation:
                      </span>{" "}
                      If approved, your SoFi Unlimited 2% Card will be mailed to
                      your physical address within 7-10 business days. Once you
                      receive it, activate the card through the SoFi app or
                      website, set your PIN, and start earning unlimited 2% cash
                      back immediately.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Alternative Application Without Prequalification
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  If you don't have a prequalified offer or prefer to apply
                  directly:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Direct Application Available:
                      </span>{" "}
                      You can always apply directly for the Unlimited 2% Card
                      without checking for prequalification first. This option
                      is available to all eligible applicants, though it will
                      result in a hard credit inquiry when you submit your
                      application.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Excellent Credit Recommended:
                      </span>{" "}
                      Direct applications are recommended only for customers
                      confident they meet the excellent credit criteria. If
                      you're unsure about your approval chances, use the
                      prequalification tool first to avoid an unnecessary hard
                      inquiry.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mail Offer Redemption:
                      </span>{" "}
                      If you received a physical mailer from SoFi with a unique
                      reservation code, you can enter that code at SoFi's direct
                      mail gateway to begin your application with potentially
                      enhanced terms or welcome bonuses specific to your
                      targeted offer.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/kardtrust/kardtrust-credit-cards-banner-ad.webp"
                      alt="Learn About Credit Cards"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding Fees and Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The SoFi Unlimited 2% Card has a transparent fee structure:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">$0 Annual Fee:</span>{" "}
                      There is absolutely no annual fee for this card, ever. You
                      won't be charged after the first year, there's no
                      introductory waiver that expires—the card is genuinely
                      fee-free for the life of your account.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        $0 Foreign Transaction Fees:
                      </span>{" "}
                      Use your card internationally without penalty. Many cards
                      charge 3% foreign transaction fees on purchases made
                      outside the US, but SoFi charges nothing extra, making
                      this card ideal for international travel.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Variable APR:</span> The
                      card carries a variable Annual Percentage Rate determined
                      based on your creditworthiness. Your specific APR will be
                      disclosed when you receive your approval decision. To
                      avoid interest charges entirely, pay your full statement
                      balance by the due date each month.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Standard Credit Card Fees:
                      </span>{" "}
                      Like all credit cards, standard fees may apply for cash
                      advances, balance transfers, late payments, and returned
                      payments. Review the complete pricing and terms document
                      for full fee disclosure information.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Tips to Maximize Your Approval Chances
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check Your Credit Reports:
                      </span>{" "}
                      Before applying, review your credit reports from all three
                      bureaus (Equifax, Experian, TransUnion) to ensure
                      accuracy. Dispute any errors that could be dragging down
                      your score and wait for corrections to process before
                      applying.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Lower Your Credit Utilization:
                      </span>{" "}
                      Pay down existing credit card balances to reduce your
                      credit utilization ratio below 30% (ideally below 10%).
                      High utilization signals financial stress to lenders and
                      can hurt your approval chances even with an excellent
                      credit score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Wait After Recent Applications:
                      </span>{" "}
                      If you've applied for multiple credit cards or loans
                      recently, consider waiting 3-6 months before applying. Too
                      many recent applications can make lenders nervous about
                      your credit-seeking behavior.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Use Accurate Income Information:
                      </span>{" "}
                      Report your actual, verifiable gross annual income. SoFi
                      may request documentation such as pay stubs, tax returns,
                      or W-2 forms to verify your stated income. Inflating
                      income figures can result in application denial or account
                      closure.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#329192] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Consider Existing SoFi Relationship:
                      </span>{" "}
                      Having an existing relationship with SoFi through their
                      banking, investing, or loan products may strengthen your
                      application. Demonstrated responsible management of SoFi
                      accounts shows you're a reliable customer.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6 my-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      Will checking for prequalification hurt my credit score?
                    </h3>
                    <p className="text-gray-700 text-sm leading-5">
                      No. When you check for prequalified offers, SoFi conducts
                      only a soft credit inquiry that will not impact your
                      credit score. Your credit score will only be affected if
                      you apply for and are approved for a prequalified offer,
                      at which point SoFi will run a hard credit pull.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      What credit score do I need to be approved?
                    </h3>
                    <p className="text-gray-700 text-sm leading-5">
                      While SoFi doesn't publish a specific minimum credit
                      score, the Unlimited 2% Card is recommended for customers
                      with excellent credit, typically meaning a FICO score of
                      720 or higher. SoFi also considers factors beyond credit
                      score such as payment history, loan default history, and
                      recent credit behavior.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      How long does the application process take?
                    </h3>
                    <p className="text-gray-700 text-sm leading-5">
                      You can find out if you have a prequalified offer in
                      minutes. If you proceed with a full application, most
                      applicants receive a credit decision within minutes,
                      though some applications may require additional review.
                      Allow up to 30 days from date of submission for complete
                      processing in complex cases.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      Can I apply if I already have another SoFi product?
                    </h3>
                    <p className="text-gray-700 text-sm leading-5">
                      Yes. Having existing SoFi banking, investing, or loan
                      products does not prevent you from applying for the SoFi
                      Credit Card. In fact, demonstrating responsible management
                      of other SoFi accounts may strengthen your application.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      What happens if I'm not approved?
                    </h3>
                    <p className="text-gray-700 text-sm leading-5">
                      If SoFi denies your application, they will send an adverse
                      action notice explaining the reasons for denial. You can
                      work on improving those specific factors—such as paying
                      down debt, building more payment history, or correcting
                      credit report errors—and reapply in the future.
                    </p>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Important Disclaimers
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">Issuer Information:</span> The
                  SoFi Credit Card is issued by SoFi Bank, N.A., Member FDIC,
                  pursuant to license by Mastercard® International
                  Incorporated. The card can be used everywhere Mastercard is
                  accepted. Mastercard is a registered trademark, and the
                  circles design is a trademark of Mastercard International
                  Incorporated.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">Approval Criteria:</span>{" "}
                  Accounts are subject to additional credit approval. To
                  qualify, you must meet SoFi's pre-established underwriting
                  requirements, including verification of sufficient income to
                  support your ability to pay. SoFi will not extend credit if
                  you do not meet their pre-established criteria. SoFi reserves
                  the right to modify or discontinue products and benefits
                  prospectively based on market conditions and borrower
                  eligibility.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">
                    Credit Decision Factors:
                  </span>{" "}
                  Meeting the guidelines for excellent credit does not guarantee
                  approval. These factors are intended as guidelines and not as
                  firm criteria for approval—you may meet these criteria and
                  still be declined. Additional factors from your application
                  and credit history will be considered during the underwriting
                  process.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Important:</span> This
                    information is for educational purposes only and does not
                    constitute financial advice. Credit card terms, rates, and
                    benefits are subject to change. Always review the complete
                    Pricing, Terms & Conditions document before applying. Your
                    approval and specific card terms will be determined by SoFi
                    based on your individual financial situation and
                    creditworthiness.
                  </p>
                </div>
              </section>

              <div className="text-left my-8">
                <Link
                  href="https://www.sofi.com/credit-card/"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#329192] hover:bg-teal-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Apply Now at SoFi
                  </Button>
                </Link>
              </div>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
