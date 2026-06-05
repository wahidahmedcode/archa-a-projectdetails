import React, { useState } from "react";
import { Property } from "../types";
import { Sparkles, BarChart2, Coins, Calendar, TrendingUp } from "lucide-react";

interface FractionalCalculatorProps {
  property: Property;
}

export const FractionalCalculator: React.FC<FractionalCalculatorProps> = ({
  property,
}) => {
  const [sharePercent, setSharePercent] = useState(1.0); // Default 1.0% share

  // Base raw value logic from string: e.g. "142,000,000 USD" -> 142000000
  const numericalCost = parseFloat(property.cost.replace(/[^0-9.]/g, "")) || 100000000;
  
  // Calculate specific values
  const relativeInvestment = (numericalCost * (sharePercent / 100));
  const goldPricePerKgInUSD = 75000; // Speculative luxury index weight
  const goldWeightEquivalentInKg = relativeInvestment / goldPricePerKgInUSD;
  const annualMaintenanceFee = relativeInvestment * 0.012; // 1.2% sovereign maintenance fee (helium, quantum cores, seismic cells)

  return (
    <div id="calculator-section" className="bg-[#131313] border border-neutral-800 p-6 md:p-8 relative">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-5 mb-6">
        <div>
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#00F3FF] uppercase block mb-1">
            PORTFOLIO SYNCHRONIZATION
          </span>
          <h3 className="text-2xl font-serif text-white">
            Syndicate Fractional Simulator
          </h3>
        </div>
        <Coins className="w-6 h-6 text-[#00F3FF]" />
      </div>

      <div className="space-y-6">
        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
          Simulate the fractional allocation parameters of <strong className="text-white font-serif">{property.name}</strong>. Dynamic metrics compute physical ledger valuation anchors in gold weight benchmarks.
        </p>

        {/* The Ownership Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
              PORTFOLIO STAKE ALLOCATION
            </span>
            <span className="text-lg font-serif text-white font-semibold">
              {sharePercent.toFixed(1)}% Share
            </span>
          </div>

          <div className="relative pt-1">
            <input
              id="fraction-share-slider"
              type="range"
              min="0.1"
              max="20.0"
              step="0.1"
              value={sharePercent}
              onChange={(e) => setSharePercent(parseFloat(e.target.value))}
              className="w-full h-1 bg-neutral-900 appearance-none cursor-pointer accent-[#00F3FF] focus:outline-none"
            />
            {/* Ultra-thin (2px) neon progress indicator */}
            <div className="flex justify-between text-[8px] font-mono text-neutral-600 pt-2">
              <span>0.1% (MIN ENTRY)</span>
              <span>10.0% (REGISTRY THRESHOLD)</span>
              <span>20.0% (MAX SYNDICATE STAKE)</span>
            </div>
          </div>
        </div>

        {/* Calculated Technical Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          
          {/* USD Investment Value */}
          <div className="p-4 bg-[#1A1A1A]/30 border border-neutral-800">
            <div className="flex items-center gap-1.5 text-neutral-400 text-[10px] font-mono tracking-wider uppercase mb-2">
              <BarChart2 className="w-3.5 h-3.5 text-[#00F3FF]" />
              USD ALLOCATION
            </div>
            <div id="value-usd-display" className="text-lg sm:text-xl font-serif text-white font-semibold">
              ${relativeInvestment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
            <span className="text-[9px] text-neutral-500 font-sans block mt-1">
              Ref base price: ${numericalCost.toLocaleString()}
            </span>
          </div>

          {/* Physical Gold Equivalent */}
          <div className="p-4 bg-[#1A1A1A]/30 border border-[#D4AF37]/20">
            <div className="flex items-center gap-1.5 text-neutral-400 text-[10px] font-mono tracking-wider uppercase mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
              GOLD WEIGHT BEDROCK
            </div>
            <div id="value-gold-display" className="text-lg sm:text-xl font-serif text-[#D4AF37] font-semibold">
              {goldWeightEquivalentInKg.toLocaleString(undefined, { maximumFractionDigits: 2 })} kg
            </div>
            <span className="text-[9px] text-neutral-500 font-sans block mt-1">
              Equivalent in fine .999 gold bullion
            </span>
          </div>

          {/* Sovereign Core Fees */}
          <div className="p-4 bg-[#1A1A1A]/30 border border-neutral-800">
            <div className="flex items-center gap-1.5 text-neutral-400 text-[10px] font-mono tracking-wider uppercase mb-2">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              ANNUAL UTILITY CAP
            </div>
            <div id="value-util-display" className="text-lg sm:text-xl font-serif text-white font-semibold">
              ${annualMaintenanceFee.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
            <span className="text-[9px] text-neutral-500 font-sans block mt-1">
              1.2% annual maintenance & coolant cycle
            </span>
          </div>

        </div>

        {/* Investment parameters disclosure */}
        <div className="p-4 border border-l-2 border-neutral-800 border-l-[#00F3FF] bg-[#0e0e0e]/50">
          <div className="flex gap-2 items-start">
            <Sparkles className="w-4 h-4 text-[#00F3FF] mt-0.5" />
            <div className="space-y-1">
              <span className="text-[10px] font-sans font-semibold tracking-widest text-[#00F3FF] uppercase block">
                SYNDICATE ACCESS CLEARANCE STATUS
              </span>
              <p className="text-[10px] text-neutral-400 font-sans leading-relaxed">
                Interests between {sharePercent >= 10.0 ? "10.0%" : "0.1%"} and 20.0% receive instant placement inside the <strong className="text-[#D4AF37]">Private Registry</strong> ledger. This yields voting parameters regarding seasonal access periods, geothermal energy offsets, and hardware cell expansion cycles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
