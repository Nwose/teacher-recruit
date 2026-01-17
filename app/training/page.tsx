"use client";

import PageShell from "@/components/PageShell";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

/* ======================================
   ✅ EMBEDDED TALLY FORM (TRAINING)
====================================== */

const TALLY_URL =
  "https://tally.so/embed/Pd9G8b?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export default function TrainingPage() {
  useEffect(() => {
    // Ensures Tally initializes after client-side navigation (no refresh needed)
    window.Tally?.loadEmbeds?.();
  }, []);

  return (
    <PageShell
      title="Training Programs"
      subtitle="Build skills. Advance your career."
      heroImage="https://images.unsplash.com/photo-1513258496099-48168024aec0"
    >
      {/* ✅ Tally embed script + onLoad init */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds?.()}
        onError={() => {
          // If script fails, iframe still loads via src below
        }}
      />

      <p className="text-slate-600 max-w-2xl mb-8">
        Register your interest in our professional training and development
        programs. We’ll notify you when relevant courses are available.
      </p>

      <div className="max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header strip */}
        <div className="border-b bg-slate-50 px-6 py-4">
          <h3 className="text-sm font-semibold text-[#003366]">
            Training Interest Registration
          </h3>
          <div className="mt-1 text-xs text-slate-600">
            Complete all required fields and submit when finished.
          </div>
        </div>

        {/* ✅ Set src immediately (so it loads without refresh) + keep data-tally-src */}
        <iframe
          src={TALLY_URL}
          data-tally-src={TALLY_URL}
          loading="lazy"
          width="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Professional Training & Development Interest Form - Recruitment and Training Hub"
          className="w-full border-0 min-h-[700px]"
        />
      </div>
    </PageShell>
  );
}
