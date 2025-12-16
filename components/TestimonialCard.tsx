import React from "react";
import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
  photo: string;
};

export default function TestimonialCard({
  name,
  role,
  text,
  photo,
}: TestimonialCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Accent bar */}
      <span className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#0CE2A8]" />

      <div className="flex items-center gap-4">
        {/* Avatar with accent ring */}
        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#0CE2A8]/30">
          <Image src={photo} alt={name} fill className="object-cover" />
        </div>

        <div>
          <p className="font-semibold text-[#003366] leading-tight">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm text-slate-600 leading-relaxed">“{text}”</p>

      {/* Subtle corner accent */}
      <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 rounded-full bg-[#003366]/5 group-hover:bg-[#0CE2A8]/10 transition-colors" />
    </div>
  );
}
