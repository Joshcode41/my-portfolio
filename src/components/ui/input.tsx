"use client";

import { forwardRef } from "react";
import cn from "clsx"; // optional helper for classNames

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
export { Input };
