// app/teachers-hub/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Briefcase,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, staggerChildren: 0.08, ease: EASE_OUT },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT } },
};

type HubTab = "Opportunities" | "Career Growth" | "Resources";

type CardItem = {
  title: string;
  desc: string;
  image: string;
  badge: string;
};

export default function TeachersHubPage() {
  const [tab, setTab] = useState<HubTab>("Opportunities");
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const opportunities: CardItem[] = useMemo(
    () => [
      {
        title: "Role Matching Preview",
        desc: "See how we match teachers to schools based on level, subject, and teaching style.",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
        badge: "Interactive",
      },
      {
        title: "Hiring Readiness Score",
        desc: "A quick self-check that helps you understand what schools typically look for.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
        badge: "Quick check",
      },
      {
        // ✅ This is the one you said you don’t see
        title: "School Fit Checklist",
        desc: "A simple checklist that helps you compare opportunities with confidence.",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
        badge: "Guide",
      },
    ],
    []
  );

  const career: CardItem[] = useMemo(
    () => [
      {
        title: "Interview Practice Prompts",
        desc: "Tap through realistic interview prompts and suggestions for strong answers.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
        badge: "Interactive",
      },
      {
        title: "Demo Lesson Builder",
        desc: "Open an outline that helps you structure a confident demo lesson in minutes.",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
        badge: "Template",
      },
      {
        title: "Growth Roadmap",
        desc: "Explore pathways: Classroom → Senior Teacher → Coordinator → Leadership.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
        badge: "Plan",
      },
    ],
    []
  );

  const resources: CardItem[] = useMemo(
    () => [
      {
        title: "Teacher CV Structure",
        desc: "A clean, modern CV format schools like—simple and readable.",
        image:
          "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=80",
        badge: "CV",
      },
      {
        title: "Classroom Routines",
        desc: "High-impact routines to support calm, consistent learning spaces.",
        image:
          "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80",
        badge: "Classroom",
      },
      {
        title: "Parent Communication Scripts",
        desc: "Helpful wording for updates, meetings, and conflict prevention.",
        image:
          "https://images.unsplash.com/photo-1520975958225-9f61b69f2229?auto=format&fit=crop&w=1600&q=80",
        badge: "Communication",
      },
    ],
    []
  );

  const cards =
    tab === "Opportunities"
      ? opportunities
      : tab === "Career Growth"
      ? career
      : resources;

  return (
    <PageShell
      title="Teachers Hub"
      subtitle="Resources, opportunities, and support for educators"
      heroImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=80"
    >
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Soft brand glows */}
        <div className="pointer-events-none absolute -top-10 left-1/2 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-[#0CE2A8]/12 blur-3xl" />
        <div className="pointer-events-none absolute top-24 right-0 h-64 w-64 rounded-full bg-[#002244]/10 blur-3xl" />

        {/* Top area */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-12"
        >
          <motion.div variants={item} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#0CE2A8]/10 blur-2xl" />

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0CE2A8]/12 text-[#0CE2A8] ring-1 ring-[#0CE2A8]/20">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#002244]">
                    Everything teachers need — in one place
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Explore previews of our tools, templates, and guidance.
                    These are interactive demos designed to show what we offer —
                    no redirects, no dead buttons.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Tag icon={<Briefcase className="h-4 w-4" />}>
                  Opportunities
                </Tag>
                <Tag icon={<GraduationCap className="h-4 w-4" />}>
                  Career growth
                </Tag>
                <Tag icon={<BookOpen className="h-4 w-4" />}>Resources</Tag>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <MiniStat value="500+" label="Placements" />
                <MiniStat value="200+" label="Partner schools" />
                <MiniStat value="98%" label="Retention rate" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-[#002244] to-[#0CE2A8] p-6 shadow-sm">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
              <h3 className="text-lg font-bold text-white">Quick self-check</h3>
              <p className="mt-2 text-sm text-white/90">
                Tap a level below to see a preview of what schools usually
                expect.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <PreviewChip text="Primary" />
                <PreviewChip text="Secondary" />
                <PreviewChip text="Admin" />
                <PreviewChip text="Specialist" />
              </div>

              <p className="mt-4 text-xs text-white/80">
                Preview-only. We’ll connect it to real flows later.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Tabs + content */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <motion.div
            variants={item}
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <div className="text-xs font-semibold tracking-widest text-[#0CE2A8]">
                TEACHERS HUB
              </div>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[#002244]">
                Explore what’s inside
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Switch tabs to preview different areas.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <TabButton
                active={tab === "Opportunities"}
                onClick={() => setTab("Opportunities")}
              >
                Opportunities
              </TabButton>
              <TabButton
                active={tab === "Career Growth"}
                onClick={() => setTab("Career Growth")}
              >
                Career Growth
              </TabButton>
              <TabButton
                active={tab === "Resources"}
                onClick={() => setTab("Resources")}
              >
                Resources
              </TabButton>
            </div>
          </motion.div>

          {/* ✅ Force exactly 3 cards and ensure they render */}
          <motion.div
            variants={item}
            className="mt-6 grid gap-6 md:grid-cols-3"
          >
            {cards.slice(0, 3).map((c) => (
              <PreviewCard
                key={c.title}
                title={c.title}
                description={c.desc}
                image={c.image}
                badge={c.badge}
              />
            ))}
          </motion.div>
        </motion.section>

        {/* FAQ + benefits */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 lg:grid-cols-12"
        >
          <motion.div variants={item} className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#002244]">
                FAQs (Preview)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Tap to expand. This is interactive, but it doesn’t navigate
                anywhere.
              </p>

              <div className="mt-6 space-y-3">
                {FAQS.map((f, idx) => {
                  const isOpen = openFAQ === idx;
                  return (
                    <button
                      key={f.q}
                      type="button"
                      onClick={() => setOpenFAQ(isOpen ? null : idx)}
                      className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:bg-slate-50"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-sm font-semibold text-[#002244]">
                          {f.q}
                        </div>
                        <ChevronDown
                          className={[
                            "mt-0.5 h-4 w-4 text-slate-500 transition-transform",
                            isOpen ? "rotate-180" : "",
                          ].join(" ")}
                        />
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                          marginTop: isOpen ? 10 : 0,
                        }}
                        transition={{ duration: 0.25, ease: EASE_OUT }}
                        className="overflow-hidden"
                      >
                        <div className="text-sm leading-relaxed text-slate-600">
                          {f.a}
                        </div>
                      </motion.div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#002244]">
                What you’ll get
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Preview of benefits (no links).
              </p>

              <div className="mt-6 space-y-3">
                <Benefit text="Clear guidance for CV + interviews" />
                <Benefit text="Better matching based on your preferences" />
                <Benefit text="Practical templates for demo lessons" />
                <Benefit text="Support that feels human" />
              </div>

              <div className="mt-6 rounded-2xl border border-[#0CE2A8]/25 bg-[#0CE2A8]/10 p-4">
                <div className="text-sm font-semibold text-[#002244]">
                  Coming soon
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  We’ll connect these previews to real actions once your flows
                  are ready.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <div className="h-8" />
      </div>
    </PageShell>
  );
}

/* ---------------- Components ---------------- */

function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-sm font-semibold transition",
        active
          ? "bg-[#0CE2A8] text-[#002244]"
          : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function PreviewCard({
  title,
  description,
  image,
  badge,
}: {
  title: string;
  description: string;
  image: string;
  badge: string;
}) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 450, damping: 28 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="relative h-40 overflow-hidden">
        {imgOk ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            loading="lazy"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#002244] to-[#0CE2A8]" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#002244]/45 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#002244]">
          {badge}
        </div>
      </div>

      <div className="p-5">
        <div className="text-base font-bold text-[#002244]">{title}</div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500">
            Preview only
          </span>
          <span className="h-1.5 w-14 rounded-full bg-[#0CE2A8]/80" />
        </div>
      </div>
    </motion.div>
  );
}

function Tag({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#0CE2A8]/30 bg-[#0CE2A8]/10 px-3 py-1 text-xs font-semibold text-[#002244]">
      {icon}
      {children}
    </span>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-xl font-bold text-[#002244]">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
      <div className="mt-3 h-1.5 w-12 rounded-full bg-[#0CE2A8]/80" />
    </div>
  );
}

function PreviewChip({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/25"
    >
      {text}
      <div className="mt-1 text-xs font-medium text-white/80">
        Tap to preview
      </div>
    </button>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0CE2A8]/12 text-[#0CE2A8] ring-1 ring-[#0CE2A8]/20">
        <CheckCircle2 className="h-5 w-5" />
      </div>
      <div className="text-sm font-semibold text-[#002244]">{text}</div>
    </div>
  );
}

const FAQS = [
  {
    q: "Does this page apply to jobs directly?",
    a: "Not yet. This hub is a preview experience — it’s interactive, but it doesn’t send applications anywhere.",
  },
  {
    q: "What will be connected later?",
    a: "We can later connect role matching, CV submissions, interview booking, and resource downloads once your backend flows are ready.",
  },
  {
    q: "Can we add real content later?",
    a: "Yes — we can swap the preview items with real jobs/resources from your database when you’re ready.",
  },
];
