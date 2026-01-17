import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Let’s start the conversation"
      heroImage="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80"
    >
      <div className="relative mx-auto w-full max-w-6xl px-3 sm:px-6">
        {/* Soft glows */}
        <div className="pointer-events-none absolute -top-10 left-1/2 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-[#0CE2A8]/12 blur-3xl" />
        <div className="pointer-events-none absolute top-28 right-0 h-72 w-72 rounded-full bg-[#002244]/10 blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* LEFT: Contact info + image */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
              <div className="text-sm font-semibold text-[#002244]">
                We’d love to hear from you
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Reach out for recruitment, training, partnerships, or general
                enquiries.
              </p>
            </div>

            <div className="p-6 space-y-4">
              {/* Email */}
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="text-xs font-semibold text-slate-500">
                  Email
                </div>
                <div className="mt-1 text-sm font-semibold text-[#002244]">
                  Contact@recruitmentandtraininghub.com
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  We typically reply within 24 hours.
                </div>
              </div>

              {/* Phones (supports 3+ nicely) */}
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-slate-500">
                      Phone
                    </div>
                    <div className="mt-1 text-xs text-slate-600">
                      Mon–Fri, 9am–5pm
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[#0CE2A8]/30 bg-[#0CE2A8]/10 px-2.5 py-1 text-[11px] font-semibold text-[#002244]">
                    Call / WhatsApp
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Phone card 1 */}
                  <a
                    href="+234 907 109 1048"
                    className="group rounded-lg border border-slate-200 bg-white p-3 transition hover:border-[#0CE2A8]/60 hover:bg-[#0CE2A8]/5"
                  >
                    <div className="text-[11px] font-semibold text-slate-500">
                      Main Line
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[#002244] group-hover:opacity-90">
                      +234 907 109 1048
                    </div>
                  </a>

                  {/* Phone card 2 */}
                  <a
                    href="+234 708 236 1613"
                    className="group rounded-lg border border-slate-200 bg-white p-3 transition hover:border-[#0CE2A8]/60 hover:bg-[#0CE2A8]/5"
                  >
                    <div className="text-[11px] font-semibold text-slate-500">
                      Recruitment
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[#002244] group-hover:opacity-90">
                      +234 708 236 1613
                    </div>
                  </a>

                  {/* Phone card 3 */}
                  <a
                    href=" +234 816 741 6920"
                    className="group rounded-lg border border-slate-200 bg-white p-3 transition hover:border-[#0CE2A8]/60 hover:bg-[#0CE2A8]/5 sm:col-span-2"
                  >
                    <div className="text-[11px] font-semibold text-slate-500">
                      Training & Programs
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[#002244] group-hover:opacity-90">
                      +234 816 741 6920
                    </div>
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="text-xs font-semibold text-slate-500">
                  Office
                </div>
                <div className="mt-1 text-sm font-semibold text-[#002244]">
                  Your City, Your Country
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Available by appointment.
                </div>
              </div>

              {/* Image */}
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                  alt="Team collaboration"
                  className="h-56 w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-[#002244]">
                  Send us a message
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Tell us what you need and we’ll get back to you.
                </p>
              </div>

              <span className="shrink-0 inline-flex items-center rounded-full border border-[#0CE2A8]/30 bg-[#0CE2A8]/10 px-3 py-1 text-xs font-semibold text-[#002244]">
                Quick Response
              </span>
            </div>

            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-600">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jane Doe"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0CE2A8]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-600">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0CE2A8]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0CE2A8]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Write your message..."
                    rows={5}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0CE2A8]"
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-lg bg-[#003366] py-3 font-semibold text-white transition hover:bg-[#002244] hover:shadow-sm active:scale-[0.99]"
                >
                  Send Message
                </button>

                <p className="text-center text-xs text-slate-500">
                  By sending this message, you agree to be contacted about your
                  enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
