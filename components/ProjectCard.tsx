"use client";

import { Card } from "@/components/ui/card"; // Only Card
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  techStack: string;
  description: string[];
  image: string;
};

export default function ProjectCard({ title, techStack, description, image }: ProjectCardProps) {
  return (
    <Card className="project-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="techStack text-sm text-gray-600 dark:text-gray-300 mb-2">{techStack}</p>
        <ul className="list-disc list-inside mb-2">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <img
          src={image}
          alt={`${title} Screenshot`}
          className="mt-2 w-full rounded-md shadow-sm"
        />
      </motion.div>
    </Card>
  );
}
