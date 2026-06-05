import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Property, FloorPlanLayer } from "../types";
import { Info, Target, Layers } from "lucide-react";

interface BlueprintSelectorProps {
  property: Property;
}

export const BlueprintSelector: React.FC<BlueprintSelectorProps> = ({ property }) => {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const [hoveredNode, setHoveredNode] = useState<null | { label: string; details: string; x: number; y: number }>(null);
  const [selectedNode, setSelectedNode] = useState<null | { label: string; details: string; x: number; y: number }>(null);

  const activeLayer = property.layers[activeLayerIndex] || property.layers[0];

  return (
    <div id="blueprint-visualizer" className="bg-[#131313] border border-neutral-800 p-6 md:p-8 relative">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#00F3FF] uppercase border border-[#00F3FF]/30 px-2 py-0.5">
              VECTOR SCHEMATICS
            </span>
          </div>
          <h3 className="text-2xl font-serif text-white">
            Operational Blueprint Layers
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-xl font-sans leading-relaxed">
            Detailed physical overrides, pressure points, and environmental conduits. Select structural elevations below.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2">
          {property.layers.map((layer, index) => (
            <button
              id={`layer-btn-${layer.id}`}
              key={layer.id}
              onClick={() => {
                setActiveLayerIndex(index);
                setSelectedNode(null);
                setHoveredNode(null);
              }}
              className={`px-4 py-2 text-[11px] font-sans font-semibold tracking-widest uppercase transition-all duration-300 rounded-none border ${
                activeLayerIndex === index
                  ? "bg-[#1A1A1A] border-[#D4AF37] text-[#D4AF37]"
                  : "bg-transparent border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white"
              }`}
            >
              Layer {index + 1}: {layer.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interaction Canvas (8 Cols) */}
        <div className="lg:col-span-8 relative">
          <div className="text-[10px] text-neutral-500 font-mono flex items-center justify-between px-3 py-1 bg-[#1A1A1A]/50 border-b border-neutral-800">
            <span>AXIAL MATRIX CALIBRATION: ACTIVE</span>
            <span>GRID ZONE {property.id}</span>
          </div>

          <div className="relative aspect-[16/9] w-full bg-[#0e0e0e]/95 border-b border-x border-neutral-800 overflow-hidden group select-none">
            {/* Architectural Grid mesh overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4vw_4vw]" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-neutral-800/60" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-neutral-800/60" />

            {/* Simulated architectural line art using responsive SVGs */}
            <svg className="absolute inset-0 w-full h-full text-neutral-800/30" xmlns="http://www.w3.org/2000/svg">
              <line x1="5%" y1="90%" x2="95%" y2="90%" stroke="currentColor" strokeWidth="1" />
              <line x1="10%" y1="10%" x2="10%" y2="90%" stroke="currentColor" strokeWidth="1" />
              <line x1="90%" y1="10%" x2="90%" y2="90%" stroke="currentColor" strokeWidth="1" />
              
              {/* Dynamic decorative structural loops based on active layer index */}
              {activeLayerIndex === 0 && (
                <>
                  <circle cx="50%" cy="50%" r="30%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 20% 70% L 50% 20% L 80% 70%" fill="none" stroke="rgba(0,243,255,0.08)" strokeWidth="2" />
                  <line x1="50%" y1="20%" x2="50%" y2="90%" stroke="rgba(0,243,255,0.15)" strokeWidth="1" />
                </>
              )}
              {activeLayerIndex === 1 && (
                <>
                  <rect x="20%" y="25%" width="60%" height="45%" fill="none" stroke="currentColor" strokeWidth="1" />
                  <line x1="20%" y1="25%" x2="80%" y2="70%" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="80%" y1="25%" x2="20%" y2="70%" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="50%" cy="47%" r="15%" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="1.5" />
                </>
              )}
              {activeLayerIndex === 2 && (
                <>
                  <polygon points="50,15 90,85 10,85" className="fill-none stroke-current" strokeWidth="1" transform="scale(0.8) translate(110, 10)" />
                  <circle cx="50%" cy="60%" r="20" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="1.5" />
                  <line x1="10%" y1="85%" x2="90%" y2="85%" stroke="rgba(0,243,255,0.2)" strokeWidth="1.5" />
                </>
              )}
            </svg>

            {/* Nodes/Hotspots */}
            {activeLayer.nodes.map((node, i) => (
              <button
                id={`blueprint-node-${activeLayer.id}-${i}`}
                key={i}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group/node"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setSelectedNode(node)}
              >
                {/* Micro-animations using raw pulses and hover effects */}
                <span className="absolute inset-0 rounded-full bg-[#00F3FF]/20 animate-ping -m-2 opacity-75" />
                <div className={`w-3.5 h-3.5 rounded-none border flex items-center justify-center transition-colors duration-300 ${
                  selectedNode?.label === node.label
                    ? "bg-[#00F3FF] border-[#00F3FF]"
                    : "bg-[#131313] border-[#00F3FF]"
                }`}>
                  <Target className={`w-2 h-2 ${selectedNode?.label === node.label ? "text-[#050505]" : "text-[#00F3FF]"}`} />
                </div>
              </button>
            ))}

            {/* Tooltip Overlay */}
            <AnimatePresence>
              {hoveredNode && (
                <motion.div
                  className="absolute p-3 bg-[#131313]/90 backdrop-blur-md border border-[#00F3FF]/40 text-left pointer-events-none z-20 max-w-xs shadow-xl"
                  style={{
                    left: `${hoveredNode.x}%`,
                    top: `calc(${hoveredNode.y}% - 70px)`,
                    transform: "translateX(-50%)"
                  }}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[9px] font-mono tracking-widest text-[#00F3FF] uppercase block mb-1">
                    LAYER HOTSPOT
                  </span>
                  <p className="text-xs font-serif text-white">{hoveredNode.label}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between p-3 border-x border-b border-neutral-800 bg-[#0e0e0e]/20 text-[10px] text-neutral-400 font-mono">
            <span>ELEVATION STRUCTURE MODE</span>
            <span className="text-[#D4AF37] font-semibold">{activeLayer.complexity}</span>
          </div>
        </div>

        {/* Selected Hub Card (4 Cols) */}
        <div className="lg:col-span-4 h-full flex flex-col">
          <div className="border border-neutral-800 bg-[#1A1A1A]/40 p-5 backdrop-blur-md flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-sans tracking-[0.15em] text-[#D4AF37] uppercase font-semibold">
                Section Overview
              </span>
            </div>

            <h4 className="text-lg font-serif text-white mb-2">{activeLayer.name}</h4>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-6">
              {activeLayer.description}
            </p>

            <div className="border-t border-neutral-800 pt-5 mt-auto">
              <span className="text-[10px] font-mono text-neutral-400 tracking-wider block mb-3 uppercase">
                Active System Nodes
              </span>

              {selectedNode ? (
                <div id="selected-node-details" className="bg-[#131313]/80 border border-[#00F3FF]/20 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-xs font-sans tracking-widest text-[#00F3FF] font-semibold uppercase">
                      {selectedNode.label}
                    </h5>
                    <span className="text-[9px] font-mono text-neutral-500">
                      X: {selectedNode.x} | Y: {selectedNode.y}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-normal font-sans">
                    {selectedNode.details}
                  </p>
                </div>
              ) : (
                <div className="bg-[#131313]/30 border border-neutral-800 p-4 text-center">
                  <Info className="w-4 h-4 text-neutral-600 mx-auto mb-2" />
                  <p className="text-[11px] text-neutral-500 font-sans">
                    Click any neon target hotspot on the schematic matrix to view specific details, mechanics, and physical conduits.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
