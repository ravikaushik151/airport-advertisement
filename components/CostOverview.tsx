"use client";

import React from "react";
import Link from "next/link";
import { FaWallet, FaPrint, FaWrench, FaCamera, FaPercent } from "react-icons/fa6";

interface CostMetricItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CostOverview() {
  const costMetrics: CostMetricItem[] = [
    {
      id: 1,
      icon: <FaWallet className="h-6 w-6 text-orange-500" />,
      title: "Airport License Fee",
      description: "Cost of securing display space concessions at terminals",
    },
    {
      id: 2,
      icon: <FaPrint className="h-6 w-6 text-orange-500" />,
      title: "Production & Mounting",
      description: "High definition prints, fabric vinyls, and backlights",
    },
    {
      id: 3,
      icon: <FaWrench className="h-6 w-6 text-orange-500" />,
      title: "Campaign Monitoring",
      description: "24/7 technical inspection of digital walls & lightboxes",
    },
    {
      id: 4,
      icon: <FaCamera className="h-6 w-6 text-orange-500" />,
      title: "Verification Auditing",
      description: "Weekly loop audits, proof photos, and traffic data",
    },
    {
      id: 5,
      icon: <FaPercent className="h-6 w-6 text-orange-500" />,
      title: "GST",
      description: "18% GST extra as applicable",
    },
  ];

  return (
    <section id="rates" className="scroll-mt-20 py-16 md:py-20 bg-[#070b19] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
            COST OVERVIEW
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight font-serif">
            Indicative Cost Overview
          </h2>
          <p className="mt-4 text-base text-slate-400 font-medium">
            Transparent pricing. No hidden charges.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left Side: 5 Cost Metric Boxes */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {costMetrics.map((metric) => (
                <div
                  key={metric.id}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 text-center flex flex-col items-center justify-start transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 mb-4 border border-slate-700/50 transition-transform duration-300 group-hover:scale-105">
                    {metric.icon}
                  </div>
                  <h3 className="text-sm font-black text-white leading-tight">
                    {metric.title}
                  </h3>
                  <p className="mt-2.5 text-[11px] font-semibold text-slate-400 leading-normal">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>

            {/* View Detailed Rates Button */}
            <div className="flex justify-center mt-2 lg:mt-0">
              <Link
                href="/#contact-form"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 hover:border-slate-500 bg-transparent px-8 py-3.5 text-sm font-extrabold text-slate-300 hover:text-white transition-all duration-300"
              >
                Request Detailed Quote
              </Link>
            </div>
          </div>

          {/* Right Side: CTA card */}
          <div className="lg:col-span-4 bg-[#0e162f] border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-center gap-4 text-left shadow-xl">
            <h3 className="text-2xl font-black text-white leading-tight">
              Get exact pricing for your campaign
            </h3>
            <p className="text-sm font-medium text-slate-300 leading-relaxed">
              Share your requirement and get a customized quote within 24 hours.
            </p>
            
            <div className="mt-4">
              <Link
                href="/#contact-form"
                className="w-full text-center inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 cursor-pointer"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
