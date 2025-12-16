import PageShell from "@/components/PageShell";

export default function AboutUsPage() {
  return (
    <PageShell title="About Us" subtitle="Who we are and why we do what we do">
      <div className="max-w-3xl space-y-6">
        <p className="text-slate-600">
          Recruitment and Training Hub is committed to connecting institutions
          with exceptional talent while empowering educators to grow and
          succeed.
        </p>

        <p className="text-slate-600">
          Our approach combines professionalism, integrity, and deep industry
          understanding.
        </p>
      </div>
    </PageShell>
  );
}
