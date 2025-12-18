import React from "react";

import Hero from "../components/Hero";
import RecruitmentSteps from "../components/RecruitmentSteps";
import TestimonialCard from "../components/TestimonialCard";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Trusted By Schools & Educators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <TestimonialCard
            name="Princess Anya Sharma"
            role="Head of English"
            text="Great service and excellent matching."
            photo="https://media.gettyimages.com/id/1820045956/photo/successful-and-confident-black-middle-aged-businesswoman.jpg?s=612x612&w=gi&k=20&c=veOhtQzNLeH1MvGxtB8kS9F2Ig0kS2Tmah55xKkB0k0="
          />
          <TestimonialCard
            name="Tessie Nnadi"
            role="Educator"
            text="Found the perfect role quickly."
            photo="https://www.shutterstock.com/image-photo/face-portrait-manager-happy-black-600nw-2278812777.jpg"
          />
          <TestimonialCard
            name="Separate & Grow Academy"
            role="Institution"
            text="Professional and dependable."
            photo="https://holdenparksch.b-cdn.net/wp-content/uploads/2024/08/1-1920x1880-1-770x400.jpg"
          />
        </div>
      </section>
    </main>
  );
}
