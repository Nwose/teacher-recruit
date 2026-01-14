// app/candidate/page.tsx
"use client";

import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";

const FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSdVORBwjU3nr3AcKi9LVIrLbhTmROOsTp49iOpVFyr_9o_-Pw/viewform?embedded=true";

export default function CandidatePage() {
  return (
    <PageShell
      title="Candidate Application"
      subtitle="Fill out the form below to join our talent network"
    >
      <div className="relative mx-auto w-full max-w-6xl px-4">
        {/* Soft glows */}
        <div className="pointer-events-none absolute -top-10 left-1/2 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-[#0CE2A8]/12 blur-3xl" />
        <div className="pointer-events-none absolute top-28 right-0 h-72 w-72 rounded-full bg-[#002244]/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          {/* Header bar */}
          <div className="flex flex-col gap-1 border-b border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-[#002244]">
                Candidate Application Form
              </div>
              <div className="mt-1 text-xs text-slate-600">
                Please complete all required fields and submit when finished.
              </div>
            </div>
          </div>

          {/* Visible form area */}
          <div className="w-full">
            <div className="w-full overflow-hidden">
              <iframe
                title="Candidate Application Form"
                src={FORM_SRC}
                className="w-full border-0"
                style={{
                  height: "350px", // reduced from 950px
                }}
                loading="lazy"
              />
            </div>

            <div className="border-t border-slate-200 bg-white px-6 py-4" />
          </div>
        </motion.div>

        <div className="h-8" />
      </div>
    </PageShell>
  );
}
