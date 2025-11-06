"use client"
import Image from "next/image";
import DownloadQR from "@/components/downloadQR";
import DownloadRedirect from "@/components/downloadRedirect";

export default function DownloadPage() {
  return (
    <>
      <DownloadRedirect />
    <section className="section-standard aqua-hero primary-inverse download-section with-video-bg">
      <div className="section-content">
        <div className="section-text">
          <h3 className="section-title">
            DOWNLOAD AQUA WALLET TODAY!
          </h3>
          <p className="text-subtitle font-semi-bold aqua-download-description">
            A secure and easy-to-use Bitcoin wallet that lets you buy, store, and spend Bitcoin anytime, anywhere. Take control of your money with privacy and simplicity. Available on the{" "}
            <a
              href="https://play.google.com/store/apps/details?id=io.aquawallet.android"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play Store
            </a>
            ,{" "}
            <a
              href="https://apps.apple.com/us/app/aqua-wallet/id6468594241"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>
            , and as a direct{" "}
            <a
              href="https://github.com/AquaWallet/aqua-wallet/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android APK download
            </a>
            .
          </p>
          <DownloadQR />
        </div>
        <div className="section-media">
          <Image
            className="main-image"
            src="/assets/images/aqua-hero-phone.png"
            alt="AQUA app home screen"
            width={500}
            height={900}
          />
        </div>
      </div>
      <div className="section-background-container">
        <video autoPlay muted loop className="section-background-media">
          <source src="/assets/videos/underwater-aqua-blue-website-video.mp4" type="video/mp4" />
        </video>
        <Image
          src="/assets/images/aqua-hero-phone.png"
          className="section-background-media fallback-background"
          alt="Fallback Image for Video Background"
          width={500}
          height={900}
          style={{ display: 'none' }}
        />
      </div>
    </section>
    </>
  );
}
