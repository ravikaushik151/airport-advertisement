"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CampaignItem {
  id: number;
  title: string;
  localImage: string;
  fallbackImage: string;
  category: string;
}

export default function OurWork() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const campaigns: CampaignItem[] = [
    {
      id: 1,
      title: "KSRTC Branding Campaign",
      localImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop",
      category: "Transit Wrap",
    },
    {
      id: 2,
      title: "Coca-Cola Promo Wrap",
      localImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop",
      category: "Full Bus Wrap",
    },
    {
      id: 3,
      title: "Citibank Campaign",
      localImage: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=600&auto=format&fit=crop",
      category: "Side Panel Branding",
    },
    {
      id: 4,
      title: "Amazon Prime Video",
      localImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop",
      category: "Rear Wrap",
    },
    {
      id: 5,
      title: "Orange Travel Fleet",
      localImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop",
      category: "Fleet Branding",
    },
    {
      id: 6,
      title: "Cadbury Celebrations",
      localImage: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=600&auto=format&fit=crop",
      category: "Transit Wrap",
    },
  ];

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
            OUR WORK
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
            Our Recent Campaigns
          </h2>
        </div>

        {/* Campaign Images Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:gap-4">
          {campaigns.map((item) => {
            const hasError = imageErrors[item.id];
            const imageUrl = hasError ? item.fallbackImage : item.localImage;

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-orange-100 group"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => handleImageError(item.id)}
                  />
                  {/* Category overlay */}
                  <div className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur-[2px]">
                    {item.category}
                  </div>
                </div>

                {/* Optional Info area */}
                <div className="p-2 text-left">
                  <h3 className="truncate text-xs font-black text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-10 py-4 text-sm font-bold text-white shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
          >
            VIEW ALL WORK
          </Link>
        </div>

      </div>
    </section>
  );
}
