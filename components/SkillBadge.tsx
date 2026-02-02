"use client";

import { Badge } from "@/components/ui/badge"; // If you have Shadcn UI Badge
import { motion } from "framer-motion";

type SkillBadgeProps = {
  skill: string;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Badge
        variant="secondary" // You can choose "default", "secondary", or your custom Shadcn variant
        className="px-3 py-1 rounded-full text-sm font-medium cursor-default bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      >
        {skill}
      </Badge>
    </motion.div>
  );
}
