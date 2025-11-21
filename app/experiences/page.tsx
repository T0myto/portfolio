"use client";

import { motion } from "framer-motion";
import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { experiences } from "@/lib/experiences";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Mes expériences"
          subtitle="Un parcours dans l'infra, le réseau et la cybersécurité"
        />

        <div className="space-y-16 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <MotionFade key={exp.id} delay={idx * 0.15} direction="up">
              <motion.div
                className="p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg"
                whileHover={{ y: -8 }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <p className="text-lg text-blue-500 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-neutral-600 dark:text-neutral-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Points clés :</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <motion.li
                          key={highlight}
                          className="flex gap-3 text-neutral-600 dark:text-neutral-400 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-blue-500 font-bold">→</span>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </MotionFade>
          ))}
        </div>

        {/* Timeline Visualization */}
        <motion.div
          className="mt-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Timeline</h3>
          <div className="relative space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-neutral-950"></div>
                <div className="space-y-1">
                  <p className="font-semibold text-blue-500">{exp.period}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {exp.title} @ {exp.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
