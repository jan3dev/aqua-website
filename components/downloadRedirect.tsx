"use client"
import { useEffect } from "react";

const APPLE_STORE_URL = "https://apps.apple.com/us/app/aqua-wallet/id6468594241";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=io.aquawallet.android";

export default function DownloadRedirect() {
  useEffect(() => {
    // Check for redirect query parameter
    const params = new URLSearchParams(window.location.search);
    const redirectParam = params.get('redirect');
    const shouldRedirect = redirectParam === 'true' || redirectParam === '';

    if (shouldRedirect) {
      // Detect platform
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

      // iOS detection
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        window.location.href = APPLE_STORE_URL;
      }
      // Android detection
      else if (/android/i.test(userAgent)) {
        window.location.href = GOOGLE_PLAY_URL;
      }
      // Mac OS detection (for desktop Safari)
      else if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
        window.location.href = APPLE_STORE_URL;
      }
      // Windows and other platforms - stay on page
    }
  }, []);

  return null; // This component doesn't render anything
}
