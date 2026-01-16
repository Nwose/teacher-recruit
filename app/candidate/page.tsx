// app/candidate/page.tsx
"use client";

import PageShell from "@/components/PageShell";
import { motion } from "framer-motion";
import Script from "next/script";

const TALLY_SRC = "https://tally.so/r/Pd9GYV?transparentBackground=1";

export default function CandidatePage() {
  return (
    <PageShell
      title="Candidate Vetting & Application"
      subtitle="Fill out the form below to join our talent network"
    >
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />

      <div className="relative mx-auto w-full max-w-6xl px-3 sm:px-6">
        {/* Soft glows */}
        <div className="pointer-events-none absolute -top-10 left-1/2 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-[#0CE2A8]/12 blur-3xl" />
        <div className="pointer-events-none absolute top-28 right-0 h-72 w-72 rounded-full bg-[#002244]/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          {/* Decorative top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-[#0CE2A8] via-[#0CE2A8]/60 to-transparent" />

          {/* Header bar */}
          <div className="flex flex-col gap-1 border-b border-slate-200 bg-slate-50/70 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-[#002244]">
                Candidate Vetting & Application
              </div>
              <div className="mt-1 text-xs text-slate-600">
                Complete all required fields and submit when finished.
              </div>
            </div>

            <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#0CE2A8]/30 bg-[#0CE2A8]/10 px-3 py-1 text-xs font-semibold text-[#002244] sm:mt-0">
              <span className="h-2 w-2 rounded-full bg-[#0CE2A8]" />
              Secure Form
            </span>
          </div>

          {/* Embed wrapper */}
          <div className="p-4 sm:p-6">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)]">
              {/* subtle inner frame */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/5" />

              {/* iframe sizing */}
              <div className="relative h-[75vh] min-h-[620px] w-full">
                <iframe
                  data-tally-src={TALLY_SRC}
                  title="Candidate Vetting & Application - Recruitment and Training Hub"
                  className="absolute inset-0 h-full w-full border-0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  allow="fullscreen"
                />
              </div>
            </div>

            {/* <p className="mt-3 text-center text-xs text-slate-500">
              Tip: For the best look, match the form theme inside Tally to your
              brand colors (#0CE2A8 / #002244).
            </p> */}
          </div>
        </motion.div>

        <div className="h-8" />
      </div>
    </PageShell>
  );
}
