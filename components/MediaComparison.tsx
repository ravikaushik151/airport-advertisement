"use client";

import React, { useState } from "react";

interface ComparisonRow {
  factor: string;
  rwaActivation: string;
  hoardings: string;
  metroMedia: string;
  digitalAds: string;
}

export default function MediaComparison() {
  const [imageError, setImageError] = useState(false);

  const rows: ComparisonRow[] = [
    {
      factor: "Audience Profile",
      rwaActivation: "High HNIs & Decision Makers",
      hoardings: "Broad Public (Mass Market)",
      metroMedia: "Commuters & Students",
      digitalAds: "Interests & Demographics",
    },
    {
      factor: "Dwell Time / Attention",
      rwaActivation: "60–90 Mins (Highest Dwell)",
      hoardings: "2–3 Seconds (High Speed)",
      metroMedia: "5–10 Mins (Transit)",
      digitalAds: "1–2 Seconds (Quick Scroll)",
    },
    {
      factor: "Brand Prestige",
      rwaActivation: "Exceptional (Premium Env)",
      hoardings: "Medium (High Clutter)",
      metroMedia: "Medium (Crowded)",
      digitalAds: "Low (Spam & Adblockers)",
    },
    {
      factor: "Attention Mindset",
      rwaActivation: "Receptive (Post-Security)",
      hoardings: "Distracted (Driving)",
      metroMedia: "Rushed (Commuting)",
      digitalAds: "Passive / Skeptical",
    },
  ];

  const primaryImage = "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=600&auto=format&fit=crop";
  const fallbackImage = "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=600&auto=format&fit=crop";

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
            COMPARISON
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight font-serif">
            Airport Advertising Compared with Other Media Channels
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Responsive Comparison Table */}
          <div className="lg:col-span-9 bg-[#0b1329] border border-slate-800 rounded-3xl p-5 md:p-6 flex flex-col justify-center shadow-xl">
            <div className="overflow-x-auto scrollbar-none">
              <table className="min-w-full divide-y divide-slate-800/80">
                <thead>
                  <tr className="text-[10px] sm:text-xs font-black tracking-wider uppercase text-slate-400 select-none">
                    <th scope="col" className="py-4 px-3 text-left">
                      Factor
                    </th>
                    <th scope="col" className="py-4 px-3 text-center bg-orange-500 text-white font-black rounded-t-2xl shadow-sm">
                      Airport Advertising
                    </th>
                    <th scope="col" className="py-4 px-3 text-center">
                      Hoardings
                    </th>
                    <th scope="col" className="py-4 px-3 text-center">
                      Metro Media
                    </th>
                    <th scope="col" className="py-4 px-3 text-center">
                      Digital Ads
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/20 transition-colors">
                      {/* Factor Label */}
                      <td className="py-4 px-3 text-xs text-left font-black text-slate-200 whitespace-nowrap">
                        {row.factor}
                      </td>

                      {/* Highlighted Cell */}
                      <td className={`py-4 px-3 text-xs text-center font-black bg-orange-500/10 text-orange-400 border-x border-orange-500/20 whitespace-nowrap ${idx === rows.length - 1 ? "rounded-b-2xl" : ""}`}>
                        {row.rwaActivation}
                      </td>

                      {/* Regular Comparison Cells */}
                      <td className="py-4 px-3 text-xs text-center text-slate-300 font-semibold whitespace-nowrap">
                        {row.hoardings}
                      </td>
                      <td className="py-4 px-3 text-xs text-center text-slate-300 font-semibold whitespace-nowrap">
                        {row.metroMedia}
                      </td>
                      <td className="py-4 px-3 text-xs text-center text-slate-300 font-semibold whitespace-nowrap">
                        {row.digitalAds}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Mini Info Visual Card */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl group flex flex-col justify-end p-6 bg-[#0b1329] border border-slate-800 shadow-xl min-h-[280px]">
            {/* Background Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageError ? fallbackImage : primaryImage}
              alt="Airport media comparison"
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-[1.02] brightness-[0.4]"
              onError={() => setImageError(true)}
            />
            {/* Gradient Overlay Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-[#0b1329]/80 to-transparent z-10 pointer-events-none"></div>

            {/* Content copy text */}
            <p className="relative z-20 text-sm font-extrabold text-white leading-relaxed text-left">
              Airport media offers exceptional brand prestige and maximum dwell-time attention from high-value business travelers.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
