"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SectionLiquidNetwork() {
  const { t } = useTranslation();

  return (
    <section className="section-centered">
      <div className="section-content">
        <motion.div
          className="section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="section-title">
            {t('features_page_liquid_network_title')}
          </h3>
          <p className="text-subtitle font-semi-bold">
            {t('features_page_liquid_network_description')}
          </p>
        </motion.div>

        <motion.div
          className="section-media"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            className="main-image"
            src="/assets/images/liquid-network-map.png"
            alt="Map of the Liquid Network"
            width={1200}
            height={600}
          />
        </motion.div>
      </div>
      <div className="section-background-container"></div>
    </section>
  );
}
