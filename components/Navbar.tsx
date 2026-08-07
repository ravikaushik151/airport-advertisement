"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Cities", href: "/locations" },
    { name: "Formats", href: "/#formats" },
    { name: "Rates", href: "/#rates" },
    { name: "Case studies", href: "/#case-studies" },
    { name: "Guides", href: "/#blog" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Circular logo mark with two parallel orange bars */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors group-hover:border-orange-500/50">
            <div className="flex flex-col gap-1.5 transform -rotate-12">
              <div className="h-[2px] w-4 bg-orange-500 rounded-full"></div>
              <div className="h-[2px] w-4 bg-orange-500 rounded-full"></div>
            </div>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white font-sans">
            AirportAdvertising<span className="text-orange-500">.co</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium transition-colors hover:text-orange-500 text-gray-300/90 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/#contact-form"
            className="inline-flex items-center justify-center rounded bg-[#10243e]/80 border border-white/10 hover:bg-[#1a3458]/90 hover:border-white/20 px-5 py-2.5 text-[14px] font-semibold text-white tracking-wide transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/10"
          >
            Request campaign plan <span className="ml-1.5 text-xs text-orange-500">↗</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6" aria-hidden="true" />
            ) : (
              <HiMenu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#051527]/95 px-6 py-6 shadow-2xl backdrop-blur-lg lg:hidden">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-6 px-3">
            <Link
              href="/#contact-form"
              className="flex w-full items-center justify-center rounded bg-orange-500 py-3 text-base font-bold text-white shadow-md hover:bg-orange-600 active:bg-orange-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request campaign plan ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
