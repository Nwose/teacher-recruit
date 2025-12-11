"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-[#002244] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-end">
          <p>Call for Enquiry: +1 95034 1755 / 41587</p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <span className="text-[#003366] font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="text-lg font-bold leading-tight">Teachers</h1>
                <p className="text-xs opacity-90 -mt-1">Recruiting Consult</p>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link href="#" className="text-[#3EE8C6]">
              Home
            </Link>
            <Link href="#" className="hover:text-[#3EE8C6]">
              For Schools
            </Link>
            <Link href="#" className="hover:text-[#3EE8C6]">
              For Teachers
            </Link>
            <Link href="#" className="hover:text-[#3EE8C6]">
              About Us
            </Link>
            <Link href="#" className="hover:text-[#3EE8C6]">
              Contact
            </Link>

            <button className="bg-[#0CE2A8] text-[#003366] px-4 py-2 rounded-md font-semibold shadow-md hover:opacity-90">
              Join Openings
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 bg-white/10 rounded-md">
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>
    </header>
  );
}
