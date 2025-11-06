"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import DownloadModal from "./downloadModal";

export default function SectionEffortlessSwaps() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <section className="section-standard aqua-hero primary-inverse with-video-bg">
        <div className="section-content">
          <motion.div
            className="section-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="section-title">
              {t('features_page_effortless_swaps_title')}
            </h3>
            <p className="text-subtitle font-semi-bold">
              {t('features_page_effortless_swaps_description')}
            </p>
              <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal();
              }}
              className="aqua-button aqua-download-button"
              data-aqua-modal
            >
              {t('button_get_the_app')}
            </a>
          </motion.div>
        <motion.div
          className="section-media"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            className="main-image limited-width-phone-image"
            src="/assets/images/aqua-app-swap-screen.png"
            alt="Mobile device showing the AQUA app swap screen"
            width={500}
            height={900}
          />
        </motion.div>
      </div>
      <div className="section-background-container">
        <video autoPlay muted loop className="section-background-media">
          <source src="/assets/videos/underwater-aqua-blue-website-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
    </>
  );
}
