export interface TechnicalMetric {
  label: string;
  value: string;
  category: "Structure" | "Atmospheric" | "Cybernetics" | "Materiality";
}

export interface FloorPlanLayer {
  id: string;
  name: string;
  description: string;
  complexity: string;
  nodes: { x: number; y: number; label: string; details: string }[];
}

export interface Property {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  coordinates: { lat: string; lng: string; elev: string };
  description: string;
  concept: string;
  cost: string;
  tokenizedShare: string;
  imageUrl: string;
  architect: string;
  metrics: TechnicalMetric[];
  layers: FloorPlanLayer[];
}

export interface Inquiry {
  id: string;
  propertyId: string;
  propertyName: string;
  investorName: string;
  investorEmail: string;
  assetTier: "Private Registry" | "Joint Syndicate" | "Sole Ownership";
  customRequirements: string;
  preferredContact: "Secure Link" | "Encrypted Voice" | "In-Person Briefing";
  timestamp: string;
}
