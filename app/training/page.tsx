"use client";

import PageShell from "@/components/PageShell";

/* ======================================
   ✅ EMBEDDED GOOGLE FORM (TRAINING)
====================================== */

const FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSfQ0V83DvkFJJr4TNLRB5_e502NDpHHcqILVVXsEsksFbY_sw/viewform?embedded=true";

export default function TrainingPage() {
  return (
    <PageShell
      title="Training Programs"
      subtitle="Build skills. Advance your career."
      heroImage="https://images.unsplash.com/photo-1513258496099-48168024aec0"
    >
      <p className="text-slate-600 max-w-2xl mb-8">
        Register your interest in our professional training and development
        programs. We’ll notify you when relevant courses are available.
      </p>

      {/* ✅ EMBEDDED GOOGLE FORM */}
      <div className="max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header strip (keeps it looking like your site) */}
        <div className="border-b bg-slate-50 px-6 py-4">
          <h3 className="text-sm font-semibold text-[#003366]">
            Training Interest Registration
          </h3>
          <p className="mt-1 text-xs text-slate-600">
            Fill out the form below. After submitting, you can return to the
            website.
          </p>
        </div>

        <iframe
          title="Training Programs Registration Form"
          src={FORM_SRC}
          className="w-full border-0"
          style={{ height: "750px" }}
          loading="lazy"
        />

        {/* Nice “back to site” footer */}
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        If the form looks cut off, increase the iframe height (currently 750px)
        in this component.
      </p>
    </PageShell>
  );
}
