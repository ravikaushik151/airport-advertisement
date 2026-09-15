export interface CityBadge {
  id: number;
  title: string;
  subtitle: string;
}

export interface CityFormatDetail {
  tagline: string;
  description: string;
  bestSuited: string;
}

export interface CityFAQ {
  id: number;
  question: string;
  answer: string;
}

export interface CityInfo {
  id: string;
  name: string;
  transportAuthority: string;
  activeBuses: string;
  impressions: string;
  routes: string;
  heroImage: string;
  heroTitle?: string;
  heroSubtitle?: string;
  aboutImage: string;
  aboutTitle: string;
  aboutDescription: string;
  features?: CityBadge[];
  touchpointTitle?: string;
  touchpointDescription?: string;
  whyTitle?: string;
  whyDescription?: string;
  formatDetails?: {
    lightbox?: CityFormatDetail;
    ledWall?: CityFormatDetail;
    trolley?: CityFormatDetail;
    aerobridge?: CityFormatDetail;
  };
  faqs?: CityFAQ[];
  formats?: {
    lightbox?: string;
    ledWall?: string;
    trolley?: string;
    aerobridge?: string;
  };
}

export const cityDatabase: Record<string, CityInfo> = {
  bengaluru: {
    id: "bengaluru",
    name: "Bengaluru",
    transportAuthority: "Kempegowda Int'l Airport (KIA) Authority",
    activeBuses: "150+ Media Displays",
    impressions: "6.5M+ Monthly Passengers",
    routes: "T1 departures lobby, T2 arrivals hall, baggage reclaim carousel, premium lounges, boarding corridor",
    heroImage: "/city/Bangalore/cover.webp",
    heroTitle: "Airport Branding in Bengaluru, Designed for Premium Attention.",
    heroSubtitle: "Reach affluent travellers, business leaders and high-value audiences through carefully selected airport media, immersive digital formats and strategically placed terminal branding built for visibility and recall.",
    aboutImage: "/city/Bangalore/2.webp",
    aboutTitle: "Bengaluru’s Partner for Premium Airport Brand Presence",
    aboutDescription: "We create high-impact advertising opportunities across Kempegowda International Airport, helping brands engage affluent business and leisure travellers through premium lightboxes, digital displays and strategically placed terminal media.",
    features: [
      { id: 1, title: "Local Reach", subtitle: "Airport Audience" },
      { id: 2, title: "Premium Quality", subtitle: "Elevated Presence" },
      { id: 3, title: "On-Time", subtitle: "Seamless Execution" },
      { id: 4, title: "Expert Team", subtitle: "Specialist Support" },
    ],
    touchpointTitle: "Choose the Right Touchpoint in Bengaluru.",
    touchpointDescription: "Each format is selected around passenger movement, dwell time and visibility potential — ensuring every placement delivers purposeful, premium brand exposure.",
    formatDetails: {
      lightbox: {
        tagline: "High Impact · Entry & Transit",
        description: "Large-format illuminated displays positioned across high-traffic airport zones, creating commanding visibility through check-in, security and concourse areas.",
        bestSuited: "Luxury, real estate, premium brands",
      },
      ledWall: {
        tagline: "Dynamic Expression · Immersive Impact",
        description: "High-definition digital canvases that combine motion, storytelling and scale across Bengaluru’s busiest terminal environments.",
        bestSuited: "Technology, launches, dynamic campaigns",
      },
      trolley: {
        tagline: "Mobile Visibility · Repeated Exposure",
        description: "Branded trolley panels move with passengers throughout the terminal, creating frequent visibility across multiple stages of the airport journey.",
        bestSuited: "Banking, telecom, consumer brands",
      },
      aerobridge: {
        tagline: "Exclusive Placement · Focused Attention",
        description: "Premium branding across aerobridge pathways, giving brands distinctive presence within one of the airport’s most exclusive passenger touchpoints.",
        bestSuited: "FinTech, luxury, premium services",
      },
    },
    whyTitle: "Specialist Expertise. Bengaluru Airport Campaigns.",
    whyDescription: "Our dedicated airport media team brings together audience intelligence, authority coordination, premium production, precision installation and post-campaign reporting - ensuring every campaign is executed with consistency, control and absolute attention to detail.",
    faqs: [
      {
        id: 1,
        question: "Can we target T1 and T2 separately?",
        answer: "Yes. Campaigns can be planned across T1, T2 Domestic and T2 International based on audience and objective.",
      },
      {
        id: 2,
        question: "Which advertising formats are available?",
        answer: "Options include digital screens, LED walls, lightboxes, trolley branding, aerobridges and other premium terminal media.",
      },
      {
        id: 3,
        question: "Can we target only domestic or international travellers?",
        answer: "Yes. Media networks can be selected specifically around domestic or international departure and arrival journeys.",
      },
      {
        id: 4,
        question: "How early should airport media be booked?",
        answer: "It depends on the format and availability. Digital inventory can have short lead times, while premium placements may require advance booking.",
      },
      {
        id: 5,
        question: "Can Bengaluru Airport campaigns run programmatically?",
        answer: "Yes. Selected digital inventory at Kempegowda International Airport is available through programmatic DOOH buying.",
      },
    ],
    formats: {
      lightbox: "/city/Bangalore/fabric lightbox.webp",
      ledWall: "/city/Bangalore/digital led wall.webp",
      trolley: "/city/Bangalore/Luggage Trolley Advertising.webp",
      aerobridge: "/city/Bangalore/Aerobridge Branding.webp",
    },
  },
  mumbai: {
    id: "mumbai",
    name: "Mumbai",
    transportAuthority: "Chhatrapati Shivaji Maharaj Int'l (CSMIA) Authority",
    activeBuses: "220+ Media Displays",
    impressions: "8M+ Monthly Passengers",
    routes: "T2 departures VIP zone, domestic boarding gates, arrivals corridor, baggage claim lightboxes",
    heroImage: "/city/Mumbai/cover.webp",
    heroTitle: "Airport Branding in Mumbai, Designed for High-Value Attention.",
    heroSubtitle: "Engage premium travellers, business leaders and affluent audiences across Mumbai’s airport environment through distinguished media placements, immersive digital formats and strategically planned terminal branding.",
    aboutImage: "/city/Mumbai/2.webp",
    aboutTitle: "Mumbai’s Partner for Premium Airport Brand Presence",
    aboutDescription: "We create high-impact advertising opportunities across CSMIA, helping brands engage affluent business and leisure travellers through premium lightboxes, digital video walls and strategically placed terminal media.",
    features: [
      { id: 1, title: "Local Reach", subtitle: "Airport Audience" },
      { id: 2, title: "Premium Quality", subtitle: "Elevated Presence" },
      { id: 3, title: "On-Time", subtitle: "Seamless Execution" },
      { id: 4, title: "Expert Team", subtitle: "Specialist Support" },
    ],
    touchpointTitle: "Choose the Right Touchpoint in Mumbai.",
    touchpointDescription: "Each format is selected around passenger flow, dwell time and visibility potential — ensuring every placement delivers premium, purposeful brand exposure.",
    formatDetails: {
      lightbox: {
        tagline: "High Impact · Entry & Transit",
        description: "Large-format illuminated displays placed across high-traffic airport zones, creating commanding visibility through check-in, security and concourse areas.",
        bestSuited: "Luxury, real estate, premium brands",
      },
      ledWall: {
        tagline: "Dynamic Expression · Immersive Impact",
        description: "High-definition digital canvases that combine motion, storytelling and scale across Mumbai’s busiest terminal environments.",
        bestSuited: "Technology, launches, dynamic campaigns",
      },
      trolley: {
        tagline: "Mobile Visibility · Repeated Exposure",
        description: "Branded trolley panels move with passengers across the terminal, creating frequent visibility throughout multiple stages of the airport journey.",
        bestSuited: "Banking, telecom, consumer brands",
      },
      aerobridge: {
        tagline: "Exclusive Placement · Focused Attention",
        description: "Premium branding across aerobridge pathways, giving brands a distinctive presence within one of the airport’s most exclusive passenger touchpoints.",
        bestSuited: "FinTech, luxury, premium services",
      },
    },
    whyTitle: "Specialist Expertise. Mumbai Airport Campaigns.",
    whyDescription: "Our dedicated airport media team brings together audience planning, authority coordination, premium production, precise installation and post-campaign reporting - ensuring every campaign is delivered with consistency, control and meticulous execution.",
    faqs: [
      {
        id: 1,
        question: "Can campaigns target only Terminal 1 or Terminal 2?",
        answer: "Yes. Media can be selected separately across T1 and T2 based on the desired passenger audience.",
      },
      {
        id: 2,
        question: "Can we advertise near baggage claim and arrival zones?",
        answer: "Yes. Mumbai Airport offers media across arrival corridors, baggage belts and other high-dwell passenger areas.",
      },
      {
        id: 3,
        question: "Are both static and digital formats available?",
        answer: "Yes. Options include digital screens, premium lightboxes, wall signage and other terminal media formats.",
      },
      {
        id: 4,
        question: "How quickly can a digital campaign go live?",
        answer: "Some digital formats list lead times of around 3 days, subject to inventory and creative approval.",
      },
      {
        id: 5,
        question: "Is proof of campaign execution provided?",
        answer: "Yes. Campaign execution can be documented with photographic proof at the start and end of the campaign.",
      },
    ],
    formats: {
      lightbox: "/city/Mumbai/fabric lightbox.webp",
      ledWall: "/city/Mumbai/digital led wall.webp",
      trolley: "/city/Mumbai/Luggage Trolley Advertising.webp",
      aerobridge: "/city/Mumbai/aero branding.webp",
    },
  },
  hyderabad: {
    id: "hyderabad",
    name: "Hyderabad",
    transportAuthority: "Rajiv Gandhi Int'l Airport (RGIA) Authority",
    activeBuses: "120+ Media Displays",
    impressions: "4.5M+ Monthly Passengers",
    routes: "Departures check-in hall, security hold area, aerobridge walks, arrivals exit columns",
    heroImage: "/city/Hydrebad/cover.webp",
    heroTitle: "Airport Branding in Hyderabad, Designed for Premium Influence.",
    heroSubtitle: "Engage affluent travellers, business leaders and high-value audiences through premium airport media, immersive digital formats and strategically positioned terminal branding built for visibility and recall.",
    aboutImage: "/city/Hydrebad/2.webp",
    aboutTitle: "Hyderabad’s Partner for Premium Airport Brand Presence",
    aboutDescription: "Connect directly with corporate leaders and tech professionals at Hyderabad RGIA. Our team manages end-to-end campaigns, from slot approvals to high-definition backlit fabric mounting.",
    features: [
      { id: 1, title: "Local Reach", subtitle: "Airport Audience" },
      { id: 2, title: "Premium Quality", subtitle: "Elevated Presence" },
      { id: 3, title: "On-Time", subtitle: "Seamless Execution" },
      { id: 4, title: "Expert Team", subtitle: "Specialist Support" },
    ],
    touchpointTitle: "Choose the Right Touchpoint in Hyderabad.",
    touchpointDescription: "Each format is selected around passenger flow, dwell time and visibility potential - ensuring every placement delivers premium, purposeful brand exposure.",
    formatDetails: {
      lightbox: {
        tagline: "High Impact · Entry & Transit",
        description: "Large-format illuminated displays positioned across key airport zones, delivering strong visibility through check-in, security and concourse areas.",
        bestSuited: "Luxury, real estate, premium brands",
      },
      ledWall: {
        tagline: "Dynamic Expression · Immersive Impact",
        description: "High-definition digital canvases that combine motion, storytelling and scale across Hyderabad’s busiest terminal environments.",
        bestSuited: "Technology, launches, dynamic campaigns",
      },
      trolley: {
        tagline: "Mobile Visibility · Repeated Exposure",
        description: "Branded trolley panels move with passengers through the terminal, creating repeated visibility across key stages of the airport journey.",
        bestSuited: "Banking, telecom, consumer brands",
      },
      aerobridge: {
        tagline: "Exclusive Placement · Focused Attention",
        description: "Premium branding across aerobridge pathways, giving brands a distinctive presence within one of the airport’s most exclusive touchpoints.",
        bestSuited: "FinTech, luxury, premium services",
      },
    },
    whyTitle: "Precision-Led Airport Campaigns. Built for Hyderabad.",
    whyDescription: "Our dedicated airport media team brings together audience planning, authority coordination, premium production, precision installation and post-campaign reporting - ensuring every campaign is delivered with consistency, control and meticulous execution.",
    faqs: [
      {
        id: 1,
        question: "Can campaigns target both domestic and international travellers?",
        answer: "Yes. RGIA serves both domestic and international passengers, and media can be planned around the relevant journey zones.",
      },
      {
        id: 2,
        question: "Can we advertise around baggage claim?",
        answer: "Yes. Digital baggage networks, belt branding and arrival-zone media are available for high-dwell visibility.",
      },
      {
        id: 3,
        question: "Are programmatic digital ads available at RGIA?",
        answer: "Yes. Selected digital inventory supports programmatic campaign options.",
      },
      {
        id: 4,
        question: "How long does approval and launch usually take?",
        answer: "It depends on the format, creative approval and production, while some digital inventory lists lead times of around 3 days.",
      },
      {
        id: 5,
        question: "Is campaign execution proof provided?",
        answer: "Yes. Campaigns can include photographic proof and execution reporting after installation.",
      },
    ],
    formats: {
      lightbox: "/city/Hydrebad/fabric lightbox.webp",
      ledWall: "/city/Hydrebad/digital led video.webp",
      trolley: "/city/Hydrebad/Luggage Trolley Advertising.webp",
      aerobridge: "/city/Hydrebad/aero bridge.webp",
    },
  },
  chennai: {
    id: "chennai",
    name: "Chennai",
    transportAuthority: "Chennai International Airport Authority",
    activeBuses: "100+ Media Displays",
    impressions: "4M+ Monthly Passengers",
    routes: "Domestic check-in lobby, international departures gates, baggage carousel walls, arrivals exit",
    heroImage: "/city/chenai/cover.webp",
    heroTitle: "Airport Branding in Chennai, Designed for Premium Visibility.",
    heroSubtitle: "Engage business travellers, affluent flyers and high-value audiences across Chennai Airport through premium media placements, immersive digital formats and strategically planned terminal branding.",
    aboutImage: "/city/chenai/2.webp",
    aboutTitle: "Chennai’s Partner for Premium Airport Brand Presence",
    aboutDescription: "We create high-impact airport campaigns at Chennai International Airport, helping brands reach business travellers, premium flyers and corporate audiences through strategic digital media, lightboxes and seamless campaign execution.",
    features: [
      { id: 1, title: "Local Reach", subtitle: "Airport Audience" },
      { id: 2, title: "Premium Quality", subtitle: "Elevated Presence" },
      { id: 3, title: "On-Time", subtitle: "Seamless Execution" },
      { id: 4, title: "Expert Team", subtitle: "Specialist Support" },
    ],
    touchpointTitle: "Choose the Right Touchpoint in Chennai.",
    touchpointDescription: "Each format is planned around Chennai Airport’s mix of corporate travel, international movement and high-dwell passenger zones — helping brands appear where attention naturally concentrates.",
    formatDetails: {
      lightbox: {
        tagline: "High Visibility · Premium Arrival",
        description: "Large illuminated displays positioned across prominent terminal zones, giving brands a strong presence among business travellers, families and international flyers.",
        bestSuited: "Automotive, real estate, luxury, jewellery",
      },
      ledWall: {
        tagline: "Dynamic Storytelling · High Recall",
        description: "Motion-led digital canvases built for launches and high-impact storytelling across busy departure, retail and passenger waiting environments.",
        bestSuited: "Technology, SaaS, automobiles, entertainment",
      },
      trolley: {
        tagline: "Passenger Movement · Continuous Exposure",
        description: "Branded trolley panels stay alongside travellers through arrival and baggage journeys, creating repeated visibility across extended dwell periods.",
        bestSuited: "Banking, healthcare, telecom, consumer brands",
      },
      aerobridge: {
        tagline: "Premium Access · Undivided Attention",
        description: "High-value branding along aerobridge pathways, placing brands directly within the boarding journey of domestic and international passengers.",
        bestSuited: "BFSI, premium mobility, hospitality, luxury brands",
      },
    },
    whyTitle: "Chennai Airport Media. Built Around Business Travel.",
    whyDescription: "Our Chennai airport media team combines passenger insight, media planning, authority coordination, production and installation - helping brands reach corporate travellers, international flyers and high-value audiences with seamless, accountable execution.",
    faqs: [
      {
        id: 1,
        question: "Can we target only international passengers at Chennai Airport?",
        answer: "Yes. Campaigns can be planned specifically around T2 and international passenger zones.",
      },
      {
        id: 2,
        question: "Can we choose between arrival and departure areas?",
        answer: "Yes. Media can be selected across arrivals, departures, security, gates and baggage zones.",
      },
      {
        id: 3,
        question: "How early should Chennai Airport media be booked?",
        answer: "Ideally 3–4 weeks in advance for approvals, production and scheduling.",
      },
      {
        id: 4,
        question: "What is the usual campaign duration?",
        answer: "Airport campaigns are commonly booked for at least one month, with longer runs improving recall.",
      },
      {
        id: 5,
        question: "Are approvals and installation handled?",
        answer: "Yes. Campaign execution can include creative compliance, production, installation and proof-of-execution reporting.",
      },
    ],
    formats: {
      lightbox: "/city/chenai/fabric lightbox.webp",
      ledWall: "/city/chenai/led light box.webp",
      trolley: "/city/chenai/Luggage Trolley Advertising.webp",
      aerobridge: "/city/chenai/aero bridge.webp",
    },
  },
  kolkata: {
    id: "kolkata",
    name: "Kolkata",
    transportAuthority: "Netaji Subhash Chandra Bose Int'l Airport Authority",
    activeBuses: "80+ Media Displays",
    impressions: "3M+ Monthly Passengers",
    routes: "Departures hall, arrivals corridor, baggage claim area, aerobridge entrance gates",
    heroImage: "/city/Kolkota/cover.webp",
    heroTitle: "Airport Branding in Kolkata, Positioned at Eastern India’s Gateway.",
    heroSubtitle: "Reach business travellers, affluent flyers and high-intent audiences at NSCBI Airport through premium terminal media, dynamic digital formats and strategically placed branding designed for strong visibility across one of eastern India’s key aviation hubs.",
    aboutImage: "/city/Kolkota/2.webp",
    aboutTitle: "Kolkata’s Gateway to High-Value Airport Audiences",
    aboutDescription: "Connect with business travellers, affluent families and regional flyers at NSCBI Airport through strategically placed digital media, premium display formats and carefully coordinated campaign execution across one of East India’s busiest aviation gateways.",
    features: [
      { id: 1, title: "Regional Reach", subtitle: "Eastern India Access" },
      { id: 2, title: "Premium Media", subtitle: "High-Value Visibility" },
      { id: 3, title: "On-Time Delivery", subtitle: "Smooth Execution" },
      { id: 4, title: "Expert Team", subtitle: "Airport Media Support" },
    ],
    touchpointTitle: "Choose the Right Touchpoint in Kolkata.",
    touchpointDescription: "Each format is planned around Kolkata Airport’s mix of regional connectivity, business travel and high-volume passenger movement - helping brands stay visible across the moments that matter most.",
    formatDetails: {
      lightbox: {
        tagline: "High Presence · Arrival & Departure",
        description: "Large-format illuminated displays placed across prominent terminal zones, giving brands strong visual presence among business travellers, families and frequent regional flyers.",
        bestSuited: "Real estate, jewellery, luxury, hospitality",
      },
      ledWall: {
        tagline: "Dynamic Impact · High Attention",
        description: "Motion-led digital canvases built for bold storytelling across busy check-in, departure and waiting environments where passenger dwell naturally increases.",
        bestSuited: "Technology, entertainment, travel, launches",
      },
      trolley: {
        tagline: "Moving Visibility · Repeated Recall",
        description: "Branded trolley panels accompany passengers through arrival and baggage journeys, creating repeated brand encounters across high-footfall terminal areas.",
        bestSuited: "Banking, telecom, FMCG, consumer services",
      },
      aerobridge: {
        tagline: "Premium Passage · Focused Exposure",
        description: "High-value branding along aerobridge pathways places brands within a quieter, more exclusive stage of the boarding and arrival experience.",
        bestSuited: "BFSI, luxury, hospitality, premium brands",
      },
    },
    whyTitle: "Eastern Gateway Expertise. Airport Campaigns in Kolkata.",
    whyDescription: "Our Kolkata airport media team combines regional audience insight, media coordination, premium production, installation and post-campaign reporting - helping brands execute high-impact campaigns across one of East India’s most important aviation gateways.",
    faqs: [
      {
        id: 1,
        question: "Can we target domestic and international passengers separately?",
        answer: "Yes. Campaigns can be planned around the relevant domestic or international passenger zones at Kolkata Airport.",
      },
      {
        id: 2,
        question: "Are trolley and tarmac bus ads available?",
        answer: "Yes. Kolkata Airport offers formats including luggage trolley advertising, tarmac buses, arrival/departure media and security-area placements, subject to availability.",
      },
      {
        id: 3,
        question: "Is there a minimum booking for trolley advertising?",
        answer: "Some current listings require a minimum of 100 luggage trolleys for a campaign.",
      },
      {
        id: 4,
        question: "How early should airport media be booked?",
        answer: "Around 3 weeks in advance is a useful planning window for many Kolkata Airport placements.",
      },
      {
        id: 5,
        question: "Is campaign execution proof provided?",
        answer: "Yes. Photographic proof can be provided after installation and again at campaign completion.",
      },
    ],
    formats: {
      lightbox: "/city/Kolkota/fabric lightbox.webp",
      ledWall: "/city/Kolkota/digital led video wall.webp",
      trolley: "/city/Kolkota/Luggage Trolley Advertising.webp",
      aerobridge: "/city/Kolkota/aero branding.webp",
    },
  },
  kochi: {
    id: "kochi",
    name: "Kochi",
    transportAuthority: "Cochin International Airport (CIAL) Authority",
    activeBuses: "90+ Media Displays",
    impressions: "2.5M+ Monthly Passengers",
    routes: "CIAL Terminal 3 departures check-in, international arrivals, duty-free exit area, passenger lounges",
    heroImage: "/city/kochi/cover.webp",
    heroTitle: "Airport Branding in Kochi, Built for Global Kerala.",
    heroSubtitle: "Reach international travellers, NRI audiences, business flyers and premium consumers at Cochin International Airport through high-impact terminal media, digital formats and strategically positioned branding designed for lasting visibility.",
    aboutImage: "/city/kochi/2.webp",
    aboutTitle: "Kochi’s Gateway to Premium Traveller Audiences",
    aboutDescription: "Connect with NRI families, international flyers and high-value domestic travellers at CIAL through strategically planned digital displays, premium terminal placements and luggage trolley branding built for sustained visibility.",
    features: [
      { id: 1, title: "Global Reach", subtitle: "NRI & Traveller Audience" },
      { id: 2, title: "Premium Media", subtitle: "High-Value Presence" },
      { id: 3, title: "On-Time Delivery", subtitle: "Seamless Execution" },
      { id: 4, title: "Expert Team", subtitle: "Airport Media Support" },
    ],
    touchpointTitle: "Choose the Right Touchpoint in Kochi.",
    touchpointDescription: "Each format is planned around Kochi Airport’s strong NRI traffic, international connectivity and family-led travel patterns - helping brands stay visible across high-value passenger moments.",
    formatDetails: {
      lightbox: {
        tagline: "Premium Presence · High-Dwell Zones",
        description: "Large illuminated displays positioned across prominent terminal areas, giving brands strong visibility among NRI families, business travellers and premium leisure flyers.",
        bestSuited: "Real estate, jewellery, healthcare, luxury",
      },
      ledWall: {
        tagline: "Dynamic Storytelling · High Attention",
        description: "Motion-led digital canvases built for launches and premium storytelling across busy departure, retail and waiting zones with sustained passenger dwell.",
        bestSuited: "Automotive, tourism, technology, retail",
      },
      trolley: {
        tagline: "Journey Visibility · Repeated Recall",
        description: "Branded trolley panels travel with arriving passengers, creating repeated exposure during baggage collection and onward movement through the terminal.",
        bestSuited: "Banking, remittance, telecom, consumer brands",
      },
      aerobridge: {
        tagline: "International Passage · Premium Attention",
        description: "High-value branding across aerobridge pathways places brands directly within the arrival and departure journey of international and premium domestic travellers.",
        bestSuited: "BFSI, hospitality, luxury, premium services",
      },
    },
    whyTitle: "Specialist Expertise. Kochi Airport Campaigns.",
    whyDescription: "Our dedicated airport media team brings together audience intelligence, authority coordination, premium production, precision installation and post-campaign reporting - ensuring every campaign is executed with consistency, control and absolute attention to detail.",
    faqs: [
      {
        id: 1,
        question: "Can we target NRI and international travellers specifically?",
        answer: "Yes. Terminal 3 offers strong access to international and NRI passenger audiences.",
      },
      {
        id: 2,
        question: "Can domestic and international terminals be planned separately?",
        answer: "Yes. T1 primarily serves domestic traffic, while T3 handles international operations.",
      },
      {
        id: 3,
        question: "Is luggage trolley advertising available?",
        answer: "Yes. CIAL lists trolley advertising across both domestic and international terminals.",
      },
      {
        id: 4,
        question: "Can brands advertise outside the terminal?",
        answer: "Yes. Advertising opportunities extend to airport roads, parking and city-side areas.",
      },
      {
        id: 5,
        question: "Are kiosks and promotional activations allowed?",
        answer: "Yes. CIAL offers kiosks, reception desks, standees and selected promotional activities inside the terminals.",
      },
    ],
    formats: {
      lightbox: "/city/kochi/fabric lightbox.webp",
      ledWall: "/city/kochi/digital led wall.webp",
      trolley: "/city/kochi/Luggage Trolley Advertising.webp",
      aerobridge: "/city/kochi/aero branding.webp",
    },
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
    heroImage: `/city/${capitalizedName}/cover.webp`,
    heroTitle: `Airport Branding in ${capitalizedName}, Designed for Premium Influence.`,
    heroSubtitle: `Reach affluent travellers, business leaders and high-value audiences through carefully selected airport media, immersive digital formats and strategically placed terminal branding in ${capitalizedName}.`,
    aboutImage: `/city/${capitalizedName}/2.webp`,
    aboutTitle: `${capitalizedName}'s Premium Airport Media Partner`,
    aboutDescription: `We provide premium airport advertising BTL setups and high-dwell campaign displays in ${capitalizedName}. Launch interactive digital campaigns, brand check-in gates, and target frequent travelers.`,
    features: [
      { id: 1, title: "Local Reach", subtitle: "Airport Audience" },
      { id: 2, title: "Premium Quality", subtitle: "Elevated Presence" },
      { id: 3, title: "On-Time", subtitle: "Seamless Execution" },
      { id: 4, title: "Expert Team", subtitle: "Specialist Support" },
    ],
    touchpointTitle: `Choose the Right Touchpoint in ${capitalizedName}.`,
    touchpointDescription: `Each format is selected around passenger movement, dwell time and visibility potential — ensuring every placement delivers purposeful, premium brand exposure.`,
  };
}
