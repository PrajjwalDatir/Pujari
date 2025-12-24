import { Metadata } from "next";
import PujarisClient from "./PujarisClient";

export const metadata: Metadata = {
  title: "Join Pujari | Empower your Spiritual Practice",
  description: "Register as a verified Vedic expert. Reach more devotees, manage your schedule, and receive secure digital dakshina.",
  openGraph: {
    title: "Join Pujari | Empower your Spiritual Practice",
    description: "Connect with seeking families and grow your spiritual presence.",
    type: "website",
  },
};

export default function PujarisPage() {
  return <PujarisClient />;
}
