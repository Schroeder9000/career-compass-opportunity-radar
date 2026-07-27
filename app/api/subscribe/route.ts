import { env } from "cloudflare:workers";

export async function POST(request: Request) {
  const input = await request.json() as Record<string, unknown>;
  const email = String(input.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({message:"Enter a valid email address."}, {status:400});
  if (!input.consent) return Response.json({message:"Consent is required to subscribe."}, {status:400});
  if (!env.DB) return Response.json({message:"Signup storage is not connected yet."}, {status:503});
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS subscribers (
    id TEXT PRIMARY KEY, email TEXT NOT NULL UNIQUE, status TEXT NOT NULL DEFAULT 'active',
    consent_timestamp TEXT NOT NULL, acquisition_source TEXT NOT NULL,
    career_stage TEXT, primary_goal TEXT, onboarding_answer TEXT,
    created_at TEXT NOT NULL, updated_at TEXT NOT NULL
  )`).run();
  const now = new Date().toISOString();
  await env.DB.prepare(`INSERT INTO subscribers
    (id,email,status,consent_timestamp,acquisition_source,career_stage,primary_goal,onboarding_answer,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?)
    ON CONFLICT(email) DO UPDATE SET status='active', consent_timestamp=excluded.consent_timestamp,
    career_stage=excluded.career_stage, primary_goal=excluded.primary_goal,
    onboarding_answer=excluded.onboarding_answer, updated_at=excluded.updated_at`)
    .bind(crypto.randomUUID(), email, "active", now, "website", input.careerStage || null, input.primaryGoal || null, input.onboardingAnswer || null, now, now).run();
  return Response.json({message:"Your first Friday brief is queued. You can update preferences anytime."});
}
