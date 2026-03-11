import type { Metadata } from "next";
import ThankYouPage from "@/app/components/pages/ThankYouPage";

export const metadata: Metadata = { robots: { index: false, follow: false } };
export default function BmThankYou() { return <ThankYouPage locale="bm" />; }
