import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Tomo Credit Card Benefits: Build Credit, Earn Rewards, No Fees - KardTrust",
    description:
      "Discover the unique benefits of the Tomo Credit Card: no credit history required, flexible cashback rewards, and zero annual fees. Start building your credit journey today.",
    keywords: "credit cards, no credit check, cashback, credit building",
  };
}

export default function TomoCreditCardBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Tomo Credit Card Benefits: Build Credit, Earn Rewards, No Fees
            </h1>

            <div id="square02" data-topads data-topads-size="square" className="items-center justify-center flex w-full my-8"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-4">
                Tomo Credit Card® skips the credit check, bases limits on your
                income, and pays up to 20% cash back with select partners—all
                without annual fees or interest.
              </p>
              <p className="text-base text-gray-700 mb-6">
                Six automatic payments each billing cycle keep debt from
                snowballing while you build history across all three bureaus.
                Think of Tomo as a jump-start card before upgrading to
                traditional rewards products.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://us.topfinanzas.com/wp-content/uploads/2024/11/Tomo1.webp"
                  alt="Tomo Credit Card"
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

              <div className="my-6 grid gap-3">
                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
                  <p className="font-semibold">Quick snapshot</p>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>No credit check; approval uses income and bank data</li>
                    <li>1% base cash back, up to 20% with partner merchants</li>
                    <li>No annual fee, late fee, or interest charges</li>
                    <li>Weekly/biweekly autopay to reinforce on-time habits</li>
                  </ul>
                </div>
              </div>

              <div className="text-left my-6">
                <Link href="/financial-solutions/tomo-credit-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Accessible Approval Without a Credit File
              </h2>

              <p className="text-gray-700 mb-6">
                Tomo reviews linked bank accounts, income, and spending to set
                limits—no hard inquiry or minimum score required. That makes it
                a practical first card for immigrants, thin-file borrowers, and
                gig workers building history.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Cash Back That Scales With Partners
              </h2>

              <p className="text-gray-700 mb-6">
                Earn 1% everywhere and up to 20% with partner merchants.
                Activate offers inside the app before shopping for travel,
                groceries, or rideshares to lock in the bigger multipliers.
                Deposit the rewards into savings to create a habit loop while
                your score improves.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Weekly Autopay Keeps Interest at Zero
              </h2>

              <p className="text-gray-700 mb-6">
                Instead of charging interest, Tomo drafts your balance weekly or
                biweekly. That structure builds consistent payment history,
                keeps utilization low, and removes the risk of carrying
                revolving debt.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Limits Grow as Habits Improve
              </h2>

              <p className="text-gray-700 mb-6">
                Limit reviews happen automatically as income and spending
                stabilize. Maintain sub-30% utilization and connect multiple
                bank accounts to show additional cash flow when you request a
                higher ceiling.
              </p>

              <section className="my-6 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Disclosure
                </h3>
                <p className="text-sm text-gray-700 leading-5 mb-3 text-left">
                  <strong>Representative Example:</strong> Spend $300 monthly,
                  with $100 at partners averaging 10% back. Expect $21 in
                  rewards over 12 months with no annual fee or interest.
                </p>
                <p className="text-sm text-gray-700 leading-5 text-left">
                  <strong>Risk Warning:</strong> Missing a weekly draft can lock
                  the account and hurt credit progress. Partner cashback offers
                  vary and may require activation. Review Tomo’s terms before
                  applying.
                </p>
              </section>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Explore Other Financial Solutions
              </h2>

              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>
                  <Link
                    href="/financial-solutions/first-digital-nextgen-mastercard-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>First Digital NextGen Mastercard</strong>
                  </Link>
                  : Offers instant approval and no credit checks.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/visa-signature-us-current-build-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Visa Signature U.S. Current Build Card</strong>
                  </Link>
                  : Another great option for building or improving your credit
                  score.
                </li>
                <li>
                  <Link
                    href="/financial-solutions/capital-one-quicksilver-student-credit-card-benefits"
                    className="text-primary hover:underline"
                  >
                    <strong>Capital One Quicksilver Student Credit Card</strong>
                  </Link>
                  : Ideal for students starting their credit journey.
                </li>
              </ul>

              <div className="text-left my-8">
                <Link href="/financial-solutions/tomo-credit-card-requirements">
                  <Button className="bg-primary hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    See Detailed Requirements
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <AIContentDisclaimer />
      <CompactFooter />

      <CompactFooter />
    </main>
  );
}
