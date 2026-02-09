"use client";

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-3 py-1 rounded-full text-sm inline-block">
      {skill}
    </span>
  );
}

