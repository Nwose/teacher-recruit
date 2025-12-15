"use client";
import React, { useState } from "react";

export default function RecruitmentSteps() {
  const [useGoogleForm, setUseGoogleForm] = useState(true);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT SIDE */}
      <div className="bg-white rounded-xl shadow p-8">
        <h3 className="font-bold text-lg">Our Seamless Recruitment Process</h3>
        {/* ...your steps remain unchanged */}
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white rounded-xl shadow p-8">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Submit Your Vacancy Now</h3>
          <button
            onClick={() => setUseGoogleForm(!useGoogleForm)}
            className="text-sm text-primary underline"
          >
            {useGoogleForm ? "Use custom form" : "Use Google Form"}
          </button>
        </div>

        {useGoogleForm ? (
          <iframe
            src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
            className="w-full min-h-[800px] mt-6 border-none"
            title="Vacancy Submission"
          />
        ) : (
          <form className="mt-6 space-y-4">
            <input
              className="w-full border rounded-md px-4 py-2"
              placeholder="Full Name"
            />
            <input
              className="w-full border rounded-md px-4 py-2"
              placeholder="School/Organisation"
            />
            <input
              className="w-full border rounded-md px-4 py-2"
              placeholder="Phone"
            />
            <input
              className="w-full border rounded-md px-4 py-2"
              placeholder="Email"
            />
            <textarea
              className="w-full border rounded-md px-4 py-2"
              rows={4}
              placeholder="Role description & requirements"
            />
            <div className="flex justify-end">
              <button className="bg-primary text-white px-5 py-2 rounded-md font-semibold">
                Send Now
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
