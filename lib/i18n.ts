import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/locales/en/translation.json';
import es from '@/locales/es/translation.json';

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
};

// Only initialize if not already initialized
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next) // Pass i18n instance to react-i18next
    .init({
      resources,
      fallbackLng: 'en',
      lng: 'en', // Default language
      debug: true, // Enable debug mode to see i18n issues
      interpolation: {
        escapeValue: false // React already escapes values
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage']
      },
      supportedLngs: ['en', 'es'],
      react: {
        useSuspense: false // Disable suspense for App Router compatibility
      }
    });
}

export default i18n;
