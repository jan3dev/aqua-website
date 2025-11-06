"use client"
import { useEffect } from "react";
import Image from "next/image";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="aqua-download-modal"
      style={{ display: "flex" }}
      onClick={onClose}
    >
      <div
        className="aqua-download-modal-card"
        data-aqua-modal
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aqua-download-modal-card-header">
          <p className="text-subtitle">
            Install AQUA Now
          </p>
          <a
            href="#"
            className="aqua-close-modal"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0242 14.5C12.7242 14.5 12.5242 14.4 12.3242 14.2L7.02417 8.9L1.72417 14.2C1.32417 14.6 0.72417 14.6 0.32417 14.2C-0.0758301 13.8 -0.0758301 13.2 0.32417 12.8L5.62417 7.5L0.32417 2.2C-0.0758301 1.8 -0.0758301 1.2 0.32417 0.8C0.72417 0.4 1.32417 0.4 1.72417 0.8L7.02417 6.1L12.3242 0.8C12.7242 0.4 13.3242 0.4 13.7242 0.8C14.1242 1.2 14.1242 1.8 13.7242 2.2L8.42417 7.5L13.7242 12.8C14.1242 13.2 14.1242 13.8 13.7242 14.2C13.5242 14.4 13.3242 14.5 13.0242 14.5Z"
                fill="#022173"
              />
            </svg>
          </a>
        </div>
        <div className="aqua-download-modal-card-buttons">
          <span>
            <a
              href="https://play.google.com/store/apps/details?id=io.aquawallet.android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/buttons/playStore.png"
                alt="Google Play button"
                width={200}
                height={60}
              />
            </a>
          </span>
          <span>
            <a
              href="https://apps.apple.com/us/app/aqua-wallet/id6468594241"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/buttons/app-store-button.png"
                alt="Apple App Store button"
                width={200}
                height={60}
              />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/AquaWallet/aqua-wallet/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/buttons/aqua-apk-button.png"
                alt="APK button"
                width={200}
                height={59}
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
