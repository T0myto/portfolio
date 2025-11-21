"use client";

import { motion } from "framer-motion";
import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { Github, Linkedin, Briefcase, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const socialLinks = [
    {
      name: "Site Pro",
      description: "Découvrez mon portfolio et mes projets",
      icon: Briefcase,
      href: "http://localhost:3002",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      name: "GitHub",
      description: "Consultez mes projets open source et contributions",
      icon: Github,
      href: "https://github.com/T0myto",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30"
    },
    {
      name: "LinkedIn",
      description: "Connectez-vous avec moi professionnellement",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tommaudet/",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/30"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Travaillons ensemble"
          subtitle="Vous pouvez me contacter via mes réseaux sociaux professionnels"
        />

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <MotionFade key={social.name} direction="up">
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`p-8 rounded-2xl border transition-all group cursor-pointer h-full flex flex-col ${social.bgColor} ${social.borderColor} hover:border-opacity-100 dark:hover:border-opacity-100`}>
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${social.color} text-white w-fit mb-4`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">{social.name}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-grow">{social.description}</p>
                  <motion.div
                    className="inline-flex items-center gap-2 text-blue-500 font-semibold group-hover:gap-3 transition-all w-fit"
                    whileHover={{ x: 4 }}>
                    <span>Visiter</span>
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.a>
              </MotionFade>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
