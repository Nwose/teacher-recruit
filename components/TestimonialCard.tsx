import React from "react";

export default function TestimonialCard({
  name,
  role,
  text,
}: {
  name: string;
  role: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-slate-200" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-700">{text}</p>
    </div>
  );
}
