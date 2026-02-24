"use client";

import { useEffect } from "react";

export const sendGAEvent = (name: string, params: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
};

export default function useTimeOnPage(pagePath: string) {
  useEffect(() => {
    const start = Date.now();

    const handleUnload = () => {
      const duration = Math.round((Date.now() - start) / 1000);
      sendGAEvent("time_on_page", {
        page_path: pagePath,
        duration_seconds: duration,
      });
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      const duration = Math.round((Date.now() - start) / 1000);
      sendGAEvent("time_on_page", {
        page_path: pagePath,
        duration_seconds: duration,
      });
    };
  }, [pagePath]);
}