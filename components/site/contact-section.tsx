"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./reveal";
import { FORM_SERVICES, SITE } from "@/lib/site";

const CONTACT_BENEFITS = [
  "Product roadmap review",
  "Architecture feedback",
  "AI opportunity assessment",
  "Scaling recommendations",
  "Actionable next steps",
];

const WEB3FORMS_ACCESS_KEY = "06635344-5077-438e-9420-f709def6d067";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  details: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  details: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Brahmaxis Labs enquiry from ${form.name}`,
          from_name: form.name,
          email: form.email,
          company: form.company || "Not provided",
          phone: form.phone || "Not provided",
          service: form.service || "Not sure yet",
          message: form.details,
          botcheck: "",
        }),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Message could not be sent.");
      }

      setForm(initialState);
      setStatus("success");
      setStatusMessage("Thanks. Your message was sent. We will get back to you soon.");
    } catch {
      setStatus("error");
      setStatusMessage(
        `Something went wrong. Please email ${SITE.contactEmail} directly and we will help.`
      );
    }
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
        <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-sm lg:p-10">
              <div className="glow-brand absolute -right-24 -top-24 h-56 w-56 opacity-40" aria-hidden />

              <span className="relative inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-brand-soft">
                <MessageSquare className="h-3.5 w-3.5" aria-hidden />
                Contact Brahmaxis Labs
              </span>

              <h2 className="relative mt-7 text-3xl font-display font-semibold tracking-tight lg:text-4xl">
                Tell us what you are building.
              </h2>
              <p className="relative mt-4 text-muted-foreground leading-relaxed">
                Share the product, workflow, dashboard, integration, or infrastructure problem you
                want to solve. We will reply with the clearest next step.
              </p>

              <ul className="relative mt-8 space-y-3">
                {CONTACT_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <Mail className="h-3 w-3" aria-hidden />
                    </span>
                    <span className="text-sm text-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${SITE.contactEmail}`}
                className="group relative mt-9 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-8 text-base font-medium text-foreground transition-all hover:border-brand/50 hover:bg-card active:scale-[0.98]"
              >
                {SITE.contactEmail}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={submit}
              className="rounded-3xl border border-border bg-card/40 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Name
                  <Input
                    required
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    placeholder="Your name"
                    className="h-12 rounded-xl"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Work email
                  <Input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    placeholder="you@company.com"
                    className="h-12 rounded-xl"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Company
                  <Input
                    value={form.company}
                    onChange={(event) => update("company", event.target.value)}
                    placeholder="Company name"
                    className="h-12 rounded-xl"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Phone / WhatsApp
                  <Input
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    placeholder="Optional"
                    className="h-12 rounded-xl"
                  />
                </label>
              </div>

              <label className="mt-5 grid gap-2 text-sm font-medium text-foreground">
                Service interested in
                <select
                  value={form.service}
                  onChange={(event) => update("service", event.target.value)}
                  className="border-input bg-background/40 text-foreground h-12 w-full rounded-xl border px-3 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <option value="">Not sure yet</option>
                  {FORM_SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-5 grid gap-2 text-sm font-medium text-foreground">
                Project details
                <Textarea
                  required
                  value={form.details}
                  onChange={(event) => update("details", event.target.value)}
                  placeholder="What are you building? What is broken, slow, manual, or unclear today?"
                  className="min-h-40 rounded-xl"
                />
              </label>

              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="mt-7 h-14 w-full rounded-full bg-brand text-base text-brand-foreground shadow-lg shadow-brand/20 hover:bg-brand/90"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
              <div className="mt-4 min-h-5 text-center text-xs" aria-live="polite">
                {statusMessage && (
                  <p className={status === "error" ? "text-destructive" : "text-muted-foreground"}>
                    {statusMessage}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
