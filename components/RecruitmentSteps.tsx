"use client";

import React, { useState } from "react";

export default function RecruitmentSteps() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 🔴 Replace this with YOUR Google Form POST URL
    const GOOGLE_FORM_ACTION_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLScx_U23159sl4Axgkx2P9XFHnv90SgI7b8AWI12OO72FS-fhQ/formResponse";

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors", // REQUIRED
        body: formData,
      });

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT SIDE */}
      <div className="bg-white rounded-xl shadow p-8">
        <h3 className="font-bold text-lg">Our Seamless Recruitment Process</h3>
        {/* your steps remain unchanged */}
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white rounded-xl shadow p-8">
        <h3 className="font-bold text-lg mb-4">Submit Your Vacancy Now</h3>

        {success && (
          <p className="mb-4 text-green-600 font-medium">
            ✅ Your submission has been received successfully.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* FULL NAME */}
          <input
            name="entry.1111111111" // 🔴 replace with real entry ID
            required
            className="w-full border rounded-md px-4 py-2"
            placeholder="Full Name"
          />

          {/* ORGANISATION */}
          <input
            name="entry.2222222222" // 🔴 replace
            required
            className="w-full border rounded-md px-4 py-2"
            placeholder="School / Organisation"
          />

          {/* PHONE */}
          <input
            name="entry.3333333333" // 🔴 replace
            required
            className="w-full border rounded-md px-4 py-2"
            placeholder="Phone Number"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="entry.4444444444" // 🔴 replace
            required
            className="w-full border rounded-md px-4 py-2"
            placeholder="Email Address"
          />

          {/* ROLE DESCRIPTION */}
          <textarea
            name="entry.5555555555" // 🔴 replace
            required
            rows={4}
            className="w-full border rounded-md px-4 py-2"
            placeholder="Role description & requirements"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0CE2A8] text-white px-5 py-2 rounded-md font-semibold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Now"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
