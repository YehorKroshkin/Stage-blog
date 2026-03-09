// context/CookieConsentContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface CookieConsentContextProps {
  consent: boolean | null;
  setConsent: (value: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextProps>({
  consent: null,
  setConsent: () => {},
});

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsentState] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cookieConsent");
    if (stored === "true") setConsentState(true);
    else if (stored === "false") setConsentState(false);
  }, []);

  const setConsent = (value: boolean) => {
    localStorage.setItem("cookieConsent", value.toString());
    setConsentState(value);
  };

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => useContext(CookieConsentContext);