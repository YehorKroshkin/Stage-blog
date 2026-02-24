"use client";

import { useTimeOnPage } from "@/hooks/useTimeOnPage";
import { useEffect, useState } from "react";

interface CookieConsentPopupProps {
  pagePath: string;
}

const CookieConsentPopup: React.FC<CookieConsentPopupProps> = ({ pagePath }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookieConsent");
    if (storedConsent === "true") setConsent(true);
    else if (storedConsent === "false") setConsent(false);
    else setIsVisible(true); 
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setConsent(true);
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "false");
    setConsent(false);
    setIsVisible(false);
  };

  useTimeOnPage(pagePath, consent === true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[80%] max-w-3xl bg-black/70 text-white p-6 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 z-[9999] backdrop-blur-sm">
      <span className="text-sm md:text-base text-center md:text-left">
        We use cookies for analytics and improvement of our website.
      </span>
      <div className="flex gap-3 mt-3 md:mt-0">
  <button
    onClick={handleAccept}
    className="px-5 py-1 bg-green-600 text-white rounded-full hover:bg-green-500 transition-colors text-sm md:text-base font-semibold shadow-md"
  >
    Yes
  </button>
  <button
    onClick={handleReject}
    className="px-5 py-1 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors text-sm md:text-base font-semibold shadow-md"
  >
    No
  </button>
</div>
    </div>
  );
};

export default CookieConsentPopup;