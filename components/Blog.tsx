"use client";

import React, { useState } from "react";
import Link from "next/link";

interface BlogArticle {
  id: number;
  tag: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  localImage: string;
  fallbackImage: string;
  href: string;
}

export default function Blog() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const articles: BlogArticle[] = [
    {
      id: 1,
      tag: "TRANSIT OOH",
      date: "20 May, 2025",
      readTime: "4 min read",
      title: "Why Airport Advertising is the Ultimate Premium Transit Channel",
      excerpt: "Explore high-prestige demographics, captive dwell times, and high brand recall ratios that put airport terminal advertising at the top of transit media.",
      localImage: "/Insights & perspectives/why airport.webp",
      fallbackImage: "/Insights & perspectives/why airport.webp",
      href: "/blog/why-airport-advertising",
    },
    {
      id: 2,
      tag: "MEDIA METRICS",
      date: "15 May, 2025",
      readTime: "6 min read",
      title: "How to Optimize Media Campaigns at Major Aviation Hubs",
      excerpt: "From security queue dwell times and terminal regulations to choosing between domestic and international wings, here is your optimization guide.",
      localImage: "/Insights & perspectives/How to optimise.webp",
      fallbackImage: "/Insights & perspectives/How to optimise.webp",
      href: "/blog/airport-campaign-guide",
    },
    {
      id: 3,
      tag: "CAMPAIGN FORMATS",
      date: "10 May, 2025",
      readTime: "5 min read",
      title: "Maximizing Brand Authority with High-Impact Aerobridge Wraps",
      excerpt: "Understand how exclusive terminal walkways, luggage trolleys, and backlit fabric displays capture traveler views and build unmatched brand prestige.",
      localImage: "/Insights & perspectives/maximize the brand.webp",
      fallbackImage: "/Insights & perspectives/maximize the brand.webp",
      href: "/blog/aerobridge-branding-benefits",
    },
  ];

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="blog" className="scroll-mt-20 py-24 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-orange-500"></div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 font-sans">
                FROM OUR BLOG
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-serif">
              Insights & perspectives.
            </h2>
          </div>
          <div className="lg:col-span-1">
            <p className="text-[14px] sm:text-base text-slate-500 font-medium leading-relaxed font-sans">
              Explore deep dives on airport terminal media layouts, passenger dwell time analytics, and high-impact digital out-of-home (DOOH) strategies.
            </p>
          </div>
        </div>

        {/* Premium Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => {
            const hasError = imageErrors[article.id];
            const imageUrl = hasError ? article.fallbackImage : article.localImage;

            return (
              <Link
                key={article.id}
                href={article.href}
                className="group relative flex flex-col justify-between bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-gray-250 transition-all duration-500 ease-in-out cursor-pointer min-h-[490px]"
              >
                
                {/* Visual Header with Category Pill */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">
                  {/* Category Pill Overlay */}
                  <span className="absolute top-4 left-4 bg-slate-950/70 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[9px] font-bold tracking-wider uppercase z-10 select-none">
                    {article.tag}
                  </span>
                  
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={() => handleImageError(article.id)}
                  />
                </div>

                {/* Body Details: Date line, Title, and Excerpt */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="flex-1">
                    {/* Date and Read Time metadata */}
                    <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-sans select-none">
                      {article.date} &bull; {article.readTime}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-orange-500 mt-2.5 font-serif tracking-tight leading-snug line-clamp-2 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="mt-3 text-xs sm:text-[13px] text-slate-500 leading-relaxed font-sans line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Footer arrow view logic */}
                  <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100">
                    <span className="text-[11px] font-bold text-slate-800 group-hover:text-orange-500 uppercase tracking-wider font-sans transition-colors duration-300 select-none">
                      Read full article
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 border border-slate-200 group-hover:bg-orange-500 group-hover:border-orange-500 text-slate-800 group-hover:text-white transition-all duration-300">
                      <span className="text-[10px] font-bold">↗</span>
                    </div>
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

        {/* View All Articles link at the bottom */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded bg-slate-950 hover:bg-slate-900 px-8 py-3.5 text-xs font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 font-sans"
          >
            VIEW ALL ARTICLES
          </Link>
        </div>

      </div>
    </section>
  );
}
