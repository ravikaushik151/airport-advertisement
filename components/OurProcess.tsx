"use client";

import React from "react";
import { FaClipboardList, FaMagnifyingGlass, FaBuilding, FaPenNib, FaPrint, FaWrench, FaBullhorn, FaChartBar } from "react-icons/fa6";

interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function OurProcess() {
  const steps: ProcessStep[] = [
    {
      id: 1,
      step: "01",
      title: "Brief & Objective",
      description: "We discuss campaign goals, target passengers, and brand budget.",
      icon: <FaClipboardList className="h-5 w-5 text-white" />,
    },
    {
      id: 2,
      step: "02",
      title: "Research & Plan",
      description: "We select terminals and media formats matching demographics.",
      icon: <FaMagnifyingGlass className="h-5 w-5 text-white" />,
    },
    {
      id: 3,
      step: "03",
      title: "Authority Clearance",
      description: "We secure slot bookings and content clearances from airport authorities.",
      icon: <FaBuilding className="h-5 w-5 text-white" />,
    },
    {
      id: 4,
      step: "04",
      title: "Creative & Layout",
      description: "We resize and check resolution of high-impact creative files.",
      icon: <FaPenNib className="h-5 w-5 text-white" />,
    },
    {
      id: 5,
      step: "05",
      title: "HD Production",
      description: "We produce graphics on premium backlit fabrics and vinyls.",
      icon: <FaPrint className="h-5 w-5 text-white" />,
    },
    {
      id: 6,
      step: "06",
      title: "Night Mounting",
      description: "Our mounting crew installs media during non-operational hours.",
      icon: <FaWrench className="h-5 w-5 text-white" />,
    },
    {
      id: 7,
      step: "07",
      title: "Campaign Live",
      description: "Displays go live capturing high-dwell flyer impressions.",
      icon: <FaBullhorn className="h-5 w-5 text-white" />,
    },
    {
      id: 8,
      step: "08",
      title: "Loop Reports",
      description: "We share weekly proof photos and terminal traffic audits.",
      icon: <FaChartBar className="h-5 w-5 text-white" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
            CAMPAIGN PROCESS
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight font-serif">
            Campaign Planning and Execution Process
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium">
            Our proven 8-step process ensures seamless execution and measurable results.
          </p>
        </div>

        {/* Steps Flow (Responsive layout) */}
        <div className="relative">
          {/* Horizontal connecting line for large screens (centered on the circle nodes) */}
          <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-0.5 border-t border-dashed border-slate-200 -z-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-3 xl:gap-4 relative z-10">
            {steps.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Vertical connecting line for mobile (centered on the circle nodes) */}
                {index < steps.length - 1 && (
                  <div className="block lg:hidden absolute top-[56px] bottom-[-32px] left-1/2 -translate-x-1/2 w-0.5 border-l border-dashed border-slate-200 -z-10"></div>
                )}

                {/* Circle Icon Badge */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b1329] border border-slate-800 text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0f1b3a] group-hover:border-orange-500/30">
                  {item.icon}
                </div>

                {/* Step Number Badge */}
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 border border-orange-200 text-[10px] font-black text-orange-600 mt-4 shadow-sm select-none">
                  {item.step}
                </div>

                {/* Step Title */}
                <h3 className="mt-3 text-sm font-black text-slate-900 leading-snug group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="mt-2 text-xs font-semibold text-slate-500 leading-relaxed max-w-[130px] mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
