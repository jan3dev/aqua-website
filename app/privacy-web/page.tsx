"use client"
import { useEffect } from "react";

export default function PrivacyWebPage() {
  useEffect(() => {
    document.body.classList.add("aqua-bare");
    document.body.classList.add("custom-bare-web-page");
    return () => {
      document.body.classList.remove("aqua-bare");
      document.body.classList.remove("custom-bare-web-page");
    };
  }, []);

  return (
    <div className="custom-bare-web-container">
      <main className="custom-bare-web-main">
        <div className="aqua-terms-of-use">
          <h2 className="aqua-section-title">AQUA Website Privacy Policy</h2>

          <div>
            <p><strong>Last updated April 15, 2024</strong></p>

            <p>
              At <a href="https://aqua.net">aqua.net</a>, JAN3 is committed to protecting the privacy and confidentiality of any personal data we collect when you use our sites. This Privacy Policy describes the ways we collect information from and about you, and what we do with the information, so that you may decide whether or not to provide information to us. By accessing or using the website, you agree to be bound by the terms and conditions described in this document and also by any terms and conditions incorporated by reference. The following Privacy Policy pertains only to <a href="https://aqua.net">aqua.net</a> website ("Website"), and as such it is not applicable to AQUA Wallet software, which is governed by its own terms and privacy policy.
            </p>

            <p><strong>1. SCOPE AND DEFINITIONS</strong></p>

            <p>This Privacy Policy applies to all information (including personal information) collected through our website.</p>

            <p>"Visitor" includes anyone using the Website, whether viewing pages or uploading/downloading information directly from those sites using some other means.</p>

            <p>"Personal information" means information that identifies you personally, either alone or in combination with other information available to us.</p>

            <p><strong>2. WHAT INFORMATION DO WE COLLECT?</strong></p>

            <p><strong>Active Collection of Information</strong></p>

            <p>We may collect certain information that you voluntarily provide to us which may contain personal information. For example, if you opt in to receiving communications from AQUA or JAN3 via email, we may collect your name and email address. We retain this information until you ask to be unsubscribed from our list(s). We do not sell or otherwise transmit any such actively-collected personal information to third parties other than to third party service providers discussed in this section.</p>

            <p><strong>Passive Collection of Information</strong></p>

            <p>When you visit our sites, some information about your visit is automatically collected. This information includes your IP address, access times, browser type and language, and referring website addresses. We collect this information to troubleshoot technical issues, understand how visitors use our website, provide an experience relevant to the general location associated with your IP address, and to make improvements to our website.</p>

            <p>We may place a cookie on your hard drive during the web visit to help us identify the number of unique visitors to our website, whether or not those visitors are repeat visitors, and the source of the visits. If you do not want this information to be collected, you may disable cookies in your web browser.</p>

            <p>Additionally, we may use third-party analytics services to collect and analyze data automatically collected from site users; the type and nature of those services may change without notice. Data collected this way is governed by the terms and conditions of those third party services.</p>

            <p><strong>Links to non-JAN3 Websites</strong></p>

            <p>Some projects, tools, forums, or other publicly-available resources associated with AQUA may be hosted on third-party websites. Additionally, we may provide links to third-party websites for informational purposes. The privacy practices of those sites may differ from our practices, are not controlled by JAN3, and are not covered by this Privacy Policy. We do not make any representations about third-party websites. We encourage you to review their privacy policies before submitting your personal data to such sites.</p>

            <p><strong>Sensitive Information</strong></p>

            <p>We will not intentionally collect or maintain, and do not want you to provide, any information regarding sensitive personal information.</p>

            <p>Our services are not designed for or directed to children under the age of 13, and we will not intentionally collect or maintain information about anyone under the age of 13. If a child under 13 submits Personal Information to JAN3 and we learn that the Personal Information is the information of a child under 13, we will attempt to delete the information as soon as possible. If you believe that we might have any Personal Data from a child under 13, please contact us at contact@jan3.com.</p>

            <p><strong>3. WHAT DO WE USE THIS INFORMATION FOR?</strong></p>

            <p>We use web visit information to measure interest in and develop our web pages and marketing plans, customize the content you view on your web visits based on your activity on past visits, diagnose technical problems, and to generally administer our website.</p>

            <p>Any information actively collected, such as names and email addresses, will be used to provide you with information regarding AQUA, should you choose to sign up for our mailing list.</p>

            <p><strong>4. SECURITY OF YOUR INFORMATION</strong></p>

            <p>We use various security measures to protect your personal information (including preventing the loss, misuse, unauthorized access, disclosure, alteration and destruction of your personal information). We store information you provide to us on a computer system located in a controlled facility with limited access, and require the same of any third-party we work with. However, we cannot guarantee the absolute security and safety of your Personal Information.</p>

            <p><strong>5. INQUIRIES OR COMPLAINTS</strong></p>

            <p>If you have a question or complaint about this Privacy Policy or our information collection practices, please contact us at contact@jan3.com.</p>

            <p><strong>6. WHAT RIGHTS YOU HAVE OVER YOUR DATA</strong></p>

            <p>We may change this Privacy Policy from time to time. If we make a material modification that diminishes the protections afforded to visitors to our website then we will place a notification on our website, post the updated Privacy Policy and change the effective date. If we have collected your email address, we will also notify you by email. Any use of our website after the posted effective date is subject to the updated Privacy Policy.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
