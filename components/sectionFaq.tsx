"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SectionFaq() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: t('faq_are_there_limits'),
      answer: t('faq_are_there_limits_answer')
    },
    {
      question: t('faq_are_tx_rbf'),
      answer: t('faq_are_tx_rbf_answer')
    },
    {
      question: t('faq_my_btc_purchase'),
      answer: t('faq_my_btc_purchase_answer')
    },
    {
      question: t('faq_does_collect_data'),
      answer: (
        <>
          <p>{t('faq_does_collect_data_answer_p1')}</p>
          <p>{t('faq_does_collect_data_answer_p2')}</p>
        </>
      )
    },
    {
      question: t('faq_how_does_aqua_store_seed'),
      answer: (
        <>
          <p>{t('faq_how_does_aqua_store_seed_answer_p1')}</p>
          <p>{t('faq_how_does_aqua_store_seed_answer_p2')}</p>
        </>
      )
    },
    {
      question: t('faq_how_do_i_contact'),
      answer: (
        <p>
          {t('faq_how_do_i_contact_visit_portal')}{" "}
          <a href="https://jan3.zendesk.com/hc/en-us" target="_blank" rel="noopener noreferrer">
            {t('faq_how_do_i_contact_zendesk_link')}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="aqua-faq-link-icon"
                height="15"
                width="15"
                viewBox="0 0 512 512"
              >
                <path
                  d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                />
              </svg>
            </span>
          </a>
        </p>
      )
    }
  ];

  return (
    <section className="section-faq" id="faq" data-animate-slide-up-on-intersect-frame>
      <div className="section-content">
        <h2 className="section-title" data-animate-slide-up-on-intersect>
          {t('faq_title')}
        </h2>

        <div className="aqua-faqs" data-animate-slide-up-on-intersect>
          {faqs.map((faq, index) => (
            <article key={index} className={`aqua-faq ${openFaq === index ? 'active' : ''}`}>
              <div className="aqua-faq-question" onClick={() => toggleFaq(index)}>
                <span>
                  <h5>{faq.question}</h5>
                </span>
                <Image
                  src="/assets/images/icons/up_chevron.svg"
                  alt="selector arrow up"
                  className="aqua-faq-selector selector-up"
                  width={20}
                  height={12}
                />
                <Image
                  src="/assets/images/icons/down_chevron.svg"
                  alt="selector arrow down"
                  className="aqua-faq-selector selector-down"
                  width={20}
                  height={12}
                />
              </div>
              <div className="aqua-faq-answer">
                {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="section-background-container"></div>
    </section>
  );
}
