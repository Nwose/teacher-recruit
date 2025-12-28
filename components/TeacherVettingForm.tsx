"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/* ======================================
   GOOGLE FORM BACKEND
====================================== */

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdIjZMB_d7IEPpWq2H_K5C0WcctabCeRtXDgzUhaMCT-5nAtA/formResponse";

const GOOGLE_FORM_UPLOAD_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdIjZMB_d7IEPpWq2H_K5C0WcctabCeRtXDgzUhaMCT-5nAtA/viewform";

/* ======================================
   CONSTANTS
====================================== */

const QUALIFICATIONS = [
  "NCE",
  "B.Ed",
  "B.Sc",
  "M.Ed",
  "M.Sc",
  "PhD",
  "Other",
] as const;

const EXPERIENCE = ["0-1", "2-5", "6-10", "10+"] as const;

const SUBJECTS = [
  "Mathematics",
  "English Language/Literature",
  "Sciences (Biology, Chemistry, Physics)",
  "Social Studies/History/Geography",
  "Vocational/Technical Subjects",
  "Early Childhood Education",
  "Other",
] as const;

const CONSENT_TEXT =
  "I confirm I have paid the Vetting Fee (V) and agree to the recruitment and vetting terms of the Hub.";

/* ======================================
   TYPES
====================================== */

type InputProps = {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
};

type SelectProps = {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
};

/* ======================================
   MAIN COMPONENT
====================================== */

export default function TeacherVettingForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState<string[]>([]);

  function toggleSubject(subject: string) {
    setSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (subjects.length === 0) {
      alert("Please select at least one subject.");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const paymentRef = String(formData.get("paymentRef") ?? "");
    const fullName = String(formData.get("fullName") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const email = String(formData.get("email") ?? "");

    const body = new URLSearchParams();

    body.append("entry.2043138503", paymentRef);
    body.append("entry.1994045145", fullName);
    body.append("entry.563296656", phone);
    body.append("entry.147976405", email);
    body.append(
      "entry.1190149883",
      String(formData.get("qualification") ?? "")
    );
    body.append("entry.1869856610", String(formData.get("experience") ?? ""));
    body.append("entry.598926251", CONSENT_TEXT);

    subjects.forEach((s) => body.append("entry.1143964729", s));

    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    /* ===== LOG LOCALLY (NO DB) ===== */
    const logs = JSON.parse(localStorage.getItem("vettingLogs") || "[]");
    logs.push({ paymentRef, email, submittedAt: new Date().toISOString() });
    localStorage.setItem("vettingLogs", JSON.stringify(logs));

    /* ===== BUILD PREFILLED UPLOAD LINK ===== */
    const uploadUrl =
      `${GOOGLE_FORM_UPLOAD_URL}?usp=pp_url` +
      `&entry.2043138503=${encodeURIComponent(paymentRef)}` +
      `&entry.1994045145=${encodeURIComponent(fullName)}` +
      `&entry.563296656=${encodeURIComponent(phone)}` +
      `&entry.147976405=${encodeURIComponent(email)}` +
      `&entry.1190149883=${encodeURIComponent(
        String(formData.get("qualification") ?? "")
      )}` +
      `&entry.1869856610=${encodeURIComponent(
        String(formData.get("experience") ?? "")
      )}` +
      subjects
        .map((s) => `&entry.1143964729=${encodeURIComponent(s)}`)
        .join("");

    /* ✅ ONLY ONE REDIRECT */
    router.push(`/vetting-success?uploadUrl=${encodeURIComponent(uploadUrl)}`);
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-2">Teacher Vetting Form</h2>
      <p className="text-sm text-gray-600 mb-6">
        Complete your details below — you will upload your CV in the next step.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Payment Reference Number" name="paymentRef" required />
          <Input label="Full Legal Name" name="fullName" required />
          <Input label="Phone Number" name="phone" required />
          <Input label="Email Address" name="email" type="email" required />

          <Select
            label="Highest Qualification"
            name="qualification"
            options={QUALIFICATIONS}
            required
          />

          <Select
            label="Years of Teaching Experience"
            name="experience"
            options={EXPERIENCE}
            required
          />
        </div>

        <div>
          <h3 className="font-semibold mb-3">Subjects Qualified to Teach</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border p-4 rounded-lg">
            {SUBJECTS.map((subject) => (
              <label key={subject} className="flex gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={subjects.includes(subject)}
                  onChange={() => toggleSubject(subject)}
                />
                {subject}
              </label>
            ))}
          </div>
        </div>

        <label className="flex gap-3 text-sm">
          <input type="checkbox" required />
          {CONSENT_TEXT}
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#003366] text-white px-8 py-3 rounded-lg"
        >
          {loading ? "Submitting..." : "Continue to Upload CV"}
        </button>
      </form>
    </div>
  );
}

/* ======================================
   UI HELPERS
====================================== */

function Input({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="border px-4 py-2 rounded-md"
      />
    </div>
  );
}

function Select({ label, name, options, required }: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <select
        name={name}
        required={required}
        className="border px-4 py-2 rounded-md bg-white"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
