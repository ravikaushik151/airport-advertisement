"use client";

import React, { useState } from "react";
import Link from "next/link";

interface InventoryStatusRow {
  id: number;
  operator: string;
  city: string;
  formatsVerified: string;
  status: "Available" | "Limited" | "Unavailable";
  lastChecked: string;
  sourceUrl: string;
}

export default function InventorySnapshot() {
  const [imageError, setImageError] = useState(false);

  const inventoryData: InventoryStatusRow[] = [
    {
      id: 1,
      operator: "Kempegowda Int'l T1/T2",
      city: "Bengaluru",
      formatsVerified: "Lightboxes, LED Video Walls, Luggage Trolleys",
      status: "Available",
      lastChecked: "Today, 10:30 AM",
      sourceUrl: "/locations/bengaluru",
    },
    {
      id: 2,
      operator: "CSMIA Terminal 2",
      city: "Mumbai",
      formatsVerified: "Digital Screens, Aerobridges, Carousels",
      status: "Available",
      lastChecked: "Today, 09:15 AM",
      sourceUrl: "/locations/mumbai",
    },
    {
      id: 3,
      operator: "Rajiv Gandhi Int'l",
      city: "Hyderabad",
      formatsVerified: "Luggage Trolleys, Exit Arches, Lightboxes",
      status: "Available",
      lastChecked: "Today, 11:00 AM",
      sourceUrl: "/locations/hyderabad",
    },
    {
      id: 4,
      operator: "Chennai Int'l Domestic/Int'l",
      city: "Chennai",
      formatsVerified: "Backlit Banners, Digital Screen Loops",
      status: "Limited",
      lastChecked: "Yesterday, 06:45 PM",
      sourceUrl: "/locations/chennai",
    },
    {
      id: 5,
      operator: "Netaji Subhash Chandra",
      city: "Kolkata",
      formatsVerified: "Aerobridges, Fabric Lightboxes",
      status: "Available",
      lastChecked: "Today, 08:20 AM",
      sourceUrl: "/locations/kolkata",
    },
    {
      id: 6,
      operator: "Cochin Int'l T3",
      city: "Kochi",
      formatsVerified: "Digital Screen Walls, Luggage Trolleys",
      status: "Available",
      lastChecked: "Today, 10:00 AM",
      sourceUrl: "/locations/kochi",
    },
  ];

  const primaryImage = "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=800&auto=format&fit=crop";
  const fallbackImage = "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=800&auto=format&fit=crop";

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
            AIRPORT SLOT STATUS
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight font-serif">
            Airport Slot Availability
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium">
            Real-time advertising slot status and availability across premium airports
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Dark Status Table */}
          <div className="lg:col-span-8 bg-[#0b1329] border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div className="overflow-x-auto scrollbar-none">
              <table className="min-w-full divide-y divide-slate-800/80">
                <thead>
                  <tr>
                    <th scope="col" className="text-xs font-black tracking-wider uppercase text-slate-500 py-3.5 text-left select-none">
                      Airport Hub / Terminal
                    </th>
                    <th scope="col" className="text-xs font-black tracking-wider uppercase text-slate-500 py-3.5 text-left select-none">
                      Formats Verified
                    </th>
                    <th scope="col" className="text-xs font-black tracking-wider uppercase text-slate-500 py-3.5 text-left select-none">
                      Status
                    </th>
                    <th scope="col" className="text-xs font-black tracking-wider uppercase text-slate-500 py-3.5 text-left select-none">
                      Last Checked
                    </th>
                    <th scope="col" className="text-xs font-black tracking-wider uppercase text-slate-500 py-3.5 text-left select-none">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {inventoryData.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-800/20 transition-colors">
                      <td className="py-4 text-sm whitespace-nowrap text-left">
                        <span className="font-extrabold text-white">
                          {row.operator}
                        </span>
                        {row.city && (
                          <span className="font-semibold text-slate-400 ml-1.5">
                            {row.city}
                          </span>
                        )}
                      </td>
                      <td className="py-4 text-sm text-slate-300 font-semibold text-left">
                        {row.formatsVerified}
                      </td>
                      <td className="py-4 text-sm whitespace-nowrap text-left font-bold">
                        {row.status === "Available" ? (
                          <span className="text-emerald-400">Available</span>
                        ) : row.status === "Limited" ? (
                          <span className="text-amber-500">Limited</span>
                        ) : (
                          <span className="text-rose-500">Unavailable</span>
                        )}
                      </td>
                      <td className="py-4 text-sm text-slate-400 font-semibold text-left whitespace-nowrap">
                        {row.lastChecked}
                      </td>
                      <td className="py-4 text-sm whitespace-nowrap text-left font-extrabold">
                        <Link
                          href={row.sourceUrl}
                          className="text-orange-400 hover:text-orange-300 underline underline-offset-4 decoration-1 decoration-orange-400/40 hover:decoration-orange-300 transition-colors"
                        >
                          Airport Page
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Sync Alert Footer */}
            <div className="text-[11px] sm:text-xs font-semibold text-slate-500 text-center mt-6 pt-4 border-t border-slate-800/30 select-none">
              Inventory updates multiple times a day. Last system sync: Today, 11:15 AM
            </div>
          </div>

          {/* Right Column: CTA visual Card */}
          <div className="lg:col-span-4 relative overflow-hidden rounded-3xl group flex flex-col justify-end p-6 md:p-8 bg-[#0b1329] border border-slate-800 shadow-xl min-h-[380px]">
            {/* Background Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageError ? fallbackImage : primaryImage}
              alt="Premium Airport terminal interior advertisement"
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-[1.03] brightness-[0.55]"
              onError={() => setImageError(true)}
            />
            {/* Gradient Mask Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-[#0b1329]/80 to-transparent z-10"></div>

            {/* Card text copy & button */}
            <div className="relative z-20 flex flex-col text-left">
              <h3 className="text-2xl font-black text-white leading-tight">
                Live bookings. Concession clearances guaranteed.
              </h3>
              <p className="mt-3 text-sm font-medium text-slate-300 leading-relaxed">
                We coordinate directly with airport authorities and concessionaires to secure prime placements and ensure 100% compliant execution.
              </p>
              
              <div className="mt-6">
                <Link
                  href="/locations"
                  className="w-full text-center inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 cursor-pointer"
                >
                  View All Airports
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
