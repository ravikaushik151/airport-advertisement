export interface CityInfo {
  id: string;
  name: string;
  transportAuthority: string;
  activeBuses: string;
  impressions: string;
  routes: string;
  heroImage: string;
  aboutImage: string;
  aboutTitle: string;
  aboutDescription: string;
}

export const cityDatabase: Record<string, CityInfo> = {
  bengaluru: {
    id: "bengaluru",
    name: "Bengaluru",
    transportAuthority: "Kempegowda Int'l Airport (KIA) Authority",
    activeBuses: "150+ Media Displays",
    impressions: "6.5M+ Monthly Passengers",
    routes: "T1 departures lobby, T2 arrivals hall, baggage reclaim carousel, premium lounges, boarding corridor",
    heroImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop",
    aboutTitle: "Bengaluru's Premier Airport Advertising Partner",
    aboutDescription: "We specialize in premium advertising inside Kempegowda International Airport (KIA), helping brands connect directly with affluent business and leisure travelers through high-impact fabric lightboxes, digital LED screens, and baggage carousel wraps.",
  },
  mumbai: {
    id: "mumbai",
    name: "Mumbai",
    transportAuthority: "Chhatrapati Shivaji Maharaj Int'l (CSMIA) Authority",
    activeBuses: "220+ Media Displays",
    impressions: "8M+ Monthly Passengers",
    routes: "T2 departures VIP zone, domestic boarding gates, arrivals corridor, baggage claim lightboxes",
    heroImage: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=2000&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop",
    aboutTitle: "Mumbai's Premium Airport Branding Specialist",
    aboutDescription: "Maximize high-dwell brand impressions at CSMIA Terminal 2. We coordinate exclusive lightbox placements, digital video walls, and luggage trolley sponsorships to reach India's top business leaders and frequent flyers.",
  },
  hyderabad: {
    id: "hyderabad",
    name: "Hyderabad",
    transportAuthority: "Rajiv Gandhi Int'l Airport (RGIA) Authority",
    activeBuses: "120+ Media Displays",
    impressions: "4.5M+ Monthly Passengers",
    routes: "Departures check-in hall, security hold area, aerobridge walks, arrivals exit columns",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?q=80&w=2000&auto=format&fit=crop",
    aboutTitle: "Hyderabad's Leading Airport Campaign Desk",
    aboutDescription: "Connect directly with corporate leaders and tech professionals at Hyderabad RGIA. Our team manages end-to-end campaigns, from slot approvals to high-definition backlit fabric mounting.",
  },
  chennai: {
    id: "chennai",
    name: "Chennai",
    transportAuthority: "Chennai International Airport Authority",
    activeBuses: "100+ Media Displays",
    impressions: "4M+ Monthly Passengers",
    routes: "Domestic check-in lobby, international departures gates, baggage carousel walls, arrivals exit",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop",
    aboutTitle: "Chennai's Strategic Airport Media Partner",
    aboutDescription: "High-impact transit media campaigns targeting South India's industrial and corporate hub. We secure prime digital screens and static lightbox spots at Chennai International Airport.",
  },
  kolkata: {
    id: "kolkata",
    name: "Kolkata",
    transportAuthority: "Netaji Subhash Chandra Bose Int'l Airport Authority",
    activeBuses: "80+ Media Displays",
    impressions: "3M+ Monthly Passengers",
    routes: "Departures hall, arrivals corridor, baggage claim area, aerobridge entrance gates",
    heroImage: "https://images.unsplash.com/photo-1542296332-2e4473fac56f?q=80&w=2000&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop",
    aboutTitle: "Kolkata's Airport Advertising Gateway",
    aboutDescription: "Engage premium cultural and corporate flyers at East India's primary aviation gateway. We manage slot licensing, digital display loops, and high-fidelity poster installations.",
  },
  kochi: {
    id: "kochi",
    name: "Kochi",
    transportAuthority: "Cochin International Airport (CIAL) Authority",
    activeBuses: "90+ Media Displays",
    impressions: "2.5M+ Monthly Passengers",
    routes: "CIAL Terminal 3 departures check-in, international arrivals, duty-free exit area, passenger lounges",
    heroImage: "https://images.unsplash.com/photo-1483450388369-9ed95738483c?q=80&w=2000&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop",
    aboutTitle: "Kochi's Premium Airport Advertising Partner",
    aboutDescription: "Target high-spending NRI families and domestic travelers at Kochi International Airport (CIAL). We offer customized media layouts, digital LED loops, and luggage trolley panel branding.",
  },
};

export function getCityData(cityId: string): CityInfo {
  let normalizedKey = cityId.toLowerCase();
  
  if (normalizedKey === "bangalore") {
    normalizedKey = "bengaluru";
  }

  if (cityDatabase[normalizedKey]) {
    return cityDatabase[normalizedKey];
  }

  // Capitalize name for dynamic fallback
  const capitalizedName = cityId.charAt(0).toUpperCase() + cityId.slice(1);
  
  return {
    id: normalizedKey,
    name: capitalizedName,
    transportAuthority: "Airport Concessionaire Network",
    activeBuses: "80+ Media Spots",
    impressions: "3M+ Monthly Passengers",
    routes: `Departures, arrivals, and check-in lobby zones in ${capitalizedName} Airport`,
    heroImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop",
    aboutTitle: `${capitalizedName}'s Premium Airport Media Partner`,
    aboutDescription: `We provide premium airport advertising BTL setups and high-dwell campaign displays in ${capitalizedName}. Launch interactive digital campaigns, brand check-in gates, and target frequent travelers.`,
  };
}
