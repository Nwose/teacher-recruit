import React from "react";

export default function RecruitmentSteps() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow p-8">
        <h3 className="font-bold text-lg">Our Seamless Recruitment Process</h3>
        <ol className="mt-6 space-y-4">
          <li className="flex gap-3 items-start">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
              1
            </div>
            <div>
              <p className="font-semibold">Submit Need & Source Talent</p>
              <p className="text-sm opacity-80">
                We gather role details and start sourcing qualified candidates.
              </p>
            </div>
          </li>

          <li className="flex gap-3 items-start">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
              2
            </div>
            <div>
              <p className="font-semibold">Shortlist & Assess</p>
              <p className="text-sm opacity-80">
                Screening, interviews and skill checks tailored to your needs.
              </p>
            </div>
          </li>

          <li className="flex gap-3 items-start">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
              3
            </div>
            <div>
              <p className="font-semibold">Placement & Follow-up</p>
              <p className="text-sm opacity-80">
                We facilitate placement and check-in to ensure fit and
                satisfaction.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="bg-white rounded-xl shadow p-8">
        <h3 className="font-bold text-lg">Submit Your Vacancy Now</h3>
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
            <button
              type="button"
              className="bg-primary text-white px-5 py-2 rounded-md font-semibold"
            >
              Send Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
