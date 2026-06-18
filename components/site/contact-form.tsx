"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  SITE,
  FORM_SERVICES,
  FORM_STAGES,
  FORM_BUDGETS,
  FORM_TIMELINES,
} from "@/lib/site";

const field =
  "w-full bg-transparent rounded-lg border border-border px-4 py-3 text-foreground outline-none transition-colors focus:border-brand placeholder:text-muted-foreground/60";
const selectField =
  "w-full bg-background rounded-lg border border-border px-4 py-3 text-foreground outline-none transition-colors focus:border-brand";

function Label({ htmlFor, children, optional }: { htmlFor: string; children: string; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-sm text-muted-foreground">
      {children}
      {optional ? <span className="text-muted-foreground/50"> (optional)</span> : <span className="text-brand"> *</span>}
    </label>
  );
}

/**
 * Lead-qualification form. No backend is wired yet, so this composes a
 * structured mailto draft as an honest fallback (it does not silently "succeed").
 *
 * TODO(backend): replace `buildMailto` + handleSubmit with a POST to an
 * /api/contact route (or a form provider) and surface real success/error state.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const lines = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Company: ${get("company")}`,
      `Website / LinkedIn: ${get("website") || "—"}`,
      "",
      `Service needed: ${get("service")}`,
      `Current stage: ${get("stage")}`,
      `Budget range: ${get("budget")}`,
      `Timeline: ${get("timeline")}`,
      `Preferred call time: ${get("preferredTime") || "—"}`,
      "",
      "What are you building:",
      get("building"),
      "",
      "Project description:",
      get("description"),
    ];

    const subject = `Project enquiry — ${get("company") || get("name")}`;
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8 lg:p-10"
    >
      <div className="grid gap-5">
        {/* Identity */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <input id="name" name="name" required className={field} placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <input id="email" name="email" type="email" required className={field} placeholder="you@company.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">Company</Label>
            <input id="company" name="company" required className={field} placeholder="Company name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="website" optional>Website / LinkedIn</Label>
            <input id="website" name="website" className={field} placeholder="https://" />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="building">What are you building?</Label>
          <input
            id="building"
            name="building"
            required
            className={field}
            placeholder="Marketplace automation, SaaS MVP, AdOps dashboard, infra cleanup…"
          />
        </div>

        {/* Qualifiers */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="grid gap-2">
            <Label htmlFor="service">Which service do you need?</Label>
            <select id="service" name="service" required defaultValue="" className={selectField}>
              <option value="" disabled>Select a service</option>
              {FORM_SERVICES.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="stage">Current stage</Label>
            <select id="stage" name="stage" required defaultValue="" className={selectField}>
              <option value="" disabled>Select a stage</option>
              {FORM_STAGES.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="budget">Budget range</Label>
            <select id="budget" name="budget" required defaultValue="" className={selectField}>
              <option value="" disabled>Select a budget</option>
              {FORM_BUDGETS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="timeline">Timeline</Label>
            <select id="timeline" name="timeline" required defaultValue="" className={selectField}>
              <option value="" disabled>Select a timeline</option>
              {FORM_TIMELINES.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="description">Project description</Label>
          <textarea
            id="description"
            name="description"
            required
            className={`${field} min-h-36 resize-y`}
            placeholder="The problem, who it is for, the outcome that matters, and any constraints we should know."
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="preferredTime" optional>Preferred call time</Label>
          <input id="preferredTime" name="preferredTime" className={field} placeholder="Weekdays after 4 PM IST" />
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Serious engineering needs realistic scope — the budget field helps us recommend the right
          next step honestly, whether that is a discovery sprint, a full build, or a referral.
        </p>

        <button
          type="submit"
          className="w-full rounded-full py-4 bg-brand text-brand-foreground flex items-center justify-center gap-2 text-sm font-medium transition-all group hover:bg-brand/90 shadow-lg shadow-brand/20"
        >
          Send project details
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {sent && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-lg border border-brand/30 bg-brand/[0.06] p-4 text-sm text-foreground"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span className="text-muted-foreground">
              Your email client should now open with the details pre-filled. If it does not, write to{" "}
              <a className="text-foreground underline underline-offset-4" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </span>
          </div>
        )}

        <p className="text-sm text-muted-foreground">
          Prefer email? Reach us directly at{" "}
          <a
            className="text-foreground underline underline-offset-4"
            href={`mailto:${SITE.email}?subject=Project%20enquiry%20for%20BrahmAxis%20Labs`}
          >
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
