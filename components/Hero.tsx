"use client";

import React from "react";
import Link from "next/link";

export default function Hero({
  cityName,
  title,
  subtitle,
  image,
}: {
  cityName?: string;
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative min-h-screen w-full bg-[#051527] overflow-hidden flex flex-col justify-between">
      
      {/* 50/50 Split Layout container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full flex-1">
        
        {/* Left Column: Dark Navy Text Content */}
        <div className="relative flex flex-col justify-center px-6 py-24 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-32 lg:pt-36 bg-[#051527] z-10">
          
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#f15a24]"></span>
            <span className="text-[11px] font-bold tracking-[0.18em] text-slate-400 uppercase font-sans">
              {cityName
                ? `${cityName.toUpperCase()}'S PREMIER AIRPORT ADVERTISING DESK`
                : "INDIA'S PREMIER AIRPORT ADVERTISING DESK"}
            </span>
          </div>

          {/* Heading with Serif Accent */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 font-serif">
            {title || (
              cityName ? (
                <>
                  Airport branding in<br />
                  {cityName}, curated for<br />
                  <span className="font-serif italic text-[#f15a24] font-normal font-serif">influence.</span>
                </>
              ) : (
                <>
                  Airport Advertising,<br />
                  curated for<br />
                  <span className="font-serif italic text-[#f15a24] font-normal font-serif">influence.</span>
                </>
              )
            )}
          </h1>

          {/* Descriptive Subtext */}
          <p className="text-[15px] sm:text-base text-slate-300/90 font-medium leading-relaxed max-w-xl mb-10 font-sans">
            {subtitle || (cityName ? `Engage premium travellers, business leaders and high-value audiences across ${cityName}'s leading airports through distinguished media placements, immersive digital formats and precision-led terminal branding.` : "Engage premium travellers, business leaders and high-value audiences across India’s leading airports through distinguished media placements, immersive digital formats and precision-led terminal branding.")}
          </p>

          {/* Call-to-actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-8 mb-16">
            <Link
              href="/#contact-form"
              className="inline-flex items-center justify-center rounded bg-[#f15a24] hover:bg-[#e04f1a] px-6 py-4 text-[15px] font-bold text-white shadow-lg shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Bespoke Campaign Plan <span className="ml-2 font-sans font-normal text-xs">↗</span>
            </Link>
            <Link
              href="#formats"
              className="inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-white hover:text-orange-500 transition-colors py-2"
            >
              Explore Media Formats <span className="text-xs text-slate-400">↓</span>
            </Link>
          </div>

          {/* Integrated Metrics Row */}
          <div className="grid grid-cols-3 border-t border-white/10 pt-8 mt-auto w-full gap-4">
            <div className="border-r border-white/10 pr-3">
              <div className="text-base sm:text-lg font-bold text-white leading-tight">Since 2013</div>
              <div className="text-[11px] text-slate-400 mt-1 leading-snug">Proven Media Expertise</div>
            </div>
            <div className="border-r border-white/10 px-3">
              <div className="text-base sm:text-lg font-bold text-white leading-tight">12+ Airports</div>
              <div className="text-[11px] text-slate-400 mt-1 leading-snug">National concession network</div>
            </div>
            <div className="pl-3">
              <div className="text-base sm:text-lg font-bold text-white leading-tight">100% Audited</div>
              <div className="text-[11px] text-slate-400 mt-1 leading-snug">Verified End-to-End Execution</div>
            </div>
          </div>

        </div>

        {/* Right Column: Visual Section with UI Cards */}
        <div className="relative min-h-[450px] lg:min-h-full w-full overflow-hidden bg-slate-950">
          
          {/* Dusk Background Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image || "/cover/Airport branding.webp"}
            alt={`Premium Airport Advertising in ${cityName || "India"} planned with precision`}
            className="absolute inset-0 h-full w-full object-cover brightness-[0.6] contrast-[1.05]"
          />

          {/* Floating UI: TERMINAL MEDIA Card */}
          <div className="absolute top-8 right-8 bg-[#0c192c]/85 border border-white/10 rounded-lg p-5 backdrop-blur-md shadow-2xl max-w-xs w-[290px] text-white z-20">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-4 text-[10px] uppercase font-bold tracking-wider text-slate-400">
              <span>Terminal Media</span>
              <span className="flex items-center gap-1.5 text-[#51e29e]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#51e29e] animate-pulse"></span>
                Active Slots
              </span>
            </div>

            {/* Objective details */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Airport</div>
                <div className="text-[13px] font-bold text-white mt-0.5">{cityName || "Bengaluru"}</div>
              </div>
              <div className="text-orange-500 font-bold text-sm">→</div>
              <div className="text-right">
                <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Objective</div>
                <div className="text-[13px] font-bold text-white mt-0.5">HNI Targeting</div>
              </div>
            </div>

            {/* Lower Filter Pill Buttons */}
            <div className="flex gap-1.5 text-[9px] font-bold">
              <span className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-slate-300 hover:bg-white/10 transition-colors cursor-pointer select-none">
                Dwell Time
              </span>
              <span className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-slate-300 hover:bg-white/10 transition-colors cursor-pointer select-none">
                LED Loops
              </span>
              <span className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-slate-300 hover:bg-white/10 transition-colors cursor-pointer select-none">
                Compliance
              </span>
            </div>
          </div>

          {/* Floating Label: CONCEPT DIRECTION */}
          <div className="absolute bottom-8 left-8 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400/90 z-20 select-none">
            Concept Direction
          </div>

          {/* Floating Label */}
          <div className="absolute bottom-8 right-8 text-right z-20 select-none">
            <div className="font-serif italic text-white text-xl sm:text-2xl leading-none">
              High prestige branding.
            </div>
            <div className="font-serif italic text-white text-xl sm:text-2xl mt-1.5 leading-none">
              Audited passenger reach.
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
