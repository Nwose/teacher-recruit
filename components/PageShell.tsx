"use client";

import { motion } from "framer-motion";
import React from "react";

type PageShellProps = {
  title: string;
  subtitle?: string;
  heroImage?: string;
  children: React.ReactNode;
};

export default function PageShell({
  title,
  subtitle,
  heroImage,
  children,
}: PageShellProps) {
  return (
    <main className="bg-white">
      {/* Hero Header */}
      <section
        className="relative overflow-hidden"
        style={
          heroImage
            ? {
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        {/* Fallback / Overlay */}
        <div
          className={`absolute inset-0 ${
            heroImage ? "bg-[#003366]/80" : "bg-[#003366]"
          }`}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-white/80 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0CE2A8]" />
      </section>

      {/* Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        {children}
      </motion.section>
    </main>
  );
}
