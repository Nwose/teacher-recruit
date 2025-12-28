"use client";

import { useSearchParams } from "next/navigation";

export default function VettingSuccessPage() {
  const params = useSearchParams();
  const uploadUrl = params.get("uploadUrl");

  return (
    <div className="max-w-xl mx-auto mt-20 bg-white shadow-lg rounded-xl p-10 text-center">
      <h1 className="text-2xl font-bold text-green-600 mb-4">
        Step 1 Completed Successfully
      </h1>

      <p className="text-gray-700 mb-6">
        Your details have been saved.
        <br />
        Please upload your CV to complete the vetting process.
      </p>

      {uploadUrl && (
        <a
          href={uploadUrl}
          className="inline-block bg-[#003366] text-white px-6 py-3 rounded-lg font-semibold"
        >
          Upload CV Now
        </a>
      )}
    </div>
  );
}
