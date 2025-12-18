import PageShell from "@/components/PageShell";
import RecruitmentSteps from "@/components/RecruitmentSteps";

export default function GeneralRecruitmentPage() {
  return (
    <PageShell
      title="General Recruitment"
      subtitle="Professional staffing solutions for institutions"
    >
      <div className="space-y-10">
        <p className="text-slate-600 max-w-3xl">
          We provide end-to-end recruitment services for schools and
          organizations seeking qualified professionals.
        </p>

        <RecruitmentSteps />
      </div>
    </PageShell>
  );
}
