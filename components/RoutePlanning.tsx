"use client";

import React, { useState } from "react";
import { FaBullseye, FaUsers, FaMapPin, FaBus, FaCalendarDays, FaQuoteLeft } from "react-icons/fa6";

interface PlanningPillar {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function RoutePlanning() {
  const [imageError, setImageError] = useState(false);

  const pillars: PlanningPillar[] = [
    {
      id: 1,
      icon: <FaBullseye className="h-6 w-6 text-slate-800" />,
      title: "Audience Profiling",
      description: "We define campaign objectives and identify the traveller profiles most aligned with your brand.",
    },
    {
      id: 2,
      icon: <FaUsers className="h-6 w-6 text-slate-800" />,
      title: "Terminal Selection",
      description: "We select terminals and passenger corridors that best match your audience and campaign intent.",
    },
    {
      id: 3,
      icon: <FaMapPin className="h-6 w-6 text-slate-800" />,
      title: "Media Planning",
      description: "We curate the ideal mix of formats to balance visibility, frequency and brand impact.",
    },
    {
      id: 4,
      icon: <FaBus className="h-6 w-6 text-slate-800" />,
      title: "Authority Clearances",
      description: "We coordinate approvals, scheduling and compliance requirements directly with the relevant airport authorities.",
    },
    {
      id: 5,
      icon: <FaCalendarDays className="h-6 w-6 text-slate-800" />,
      title: "Verification Reports",
      description: "We monitor live execution and provide documented campaign proof with clear, consistent reporting.",
    },
  ];

  const primaryImage = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=600&auto=format&fit=crop";
  const fallbackImage = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=600&auto=format&fit=crop";

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
            AIRPORT TARGETING & PLANNING
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight font-serif">
            How Airport Campaign Planning Works
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: 5 Pillars */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {pillars.map((item) => (
                <div key={item.id} className="flex flex-col items-center text-center group">
                  {/* Icon Circle */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 group-hover:bg-orange-50 group-hover:border-orange-100 group-hover:scale-105">
                    {item.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="mt-5 text-sm font-black text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-3 text-xs font-semibold text-slate-500 leading-relaxed max-w-[140px] mx-auto">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quote Card */}
          <div className="lg:col-span-4 relative overflow-hidden rounded-3xl group flex flex-col justify-between p-6 md:p-8 bg-[#0b1329] border border-slate-800 shadow-xl min-h-[280px]">
            {/* Background Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageError ? fallbackImage : primaryImage}
              alt="Airport Campaign Targeting"
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-[1.02] brightness-[0.4]"
              onError={() => setImageError(true)}
            />
            {/* Gradient Overlay Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070b19] via-[#070b19]/70 to-transparent z-10 pointer-events-none"></div>

            {/* Quote block */}
            <div className="relative z-20 flex flex-col gap-4 text-left">
              <FaQuoteLeft className="h-7 w-7 text-orange-500" />
              <p className="text-base md:text-lg font-extrabold text-white leading-relaxed">
                Strategic passenger journey mapping ensures maximum impressions, higher dwell-time engagement, and unmatched brand prestige.
              </p>
              
              {/* Divider orange accent */}
              <div className="h-1 w-12 bg-orange-500 rounded-full mt-2"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
