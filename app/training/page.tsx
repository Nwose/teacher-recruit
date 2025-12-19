import PageShell from "@/components/PageShell";

export default function TrainingPage() {
  return (
    <PageShell
      title="Training Programs"
      subtitle="Build skills. Advance your career."
      heroImage="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80"
    >
      {/* Training Google Form Component */}
      <p className="text-slate-600">
        Register for upcoming training programs using the form below.
      </p>
    </PageShell>
  );
}
