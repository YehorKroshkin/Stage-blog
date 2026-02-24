"use client";

import { useEffect } from "react";

export const sendGAEventWithConsent = (name: string, params: Record<string, any>) => {
  const consent = typeof window !== "undefined" && localStorage.getItem("cookieConsent") === "true";
  if (!consent) return;
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
};

export function useTimeOnPage(pagePath: string, consentGiven: boolean) {
  useEffect(() => {
    if (!consentGiven) return; 

    const start = Date.now();

    const handleUnload = () => {
      const duration = Math.round((Date.now() - start) / 1000);
      sendGAEventWithConsent("time_on_page", {
        page_path: pagePath,
        duration_seconds: duration,
      });
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      const duration = Math.round((Date.now() - start) / 1000);
      sendGAEventWithConsent("time_on_page", {
        page_path: pagePath,
        duration_seconds: duration,
      });
    };
  }, [pagePath, consentGiven]);
}