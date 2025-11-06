"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SectionStandardThree() {
  const { t } = useTranslation();

  const handleAquaDownloadModal = () => {
    // Add your download modal logic here
    console.log("Open download modal");
    return false;
  };

  return (
    <section className="section-standard image-first">
      <div className="section-content">
        <motion.div
          className="section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="section-title">
            {t('section_title_financial_freedom')}
          </h3>
          <p className="text-subtitle font-semi-bold">
            {t('section_subtitle_financial_freedom')}
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              return handleAquaDownloadModal();
            }}
            target="_blank"
            className="aqua-button aqua-download-button"
            data-aqua-modal
          >
            {t('button_get_the_app')}
          </a>
        </motion.div>
        <motion.div
          className="section-media"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            className="main-image limited-width-phone-image"
            src="/assets/images/aqua-financial-freedom.png"
            alt="Mobile device showing the AQUA app swap screen"
            width={500}
            height={900}
          />
        </motion.div>
        <div className="section-background-container"></div>
      </div>
    </section>
  );
}
