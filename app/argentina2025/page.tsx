"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./argentina.module.css";
import DownloadModal from "@/components/downloadModal";

export default function ArgentinaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <video
          className={styles.heroVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/argentina_dolphins.mp4" type="video/mp4" />
        </video>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            La  <br/>Billetera <br/> de Bitcoin <br/> Todo En <br/> Uno
          </h1>
          <p className={styles.heroSubtitle}>
            AQUA es tu oportunidad de escapar <br /> de la inflación
          </p>
          <button className={styles.heroButton} onClick={() => setIsModalOpen(true)}>Descargá la app</button>
        </div>

        <figure className={styles.heroPhoneMockup}>
          <img
            src="/assets/images/argentina-page-dolphin-card.png"
            alt="AQUA Bitcoin Wallet Card"
          />
        </figure>
      </section>

      {/* Features Section */}
      <section className={styles.sectionTwo}>
        <div className={styles.sectionTwoContent}>
          {/* Main Virtual Card Feature */}
          <article className={styles.SectionTwoCard}>
            <div className={styles.card1TextContainer}>
              <span className={styles.iconFrame}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M28 28H4C1.73333 28 0 26.2667 0 24V8C0 5.73333 1.73333 4 4 4H28C30.2667 4 32 5.73333 32 8V24C32 26.2667 30.2667 28 28 28ZM2.66667 14.6667V24C2.66667 24.8 3.2 25.3333 4 25.3333H28C28.8 25.3333 29.3333 24.8 29.3333 24V14.6667H2.66667ZM2.66667 12H29.3333V8C29.3333 7.2 28.8 6.66667 28 6.66667H4C3.2 6.66667 2.66667 7.2 2.66667 8V12Z" fill="#022173"/>
                </svg>
              </span>

              <div className={styles.cardTextFrame}>
                <h2 className={styles.topCardTitle}>
                  Tarjeta Virtual GRATIS
                </h2>
                <p className={styles.topCardSubtitle}>
                  Una tarjeta de débito virtual sin costo para gastar tus USDt y Bitcoin en cualquier compra online o servicio internacional.
                </p>
              </div>
              <button className={styles.cardButton} onClick={() => setIsModalOpen(true)}>
                Pedila Ya!
              </button>
            </div>

            <figure className={styles.physicalCardContainer}>
              <img
                src="/assets/images/argerntina-physical-card.png"
                alt="AQUA Virtual Card"
              />
            </figure>
          </article>

          {/* Secondary Feature Cards */}
          <div className={styles.sectionTwoCardsContainer}>
            {/* Digital Dollars Card */}
            <article className={styles.sectonTwoCard}>
              <div className={styles.cardImageFrame}>
                <img
                  src="/assets/images/green-card-section-right.png"
                  alt="Digital Dollar Card"
                />
              </div>

              <div className={styles.smallCardTextContainer}>
                <span className={styles.circularIconContainer}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" fill="none">
                    <path d="M10.6667 12H9.33333V6.66667H12C12.3536 6.66667 12.6928 6.80714 12.9428 7.05719C13.1929 7.30724 13.3333 7.64638 13.3333 8C13.3333 8.35362 13.4738 8.69276 13.7239 8.94281C13.9739 9.19286 14.313 9.33333 14.6667 9.33333C15.0203 9.33333 15.3594 9.19286 15.6095 8.94281C15.8595 8.69276 16 8.35362 16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4H9.33333V1.33333C9.33333 0.979711 9.19286 0.640573 8.94281 0.390524C8.69276 0.140476 8.35362 0 8 0C7.64638 0 7.30724 0.140476 7.05719 0.390524C6.80714 0.640573 6.66667 0.979711 6.66667 1.33333V4H5.33333C3.91885 4 2.56229 4.5619 1.5621 5.5621C0.561903 6.56229 0 7.91884 0 9.33333C0 10.7478 0.561903 12.1044 1.5621 13.1046C2.56229 14.1048 3.91885 14.6667 5.33333 14.6667H6.66667V20H4C3.64638 20 3.30724 19.8595 3.05719 19.6095C2.80714 19.3594 2.66667 19.0203 2.66667 18.6667C2.66667 18.313 2.52619 17.9739 2.27614 17.7239C2.02609 17.4738 1.68696 17.3333 1.33333 17.3333C0.979711 17.3333 0.640573 17.4738 0.390525 17.7239C0.140476 17.9739 0 18.313 0 18.6667C0 19.7275 0.421427 20.7449 1.17157 21.4951C1.92172 22.2452 2.93913 22.6667 4 22.6667H6.66667V25.3333C6.66667 25.687 6.80714 26.0261 7.05719 26.2761C7.30724 26.5262 7.64638 26.6667 8 26.6667C8.35362 26.6667 8.69276 26.5262 8.94281 26.2761C9.19286 26.0261 9.33333 25.687 9.33333 25.3333V22.6667H10.6667C12.0812 22.6667 13.4377 22.1048 14.4379 21.1046C15.4381 20.1044 16 18.7478 16 17.3333C16 15.9188 15.4381 14.5623 14.4379 13.5621C13.4377 12.5619 12.0812 12 10.6667 12ZM6.66667 12H5.33333C4.62609 12 3.94781 11.719 3.44772 11.219C2.94762 10.7189 2.66667 10.0406 2.66667 9.33333C2.66667 8.62609 2.94762 7.94781 3.44772 7.44771C3.94781 6.94762 4.62609 6.66667 5.33333 6.66667H6.66667V12ZM10.6667 20H9.33333V14.6667H10.6667C11.3739 14.6667 12.0522 14.9476 12.5523 15.4477C13.0524 15.9478 13.3333 16.6261 13.3333 17.3333C13.3333 18.0406 13.0524 18.7189 12.5523 19.219C12.0522 19.719 11.3739 20 10.6667 20Z" fill="#022173"/>
                  </svg>
                </span>

                <h3 className={styles.smallCardTitle}>
                  Dólares digitales
                </h3>
                <p className={styles.smallCardSubtitle}>
                  Recibí, enviá y guardá USDt al instante.
                </p>
              </div>
            </article>

            {/* Bitcoin Card */}
            <article className={styles.sectonTwoCard}>
              <div className={styles.cardImageFrame}>
                <img
                  src="/assets/images/bitcoin.png"
                  alt="Bitcoin"
                />
              </div>

              <div className={styles.smallCardTextContainer}>
                <span className={styles.circularIconContainer}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 1.33325C13.0992 1.33325 10.2635 2.19344 7.85162 3.80503C5.4397 5.41662 3.55984 7.70724 2.44975 10.3872C1.33967 13.0672 1.04922 16.0162 1.61514 18.8612C2.18105 21.7063 3.57792 24.3196 5.62909 26.3708C7.68026 28.422 10.2936 29.8188 13.1387 30.3848C15.9837 30.9507 18.9327 30.6602 21.6127 29.5501C24.2927 28.4401 26.5833 26.5602 28.1949 24.1483C29.8065 21.7364 30.6667 18.9007 30.6667 15.9999C30.6667 12.1101 29.1214 8.37955 26.3709 5.62902C23.6204 2.87849 19.8898 1.33325 16 1.33325ZM16 27.9999C13.6266 27.9999 11.3065 27.2961 9.33314 25.9776C7.35975 24.659 5.82168 22.7848 4.91343 20.5921C4.00518 18.3994 3.76754 15.9866 4.23056 13.6588C4.69359 11.3311 5.83647 9.19287 7.5147 7.51464C9.19293 5.83641 11.3311 4.69352 13.6589 4.23049C15.9867 3.76747 18.3995 4.00511 20.5922 4.91336C22.7849 5.82162 24.659 7.35969 25.9776 9.33308C27.2962 11.3065 28 13.6265 28 15.9999C28 19.1825 26.7357 22.2348 24.4853 24.4852C22.2348 26.7356 19.1826 27.9999 16 27.9999ZM18.6667 9.33325V7.99992C18.6667 7.6463 18.5262 7.30716 18.2761 7.05711C18.0261 6.80706 17.6869 6.66658 17.3333 6.66658C16.9797 6.66658 16.6406 6.80706 16.3905 7.05711C16.1405 7.30716 16 7.6463 16 7.99992V9.33325H14.6667V7.99992C14.6667 7.6463 14.5262 7.30716 14.2761 7.05711C14.0261 6.80706 13.6869 6.66658 13.3333 6.66658C12.9797 6.66658 12.6406 6.80706 12.3905 7.05711C12.1405 7.30716 12 7.6463 12 7.99992V9.33325H10.6667C10.313 9.33325 9.97389 9.47373 9.72384 9.72378C9.4738 9.97382 9.33332 10.313 9.33332 10.6666C9.33332 11.0202 9.4738 11.3593 9.72384 11.6094C9.97389 11.8594 10.313 11.9999 10.6667 11.9999H12V19.9999H10.6667C10.313 19.9999 9.97389 20.1404 9.72384 20.3904C9.4738 20.6405 9.33332 20.9796 9.33332 21.3333C9.33332 21.6869 9.4738 22.026 9.72384 22.2761C9.97389 22.5261 10.313 22.6666 10.6667 22.6666H12V23.9999C12 24.3535 12.1405 24.6927 12.3905 24.9427C12.6406 25.1928 12.9797 25.3333 13.3333 25.3333C13.6869 25.3333 14.0261 25.1928 14.2761 24.9427C14.5262 24.6927 14.6667 24.3535 14.6667 23.9999V22.6666H16V23.9999C16 24.3535 16.1405 24.6927 16.3905 24.9427C16.6406 25.1928 16.9797 25.3333 17.3333 25.3333C17.6869 25.3333 18.0261 25.1928 18.2761 24.9427C18.5262 24.6927 18.6667 24.3535 18.6667 23.9999V22.6666C19.7275 22.6666 20.7449 22.2452 21.4951 21.495C22.2452 20.7449 22.6667 19.7274 22.6667 18.6666C22.6644 17.6816 22.2989 16.7321 21.64 15.9999C22.2989 15.2678 22.6644 14.3182 22.6667 13.3333C22.6667 12.2724 22.2452 11.255 21.4951 10.5048C20.7449 9.75468 19.7275 9.33325 18.6667 9.33325ZM18.6667 19.9999H14.6667V17.3333H18.6667C19.0203 17.3333 19.3594 17.4737 19.6095 17.7238C19.8595 17.9738 20 18.313 20 18.6666C20 19.0202 19.8595 19.3593 19.6095 19.6094C19.3594 19.8594 19.0203 19.9999 18.6667 19.9999ZM18.6667 14.6666H14.6667V11.9999H18.6667C19.0203 11.9999 19.3594 12.1404 19.6095 12.3904C19.8595 12.6405 20 12.9796 20 13.3333C20 13.6869 19.8595 14.026 19.6095 14.2761C19.3594 14.5261 19.0203 14.6666 18.6667 14.6666Z" fill="#022173"/>
                  </svg>
                </span>

                <h3 className={styles.smallCardTitle}>
                  Bitcoin
                </h3>
                <p className={styles.smallCardSubtitle}>
                  Gasta Bitcoin con tarifas mínimas.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section Centered One - Three Feature Cards */}
      <section className={styles.featureSection}>
        <video
          className={styles.featureVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/argentina_page_waves.mp4" type="video/mp4" />
        </video>

        <div className={styles.featureSectionContent}>
          {/* Title and Subtitle */}
          <div className={styles.featureSectionText}>
            <h1 className={styles.argentinaTitle}>
              Más que una Billetera
            </h1>
            <p className={styles.argentinaSubtitle}>
              AQUA es la Superapp de Bitcoin que te da acceso a todo
            </p>
            <div style={{marginTop: '20px'}}>
              <button onClick={() => router.push('/features')}>Descubrí más</button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className={styles.featureCardsContainer}>
            <article className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M22.6667 30.6666H9.33333C7.06666 30.6666 5.33333 28.9333 5.33333 26.6666V5.33325C5.33333 3.06659 7.06666 1.33325 9.33333 1.33325H22.6667C24.9333 1.33325 26.6667 3.06659 26.6667 5.33325V26.6666C26.6667 28.9333 24.9333 30.6666 22.6667 30.6666ZM9.33333 3.99992C8.53333 3.99992 7.99999 4.53325 7.99999 5.33325V26.6666C7.99999 27.4666 8.53333 27.9999 9.33333 27.9999H22.6667C23.4667 27.9999 24 27.4666 24 26.6666V5.33325C24 4.53325 23.4667 3.99992 22.6667 3.99992H9.33333ZM16 25.3333C15.2 25.3333 14.6667 24.7999 14.6667 23.9999C14.6667 23.1999 15.2 22.6666 16 22.6666C16.8 22.6666 17.3333 23.1999 17.3333 23.9999C17.3333 24.7999 16.8 25.3333 16 25.3333Z" fill="#022173"/>
                </svg>
              </div>

              <div className={styles.featureCardText}>
                <h5 className={styles.featureCardHeading}>Diseño Fácil de Usar</h5>
                <p className={styles.featureCardDescription}>
                  Manejá tu Bitcoin con una interfaz limpia e intuitiva. Nunca fue tan fácil comprar, vender o enviar Bitcoin.
                </p>
              </div>
            </article>

            <article className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M14.6667 30.6666C14.5333 30.6666 14.2667 30.6666 14.1333 30.5333C13.6 30.2666 13.3333 29.7333 13.3333 29.1999L14.5333 20H3.99999C3.46666 20 3.06666 19.7333 2.79999 19.2C2.53332 18.6666 2.66666 18.1333 2.93332 17.7333L16.2667 1.73328C16.6667 1.33328 17.3333 1.19995 17.8667 1.46662C18.4 1.73328 18.6667 2.26662 18.6667 2.79995L17.4667 12H28C28.5333 12 28.9333 12.2666 29.2 12.8C29.4667 13.3333 29.3333 13.8666 29.0667 14.2666L15.7333 30.2666C15.4667 30.5333 15.0667 30.6666 14.6667 30.6666ZM6.79999 17.3333H16C16.4 17.3333 16.8 17.4666 16.9333 17.7333C17.2 18 17.3333 18.4 17.2 18.8L16.4 24.9333L24.9333 14.6666H16C15.6 14.6666 15.2 14.5333 15.0667 14.2666C14.8 14 14.6667 13.5999 14.8 13.2L15.6 7.06662L6.79999 17.3333Z" fill="#022173"/>
                </svg>
              </div>

              <div className={styles.featureCardText}>
                <h5 className={styles.featureCardHeading}>Pagos Rápidos y Baratos.</h5>
                <p className={styles.featureCardDescription}>
                  Realizá transferencias de Bitcoin de forma ágil y con comisiones bajas. Ideal para envíos entre
                </p>
              </div>
            </article>

            <article className={styles.featureCard}>
                  <div className={styles.featureIconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M22.1338 17.333C26 17.333 25.8666 17.3334 26.2666 17.7334C26.4975 17.9643 26.667 18.3313 26.667 18.667C26.6669 19.0374 26.5254 19.3407 26.2666 19.5996L16.9336 28.9336C16.6669 29.2003 16.4 29.333 16 29.333C15.6 29.333 15.3331 29.2003 15.0664 28.9336C14.5331 28.4003 14.5331 27.5997 15.0664 27.0664L22.1338 20H6.66699C5.8671 20 5.33315 19.4668 5.33301 18.667C5.33301 17.867 5.86699 17.333 6.66699 17.333H22.1338ZM16 2.66699C16.4 2.66699 16.6669 2.79974 16.9336 3.06641C17.4669 3.59974 17.4669 4.40026 16.9336 4.93359L9.86621 12H25.333C26.1329 12 26.6668 12.5332 26.667 13.333C26.667 14.133 26.133 14.667 25.333 14.667H9.86621C6.00002 14.667 6.13338 14.6666 5.7334 14.2666C5.50246 14.0357 5.33301 13.6687 5.33301 13.333C5.33309 12.9626 5.4746 12.6593 5.7334 12.4004L15.0664 3.06641C15.3331 2.79974 15.6 2.66699 16 2.66699Z" fill="#022173"/>
                  </svg>
              </div>

              <div className={styles.featureCardText}>
                <h5 className={styles.featureCardHeading}>Cambios Sin Esfuerzo</h5>
                <p className={styles.featureCardDescription}>
                  Cambiá Bitcoin por USDt (y viceversa) sobre la marcha, directamente en la app.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
