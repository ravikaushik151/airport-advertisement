"use client";

import React, { useState } from "react";
import { FaBus, FaBusSimple, FaCompass, FaChair, FaStore, FaBoxesStacked } from "react-icons/fa6";

interface ServiceItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  localImage: string;
  fallbackImage: string;
}

export default function Services() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const services: ServiceItem[] = [
    {
      id: 1,
      icon: <FaBus className="h-5 w-5 text-white" />,
      title: "Full Bus Wrap",
      description: "Complete bus wrap for maximum brand visibility.",
      localImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      icon: <FaBusSimple className="h-5 w-5 text-white" />,
      title: "Side Panel Branding",
      description: "High impact side branding for great brand recall.",
      localImage: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      icon: <FaCompass className="h-5 w-5 text-white" />,
      title: "Rear Panel Branding",
      description: "Cost-effective branding with high visibility.",
      localImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop", // using a cropped bus rear equivalent
    },
    {
      id: 4,
      icon: <FaChair className="h-5 w-5 text-white" />,
      title: "Interior Branding",
      description: "Reach your audience even inside the bus.",
      localImage: "https://images.unsplash.com/photo-1494516192674-b82b5f1e53dc?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1494516192674-b82b5f1e53dc?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      icon: <FaStore className="h-5 w-5 text-white" />,
      title: "Bus Shelter Branding",
      description: "Branding on bus shelters at prime locations.",
      localImage: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 6,
      icon: <FaBoxesStacked className="h-5 w-5 text-white" />,
      title: "Fleet Branding",
      description: "Brand your entire fleet for strong presence.",
      localImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
            OUR SERVICES
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
            Premium Bus Branding Solutions
          </h2>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:gap-4 xl:gap-5">
          {services.map((service) => {
            const hasError = imageErrors[service.id];
            const imageUrl = hasError ? service.fallbackImage : service.localImage;

            return (
              <div
                key={service.id}
                className="relative flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-4 pt-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-orange-100/50 group"
              >
                {/* Overlapping Rounded Circle Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Service Card Image */}
                <div className="w-full h-28 overflow-hidden rounded-xl bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => handleImageError(service.id)}
                  />
                </div>

                {/* Service Title */}
                <h3 className="mt-5 text-sm font-black text-gray-900 leading-snug">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="mt-2 text-[11px] font-bold text-gray-500 leading-relaxed flex-1">
                  {service.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
