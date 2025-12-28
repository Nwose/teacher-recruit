import Link from "next/link";

export default function TeacherVettingThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-10 text-center">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">
          🎉 Application Submitted
        </h1>

        <p className="text-gray-700 mb-6">
          Thank you for completing the Teacher Candidate Vetting Form.
          <br />
          Your information and CV have been successfully received.
        </p>

        <div className="bg-gray-100 rounded-lg p-5 text-left mb-8">
          <h2 className="font-semibold text-gray-800 mb-2">
            What happens next?
          </h2>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Our recruitment team reviews your application</li>
            <li>Shortlisted candidates are contacted via email or phone</li>
            <li>You may be invited for further screening or interview</li>
          </ul>
        </div>

        <p className="text-gray-600 mb-8">
          If you have any questions, please contact our support team.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#003366] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
