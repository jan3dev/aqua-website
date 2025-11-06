"use client"
import { useEffect } from "react";

export default function TermsPage() {
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
      <h2 className="aqua-section-title">AQUA Wallet Terms of Service</h2>

      <div>
        <p><strong>Last updated April 17, 2025</strong></p>

        <p>
          AQUA Wallet software is still in beta, as such it may contain certain bugs or defects. You are advised to safeguard important data and your assets with utmost caution. Do not rely in any way on the correct functioning or performance of the AQUA beta or accompanying materials for the transfer of funds. By installing this AQUA beta, you agree to use it at your own risk and thus accept JAN3 LLC or its related companies will not be liable for any losses or damages derived from the malfunctioning of the AQUA beta.
        </p>

        <p>
          AQUA is a non-custodial Bitcoin and Layer 2 wallet that allows users to send and receive USDt, Bitcoin, and Liquid digital assets. AQUA is easy-to-use and provides many integrations that enable peer-to-peer swaps along with multiple on and off-ramp options.
        </p>

        <p>
          These Terms of Service will be the base of our relationship with you, but in case you want or need more information we recommend you to check our AQUA FAQs and ask questions on AQUA's official Telegram and support channels to get more information.
        </p>

        <p>
          Please read this terms of services contract (the "Agreement") between you and JAN3 LLC, a company registered and incorporated under the laws of Prospera ZEDE, in The Republic of Honduras, under the corporate registration number 86588576351549, and whose registered office is at Beta Building, Oficina 6, St. John's Bay, Prospera ZEDE - Roatan, Islas de Bahia, Republic of Honduras, 34101, and a wholly-owned, indirect subsidiary of JAN3 GLOBAL INC. References in this Agreement to "you" and "your" are to the person with whom AQUA enters into this Agreement.
        </p>

        <p>
          By clicking on "I agree" or similar terms when creating a Wallet (as defined below) downloaded from aqua.net or any application store supported by AQUA, as well as any associated integrations, websites, APIs, or mobile applications supported by it (collectively, the "Services"), or by proceeding with a download or update for a AQUA when offered a choice of proceeding or not, you are agreeing to be bound by the terms of service found in this Agreement, which is considered a binding contract. You represent and warrant that you have the power and capacity to enter into this Agreement, and that you have understood all the terms described herein, agreeing to all of them. Any person wishing to obtain an account or use the Services must be of legal age in accordance with the applicable legislation, with legal capacity to contract, must provide the information required to provide the Services and must declare to have read, understood and accepted the present Terms of Service, as well as our Privacy Policy. You also confirm that you are legally permitted to use the services in your jurisdiction and that the company is not liable for your compliance with such applicable laws.
        </p>

        <p>
          By agreeing and using our Services, you also consent to the collection, use, disclosure and other handling of information as described in our Privacy Policy. If you do not agree to the Terms, then you may not access or use the Services, as these terms set forth the legally binding terms and conditions that govern your use of the Services.
        </p>

        <p><strong>1. AQUA SERVICES</strong></p>

        <p>
          The AQUA Services enable you to create one or more single-signature, hierarchical deterministic (HD), non-custodial cryptocurrency wallets for certain supported digital assets, known as the AQUA wallet ("Wallet") and to use the Wallet to store, send, request and receive supported digital assets.
        </p>

        <p>
          Our Services are intended for use by persons who are knowledgeable about cryptocurrency generally and HD non-custodial wallets in particular. If you use our Services, you represent that you qualify as such a person.
        </p>

        <p>
          Subject to the Agreement, we grant you a limited license to reproduce portions of AQUA Content solely as required to use the Services for your personal or internal business purposes. Unless otherwise specified in a separate license, your right to use any content and service is subject to these Terms. We are not a bank or financial institution and do not provide investment or financial advice, or consulting services to users of the Services. AQUA is solely the provider of the Services.
        </p>

        <p>
          You must provide all equipment and software necessary to connect to use the Services. You are solely responsible for any fees, including Internet connection or mobile fees, that you incur when accessing or using the Services.
        </p>

        <p><strong>2. SUPPORTED DIGITAL ASSETS</strong></p>

        <p>
          Our Services, included in any Wallet, are for use only with Bitcoin (BTC), assets issued on the Liquid Network sidechain and any other digital assets we may explicitly decide to support in the future at our discretion ("Digital Assets"). We have no obligation to support any digital assets (including but not limited to any forkcoins, altcoins, airdrops or any other digital assets however named) other than Bitcoin, assets on the Liquid Network or any other digital asset we may explicitly decide to support in the future at our discretion. We assume no responsibility or liability in connection with any attempt to use your Wallet for digital assets that we do not support. For this reason, we reserve the right to modify the digital assets supported by AQUA, with previous notification but without taking any responsibility for said changes.
        </p>

        <p><strong>3. RESPONSIBILITY FOR MEANS OF AUTHENTICATION</strong></p>

        <p>
          The Wallet has no independent security protections, rather it is only as secure as the device on which it operates. Thus, a person with physical or network access to that device and the ability to log in to it will have complete and unfettered access to the Wallet. Even in the absence of the ability to log in, in some cases physical access to the device alone may be sufficient to grant such access (absent disk or directory encryption).
        </p>

        <p>
          It is your responsibility to carefully guard physical and network access to the device on which you operate your Wallet, your registered fingerprint recognition, your PINs, password, facial ID, two-factor authentication, as well as any other means the device may provide for you to secure and access the device on which you operate your Wallet; failure to do so may put the Digital Assets you have stored in your Wallet at risk of theft.
        </p>

        <p>We do not store or have access to your registered fingerprint data or any private keys.</p>

        <p>
          It is your responsibility to carefully maintain your fingerprint authentication, PINs, password, facial ID, two-factor authentication, and any other means the device provides for you to secure and access the device on which you operate your Wallet. If you forget or lose your means of authentication, AQUA has no way to recover them for you and you may temporarily or permanently lose access to any Digital Assets you have stored in your Wallet. Additionally, your private keys are maintained in an encrypted secure storage provided by your device's operating system. Thus, access to those keys is dependent on any ability to access secure storage, which is likely to be unavailable if you cannot log in to the device.
        </p>

        <p><strong>4. SEED PHRASES AND CATASTROPHIC IMPACT OF THEIR LOSS OR MISAPPROPRIATION</strong></p>

        <p>
          If you use our Services to create a Wallet, the software will use an algorithm to generate a random 12-word phrase as a seed to a BIP32 hierarchical wallet. This 12-word phrase is called a seed phrase (or mnemonic) and if reproduced exactly stores all the information needed to recover your Wallet if access through fingerprint authentication or any other means the device provides for you is lost or otherwise not available.
        </p>

        <p>
          AQUA does not store, have access to, or have any way or means of recovering your seed phrase. It is your sole responsibility to keep your seed phrase secure. You should not provide it to anyone, including any AQUA representative.
        </p>

        <p>
          However, as stated in Section 3, your AQUA wallet does store the seed phrase (mnemonic) used for your wallet securely on your device. This is stored in the Keychain on iOS devices and in your EncryptedSharedPreferences in Android devices. It is your sole responsibility to protect the device on which you operate your Wallet from unwanted physical and network access; failure to safeguard your registered fingerprint recognition, your PINs, password, facial ID, two-factor authentication, as well as any other means the device may provide for you to secure and access the device may put the Digital Assets you have stored in your Wallet at risk.
        </p>

        <p>
          If you permanently forget or lose your seed phrase, you will NEVER be able to recover any cryptocurrency in your Wallet, and you will suffer a complete, irrecoverable and catastrophic loss of all Digital Assets in your Wallet.
        </p>

        <p>
          It is your responsibility to safeguard and retain your seed phrase. AQUA has no responsibility and will not be liable for any loss or damage you suffer from the loss or misappropriation of your seed phrase.
        </p>

        <p><strong>5. INTELLECTUAL PROPERTY</strong></p>

        <p>
          We grant you a limited, personal, non-transferable, non-exclusive license to access and use the Services as provided to you by AQUA, subject to the terms of this Agreement and solely for approved purposes as permitted by us from time to time, except that we license certain parts of our software under the licenses set out in the source code repositories available here. Any other use of the Services is expressly prohibited and all other rights, titles and interests in the Services are exclusively the property of AQUA and its licensors. "AQUA" and all logos related to the Services or displayed on its Website are trademarks of AQUA or its licensors. You may not copy, imitate or use them without our prior written consent.
        </p>

        <p><strong>6. THIRD PARTY INTEGRATIONS</strong></p>

        <p>
          Our Services support or are integrated with several third-party services. We are not responsible for any third party services and will not be liable for any loss or damage caused by third-party services.
        </p>

        <p>
          In particular, the Wallet provides access to certain third-party services which allow to buy and sell Bitcoin (BTC), Bitcoin on the Liquid sidechain (L-BTC) and other issued assets on the Liquid Network or otherwise supported by the Wallet. This is done solely as a convenience for you. Certain of such services may:
        </p>

        <ul>
          <li>Require you to set up an account at such service prior to accessing it via the Wallet;</li>
          <li>Require you to accept the terms and conditions of the service's provider;</li>
          <li>Collect personal information related to you;</li>
          <li>Require access to your credit or debit cards or bank account;</li>
          <li>Block access to the service based on the geographical location associated with your IP address or location information derived from GPS, mobile antenna or WiFi locations via your device; and,</li>
          <li>Utilize on-device apps which may require access to various information and services on your device.</li>
        </ul>

        <p>
          Neither AQUA, nor any of our third party API providers will ever ask you to share any credential, private key, or other sensitive information with us or them. Do not share any credential, private key, or other sensitive information with any third party without validating their legitimacy.
        </p>

        <p>
          These entities are not affiliated with AQUA, thus AQUA makes no representation as to the pricing provided by such services or their reliability, security or credit standing, the use to which they may put any of your personal information (including transaction history) or your ability to use those services under applicable law, the service's terms and conditions or any geoblocking/geofencing limitations imposed by the service. You should satisfy yourself to all such matters before using any such service or entering into any transaction which assumes current access to such service is available. You also understand and agree that access to third-party API providers may be geographically blocked for residents of certain countries and certain states of the United States. There can be no assurance that any security measures that we or our third-party service providers have implemented will be effective against current or future security threats. While we take steps in an effort to protect the security of our platform and the availability, integrity, confidentiality and security of our data, our security measures or those of our third-party providers could fail and result in unauthorized access to or use of our platform or unauthorized, accidental or unlawful access to, or disclosure, modification, misuse, loss or destruction of our data or our customers' data.
        </p>

        <p>
          AQUA may receive a fee from such services for providing access to the Wallet. Certain of such services may transmit a token so that AQUA may receive referral credit in connection therewith.
        </p>

        <p>
          AQUA also uses prices quoted by one or more cryptocurrency exchanges to provide indicative fiat values for Bitcoin and certain other digital assets. You should understand that these prices are indicative only, may not be current and may not reflect a price at which BTC or other digital assets could actually be transacted. While we strive to provide users with accurate and real-time information on digital asset prices and other relevant market data, we do not guarantee the accuracy of information provided by third party information providers. We strongly recommend users verify any information, including but not limited to pricing information, before relying on information provided by the Wallet for decisions of any kind. The information is provided by and belongs to the individual information providers and we assume no ownership or any liability over any such information. Furthermore, as a condition of using the Services, you agree that we shall assume no liability for any decisions made by you or any other users based on this information.
        </p>

        <p>
          We do not control the terms, policies, or performance of any third party, and are not responsible for any performance, or failure to perform, of any third-party software, websites, or services, including pricing information, exchange rates, processing of transactions, and similar activities. We do not provide customer support for transactions performed on third-party API provider's software, websites, or services. When you leave AQUA services and access the third party's software, their terms of service will govern the transaction.
        </p>

        <p>
          Lastly, AQUA uses several third-party service providers to perform certain kinds of swaps between Digital Assets. Data from these swaps like swap identifiers, secrets to claim refunds for failed payments, among others, are stored locally on your device and are not backed up to any servers. In the event of loss, theft or damage to the device on which this data was originally stored, restoring the Wallet on a different device will not restore this data. If you need to preserve this data for audit purposes or to claim refunds for failed payments, you must back up this data separately by your own means.
        </p>

        <p><strong>7. DEPENDENCY ON BLOCKCHAIN EXPLORERS</strong></p>

        <p>
          AQUA uses the blockchain explorer APIs provided by Blockstream Corporation Inc. or similar services as a data source for balances of BTC and assets held in the Bitcoin blockchain and Liquid Network. If that information is inaccurate, errors may occur in transactions. Additionally, if that API is temporarily or permanently unavailable, the Wallet will not function during the pendency of such unavailability. AQUA makes no representation as to the accuracy or availability of that data and you should satisfy yourself to all such matters before using or continuing to use the Wallet.
        </p>

        <p><strong>8. JAN3 ACCOUNT</strong></p>

        <p>
          Aqua Wallet requires users to create and sign into their JAN3 Account to enable certain features. By using the JAN3 Account, you agree to provide JAN3 with your email address and consent to JAN3's visibility into all activities conducted through your JAN3 Account. This includes, but is not limited to, any actions, transactions, or interactions performed within the account, which JAN3 may monitor, record, or use in accordance with our Privacy Policy and applicable laws. However, this does not grant JAN3 access to funds stored in your self-custody wallet or any transactions performed within that wallet, which remain under your sole control and responsibility.
        </p>

        <p><strong>9. CHANGES TO OR TERMINATION OF OUR SERVICES</strong></p>

        <p>
          We may add or remove functions or features from our Services, as well as restrict the use of some or all Services in certain jurisdictions. You can stop using our Services at any time, and we may stop providing our Services at any time at our discretion.
        </p>

        <p>
          If we stop providing our Services, for whatever reason, we will endeavor to provide advance notice to you. However, we will have no obligation to do so. AQUA has no responsibility and will not be liable for any loss or damage you suffer from the termination of our Services.
        </p>

        <p><strong>10. YOUR COMPLIANCE WITH APPLICABLE LAWS</strong></p>

        <p>
          You represent and warrant that you are using the Services, including any Wallet, in accordance with applicable law, and not for any purpose not in compliance with applicable law, including but not limited to illegal gambling, fraud, money laundering or terrorist activities.
        </p>

        <p><strong>11. DISCLAIMER OF WARRANTIES</strong></p>

        <p>
          All AQUA Services, including any Wallet, are provided on an "as is" and "as available" basis without any representation or warranty of any kind, whether express or implied, to the maximum extent permitted by applicable law. Specifically, we disclaim any implied warranties of title, merchantability, fitness for a particular purpose and/or non-infringement.
        </p>

        <p>
          The "as is" and "as available" condition is especially applicable as long as AQUA software is still in beta as indicated in the present Agreement. As such, you are obligated to safeguard important data and your assets with the utmost care.
        </p>

        <p><strong>12. EXCLUSION AND LIMITATION OF LIABILITY</strong></p>

        <p>
          In no event will AQUA, its directors, officers, employees, suppliers, agents or affiliates be liable for any loss or damages, including without limitation, direct, indirect, special, consequential, exemplary or punitive loss or damages, arising from or related to your use of the Services or the Wallet, including but not limited to loss of or inability to access or transact data, profit, digital assets, or cryptocurrency.
        </p>

        <p>
          Without limiting the generality of the foregoing, AQUA takes no responsibility for and will not be liable for any financial or other loss or damage arising from or related to the use of our Services, including Wallets, including but not limited to any of the following:
        </p>

        <ol>
          <li>Financial loss due to device access being "Brute-forced" and your Wallet compromised as a result.</li>
          <li>Financial loss due to data loss.</li>
          <li>Financial loss due to unavailability of the Blockchain Explorers servers.</li>
          <li>Financial loss due to forgotten seed phrases or device authentication.</li>
          <li>Financial loss due temporary or permanent impossibility of accessing any devices.</li>
          <li>Financial loss due to inability to transact.</li>
          <li>Financial loss due to errors calculating network fees.</li>
          <li>Financial loss due to incorrectly constructed transactions or mistyped Bitcoin addresses.</li>
          <li>AQUA takes no responsibility for, and will not be liable for our Services being unavailable due to technical or other issues beyond our control.</li>
        </ol>

        <p>
          The exclusions and limitations of our liability in this Section 11 are applicable to any obligations that we have under applicable law and regulations, including possible liability for loss or damages resulting from our fraud, gross negligence or willful misconduct.
        </p>

        <p>
          Users are responsible to pay any taxes, duties, and assessments now or hereafter claimed or imposed by any government authority, associated with the use of the Services (including, without limitation, any taxes that may become payable as the result of your ownership, transfer, purchase, or sale of any digital asset).
        </p>

        <p><strong>13. INDEMNIFICATION</strong></p>

        <p>
          You will hold harmless and indemnify AQUA, its directors, officers, employees, suppliers, agents or affiliates from and against any claim, suit or action arising from or related to your use of the Services, including Wallets, or violation of this Agreement, including any liability arising from claims, losses, damages, suits, judgments, litigation costs and attorneys' fees.
        </p>

        <p><strong>14. WHAT THE AQUA SERVICE DOES NOT DO</strong></p>

        <p>We do not exchange digital currency for real currency, funds, or other digital currency.</p>

        <p>We do not issue or put into circulation a digital currency or redeem or withdraw from circulation digital currency.</p>

        <p>
          We do not have access to your Wallet or any digital assets stored in it. Any Digital Assets stored using the Services are not in our control. As explained above, we do not store your registered fingerprint data, PINs, password, facial ID, two-factor authentication, nor have any means of recovering your private keys or seed phrases.
        </p>

        <p>
          AQUA is not a bank, custodian, exchange, financial intermediary or regulated financial institution. AQUA does not have control over or assumes any responsibility for any transactions made through our Services. We do not accept any deposits from, lend to, or generally engage in any kind of banking business or the business of a financial institution, whether in or from within Prospera ZEDE, Honduras or otherwise.
        </p>

        <p>
          Our Services are for supported Digital Assets only. As noted above, any prices displayed are provided by third-party services and are not indicative of the Digital Assets being backed by any commodity or other form of money or having any other tangible value at all. AQUA makes no guarantees that Bitcoin or other Digital Assets can be exchanged or sold at the price displayed.
        </p>

        <p>
          We have no control over and do not make any representations regarding the value of Digital Assets, or the operation of the underlying software protocols which govern the operation of Digital Assets supported on our platform. We assume no responsibility for the operation of the underlying protocols and we are not able to guarantee their functionality, security or availability.
        </p>

        <p><strong>15. INFORMATION ON OUR WEBSITE</strong></p>

        <p>
          The information contained on our website (aquawallet.io) is for general information purposes only. The information is provided by AQUA and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
        </p>

        <p><strong>16. GOVERNING LAW AND DISPUTE RESOLUTION</strong></p>

        <p>
          This agreement and any action related thereto will be governed and interpreted in accordance with the laws of Prospera ZEDE in The Republic of Honduras, without giving effect to any principles that provide for the application of the law of another jurisdiction. The United Nations Convention on contracts for the international sale of goods does not apply to this agreement or its supplemental terms.
        </p>

        <p><strong>17. DATA PROTECTION</strong></p>

        <p>
          AQUA Wallet does not collect, use, store or process any personal information in relation to you or your use of the Services offered by the Wallet. However, when accessing our website (aquawallet.io) or any of our support channels, some information may be stored in accordance with the website's own privacy policy or that of the support channel you are accessing.
        </p>

        <p>
          As outlined in Section 6, AQUA Services support or are integrated with several third-party services. As such we are not responsible for the data protection, privacy policies, or any practices related to the collection, use, storage and processing of information carried out by any third-party service providers. Third-party services and the entities that provide said services are solely responsible for the gathering of information processed by third-party services available on AQUA..
        </p>

        <p>
          For more information on the way in which we may process information about you or provided by you as the user, please refer to our Privacy Policy.
        </p>

        <p><strong>18. SEVERABILITY</strong></p>

        <p>
          If any portion of these Terms is held invalid or unenforceable, that portion will be construed in a manner to reflect, as nearly as possible, the original intention of the parties, and the remaining portions will remain in full force and effect.
        </p>

        <p><strong>19. FORCE MAJEURE</strong></p>

        <p>
          Neither party nor their respective affiliates will be liable for any delay or failure to perform any obligation under this Agreement where the delay or failure results from any cause beyond such party's reasonable control, including but not limited to acts of God, utilities or other telecommunications failures, cyber attacks, earthquake, storms or other elements of nature, pandemics, blockages, embargoes, riots, acts or orders of government, acts of terrorism, or war.
        </p>

        <p><strong>20. LANGUAGE</strong></p>

        <p>
          All communications and notices made or given pursuant to this Agreement must be in the English language. If we provide a translation of the English language version of this Agreement, the English language version of the Agreement will prevail if there is any conflict.
        </p>

        <p><strong>21. CHANGES TO THE TERMS OF SERVICE</strong></p>

        <p>
          As stated in Section 8, AQUA may change or discontinue any or all of its Services or change or remove functionality of any or all of its Services at any given time. We will notify you of any material change to or discontinuation of the Services, whenever possible.
        </p>

        <p>
          We also reserve the right, at our sole discretion, to modify or replace any part of this Agreement (including our Privacy Policy or any other agreement deemed to be part of the Terms of Service) at any time. It is your responsibility to check this Agreement periodically for changes. Your continued use of or access to the Services following the posting of any changes to this Agreement constitutes acceptance of those changes.
        </p>

        <p><strong>22. MISCELLANEOUS</strong></p>

        <p>
          No action or inaction by AQUA will be considered a waiver of any right or obligation by AQUA, or its related companies.
        </p>

        <p>
          This Agreement may be amended by AQUA by providing you advance notice of any proposed change. If you do not agree to the amended agreement then your sole remedy will be to stop using the Services and Wallet.
        </p>

        <p>You may not assign this Agreement. AQUA may assign this Agreement.</p>

        <p>This Agreement controls the relationship between AQUA and you. It does not create any third party beneficiary rights.</p>

        <p>
          Availability and your use of the Services, any Wallet and the aquawallet.io Website is subject to international export controls, economic sanctions requirements, or any other jurisdictional limitations. You agree that you will comply with those requirements. You are not permitted to use any of the Services if: (1) you are in, under the control of, or a national or resident of Cuba, Iran, North Korea, Sudan, or Syria or any other country subject to United States embargo or UN sanctions (a "Sanctioned Country"), or if you are a person on the U.S. Treasury Department's Specially Designated Nationals List or the U.S. Commerce Department's Denied Persons List, Unverified List or Entity List, (a "Sanctioned Person"); or (2) you intend to supply any Digital Assets in a Wallet to a Sanctioned Country (or a national or resident of a Sanctioned Country) or Sanctioned Person.
        </p>

        <p>
          All provisions of this Agreement which by their nature extend beyond the expiration or termination of this Agreement, will continue to be binding and operate after the termination or expiration of this Agreement. If a particular term of this Agreement is determined to be invalid or not enforceable under any applicable law, this will not affect the validity of any other term. This Agreement (including documents incorporated by reference in it) is the entire agreement between AQUA and you and supersedes any other agreement, representations (or misrepresentations), or understanding, however communicated.
        </p>
      </div>
    </div>
  );
}
