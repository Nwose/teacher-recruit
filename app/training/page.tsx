import PageShell from "@/components/PageShell";

export default function TrainingPage() {
  return (
    <PageShell
      title="Training Programs"
      subtitle="Upskilling educators and professionals"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {["Teacher Training", "Leadership Programs", "Skill Workshops"].map(
          (item) => (
            <div
              key={item}
              className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-[#003366] mb-2">{item}</h3>
              <p className="text-sm text-slate-600">
                Structured programs designed for real-world impact.
              </p>
            </div>
          )
        )}
      </div>
    </PageShell>
  );
}
