"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  FaChevronRight, 
  FaBuilding, 
  FaUsers, 
  FaMapLocation, 
  FaMapPin, 
  FaPhone, 
  FaEnvelope, 
  FaClock 
} from "react-icons/fa6";

interface CityItem {
  id: string;
  name: string;
  description: string;
  activeBuses: string; // societies
  impressions: string;
  routes: string;
  image: string;
}

export default function LocationsPage() {
  const [heroImageError, setHeroImageError] = useState(false);
  const [officeImageError, setOfficeImageError] = useState(false);
  const [mapImageError, setMapImageError] = useState(false);

  const [plannerForm, setPlannerForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handlePlannerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPlannerForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Campaign plan request sent! \nDetails: ${JSON.stringify(plannerForm, null, 2)}`);
    setPlannerForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    });
  };

  const heroImageLocal = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2069&auto=format&fit=crop";
  const heroImageFallback = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2069&auto=format&fit=crop";

  const officeImageLocal = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop";
  const officeImageFallback = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop";

  const mapImageLocal = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop";
  const mapImageFallback = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"; 

  const cities: CityItem[] = [
    {
      id: "bengaluru",
      name: "Bengaluru",
      description: "Reach affluent business executives, tech leaders, and premium flyers at Kempegowda International Airport (KIA).",
      activeBuses: "150+ Displays",
      impressions: "6.5M+ Passengers",
      routes: "T1 departures, T2 check-in halls, baggage reclaim, premium lounges",
      image: "/city/Bangalore/cover.webp",
    },
    {
      id: "mumbai",
      name: "Mumbai",
      description: "Target high-net-worth corporate leaders, Bollywood celebrities, and national travelers at CSMIA Terminal 2.",
      activeBuses: "220+ Displays",
      impressions: "8M+ Passengers",
      routes: "T2 Departures lobby, arrivals exit corridor, boarding gate walls",
      image: "/city/Mumbai/cover.webp",
    },
    {
      id: "hyderabad",
      name: "Hyderabad",
      description: "Capture tech executives, global entrepreneurs, and pharma leaders traveling through RGIA.",
      activeBuses: "120+ Displays",
      impressions: "4.5M+ Passengers",
      routes: "Departures check-in hall, security hold area, baggage carousel walks",
      image: "/city/Hydrebad/cover.webp",
    },
    {
      id: "chennai",
      name: "Chennai",
      description: "Connect with senior corporate executives, manufacturing leaders, and international flyers at Chennai Airport.",
      activeBuses: "100+ Displays",
      impressions: "4M+ Passengers",
      routes: "Domestic check-in lobby, international departure gates, baggage claim walls",
      image: "/city/chenai/cover.webp",
    },
    {
      id: "kolkata",
      name: "Kolkata",
      description: "Engage cultural travelers, retail shoppers, and business professionals at Netaji Subhash Chandra Bose Airport.",
      activeBuses: "80+ Displays",
      impressions: "3M+ Passengers",
      routes: "Departures halls, central transit lounge, arrivals corridors",
      image: "/city/Kolkota/cover.webp",
    },
    {
      id: "kochi",
      name: "Kochi",
      description: "Reach premium NRI families, leisure tourists, and international flyers at Cochin International Airport (CIAL).",
      activeBuses: "90+ Displays",
      impressions: "2.5M+ Passengers",
      routes: "T3 international departures, arrivals duty-free lobby, baggage carousel area",
      image: "/city/kochi/cover.webp",
    },
  ];

  const majorCities = [
    "Mumbai",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Kochi",
    "And More...",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      
      {/* Header */}
      <Navbar />

      <main className="flex-1">
        
        {/* Locations Page Hero Banner */}
        <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden bg-gray-950 flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImageError ? heroImageFallback : heroImageLocal}
              alt="Our Presence Banner Bus"
              className="h-full w-full object-cover brightness-[0.40]"
              onError={() => setHeroImageError(true)}
            />
          </div>

          {/* Breadcrumbs Navigation */}
          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <nav className="flex items-center gap-2 text-xs font-bold text-gray-300 tracking-wider uppercase select-none">
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
              <FaChevronRight className="h-2.5 w-2.5 text-gray-500" />
              <span className="text-orange-500">
                Locations
              </span>
            </nav>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 flex flex-col justify-center">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-2">
                <FaMapPin className="h-4 w-4 text-orange-500" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">
                  OUR PRESENCE
                </span>
              </div>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl uppercase leading-none font-sans select-none">
                <span className="block drop-shadow-md">OUR PRESENCE</span>
                <span className="block text-orange-500 drop-shadow-md mt-1 font-black">
                  YOUR REACH
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-sm font-semibold text-gray-300 leading-relaxed drop-shadow-sm select-none">
                Strategically located to serve brands across India with seamless execution and on-ground support.
              </p>
            </div>
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl h-4"></div>
        </section>

        {/* Head Office Section */}
        <section className="py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              
              {/* Left Column: Office Details */}
              <div className="lg:col-span-5 text-left">
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">
                  OUR OFFICE
                </span>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
                  Head Office
                </h2>
                
                <p className="mt-4 text-sm font-bold text-gray-500 leading-relaxed">
                  123, Advertising House, Bandra East, Mumbai - 400051, India
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
                    <FaPhone className="h-4 w-4 text-orange-500" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
                    <FaEnvelope className="h-4 w-4 text-orange-500" />
                    <span>info@airportadvertising.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
                    <FaClock className="h-4 w-4 text-orange-500" />
                    <span>Mon - Sat: 10.00 AM - 07:00 PM</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="#network-section"
                    className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition-colors"
                  >
                    EXPLORE OUR NETWORK
                  </Link>
                </div>
              </div>

              {/* Right Column: Office Image */}
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={officeImageError ? officeImageFallback : officeImageLocal}
                    alt="Bus Branding Head Office Conference Room"
                    className="h-full w-full object-cover max-h-[360px] rounded-3xl"
                    onError={() => setOfficeImageError(true)}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Geographical Coverage (Cities Grid) */}
        <section id="network-section" className="scroll-mt-24 py-16 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
                OUR NETWORK
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
                Geographical Coverage
              </h2>
            </div>

            <div className="space-y-16">
              {cities.map((city) => (
                <div
                  key={city.id}
                  id={city.id}
                  className="scroll-mt-24 rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
                >
                  
                  <div className="lg:col-span-5 h-[280px] overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={city.image}
                      alt={`${city.name} transit area`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-102"
                    />
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between text-left h-full">
                    <div>
                      <h2 className="text-2xl font-black text-gray-900 font-sans tracking-tight">
                        {city.name} Advertising
                      </h2>
                      
                      <p className="mt-3 text-sm text-gray-500 leading-relaxed font-semibold">
                        {city.description}
                      </p>

                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 border-y border-gray-100 py-6">
                        
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                            <FaBuilding className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Displays</span>
                            <span className="text-xs font-black text-gray-900 leading-none mt-0.5">{city.activeBuses.split(' ')[0]}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                            <FaUsers className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Passengers</span>
                            <span className="text-xs font-black text-gray-900 leading-none mt-0.5">{city.impressions.split(' ')[0]}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                            <FaMapLocation className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Key Zones</span>
                            <span className="text-xs font-black text-gray-900 leading-none mt-0.5">All Formats</span>
                          </div>
                        </div>

                      </div>

                      <p className="mt-4 text-xs font-bold text-gray-500 leading-relaxed">
                        <span className="text-orange-500">Key Localities:</span> {city.routes}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href={`/locations/${city.id}`}
                        className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition-colors"
                      >
                        EXPLORE {city.name.toUpperCase()}
                      </Link>
                      <Link
                        href="#planner-section"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 px-6 py-2.5 text-xs font-bold text-gray-700 shadow-sm transition-colors"
                      >
                        GET A QUOTE
                      </Link>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1. Our Service Areas Section (India Map and Cities List) */}
        <section className="py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
                OUR SERVICE AREAS
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
                Serving Major Cities Across India
              </h2>
              <p className="mt-4 text-xs font-semibold text-gray-500 leading-relaxed">
                Our strong network and local support ensure smooth operations and maximum visibility in every corner of the country.
              </p>
            </div>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              
              {/* Left Column: India Map Infographic */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="max-w-[480px] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mapImageError ? mapImageFallback : mapImageLocal}
                    alt="Map of India showing service areas"
                    className="w-full h-auto object-contain max-h-[420px]"
                    onError={() => setMapImageError(true)}
                  />
                </div>
              </div>

              {/* Right Column: Major Cities List */}
              <div className="lg:col-span-5 text-left pl-0 lg:pl-10">
                <h3 className="text-lg font-black text-gray-900 font-sans tracking-tight mb-6">
                  Major Cities
                </h3>

                <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
                  {majorCities.map((city, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-orange-500 shrink-0"></span>
                      <span className="text-sm font-bold text-gray-700 select-none">
                        {city}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* 2. Campaign Planner Form Section (Styled white input form block) */}
        <section id="planner-section" className="scroll-mt-24 py-16 md:py-20 bg-gray-50/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-left mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">
                GET IN TOUCH
              </span>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl leading-tight font-sans">
                Let's Plan Your Next Campaign
              </h2>
            </div>

            {/* White Cards Form Container */}
            <form onSubmit={handlePlannerSubmit} className="space-y-4">
              
              {/* Row 1: Name, Email, Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <input
                  type="text"
                  name="name"
                  value={plannerForm.name}
                  onChange={handlePlannerChange}
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-xs text-gray-900 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={plannerForm.email}
                  onChange={handlePlannerChange}
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-xs text-gray-900 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  value={plannerForm.phone}
                  onChange={handlePlannerChange}
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-xs text-gray-900 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Row 2: City */}
              <input
                type="text"
                name="city"
                value={plannerForm.city}
                onChange={handlePlannerChange}
                placeholder="City"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-xs text-gray-900 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none transition-colors"
              />

              {/* Row 3: Message Textarea */}
              <textarea
                name="message"
                value={plannerForm.message}
                onChange={handlePlannerChange}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-xs text-gray-900 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none transition-colors resize-none"
              />

              {/* Row 4: Submit Button */}
              <div className="pt-2 text-left">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3 text-xs font-bold text-white shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  SEND MESSAGE
                </button>
              </div>

            </form>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
