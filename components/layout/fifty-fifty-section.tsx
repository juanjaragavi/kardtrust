import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FiftyFiftySectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
  imagePosition?: "left" | "right";
  bgColor?: "white" | "light";
}

export function FiftyFiftySection({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  ctaLink,
  imagePosition = "right",
  bgColor = "white",
}: FiftyFiftySectionProps) {
  const bgClass = bgColor === "light" ? "bg-gray-50" : "bg-white";

  return (
    <section className={`section ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 lg:p-10">
          <div className="items-center gap-8 md:grid md:grid-cols-2">
            {/* Image Container */}
            <div
              className={`service-carousel ${imagePosition === "right" ? "md:order-2" : "md:order-1"}`}
            >
              <div className="relative w-full aspect-[538/328] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Container */}
            <div
              className={`service-content mt-5 md:mt-0 ${imagePosition === "right" ? "md:order-1" : "md:order-2"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                {title}
              </h2>
              <p className="mt-4 mb-6 text-base md:text-lg text-gray-700 leading-relaxed">
                {description}
              </p>
              <Link
                href={ctaLink}
                className="cta-link inline-flex items-center text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
