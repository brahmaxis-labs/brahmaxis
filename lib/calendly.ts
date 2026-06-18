export const CALENDLY_URL = "https://calendly.com/shruti-brahmaxis/30min";

export const CALENDLY_EMBED = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=11131a&text_color=eceef6&primary_color=6e76f1`;

const CALENDLY_SCRIPT_ID = "calendly-widget-script";
const CALENDLY_CSS_ID = "calendly-widget-css";
const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS_SRC = "https://assets.calendly.com/assets/external/widget.css";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
    __calendlyWidgetPromise?: Promise<void>;
  }
}

function ensureCalendlyCss() {
  if (document.getElementById(CALENDLY_CSS_ID)) return;

  const link = document.createElement("link");
  link.id = CALENDLY_CSS_ID;
  link.rel = "stylesheet";
  link.href = CALENDLY_CSS_SRC;
  document.head.appendChild(link);
}

export function warmCalendly() {
  if (typeof window === "undefined") return Promise.resolve();

  ensureCalendlyCss();

  if (window.Calendly) return Promise.resolve();
  if (window.__calendlyWidgetPromise) return window.__calendlyWidgetPromise;

  window.__calendlyWidgetPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(CALENDLY_SCRIPT_ID) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Calendly widget failed to load")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.id = CALENDLY_SCRIPT_ID;
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly widget failed to load"));
    document.head.appendChild(script);
  });

  return window.__calendlyWidgetPromise;
}
