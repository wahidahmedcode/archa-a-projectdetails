import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROPERTIES } from "./data";
import { Property, Inquiry } from "./types";
import { PropertyCard } from "./components/PropertyCard";
import { BlueprintSelector } from "./components/BlueprintSelector";
import { InquiryForm } from "./components/InquiryForm";
import { FractionalCalculator } from "./components/FractionalCalculator";
import {
  Compass,
  Globe,
  User,
  Clock,
  Briefcase,
  ChevronRight,
  Sparkles,
  Database,
  Eye,
  Shield,
  HelpCircle,
} from "lucide-react";

export default function App() {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("OH-01");
  const [climateFilter, setClimateFilter] = useState<string>("ALL ZONE CODES");
  const [currentTime, setCurrentTime] = useState<string>("");
  const [inquiries, setInquiries] = useState<Inquiry[]>([
    {
      id: "INQ-9512",
      propertyId: "OH-01",
      propertyName: "Elysium Monolith",
      investorName: "Vance-Gray Trust",
      investorEmail: "inquiry@vancegray.ch",
      assetTier: "Private Registry",
      customRequirements: "Supercooled circuit double-shield backup modules.",
      preferredContact: "Encrypted Voice",
      timestamp: "14:12:02",
    },
    {
      id: "INQ-4209",
      propertyId: "OH-03",
      propertyName: "Aether Wing",
      investorName: "Nordic Frontier Fund",
      investorEmail: "acquisition@nordicfrontier.is",
      assetTier: "Sole Ownership",
      customRequirements: "Active auroral induction system test logs requested.",
      preferredContact: "In-Person Briefing",
      timestamp: "15:01:45",
    },
  ]);

  // Handle ticking Clock dynamically in UTC
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcString = now.toISOString().replace("T", " ").substring(0, 19) + " UTC";
      setCurrentTime(utcString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Filter properties by climate zone
  const filteredProperties = PROPERTIES.filter((p) => {
    if (climateFilter === "ALL ZONE CODES") return true;
    if (climateFilter === "CHILE COLD DRY" && p.location.includes("Chile")) return true;
    if (climateFilter === "ARCTIC COAST" && p.location.includes("Norway")) return true;
    if (climateFilter === "ICELAND WIND" && p.location.includes("Iceland")) return true;
    if (climateFilter === "NIPPON SEISMIC" && p.location.includes("Japan")) return true;
    return true;
  });

  const selectedProperty =
    PROPERTIES.find((p) => p.id === selectedPropertyId) || PROPERTIES[0];

  // Callback to handle incoming secure inquiries
  const handleInquirySubmitted = (newInquiry: Inquiry) => {
    setInquiries((prev) => [newInquiry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e2e1] relative overflow-hidden font-sans select-none selection:bg-[#00F3FF]/30 selection:text-white">
      {/* Dark Ambient Radial Gradients behind glass elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neutral-900/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neutral-900/30 rounded-full blur-[180px] pointer-events-none" />

      {/* Floating Top Navigation Bar with backdrop-filter blur */}
      <header
        id="main-header"
        className="sticky top-0 z-50 w-full bg-[#131313]/85 backdrop-blur-[24px] border-b border-neutral-900 px-6 py-4 md:px-[80px]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Minimalist vector branding icon */}
            <div className="w-8 h-8 border border-[#D4AF37] flex items-center justify-center bg-[#050505]">
              <span className="font-serif text-sm font-semibold text-[#D4AF37]">Ω</span>
            </div>
            <div>
              <h1 className="text-sm font-serif font-semibold tracking-[0.25em] text-white uppercase">
                Obsidian Horizon
              </h1>
              <span className="text-[10px] font-sans text-[#D4AF37] tracking-[0.2em] uppercase block">
                Specular Real Estate Portfolio
              </span>
            </div>
          </div>

          {/* Center navigation (labeled as caps as requested) */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#architectural-catalog"
              className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#e5e2e1] hover:text-[#00F3FF] transition-colors uppercase"
            >
              Catalog
            </a>
            <a
              href="#blueprint-visualizer"
              className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#e5e2e1] hover:text-[#00F3FF] transition-colors uppercase"
            >
              Schematics
            </a>
            <a
              href="#calculator-section"
              className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#e5e2e1] hover:text-[#00F3FF] transition-colors uppercase"
            >
              Valuations
            </a>
            <a
              href="#briefing-portal"
              className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#e5e2e1] hover:text-[#00F3FF] transition-colors uppercase"
            >
              Briefing Registry
            </a>
          </nav>

          {/* Secure details tracker with clock - NO slop, literal metadata */}
          <div className="flex items-center gap-4 text-right">
            <div className="hidden sm:block">
              <span className="text-[9px] font-mono tracking-widest text-[#00F3FF] uppercase block">
                SECURE INTERFACE MODE
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-0.5">
                SAROWARHOSEN1101
              </span>
            </div>
            <div className="border border-neutral-800 bg-[#1A1A1A] px-3 py-1.5 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#00F3FF]" />
              <span id="utc-clock" className="text-[9px] sm:text-xs font-mono text-[#00F3FF]">
                {currentTime || "LOADING DATA..."}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Display Board */}
      <section
        id="hero-banner"
        className="px-6 md:px-[80px] pt-[80px] pb-10 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Title Span 8 */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-[#00F3FF]" />
              <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#00F3FF] uppercase">
                EXCLUSIVE DIGITAL MONUMENTS
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight tracking-tight mb-6">
              The Tension between <br />
              <span className="italic text-[#D4AF37] font-medium font-serif">
                Earth & Kinetic Geometry
              </span>
            </h2>

            <p className="text-neutral-400 text-sm md:text-base font-sans font-light tracking-wide leading-relaxed max-w-2xl">
              An uncompromising catalog of high-end, futuristic real estate.
              These structures employ electromagnetic levitation, anti-seismic isolation,
              and photocrystalline aerogels. Specially curated for elite investors seeking absolute physical sequestration and digital continuity.
            </p>
          </div>

          {/* High end stats overlay Span 4 (Glassmorphic) */}
          <div className="lg:col-span-4 bg-[#131313]/60 backdrop-blur-md border border-neutral-800 p-6 relative">
            {/* Top-left golden focus indicator stroke (inner glow) */}
            <div className="absolute top-0 left-0 w-8 h-px bg-[#D4AF37]" />
            <div className="absolute top-0 left-0 w-px h-8 bg-[#D4AF37]" />

            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-3">
              ACQUISITION SUMMARY INDEX
            </span>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-2">
                <span className="text-xs text-neutral-400">Listed Structures</span>
                <span className="text-xs font-mono text-white">4 Masterworks</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-900 pb-2">
                <span className="text-xs text-neutral-400">Total Portfolio Value</span>
                <span className="text-xs font-mono text-white">$645,000,000 USD</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-900 pb-2">
                <span className="text-xs text-neutral-400">Minimum Entry Token</span>
                <span className="text-xs font-mono text-[#00F3FF] font-semibold">$980,000 USD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-neutral-400 font-sans">Active Registries</span>
                <span className="text-xs font-mono text-[#D4AF37] font-semibold">
                  {inquiries.length} Private Keys
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog View */}
      <main id="architectural-catalog" className="px-6 md:px-[80px] py-[60px] max-w-7xl mx-auto space-y-[120px]">
        
        {/* Section 1: Property Feed Selection */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-6 gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#00F3FF] uppercase block mb-1">
                SYSTEM FEED - CATALOGUE
              </span>
              <h3 className="text-3xl font-serif text-white">
                Specular Architecture Catalog
              </h3>
            </div>

            {/* Filter buttons using Sharp Corners */}
            <div className="flex flex-wrap gap-2">
              {[
                "ALL ZONE CODES",
                "CHILE COLD DRY",
                "ARCTIC COAST",
                "ICELAND WIND",
                "NIPPON SEISMIC",
              ].map((filter) => (
                <button
                  id={`filter-${filter.replace(/\s+/g, "-")}`}
                  key={filter}
                  onClick={() => setClimateFilter(filter)}
                  className={`px-3 py-1.5 text-[9px] font-sans font-semibold tracking-widest uppercase transition-all duration-300 rounded-none border ${
                    climateFilter === filter
                      ? "bg-[#1A1A1A] border-[#00F3FF] text-[#00F3FF]"
                      : "bg-transparent border-neutral-900 text-neutral-500 hover:border-neutral-800 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout containing Property Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isSelected={property.id === selectedPropertyId}
                onSelect={() => setSelectedPropertyId(property.id)}
              />
            ))}
          </div>
        </section>

        {/* Section 2: Active Property Showcase Screen */}
        <section id="property-detail-screen">
          <div className="border border-neutral-800 bg-[#131313]/40 backdrop-blur-md p-6 md:p-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left specifications block (5 columns) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase bg-[#D4AF37]/10 px-2.5 py-1 border border-[#D4AF37]/30">
                      MASTERWORK MODEL {selectedProperty.id}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white">
                    {selectedProperty.name}
                  </h3>
                  <span className="text-xs font-mono tracking-widest text-[#00F3FF] uppercase block mt-1">
                    {selectedProperty.subtitle}
                  </span>
                </div>

                <div className="border-t border-neutral-800 pt-6">
                  <span className="text-[10px] font-mono text-neutral-400 tracking-wider block mb-4 uppercase">
                    TECHNICAL SPECS MATRIX
                  </span>

                  {/* Two column grid of metadata specs */}
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProperty.metrics.map((metric, i) => (
                      <div
                        id={`metric-item-${selectedProperty.id}-${i}`}
                        key={i}
                        className="bg-[#1A1A1A]/30 border border-neutral-900 p-3 relative group hover:border-[#00F3FF]/30 transition-all duration-300"
                      >
                        {/* Status Dot */}
                        <div className="absolute top-2 right-2 w-1 h-1 bg-[#00F3FF]/50 rounded-full" />
                        <span className="text-[9px] font-sans tracking-wide text-neutral-500 uppercase block">
                          {metric.label}
                        </span>
                        <div className="text-xs font-serif text-[#e5e2e1] mt-1 tracking-wide">
                          {metric.value}
                        </div>
                        <span className="text-[8px] font-mono tracking-widest text-[#00F3FF]/40 uppercase block mt-2">
                          {metric.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location with micro coordinates */}
                <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#D4AF37]" />
                    <span>LATITUDE: {selectedProperty.coordinates.lat}</span>
                  </div>
                  <div>
                    <span>ELEV: {selectedProperty.coordinates.elev}</span>
                  </div>
                </div>
              </div>

              {/* Central high resolution display (7 columns) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Edge to edge high contrast, desaturated frame */}
                <div className="relative overflow-hidden aspect-[16/9] border border-neutral-800 bg-[#0e0e0e]">
                  <img
                    src={selectedProperty.imageUrl}
                    alt={selectedProperty.name}
                    className="w-full h-full object-cover filter grayscale-[40%] contrast-[110%] brightness-[85%]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Backdrop glass overlay panel representing physical coordinates */}
                  <div className="absolute top-4 right-4 bg-[#131313]/90 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[9px] font-mono tracking-widest text-white uppercase">
                    SECURED NODE DIRECTORY: {selectedProperty.coordinates.lng}
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="text-[10px] font-sans font-semibold tracking-widest text-[#D4AF37] uppercase block">
                    ARCHITECTURAL THOUGHT PROCESS
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                    {/* Vision Column */}
                    <div>
                      <h4 className="text-xs font-serif text-[#D4AF37] uppercase mb-1.5">
                        Design Vision
                      </h4>
                      <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                        {selectedProperty.description}
                      </p>
                    </div>

                    {/* Geometry Column */}
                    <div>
                      <h4 className="text-xs font-serif text-[#D4AF37] uppercase mb-1.5">
                        Blueprint Concept
                      </h4>
                      <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                        {selectedProperty.concept}
                      </p>
                    </div>
                  </div>

                  {/* Director credentials */}
                  <div className="flex items-center justify-between bg-[#1A1A1A]/50 border border-neutral-800 px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
                        CHIEF DESIGN ARCHITECT
                      </span>
                    </div>
                    <span className="text-[11px] font-serif font-medium text-white tracking-widest uppercase">
                      {selectedProperty.architect}
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Section 3: Interactive Floor Plan Matrix */}
        <section>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#00F3FF]" />
              <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#00F3FF] uppercase">
                DETAILED VECTOR LEVEL PLANS
              </span>
            </div>
            <BlueprintSelector property={selectedProperty} />
          </div>
        </section>

        {/* Section 4: Fractional valuation simulator and Inquiry layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Valuations (7 Columns) */}
          <div className="lg:col-span-6">
            <FractionalCalculator property={selectedProperty} />
          </div>

          {/* Secure briefings register (6 Columns) */}
          <div className="lg:col-span-6">
            <InquiryForm
              property={selectedProperty}
              onInquirySubmitted={handleInquirySubmitted}
            />
          </div>

        </section>

        {/* Section 5: Crypto-Ledger Activity of Real Registries */}
        <section id="crypto-ledger-submissions" className="border border-neutral-800 bg-[#131313]/60 p-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-[#00F3FF]" />
              <span className="text-[10px] font-mono tracking-widest text-[#00F3FF] uppercase font-semibold">
                SECURE LEDGER RECORD LOGS
              </span>
            </div>
            <span className="text-[9px] font-mono text-neutral-500">
              LEDGER SECTOR: HORID-SYS-LOCAL
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-neutral-900 text-neutral-500 pb-2 text-[9px] uppercase tracking-wider">
                  <th className="py-2">Registry ID</th>
                  <th className="py-2">Investor Signature</th>
                  <th className="py-2">Selected Node Monument</th>
                  <th className="py-2">Asset Syndicate Alloc</th>
                  <th className="py-2">Contact Link</th>
                  <th className="py-2 text-right">Comms Key</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inq, i) => (
                  <tr
                    id={`ledger-row-${inq.id}`}
                    key={inq.id}
                    className="border-b border-neutral-900/40 hover:bg-[#1A1A1A]/30 text-neutral-300 transition-colors"
                  >
                    <td className="py-3 text-[#D4AF37]">{inq.id}</td>
                    <td className="py-3">{inq.investorName}</td>
                    <td className="py-3 text-white font-serif italic">{inq.propertyName}</td>
                    <td className="py-3">
                      <span className="text-[10px] px-2 py-0.5 border border-neutral-800 bg-[#0e0e0e]">
                        {inq.assetTier}
                      </span>
                    </td>
                    <td className="py-3 text-neutral-400">{inq.preferredContact}</td>
                    <td className="py-3 text-right text-[#00F3FF]">SECURE-HASH-X2{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>

      {/* Luxury Footer (Literal Human, elegant and simple) */}
      <footer className="w-full bg-[#131313] border-t border-neutral-900 py-12 px-6 md:px-[80px] text-center mt-[120px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-left">
            <span className="text-sm font-serif font-semibold tracking-widest text-[#D4AF37] uppercase">
              Obsidian Horizon
            </span>
            <p className="text-[11px] text-neutral-500 font-sans mt-1">
              Speculative Physical Monument Assets Platform. All designs protected by Sovereign Ledger Protocols.
            </p>
          </div>

          <div className="flex gap-4 items-center justify-center text-[10px] font-mono tracking-widest text-neutral-500">
            <span>COORDINATE SYNC: SECURE</span>
            <span className="text-[#00F3FF]">● ACTIVE NODE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
