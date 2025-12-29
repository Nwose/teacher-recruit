"use client";

import PageShell from "@/components/PageShell";
import Script from "next/script";

declare global {
  interface Window {
    FlutterwaveCheckout: any;
  }
}

export default function CandidatePaymentPage() {
  const handlePayment = () => {
    if (!window.FlutterwaveCheckout) {
      alert("Payment system failed to load. Please refresh the page.");
      return;
    }

    const txRef = `teacher-vetting-${Date.now()}`;

    window.FlutterwaveCheckout({
      public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
      tx_ref: txRef,
      amount: 4000,
      currency: "NGN",
      payment_options: "card,banktransfer,ussd",
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
    <>
      {/* ✅ LOAD FLUTTERWAVE SCRIPT HERE (CRITICAL FIX) */}
      <Script
        src="https://checkout.flutterwave.com/v3.js"
        strategy="afterInteractive"
      />

      <PageShell
        title="Teacher Vetting"
        subtitle="Pay once to continue your application"
      >
        <div className="max-w-xl space-y-4">
          <p className="text-slate-600">
            A one-time <strong>₦4,000</strong> vetting fee is required before
            proceeding.
          </p>

          <button
            type="button"
            onClick={handlePayment}
            className="bg-[#0CE2A8] text-[#003366] px-6 py-3 rounded-md font-semibold hover:scale-105 transition"
          >
            Pay ₦4,000 & Continue
          </button>
        </div>
      </PageShell>
    </>
  );
}
