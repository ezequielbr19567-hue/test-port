import { NextRequest, NextResponse } from "next/server";
import { getConfiguredPassword, setAdminSession, verifyConfiguredPassword } from "@/lib/adminAuth";
import { clearRateLimit, consumeRateLimit, requestFingerprint } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const rateKey = requestFingerprint(request, "admin-login");
  const rate = consumeRateLimit(rateKey, 8, 15 * 60 * 1000);
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429, headers: { "Retry-After": String(Math.max(1, Math.ceil((rate.resetAt - Date.now()) / 1000))) } }
    );
  }

  const body = await request.json().catch(() => null);
  const password = String(body?.password || "");
  const configured = getConfiguredPassword();

  if (!configured) {
    return NextResponse.json({ error: "ADMIN_PASSWORD not configured" }, { status: 500 });
  }

  if (!verifyConfiguredPassword(password)) {
    return NextResponse.json({ error: "Senha inválida" }, { status: 401 });
  }

  await setAdminSession();
  clearRateLimit(rateKey);
  return NextResponse.json({ ok: true });
}
