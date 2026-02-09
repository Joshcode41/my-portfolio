"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip"; // optional for tooltips

type ProjectCardProps = {
  title: string;
  techStack: string;
  description: string[];
  image: string;
  githubLink?: string;
  liveDemoLink?: string;
};

export default function ProjectCard({
  title,
  techStack,
  description,
  image,
  githubLink,
  liveDemoLink,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="w-full md:w-1/2"
    >
      <Card className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">{techStack}</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <img
          src={image}
          alt={`${title} Screenshot`}
          className="w-full h-auto max-h-64 md:max-h-80 object-cover rounded-md shadow-sm"
        />
        <div className="flex gap-4 mt-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              GitHub
            </a>
          )}
          {liveDemoLink && (
            <a
              href={liveDemoLink}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
