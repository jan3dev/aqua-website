"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
];

export default function LanguageChooser() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = async (langCode: string) => {
    console.log('Changing language to:', langCode);
    try {
      await i18n.changeLanguage(langCode);
      console.log('Language changed successfully to:', i18n.language);
    } catch (error) {
      console.error('Error changing language:', error);
    }
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="aqua-header-localization"
      data-menu-container
      ref={menuRef}
    >
      <svg
        className="aqua-header-globe"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-localization-button
        onClick={toggleMenu}
        style={{ cursor: "pointer" }}
      >
        <path
          d="M11 22C4.9 22 0 17.1 0 11C0 4.9 4.9 0 11 0C17.1 0 22 4.9 22 11C22 17.1 17.1 22 11 22ZM15.9 12C15.7 14.8 14.7 17.4 13.2 19.7C16.8 18.8 19.5 15.7 19.9 12H15.9ZM2.1 12C2.5 15.7 5.2 18.8 8.8 19.7C7.2 17.4 6.3 14.8 6 12H2.1ZM8.1 12C8.3 14.7 9.4 17.3 11 19.4C12.7 17.2 13.7 14.7 13.9 12H8.1ZM16 10H20C19.6 6.3 16.9 3.2 13.3 2.3C14.8 4.6 15.7 7.2 16 10ZM8.1 10H14C13.8 7.3 12.7 4.7 11.1 2.6C9.3 4.7 8.3 7.3 8.1 10ZM2.1 10H6.1C6.3 7.2 7.3 4.6 8.8 2.3C5.2 3.2 2.5 6.3 2.1 10Z"
          fill="#022173"
        />
      </svg>
      <ul
        className={`aqua-header-localization-menu text-caption ${isOpen ? "open" : ""}`}
        data-localization-menu
      >
        {languages.map((lang) => (
          <li
            key={lang.code}
            data-lang={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
            className={i18n.language === lang.code ? "active" : ""}
          >
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
