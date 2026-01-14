// app/teachers-hub/page.tsx
"use client";

import React from "react";
import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  BookOpen,
  ShieldCheck,
  Target,
  Users,
  CheckCircle2,
  Stars,
} from "lucide-react";

/**
 * Presentational only:
 * - No routing, no CTAs, no “explore” side labels/icons.
 * - Includes the GREEN gradient card.
 * - Uses your copy in a “hub” layout with images + subtle vector blobs.
 */

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=80";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, staggerChildren: 0.09, ease: EASE_OUT },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: EASE_OUT },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE_OUT } },
};

const floaty = {
  initial: { y: 0 },
  animate: {
    y: [0, -7, 0],
    transition: { duration: 5.4, repeat: Infinity, ease: "easeInOut" as const },
  },
};

type IconType = React.ComponentType<{ className?: string }>;

type HubCard = {
  title: string;
  desc: string;
  tag: string;
  Icon: IconType;
  image: string;
};

type Track = {
  title: string;
  desc: string;
  bullets: string[];
  Icon: IconType;
  accent: "mint" | "navy" | "slate";
};

const HUB_CARDS: HubCard[] = [
  {
    title: "Education Staffing",
    desc: "We partner with schools to provide highly qualified educators and administrators who are passionate about shaping the future.",
    tag: "Education",
    Icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Corporate & Professional Recruitment",
    desc: "We support businesses and non-education organizations in finding top-tier talent for operational, administrative, and leadership roles.",
    tag: "Corporate",
    Icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Training & Development",
    desc: "We provide training resources to ensure candidates remain at the forefront of their respective industries.",
    tag: "Training",
    Icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
  },
];

const TRUST_PANELS = [
  {
    title: "Vetted Quality",
    desc: "We find the right cultural and professional fit through a meticulous screening process.",
    Icon: ShieldCheck,
  },
  {
    title: "Versatility",
    desc: "A unique ability to serve both educational and corporate environments.",
    Icon: Users,
  },
  {
    title: "Commitment to Growth",
    desc: "We invest in talent, providing training aligned with modern workplace demands.",
    Icon: Target,
  },
];

const TRAINING_TRACKS: Track[] = [
  {
    title: "Teaching Excellence",
    desc: "Practical strategies that strengthen classroom leadership and learner engagement.",
    bullets: [
      "Classroom routines & culture",
      "Lesson structure & pacing",
      "Assessment & feedback",
    ],
    Icon: GraduationCap,
    accent: "mint",
  },
  {
    title: "Professional Skills",
    desc: "Modern workplace strengths for high-performing teams—communication and execution.",
    bullets: [
      "Communication frameworks",
      "Time & task planning",
      "Confidence & presence",
    ],
    Icon: Briefcase,
    accent: "slate",
  },
  {
    title: "Leadership Growth",
    desc: "Build the skills to lead teams, departments, and initiatives with impact.",
    bullets: [
      "Decision-making & accountability",
      "Coaching & mentorship",
      "Leading with empathy",
    ],
    Icon: Target,
    accent: "navy",
  },
];

