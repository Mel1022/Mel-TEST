"use client";

import { useEffect } from "react";

function pushDataLayer(obj: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as { dataLayer?: object[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(obj);
}

export default function TrackingInit() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        pushDataLayer({ event: "phone_click", phone_number: href.replace("tel:", "") });
      } else if (href.startsWith("mailto:")) {
        pushDataLayer({ event: "email_click" });
      } else if (href.includes("/request-a-quote") || href === "#quote-form") {
        pushDataLayer({ event: "quote_start" });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
