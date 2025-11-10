import type React from "react";
import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonBaseProps {
  variant?: "primary" | "secondary";
  showArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  /**
   * Accessibility label for screen readers
   * Required for buttons without text content
   */
  "aria-label"?: string;
}

export interface ButtonAsButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

export interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function buttonVariants(variant?: "primary" | "secondary" | "outline") {
  return cn(
    "inline-flex items-center justify-center px-5 md:px-6 py-2 md:py-2.5 text-sm md:text-base font-medium transition-colors duration-200 rounded-full whitespace-nowrap",
    {
      "bg-primary hover:bg-primary-dark text-white": variant === "primary",
      "bg-white hover:bg-gray-100 text-gray-900 border border-gray-300":
        variant === "secondary",
      "border border-gray-300 bg-transparent hover:bg-gray-100":
        variant === "outline",
    },
  );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      showArrow = false,
      fullWidth = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonStyles = cn(
      buttonVariants(variant),
      {
        "w-full": fullWidth,
      },
      className,
    );

    const content = (
      <>
        <span>{children}</span>
        {showArrow && <ArrowRight className="ml-2 -mr-1 w-5 h-5" />}
      </>
    );

    if ("href" in props && props.href !== undefined) {
      const { disabled, onClick, ...linkProps } = props as ButtonAsLinkProps;

      if (disabled) {
        return (
          <span className={cn(buttonStyles, "opacity-50 cursor-not-allowed")}>
            {content}
          </span>
        );
      }

      return (
        <Link href={linkProps.href} className={buttonStyles} onClick={onClick}>
          {content}
        </Link>
      );
    }

    return (
      <button
        className={buttonStyles}
        ref={ref}
        {...(props as ButtonAsButtonProps)}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
