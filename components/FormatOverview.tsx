"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FormatItem {
  id: number;
  numberStr: string;
  tag: string;
  title: string;
  description: string;
  bestSuited: string;
  localImage: string;
  fallbackImage: string;
}

export default function FormatOverview({
  cityName,
}: {
  cityName?: string;
}) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const formats: FormatItem[] = [
    {
      id: 1,
      numberStr: "01",
      tag: "HIGH IMPACT • ENTRY & TRANSIT",
      title: "Tension Fabric Lightboxes",
      description: "Large-format backlit displays positioned at key high-traffic transit areas including check-in halls, security gates, and central concourses.",
      bestSuited: "Brand authority, luxury goods, premium real estate",
      localImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      numberStr: "02",
      tag: "DYNAMIC • ULTRA PREMIUM",
      title: "Digital LED Video Walls",
      description: "Stunning, high-definition digital display networks and giant video walls running programmatic rich media and video campaigns.",
      bestSuited: "App launches, dynamic pricing, creative storytelling",
      localImage: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      numberStr: "03",
      tag: "MOBILE REPETITION • DIRECT TOUCH",
      title: "Luggage Trolley Ads",
      description: "High-frequency advertisement panels attached directly to airport luggage trolleys, accompanying passengers throughout their entire journey.",
      bestSuited: "Mass premium products, banks, telecom services",
      localImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      numberStr: "04",
      tag: "EXCLUSIVE PATHWAY • 100% RECALL",
      title: "Aerobridge Branding",
      description: "Exclusive wrap advertisements along the interior pathways or exterior walls of aerobridges, capturing departing and arriving travelers.",
      bestSuited: "High-value B2B services, FinTech, premium consumer goods",
      localImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="formats" className="scroll-mt-20 py-20 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-orange-500"></div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 font-sans">
                TRANSIT ARCHITECTURE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-serif">
              Choose the touchpoint<br />{cityName ? `in ${cityName}` : "by the objective"}.
            </h2>
          </div>
          <div className="lg:col-span-1">
            <p className="text-[14px] sm:text-base text-slate-500 font-medium leading-relaxed font-sans">
              {cityName
                ? `Each format shows verified dimensions, visibility, strengths, limitations, current airport availability and a genuine execution example in ${cityName}.`
                : "Each media touchpoint is strategically mapped along passenger traffic routes, boarding gate queues, and luggage dwell zones to maximize premium brand recall."}
            </p>
          </div>
        </div>

        {/* 4-Column Grid with thin dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-200 shadow-sm bg-white">
          {formats.map((item) => {
            const hasError = imageErrors[item.id];
            const imageUrl = hasError ? item.fallbackImage : item.localImage;

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between bg-white hover:bg-[#051527] p-8 min-h-[580px] transition-all duration-500 ease-in-out cursor-pointer"
              >
                
                {/* Top Section: Number and metadata tag */}
                <div className="flex items-start justify-between relative z-10">
                  <span className="text-2xl font-bold font-sans text-orange-500 leading-none">
                    {item.numberStr}
                  </span>
                  <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase text-right leading-relaxed max-w-[150px] group-hover:text-slate-300 transition-colors duration-300">
                    {item.tag}
                  </span>
                </div>

                {/* Format image container (visible by default) */}
                <div className="mt-6 overflow-hidden rounded-xl relative aspect-[16/10] z-10 w-full shadow-sm border border-slate-100/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    onError={() => handleImageError(item.id)}
                  />
                </div>

                {/* Middle details: Title & Description */}
                <div className="flex-1 flex flex-col justify-start relative z-10">
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-white mt-8 tracking-tight font-serif transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-slate-500 group-hover:text-slate-300 font-medium leading-relaxed font-sans transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Bottom details: Suited category & Footer */}
                <div className="relative z-10 mt-6">
                  {/* Suitability divider and text */}
                  <div className="border-t border-gray-100 group-hover:border-white/10 pt-4 transition-colors duration-300">
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-sans">
                      BEST SUITED FOR
                    </div>
                    <div className="text-[13px] font-bold text-slate-800 group-hover:text-white mt-1 font-sans transition-colors duration-300">
                      {item.bestSuited}
                    </div>
                  </div>

                  {/* View format link */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 group-hover:border-white/10 transition-colors duration-300">
                    <span className="text-[12px] font-bold text-slate-900 group-hover:text-white font-sans transition-colors duration-300">
                      View media specs
                    </span>
                    <span className="text-xs text-orange-500 font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                      ↗
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