const IMAGE_TILES = [
  {
    title: "Right fit, right role",
    subtitle: "Culture + capability",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Training that elevates",
    subtitle: "Practical + current",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Talent that leads",
    subtitle: "Ready to deliver",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function TeachersHubPage() {
  return (
    <PageShell
      title="Recruitment & Training Hub"
      subtitle="Connecting Excellence to Every Organization."
      heroImage={HERO_IMAGE}
    >
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Soft background glows */}
        <div className="pointer-events-none absolute -top-10 left-1/2 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-[#0CE2A8]/12 blur-3xl" />
        <div className="pointer-events-none absolute top-24 right-0 h-72 w-72 rounded-full bg-[#002244]/10 blur-3xl" />

        {/* Decorative vectors */}
        <VectorBlob className="pointer-events-none absolute -left-10 top-10 hidden sm:block" />
        <VectorBlob2 className="pointer-events-none absolute -right-12 top-48 hidden sm:block" />

        {/* Top row: white intro + GREEN card */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 lg:grid-cols-12"
        >
          <motion.div variants={item} className="lg:col-span-7">
            <motion.div
              {...floaty}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#0CE2A8]/10 blur-2xl" />

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0CE2A8]/12 text-[#0CE2A8] ring-1 ring-[#0CE2A8]/20">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                    <Stars className="h-4 w-4 text-[#0CE2A8]" />
                    Education • Corporate • Training
                  </div>

                  <h2 className="mt-3 text-xl font-bold text-[#002244]">
                    Connecting Excellence to Every Organization.
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    At Recruitment and Training Hub, we believe that the right
                    person in the right role has the power to transform an
                    entire organization. We serve as a premier bridge between
                    high-caliber talent and the institutions that need them
                    most.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <SoftPill icon={<GraduationCap className="h-4 w-4" />}>
                      Education
                    </SoftPill>
                    <SoftPill icon={<Briefcase className="h-4 w-4" />}>
                      Corporate
                    </SoftPill>
                    <SoftPill icon={<BookOpen className="h-4 w-4" />}>
                      Training
                    </SoftPill>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <MiniMetric
                  value="Rigorous"
                  label="screening"
                  Icon={ShieldCheck}
                />
                <MiniMetric
                  value="High-caliber"
                  label="talent pool"
                  Icon={Sparkles}
                />
                <MiniMetric value="Growth-led" label="training" Icon={Target} />
              </div>
            </motion.div>
          </motion.div>

          {/* GREEN card */}
          <motion.div variants={item} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-[#002244] to-[#0CE2A8] p-6 shadow-sm">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-2xl" />

              <h3 className="text-lg font-bold text-white">
                A hub built for excellence
              </h3>
              <p className="mt-2 text-sm text-white/90">
                A modern, polished experience that highlights recruitment and
                training in a clean, confidence-building layout.
              </p>

              <div className="mt-5 grid gap-3">
                <GradientRow text="Education staffing with expertise + empathy" />
                <GradientRow text="Corporate hiring for operational + leadership roles" />
                <GradientRow text="Training resources that keep talent future-ready" />
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                <div className="text-sm font-semibold text-white">
                  Ready to lead
                </div>
                <div className="mt-1 text-sm text-white/85">
                  Not just job-ready—leadership-ready.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Image tiles */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <motion.div variants={item}>
            <div className="text-xs font-semibold tracking-widest text-[#0CE2A8]">
              HIGHLIGHTS
            </div>
            <h3 className="mt-2 text-2xl font-bold text-[#002244] md:text-3xl">
              A premium, visual-first layout
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Image tiles add energy to the page—while the copy stays clear,
              confident, and professional.
            </p>
          </motion.div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {IMAGE_TILES.map((t, idx) => (
              <ImageTile key={t.title} tile={t} index={idx} />
            ))}
          </div>
        </motion.section>

        {/* Hub cards */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <motion.div variants={item}>
            <div className="text-xs font-semibold tracking-widest text-[#0CE2A8]">
              INSIDE THE HUB
            </div>
            <h3 className="mt-2 text-2xl font-bold text-[#002244] md:text-3xl">
              Core areas
            </h3>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              A clean card grid that communicates what the hub offers—designed
              to fill space beautifully and feel premium.
            </p>
          </motion.div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {HUB_CARDS.map((c, idx) => (
              <HubCardTile key={c.title} card={c} index={idx} />
            ))}
          </div>
        </motion.section>

        {/* Training tracks */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <motion.div
            variants={item}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div>
              <div className="text-xs font-semibold tracking-widest text-[#0CE2A8]">
                TRAINING SECTIONS
              </div>
              <h3 className="mt-2 text-xl font-bold text-[#002244] md:text-2xl">
                Training & development
              </h3>
              <p className="mt-2 max-w-3xl text-sm text-slate-600">
                Training resources designed to support continuous growth and
                keep professionals aligned with evolving demands.
              </p>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {TRAINING_TRACKS.map((t, idx) => (
                <TrainingCard key={t.title} track={t} index={idx} />
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Trust panels (product-style rows) */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <motion.div variants={item} className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold tracking-widest text-[#0CE2A8]">
                  WHY PEOPLE CHOOSE US
                </div>
                <h3 className="mt-2 text-xl font-bold text-[#002244] md:text-2xl">
                  Built for quality and fit
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Strong screening, broad coverage, and a training-first
                  mindset.
                </p>

                <div className="mt-5 grid gap-3">
                  {TRUST_PANELS.map((p, idx) => (
                    <TrustRow key={p.title} panel={p} index={idx} />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#0CE2A8]/10 blur-2xl" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#002244]/10 blur-2xl" />

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0CE2A8]/12 text-[#0CE2A8] ring-1 ring-[#0CE2A8]/20">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#002244]">
                      A modern hub layout that fills the page beautifully
                    </div>
                    <div className="mt-2 text-sm text-slate-600">
                      Crisp cards, image tiles, vector accents, and subtle
                      motion —designed to feel trustworthy and premium.
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <Chip text="Education + Corporate coverage" />
                      <Chip text="High-caliber matching" />
                      <Chip text="Training-first mindset" />
                      <Chip text="Clean visual hierarchy" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        <div className="h-10" />
      </div>
    </PageShell>
  );
}

/* ---------------- Components ---------------- */

type IconNode = React.ReactNode;

function SoftPill({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: IconNode;
}) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 460, damping: 30 }}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
    >
      {icon}
      {children}
    </motion.span>
  );
}

function MiniMetric({
  value,
  label,
  Icon,
}: {
  value: string;
  label: string;
  Icon: IconType;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 460, damping: 30 }}
      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-lg font-bold text-[#002244]">{value}</div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#002244] ring-1 ring-slate-200">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
      <div className="mt-3 h-1.5 w-12 rounded-full bg-[#0CE2A8]/80" />
    </motion.div>
  );
}

function ImageTile({
  tile,
  index,
}: {
  tile: { title: string; subtitle: string; image: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.06, duration: 0.4, ease: EASE_OUT },
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={tile.image}
          alt={tile.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002244]/65 via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <div className="text-xs font-semibold tracking-widest text-[#0CE2A8]">
          {tile.subtitle}
        </div>
        <div className="mt-1 text-base font-bold text-[#002244]">
          {tile.title}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500">
            Highlight
          </span>
          <span className="h-1.5 w-14 rounded-full bg-[#0CE2A8]/80 transition-all duration-300 group-hover:w-20" />
        </div>
      </div>
    </motion.div>
  );
}

function HubCardTile({ card, index }: { card: HubCard; index: number }) {
  const { title, desc, tag, Icon, image } = card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.06, duration: 0.4, ease: EASE_OUT },
      }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002244]/70 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#002244]">
          <Icon className="h-4 w-4" />
          {tag}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="text-base font-bold text-[#002244]">{title}</div>
          <span className="mt-1 h-2 w-2 rounded-full bg-[#0CE2A8]" />
        </div>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>

        <div className="mt-5 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
            <CheckCircle2 className="h-4 w-4 text-[#0CE2A8]" />
            High-caliber talent
          </span>
          <span className="h-1.5 w-14 rounded-full bg-[#0CE2A8]/80 transition-all duration-300 group-hover:w-20" />
        </div>
      </div>
    </motion.div>
  );
}

function TrainingCard({ track, index }: { track: Track; index: number }) {
  const { title, desc, bullets, Icon, accent } = track;

  const accentStyles =
    accent === "mint"
      ? {
          ring: "ring-[#0CE2A8]/25",
          iconBg: "bg-[#0CE2A8]/12",
          iconText: "text-[#0CE2A8]",
          bar: "bg-[#0CE2A8]/80",
          glow: "bg-[#0CE2A8]/10",
        }
      : accent === "navy"
      ? {
          ring: "ring-[#002244]/15",
          iconBg: "bg-[#002244]/8",
          iconText: "text-[#002244]",
          bar: "bg-[#002244]/35",
          glow: "bg-[#002244]/10",
        }
      : {
          ring: "ring-slate-200",
          iconBg: "bg-slate-100",
          iconText: "text-slate-700",
          bar: "bg-slate-300",
          glow: "bg-slate-200/60",
        };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.06, duration: 0.4, ease: EASE_OUT },
      }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={[
        "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1",
        accentStyles.ring,
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full blur-2xl",
          accentStyles.glow,
        ].join(" ")}
      />

      <div className="flex items-start justify-between gap-3">
        <div
          className={[
            "flex h-11 w-11 items-center justify-center rounded-2xl ring-1 ring-slate-200",
            accentStyles.iconBg,
            accentStyles.iconText,
          ].join(" ")}
        >
          <Icon className="h-5 w-5" />
        </div>

        <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
          Track
        </span>
      </div>

      <div className="mt-4 text-base font-bold text-[#002244]">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>

      <div className="mt-4 space-y-2">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#0CE2A8]" />
            <div className="text-sm font-semibold text-slate-700">{b}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">Training</span>
        <span
          className={["h-1.5 w-14 rounded-full", accentStyles.bar].join(" ")}
        />
      </div>
    </motion.div>
  );
}

