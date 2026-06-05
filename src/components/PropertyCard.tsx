import React from "react";
import { motion } from "motion/react";
import { Property } from "../types";
import { Compass, MapPin } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  isSelected: boolean;
  onSelect: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isSelected,
  onSelect,
}) => {
  return (
    <motion.div
      id={`property-card-${property.id}`}
      onClick={onSelect}
      className={`group relative overflow-hidden bg-[#1A1A1A] border cursor-pointer aspect-[3/4] transition-all duration-500 ${
        isSelected
          ? "border-[#D4AF37]"
          : "border-neutral-800 hover:border-neutral-500"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6 }}
    >
      {/* desaturated, high-contrast imagery with no-referrer policy */}
      <img
        src={property.imageUrl}
        alt={property.name}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter grayscale-[60%] contrast-[115%] saturate-[75%] brightness-[90%] group-hover:grayscale-[10%] group-hover:contrast-[100%] group-hover:saturate-[100%] group-hover:scale-105"
        referrerPolicy="no-referrer"
      />

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80" />

      {/* Floating prestige badge (Metallic Gold) */}
      <div
        id={`prestige-badge-${property.id}`}
        className="absolute top-4 left-4 z-20 border border-[#D4AF37] px-3 py-1 bg-[#131313]/90 backdrop-blur-md rounded-none"
      >
        <span className="text-[10px] font-sans font-medium tracking-[0.2em] text-[#D4AF37] uppercase">
          {property.id}
        </span>
      </div>

      {/* Glassmorphic sliding data overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end min-h-[160px] bg-[#1A1A1A]/85 backdrop-blur-[20px] border-t border-white/10 transition-transform duration-500 transform translate-y-[20%] group-hover:translate-y-0">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-3 h-3 text-[#00F3FF]" />
          <span className="text-[10px] font-mono tracking-[0.1em] text-neutral-400 uppercase">
            {property.location}
          </span>
        </div>

        <h3 className="text-xl font-serif text-white group-hover:text-[#D4AF37] transition-colors mb-1 duration-300">
          {property.name}
        </h3>
        
        <p className="text-xs text-neutral-300 font-sans tracking-wide line-clamp-1 group-hover:line-clamp-none transition-all duration-300 mb-3">
          {property.subtitle}
        </p>

        <div className="flex items-center justify-between border-t border-neutral-800 pt-3 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-xs font-mono tracking-widest text-[#00F3FF] uppercase flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 rotate-45" /> {property.coordinates.lat}
          </span>
          <span className="text-xs font-sans tracking-widest text-[#D4AF37] font-semibold uppercase">
            {property.cost}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
