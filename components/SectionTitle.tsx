"use client";

import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionTitle({ title, subtitle, children }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