function TrustRow({
  panel,
  index,
}: {
  panel: { title: string; desc: string; Icon: IconType };
  index: number;
}) {
  const { title, desc, Icon } = panel;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.06, duration: 0.35, ease: EASE_OUT },
      }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
    >
      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0CE2A8]/12 text-[#0CE2A8] ring-1 ring-[#0CE2A8]/20">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-bold text-[#002244]">{title}</div>
        <div className="mt-1 text-sm text-slate-600">{desc}</div>
      </div>
    </motion.div>
  );
}

function Chip({ text }: { text: string }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 460, damping: 30 }}
      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
    >
      {text}
    </motion.div>
  );
}

/* ---------------- Simple SVG “vector” components ---------------- */

function VectorBlob({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
    >
      <motion.path
        d="M63 33c22-18 58-12 77 9 18 21 23 57 7 83-16 27-53 45-83 35-30-9-53-44-50-74 2-30 27-36 49-53Z"
        fill="rgba(12,226,168,0.14)"
        animate={{
          d: [
            "M63 33c22-18 58-12 77 9 18 21 23 57 7 83-16 27-53 45-83 35-30-9-53-44-50-74 2-30 27-36 49-53Z",
            "M55 40c25-22 64-18 83 2 19 20 22 55 6 82-16 27-55 51-86 41-31-10-51-52-44-81 7-29 17-23 41-44Z",
            "M63 33c22-18 58-12 77 9 18 21 23 57 7 83-16 27-53 45-83 35-30-9-53-44-50-74 2-30 27-36 49-53Z",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

function VectorBlob2({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
    >
      <motion.path
        d="M150 30c30 10 52 40 55 70 3 31-12 62-36 84-25 22-59 34-86 20-27-13-45-50-40-79 5-30 35-36 56-60 21-24 21-45 51-35Z"
        fill="rgba(0,34,68,0.10)"
        animate={{
          d: [
            "M150 30c30 10 52 40 55 70 3 31-12 62-36 84-25 22-59 34-86 20-27-13-45-50-40-79 5-30 35-36 56-60 21-24 21-45 51-35Z",
            "M155 36c32 8 50 40 53 70 3 31-14 60-39 82-25 22-58 38-84 23-26-14-43-55-36-84 7-29 36-30 58-53 22-24 18-46 48-38Z",
            "M150 30c30 10 52 40 55 70 3 31-12 62-36 84-25 22-59 34-86 20-27-13-45-50-40-79 5-30 35-36 56-60 21-24 21-45 51-35Z",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

function GradientRow({ text }: { text: string }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15"
    >
      <div className="text-sm font-semibold text-white">{text}</div>
      <div className="h-1.5 w-10 rounded-full bg-white/35" />
    </motion.div>
  );
}
