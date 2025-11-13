"use client";

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function ArgentinaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set language to Spanish for Argentina page
    i18n.changeLanguage('es');
  }, [i18n]);

  return <>{children}</>;
}
