import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Upgrade OneCard Requirements: Application Guide and Eligibility - KardTrust",
    description:
      "Learn about the Upgrade OneCard requirements, application process, eligibility criteria, credit score needs, and income requirements for this flexible pay now or pay later credit card.",
    keywords:
      "Upgrade OneCard requirements, Upgrade card application, credit card eligibility, Upgrade approval, credit requirements, Upgrade OneCard qualification",
  };
}

export default function UpgradeCreditCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for the Upgrade OneCard
            </h1>

            <div
              id="kardtrust_ad_1"
              className="items-center justify-center flex w-full my-6"
            >
              {/* Empty responsive, centered div */}
            </div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Upgrade OneCard offers a unique blend of credit card
                flexibility and personal loan structure with pay now or pay
                later options. Here's everything you need to know about
                qualifying and applying for this innovative credit solution.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/upgrade-credit-card-requirements.webp"
                  alt="Upgrade OneCard Requirements"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  How to Qualify for the Upgrade OneCard
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit Score Requirements:
                      </span>{" "}
                      While Upgrade does not publish a minimum credit score, the
                      Upgrade OneCard is generally accessible to applicants with
                      fair to good credit. Most approved applicants have credit
                      scores of 580 or higher, though your actual approval and
                      interest rate will depend on your complete credit profile,
                      not just your score. A higher credit score qualifies you
                      for lower APRs within the 14.99% to 29.99% range.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        US Citizenship or Permanent Residency:
                      </span>{" "}
                      You must be a United States citizen or permanent resident
                      to qualify for the Upgrade OneCard. Applicants will need
                      to provide a valid Social Security Number and proof of US
                      residency during the application process.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Minimum Age Requirement:
                      </span>{" "}
                      Applicants must be at least 18 years old to apply for the
                      Upgrade OneCard. Some states may have different age of
                      majority requirements, so applicants should verify their
                      state's specific requirements before applying.
                    </div>
                  </div>

                  <div
                    id="kardtrust_ad_2"
                    className="items-center justify-center flex w-full my-6"
                  >
                    {/* Empty responsive, centered div */}
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Verifiable Income Source:
                      </span>{" "}
                      You must have a regular source of income that Upgrade can
                      verify. This can include employment income,
                      self-employment income, Social Security benefits,
                      disability benefits, retirement income, or other
                      verifiable regular income sources. While Upgrade doesn't
                      publish a specific minimum income requirement, your income
                      will be evaluated relative to your existing debt
                      obligations.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Valid Bank Account for Pay Now Feature:
                      </span>{" "}
                      To use the Pay Now feature, you must link a valid US bank
                      account. This account will be used for automatic debits
                      when you designate purchases as Pay Now. The account must
                      be in your name and have sufficient funds to cover
                      designated transactions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Acceptable Debt-to-Income Ratio:
                      </span>{" "}
                      Upgrade evaluates your debt-to-income ratio to ensure you
                      can afford the monthly installment payments. While there's
                      no published maximum ratio, applicants with lower
                      debt-to-income ratios typically qualify for higher credit
                      lines and better interest rates.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation for Application:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Personal Identification:
                      </span>{" "}
                      You'll need to provide your full legal name, date of
                      birth, and Social Security Number for identity
                      verification and credit check purposes. This information
                      is required by federal law for all credit applications in
                      the United States.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Current Address Information:
                      </span>{" "}
                      Provide your current residential address where you've
                      lived for at least the past few months. Upgrade may verify
                      your address through credit bureau records or request
                      additional documentation if your address cannot be
                      verified automatically.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Income Verification Documents:
                      </span>{" "}
                      Be prepared to provide documentation of your income, which
                      may include recent pay stubs, W-2 forms, tax returns (for
                      self-employed applicants), bank statements showing regular
                      deposits, Social Security award letters, or pension
                      statements. Upgrade may request specific documentation
                      based on your stated income source.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Bank Account Information:
                      </span>{" "}
                      You'll need to provide your bank account routing number
                      and account number to link your bank account for Pay Now
                      transactions and monthly installment payments via Autopay.
                      This account must be a valid US checking or savings
                      account in your name.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contact Information:
                      </span>{" "}
                      Provide a valid email address and phone number that
                      Upgrade can use for account notifications, payment
                      reminders, security alerts, and customer service
                      communications throughout your account relationship.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Step-by-Step Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Applying for the Upgrade OneCard is a streamlined online
                  process that typically takes 10-15 minutes:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">1</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Check Your Offers:</span>{" "}
                      Visit Upgrade.com and select the OneCard product. Complete
                      the initial pre-qualification form with basic information
                      including your name, date of birth, address, and last four
                      digits of your Social Security Number. Upgrade will
                      perform a soft credit check that won't impact your credit
                      score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">2</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Review Your Pre-Qualified Offers:
                      </span>{" "}
                      If you pre-qualify, you'll see potential credit line
                      amounts and APR ranges you may be eligible for. These are
                      not guarantees but give you an idea of what terms you
                      might receive if approved. Review the offers and select
                      the one that best fits your needs.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">3</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Complete Full Application:
                      </span>{" "}
                      Fill out the complete application with detailed
                      information including your full Social Security Number,
                      complete address history, employment details, annual
                      income, and monthly housing payment. Be accurate and
                      truthful—misrepresenting information can result in
                      application denial or account closure.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">4</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Verify Your Identity:
                      </span>{" "}
                      Upgrade may ask you to verify your identity through
                      knowledge-based authentication questions or by uploading
                      documentation. This step helps prevent fraud and ensures
                      the person applying is really you. Have a
                      government-issued ID ready if requested.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">5</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Link Your Bank Account:
                      </span>{" "}
                      Connect a US bank account for Pay Now transactions and
                      monthly installment payments. You can link your account
                      using your online banking credentials (instant
                      verification) or by manually entering your routing and
                      account numbers (micro-deposit verification).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">6</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Review and Accept Terms:
                      </span>{" "}
                      Carefully review your Personal Credit Line Agreement,
                      which details your approved credit line, APR, fees, and
                      payment terms. Read through the terms and conditions,
                      privacy policy, and electronic communications consent
                      before electronically signing to accept the agreement.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">7</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Receive Approval Decision:
                      </span>{" "}
                      Most applicants receive an instant decision after
                      submitting their complete application. Some applications
                      may require additional review and you'll be notified via
                      email within a few business days. If approved, you'll see
                      your final credit line and APR.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">8</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Activate Your Card:</span>{" "}
                      Once approved, your physical Upgrade OneCard will arrive
                      by mail within 7-10 business days. Download the Upgrade
                      mobile app (available for iOS and Android), create your
                      account, and activate your card. Set up your Pay Now
                      preferences and configure Autopay for your monthly
                      installments.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Upgrade OneCard has a transparent cost structure with
                  competitive rates for its hybrid credit card and loan model:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        APR Range: 14.99% to 29.99%:
                      </span>{" "}
                      Your APR is based on your creditworthiness and other
                      factors, with the lowest rates reserved for applicants
                      with excellent credit who enroll in Autopay. For example,
                      a $1,000 purchase with a 36-month term and 19.99% APR has
                      a monthly payment of $37.55. Your specific rate will be
                      determined during the application process.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">No Annual Fee:</span> The
                      Upgrade OneCard has no annual fee, saving you money
                      compared to many premium credit cards that charge $95 or
                      more per year. You can maintain your account indefinitely
                      without paying an annual membership fee.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Balance Transfer Fee: Up to 5%:
                      </span>{" "}
                      If you transfer balances from other credit cards to your
                      Upgrade OneCard, you'll be charged a balance transfer fee
                      of up to 5% of the transferred amount. This fee is added
                      to your transferred balance and will be divided into fixed
                      monthly installments like other purchases.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Foreign Transaction Fee: Up to 3%:
                      </span>{" "}
                      When you use your Upgrade OneCard for purchases in foreign
                      currencies or with international merchants, you'll be
                      charged a foreign transaction fee of up to 3% of the
                      transaction amount. This is standard for many credit cards
                      without specific international travel benefits.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Late Payment Fee: Up to $29:
                      </span>{" "}
                      If you miss a monthly installment payment or your payment
                      is returned, you may be charged a late fee of up to $29.
                      Late payments can also damage your credit score, so
                      enrolling in Autopay is highly recommended to avoid this
                      fee and protect your credit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">ATM Fees:</span> If you
                      activate ATM Access on your Upgrade OneCard, standard ATM
                      withdrawal fees may apply depending on the ATM operator.
                      These fees are charged by the ATM owner, not by Upgrade.
                      All ATM transactions are treated as Pay Now and will be
                      automatically debited from your linked bank account the
                      next day.
                    </div>
                  </div>
                </div>

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

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Benefits and Features Overview
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Beyond the flexible payment structure, the Upgrade OneCard
                  offers several valuable features:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Pay Now or Pay Later Flexibility:
                      </span>{" "}
                      Choose to pay off purchases immediately with no interest
                      (Pay Now) or spread the cost over fixed installment terms
                      (Pay Later). You can even change your designation up until
                      12pm Pacific Time the day after a transaction settles,
                      giving you unmatched flexibility based on your cash flow.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fixed Installment Payments:
                      </span>{" "}
                      Each Pay Later purchase becomes a fixed-term loan with
                      predictable monthly payments. Unlike traditional credit
                      card minimum payments that keep you in debt indefinitely,
                      Upgrade's installment structure ensures you're making
                      steady progress toward paying off your balance.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Autopay for Lowest Rates:
                      </span>{" "}
                      Enrolling in Autopay not only ensures you never miss a
                      payment but also qualifies you for the lowest available
                      APR based on your creditworthiness. Autopay automatically
                      withdraws your monthly installment payment from your
                      linked bank account on your due date.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Upgrade Mobile App:</span>{" "}
                      Manage your entire account through the intuitive Upgrade
                      mobile app for iOS and Android. View transactions, change
                      Pay Now/Pay Later designations, make payments, check your
                      available credit, and contact customer support—all from
                      your smartphone.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contactless and Mobile Payments:
                      </span>{" "}
                      Your Upgrade OneCard comes with chip-enabled contactless
                      technology for tap-to-pay convenience. Add your card to
                      Apple Pay or Google Wallet for secure mobile payments
                      using your phone or smartwatch.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0E680E] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Upgrade Shopping Discounts:
                      </span>{" "}
                      Access exclusive offers from participating merchants
                      through Upgrade Shopping. Browse current offers on your
                      account dashboard, shop normally, and receive automatic
                      discounts or cashback on qualifying purchases.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6 my-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      What credit score do I need to qualify?
                    </h3>
                    <p className="text-gray-700 text-sm leading-5">
                      While Upgrade doesn't publish a minimum credit score, most
                      approved applicants have credit scores of 580 or higher.
                      Your credit score, along with your income, debt-to-income
                      ratio, and credit history, will determine your approval,
                      credit line, and APR. Higher credit scores qualify for
                      better terms and lower interest rates.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      Will checking my offers hurt my credit score?
                    </h3>
                    <p className="text-gray-700 text-sm leading-5">
                      No. The initial pre-qualification process uses a soft
                      credit inquiry that won't affect your credit score. Only
                      if you proceed with a full application and accept an offer
                      will Upgrade perform a hard inquiry, which may have a
                      minor temporary impact on your score.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      How does the Pay Now feature work?
                    </h3>
                    <p className="text-gray-700 text-sm leading-5">
                      When you designate a purchase as Pay Now, Upgrade will
                      automatically debit your linked bank account the day after
                      the transaction settles. This pays off the purchase
                      immediately and eliminates any interest charges. You must
                      have sufficient funds in your account for the automatic
                      debit, or the transaction will be switched to Pay Later
                      and begin accruing interest.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      Can I change between Pay Now and Pay Later after making a
                      purchase?
                    </h3>
                    <p className="text-gray-700 text-sm leading-5">
                      Yes. You can change the designation of any transaction
                      from Pay Now to Pay Later (or vice versa) up until 12pm
                      Pacific Time the day after the transaction settles. After
                      this deadline, the designation is locked and the payment
                      or installment plan will proceed as designated.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      What happens if a Pay Now debit fails?
                    </h3>
                    <p className="text-gray-700 text-sm leading-5">
                      If a Pay Now debit is returned by your bank due to
                      insufficient funds, Upgrade will automatically switch that
                      transaction to Pay Later. The transaction will begin
                      accruing interest from the original transaction date and
                      be added to your regular installment payments. You may
                      also be charged a returned payment fee.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      How long does it take to receive my card?
                    </h3>
                    <p className="text-gray-700 text-sm leading-5">
                      Once approved, your physical Upgrade OneCard will be
                      mailed to your verified address and typically arrives
                      within 7-10 business days. You can track your card's
                      delivery status through your Upgrade account. Upon
                      receipt, activate your card through the Upgrade mobile app
                      before making your first purchase.
                    </p>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Important Disclaimers
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">
                    Upgrade Bank Partnership:
                  </span>{" "}
                  All loans, Personal Credit Lines, and checking and savings
                  accounts are provided by Upgrade's bank partners. Upgrade Visa
                  Cards are issued by Upgrade's bank partners, pursuant to a
                  license from Visa USA Inc. Upgrade, Inc. (NMLS #1548935) is a
                  financial technology company, not a bank.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">Representative Example:</span>{" "}
                  Credit Lines feature Annual Percentage Rates (APRs) of 14.99%
                  to 29.99% based on creditworthiness. The lowest rates require
                  Autopay. For example, a $1,000 card purchase with a 36-month
                  term and a 19.99% APR has a monthly payment of $37.55. Your
                  rate, line amount, and default term depend on maintaining a
                  qualifying credit score, your credit usage history, requested
                  amount, and other factors.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <span className="font-semibold">
                    Credit Line Replenishment:
                  </span>{" "}
                  The Upgrade Card allows you to obtain a series of closed-end
                  loans accessed through card transactions up to your approved
                  amount. As you repay your balance, additional credit may
                  become available subject to meeting credit requirements, but
                  your line will not replenish automatically like traditional
                  revolving credit.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Important:</span> This
                    information is for educational purposes only and does not
                    constitute financial advice. Individual eligibility, terms,
                    and rates vary. Always review your Personal Credit Line
                    Agreement carefully before accepting an offer. Missing
                    payments can damage your credit score and result in fees.
                  </p>
                </div>
              </section>

              <div className="text-left my-8">
                <Link href="/financial-solutions/upgrade-credit-card">
                  <Button className="bg-[#0E680E] hover:bg-green-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Learn More About Benefits
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
