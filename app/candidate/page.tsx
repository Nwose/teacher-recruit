"use client";

import PageShell from "@/components/PageShell";

declare global {
  interface Window {
    FlutterwaveCheckout?: (config: any) => void;
  }
}

export default function CandidatePaymentPage() {
  const handlePayment = () => {
    if (!window.FlutterwaveCheckout) {
      alert("Payment system not ready");
      return;
    }

    const txRef = `teacher-vetting-${Date.now()}`;

    window.FlutterwaveCheckout({
      public_key: "FLWPUBK-78f560d3ccec4039297b22dd22498f43-X",
      tx_ref: txRef,
      amount: 4000,
      currency: "NGN",
      payment_options: "card,banktransfer,ussd",

      // ✅ FIXED PATH
      redirect_url: `${window.location.origin}/candidate/teacher?status=successful&tx_ref=${txRef}`,

      customer: {
        email: "teacher@example.com",
        phone_number: "08000000000",
        name: "Teacher Vetting",
      },

      customizations: {
        title: "Teacher Vetting Fee",
        description: "One-time vetting payment",
      },
    });
  };

  return (
    <PageShell
      title="Teacher Vetting"
      subtitle="Pay once to continue your application"
    >
      <div className="max-w-xl space-y-4">
        <p className="text-slate-600">
          A one-time ₦4,000 vetting fee is required before proceeding.
        </p>

        <button
          onClick={handlePayment}
          className="bg-[#0CE2A8] text-[#003366] px-6 py-3 rounded-md font-semibold hover:scale-105 transition"
        >
          Pay ₦4,000 & Continue
        </button>
      </div>
    </PageShell>
  );
}
