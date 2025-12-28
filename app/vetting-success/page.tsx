"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageShell from "@/components/PageShell";

function VettingSuccessContent() {
  const searchParams = useSearchParams();
  const txRef = searchParams.get("tx_ref");

  return (
    <PageShell title="Payment Successful" subtitle="Vetting payment received">
      <p className="text-green-600 font-medium">Your payment was successful.</p>

      {txRef && (
        <p className="mt-4 text-sm text-gray-600">
          Transaction reference: <strong>{txRef}</strong>
        </p>
      )}
    </PageShell>
  );
}

export default function VettingSuccessPage() {
  return (
    <Suspense
      fallback={
        <PageShell title="Loading..." subtitle="Please wait">
          <p className="text-gray-600">Loading payment status…</p>
        </PageShell>
      }
    >
      <VettingSuccessContent />
    </Suspense>
  );
}
