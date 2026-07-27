"use client";
import { FormEvent, useState } from "react";

export function SignupForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle"|"loading"|"done"|"error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/subscribe", { method: "POST", headers: {"content-type":"application/json"}, body: JSON.stringify(payload) });
      const body = await response.json() as { message?: string };
      if (!response.ok) throw new Error(body.message || "Please try again.");
      setMessage(body.message || "You’re on the radar.");
      setStatus("done");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Please try again.");
      setStatus("error");
    }
  }
  if (status === "done") return <div className="success"><span>✓</span><div><strong>You’re on the radar.</strong><p>{message}</p></div></div>;
  return (
    <form className={compact ? "signup-form compact" : "signup-form detailed"} onSubmit={submit}>
      <div className="email-row"><label className="sr-only" htmlFor={compact ? "hero-email" : "signup-email"}>Email address</label><input id={compact ? "hero-email" : "signup-email"} name="email" type="email" placeholder="you@example.com" required/><button disabled={status==="loading"}>{status==="loading" ? "Joining…" : "Get the radar →"}</button></div>
      {!compact && <div className="preferences">
        <label>Career stage<select name="careerStage"><option value="">Choose one (optional)</option><option>0–2 years</option><option>3–5 years</option><option>Career switcher</option><option>Student / recent grad</option></select></label>
        <label>Primary goal<select name="primaryGoal"><option value="">Choose one (optional)</option><option>Grow income</option><option>Change careers</option><option>Find stability</option><option>Build skills</option><option>Move locations</option></select></label>
        <label className="wide">What opportunity would make this useful?<input name="onboardingAnswer" maxLength={280} placeholder="A role, industry, skill, or place you’re curious about"/></label>
      </div>}
      <label className="consent"><input name="consent" type="checkbox" required/> I agree to receive Opportunity Radar by email and can unsubscribe anytime.</label>
      {status === "error" && <p className="form-error" role="alert">{message}</p>}
    </form>
  );
}
