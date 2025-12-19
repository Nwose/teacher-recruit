"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    "/pero-bg.jpg",
    "/pero2-bg.jpg",
    "/pero3-bg.jpg",
    "/pero4-bg.jpg",
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* BACKGROUND SLIDES (NO UNMOUNTING = NO WHITE FLASH) */}
      <div className="relative w-full h-[calc(100vh-80px)] min-h-[700px]">
        {slides.map((src, index) => (
          <motion.div
            key={src}
            initial={false}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 will-change-opacity"
          >
            <Image
              src={src}
              alt="Teachers group"
              fill
              priority={index === 0}
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </motion.div>
        ))}

        {/* SLIDE INDICATORS */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-10 h-2.5 bg-accent-aqua"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CONTENT OVERLAY */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            {/* GLASS CARD */}
            <div className="bg-[#034ea2]/25 backdrop-blur-2xl text-white p-6 sm:p-7 md:p-8 shadow-2xl border border-white/10 relative overflow-hidden w-full">
              {/* Decorative blobs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-aqua/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-green/20 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* TEXT */}
                <div className="flex-1">
                  <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
                  >
                    Connecting Credible Professionals with Leading
                    Organizations.
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed"
                  >
                    Trusted recruitment and match-making for our education
                    sector and beyond.
                  </motion.p>
                </div>

                {/* CTA BUTTONS */}
                <div className="flex-shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto">
                  <Link
                    href="/general-recruitment"
                    className="group relative w-full sm:w-auto px-6 py-3 rounded-md font-bold bg-[#00D8C1] text-[#003366] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl text-center"
                  >
                    I Need a Staff →
                  </Link>

                  <Link
                    href="/candidate"
                    className="group relative w-full sm:w-auto px-6 py-3 rounded-md font-bold bg-white text-[#003366] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl text-center"
                  >
                    I Am a Candidate →
                  </Link>
                </div>
              </div>
            </div>

            {/* TRUST BADGES */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 flex flex-wrap items-center gap-4 text-white/80 text-sm"
            >
              <span className="flex items-center gap-2">
                ⭐ 500+ Successful Placements
              </span>
              <span className="flex items-center gap-2">
                ✔ Trusted by 100+ Schools
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
