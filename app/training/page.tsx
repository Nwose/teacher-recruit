"use client";

import PageShell from "@/components/PageShell";
import { useState } from "react";

/* ======================================
   ✅ GOOGLE FORM BACKEND (FINAL & CORRECT)
====================================== */

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfQ0V83DvkFJJr4TNLRB5_e502NDpHHcqILVVXsEsksFbY_sw/formResponse";

/* ======================================
   CONSTANTS (MATCH GOOGLE FORM EXACTLY)
====================================== */

const TRAINING_INTERESTS = [
  "Classroom Management",
  "Digital Literacy & EdTech",
  "Leadership & Administration",
  "General Professional Development",
  "Training",
  "Customer Service",
  "Staff onboarding",
  "Excellence and Workplace Ethics",
];

export default function TrainingPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell
      title="Training Programs"
      subtitle="Build skills. Advance your career."
      heroImage="https://images.unsplash.com/photo-1513258496099-48168024aec0"
    >
      {!submitted ? (
        <>
          <p className="text-slate-600 max-w-2xl mb-8">
            Register your interest in our professional training and development
            programs. We’ll notify you when relevant courses are available.
          </p>

          {/* ✅ NATIVE HTML FORM (THIS IS THE FIX) */}
          <form
            action={GOOGLE_FORM_ACTION_URL}
            method="POST"
            target="hidden_iframe"
            onSubmit={() => setSubmitted(true)}
            className="max-w-3xl bg-white rounded-xl shadow-lg p-8 space-y-8"
          >
            {/* Full Name */}
            <Input label="Full Name" name="entry.1691897051" required />

            {/* Email */}
            <Input
              label="Email Address"
              name="entry.2016004143"
              type="email"
              required
            />

            {/* Phone */}
            <Input label="Phone Number" name="entry.712485501" required />

            {/* Training Interests */}
            <div>
              <h3 className="font-semibold mb-3">
                Primary Area of Training Interest
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border rounded-lg p-4">
                {TRAINING_INTERESTS.map((interest) => (
                  <label key={interest} className="flex gap-2 text-sm">
                    <input
                      type="checkbox"
                      name="entry.410144866"
                      value={interest}
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <label className="flex gap-3 text-sm">
              <input
                type="checkbox"
                name="entry.1625835770"
                value="Yes, please add me to your training newsletter for new course announcements."
              />
              Subscribe to training updates
            </label>

            <button
              type="submit"
              className="bg-[#003366] text-white px-8 py-3 rounded-lg font-semibold"
            >
              Register Interest
            </button>
          </form>

          {/* REQUIRED HIDDEN IFRAME */}
          <iframe name="hidden_iframe" style={{ display: "none" }} />
        </>
      ) : (
        <div className="max-w-xl bg-white rounded-xl shadow-lg p-10 text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">
            🎉 Registration Successful
          </h2>
          <p className="text-gray-700">
            Thank you for registering your interest.
            <br />
            We’ll be in touch with upcoming training opportunities.
          </p>
        </div>
      )}
    </PageShell>
  );
}

/* ======================================
   INPUT COMPONENT
====================================== */

function Input({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="border rounded-md px-4 py-2"
      />
    </div>
  );
}
