import PortfolioClient from "@/components/PortfolioClient";
import { defaultPortfolio } from "@/config/portfolio";
import { getPortfolioContentState } from "@/lib/contentStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  try {
    const state = await getPortfolioContentState();
    return <PortfolioClient initialContent={state.content} initialContentSaved={state.source === "saved"} />;
  } catch {
    // The public portfolio must remain usable even when Supabase is briefly
    // unavailable. The client will retry silently after first paint.
    return <PortfolioClient initialContent={defaultPortfolio} initialContentSaved={false} />;
  }
}
