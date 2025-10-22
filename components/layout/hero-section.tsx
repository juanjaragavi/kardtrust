import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="section pb-[50px]">
      <div className="container mx-auto px-4">
        {/* Mobile: Stacked Layout, Desktop: Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-primary text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700">
              {subtitle}
            </p>
            <Link href={ctaLink}>
              <Button className="mt-6 px-8 py-6 text-base font-semibold">
                {ctaText}
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[750/390] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
