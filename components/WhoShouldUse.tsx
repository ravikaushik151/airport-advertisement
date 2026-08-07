"use client";

import React from "react";
import { FaBuilding, FaCartShopping, FaGem, FaGraduationCap, FaHeartPulse, FaTv, FaUsers } from "react-icons/fa6";

interface IndustryItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhoShouldUse() {
  const industries: IndustryItem[] = [
    {
      id: 1,
      icon: <FaBuilding className="h-6 w-6 text-orange-500" />,
      title: "Real Estate",
      description: "Showcase luxury properties and villaments to high-net-worth buyers.",
    },
    {
      id: 2,
      icon: <FaTv className="h-6 w-6 text-orange-500" />,
      title: "B2B SaaS & Tech",
      description: "Reach corporate decision-makers, CXOs, and enterprise buyers in transit.",
    },
    {
      id: 3,
      icon: <FaGem className="h-6 w-6 text-orange-500" />,
      title: "Jewellery & Luxury",
      description: "Build premium recall and trust for high-value purchases.",
    },
    {
      id: 4,
      icon: <FaGraduationCap className="h-6 w-6 text-orange-500" />,
      title: "FinTech & Banking",
      description: "Promote wealth management, premium cards, and NRI accounts.",
    },
    {
      id: 5,
      icon: <FaHeartPulse className="h-6 w-6 text-orange-500" />,
      title: "Automobile",
      description: "Target high-income buyers for premium SUV and sedan launches.",
    },
    {
      id: 6,
      icon: <FaCartShopping className="h-6 w-6 text-orange-500" />,
      title: "Travel & Leisure",
      description: "Reach frequent flyers for resorts, bags, and luxury booking apps.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
            TARGET INDUSTRIES
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight font-serif">
            Who Benefits from Airport Advertising?
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: 6 Industry Cards */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {industries.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-100 rounded-2xl p-5 text-center flex flex-col items-center justify-center transition-all duration-300 hover:border-orange-100 hover:shadow-lg group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 mb-4 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-black text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-slate-500 leading-relaxed max-w-[150px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industry Focus CTA Card */}
          <div className="lg:col-span-4 bg-[#070b19] border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between items-start shadow-xl min-h-[280px]">
            {/* Orange Top Accent Line */}
            <div className="h-1 w-12 bg-orange-500 rounded-full mb-6"></div>

            {/* Core copy */}
            <p className="text-lg md:text-xl font-extrabold text-white leading-relaxed text-left flex-1">
              From luxury watches to B2B enterprise software—airport advertising connects your brand with premium decision makers.
            </p>

            {/* Group icon badge */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-orange-400 mt-6 self-start shadow-inner">
              <FaUsers className="h-5 w-5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
