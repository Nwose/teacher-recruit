// components/TrustProcessTestimonialsSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ClipboardList, Users, CheckCircle2, Sparkles } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";

export default function TrustProcessTestimonialsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-[#0CE2A8]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-24 right-0 h-64 w-64 rounded-full bg-[#002244]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Stats strip */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <Stat value="500+" label="Placements" />
            <Stat value="200+" label="Partner Schools" />
            <Stat value="98%" label="Retention Rate" />
            <Stat value="10+" label="Years Experience" />
          </div>
        </motion.div>

        {/* How we work */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2"
          >
            <span className="text-xs font-semibold tracking-widest text-[#0CE2A8]">
              HOW WE WORK
            </span>
            <Sparkles className="h-4 w-4 text-[#0CE2A8]" />
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-3 text-3xl md:text-4xl font-bold text-[#002244]"
          >
            Our Seamless Recruitment Process
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-3 text-slate-600 max-w-2xl mx-auto"
          >
            We take the hassle out of hiring, ensuring a perfect match every
            time.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard
              step={1}
              title="Requirement Analysis"
              description="We consult with your school to understand your culture, curriculum, and specific needs for the role."
              icon={<ClipboardList className="h-7 w-7" />}
            />
            <ProcessCard
              step={2}
              title="Rigorous Screening"
              description="Our team interviews and vets candidates—checking credentials, experience, and teaching philosophy."
              icon={<Users className="h-7 w-7" />}
            />
            <ProcessCard
              step={3}
              title="Placement & Support"
              description="We facilitate final interviews and provide ongoing support to ensure a smooth transition."
              icon={<CheckCircle2 className="h-7 w-7" />}
            />
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16"
        >
          <motion.h3
            variants={item}
            className="text-2xl md:text-3xl font-bold text-center text-[#002244]"
          >
            Trusted Recruitment and Match-making For The Education Sector And
            Beyond
          </motion.h3>

          <motion.p
            variants={item}
            className="mt-3 text-center text-slate-600 max-w-2xl mx-auto"
          >
            Real results, real feedback. Here’s what partners and educators say
            about working with us.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <TestimonialCard
              name="Princess Anya Sharma"
              role="Head of English"
              text="Great service and excellent matching. The turnaround time was impressive and communication was clear."
              photo="https://media.gettyimages.com/id/1820045956/photo/successful-and-confident-black-middle-aged-businesswoman.jpg?s=612x612&w=gi&k=20&c=veOhtQzNLeH1MvGxtB8kS9F2Ig0kS2Tmah55xKkB0k0="
              rating={5}
              highlight="Fast shortlist"
            />
            <TestimonialCard
              name="Tessie Nnadi"
              role="Educator"
              text="Found the perfect role quickly. The coaching and preparation helped me interview with confidence."
              photo="https://www.shutterstock.com/image-photo/face-portrait-manager-happy-black-600nw-2278812777.jpg"
              rating={5}
              highlight="Great support"
            />
            <TestimonialCard
              name="Separate & Grow Academy"
              role="Institution"
              text="Professional and dependable. The candidate quality was strong, and the placement support was excellent."
              photo="https://holdenparksch.b-cdn.net/wp-content/uploads/2024/08/1-1920x1880-1-770x400.jpg"
              rating={5}
              highlight="Top quality"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Small components ---------------- */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
      className="p-6 text-center"
    >
      <div className="text-3xl font-bold text-[#002244]">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
      <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-[#0CE2A8]/80" />
    </motion.div>
  );
}

function ProcessCard({
  step,
  title,
  description,
  icon,
}: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 450, damping: 28 }}
      className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      {/* Step badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#002244] text-white text-sm font-bold shadow-sm">
          {step}
        </div>
      </div>

      <div className="pt-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0CE2A8]/12 text-[#0CE2A8] ring-1 ring-[#0CE2A8]/20">
          {icon}
        </div>

        <div className="mt-5 text-lg font-semibold text-[#002244]">{title}</div>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ---------------- Motion ---------------- */

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const container: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
      ease: EASE_OUT,
    },
  },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: EASE_OUT,
    },
  },
};
