"use client";

import { Suspense } from "react";
import PageShell from "@/components/PageShell";
import TeacherVettingForm from "@/components/TeacherVettingForm";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

function TeacherFormContent() {
  const searchParams = useSearchParams();

  const status = searchParams.get("status");
  const txRef = searchParams.get("tx_ref");

  const paidFromCallback = useMemo(() => {
    return status === "successful" && !!txRef;
  }, [status, txRef]);

  const [hydrated, setHydrated] = useState(false);
  const [paidFromStorage, setPaidFromStorage] = useState(false);

  // Client-only hydration
  useEffect(() => {
    setHydrated(true);
    setPaidFromStorage(localStorage.getItem("teacherVettingPaid") === "true");
  }, []);

  // Persist successful payment
  useEffect(() => {
    if (!hydrated || !paidFromCallback) return;
    localStorage.setItem("teacherVettingPaid", "true");
    setPaidFromStorage(true);
  }, [hydrated, paidFromCallback]);

  const allowed = paidFromCallback || paidFromStorage;

  if (!hydrated) {
    return (
      <PageShell title="Loading..." subtitle="Preparing your form">
        <p className="text-gray-600">Please wait…</p>
      </PageShell>
    );
  }

  if (!allowed) {
    return (
      <PageShell title="Access Restricted" subtitle="Payment required">
        <p className="text-red-600">
          You must complete the vetting payment before accessing this form.
        </p>
      </PageShell>
    );
  }

  return (
    <PageShell
      title="Teacher Vetting Form"
      subtitle="Complete your vetting details"
    >
      <TeacherVettingForm />
    </PageShell>
  );
}

export default function TeacherFormPage() {
  return (
    <Suspense
      fallback={
        <PageShell title="Loading..." subtitle="Preparing your form">
          <p className="text-gray-600">Please wait…</p>
        </PageShell>
      }
    >
      <TeacherFormContent />
    </Suspense>
  );
}
