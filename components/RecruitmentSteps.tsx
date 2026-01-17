"use client";

import React, { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function RecruitmentSteps() {
  const TALLY_URL =
    "https://tally.so/embed/obRxDx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

  useEffect(() => {
    // Ensures Tally initializes after client-side navigation (no refresh needed)
    window.Tally?.loadEmbeds?.();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12">
      {/* ✅ Load Tally embed script */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds?.()}
        onError={() => {
          // Fallback: if script fails, iframe still loads via src
        }}
      />

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#002244]">
          Submit Your Vacancy
        </h2>
        <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-600">
          Fill out the form below and we’ll handle screening, verification, and
          placement with speed and accuracy.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        {/* LEFT */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-5 bg-slate-50 border-b border-slate-200">
            <div className="text-sm font-semibold text-[#002244]">
              Our Seamless Recruitment Process
            </div>
            <div className="mt-1 text-xs text-slate-600">
              What you get when you submit a vacancy
            </div>
          </div>

          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0CE2A8]/15 text-[#002244] font-bold">
                  1
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#002244]">
                    Role intake & requirements
                  </p>
                  <p className="text-sm text-slate-600">
                    We confirm job details, expectations, timeline, and
                    compensation range.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0CE2A8]/15 text-[#002244] font-bold">
                  2
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#002244]">
                    Shortlisting & verification
                  </p>
                  <p className="text-sm text-slate-600">
                    Screening, background checks (where applicable), and
                    candidate validation.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0CE2A8]/15 text-[#002244] font-bold">
                  3
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#002244]">
                    Interview coordination
                  </p>
                  <p className="text-sm text-slate-600">
                    We schedule interviews and share notes so you move fast with
                    confidence.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0CE2A8]/15 text-[#002244] font-bold">
                  4
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#002244]">
                    Placement support
                  </p>
                  <p className="text-sm text-slate-600">
                    Offer support, onboarding coordination, and post-placement
                    follow up.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
                alt="Professional recruitment discussion"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Form card */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-5 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-[#002244]">
                Client Vacancy Submission
              </div>
              <div className="mt-1 text-xs text-slate-600">
                Complete the form below.
              </div>
            </div>

            <span className="shrink-0 inline-flex items-center rounded-full border border-[#0CE2A8]/30 bg-[#0CE2A8]/10 px-3 py-1 text-xs font-semibold text-[#002244]">
              Secure Form
            </span>
          </div>

          {/* ✅ Let the page scroll naturally */}
          <div className="p-3 sm:p-4">
            <div className="w-full rounded-xl border border-slate-200 overflow-hidden bg-white">
              <iframe
                src={TALLY_URL}
                data-tally-src={TALLY_URL}
                title="Client Vacancy Submission - Recruitment and Training Hub"
                className="w-full border-0"
                loading="lazy"
                style={{ minHeight: 900 }}
              />
            </div>

            <p className="mt-3 text-center text-xs text-slate-500">
              Scroll down the page to continue through the form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
