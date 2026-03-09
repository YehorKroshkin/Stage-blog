"use client";

import { useCookieConsent } from "./CoockieConsentContext";

export const CookieBlockerOverlay = () => {
  const { consent } = useCookieConsent();
  if (consent !== null) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9998] flex items-center justify-center text-white text-lg">
      Please accept or reject cookies to continue.
    </div>
  );
};