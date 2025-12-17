"use client";

import React, { useState } from "react";

export default function RecruitmentSteps() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const GOOGLE_FORM_ACTION_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLScx_U23159sl4Axgkx2P9XFHnv90SgI7b8AWI12OO72FS-fhQ/formResponse";

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT */}
      <div className="bg-white rounded-xl shadow p-8">
        <h3 className="font-bold text-lg">Our Seamless Recruitment Process</h3>
      </div>

      {/* RIGHT */}
      <div className="bg-white rounded-xl shadow p-8">
        <h3 className="font-bold text-lg mb-4">Submit Your Vacancy Now</h3>

        {success && (
          <p className="mb-4 text-green-600 font-medium">
            ✅ Submission received successfully
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Organization Type */}
          <select
            name="entry.1111111111"
            required
            className="w-full border rounded-md px-4 py-2"
          >
            <option value="">Organization Type</option>
            <option value="School">School</option>
            <option value="Company">Company</option>
          </select>

          {/* School / Company Name */}
          <input
            name="entry.2222222222"
            required
            placeholder="School / Company Name"
            className="w-full border rounded-md px-4 py-2"
          />

          {/* Full Address */}
          <input
            name="entry.3333333333"
            required
            placeholder="Full Address"
            className="w-full border rounded-md px-4 py-2"
          />

          {/* Website */}
          <input
            name="entry.4444444444"
            placeholder="Website (Optional)"
            className="w-full border rounded-md px-4 py-2"
          />

          {/* Contact Person Full Name */}
          <input
            name="entry.5555555555"
            required
            placeholder="Contact Person Full Name"
            className="w-full border rounded-md px-4 py-2"
          />

          {/* Contact Person Role */}
          <input
            name="entry.6666666666"
            required
            placeholder="Contact Person Role (e.g. HR Manager)"
            className="w-full border rounded-md px-4 py-2"
          />

          {/* Phone */}
          <input
            name="entry.7777777777"
            required
            placeholder="Phone Number"
            className="w-full border rounded-md px-4 py-2"
          />

          {/* Email */}
          <input
            type="email"
            name="entry.8888888888"
            required
            placeholder="Email Address"
            className="w-full border rounded-md px-4 py-2"
          />

          {/* Role Title */}
          <input
            name="entry.9999999999"
            required
            placeholder="Role Title to be Filled"
            className="w-full border rounded-md px-4 py-2"
          />

          {/* Salary Range */}
          <input
            name="entry.1010101010"
            required
            placeholder="Estimated Salary Range"
            className="w-full border rounded-md px-4 py-2"
          />

          {/* Responsibilities */}
          <textarea
            name="entry.1111111110"
            required
            rows={4}
            placeholder="Key Responsibilities and Requirements"
            className="w-full border rounded-md px-4 py-2"
          />

          {/* Preferred Start Date */}
          <input
            type="date"
            name="entry.1212121212"
            className="w-full border rounded-md px-4 py-2"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0CE2A8] text-white px-6 py-2 rounded-md font-semibold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Now"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
