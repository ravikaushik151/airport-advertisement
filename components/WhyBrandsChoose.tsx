"use client";

import React, { useState } from "react";
import { FaUsers, FaTags, FaMap, FaClock, FaLightbulb } from "react-icons/fa6";

interface BenefitItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyBrandsChoose() {
  const [imageError, setImageError] = useState(false);

  const benefits: BenefitItem[] = [
    {
      id: 1,
      icon: <FaUsers className="h-6 w-6 text-orange-500" />,
      title: "HNI & Decision-Maker Access",
      description: "Reach affluent travellers, business leaders and high-value decision-makers within a premium environment.",
    },
    {
      id: 2,
      icon: <FaLightbulb className="h-6 w-6 text-orange-500" />,
      title: "Elevated Brand Recall",
      description: "Extended dwell time and captive attention create stronger visibility, recognition and lasting brand memory.",
    },
    {
      id: 3,
      icon: <FaTags className="h-6 w-6 text-orange-500" />,
      title: "Unrivalled Prestige",
      description: "Position your brand within distinguished airport environments that naturally elevate perception and authority.",
    },
    {
      id: 4,
      icon: <FaMap className="h-6 w-6 text-orange-500" />,
      title: "Nationwide Airport Presence",
      description: "Scale campaigns across leading airport hubs while maintaining a consistent and refined brand presence.",
    },
    {
      id: 5,
      icon: <FaClock className="h-6 w-6 text-orange-500" />,
      title: "Receptive Dwell Mindset",
      description: "Engage passengers during extended moments of waiting, movement and discovery when attention is naturally higher.",
    },
  ];

  const primaryImage = "/cover/Why Choose Airport Advertising.webp";
  const fallbackImage = "/cover/Why Choose Airport Advertising.webp";

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Column: Heading and 5 benefits */}
          <div className="lg:col-span-9 flex flex-col text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight font-serif mb-12">
              Why Choose Airport Advertising?
            </h2>

            {/* Benefits list (horizontal or wrapped flex/grid) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {benefits.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-start text-left group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 shadow-sm border border-orange-100/50 mb-4 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-black text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual image */}
          <div className="lg:col-span-3 relative flex justify-end">
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] group bg-slate-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageError ? fallbackImage : primaryImage}
                alt="Premium airport media placements"
                className="w-full h-auto object-cover max-h-[350px] transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
