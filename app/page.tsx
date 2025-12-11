import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecruitmentSteps from "../components/RecruitmentSteps";
import TestimonialCard from "../components/TestimonialCard";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">
          Trusted By Schools & Educators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            name="Princess Anya Sharma"
            role="Head of English"
            text="Great service and excellent matching."
          />
          <TestimonialCard
            name="Tessie Nnadi"
            role="Educator"
            text="Found the perfect role quickly."
          />
          <TestimonialCard
            name="Sepeart & Grow"
            role="Institution"
            text="Professional and dependable."
          />
        </div>
      </section>

      <RecruitmentSteps />

      <footer className="mt-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Teachers Recruiting Consult
          </p>
          <div className="text-sm">Made with care · Contact us</div>
        </div>
      </footer>
    </main>
  );
}
