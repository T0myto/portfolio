"use client";

import { motion } from "framer-motion";
import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { skills } from "@/lib/skills";
import { useState } from "react";

export default function CompetencesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Compétences"
          subtitle="Les technologies et outils avec lesquels je travaille"
        />

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.button
              key={skill.category}
              variants={itemVariants}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === skill.category ? null : skill.category
                )
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === skill.category ||
                selectedCategory === null
                  ? "bg-blue-500 text-white"
                  : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              }`}
            >
              {skill.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skills
            .filter(
              (skill) =>
                selectedCategory === null || skill.category === selectedCategory
            )
            .map((skill, idx) => (
              <MotionFade key={skill.category} delay={idx * 0.1}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{skill.category}</h3>
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {skill.items.map((item) => (
                      <motion.div
                        key={item}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="p-4 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-center"
                      >
                        <p className="font-semibold text-sm">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </MotionFade>
            ))}
        </div>
      </div>
    </div>
  );
}
