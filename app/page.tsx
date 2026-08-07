import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutCompany from "@/components/AboutCompany";
import WhatIsAirportAdvertising from "@/components/WhatIsAirportAdvertising";
import FormatOverview from "@/components/FormatOverview";
import FindAdvertising from "@/components/FindAdvertising";
import InventorySnapshot from "@/components/InventorySnapshot";
import WhyBrandsChoose from "@/components/WhyBrandsChoose";
import CostOverview from "@/components/CostOverview";
import RoutePlanning from "@/components/RoutePlanning";
import WhoShouldUse from "@/components/WhoShouldUse";
import Services from "@/components/Services";
import OurProcess from "@/components/OurProcess";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import WhyAirportAdvertising from "@/components/WhyAirportAdvertising";
import MediaComparison from "@/components/MediaComparison";
import OurWork from "@/components/OurWork";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import NationalFAQs from "@/components/NationalFAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-1">

        {/* Hero Section */}
        <Hero />

        {/* What Is Airport Advertising Intro */}
        <WhatIsAirportAdvertising />

        {/* Bus Format Overview */}
        <FormatOverview />

        {/* Find Bus Advertising Section */}
        <FindAdvertising />

        {/* Current Inventory Snapshot Section */}
        <InventorySnapshot />

        {/* Why Brands Choose Bus Advertising */}
        <WhyBrandsChoose />

        {/* Cost Overview Section */}
        <CostOverview />

        {/* How Route Planning Works */}
        <RoutePlanning />

        {/* Who Should Use Bus Advertising */}
        <WhoShouldUse />

        {/* Services Showcase Section 
        <Services />*/}

        {/* Campaign Process Section */}
        <OurProcess />

        {/* Featured Case Studies */}
        <FeaturedCaseStudies />

        {/* Why Airport Advertising? */}
        <WhyAirportAdvertising />

        {/* Bus Advertising Compared with Other OOH Media */}
        <MediaComparison />

        {/* Recent Work Section 
        <OurWork />*/}

        {/* Testimonials Section 
        <Testimonials />*/}

        {/* Latest Blog Articles Section */}
        <Blog />

        {/* National FAQs Section */}
        <NationalFAQs />

      </main>

      {/* Comprehensive Footer Section (includes Contact Form, Socials & Copyright) */}
      <Footer />

    </div>
  );
}
