"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import LanguageChooser from "./LanguageChooser";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Add your newsletter form submission logic here
    console.log("Newsletter signup:", email);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setEmail("");
    setIsLoading(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section className="section-footer primary-inverse">
      <div className="section-content">
        <div>
          <Image
            src="/assets/images/logos/aqua-logo-white.svg"
            className="aqua-logo"
            alt="AQUA"
            width={129}
            height={40}
          />
          <p className="footer-description">
            {t('footer_description_global_passport')}
          </p>
        </div>

        {false && (
          <div>
            <h5 className="subscribe-label" id="newsletter-subscribe-label">
              {t('newsletter_title_subscribe_jan3')}
            </h5>
            <form
              className="newsletter-signup"
              id="jan3-newsletter-form"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={t('newsletter_placeholder_enter_email')}
              />
              <button
                type="submit"
                className="g-recaptcha aqua-button-accent aqua-button-with-icon"
                data-sitekey="6LftnDcpAAAAAO72bjMLnIUvMShe5auTltxUMjCv"
                data-callback="jan3NewsletterFormSubmit"
                data-action="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className="loading-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M6.804 15C6.67139 14.7703 6.45297 14.6027 6.1968 14.5341C5.94063 14.4655 5.66768 14.5014 5.438 14.634L3.706 15.634C3.47819 15.7676 3.31246 15.9858 3.24496 16.2411C3.17747 16.4964 3.21369 16.768 3.34573 16.9967C3.47776 17.2254 3.69489 17.3926 3.94974 17.4617C4.20458 17.5309 4.47644 17.4965 4.706 17.366L6.438 16.366C6.66767 16.2334 6.83526 16.015 6.9039 15.7588C6.97254 15.5026 6.9366 15.2297 6.804 15ZM3.706 8.366L5.438 9.366C5.55177 9.4327 5.67761 9.47623 5.80827 9.4941C5.93894 9.51196 6.07185 9.50381 6.19935 9.4701C6.32685 9.43639 6.44642 9.3778 6.55118 9.29769C6.65594 9.21758 6.74382 9.11754 6.80976 9.00333C6.8757 8.88912 6.9184 8.76299 6.9354 8.63221C6.9524 8.50143 6.94336 8.36858 6.90881 8.24131C6.87426 8.11403 6.81487 7.99485 6.73407 7.89063C6.65327 7.7864 6.55265 7.69918 6.438 7.634L4.706 6.634C4.47644 6.50348 4.20458 6.46906 3.94974 6.53825C3.69489 6.60744 3.47776 6.77462 3.34573 7.00331C3.21369 7.23199 3.17747 7.50362 3.24496 7.75892C3.31246 8.01421 3.47819 8.23245 3.706 8.366ZM6 12C6 11.7348 5.89464 11.4804 5.70711 11.2929C5.51957 11.1054 5.26522 11 5 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H5C5.26522 13 5.51957 12.8946 5.70711 12.7071C5.89464 12.5196 6 12.2652 6 12ZM17.196 9C17.3286 9.22967 17.547 9.39726 17.8032 9.4659C18.0594 9.53454 18.3323 9.4986 18.562 9.366L20.294 8.366C20.4086 8.30082 20.5093 8.2136 20.5901 8.10937C20.6709 8.00515 20.7303 7.88597 20.7648 7.75869C20.7994 7.63142 20.8084 7.49857 20.7914 7.36779C20.7744 7.23701 20.7317 7.11088 20.6658 6.99667C20.5998 6.88246 20.5119 6.78242 20.4072 6.70231C20.3024 6.62221 20.1828 6.56361 20.0553 6.5299C19.9278 6.49619 19.7949 6.48804 19.6643 6.5059C19.5336 6.52377 19.4078 6.5673 19.294 6.634L17.562 7.634C17.3323 7.76661 17.1647 7.98503 17.0961 8.2412C17.0275 8.49737 17.0634 8.77032 17.196 9ZM15 6.804C15.2297 6.9366 15.5026 6.97254 15.7588 6.9039C16.015 6.83526 16.2334 6.66767 16.366 6.438L17.366 4.706C17.4327 4.59223 17.4762 4.46639 17.4941 4.33572C17.512 4.20506 17.5038 4.07215 17.4701 3.94465C17.4364 3.81715 17.3778 3.69758 17.2977 3.59282C17.2176 3.48806 17.1175 3.40018 17.0033 3.33424C16.8891 3.26829 16.763 3.2256 16.6322 3.2086C16.5014 3.1916 16.3686 3.20064 16.2413 3.23519C16.114 3.26974 15.9949 3.32913 15.8906 3.40993C15.7864 3.49073 15.6992 3.59135 15.634 3.706L14.634 5.438C14.5014 5.66768 14.4655 5.94063 14.5341 6.1968C14.6027 6.45297 14.7703 6.67139 15 6.804ZM20.294 15.634L18.562 14.634C18.4482 14.5673 18.3224 14.5238 18.1917 14.5059C18.0611 14.488 17.9282 14.4962 17.8007 14.5299C17.6732 14.5636 17.5536 14.6222 17.4488 14.7023C17.3441 14.7824 17.2562 14.8825 17.1902 14.9967C17.1243 15.1109 17.0816 15.237 17.0646 15.3678C17.0476 15.4986 17.0566 15.6314 17.0912 15.7587C17.1257 15.886 17.1851 16.0051 17.2659 16.1094C17.3467 16.2136 17.4474 16.3008 17.562 16.366L19.294 17.366C19.5236 17.4965 19.7954 17.5309 20.0503 17.4617C20.3051 17.3926 20.5222 17.2254 20.6543 16.9967C20.7863 16.768 20.8225 16.4964 20.755 16.2411C20.6875 15.9858 20.5218 15.7676 20.294 15.634ZM16.366 17.562C16.3008 17.4474 16.2136 17.3467 16.1094 17.2659C16.0051 17.1851 15.886 17.1257 15.7587 17.0912C15.6314 17.0566 15.4986 17.0476 15.3678 17.0646C15.237 17.0816 15.1109 17.1243 14.9967 17.1902C14.8825 17.2562 14.7824 17.3441 14.7023 17.4488C14.6222 17.5536 14.5636 17.6732 14.5299 17.8007C14.4962 17.9282 14.488 18.0611 14.5059 18.1917C14.5238 18.3224 14.5673 18.4482 14.634 18.562L15.634 20.294C15.6992 20.4086 15.7864 20.5093 15.8906 20.5901C15.9949 20.6709 16.114 20.7303 16.2413 20.7648C16.3686 20.7994 16.5014 20.8084 16.6322 20.7914C16.763 20.7744 16.8891 20.7317 17.0033 20.6658C17.1175 20.5998 17.2176 20.5119 17.2977 20.4072C17.3778 20.3024 17.4364 20.1828 17.4701 20.0553C17.5038 19.9278 17.512 19.7949 17.4941 19.6643C17.4762 19.5336 17.4327 19.4078 17.366 19.294L16.366 17.562ZM21 11H19C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12C18 12.2652 18.1054 12.5196 18.2929 12.7071C18.4804 12.8946 18.7348 13 19 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11ZM12 18C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18ZM9 17.196C8.77032 17.0634 8.49737 17.0275 8.2412 17.0961C7.98503 17.1647 7.76661 17.3323 7.634 17.562L6.634 19.294C6.50348 19.5236 6.46906 19.7954 6.53825 20.0503C6.60744 20.3051 6.77462 20.5222 7.00331 20.6543C7.23199 20.7863 7.50362 20.8225 7.75892 20.755C8.01421 20.6875 8.23245 20.5218 8.366 20.294L9.366 18.562C9.4986 18.3323 9.53454 18.0594 9.4659 17.8032C9.39726 17.547 9.22967 17.3286 9 17.196ZM12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V5C11 5.26522 11.1054 5.51957 11.2929 5.70711C11.4804 5.89464 11.7348 6 12 6C12.2652 6 12.5196 5.89464 12.7071 5.70711C12.8946 5.51957 13 5.26522 13 5V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2Z" fill="#022173"/>
                  </svg>
                ) : (
                  <>
                    <Image
                      src="/assets/images/icons/checkmark.svg"
                      className="success-icon"
                      alt="Checkmark icon"
                      width={20}
                      height={20}
                    />
                    <span className="newsletter-subscribe-button-label">{t('newsletter_button_subscribe')}</span>
                  </>
                )}
              </button>
            </form>
            <small className="required-recaptcha-notice">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy" style={{color: "#0D6EFD"}}>Privacy Policy</a>
              {" "}and{" "}
              <a href="https://policies.google.com/terms" style={{color: "#0D6EFD"}}>Terms of Service</a>
              {" "}apply.
            </small>
          </div>
        )}

        <div>
          <div className="footer-links mobile-footer-links">
            <div className="footer-link-group" style={{display: 'none'}}>
              <div className="footer-language-chooser">
                <LanguageChooser />
              </div>
            </div>
            <div className="footer-link-group">
              <div className="aqua-navigation">
                <ul className="nav">
                  <li className="nav-home"><a href="/">{t('home')}</a></li>
                  <li className="nav-features"><a href="/features">{t('features')}</a></li>
                  <li className="nav-contactus"><a href="https://jan3.zendesk.com/hc/en-us">{t('contact us')}</a></li>
                  <li className="nav-faq"><a href="/#faq">{t('faq')}</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-link-group">
              <div className="aqua-navigation">
                 <ul className="nav">
                  <li className="nav-privacy-policy"><a href="/privacy-web">{t('nav_privacy_policy')}</a></li>
                  <li className="nav-terms-and-conditions"><a href="/terms-web">{t('nav_terms_and_conditions')}</a></li>
              </ul>
              </div>
            </div>
            <div className="footer-link-group">
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100095180887605" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/AquaBitcoin" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask
                        id="mask0_2649_48219"
                        style={{maskType: "luminance"}}
                        maskUnits="userSpaceOnUse"
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                      >
                        <path d="M3 3H21V21H3V3Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_2649_48219)">
                        <path
                          d="M17.175 3.84351H19.9354L13.9054 10.7529L21 20.1566H15.4457L11.0923 14.4545L6.11657 20.1566H3.35357L9.80271 12.7638L3 3.84479H8.69571L12.6249 9.05579L17.175 3.84351ZM16.2043 18.5006H17.7343L7.86 5.41336H6.21943L16.2043 18.5006Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/aquabitcoin" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 7.5V7.51M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://github.com/AquaWallet/aqua-wallet" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2C10.6868 2 9.38642 2.26508 8.17317 2.7801C6.95991 3.29513 5.85752 4.05001 4.92893 5.00165C3.05357 6.92357 2 9.53026 2 12.2483C2 16.778 4.87 20.6211 8.84 21.9841C9.34 22.0661 9.5 21.7484 9.5 21.4717V19.7398C6.73 20.3547 6.14 18.3665 6.14 18.3665C5.68 17.1777 5.03 16.86 5.03 16.86C4.12 16.2246 5.1 16.2451 5.1 16.2451C6.1 16.3168 6.63 17.3007 6.63 17.3007C7.5 18.8584 8.97 18.3972 9.54 18.1513C9.63 17.4851 9.89 17.0342 10.17 16.778C7.95 16.5218 5.62 15.6404 5.62 11.7359C5.62 10.5983 6 9.6862 6.65 8.95858C6.55 8.70237 6.2 7.63655 6.75 6.25303C6.75 6.25303 7.59 5.97633 9.5 7.29836C10.29 7.07289 11.15 6.96016 12 6.96016C12.85 6.96016 13.71 7.07289 14.5 7.29836C16.41 5.97633 17.25 6.25303 17.25 6.25303C17.8 7.63655 17.45 8.70237 17.35 8.95858C18 9.6862 18.38 10.5983 18.38 11.7359C18.38 15.6507 16.04 16.5116 13.81 16.7678C14.17 17.0855 14.5 17.7106 14.5 18.6637V21.4717C14.5 21.7484 14.66 22.0764 15.17 21.9841C19.14 20.6109 22 16.778 22 12.2483C22 10.9024 21.7413 9.5698 21.2388 8.32643C20.7362 7.08305 19.9997 5.95329 19.0711 5.00165C18.1425 4.05001 17.0401 3.29513 15.8268 2.7801C14.6136 2.26508 13.3132 2 12 2Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/products/jan3-aqua" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 11V16M8 8V8.01M12 16V11M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.tiktok.com/@aquabitcoines" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.44 5.82C15.7566 5.03953 15.3799 4.0374 15.38 3H12.29V15.4C12.2667 16.0712 11.9835 16.7071 11.5003 17.1735C11.0171 17.6399 10.3716 17.9004 9.7 17.9C8.28 17.9 7.1 16.74 7.1 15.3C7.1 13.58 8.76 12.29 10.47 12.82V9.66C7.02 9.2 4 11.88 4 15.3C4 18.63 6.76 21 9.69 21C12.83 21 15.38 18.45 15.38 15.3V9.01C16.633 9.90985 18.1374 10.3926 19.68 10.39V7.3C19.68 7.3 17.8 7.39 16.44 5.82Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://t.me/aquawallet" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                      <path d="M21.2647 0.473678C20.98 0.236812 20.6364 0.0815732 20.2704 0.0244827C19.9045 -0.0326078 19.5299 0.0105861 19.1866 0.149468L1.26566 7.38482C0.88241 7.5425 0.556176 7.81301 0.33026 8.16044C0.104343 8.50786 -0.0105725 8.91578 0.000764965 9.33005C0.0121025 9.74431 0.149157 10.1453 0.393738 10.4799C0.638319 10.8144 0.978859 11.0667 1.37016 11.2032L4.99516 12.4639L7.01566 19.1456C7.04312 19.2348 7.08297 19.3198 7.13404 19.3979C7.14179 19.4099 7.15272 19.4189 7.16096 19.4305C7.21996 19.5129 7.29127 19.5856 7.37239 19.6463C7.39546 19.6639 7.41755 19.6804 7.44221 19.696C7.53714 19.759 7.64228 19.805 7.75294 19.8321L7.76478 19.8331L7.77149 19.836C7.83802 19.8495 7.90574 19.8564 7.97364 19.8565C7.98017 19.8565 7.98597 19.8533 7.99244 19.8532C8.0949 19.8514 8.19647 19.8338 8.29353 19.8009C8.31611 19.7932 8.33546 19.7804 8.35737 19.7711C8.42975 19.7411 8.49832 19.7026 8.56166 19.6565C8.61238 19.6138 8.66312 19.571 8.71388 19.5283L11.416 16.5449L15.4463 19.667C15.8011 19.9433 16.2379 20.0934 16.6875 20.0938C17.1587 20.0932 17.6154 19.9306 17.9809 19.6333C18.3465 19.336 18.5987 18.9221 18.6954 18.4609L21.958 2.44439C22.032 2.08391 22.0065 1.7101 21.8844 1.36298C21.7623 1.01585 21.5481 0.708453 21.2647 0.473678ZM8.37016 12.7823C8.2315 12.9204 8.13672 13.0964 8.0977 13.2881L7.78819 14.7921L7.00413 12.1991L11.0694 10.0821L8.37016 12.7823ZM16.6719 18.0859L11.9092 14.3965C11.71 14.2425 11.46 14.1693 11.2092 14.1914C10.9583 14.2134 10.725 14.3292 10.5557 14.5156L9.69029 15.4708L9.99613 13.9844L17.0791 6.90139C17.2482 6.73255 17.3512 6.50874 17.3695 6.27051C17.3878 6.03228 17.3201 5.79537 17.1788 5.6027C17.0375 5.41004 16.8319 5.27435 16.5992 5.22022C16.3664 5.1661 16.122 5.19711 15.9102 5.30764L5.74491 10.6003L2.02055 9.23736L19.999 2.04495L16.6719 18.0859Z" fill="white"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link-group aqua-copyright no-bottom-border text-caption">
              {t('footer_copyright_notice').replace('2025', currentYear.toString())}
            </div>
            <div className="footer-link-group no-bottom-border text-body-2">
              <span style={{textDecoration: "underline"}}>
                <a href="https://jan3.com" target="_blank" rel="noopener noreferrer">{t('Built by JAN3')}</a>
              </span>
            </div>
            <div className="footer-link-group no-bottom-border aqua-copyright text-caption">
              {t('footer_dolphin_card_disclaimer')}
            </div>
          </div>

          <div className="footer-links desktop-footer-links">
            <div className="footer-row">
              <div className="footer-link-group footer-language-chooser-tablet" style={{display: 'none'}}>
                <LanguageChooser />
              </div>
              <div className="footer-link-group">
                <div className="aqua-navigation">
                  <ul className="nav">
                    <li className="nav-home"><a href="https://aquawallet.io/">{t('home')}</a></li>
                    <li className="nav-features"><a href="https://aquawallet.io/features">{t('features')}</a></li>
                    <li className="nav-contactus"><a href="https://aquawallet.io/contactus">{t('contact us')}</a></li>
                    <li className="nav-faq"><a href="https://aquawallet.io/#faq">{t('faq')}</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-link-group">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100095180887605" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/AquaBitcoin" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask
                          id="mask0_desktop"
                          style={{maskType: "luminance"}}
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                        >
                          <path d="M3 3H21V21H3V3Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_desktop)">
                          <path
                            d="M17.175 3.84351H19.9354L13.9054 10.7529L21 20.1566H15.4457L11.0923 14.4545L6.11657 20.1566H3.35357L9.80271 12.7638L3 3.84479H8.69571L12.6249 9.05579L17.175 3.84351ZM16.2043 18.5006H17.7343L7.86 5.41336H6.21943L16.2043 18.5006Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/aquabitcoin" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 7.5V7.51M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/AquaWallet/aqua-wallet" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2C10.6868 2 9.38642 2.26508 8.17317 2.7801C6.95991 3.29513 5.85752 4.05001 4.92893 5.00165C3.05357 6.92357 2 9.53026 2 12.2483C2 16.778 4.87 20.6211 8.84 21.9841C9.34 22.0661 9.5 21.7484 9.5 21.4717V19.7398C6.73 20.3547 6.14 18.3665 6.14 18.3665C5.68 17.1777 5.03 16.86 5.03 16.86C4.12 16.2246 5.1 16.2451 5.1 16.2451C6.1 16.3168 6.63 17.3007 6.63 17.3007C7.5 18.8584 8.97 18.3972 9.54 18.1513C9.63 17.4851 9.89 17.0342 10.17 16.778C7.95 16.5218 5.62 15.6404 5.62 11.7359C5.62 10.5983 6 9.6862 6.65 8.95858C6.55 8.70237 6.2 7.63655 6.75 6.25303C6.75 6.25303 7.59 5.97633 9.5 7.29836C10.29 7.07289 11.15 6.96016 12 6.96016C12.85 6.96016 13.71 7.07289 14.5 7.29836C16.41 5.97633 17.25 6.25303 17.25 6.25303C17.8 7.63655 17.45 8.70237 17.35 8.95858C18 9.6862 18.38 10.5983 18.38 11.7359C18.38 15.6507 16.04 16.5116 13.81 16.7678C14.17 17.0855 14.5 17.7106 14.5 18.6637V21.4717C14.5 21.7484 14.66 22.0764 15.17 21.9841C19.14 20.6109 22 16.778 22 12.2483C22 10.9024 21.7413 9.5698 21.2388 8.32643C20.7362 7.08305 19.9997 5.95329 19.0711 5.00165C18.1425 4.05001 17.0401 3.29513 15.8268 2.7801C14.6136 2.26508 13.3132 2 12 2Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/products/jan3-aqua" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 11V16M8 8V8.01M12 16V11M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.tiktok.com/@aquabitcoines" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.44 5.82C15.7566 5.03953 15.3799 4.0374 15.38 3H12.29V15.4C12.2667 16.0712 11.9835 16.7071 11.5003 17.1735C11.0171 17.6399 10.3716 17.9004 9.7 17.9C8.28 17.9 7.1 16.74 7.1 15.3C7.1 13.58 8.76 12.29 10.47 12.82V9.66C7.02 9.2 4 11.88 4 15.3C4 18.63 6.76 21 9.69 21C12.83 21 15.38 18.45 15.38 15.3V9.01C16.633 9.90985 18.1374 10.3926 19.68 10.39V7.3C19.68 7.3 17.8 7.39 16.44 5.82Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="https://t.me/aquawallet" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                        <path d="M21.2647 0.473678C20.98 0.236812 20.6364 0.0815732 20.2704 0.0244827C19.9045 -0.0326078 19.5299 0.0105861 19.1866 0.149468L1.26566 7.38482C0.88241 7.5425 0.556176 7.81301 0.33026 8.16044C0.104343 8.50786 -0.0105725 8.91578 0.000764965 9.33005C0.0121025 9.74431 0.149157 10.1453 0.393738 10.4799C0.638319 10.8144 0.978859 11.0667 1.37016 11.2032L4.99516 12.4639L7.01566 19.1456C7.04312 19.2348 7.08297 19.3198 7.13404 19.3979C7.14179 19.4099 7.15272 19.4189 7.16096 19.4305C7.21996 19.5129 7.29127 19.5856 7.37239 19.6463C7.39546 19.6639 7.41755 19.6804 7.44221 19.696C7.53714 19.759 7.64228 19.805 7.75294 19.8321L7.76478 19.8331L7.77149 19.836C7.83802 19.8495 7.90574 19.8564 7.97364 19.8565C7.98017 19.8565 7.98597 19.8533 7.99244 19.8532C8.0949 19.8514 8.19647 19.8338 8.29353 19.8009C8.31611 19.7932 8.33546 19.7804 8.35737 19.7711C8.42975 19.7411 8.49832 19.7026 8.56166 19.6565C8.61238 19.6138 8.66312 19.571 8.71388 19.5283L11.416 16.5449L15.4463 19.667C15.8011 19.9433 16.2379 20.0934 16.6875 20.0938C17.1587 20.0932 17.6154 19.9306 17.9809 19.6333C18.3465 19.336 18.5987 18.9221 18.6954 18.4609L21.958 2.44439C22.032 2.08391 22.0065 1.7101 21.8844 1.36298C21.7623 1.01585 21.5481 0.708453 21.2647 0.473678ZM8.37016 12.7823C8.2315 12.9204 8.13672 13.0964 8.0977 13.2881L7.78819 14.7921L7.00413 12.1991L11.0694 10.0821L8.37016 12.7823ZM16.6719 18.0859L11.9092 14.3965C11.71 14.2425 11.46 14.1693 11.2092 14.1914C10.9583 14.2134 10.725 14.3292 10.5557 14.5156L9.69029 15.4708L9.99613 13.9844L17.0791 6.90139C17.2482 6.73255 17.3512 6.50874 17.3695 6.27051C17.3878 6.03228 17.3201 5.79537 17.1788 5.6027C17.0375 5.41004 16.8319 5.27435 16.5992 5.22022C16.3664 5.1661 16.122 5.19711 15.9102 5.30764L5.74491 10.6003L2.02055 9.23736L19.999 2.04495L16.6719 18.0859Z" fill="white"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-row tablet-column no-bottom-border">
              <div className="footer-link-group">
                <div className="aqua-navigation">
                  <ul className="nav">
                    <li className="nav-privacy-policy"><a href="/privacy-web">{t('nav_privacy_policy')}</a></li>
                    <li className="nav-terms-and-conditions"><a href="/terms-web">{t('nav_terms_and_conditions')}</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-link-group">
                <span className="aqua-copyright text-body-2">
                  {t('footer_copyright_notice').replace('2025', currentYear.toString())}
                </span>
              </div>
              <div className="footer-link-group text-body-2">
                <span style={{textDecoration: "underline"}}>
                  <a href="https://jan3.com" target="_blank" rel="noopener noreferrer">{t('Built by JAN3')}</a>
                </span>
              </div>
            </div>
            <div className="footer-row tablet-column">
              <div className="footer-link-group aqua-copyright text-caption">
                {t('footer_dolphin_card_disclaimer')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
