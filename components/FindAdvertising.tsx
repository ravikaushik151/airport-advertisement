"use client";

import React from "react";
import Link from "next/link";

interface CityOperatorCard {
  id: number;
  abbr: string;
  operator: string;
  city: string;
  description: string;
  slug: string;
}

export default function FindAdvertising() {
  const cards: CityOperatorCard[] = [
    {
      id: 1,
      abbr: "BLR",
      operator: "Kempegowda Int'l Airport",
      city: "Bengaluru (Bangalore)",
      description: "Engage with high-income tech professionals, global executives, and premium domestic travelers at KIA Terminal 1 & 2.",
      slug: "bengaluru",
    },
    {
      id: 2,
      abbr: "BOM",
      operator: "Chhatrapati Shivaji Maharaj Int'l",
      city: "Mumbai",
      description: "Target corporate decision-makers, financial leaders, and retail shoppers inside CSMIA's premium terminals.",
      slug: "mumbai",
    },
    {
      id: 3,
      abbr: "HYD",
      operator: "Rajiv Gandhi Int'l Airport",
      city: "Hyderabad",
      description: "Reach pharma executives, tech entrepreneurs, and global business travelers in RGIA departures and lounges.",
      slug: "hyderabad",
    },
    {
      id: 4,
      abbr: "MAA",
      operator: "Chennai International Airport",
      city: "Chennai",
      description: "Connect with manufacturing leaders, business travelers, and NRI families inside Chennai's domestic and international wings.",
      slug: "chennai",
    },
    {
      id: 5,
      abbr: "CCU",
      operator: "Netaji Subhash Chandra Bose Int'l",
      city: "Kolkata",
      description: "Engage cultural flyers, regional corporate travelers, and retail spenders at East India's primary aviation gateway.",
      slug: "kolkata",
    },
    {
      id: 6,
      abbr: "COK",
      operator: "Cochin International Airport",
      city: "Kochi",
      description: "Reach affluent international NRI families, travelers, and leisure tourists at Kerala's greenest aviation hub.",
      slug: "kochi",
    },
  ];

  return (
    <section id="find-ads" className="scroll-mt-20 py-20 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-orange-500"></div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 font-sans">
                PLAN BY AIRPORT HUBS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-serif">
              Regional aviation hubs.<br />Premium demographics.
            </h2>
          </div>
          <div className="lg:col-span-1">
            <p className="text-[14px] sm:text-base text-slate-500 font-medium leading-relaxed font-sans">
              Each airport hub is categorized by passenger flow profiles, domestic/international flyers, average terminal dwell times, and media concession limits.
            </p>
          </div>
        </div>

        {/* 3-Column Grid with elevation hover cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-xl overflow-visible divide-y md:divide-y divide-gray-200 shadow-sm bg-white">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={`/locations/${card.slug}`}
              className="group relative flex flex-col justify-between bg-white p-8 min-h-[440px] transition-all duration-500 ease-in-out hover:shadow-2xl hover:border-gray-200 hover:-translate-y-2 hover:z-20 hover:rounded-xl cursor-pointer"
            >
              
              {/* Top Row: Abbreviated City Tag and Inventory Verification */}
              <div className="flex items-center justify-between relative z-10">
                <span className="text-2xl font-bold font-sans text-slate-200 group-hover:text-slate-300 transition-colors duration-300">
                  {card.abbr}
                </span>
                <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  VERIFY INVENTORY
                </div>
              </div>

              {/* Body: Operator tag, City title, and brief description */}
              <div className="flex-1 flex flex-col justify-start mt-8 relative z-10">
                <div className="text-[10px] font-bold text-orange-500 tracking-wider font-sans uppercase">
                  {card.operator}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2 font-serif tracking-tight">
                  {card.city}
                </h3>
                <p className="mt-4 text-xs sm:text-[13px] text-slate-500 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>

              {/* Bottom: explore route link and arrow overlay */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100 relative z-10">
                <span className="text-[11px] font-bold text-slate-800 group-hover:text-orange-500 transition-colors duration-300 font-sans">
                  Explore airport media
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#051527] text-white transition-transform duration-300 group-hover:scale-110">
                  <span className="text-[10px] font-bold">↗</span>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
