import type { Metadata } from "next";
import ContactPage from "@/app/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell us about your business. We'll reply with a simple monthly bookkeeping plan tailored for your Malaysian SME.",
  alternates: { canonical: "/en/contact" },
  openGraph: { url: "/en/contact" },
};

export default function EnContact() { return <ContactPage locale="en" />; }
