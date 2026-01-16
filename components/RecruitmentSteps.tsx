"use client";

import React, { useState, useEffect } from "react";

export default function RecruitmentSteps() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => setSuccess(false), 4000);
    return () => clearTimeout(timer);
  }, [success]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const GOOGLE_FORM_ACTION_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLScx_U23159sl4Axgkx2P9XFHnv90SgI7b8AWI12OO72FS-fhQ/formResponse";

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT */}
      <div className="bg-white rounded-xl shadow p-8 flex flex-col">
        <h3 className="font-bold text-lg mb-2">
          Our Seamless Recruitment Process
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          Submit your vacancy and let our experts handle screening,
          verification, and placement with speed and accuracy.
        </p>

        {/* IMAGE SLIDER */}
        <div className="relative mt-auto overflow-hidden rounded-lg h-[550px]">
          <div className="slider-track">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
              alt="Professional recruitment discussion"
              className="slider-image"
            />
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=80"
              alt="Job interview meeting"
              className="slider-image"
            />
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80"
              alt="Corporate hiring team"
              className="slider-image"
            />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="bg-white rounded-xl shadow p-8 flex flex-col">
        <h3 className="font-bold text-lg mb-6">Submit Your Vacancy Now</h3>

        {/* Make iframe area match left side visual height */}
        <div className="w-full overflow-hidden rounded-lg border flex-1 min-h-[550px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd4mJK163-MoMpDOpYqo-ZHHbvBECc964GB1JPgNqUEdHNLCg/viewform?embedded=true"
            title="Vacancy Submission Form"
            className="w-full h-full"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>

        {/* Nice “back to site” message/link */}
      </div>

      <style jsx>{`
        .animate-success {
          animation: success-pop 0.4s ease-out;
        }

        @keyframes success-pop {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .slider-track {
          display: flex;
          width: 300%;
          height: 100%;
          animation: slide 18s infinite ease-in-out;
        }

        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          flex-shrink: 0;
        }

        @keyframes slide {
          0%,
          20% {
            transform: translateX(0%);
          }
          33%,
          53% {
            transform: translateX(-100%);
          }
          66%,
          86% {
            transform: translateX(-200%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}
