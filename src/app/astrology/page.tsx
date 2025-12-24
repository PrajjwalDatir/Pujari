import { Metadata } from "next";
import AstrologyClient from "./AstrologyClient";

export const metadata: Metadata = {
  title: "Vedic Astrology | Divine Cosmic Insights",
  description: "Consult with verified Vedic astrologers for Kundali matching, birth chart analysis, and precise remedial measures. Navigate your karma with ancient wisdom.",
  openGraph: {
    title: "Vedic Astrology | Pujari",
    description: "Align your life with universal rhythms through expert Jyotish consultations.",
    type: "website",
  },
};

export default function AstrologyPage() {
  return <AstrologyClient />;
}
