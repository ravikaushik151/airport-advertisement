"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CaseStudyMetric {
  label: string;
  value: string;
}

interface CaseStudyItem {
  id: number;
  locationTag: string;
  title: string;
  metrics: CaseStudyMetric[];
  localImage: string;
  fallbackImage: string;
  slug: string;
}

export default function FeaturedCaseStudies() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const cases: CaseStudyItem[] = [
    {
      id: 1,
      locationTag: "Bangalore Airport • KIA T2 Terminal",
      title: "Premium Fintech Card Launch",
      metrics: [
        { label: "Duration", value: "4 Weeks" },
        { label: "Formats", value: "Aerobridges & Digital LED Video Walls" },
        { label: "Reach", value: "2.1M+ Passengers Engaged" },
        { label: "Outcome", value: "35% Increase in Card Approvals" },
      ],
      localImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=600&auto=format&fit=crop",
      slug: "fintech-card-kia",
    },
    {
      id: 2,
      locationTag: "Mumbai Airport • CSMIA T2 Departures",
      title: "Luxury Real Estate Launch",
      metrics: [
        { label: "Duration", value: "6 Weeks" },
        { label: "Formats", value: "Departure Hall Backlit Lightboxes" },
        { label: "Reach", value: "3.5M+ Passengers Covered" },
        { label: "Outcome", value: "120+ Qualified Unit Enquiries" },
      ],
      localImage: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=600&auto=format&fit=crop",
      slug: "luxury-property-csmia",
    },
    {
      id: 3,
      locationTag: "Hyderabad Airport • RGIA Arrivals Lobby",
      title: "Premium SUV Model Launch",
      metrics: [
        { label: "Duration", value: "2 Weeks" },
        { label: "Formats", value: "Experiential Display & Digital Loops" },
        { label: "Reach", value: "1.5M+ Domestic Flyers" },
        { label: "Outcome", value: "850+ SUV Test Drives Booked" },
      ],
      localImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
      fallbackImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
      slug: "suv-launch-rgia",
    },
  ];

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="case-studies" className="scroll-mt-20 py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
            CASE STUDIES
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight font-serif">
            Featured Case Studies
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium">
            Real campaigns. Real impact.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item) => {
            const hasError = imageErrors[item.id];
            const imageUrl = hasError ? item.fallbackImage : item.localImage;

            return (
              <div
                key={item.id}
                className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-50 relative mb-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => handleImageError(item.id)}
                    />
                  </div>

                  {/* Metadata tags */}
                  <span className="text-xs font-bold text-slate-400 block tracking-wide select-none">
                    <span className="text-orange-500 font-extrabold">{item.locationTag.split(" • ")[0]}</span>
                    {" • " + item.locationTag.split(" • ").slice(1).join(" • ")}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-black text-slate-900 tracking-tight mt-2">
                    {item.title}
                  </h3>

                  {/* Metrics list */}
                  <ul className="mt-4 space-y-2 text-left">
                    {item.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start text-xs font-semibold text-slate-600 gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0"></span>
                        <span>
                          <strong className="text-slate-800 font-extrabold">{metric.label}:</strong> {metric.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="mt-6">
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="w-full text-center inline-flex items-center justify-center rounded-xl bg-[#0b1329] hover:bg-slate-950 px-4 py-3 text-xs font-extrabold text-white transition-all duration-300 cursor-pointer"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicators Dots */}
        <div className="flex justify-center gap-2 mt-10">
          <span className="h-2 w-6 rounded-full bg-orange-500 transition-all duration-300"></span>
          <span className="h-2 w-2 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer"></span>
          <span className="h-2 w-2 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer"></span>
          <span className="h-2 w-2 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer"></span>
        </div>

      </div>
    </section>
  );
}
