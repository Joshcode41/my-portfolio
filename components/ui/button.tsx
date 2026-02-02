"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import cn from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

// Use motion.button to support Framer Motion props
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2",
          variant === "default"
            ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
            : "border border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-700",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
