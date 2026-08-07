"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaCheck, FaEye, FaGlobe, FaChartLine } from "react-icons/fa6";

export default function WhatIsAirportAdvertising() {
  const [imageError, setImageError] = useState(false);

  const bulletPoints = [
    "Target premium HNIs & frequent business travelers",
    "High dwell time of 60 to 90 minutes post-security",
    "Premium, clean, and uncluttered advertising environment",
    "Build deep brand prestige and authority",
  ];

  const badges = [
    {
      id: 1,
      icon: <FaEye className="h-6 w-6 text-orange-500" />,
      title: "Massive",
      subtitle: "Premium Views",
    },
    {
      id: 2,
      icon: <FaGlobe className="h-6 w-6 text-orange-500" />,
      title: "Corporate",
      subtitle: "Decision Makers",
    },
    {
      id: 3,
      icon: <FaChartLine className="h-6 w-6 text-orange-500" />,
      title: "High Recall",
      subtitle: "Conversions",
    },
  ];

  const primaryImage = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop";
  const fallbackImage = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop";

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          
          {/* Left Column: Context & Bullet Points */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
              WHAT IS AIRPORT ADVERTISING?
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight font-serif">
              Premium Reach. High-Impact Prestige.
            </h2>
            <p className="mt-6 text-base text-slate-600 leading-relaxed font-medium">
              Airport advertising is one of the most powerful and prestigious transit marketing channels today. It allows brands to connect directly with highly affluent, receptive consumers in a captive environment during their passenger journey.
            </p>

            {/* Checklist */}
            <ul className="mt-8 space-y-4">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 mt-0.5">
                    <FaCheck className="h-3 w-3 text-orange-500" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* Center Column: Graphic Image */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="w-full overflow-hidden rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] group bg-slate-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageError ? fallbackImage : primaryImage}
                alt="Premium Airport Advertising and Displays"
                className="w-full h-auto object-cover max-h-[380px] transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
              {/* Image banner text representation overlay if any */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: Metric Badges */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col justify-around lg:justify-center items-center gap-6 lg:gap-8 bg-slate-50/50 lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-slate-100 lg:border-none">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center text-center lg:items-start lg:text-left group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md border border-slate-100/50 mb-3 transition-transform duration-300 group-hover:scale-110">
                  {badge.icon}
                </div>
                <h4 className="text-sm font-black text-slate-900 leading-none">
                  {badge.title}
                </h4>
                <p className="text-xs font-semibold text-slate-500 mt-1 leading-none">
                  {badge.subtitle}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
