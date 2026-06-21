import { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact FoxPlayer — Algo Trading Support India",
  description: "Reach FoxPlayer Algo Technologies for demos, support, or enterprise/white-label algo trading inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
