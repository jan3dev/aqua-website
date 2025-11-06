"use client"
import { useEffect } from "react";

export default function PrivacyPage() {
  useEffect(() => {
    document.body.classList.add("aqua-bare");
    document.body.classList.add("hide-header-footer");
    return () => {
      document.body.classList.remove("aqua-bare");
      document.body.classList.remove("hide-header-footer");
    };
  }, []);

  return (
    <div className="aqua-terms-of-use">
      <h2 className="aqua-section-title">AQUA Wallet Privacy Policy</h2>

      <div>
        <p><strong>Last updated September 2, 2024</strong></p>

        <p>
          This Privacy Policy constitutes a part of the AQUA Wallet ("AQUA") Terms of Service (the "TOS"). The terms used in this Privacy Policy shall have the same meaning as in the TOS, except as otherwise stated herein.
        </p>

        <p>
          This Privacy Policy explains how AQUA collects, uses, processes, discloses, shares, transfers, and protects personal information obtained through the use of its services ("Services"). The terms "we," "us," and, "our" refer to AQUA, never to third-party service providers.
        </p>

        <p>
          Please carefully read the full content of this Privacy Policy. When using our Services, and using our websites, mobile applications, APIs, unhosted Bitcoin wallet services, integrations, and other online products and services (collectively referred to as the "Services"), regardless of whether or not you register for or log in the Services, you acknowledge, understand, and consent to all articles described in this Privacy Policy. We will not use your personal information for any purpose not covered in this Privacy Policy or the TOS, without prior notification to you and your consent.
        </p>

        <p>
          AQUA's objective is to protect all information about its users and allow them to feel safe when they use our Services with the utmost levels of privacy possible.
        </p>

        <p><strong>INFORMATION WE COLLECT</strong></p>

        <p>
          We only collect information that you provide directly to us. As such, we only collect information when you request customer support or otherwise choose to communicate with us. The types of information that may be collected through these support interactions may include your email address, Bitcoin addresses, transaction IDs, swap IDs, or any other information you willingly provide.
        </p>

        <p>Our Services do not require in any way that you provide any of this information to us.</p>

        <p>When you access or use our Services, we may receive information, which includes:</p>

        <p>
          <strong>Device Information:</strong> App Stores may collect information about the mobile device you use to access our mobile application, including the hardware model, operating system and version, unique device identifiers and mobile network information.
        </p>

        <p>
          <strong>Crash Reports:</strong> App Stores may also receive crash reports from our mobile applications which would contain, for example, operating system and app version information, system stack traces, and other technical diagnostic information.
        </p>

        <p><strong>INFORMATION COLLECTED BY THIRD PARTIES</strong></p>

        <p>
          Our Services and support channels are integrated with several third-party services. We are not responsible for the data protection, privacy policies, or any practices related to the collection, use, storage and processing of information carried out by any third-party service providers, hence we will also not be liable for any loss or damage caused by the handling of information by third-party services.
        </p>

        <p>
          Any third-party services may collect information as determined by their own privacy policies. In order to comply with global industry regulatory standards, specific local regulations, or government mandates, third-party service providers may adhere to Anti-Money Laundering (AML), Know-Your-Client (KYC), and Counter-Terrorist Financing (CTF) practices that require them to collect information from AQUA users. Third-party service providers are solely responsible for explaining to you the content and requirements of such personal information each time these entities request information.
        </p>

        <p>
          Information collected by AQUA is limited to the items outlined in this Privacy Policy, as such when choosing to use Services provided by third parties, you do so accepting the terms of service and privacy policies enforced by each third-party service provider.
        </p>

        <p>AQUA Wallet does not collect, process, or store any personal information or documents.</p>

        <p><strong>HOW WE SHARE INFORMATION</strong></p>

        <p>We may share information about you as follows or as otherwise described in this Privacy Policy:</p>

        <ul>
          <li>With the Bitcoin Network and Liquid Network, AQUA will send your public wallet address and any transaction details to facilitate any transaction request you submit via the Services;</li>
          <li>With vendors and service providers who need access to such information to carry out their functions. It is our practice to request such parties to handle the information in a manner consistent with our policies;</li>
          <li>In response to a request for information if we believe disclosure is in accordance with, or as otherwise required by, any applicable law, regulation or legal process;</li>
          <li>In connection with, or during negotiations of, any merger, sale of our assets, financing or acquisition of all or a portion of our business to another company;</li>
          <li>With your consent or at your direction, including if we notify you through our Services that the information you provide will be shared in a particular manner and you provide such information.</li>
        </ul>

        <p><strong>CHANGES TO OUR PRIVACY POLICY</strong></p>

        <p>
          From time to time, AQUA may revise this Privacy Policy to reflect changes in Law or our personal-data collection, processing, and use practices. Changes to this Privacy Policy will be announced by posting on our platforms and/or by a direct communication from us to you. You shall regularly review the Privacy Policy and pay attention to its revisions. If you do not agree with the revised content, you shall stop using our Services immediately. When an updated version of the Privacy Policy is released, your continued access to and use of the Services means that you agree to the updated content and agree to abide by the updated Privacy Policy.
        </p>
      </div>
    </div>
  );
}
