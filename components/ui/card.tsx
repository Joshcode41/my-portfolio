"use client";

import { forwardRef, ReactNode } from "react";
import cn from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300",
      className
    )}
    {...props}
  >
    {children}
  </div>
));

Card.displayName = "Card";
export { Card };
