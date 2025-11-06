"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SectionStandardTwo() {
  const { t } = useTranslation();
  const scrollToNewsletterAndFocus = () => {
    const newsletterForm = document.getElementById("jan3-newsletter-form");
    if (newsletterForm) {
      newsletterForm.scrollIntoView({ behavior: "smooth", block: "center" });

      // Focus on the email input after scrolling
      setTimeout(() => {
        const emailInput = newsletterForm.querySelector('input[type="email"]') as HTMLInputElement;
        if (emailInput) {
          emailInput.focus();
        }
      }, 800);
    }
  };

  return (
    <section className="section-standard primary-inverse with-video-bg">
      <div className="section-content">
        <motion.div
          className="section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="section-title">
            {t('section_title_be_your_own_bank')}
          </h3>
          <p className="text-subtitle font-semi-bold">
            {t('section_subtitle_be_your_own_bank')}
          </p>
          <button onClick={scrollToNewsletterAndFocus} className="aqua-button aqua-download-button">
            {t('button_get_notified')}
          </button>
        </motion.div>
        <motion.div
          className="section-media"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            className="main-image limited-width"
            src="/assets/images/two-aqua-debit-cards.png"
            alt="Two AQUA debit cards"
            style={{ maxWidth: '22.375rem' }}
            width={358}
            height={400}
          />
        </motion.div>
      </div>
      <div className="section-background-container">
        <video autoPlay muted loop className="section-background-media">
          <source src="/assets/videos/underwater-aqua-blue-website-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
