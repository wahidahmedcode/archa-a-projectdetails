import { Property } from "./types";

export const PROPERTIES: Property[] = [
  {
    id: "OH-01",
    name: "Elysium Monolith",
    subtitle: "Anti-Gravity Geothermal Sanctuary",
    location: "Atacama Salt Plateau, Chile",
    coordinates: {
      lat: "23.8634° S",
      lng: "67.9002° W",
      elev: "2,300m ASL"
    },
    description: "An extraordinary feat of levitational architecture, the Elysium Monolith floats 12 millimeters above the desolate Chilean salt flats, suspended by superconducting magnets cooled by local liquid helium circuits. Designed for high-frequency isolation and deep existential retreat.",
    concept: "Synthesizing raw volcanic basalt with crystalline titanium grids, the structure acts as both a physical monument and a self-sufficient quantum terminal, powered securely by integrated piezoelectric energy harvesting.",
    cost: "142,000,000 USD",
    tokenizedShare: "1.42M USD (1.0% Pool)",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    architect: "Kengo Kuma Studio × Speculative Futurist Division",
    metrics: [
      { label: "MAGNETIC SUSPENSION", value: "12mm Active Hover", category: "Structure" },
      { label: "PIEZOELECTRIC COATING", value: "98.4% Efficiency", category: "Atmospheric" },
      { label: "GEOTHERMAL DEEP PIPE", value: "3.2km Core Depth", category: "Atmospheric" },
      { label: "QUANTUM SECURITY GRID", value: "8192-qubit Cell", category: "Cybernetics" },
      { label: "CORE MATERIAL", value: "Carbon-Reinforced Basalt", category: "Materiality" },
      { label: "AIR FILTRATION", value: "Closed loop HEPA-V", category: "Atmospheric" }
    ],
    layers: [
      {
        id: "L1",
        name: "Hover Base & Magnetic Coils",
        description: "Primary gravity-compensating structure housing the super-cooled helium lines and electromagnetic stabilizers.",
        complexity: "Level 9 Core Geometry",
        nodes: [
          { x: 30, y: 70, label: "Helium Cooler-01", details: "Maintains niobium-tin alloy magnets at -269°C." },
          { x: 50, y: 80, label: "Geothermal Conduit", details: "Feeds mineral heat upward for thermal conversions." },
          { x: 70, y: 70, label: "Active Gyro Balance", details: "Provides micro-second levitation correction dynamically." }
        ]
      },
      {
        id: "L2",
        name: "Observatory & Habitat Deck",
        description: "Double-walled titanium living spaces wrapped in smart-tint photo-crystalline glazing to absorb panoramic desert isolation.",
        complexity: "Vibe Ultra-Minimalist",
        nodes: [
          { x: 45, y: 40, label: "Zen Void Atrium", details: "Empty courtyard echoing natural desert wind currents." },
          { x: 25, y: 30, label: "Thermal Cell Bank", details: "High density energy buffers for low-solar seasons." },
          { x: 75, y: 35, label: "Translucent Solar Sky", details: "Variable-refraction skylight panel that blocks 99% UV." }
        ]
      },
      {
        id: "L3",
        name: "Cybernetic Crypt",
        description: "Highly shielded underground terminal hosting secure local databases, deep storage, and primary automated maintenance bots.",
        complexity: "Hardened Vault",
        nodes: [
          { x: 50, y: 20, label: "Quantum Cluster", details: "Fully insulated vault with independent biometric lockouts." },
          { x: 80, y: 15, label: "Water Reclamation", details: "Condensation-loop processors utilizing humidity capture." }
        ]
      }
    ]
  },
  {
    id: "OH-02",
    name: "Vesper Spire",
    subtitle: "Atmospheric Wind-Harnessing Bastion",
    location: "Lofoten Archipelago, Norway",
    coordinates: {
      lat: "68.1659° N",
      lng: "13.7161° E",
      elev: "142m above Sea Level"
    },
    description: "An uncompromising vertical tower anchored directly into a solitary granite needle emerging from the Arctic Ocean. The exterior surface mimics biological scales, opening and closing to harvest extreme wind shear and shield internal residents.",
    concept: "Merging brutalist glass facets with kinetic carbon fibers, the Vesper Spire stands as a beacon of extreme marine resistance. The sea water below is filtered through dual tidal energy vents.",
    cost: "185,000,000 USD",
    tokenizedShare: "1.85M USD (1.0% Pool)",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    architect: "Snøhetta × Antigravity Oceanics",
    metrics: [
      { label: "WIND SHEAR CAPTURE", value: "3.4 MW Generator Capacity", category: "Structure" },
      { label: "KINETIC SHIELDING", value: "Active Alumina Alloys", category: "Materiality" },
      { label: "TIDAL POWER PISTONS", value: "Dual Ocean Anchors", category: "Structure" },
      { label: "HEATING MATRIX", value: "Basalt Thermal Enclosures", category: "Atmospheric" },
      { label: "GLASS COMPOSITION", value: "Octahedral Double Laminated", category: "Materiality" },
      { label: "LOCAL AUTOMATION", value: "Sub-Sea Maintenance Drone", category: "Cybernetics" }
    ],
    layers: [
      {
        id: "V1",
        name: "Ocean Anchor & Tidal Pumps",
        description: "The submerged foundation driven into deep granite, leveraging hydraulic current displacement.",
        complexity: "Marine Concrete Helix",
        nodes: [
          { x: 50, y: 90, label: "Granite Tension Vents", details: "Hydraulic anchors with standard automatic depth tracking." },
          { x: 40, y: 75, label: "Tidal Induction Unit", details: "Pre-filtered water intake system with rapid desalination." }
        ]
      },
      {
        id: "V2",
        name: "Central Shaft & Atrium",
        description: "A breathtaking hollow cylinder directing sea breezes past internal hyper-turbines to provide natural updraft.",
        complexity: "Aero-Acoustic Hollow",
        nodes: [
          { x: 35, y: 45, label: "Wind Intake Flaps", details: "Kinetic panels that shift angle depending on wind speed." },
          { x: 50, y: 50, label: "Air Micro-Turbine", details: "Silent induction loops converting gale energy into power." },
          { x: 65, y: 45, label: "Glass Shell Facet", details: "Aviation-grade silicon sealant framing Arctic storms." }
        ]
      },
      {
        id: "V3",
        name: "Crown Observatory Deck",
        description: "The private penthouse overlooking the sea, protected by an electromagnetic fog-repelling field.",
        complexity: "Prestige Minimal",
        nodes: [
          { x: 50, y: 15, label: "Aurora Heliport", details: "Retractable pad suited for heavy electric aero-vehicles." },
          { x: 30, y: 25, label: "Electrothermal Balcony", details: "Invisible radiant curtain that provides static heat outside." }
        ]
      }
    ]
  },
  {
    id: "OH-03",
    name: "Aether Wing",
    subtitle: "Aerogel Aurora Floating Pavilion",
    location: "Coastal Rim, Iceland",
    coordinates: {
      lat: "64.1265° N",
      lng: "21.8174° W",
      elev: "42m over Basalt Cliffs"
    },
    description: "A daring 60-meter cantilevered structure projecting elegantly over the jagged Icelandic coastline. Utilizes structural aerogels that are 99% air, providing dramatic, near-zero thermal loss while creating an illusion of gravity defiance.",
    concept: "Designed to act as a cosmic tuning fork, the Aether Wing's roof frame is threaded with superconducting copper-niobium wires designed to resonate with arctic auroral electromagnetic currents.",
    cost: "98,000,000 USD",
    tokenizedShare: "0.98M USD (1.0% Pool)",
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    architect: "Zaha Hadid Architects × Frontier Materialities",
    metrics: [
      { label: "CANTILEVER REACH", value: "62 Meters Free Floating", category: "Structure" },
      { label: "STRUCTURAL THERMAL COATING", value: "Silica Aerogel Shell", category: "Materiality" },
      { label: "AURORAL INDUCTION", value: "0.4 MW Induction Capacity", category: "Cybernetics" },
      { label: "FOUNDATION WEIGHT", value: "Counter-Seated Basalt Pier", category: "Structure" },
      { label: "GLASS TYPE", value: "Acoustic Low-E Triple Pane", category: "Materiality" },
      { label: "CLIMATE RATING", value: "-40°C Arctic Verified", category: "Atmospheric" }
    ],
    layers: [
      {
        id: "A1",
        name: "Basalt Bedrock Anchor",
        description: "The mass balance weight drilled deep into thermal black rocks of coastal Iceland, housing heavy generators.",
        complexity: "Gravity Pivot Block",
        nodes: [
          { x: 20, y: 80, label: "Basalt Grout Pillars", details: "12-stage tension wires locking structural frame to bedrock." },
          { x: 25, y: 60, label: "Heavy Flywave Stabilizer", details: "Kinetic energy battery that offsets high-velocity sea squalls." }
        ]
      },
      {
        id: "A2",
        name: "The Floating Spine",
        description: "A continuous space-truss of high-tensile carbon nanotubes with absolute minimum structural deflection.",
        complexity: "Grid Ratio 1:16",
        nodes: [
          { x: 50, y: 50, label: "High-Strength Truss", details: "Lattice framework engineered for extreme wind force dispersion." },
          { x: 70, y: 45, label: "Aerogel Insulation Pane", details: "Ultra-insulated material that feels warm to the direct touch." },
          { x: 90, y: 40, label: "Panoramic Apex Room", details: "Floor-to-ceiling sharp border glass overlooking the crashing waves." }
        ]
      }
    ]
  },
  {
    id: "OH-04",
    name: "Kuro Sanctuary",
    subtitle: "Seismic Subterranean Refuge",
    location: "Nakasendo Trail, Japan",
    coordinates: {
      lat: "35.7981° N",
      lng: "137.5218° E",
      elev: "-80m Sub-surface"
    },
    description: "Deep within the wooden forest of Kiso Valley, Kuro Sanctuary descends eighty meters below ground level. It wraps around a crystalline quartz vein, protected from outer climate turmoil, solar storms, and tectonic movements by hydraulic compression dampers.",
    concept: "A dramatic composition of dark concrete, water mirrors, and absolute silence, designed to isolate the observer in quiet reflection, complete with an independent quantum server cluster for secure work.",
    cost: "220,000,000 USD",
    tokenizedShare: "2.20M USD (1.0% Pool)",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    architect: "Tadao Ando × Cybernetic Structural Corp",
    metrics: [
      { label: "SEISMIC STABILITY", value: "M9.5 Isolation Dampers", category: "Structure" },
      { label: "SUBTERRANEAN VENT", value: "Geothermal Air Loop", category: "Atmospheric" },
      { label: "DATA SECURE CRYPT", value: "Faraday-Shielded Vaults", category: "Cybernetics" },
      { label: "MATERIAL COMPOSITION", value: "Treated Obsidian Concrete", category: "Materiality" },
      { label: "SENSORY LAYER", value: "Hollow Wall Sound Absorber", category: "Atmospheric" },
      { label: "AUTONOMOUS POWER", value: "Decentralized Thorium Cell", category: "Atmospheric" }
    ],
    layers: [
      {
        id: "K1",
        name: "Portal Entry & Cascade",
        description: "The concrete slit in the forest floor leading down a monolithic staircase past a roaring mountain spring.",
        complexity: "Concrete Slab Void",
        nodes: [
          { x: 50, y: 20, label: "Forest Incision Stair", details: "A 4-meter wide raw basalt ramp carrying rain water run-offs." },
          { x: 60, y: 35, label: "Water Spillway Lock", details: "Recycles local spring water to generate localized cooling curves." }
        ]
      },
      {
        id: "K2",
        name: "Subterranean Atrium",
        description: "A majestic double-height underground chamber wrapping a water mirror pool with open light-shaft down to earth core.",
        complexity: "Silent Core Echo",
        nodes: [
          { x: 45, y: 60, label: "Tectonic Shock Dampers", details: "Heavy-duty magnetic shock cells that absorb primary waves." },
          { x: 55, y: 70, label: "Crystalline Water Pool", details: "High-density thermal sink maintaining a constant 14°C ambient temperature." },
          { x: 80, y: 65, label: "Decentralized Core Server", details: "Quantum memory storage units shielded in an iron Faraday room." }
        ]
      }
    ]
  }
];

export const TECHNICAL_BLUEPRINTS = {
  activeSignal: "OPERATIONAL",
  securityStatus: "SECURE - ENCRYPTED COILS",
  networkGrid: "METROPOLIS APEX LINK",
  systemLoad: "42.1% CORE USE"
};
