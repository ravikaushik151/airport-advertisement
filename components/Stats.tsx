"use client";

import React from "react";
import { FaBus, FaLocationDot, FaBullhorn, FaUsers } from "react-icons/fa6";

interface StatItem {
  id: number;
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function Stats() {
  const statItems: StatItem[] = [
    {
      id: 1,
      icon: <FaBus className="h-7 w-7 text-orange-500" />,
      value: "5000+",
      label: "Buses Wrapped",
    },
    {
      id: 2,
      icon: <FaLocationDot className="h-7 w-7 text-orange-500" />,
      value: "120+",
      label: "Cities Covered",
    },
    {
      id: 3,
      icon: <FaBullhorn className="h-7 w-7 text-orange-500" />,
      value: "1500+",
      label: "Successful Campaigns",
    },
    {
      id: 4,
      icon: <FaUsers className="h-7 w-7 text-orange-500" />,
      value: "98%",
      label: "Happy Clients",
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0a192f]/90 px-6 py-6 shadow-2xl backdrop-blur-md sm:px-8 sm:py-8 lg:px-12">
      <div className="grid grid-cols-1 gap-6 divide-y divide-white/10 sm:grid-cols-2 sm:gap-8 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        
        {statItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center gap-4 py-4 sm:py-0 ${
              index > 0 ? "lg:pl-8" : ""
            }`}
          >
            {/* Icon Wrapper */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 shadow-inner transition-transform hover:scale-105">
              {item.icon}
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-white md:text-3xl leading-none">
                {item.value}
              </span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {item.label}
              </span>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
