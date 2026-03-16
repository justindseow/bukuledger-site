import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { insights, getInsightBySlug } from "@/app/lib/insights";
import InsightPostPage from "@/app/components/pages/InsightPostPage";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: `/en/insights/${slug}` },
    openGraph: { url: `/en/insights/${slug}` },
  };
}

export default async function EnInsightPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();
  return <InsightPostPage insight={insight} />;
}
