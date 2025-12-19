import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Let’s start the conversation"
      heroImage="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80"
    >
      <div className="max-w-xl">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0CE2A8]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0CE2A8]"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0CE2A8]"
          />

          <button className="w-full bg-[#003366] text-white py-3 rounded-lg hover:bg-[#002244] transition">
            Send Message
          </button>
        </form>
      </div>
    </PageShell>
  );
}
