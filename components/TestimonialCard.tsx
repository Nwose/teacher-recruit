// components/TestimonialCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
  photo: string;
  rating?: number; // NEW
  highlight?: string; // NEW
};

export default function TestimonialCard({
  name,
  role,
  text,
  photo,
  rating = 5,
  highlight,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 450, damping: 28 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Top accent gradient */}
      <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0CE2A8] to-[#002244]" />

      {/* Subtle corner glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#0CE2A8]/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#0CE2A8]/30">
          <Image src={photo} alt={name} fill className="object-cover" />
        </div>

        <div className="min-w-0">
          <p className="truncate font-semibold text-[#002244] leading-tight">
            {name}
          </p>
          <p className="text-xs text-slate-500">{role}</p>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4"
                style={{
                  color: i < rating ? "#0CE2A8" : "#CBD5E1",
                  fill: i < rating ? "#0CE2A8" : "transparent",
                }}
              />
            ))}
          </div>
        </div>

        {/* Highlight chip */}
        {highlight ? (
          <span className="ml-auto hidden sm:inline-flex items-center rounded-full border border-[#0CE2A8]/35 bg-[#0CE2A8]/10 px-3 py-1 text-xs font-semibold text-[#002244]">
            {highlight}
          </span>
        ) : null}
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm leading-relaxed text-slate-600">“{text}”</p>

      {/* Bottom accent */}
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">
          Verified Partner
        </span>
        <div className="h-1.5 w-14 rounded-full bg-[#0CE2A8]/70" />
      </div>
    </motion.div>
  );
}
