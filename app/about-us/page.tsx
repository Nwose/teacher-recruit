// app/about-us/page.tsx
"use client";

import React from "react";
import PageShell from "@/components/PageShell";
import {
  Zap,
  BadgeCheck,
  Users,
  Sparkles,
  ShieldCheck,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function AboutUsPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="Who we are and why we do what we do"
      heroImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
    >
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Decorative accents */}
        <div className="pointer-events-none absolute -top-10 left-1/2 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-[#0CE2A8]/20 blur-3xl" />
        <div className="pointer-events-none absolute top-32 right-0 h-64 w-64 rounded-full bg-[#002244]/15 blur-3xl" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-12 lg:items-start"
        >
          {/* LEFT */}
          <div className="lg:col-span-7">
            {/* Intro */}
            <motion.div variants={item} className="space-y-4">
              <p className="text-base leading-relaxed text-slate-600">
                Recruitment and Training Hub is committed to connecting
                institutions with exceptional talent while empowering educators
                to grow, succeed, and lead.
              </p>

              <p className="text-base leading-relaxed text-slate-600">
                Our approach combines professionalism, integrity, and deep
                industry understanding—focused on long-term fit for both schools
                and candidates.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Pill>Recruitment</Pill>
                <Pill>Training</Pill>
                <Pill>Screening</Pill>
                <Pill>Placement Support</Pill>
              </div>
            </motion.div>

            {/* Why partner */}
            <motion.div variants={item} className="mt-10">
              <h2 className="text-xl font-semibold text-[#002244]">
                Why Partner With Us?
              </h2>

              <div className="mt-6 space-y-6">
                <Feature
                  icon={<Zap className="h-5 w-5" />}
                  title="Speed & Efficiency"
                  description="We maintain a pre-vetted network of qualified educators, helping you fill vacancies faster—without sacrificing quality."
                />
                <Feature
                  icon={<BadgeCheck className="h-5 w-5" />}
                  title="Quality Guaranteed"
                  description="Every candidate goes through a structured screening process. If a placement doesn’t work out within the agreed period, we’ll help you replace quickly."
                />
                <Feature
                  icon={<Users className="h-5 w-5" />}
                  title="Other Organizations"
                  description="Beyond schools, we support recruitment and training for admin teams, ed-tech roles, facilitators, and education-focused organizations."
                />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              <StatCard label="Partner Institutions" value="50+" />
              <StatCard label="Qualified Talent Pool" value="1,000+" />
              <StatCard label="Avg. Shortlist Time" value="72 hrs" />
            </motion.div>

            {/* Values */}
            <motion.div
              variants={item}
              className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#002244]" />
                <h3 className="text-lg font-semibold text-[#002244]">
                  What We Stand For
                </h3>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <MiniValue
                  icon={<ShieldCheck className="h-5 w-5" />}
                  title="Integrity-first"
                  description="Transparent processes, honest expectations, and reliable communication."
                />
                <MiniValue
                  icon={<Handshake className="h-5 w-5" />}
                  title="Partnership mindset"
                  description="We don’t just fill roles—we help teams build capacity and continuity."
                />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                We exist to make hiring and training simpler, faster, and more
                reliable—so institutions can focus on what matters most:
                delivering excellent education.
              </p>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <motion.div variants={item} className="lg:sticky lg:top-6">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                {/* Card gradient header */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#002244] to-[#0CE2A8]" />
                <div className="relative">
                  <h3 className="text-lg font-semibold text-white">
                    Contact Our Team
                  </h3>
                  <p className="mt-1 text-sm text-white/90">
                    Tell us what you need—recruitment, training, or both. We’ll
                    respond within 1 business day.
                  </p>
                </div>

                <form className="relative mt-6 space-y-4">
                  <Field label="Contact Name">
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 28,
                      }}
                      className={inputCls}
                      placeholder="John Doe"
                      name="name"
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="School / Organization Name">
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 28,
                      }}
                      className={inputCls}
                      placeholder="Green Valley Academy"
                      name="organization"
                      autoComplete="organization"
                    />
                  </Field>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Email Address">
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 28,
                        }}
                        className={inputCls}
                        placeholder="admin@school.com"
                        name="email"
                        type="email"
                        autoComplete="email"
                      />
                    </Field>

                    <Field label="Phone Number">
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 28,
                        }}
                        className={inputCls}
                        placeholder="(555) 123-4567"
                        name="phone"
                        autoComplete="tel"
                      />
                    </Field>
                  </div>

                  <Field label="Role Details (Optional)">
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 28,
                      }}
                      className={textareaCls}
                      placeholder="Brief description of the vacancy..."
                      name="details"
                    />
                  </Field>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#002244] text-sm font-semibold text-white shadow-sm ring-1 ring-[#002244]/10 hover:bg-[#001a35] focus:outline-none focus:ring-2 focus:ring-[#0CE2A8]/35"
                  >
                    Send Request
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </motion.button>

                  <p className="text-center text-xs text-slate-500">
                    By submitting, you agree to be contacted about your request.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}

/* ---------------- Components ---------------- */

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
      className="flex gap-4 rounded-2xl border border-transparent p-2 hover:border-slate-200 hover:bg-white hover:shadow-sm"
    >
      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0CE2A8]/15 text-[#002244] ring-1 ring-[#0CE2A8]/20">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-[#002244]">{title}</div>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="text-2xl font-semibold text-[#002244]">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
      <div className="mt-3 h-1.5 w-14 rounded-full bg-[#0CE2A8]/70" />
    </motion.div>
  );
}

function MiniValue({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
      className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#002244]">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-[#002244]">{title}</div>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-medium text-slate-600">{label}</div>
      {children}
    </label>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#0CE2A8]/40 bg-[#0CE2A8]/10 px-3 py-1 text-xs font-medium text-[#002244]">
      {children}
    </span>
  );
}

/* ---------------- Motion (Framer Motion v12-safe) ---------------- */

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      duration: 0.4,
      ease: EASE_OUT,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
};

/* ---------------- Styles ---------------- */

const inputCls =
  "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-[#0CE2A8] focus:bg-white focus:ring-2 focus:ring-[#0CE2A8]/25";

const textareaCls =
  "min-h-[120px] w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0CE2A8] focus:bg-white focus:ring-2 focus:ring-[#0CE2A8]/25";
