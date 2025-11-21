"use client";

import { MotionFade } from "@/components/MotionFade";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Briefcase } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, 30, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{ left: "-10%", top: "-10%" }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 50, 0],
              y: [0, -30, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            style={{ right: "-10%", bottom: "-10%" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-6 inline-block">
              <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center gap-2">
                <Sparkles size={16} className="text-blue-400" />
                <p className="text-sm text-blue-400">Bienvenue sur mon portfolio</p>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tom Maudet
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Technicien Système | Infrastructure & Réseau
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-500 dark:text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              J'administre, installe et configure des infrastructures réseau et serveur.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/projets">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  Voir mes projets
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-lg font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  Me contacter
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <motion.a
                href="http://localhost:3002"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <Briefcase size={24} />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                className="p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
