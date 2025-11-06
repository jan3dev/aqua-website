"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SectionCenteredTwo() {
  const { t } = useTranslation();
  return (
    <section className="section-centered primary-inverse with-video-bg">
      <div className="section-content">
        <motion.div
          className="section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="section-title">
            {t('section_title_usdt_cheap_transfers')}
          </h3>
          <p className="text-subtitle font-semi-bold">
            {t('section_subtitle_usdt_transfers')}
          </p>
        </motion.div>
        <motion.div
          className="section-media"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="fee-comparison-cards">
            <article className="fee-comparison-card best-fee">
              <Image className="fee-comparison-logo" src="/assets/images/logos/liquid.svg" alt="Liquid logo" width={48} height={48} />
              <div className="fee-comparison-info">
                <p>
                  Liquid
                </p>
                <p>
                  $100.00
                </p>
              </div>
              <div className="fee-comparison-amount">
                <p>
                  Fee $0.02
                </p>
              </div>
            </article>
            <div className="middle-fee-comparison-cards">
              <article className="fee-comparison-card">
                <Image
                  className="fee-comparison-logo"
                  src="/assets/images/logos/western-union.svg"
                  alt="Western Union logo"
width={48} height={48}
                />
                <div className="fee-comparison-info">
                  <p>
                    Western Union
                  </p>
                  <p>
                    $100.00
                  </p>
                </div>
                <div className="fee-comparison-amount">
                  <p>
                    Fee $8.99
                  </p>
                </div>
              </article>
              <article className="fee-comparison-card">
                <Image className="fee-comparison-logo" src="/assets/images/logos/ethereum.svg" alt="Ethereum logo" width={48} height={48} />
                <div className="fee-comparison-info">
                  <p>
                    Ethereum
                  </p>
                  <p>
                    $100.00
                  </p>
                </div>
                <div className="fee-comparison-amount">
                  <p>
                    Fee $8.00
                  </p>
                </div>
              </article>
            </div>

            <div className="last-fee-comparison-card">
              <article className="fee-comparison-card">
                <Image className="fee-comparison-logo" src="/assets/images/logos/tron.svg" alt="Tron logo" width={48} height={48} />
                <div className="fee-comparison-info">
                  <p>
                    Tron
                  </p>
                  <p>
                    $100.00
                  </p>
                </div>
                <div className="fee-comparison-amount">
                  <p>
                    Fee $2.00
                  </p>
                </div>
              </article>
            </div>
          </div>
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
