"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaMapPin, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const [formData, setFormData] = useState({
    market: "",
    objective: "",
    duration: "",
    budget: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted! \nDetails: ${JSON.stringify(formData, null, 2)}`);
    setFormData({
      market: "",
      objective: "",
      duration: "",
      budget: "",
      email: "",
    });
  };

  return (
    <footer className="bg-[#040f24] text-white">
      
      {/* Contact Form Section (with id for anchor scrolling) */}
      <div id="contact-form" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Get In Touch */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Get In Touch
            </h2>
            <p className="mt-3 text-xs font-semibold text-slate-400 leading-relaxed max-w-sm">
              Have a campaign in mind? Let's talk about how we can help your brand engage with premium travelers at major airports.
            </p>

            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-orange-500 shadow-sm">
                  <FaMapPin className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-slate-300 leading-relaxed pt-1.5">
                  IM Solutions, 2nd Floor, Corporate Office, HSR Layout, Bengaluru - 560102, India
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-orange-500 shadow-sm">
                  <FaPhone className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-slate-300 leading-none pt-2.5">
                  +91 98765 43210
                </span>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-orange-500 shadow-sm">
                  <FaEnvelope className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-slate-300 leading-none pt-2.5">
                  info@imsolutions.co
                </span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-orange-500 shadow-sm">
                  <FaClock className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-slate-300 leading-none pt-2.5">
                  Mon - Sat: 10:00 AM - 07:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Center Divider Line */}
          <div className="hidden lg:block lg:col-span-1 border-r border-white/10 h-full justify-self-center"></div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 text-left">
                {/* Market Select */}
                <label className="block">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 select-none">
                    Target Airport Hub
                  </span>
                  <select
                    name="market"
                    value={formData.market}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-800 bg-[#07132c]/50 px-4 py-3 text-xs text-white focus:border-orange-500 focus:outline-none transition-colors appearance-none font-sans"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25em', backgroundRepeat: 'no-repeat' }}
                  >
                    <option value="" disabled>Select an airport</option>
                    <option value="Bengaluru (KIA)">Bengaluru (KIA)</option>
                    <option value="Mumbai (CSMIA)">Mumbai (CSMIA)</option>
                    <option value="Hyderabad (RGIA)">Hyderabad (RGIA)</option>
                    <option value="Chennai Airport">Chennai Airport</option>
                    <option value="Kolkata Airport">Kolkata Airport</option>
                    <option value="Cochin Airport (CIAL)">Cochin Airport (CIAL)</option>
                    <option value="Multi-airport campaign">Multi-airport campaign</option>
                  </select>
                </label>

                {/* Objective Select */}
                <label className="block">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 select-none">
                    Campaign objective
                  </span>
                  <select
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-800 bg-[#07132c]/50 px-4 py-3 text-xs text-white focus:border-orange-500 focus:outline-none transition-colors appearance-none font-sans"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25em', backgroundRepeat: 'no-repeat' }}
                  >
                    <option value="" disabled>Select an objective</option>
                    <option value="Brand awareness">Brand awareness</option>
                    <option value="Prestige & prestige recall">Prestige & authority recall</option>
                    <option value="Launch campaign">Launch campaign</option>
                    <option value="Lead capture & sales">Lead capture & sales</option>
                  </select>
                </label>

                {/* Duration Select */}
                <label className="block">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 select-none">
                    Preferred duration
                  </span>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-800 bg-[#07132c]/50 px-4 py-3 text-xs text-white focus:border-orange-500 focus:outline-none transition-colors appearance-none font-sans"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25em', backgroundRepeat: 'no-repeat' }}
                  >
                    <option value="" disabled>Select duration</option>
                    <option value="1 month">1 month</option>
                    <option value="2–3 months">2–3 months</option>
                    <option value="6 months+">6 months+</option>
                    <option value="Need a recommendation">Need a recommendation</option>
                  </select>
                </label>

                {/* Budget Band Select */}
                <label className="block">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 select-none">
                    Budget band
                  </span>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-800 bg-[#07132c]/50 px-4 py-3 text-xs text-white focus:border-orange-500 focus:outline-none transition-colors appearance-none font-sans"
                    style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25em', backgroundRepeat: 'no-repeat' }}
                  >
                    <option value="" disabled>Select budget band</option>
                    <option value="Under ₹5 lakh">Under ₹5 lakh</option>
                    <option value="₹5–15 lakh">₹5–15 lakh</option>
                    <option value="₹15–30 lakh">₹15–30 lakh</option>
                    <option value="₹30 lakh+">₹30 lakh+</option>
                    <option value="Need a recommendation">Need a recommendation</option>
                  </select>
                </label>

                {/* Email Input (Full width) */}
                <label className="block col-span-1 md:col-span-2">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 select-none">
                    Work email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full rounded-lg border border-slate-800 bg-[#07132c]/50 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none transition-colors font-sans"
                  />
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded bg-orange-500 hover:bg-orange-600 px-8 py-3.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 font-sans"
                >
                  SUBMIT NOW
                </button>
              </div>

            </form>
          </div>

        </div>

        {/* Divider Line */}
        <hr className="mt-16 border-white/10" />

        {/* Bottom Section: Links, Logo, Socials & Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Footer Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
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

          {/* Navigation Links (Strictly Home, About Us, Locations) */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-slate-400">
            <Link href="/" className="hover:text-orange-500 transition-colors">HOME</Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">ABOUT US</Link>
            <Link href="/locations" className="hover:text-orange-500 transition-colors">LOCATIONS</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
              aria-label="Twitter X"
            >
              <FaXTwitter className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="mt-8 text-center text-[10px] font-semibold text-slate-500">
          &copy; {new Date().getFullYear()} Airport Advertising by IM Solutions. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
