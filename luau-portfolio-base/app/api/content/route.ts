import { NextResponse } from "next/server";
import { getPortfolioContentState, PortfolioContentLoadError } from "@/lib/contentStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const state = await getPortfolioContentState();
    return NextResponse.json(
      state,
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    if (error instanceof PortfolioContentLoadError) {
      return NextResponse.json(
        { error: "Portfolio content is temporarily unavailable", code: "CONTENT_UNAVAILABLE" },
        {
          status: 503,
          headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
            "Retry-After": "2",
          },
        }
      );
    }

    console.error(error);
    return NextResponse.json({ error: "Unexpected content error", code: "CONTENT_ERROR" }, { status: 500 });
  }
}
