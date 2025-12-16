import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell title="Contact Us" subtitle="Let’s start the conversation">
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
