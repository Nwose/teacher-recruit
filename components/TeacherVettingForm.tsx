"use client";

import { useState } from "react";

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeukzZrFek_qk-Z8SHYm0rbNUCZBWpjh8AceMZwTtguyDGaZg/formResponse";

export default function TeacherVettingForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    // 🔴 REPLACE entry.xxxxx WITH YOUR REAL IDS
    const googleFormData = new URLSearchParams({
      "entry.111111111": formData.get("fullName") as string,
      "entry.222222222": formData.get("email") as string,
      "entry.333333333": formData.get("phone") as string,
      "entry.444444444": formData.get("qualification") as string,
      "entry.555555555": formData.get("experience") as string,
    });

    try {
      await fetch(`${GOOGLE_FORM_ACTION_URL}?${googleFormData.toString()}`, {
        method: "POST",
        mode: "no-cors", // REQUIRED
      });

      alert("Vetting form submitted successfully!");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="mt-8 max-w-xl">
      <p className="text-green-600 font-medium mb-6">
        ✅ Payment successful. Please complete the vetting form.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="fullName"
          required
          placeholder="Full Name"
          className="w-full border rounded-md px-4 py-2"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="w-full border rounded-md px-4 py-2"
        />

        <input
          name="phone"
          required
          placeholder="Phone Number"
          className="w-full border rounded-md px-4 py-2"
        />

        <input
          name="qualification"
          required
          placeholder="Highest Qualification"
          className="w-full border rounded-md px-4 py-2"
        />

        <textarea
          name="experience"
          required
          placeholder="Teaching Experience"
          className="w-full border rounded-md px-4 py-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#003366] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90"
        >
          {loading ? "Submitting..." : "Submit Vetting Form"}
        </button>
      </form>
    </div>
  );
}
