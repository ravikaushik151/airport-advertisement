"use client";

import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

interface TestimonialItem {
  id: number;
  text: string;
  name: string;
  role: string;
  company: string;
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      text: "Excellent service and outstanding support from the team. Our brand visibility increased significantly within a short time.",
      name: "Rohit Sharma",
      role: "Marketing Head",
      company: "Samsung",
    },
    {
      id: 2,
      text: "Very professional team and quality of printing is superb. Highly recommended for airport branding campaigns.",
      name: "Anita Verma",
      role: "Brand Manager",
      company: "Jio",
    },
    {
      id: 3,
      text: "Timely execution and great reach. Our campaign got excellent response across multiple cities.",
      name: "Vikram Malhotra",
      role: "Director",
      company: "Amul",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
            TESTIMONIALS
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-100 group"
            >
              {/* Quote Mark Icon */}
              <div className="mb-4">
                <FaQuoteLeft className="h-7 w-7 text-orange-500 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Quote Text */}
              <p className="text-sm font-semibold text-gray-600 leading-relaxed italic flex-1">
                "{item.text}"
              </p>

              {/* Author Details */}
              <div className="mt-6 border-t border-gray-50 pt-4 text-left">
                <span className="block text-sm font-black text-gray-900">
                  {item.name}
                </span>
                <span className="mt-1 block text-xs font-semibold text-gray-500">
                  {item.role}, <span className="font-extrabold text-orange-500">{item.company}</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
