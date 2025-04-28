import React from "react";
import { Link } from "react-router-dom";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const rainbowButtonVariants = cva(
  "group relative inline-flex animate-rainbow cursor-pointer items-center justify-center gap-2 rounded-xl border-0 bg-[length:200%] px-8 py-3 font-medium transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "text-primary-foreground",
          "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
          "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
          "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        ],
        outline: [
          "border-2 border-current hover:bg-primary/10",
          "before:hidden",
        ],
        ghost: [
          "hover:bg-primary/10",
          "before:hidden",
        ],
        link: [
          "text-primary underline-offset-4 hover:underline",
          "before:hidden",
        ],
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-12 px-10 py-4 text-lg",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof rainbowButtonVariants> {
  asChild?: boolean;
  href?: string;
}

export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, variant, size, asChild = false, href, children, ...props }, ref) => {
    const Comp = asChild ? Slot : href ? Link : "button";
    return (
      <Comp
        className={cn(rainbowButtonVariants({ variant, size, className }))}
        ref={ref}
        to={href}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

RainbowButton.displayName = "RainbowButton";