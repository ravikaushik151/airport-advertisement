"use client";

import React from "react";

export default function WhyAirportAdvertising({
  cityName,
}: {
  cityName?: string;
}) {
  return (
    <section className="py-24 bg-[#051527] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Operator Credentials */}
          <div className="lg:col-span-5 border-y border-white/10 py-12 flex flex-col justify-center">
            <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase font-sans mb-3 select-none">
              OPERATED BY
            </div>
            <h3 className="text-4xl sm:text-5xl font-black font-serif text-white tracking-tight leading-none">
              IM Solutions
            </h3>
            <p className="text-[11px] font-medium text-slate-400 font-sans tracking-wide mt-5 select-none">
              Premium Transit Media Agency &bull; {cityName || "National"} &bull; Since 2013
            </p>
          </div>

          {/* Right Column: Why AirportAdvertising capabilities details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
              <span className="text-[10px] font-bold tracking-[0.18em] text-slate-400 uppercase font-sans">
                WHY AIRPORT ADVERTISING BY IM SOLUTIONS
              </span>
            </div>

            {/* Main title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] font-serif tracking-tight">
              Specialist depth.<br />{cityName ? `Campaign capability in ${cityName}` : "Agency-wide capability"}.
            </h2>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed font-sans mt-6 mb-10 max-w-xl">
              Our dedicated transit team handles flight traffic research, slot permissions, custom print production, nighttime mounting logistics, structural inspections, and detailed post-campaign performance reporting.
            </p>

            {/* 2x2 Feature Grid block */}
            <div className="grid grid-cols-2 border border-white/10 rounded overflow-hidden bg-white/[0.01]">
              <div className="p-6 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white border-r border-b border-white/10 transition-colors duration-300 font-sans select-none">
                Passenger demographic mapping
              </div>
              <div className="p-6 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white border-b border-white/10 transition-colors duration-300 font-sans select-none">
                Interactive digital displays
              </div>
              <div className="p-6 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white border-r border-white/10 transition-colors duration-300 font-sans select-none">
                End-to-end night logistics
              </div>
              <div className="p-6 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300 font-sans select-none">
                Analytics & reach reporting
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
