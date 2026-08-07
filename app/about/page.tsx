"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  FaChevronRight, 
  FaBuilding, 
  FaLocationDot, 
  FaBullhorn, 
  FaUsers,
  FaCircleCheck, 
  FaMapLocation, 
  FaArrowTrendUp, 
  FaHandshake,
  FaQuoteLeft
} from "react-icons/fa6";

interface StatCard {
  id: number;
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface ValueCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AboutPage() {
  const [heroImageError, setHeroImageError] = useState(false);
  const [whoImageError, setWhoImageError] = useState(false);
  const [mvImageError, setMvImageError] = useState(false);

  const stats: StatCard[] = [
    {
      id: 1,
      icon: <FaBuilding className="h-7 w-7 text-orange-500" />,
      value: "12+",
      label: "Premium Terminals",
    },
    {
      id: 2,
      icon: <FaLocationDot className="h-7 w-7 text-orange-500" />,
      value: "6+",
      label: "Major Hub Cities",
    },
    {
      id: 3,
      icon: <FaBullhorn className="h-7 w-7 text-orange-500" />,
      value: "100M+",
      label: "Monthly Impressions",
    },
    {
      id: 4,
      icon: <FaUsers className="h-7 w-7 text-orange-500" />,
      value: "98%",
      label: "Client Retention",
    },
  ];

  const values: ValueCard[] = [
    {
      id: 1,
      icon: <FaCircleCheck className="h-6 w-6 text-orange-500" />,
      title: "Quality",
      description: "Premium materials & high-quality printing",
    },
    {
      id: 2,
      icon: <FaMapLocation className="h-6 w-6 text-orange-500" />,
      title: "Coverage",
      description: "Extensive network across major cities",
    },
    {
      id: 3,
      icon: <FaArrowTrendUp className="h-6 w-6 text-orange-500" />,
      title: "Impact",
      description: "Maximum visibility for stronger brand recall",
    },
    {
      id: 4,
      icon: <FaHandshake className="h-6 w-6 text-orange-500" />,
      title: "Commitment",
      description: "Dedicated support from concept to campaign",
    },
  ];

  const heroImageLocal = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2069&auto=format&fit=crop";
  const heroImageFallback = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2069&auto=format&fit=crop";

  const whoImageLocal = "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?q=80&w=600&auto=format&fit=crop";
  const whoImageFallback = "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?q=80&w=600&auto=format&fit=crop";

  const mvImageLocal = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop";
  const mvImageFallback = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      
      {/* Header */}
      <Navbar />

      <main className="flex-1 pb-16">
        
        {/* About Page Hero Banner */}
        <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden bg-gray-950 flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImageError ? heroImageFallback : heroImageLocal}
              alt="About Us Banner Airport"
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
                About Us
              </span>
            </nav>
          </div>

          {/* Hero Slogan */}
          <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 flex flex-col justify-center">
            <div className="max-w-2xl text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">
                ABOUT US
              </span>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl uppercase leading-none font-sans select-none">
                <span className="block drop-shadow-md">CONNECTING BRANDS</span>
                <span className="block text-orange-500 drop-shadow-md mt-1 font-black">
                  ENGAGING COMMUNITIES
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-sm font-semibold text-gray-300 leading-relaxed drop-shadow-sm select-none">
                We specialize in high-impact transit campaign setups and brand activations inside premium airport terminals across India.
              </p>
            </div>
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl h-4"></div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              
              {/* Left Column: Residential event image */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={whoImageError ? whoImageFallback : whoImageLocal}
                    alt="Who We Are Airport Advertising"
                    className="h-full w-full object-cover max-h-[460px] rounded-3xl"
                    onError={() => setWhoImageError(true)}
                  />
                </div>
              </div>

              {/* Right Column: Profile Details */}
              <div className="lg:col-span-6 text-left">
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">
                  WHO WE ARE
                </span>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
                  India's Leading Airport Advertising Partner
                </h2>
                <p className="mt-6 text-sm text-gray-500 font-semibold leading-relaxed">
                  IM Solutions specializes in Airport Advertising and Premium Transit Media activations across India. With high-definition fabric lightboxes, dynamic digital video walls, aerobridge wraps, and luggage trolley panels, we help brands capture massive passenger impressions, build deep authority, and drive high-recall conversions in premium airport environments.
                </p>
                <div className="mt-8">
                  <Link
                    href="#stats-section"
                    className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3 text-xs font-bold text-white shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 1. Stats Section (White Cards Grid) */}
        <section id="stats-section" className="scroll-mt-24 py-16 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50/50 shadow-inner transition-transform hover:scale-105 mb-4">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black tracking-tight text-gray-900 leading-none">
                    {item.value}
                  </span>
                  <span className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Our Values Section */}
        <section className="py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Values Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
                OUR VALUES
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
                Built on Trust. Driven by Excellence.
              </h2>
              <p className="mt-4 text-xs font-semibold text-gray-500 leading-relaxed">
                We believe in transparency, quality and results. Our mission is to deliver exceptional branding solutions that help businesses grow across India.
              </p>
            </div>

            {/* Values Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((val) => (
                <div
                  key={val.id}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {val.icon}
                  </div>
                  <h3 className="text-base font-black text-gray-900 leading-snug">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-xs font-semibold text-gray-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 3. Mission & Vision Section (Navy Card Layout) */}
        <section className="py-16 md:py-20 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-[#041026] text-white shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                
                {/* Left Side: Apartment Image */}
                <div className="lg:col-span-5 h-[320px] lg:h-full min-h-[300px] overflow-hidden bg-gray-900 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mvImageError ? mvImageFallback : mvImageLocal}
                    alt="Mission Vision Airport"
                    className="h-full w-full object-cover brightness-[0.70] absolute inset-0"
                    onError={() => setMvImageError(true)}
                  />
                </div>

                {/* Right Side: Mission & Vision Content */}
                <div className="lg:col-span-7 p-8 sm:p-12 text-left space-y-8">
                  
                  {/* Mission */}
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">
                      OUR MISSION
                    </span>
                    <p className="mt-3 text-sm font-semibold text-slate-300 leading-relaxed">
                      To be India's most trusted airport advertising and transit media partner by delivering premium, compliant, and highly engaging terminal campaign setups.
                    </p>
                  </div>

                  {/* Vision */}
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">
                      OUR VISION
                    </span>
                    <p className="mt-3 text-sm font-semibold text-slate-300 leading-relaxed">
                      To create meaningful connections between leading brands and affluent travelers across major aviation hubs in India.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 4. Slogan Quote Banner Section */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gray-50/50 border border-gray-100 p-8 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
              <FaQuoteLeft className="h-6 w-6 text-orange-500 shrink-0 self-center sm:self-start mt-1" />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                  We don't just place banners, we create interactive experiences that build trust and drive conversions.
                </p>
                <span className="mt-2 text-xs font-bold text-gray-500">
                  <span className="text-orange-500">—</span> IM Solutions Team
                </span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
