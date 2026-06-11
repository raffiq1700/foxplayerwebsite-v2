import { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | FoxPlayer Algo Technologies",
  description: "Get in touch with FoxPlayer Algo Technologies. Inquire about customized systematic trading software, white-label solutions, or API bridges.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
