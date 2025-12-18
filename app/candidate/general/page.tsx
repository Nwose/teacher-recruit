import PageShell from "@/components/PageShell";

export default function GeneralCandidatePage() {
  return (
    <PageShell
      title="General Job Application"
      subtitle="Apply for non-teaching roles"
    >
      {/* General Candidate Google Form Component */}
      <p className="text-slate-600">
        Please complete the form below to apply for available opportunities.
      </p>
    </PageShell>
  );
}
