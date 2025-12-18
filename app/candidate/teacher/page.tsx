"use client";

import PageShell from "@/components/PageShell";
import { useState } from "react";

export default function TeacherVettingPage() {
  const [paid, setPaid] = useState(false);

  return (
    <PageShell
      title="Teacher Vetting"
      subtitle="Complete vetting before accessing opportunities"
    >
      {!paid ? (
        <div className="max-w-xl space-y-4">
          <p className="text-slate-600">
            A one-time ₦4,000 vetting fee is required before accessing teaching
            opportunities.
          </p>

          <button
            onClick={() => setPaid(true)}
            className="bg-[#0CE2A8] text-[#003366] px-6 py-3 rounded-md font-semibold hover:scale-105 transition"
          >
            Pay ₦4,000 & Continue
          </button>

          {/* Later replace with Paystack / Flutterwave */}
        </div>
      ) : (
        <div className="mt-8">
          {/* Teacher Vetting Form Component goes here */}
          <p className="text-green-600 font-medium">
            ✅ Payment successful. Please complete the vetting form.
          </p>
        </div>
      )}
    </PageShell>
  );
}
