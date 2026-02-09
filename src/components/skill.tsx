import { ReactNode } from "react";

interface SkillProps {
  icon?: ReactNode;
  name: string;
}

export default function Skill({ icon, name }: SkillProps) {
  return (
    <div
      className="flex items-center gap-2 p-2 rounded-md bg-slate-800/60 hover:bg-slate-700 transition-colors"
      title={name}        // hover tooltip
      aria-label={name}   // accessibility for screen readers
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-sm">{name}</span>
    </div>
  );
}
