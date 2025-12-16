import PageShell from "@/components/PageShell";

export default function GeneralRecruitmentPage() {
  return (
    <PageShell
      title="General Recruitment"
      subtitle="Professional staffing solutions for institutions"
    >
      <div className="space-y-6 max-w-3xl">
        <p className="text-slate-600">
          We provide end-to-end recruitment services for schools and
          organizations seeking qualified professionals.
        </p>

        <div className="p-6 rounded-xl bg-[#003366]/5 border-l-4 border-[#0CE2A8]">
          <p className="text-[#003366] font-medium">
            Trusted recruitment. Quality candidates. Reliable results.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
