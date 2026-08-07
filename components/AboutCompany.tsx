"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGlobe, FaAward, FaClock, FaUserCheck } from "react-icons/fa6";

export default function AboutCompany({
  cityName,
  title,
  description,
  image,
}: {
  cityName?: string;
  title?: string;
  description?: string;
  image?: string;
}) {
  const [imageError, setImageError] = useState(false);

  const features = [
    {
      id: 1,
      icon: <FaGlobe className="h-6 w-6 text-orange-500" />,
      title: cityName ? "Local Reach" : "PAN India",
      subtitle: cityName ? "City Network" : "Presence",
    },
    {
      id: 2,
      icon: <FaAward className="h-6 w-6 text-orange-500" />,
      title: "Premium",
      subtitle: "Quality",
    },
    {
      id: 3,
      icon: <FaClock className="h-6 w-6 text-orange-500" />,
      title: "On-Time",
      subtitle: "Execution",
    },
    {
      id: 4,
      icon: <FaUserCheck className="h-6 w-6 text-orange-500" />,
      title: "Expert",
      subtitle: "Team",
    },
  ];

  const primaryImage = image || "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?q=80&w=2071&auto=format&fit=crop";
  const fallbackImage = "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?q=80&w=2071&auto=format&fit=crop";

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Column: Image with slight shadow/border */}
          <div className="lg:col-span-6 relative group">
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageError ? fallbackImage : primaryImage}
                alt={`Airport advertisement example in ${cityName || "India"}`}
                className="h-full w-full object-cover max-h-[420px]"
                onError={() => setImageError(true)}
              />
            </div>
            {/* Decorative colored corner accents */}
            <div className="absolute -bottom-2 -left-2 -z-10 h-24 w-24 rounded-bl-2xl bg-orange-500/10 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"></div>
            <div className="absolute -right-2 -top-2 -z-10 h-24 w-24 rounded-tr-2xl bg-orange-500/10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Small header tag */}
            <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
              {cityName ? `ABOUT ${cityName.toUpperCase()} AIRPORT ADVERTISING` : "ABOUT OUR COMPANY"}
            </span>
            
            {/* Title */}
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
              {title || (cityName ? `${cityName}'s Most Trusted Airport Advertising Partner` : "India's Most Trusted Airport Advertising Partner")}
            </h2>
            
            {/* Description */}
            <p className="mt-6 text-base text-gray-600 leading-relaxed font-medium">
              {description || (cityName ? `We are a premium outdoor advertising agency specializing in Airport Advertising, Terminal Branding, and Transit Media across ${cityName}. With high-definition fabric lightboxes, dynamic digital video walls, and luggage trolley panels, we help brands reach millions of affluent travelers every month.` : "We are a premium outdoor advertising agency specializing in Airport Advertising, Terminal Branding, and Transit Media across India. With high-definition fabric lightboxes, dynamic digital video walls, and luggage trolley panels, we help brands reach millions of affluent travelers every month.")}
            </p>

            {/* Features Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-50 bg-gray-50/50 hover:bg-orange-50/30 hover:border-orange-100 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-extrabold text-gray-900 leading-none">
                      {feature.title}
                    </span>
                    <span className="mt-1 text-xs font-semibold text-gray-500 leading-none">
                      {feature.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
              >
                READ MORE ABOUT US
              </Link>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
