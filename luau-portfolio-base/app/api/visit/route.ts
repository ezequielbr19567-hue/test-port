import { NextRequest, NextResponse } from "next/server";
import { getAdminClient } from "@/lib/supabaseAdmin";
import { consumeRateLimit, requestFingerprint } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const supabase = getAdminClient();

  if (!supabase) {
    return NextResponse.json({ visits: null, configured: false });
  }

  // Count at most one visit per IP every 30 minutes. This keeps the public
  // counter useful without changing any Supabase table or RPC configuration.
  const rate = consumeRateLimit(requestFingerprint(request, "portfolio-visit"), 1, 30 * 60 * 1000);
  if (!rate.allowed) {
    const { data: current, error: readError } = await supabase
      .from("site_stats")
      .select("value")
      .eq("id", "portfolio_visits")
      .maybeSingle();

    if (readError) {
      console.error(readError);
      return NextResponse.json({ error: "Could not read visit count" }, { status: 500 });
    }

    return NextResponse.json({ visits: Number(current?.value ?? 0), configured: true, counted: false });
  }

  const { data, error } = await supabase.rpc("increment_stat", {
    stat_id: "portfolio_visits",
  });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Could not update visit count" }, { status: 500 });
  }

  return NextResponse.json({ visits: Number(data), configured: true, counted: true });
}

export async function GET() {
  const supabase = getAdminClient();

  if (!supabase) {
    return NextResponse.json({ visits: null, configured: false });
  }

  const { data, error } = await supabase
    .from("site_stats")
    .select("value")
    .eq("id", "portfolio_visits")
    .maybeSingle();

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Could not read visit count" }, { status: 500 });
  }

  return NextResponse.json({ visits: Number(data?.value ?? 0), configured: true });
}
