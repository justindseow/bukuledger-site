import type { Metadata } from "next";
import ThankYouPage from "@/app/components/pages/ThankYouPage";

export const metadata: Metadata = { robots: { index: false, follow: false } };
export default function EnThankYou() { return <ThankYouPage locale="en" />; }
