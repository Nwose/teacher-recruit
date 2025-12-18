"use client";

import React, { useState, useEffect } from "react";

export default function RecruitmentSteps() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => setSuccess(false), 4000);
    return () => clearTimeout(timer);
  }, [success]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const GOOGLE_FORM_ACTION_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLScx_U23159sl4Axgkx2P9XFHnv90SgI7b8AWI12OO72FS-fhQ/formResponse";

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSuccess(true);
      form.reset();
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
        <h3 className="font-bold text-lg mb-2">
          Our Seamless Recruitment Process
        </h3>
        <p className="text-gray-600 text-sm">
          Submit your vacancy and let our experts handle screening,
          verification, and placement with speed and accuracy.
        </p>
      </div>

      {/* RIGHT */}
      <div className="bg-white rounded-xl shadow p-8">
        <h3 className="font-bold text-lg mb-6">Submit Your Vacancy Now</h3>

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="mb-6 animate-success rounded-md border border-green-200 bg-green-50 px-4 py-3 text-green-700 font-medium">
            ✅ Submission received successfully. We’ll be in touch shortly.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Organization Type */}
          <select
            name="entry.1468598155"
            required
            className="col-span-1 md:col-span-2 w-full border rounded-md px-4 py-2 bg-white"
          >
            <option value="" disabled hidden>
              Organization Type
            </option>

            <option value="School / Educational Institute">
              School / Educational Institute
            </option>

            <option value="General Organization / Corporate">
              General Organization / Corporate
            </option>
          </select>

          <input
            name="entry.1657516744"
            required
            placeholder="School / Company Name"
            className="w-full border rounded-md px-4 py-2"
          />

          <input
            name="entry.1257255670"
            required
            placeholder="Full Address"
            className="w-full border rounded-md px-4 py-2"
          />

          <input
            name="entry.1927729901"
            placeholder="Website (Optional)"
            className="w-full border rounded-md px-4 py-2"
          />

          <input
            name="entry.1346689096"
            required
            placeholder="Contact Person Full Name"
            className="w-full border rounded-md px-4 py-2"
          />

          <input
            name="entry.785374913"
            required
            placeholder="Contact Person Role"
            className="w-full border rounded-md px-4 py-2"
          />

          <input
            name="entry.1812655130"
            required
            placeholder="Phone Number"
            className="w-full border rounded-md px-4 py-2"
          />

          <input
            type="email"
            name="entry.1088702710"
            required
            placeholder="Email Address"
            className="w-full border rounded-md px-4 py-2"
          />

          <input
            name="entry.1600591729"
            required
            placeholder="Role Title"
            className="w-full border rounded-md px-4 py-2"
          />

          <input
            name="entry.747412629"
            required
            placeholder="Estimated Salary Range"
            className="w-full border rounded-md px-4 py-2"
          />

          <textarea
            name="entry.673794100"
            required
            rows={4}
            placeholder="Key Responsibilities and Requirements"
            className="col-span-1 md:col-span-2 w-full border rounded-md px-4 py-2"
          />

          <input
            type="date"
            name="entry.485723373"
            className="w-full border rounded-md px-4 py-2"
          />

          {/* SUBMIT */}
          <div className="col-span-1 md:col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="relative flex items-center justify-center gap-2 bg-[#0CE2A8] text-[#003366] px-8 py-3 rounded-md font-semibold transition-all hover:scale-[1.03] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading && (
                <span className="h-4 w-4 border-2 border-[#003366]/40 border-t-[#003366] rounded-full animate-spin" />
              )}
              {loading ? "Sending..." : "Send Now"}
            </button>
          </div>
        </form>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .animate-success {
          animation: success-pop 0.4s ease-out;
        }

        @keyframes success-pop {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
