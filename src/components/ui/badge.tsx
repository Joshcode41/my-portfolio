"use client";

import { forwardRef } from "react";
import cn from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary";
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(({ className, variant = "default", ...props }, ref) => {
  const baseStyle =
    "inline-block px-3 py-1 rounded-full text-sm font-medium";
  const variantStyle =
    variant === "secondary"
      ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      : "bg-blue-600 text-white dark:bg-blue-500 dark:text-white";

  return <div ref={ref} className={cn(baseStyle, variantStyle, className)} {...props} />;
});

Badge.displayName = "Badge";
export { Badge };
