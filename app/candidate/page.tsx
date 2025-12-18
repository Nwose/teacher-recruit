import PageShell from "@/components/PageShell";
import Link from "next/link";

export default function CandidatePage() {
  return (
    <PageShell
      title="Candidates Portal"
      subtitle="Choose the path that applies to you"
    >
      <div className="grid gap-6 max-w-4xl">
        <Link
          href="/candidate/teacher"
          className="p-6 rounded-xl border bg-white hover:shadow-lg transition"
        >
          <h3 className="text-lg font-bold text-[#003366]">Teaching Jobs</h3>
          <p className="text-sm text-slate-600 mt-1">
            Apply for teaching roles (₦4,000 vetting fee required)
          </p>
        </Link>

        <Link
          href="/candidate/general"
          className="p-6 rounded-xl border bg-white hover:shadow-lg transition"
        >
          <h3 className="text-lg font-bold text-[#003366]">Other Jobs</h3>
          <p className="text-sm text-slate-600 mt-1">
            Non-teaching roles and corporate opportunities
          </p>
        </Link>

        <Link
          href="/training"
          className="p-6 rounded-xl border bg-white hover:shadow-lg transition"
        >
          <h3 className="text-lg font-bold text-[#003366]">
            Training Programs
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Upskill with our professional training programs
          </p>
        </Link>
      </div>
    </PageShell>
  );
}
