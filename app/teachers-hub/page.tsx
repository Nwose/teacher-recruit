import PageShell from "@/components/PageShell";

export default function TeachersHubPage() {
  return (
    <PageShell
      title="Teachers Hub"
      subtitle="Resources, opportunities, and support for educators"
      heroImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80"
    >
      <div className="grid md:grid-cols-2 gap-10">
        <div className="p-6 bg-slate-50 rounded-xl border">
          <h3 className="font-semibold text-[#003366] mb-2">
            Job Opportunities
          </h3>
          <p className="text-sm text-slate-600">
            Explore teaching roles matched to your skills and experience.
          </p>
        </div>

        <div className="p-6 bg-slate-50 rounded-xl border">
          <h3 className="font-semibold text-[#003366] mb-2">
            Career Development
          </h3>
          <p className="text-sm text-slate-600">
            Get guidance, mentoring, and growth resources.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
