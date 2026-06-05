import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Property, Inquiry } from "../types";
import { Check, ShieldCheck, Mail, User, Wallet, PhoneCall } from "lucide-react";

interface InquiryFormProps {
  property: Property;
  onInquirySubmitted: (inquiry: Inquiry) => void;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  property,
  onInquirySubmitted,
}) => {
  const [investorName, setInvestorName] = useState("");
  const [investorEmail, setInvestorEmail] = useState("");
  const [assetTier, setAssetTier] = useState<Inquiry["assetTier"]>("Sole Ownership");
  const [preferredContact, setPreferredContact] = useState<Inquiry["preferredContact"]>("Secure Link");
  const [customRequirements, setCustomRequirements] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!investorName || !investorEmail) return;

    setIsSubmitting(true);

    // Simulate elite cryptographic security verification
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
        propertyId: property.id,
        propertyName: property.name,
        investorName,
        investorEmail,
        assetTier,
        customRequirements,
        preferredContact,
        timestamp: new Date().toLocaleTimeString(),
      };

      onInquirySubmitted(newInquiry);
      setIsSubmitting(false);
      setSuccessMessage(true);

      // Clean input bounds
      setInvestorName("");
      setInvestorEmail("");
      setCustomRequirements("");

      setTimeout(() => {
        setSuccessMessage(false);
      }, 5000);
    }, 1200);
  };

  return (
    <div id="briefing-portal" className="bg-[#131313] border border-neutral-800 p-6 md:p-8 relative">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-5 mb-6">
        <div>
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase block mb-1">
            SECURE BRIEFING REQUEST
          </span>
          <h3 className="text-2xl font-serif text-white">
            Register Private Interest
          </h3>
        </div>
        <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
      </div>

      <AnimatePresence mode="wait">
        {successMessage ? (
          <motion.div
            key="success"
            className="border border-[#00F3FF]/45 bg-[#0e0e0e] p-6 text-center py-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="w-12 h-12 bg-[#00F3FF]/10 text-[#00F3FF] flex items-center justify-center mx-auto mb-4 border border-[#00F3FF]">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-serif text-[#00F3FF] tracking-wider mb-2">
              Cryptographic Key Generated
            </h4>
            <p className="text-xs text-neutral-300 font-sans max-w-md mx-auto leading-relaxed mb-6">
              Your inquiry has been stored securely in our private ledger. A digital portfolio specialist will establish contact via{" "}
              <strong className="text-[#D4AF37]">{preferredContact}</strong> shortly.
            </p>
            <button
              onClick={() => setSuccessMessage(false)}
              className="px-6 py-2 bg-transparent text-[11px] font-mono tracking-widest text-neutral-400 border border-neutral-800 hover:border-neutral-500 hover:text-white transition-colors uppercase"
            >
              Back to Portal
            </button>
          </motion.div>
        ) : (
          <form key="form" onSubmit={handleSubmit} className="space-y-6">
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              Establishing interest in <strong className="text-white font-serif">{property.name}</strong>. Access is restricted to vetted entities. Complete requirements for encrypted evaluation channels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1 relative">
                <label className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                  LEGAL REPRESENTATIVE NAME
                </label>
                <div className="relative">
                  <User className="absolute left-0 bottom-2.5 w-4 h-4 text-neutral-600" />
                  <input
                    id="investor-name-input"
                    type="text"
                    required
                    value={investorName}
                    onChange={(e) => setInvestorName(e.target.value)}
                    placeholder="E.G. ALISTAIR VANCE"
                    className="w-full bg-transparent border-b border-neutral-800 focus:border-[#00F3FF] py-2 pl-6 pr-2 text-sm text-white placeholder-neutral-700 outline-none transition-all duration-300 focus:shadow-[0_4px_12px_rgba(0,243,255,0.05)] rounded-none"
                  />
                </div>
              </div>

              {/* Secure Email */}
              <div className="space-y-1 relative">
                <label className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                  SECURE COMMS EMAIL
                </label>
                <div className="relative">
                  <Mail className="absolute left-0 bottom-2.5 w-4 h-4 text-neutral-600" />
                  <input
                    id="investor-email-input"
                    type="email"
                    required
                    value={investorEmail}
                    onChange={(e) => setInvestorEmail(e.target.value)}
                    placeholder="E.G. VANCE@CRYPTPORT.NET"
                    className="w-full bg-transparent border-b border-neutral-800 focus:border-[#00F3FF] py-2 pl-6 pr-2 text-sm text-white placeholder-neutral-700 outline-none transition-all duration-300 focus:shadow-[0_4px_12px_rgba(0,243,255,0.05)] rounded-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Asset Tier Selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                  ASSET SYNDICATE STRUCTURE
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["Private Registry", "Joint Syndicate", "Sole Ownership"] as Inquiry["assetTier"][]).map((tier) => (
                    <button
                      id={`tier-select-btn-${tier.replace(/\s+/g, "-")}`}
                      type="button"
                      key={tier}
                      onClick={() => setAssetTier(tier)}
                      className={`py-2 px-1 text-[9px] sm:text-[10px] font-sans font-semibold tracking-wider uppercase border text-center transition-all duration-300 rounded-none ${
                        assetTier === tier
                          ? "border-[#00F3FF] text-[#00F3FF] bg-[#00F3FF]/5"
                          : "border-neutral-800 text-neutral-400 hover:border-neutral-700"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Mode Selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                  COMMUNICATION FREQUENCY
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["Secure Link", "Encrypted Voice", "In-Person Briefing"] as Inquiry["preferredContact"][]).map((contact) => (
                    <button
                      id={`contact-select-btn-${contact.replace(/\s+/g, "-")}`}
                      type="button"
                      key={contact}
                      onClick={() => setPreferredContact(contact)}
                      className={`py-2 px-1 text-[9px] sm:text-[10px] font-sans font-semibold tracking-wider uppercase border text-center transition-all duration-300 rounded-none ${
                        preferredContact === contact
                          ? "border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5"
                          : "border-neutral-800 text-neutral-400 hover:border-neutral-700"
                      }`}
                    >
                      {contact}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Notes */}
            <div className="space-y-1 relative">
              <label className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                SPECIAL ARCHITECTURAL OVERRIDES / REQUISITIONS
              </label>
              <textarea
                id="custom-specs-textarea"
                rows={2}
                value={customRequirements}
                onChange={(e) => setCustomRequirements(e.target.value)}
                placeholder="ANY ADDITIONAL SPECIFICATIONS (E.G. LOCALIZED HELIPAD, INDEPENDENT HYDROGEN STACK, OFF-GRID GEOTHERMAL CELL UPGRADE)..."
                className="w-full bg-transparent border-b border-neutral-800 focus:border-[#00F3FF] py-2 text-xs text-white placeholder-neutral-700 outline-none transition-all duration-300 resize-none rounded-none"
              />
            </div>

            {/* Custom Checkbox */}
            <div className="flex items-start gap-2 pt-2">
              <input
                id="ledger-agreement-checkbox"
                type="checkbox"
                required
                defaultChecked
                className="mt-1 cursor-pointer accent-[#D4AF37] h-3.5 w-3.5 border-neutral-800 rounded-none focus:ring-0 text-[#050505]"
              />
              <span className="text-[10px] text-neutral-500 font-sans leading-relaxed">
                By ticking, I authorize the cryptographic encryption of my representative metadata. It will be logged strictly inside private nodes with zero external tracking.
              </span>
            </div>

            {/* Form Button */}
            <button
              id="submit-inquiry-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-xs font-sans font-semibold tracking-[0.25em] text-center border border-[#D4AF37] hover:bg-[#D4AF37]/5 text-[#D4AF37] hover:text-white cursor-pointer select-none transition-all duration-300 uppercase rounded-none relative overflow-hidden"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] animate-ping" />
                  INITIATING DEEP ENCRYPTION KEY...
                </span>
              ) : (
                "TRANSMIT BRIEFING REQUEST"
              )}
            </button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
