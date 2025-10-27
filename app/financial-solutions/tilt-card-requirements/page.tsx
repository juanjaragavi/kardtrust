import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Tilt Card Requirements: Application Guide and Eligibility - KardTrust",
    description:
      "Learn about Tilt credit card requirements, application process, eligibility criteria, and how to qualify for Tilt Essentials, Motion, or Engage cards. No security deposit or credit history required.",
    keywords:
      "Tilt Card requirements, Tilt application, credit card eligibility, Tilt Essentials requirements, Tilt Motion requirements, Tilt Engage requirements, credit building requirements, no security deposit credit card",
  };
}

export default function TiltCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for the Tilt Card
            </h1>

            <div
              id="kardtrust_ad_1"
              className="items-center justify-center flex w-full my-6"
            >
              {/* Empty responsive, centered div */}
            </div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                Tilt credit cards offer one of the most accessible paths to
                building credit, with no security deposit, no credit history
                required, and approval for over 50% of customers denied
                elsewhere. Here's everything you need to know about qualifying
                and applying for Tilt Essentials, Motion, or Engage cards.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/kardtrust/tilt-card-requirements.webp"
                  alt="Tilt Card Requirements"
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
                  How to Qualify for a Tilt Card
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Age and Residency Requirements:
                      </span>{" "}
                      You must be at least 18 years old and a legal resident of
                      the United States with a valid Social Security number.
                      Tilt is not available in all states, so check your state's
                      eligibility during the application process.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Credit History Required:
                      </span>{" "}
                      Unlike traditional credit cards that require established
                      credit histories, Tilt considers your application even if
                      you have no credit score at all. This makes Tilt ideal for
                      credit newcomers, young adults, recent immigrants, and
                      anyone starting their credit journey from scratch.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Bank Account Linking Recommended:
                      </span>{" "}
                      While not strictly required, linking your bank account
                      significantly increases your approval odds. Tilt uses
                      secure bank linking through Plaid to review your real-time
                      financial habits, income, and spending patterns. This
                      allows Tilt to approve customers that traditional banks
                      would deny based solely on credit history.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Security Deposit Required:
                      </span>{" "}
                      All three Tilt cards—Essentials, Motion, and
                      Engage—require absolutely no security deposit. Traditional
                      secured cards demand $200-$500 upfront, but Tilt
                      eliminates this barrier entirely, making credit building
                      accessible regardless of your current financial resources.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Income Verification:
                      </span>{" "}
                      You'll need to provide information about your income
                      sources during the application process. This can include
                      employment income, self-employment income, government
                      benefits, alimony, child support, or any regular income
                      you receive. Tilt uses this information combined with bank
                      linking data to determine your creditworthiness.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        WebBank Underwriting Approval:
                      </span>{" "}
                      Tilt cards are issued by WebBank, which will make the
                      final approval decision based on their underwriting
                      criteria. While Tilt's approach is more lenient than
                      traditional banks, approval is not guaranteed and depends
                      on your overall financial profile.
                    </div>
                  </div>
                </div>
              </section>

              <div
                id="kardtrust_ad_2"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  To complete your Tilt card application, you'll need to provide
                  the following information and documentation:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Personal Identification:
                      </span>{" "}
                      Valid government-issued photo ID (driver's license, state
                      ID, or passport) to verify your identity and age. You'll
                      also need to provide your Social Security number for
                      credit reporting purposes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contact Information:
                      </span>{" "}
                      Current residential address (must be a physical address,
                      not a P.O. box), phone number, and email address for
                      account communications and verification purposes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Income Information:</span>{" "}
                      Details about your employment status, employer name (if
                      applicable), and gross annual income from all sources. If
                      self-employed, you may need to provide additional
                      documentation of income.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Bank Account Credentials:
                      </span>{" "}
                      If you choose to link your bank account (highly
                      recommended), you'll provide your online banking login
                      credentials through Plaid's secure connection. This allows
                      Tilt to verify your income and spending patterns safely
                      without storing your banking credentials.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Consent to Credit Check:
                      </span>{" "}
                      Authorization for Tilt and WebBank to perform a hard
                      credit inquiry when you submit your final application.
                      Remember, pre-qualification uses only a soft pull that
                      doesn't affect your credit score.
                    </div>
                  </div>
                </div>
              </section>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  Tilt cards have transparent pricing with no hidden fees.
                  Here's a complete breakdown of what you'll pay:
                </p>

                <div className="space-y-6 my-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                      Tilt Essentials Card Costs
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Annual Fee:</span> $0
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Variable APR:</span>{" "}
                        29.74%
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Cash Back:</span> 3% on
                        gas & groceries with AutoPay
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Late Payment Fee:</span>{" "}
                        Up to $40
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">
                          Foreign Transaction Fee:
                        </span>{" "}
                        3% of each transaction
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                      Tilt Motion Card Costs
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Annual Fee:</span> $0
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Variable APR:</span>{" "}
                        28.74%-33.74%
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Cash Back:</span> 1%-10%
                        at select merchants
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Late Payment Fee:</span>{" "}
                        Up to $40
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">
                          Foreign Transaction Fee:
                        </span>{" "}
                        3% of each transaction
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                      Tilt Engage Card Costs
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Annual Fee:</span> $59
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Variable APR:</span>{" "}
                        28.74%-33.74%
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Cash Back:</span> 1%-10%
                        at select merchants
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">Late Payment Fee:</span>{" "}
                        Up to $40
                      </p>
                      <p className="text-sm leading-5 text-left">
                        <span className="font-semibold">
                          Foreign Transaction Fee:
                        </span>{" "}
                        3% of each transaction
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">
                      Tilt Subscription Fee:
                    </span>{" "}
                    In addition to card-specific costs, Tilt charges an
                    auto-recurring $8 per month subscription fee to access the
                    full suite of products and services. First-time customers
                    receive a 14-day free trial. You must cancel before the
                    trial ends to avoid the subscription fee. Cancel anytime
                    through the Tilt app under "Billing" or by contacting
                    help@tilt.com.
                  </p>
                </div>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-semibold">
                    Representative APR Example:
                  </span>{" "}
                  If you carried a $1,000 balance on a Tilt Essentials Card with
                  29.74% APR for one year and made only minimum payments
                  (typically 1% of balance plus interest and fees), you would
                  pay approximately $297 in interest charges over that year. To
                  avoid interest charges entirely, pay your full statement
                  balance by the due date each month.
                </p>
              </section>

              <div className="my-8 text-left sm:text-left">
                <Link href="/personal-finance/credit-card-types-benefits/">
                  <Image
                    src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                    alt="Learn About Credit Cards"
                    width={1000}
                    height={563}
                    className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                    style={{ width: "auto", height: "auto" }}
                    loading="lazy"
                    quality={80}
                  />
                </Link>
              </div>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Benefits and Features Summary
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  Once approved, you'll gain access to these valuable features:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Multiple Paths to Credit Limit Increases:
                      </span>{" "}
                      Get automatically considered for increases when you link
                      your bank, reach 4 months of ownership, achieve 6 on-time
                      payments, or through ongoing automatic reviews. 2 out of 3
                      customers receive a limit increase in their first 6
                      months.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Cash Back Rewards:</span>{" "}
                      Earn up to 10% cash back at select merchants or 3% on gas
                      and groceries with the Essentials Card. Watch your rewards
                      accumulate automatically and redeem them through the Tilt
                      app whenever you're ready.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit Score Monitoring:
                      </span>{" "}
                      Track your credit score progress directly in the Tilt app
                      with free credit monitoring. See how your responsible card
                      usage impacts your credit profile and get personalized
                      tips to improve your score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Budgeting and Savings Tools:
                      </span>{" "}
                      Access personalized budgeting with spend breakdowns,
                      customizable budget caps, and AI-powered automatic savings
                      that only saves what you can afford based on your
                      financial situation.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Compatibility:
                      </span>{" "}
                      Add your Tilt card to Apple Pay, Google Pay, or Samsung
                      Pay for secure contactless payments anywhere digital
                      wallets are accepted.
                    </div>
                  </div>
                </div>
              </section>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process Step-by-Step
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  Applying for a Tilt card is straightforward and can be
                  completed in minutes through the Tilt mobile app or website:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-7 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-gray-800 mb-1 text-left">
                        Start Pre-Qualification
                      </h3>
                      <p className="text-sm leading-5 text-left">
                        Visit apply.tilt.com/credit-card or download the Tilt
                        app from the App Store or Google Play. Click "Get
                        Started" and provide basic information including your
                        name, address, date of birth, Social Security number,
                        and income details. This soft credit pull won't impact
                        your credit score.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-7 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-gray-800 mb-1 text-left">
                        Link Your Bank Account (Recommended)
                      </h3>
                      <p className="text-sm leading-5 text-left">
                        When prompted, securely connect your checking account
                        through Plaid. This significantly improves your approval
                        odds by allowing Tilt to verify your income and spending
                        patterns. Your banking credentials are encrypted and
                        never stored by Tilt.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-7 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-gray-800 mb-1 text-left">
                        Review Your Card Matches
                      </h3>
                      <p className="text-sm leading-5 text-left">
                        Tilt will automatically evaluate you for all three
                        cards—Essentials, Motion, and Engage—and show you which
                        cards you pre-qualify for. You'll see the features,
                        rewards, and annual fees for each option to help you
                        choose.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-7 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-gray-800 mb-1 text-left">
                        Submit Full Application
                      </h3>
                      <p className="text-sm leading-5 text-left">
                        Select your preferred card and submit your full
                        application. This step involves a hard credit inquiry
                        from WebBank that may temporarily affect your credit
                        score. Review and accept the terms and conditions,
                        including the $8/month subscription fee after your
                        14-day trial.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-7 rounded-full bg-[#e4e24e] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-900 font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-gray-800 mb-1 text-left">
                        Receive Your Decision
                      </h3>
                      <p className="text-sm leading-5 text-left">
                        Most applicants receive an instant decision. If
                        approved, your Tilt card will arrive within 7-10
                        business days. You can typically add your card to
                        digital wallets immediately and start using it for
                        contactless payments before the physical card arrives.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6 my-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-md font-semibold text-gray-800 mb-2 text-left">
                      What happens if I'm not approved for a Tilt card?
                    </h3>
                    <p className="text-sm leading-5 text-left">
                      If you're not approved right now, you can reapply after 30
                      days. In the meantime, consider applying for a Tilt Cash
                      Advance or Line of Credit, which may have different
                      approval criteria. The pre-qualification process has no
                      credit impact, so checking if you qualify again won't hurt
                      your score.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-md font-semibold text-gray-800 mb-2 text-left">
                      Which Tilt card is right for me?
                    </h3>
                    <p className="text-sm leading-5 text-left">
                      Tilt cards are designed for different credit-building
                      needs. The Motion and Engage cards are great for people
                      new to credit or rebuilding their scores. The Essentials
                      card is ideal for everyday expenses with bonus cash back
                      on gas and groceries. Apply to be considered for all three
                      cards and receive your best personalized offer.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-md font-semibold text-gray-800 mb-2 text-left">
                      Is it safe to link my bank account?
                    </h3>
                    <p className="text-sm leading-5 text-left">
                      Yes! Tilt partners with Plaid, a leading financial
                      services technology company, to protect your personal
                      information with secure 256-bit encryption through the
                      bank linking process. Your banking credentials are never
                      stored by Tilt, and bank linking helps secure your best
                      possible offer by demonstrating your financial
                      responsibility.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-md font-semibold text-gray-800 mb-2 text-left">
                      How does a Tilt card help build my credit?
                    </h3>
                    <p className="text-sm leading-5 text-left">
                      On-time payments are one of the most important factors in
                      your credit score, accounting for approximately 35% of
                      your FICO score. Using your Tilt card responsibly and
                      making consistent, on-time payments helps establish
                      positive credit history. WebBank reports your payment
                      activity to all three major credit bureaus—Equifax,
                      Experian, and TransUnion.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-md font-semibold text-gray-800 mb-2 text-left">
                      Can I have multiple Tilt products at once?
                    </h3>
                    <p className="text-sm leading-5 text-left">
                      Tilt customers are limited to one of the following at a
                      time: Cash Advance, Tilt Credit Cards, or the Tilt Line of
                      Credit. You cannot have multiple products simultaneously,
                      but you can switch between products by closing one and
                      applying for another.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-md font-semibold text-gray-800 mb-2 text-left">
                      How do I cancel my Tilt subscription?
                    </h3>
                    <p className="text-sm leading-5 text-left">
                      You can cancel your $8/month Tilt subscription at any time
                      without penalty. Simply visit "Billing" in the Tilt mobile
                      app or contact help@tilt.com. Make sure to cancel before
                      your 14-day free trial ends if you don't want to be
                      charged the subscription fee.
                    </p>
                  </div>
                </div>
              </section>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Important Disclaimers and Risk Warnings
                </h2>

                <div className="space-y-4">
                  <p className="text-gray-800 text-sm leading-5 text-left">
                    <span className="font-semibold">Credit Score Impact:</span>{" "}
                    While Tilt cards are designed to help build credit through
                    on-time payments reported to credit bureaus, results vary by
                    individual. Not all customers will see credit score
                    improvements. On-time payments may have a positive impact,
                    while late or missed payments will negatively impact your
                    credit score and may result in late fees, increased APR, and
                    potential account closure.
                  </p>

                  <p className="text-gray-800 text-sm leading-5 text-left">
                    <span className="font-semibold">APR and Interest:</span> The
                    APR on Tilt cards is variable and may change with market
                    conditions. The APR applies to any unpaid balance carried
                    month-to-month. To avoid interest charges, pay your full
                    statement balance by the due date each billing cycle.
                    Minimum payments will result in significant interest charges
                    over time and extended repayment periods.
                  </p>

                  <p className="text-gray-800 text-sm leading-5 text-left">
                    <span className="font-semibold">
                      Subscription Commitment:
                    </span>{" "}
                    Remember that in addition to card-specific fees, Tilt
                    charges an $8/month subscription fee that begins after your
                    14-day free trial. This fee applies even if you don't
                    actively use your card. Factor this ongoing cost into your
                    decision when comparing Tilt cards to other credit-building
                    options.
                  </p>

                  <p className="text-gray-800 text-sm leading-5 text-left">
                    <span className="font-semibold">State Availability:</span>{" "}
                    Tilt's full suite of products and services is not available
                    in all states. Check state eligibility during the
                    application process. Cash Advance products are not available
                    to Connecticut, Maine, or Washington, D.C. residents.
                  </p>

                  <p className="text-gray-800 text-sm leading-5 text-left">
                    <span className="font-semibold">Not Financial Advice:</span>{" "}
                    This information is for educational and informational
                    purposes only and does not constitute financial advice.
                    Consider your individual financial situation, goals, and
                    ability to make payments before applying for any credit
                    card. Consult with a qualified financial advisor to
                    determine if a Tilt card aligns with your credit-building
                    strategy.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Important:</span> Credit
                    cards should be used responsibly. Only charge what you can
                    afford to pay off each month. Missing payments or carrying
                    high balances can damage your credit score and result in
                    significant interest charges. Tilt credit cards are issued
                    by WebBank. Tilt is a financial technology company, not a
                    bank.
                  </p>
                </div>
              </section>

              <div className="text-left my-8">
                <a
                  href="https://apply.tilt.com/credit-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#e4e24e] hover:bg-yellow-400 text-gray-900 font-medium text-md py-2 px-8 rounded-full w-full">
                    Apply Now at Official Website
                  </Button>
                </a>
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
