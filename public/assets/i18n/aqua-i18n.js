(function (window, document) {
  /** @const {string} Default language code fallback */
  const defaultLanguage = "en-US";

  /** @type {string} Currently selected language code */
  let selectedLanguage = defaultLanguage;

  init();

  /**
   * Initialize the i18n library:
   * - Set up localization menus
   * - Determine initial language
   * - Load translations
   */
  function init() {
    initLocalizationMenus();
    selectedLanguage = deriveLanguageCode();
    translate(selectedLanguage);
  }

  /**
   * Find all localization menus on the page and
   * attach event handlers for toggling visibility
   * and selecting languages.
   */
  function initLocalizationMenus() {
    const localizationMenus = document.querySelectorAll("[data-localization-menu]");
    if (localizationMenus.length === 0) {
      console.warn("No localization menus found.");
      return;
    }
    localizationMenus.forEach((menu) => {
      setClickHandlersForMenuVisibility(menu);
      setClickHandlersForLanguages(menu);
    });
  }

  /**
   * Attach click handler to menu toggle button to show/hide the menu.
   * @param {HTMLElement} menu The localization menu element
   */
  function setClickHandlersForMenuVisibility(menu) {
    const cssTransitionDurationMs = 200;
    const menuContainer = menu.closest("[data-menu-container]");
    if (!menuContainer) {
      console.warn("No menu container found for menu: ", menu);
      return;
    }
    const menuButton = menuContainer.querySelector("[data-localization-button]");
    if (!menuButton) {
      console.warn("No menu button found for menu: ", menu);
      return;
    }

    menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (menu.classList.contains("on")) {
        menu.classList.remove("on");
        setTimeout(() => {
          menu.style.visibility = "hidden";
          menu.style.pointerEvents = "none";
        }, cssTransitionDurationMs);
      } else {
        menu.style.visibility = "visible";
        menu.style.pointerEvents = "auto";
        menu.classList.add("on");
      }
    });
  }

  /**
   * Attach click handlers to language list items that
   * update the language selection and reload translations.
   * @param {HTMLElement} menu The localization menu element
   */
  function setClickHandlersForLanguages(menu) {
    const languages = menu.querySelectorAll("li");
    if (languages.length === 0) {
      console.warn("No language choices available in menu ", menu);
    }
    languages.forEach((language) => {
      language.addEventListener("click", (e) => {
        const newLanguage = ensureFourLetterLocale(language.dataset.lang);
        setLanguage(newLanguage);
        translate(newLanguage);
      });
    });
  }

  /**
   * Determine the language code to use on page load or refresh
   * by checking URL parameter, localStorage, then browser settings.
   * @returns {string} Language code normalized to 4-letter locale (e.g. "en-US")
   */
  function deriveLanguageCode() {
    const cached = localStorage.getItem("language");
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    const browserLang = navigator.language;
    const langCode = ensureFourLetterLocale(urlLang || cached || browserLang || "en-US");
    return langCode;
  }

  /**
   * Normalize language codes to 4-letter locale format,
   * e.g. 'en' -> 'en-US', using a fallback map.
   * @param {string} langCode Raw language code input
   * @returns {string} Normalized 4-letter locale code
   */
  function ensureFourLetterLocale(langCode) {
    const fallbackLangMap = {
      en: "en-US",
      fr: "fr-FR",
      es: "es-ES",
    };

    if (langCode.length === 2) {
      return fallbackLangMap[langCode.toLowerCase()] || "en-US";
    }

    return langCode;
  }

  /**
   * Fetch translation JSON file for the specified language,
   * then apply translations to all elements with data-translate-key.
   * Updates the language state only after successful fetch.
   * @param {string} langCode Language code to load translations for
   * @returns {Promise<void>}
   */
  async function translate(langCode) {
    langCode = langCode || selectedLanguage || defaultLanguage;
    const filePath = `/assets/i18n/locales/${langCode}.json`;

    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error(`Failed to load ${filePath}`);
      const crowdinArray = await response.json();
      setLanguage(langCode);

      // Convert Crowdin array to key-value map
      const translations = {};
      for (const item of crowdinArray) {
        translations[item.identifier.toLowerCase()] = item.translation;
      }

      // Apply translations to all elements with data-translate-key
      const elements = document.querySelectorAll("[data-translate-key]");
      elements.forEach((el) => {
        const key = el.getAttribute("data-translate-key").toLowerCase();
        if (key && translations[key]) {
          el.innerHTML = sanitizeTranslation(translations[key]);
        } else {
          console.warn(`Missing translation for key: "${key}"`);
        }
      });
    } catch (error) {
      console.error("Translation error:", error);
    }
  }

  /**
   * Sanitize HTML from translation strings by allowing
   * only certain tags and attributes, stripping everything else.
   * @param {string} htmlString HTML string to sanitize
   * @returns {string} Sanitized HTML string
   */
  function sanitizeTranslation(htmlString) {
    if (!htmlString) return "";

    // Create a temporary container element
    const container = document.createElement("div");
    container.innerHTML = htmlString;

    const allowedTags = ["A", "B", "I", "STRONG", "EM", "U"];
    const allowedAttributes = {
      A: ["href", "title", "target", "rel"],
    };

    /**
     * Recursively clean nodes in the DOM tree
     * @param {Node} node
     */
    function clean(node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (!allowedTags.includes(node.tagName.toUpperCase())) {
          const parent = node.parentNode;
          if (parent) {
            while (node.firstChild) {
              parent.insertBefore(node.firstChild, node);
            }
            parent.removeChild(node);
          }
          return;
        }
        [...node.attributes].forEach((attr) => {
          const allowedForTag = allowedAttributes[node.tagName.toUpperCase()] || [];
          if (!allowedForTag.includes(attr.name.toLowerCase())) {
            node.removeAttribute(attr.name);
          }
        });
      }
      [...node.childNodes].forEach(clean);
    }

    clean(container);

    return container.innerHTML;
  }

  /**
   * Set the current language in localStorage and update
   * the URL parameter accordingly. Also updates the internal
   * selectedLanguage variable.
   * @param {string} languageCode Language code to set
   */
  function setLanguage(languageCode) {
    const fourLetterLangcode = ensureFourLetterLocale(languageCode);
    localStorage.setItem("language", fourLetterLangcode);
    const url = new URL(window.location.href);
    url.searchParams.delete("lang");
    if (fourLetterLangcode !== "en-US") {
      url.searchParams.set("lang", fourLetterLangcode);
    }
    window.history.replaceState(null, null, url.href);
    selectedLanguage = fourLetterLangcode;
  }

  /**
   * Check if a given language code is a right-to-left (RTL) language.
   * @param {string} langCode Language code to check (e.g. "ar", "en-US")
   * @returns {boolean} True if the language is RTL, false otherwise
   */
  function isRtl(langCode) {
    const rtlLangCodes = ["ar", "az", "dv", "he", "ku", "fa", "ur"];
    const prefix = langCode.split("-")[0];
    return rtlLangCodes.includes(prefix);
  }
})(window, document);
