"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import DownloadModal from "./downloadModal";
import LanguageChooser from "./LanguageChooser";

export default function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [isFaqInView, setIsFaqInView] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMobileDownloadClick = () => {
    setMobileMenuOpen(false);
    setIsModalOpen(true);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    // Disable/enable scroll when mobile menu is open/closed
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure overflow is reset
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash
    setCurrentHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    // Observe FAQ section to determine if it's in view
    const faqSection = document.getElementById("faq");

    if (!faqSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFaqInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Consider in view when 30% visible
      }
    );

    observer.observe(faqSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {/* Mobile Header */}
      <header id="aqua-mobile-header" className={`${isScrolled && !mobileMenuOpen ? "scrolled" : ""} ${mobileMenuOpen ? "mobile-menu-active" : ""}`}>
        <div className="aqua-header-container">
          <a className="aqua-header-logo-link" href="/">
            <Image
              src="/assets/images/logos/aqua-logo.svg"
              className="aqua-logo mobile-modal-off"
              alt="AQUA"
              width={129}
              height={40}
            />
            <Image
              src="/assets/images/logos/aqua-logo-white.svg"
              className="aqua-logo mobile-modal-on"
              alt="AQUA"
              width={120}
              height={40}
            />
          </a>
          <div className="aqua-header-controls aqua-header-mobile-controls">
            {false && <LanguageChooser />}
            <div
              className={`aqua-header-burger ${mobileMenuOpen ? "on" : ""}`}
              id="aqua-header-burger"
              onClick={toggleMobileMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Modal */}
      <div id="aqua-header-mobile-menu" className={mobileMenuOpen ? "on" : ""}>
        <div className="aqua-header-nav-container">
          <div className="aqua-header-nav">
            
            <div className="aqua-navigation">
             <ul className="nav">

        <li className={`nav-home ${pathname === '/' && !isFaqInView ? 'nav-current' : ''}`}><a href="/">{t('home')}</a></li>
        <li className={`nav-features ${pathname === '/features' ? 'nav-current' : ''}`}><a href="/features">{t('features')}</a></li>
        <li className="nav-contact-us"><a href="https://jan3.zendesk.com/hc/en-us">{t('contact us')}</a></li>
        <li className={`nav-faq ${pathname === '/' && isFaqInView ? 'nav-current' : ''}`}><a href="/#faq">{t('faq')}</a></li>

    </ul>
            </div>
          </div>
          <div className="aqua-header-button">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleMobileDownloadClick();
              }}
              className="aqua-button aqua-download-button"
              data-aqua-modal
            >
              {t('header_download_aqua')}
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <header id="aqua-desktop-header" className={isScrolled ? "scrolled" : ""}>
        <div className="aqua-header-container">
          <a className="aqua-header-logo-link" href="/">
            <Image
              src="/assets/images/logos/aqua-logo.svg"
              className="aqua-logo"
              alt="AQUA"
              width={129}
              height={40}
            />
          </a>
          <div className="aqua-header-nav">
            <div className="aqua-navigation">
              <ul className="nav">
                <li className={`nav-home ${pathname === '/' && !isFaqInView ? 'nav-current' : ''}`}>
                  <a href="/">{t('home')}</a>
                </li>
                <li className={`nav-features ${pathname === '/features' ? 'nav-current' : ''}`}>
                  <a href="/features">{t('features')}</a>
                </li>
                <li className="nav-contact-us">
                  <a href="https://jan3.zendesk.com/hc/en-us">{t('contact us')}</a>
                </li>
                <li className={`nav-faq ${pathname === '/' && isFaqInView ? 'nav-current' : ''}`}>
                  <a href="/#faq">{t('faq')}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="aqua-header-controls">
            {false && <LanguageChooser />}
            <div className="aqua-header-button">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal();
                }}
                className="aqua-button aqua-download-button"
                data-aqua-modal
              >
                {t('header_download_aqua')}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
