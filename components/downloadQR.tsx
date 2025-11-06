import Image from "next/image";

export default function DownloadQR() {
  return (
    <div className="aqua-download-qr-container">
      <div className="aqua-download-qr-header">
        <svg
          width="18"
          height="18"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6673 30.6673H9.33398C7.06732 30.6673 5.33398 28.934 5.33398 26.6673V5.33398C5.33398 3.06732 7.06732 1.33398 9.33398 1.33398H22.6673C24.934 1.33398 26.6673 3.06732 26.6673 5.33398V26.6673C26.6673 28.934 24.934 30.6673 22.6673 30.6673ZM9.33398 4.00065C8.53398 4.00065 8.00065 4.53398 8.00065 5.33398V26.6673C8.00065 27.4673 8.53398 28.0006 9.33398 28.0006H22.6673C23.4673 28.0006 24.0006 27.4673 24.0006 26.6673V5.33398C24.0006 4.53398 23.4673 4.00065 22.6673 4.00065H9.33398ZM16.0007 25.334C15.2007 25.334 14.6673 24.8006 14.6673 24.0006C14.6673 23.2006 15.2007 22.6673 16.0007 22.6673C16.8007 22.6673 17.334 23.2006 17.334 24.0006C17.334 24.8006 16.8007 25.334 16.0007 25.334Z"
            fill="#022173"
          />
        </svg>
        <p className="text-caption">
          Scan to download
        </p>
      </div>
      <div className="aqua-download-qr-img-container">
        <Image
          className="aqua-download-qr-img"
          src="/assets/images/aqua-download-qr.png"
          alt="Aqua download QR code"
          width={175}
          height={175}
        />
      </div>
    </div>
  );
}
