"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function NationalFAQs({
  cityName,
  faqs: customFaqs,
}: {
  cityName?: string;
  faqs?: FAQItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultFaqs: FAQItem[] = [
    {
      id: 1,
      question: cityName ? `What is Airport Advertising in ${cityName}?` : "What is Airport Advertising?",
      answer: cityName
        ? `Airport advertising in ${cityName} is a premium OOH (Out-Of-Home) marketing channel where brands leverage media touchpoints like digital LED walls, backlit lightboxes, aerobridge wraps, and luggage trolleys within the airport terminals to target affluent flyers and business travelers.`
        : "Airport advertising is a premium OOH (Out-Of-Home) marketing channel where brands leverage media touchpoints like digital LED walls, backlit lightboxes, aerobridge wraps, and luggage trolleys within airport terminals to target affluent flyers and business travelers.",
    },
    {
      id: 2,
      question: cityName ? `How much does Airport Advertising cost in ${cityName}?` : "How much does Airport Advertising cost?",
      answer: cityName
        ? `The cost in ${cityName} varies depending on the chosen terminal (Domestic vs. International), specific media formats (lightboxes, digital video walls, or trolley branding), campaign duration, and slot availability. Contact us for a customized proposal.`
        : "The cost varies depending on the airport selected, chosen terminal (Domestic vs. International), specific media formats (lightboxes, digital video walls, or trolley branding), and campaign duration. Contact us for a custom quote.",
    },
    {
      id: 3,
      question: cityName ? `Which terminal zones in ${cityName} can I target?` : "Which cities do you provide airport branding in?",
      answer: cityName
        ? `We cover all major passenger flows and zones inside ${cityName} Airport, including departures check-in lobby, security hold area, baggage carousel walks, aerobridges, and premium lounges. We align placements with your target demographics.`
        : "We provide premium airport advertising across major Indian metropolitan hubs including Bengaluru (KIA), Mumbai (CSMIA), Chennai, Hyderabad (RGIA), Kolkata, and Kochi.",
    },
    {
      id: 4,
      question: "How long does it take to secure slot approvals and launch?",
      answer: cityName
        ? `Typically, it takes about 10 to 15 working days to coordinate campaign schedules, finalize layout graphics, secure official NOC approvals from respective airport authorities, and complete night mounting.`
        : "Typically, it takes about 10 to 15 working days to coordinate campaign schedules, finalize design layouts, secure official NOC approvals from respective airport authorities, and complete night mounting.",
    },
    {
      id: 5,
      question: "Can we select specific terminals and halls before booking?",
      answer: "Yes. We share a pre-audited inventory of available airport slots, passenger traffic data, domestic/international splits, and size blueprints, allowing you to select and book specific terminals and halls before finalizing.",
    },
  ];

  const faqs = customFaqs || defaultFaqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
            FAQS
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight font-serif">
            {cityName ? `${cityName} FAQs` : "National FAQs"}
          </h2>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="border border-slate-100 bg-white rounded-2xl shadow-sm hover:shadow transition-all duration-300 overflow-hidden"
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4.5 text-left font-black text-slate-800 text-sm sm:text-base hover:text-orange-500 transition-colors select-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-slate-50 border border-slate-100 text-slate-500 group-hover:text-orange-500">
                    {isOpen ? (
                      <FaMinus className="h-3.5 w-3.5 text-orange-500" />
                    ) : (
                      <FaPlus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>

                {/* Accordion Body Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-slate-50/50" : "max-h-0 pointer-events-none"
                  } overflow-hidden`}
                >
                  <p className="px-6 py-5 text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
