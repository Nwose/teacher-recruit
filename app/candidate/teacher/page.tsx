"use client";

import PageShell from "@/components/PageShell";
import TeacherVettingForm from "@/components/TeacherVettingForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function TeacherFormPage() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const txRef = searchParams.get("tx_ref");

  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (status === "successful" && txRef) {
      setAllowed(true);
      localStorage.setItem("teacherVettingPaid", "true");
    }
  }, [status, txRef]);

  // ✅ Restore access on refresh
  useEffect(() => {
    if (localStorage.getItem("teacherVettingPaid") === "true") {
      setAllowed(true);
    }
  }, []);

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
