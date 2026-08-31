import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutCompany from "@/components/AboutCompany";
import FormatOverview from "@/components/FormatOverview";
import WhyAirportAdvertising from "@/components/WhyAirportAdvertising";
import NationalFAQs from "@/components/NationalFAQs";
import Footer from "@/components/Footer";
import { getCityData, cityDatabase } from "../cityData";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityInfo = getCityData(city);
  return {
    title: `Airport Advertising in ${cityInfo.name} | Premium Transit Branding | IM Solutions`,
    description: `Plan, price and execute premium transit campaigns and airport advertising in ${cityInfo.name} with high-impact media networks at ${cityInfo.transportAuthority}. View rates, formats, and traffic details.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(cityDatabase).map((cityKey) => ({
    city: cityKey,
  }));
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const cityInfo = getCityData(city);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-1">
        
        {/* Dynamic Hero Section */}
        <Hero 
          cityName={cityInfo.name} 
          image={cityInfo.heroImage}
        />

        {/* Dynamic About Section */}
        <AboutCompany 
          cityName={cityInfo.name} 
          title={cityInfo.aboutTitle}
          description={cityInfo.aboutDescription}
          image={cityInfo.aboutImage}
        />

        {/* Dynamic RWA Format Overview */}
        <FormatOverview 
          cityName={cityInfo.name}
          cityId={cityInfo.id}
        />

        {/* Dynamic Why Airport Advertising Section */}
        <WhyAirportAdvertising 
          cityName={cityInfo.name}
        />

        {/* Dynamic FAQs Section */}
        <NationalFAQs 
          cityName={cityInfo.name}
        />

      </main>

      {/* Footer Section */}
      <Footer />

    </div>
  );
}
