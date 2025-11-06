// GLOBAL
const aquaDownloadModal = document.querySelector("#aqua-download-modal");
const downloadButtons = document.querySelectorAll(".aqua-download-button");
let displayingDownloadModal = false;
let osSupported = false;
const apkURL = "https://github.com/AquaWallet/aqua-wallet/releases";
const testFlightURL = "https://testflight.apple.com/join/a89WWtZW";
const appleStoreURL = "https://apps.apple.com/us/app/aqua-wallet/id6468594241";
const googlePlayURL = "https://play.google.com/store/apps/details?id=io.aquawallet.android";

function closeAquaDownloadModal() {
  aquaDownloadModal.style.display = "none";
  displayingDownloadModal = false;
  return false;
}

function handleAquaDownloadModal() {
  if (!displayingDownloadModal && !osSupported) {
    aquaDownloadModal.style.display = "flex";
    displayingDownloadModal = true;
    return false;
  }
  return true;
}

function scrollToNewsletterAndFocus() {
  const subscribeSection = document.getElementById('newsletter-subscribe-label');
  const subscribeInput = document.querySelector('#jan3-newsletter-form input[type="email"]');
  if (!subscribeSection || !subscribeInput) {
    console.log('No newsletter section avaialble');
  }
  subscribeSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  setTimeout(() => {
    subscribeInput.focus({ preventScroll: true }); // use timeout for focus so scroll can finish first
  }, 750);
}

(function (window, document) {
  const body = document.querySelector("body");
  const headers = document.querySelectorAll("header");
  const burger = document.querySelector("#aqua-header-burger");
  const mobileModal = document.getElementById("aqua-header-mobile-menu");
  const mobileHeader = document.getElementById("aqua-mobile-header");
  const faqs = document.querySelectorAll(".aqua-faq");
  const localizationMenus = document.querySelectorAll("[data-localization-menu");

  // AQUA Init
  window.onload = function () {
    setAquaDownloadButtonURLs();
    startListeners();
    startObservers();
    handleHeaderBackground(); // Make sure scroll state is correct updated on page load
  };

  function startListeners() {
    window.addEventListener("scroll", function () {
      handleHeaderBackground();
    });

    if (burger) {
      burger.addEventListener("click", () => {
        burger.classList.toggle("on");
        mobileModal.classList.toggle("on");
        handleHeaderBackground();
        handleMobileHeaderLogoAndBurger();
      });
    }

    if (faqs) {
      faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
          handleFaqClick(faq);
        });
      });
    }

    // Body click modal closing
    body.addEventListener("click", (e) => {
      handleCloseLocalizationMenus();
      if (e.target.dataset.hasOwnProperty("aquaModal")) {
        return;
      }
      const clickedInsideBurger = e.target.closest("#aqua-header-burger");
      const clickedInsideNavContainer = e.target.closest(".aqua-header-nav-container");
      const clickedInsideHeader = e.target.closest(".aqua-header-container");
      if (
        clickedInsideBurger ||
        clickedInsideNavContainer ||
        clickedInsideHeader
      ) {
        return;
      }
      handleCloseModals();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        handleCloseModals();
        handleCloseLocalizationMenus();
        handleMobileHeaderLogoAndBurger();
      }
    });
  }

  function startObservers() {
    const fadeInOutObserver = new IntersectionObserver(handleFadeInOutInterSection);
    function handleFadeInOutInterSection(entries) {
      observers = {};
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting && !observers[target]) {
          observers[target] = handleFadeInOut.bind(null, target);
          document.addEventListener("scroll", observers[target]);
        } else {
          document.removeEventListener("scroll", observers[target]);
          delete observers[target];
        }
      });
    }
    const fadeInOutTargets = document.querySelectorAll("[data-animate-fade-in-out]");
    fadeInOutTargets.forEach((target) => {
      fadeInOutObserver.observe(target);
    });

    const slideUpOnScrollObserver = new IntersectionObserver(handleSlideUpOnScrollIntersection);
    function handleSlideUpOnScrollIntersection(entries) {
      animatedParents = {};
      entries.forEach((entry) => {
        const parent = entry.target;
        if (entry.isIntersecting && !animatedParents[parent]) {
          animatedParents[parent] = handleSlideUpOnScroll.bind(null, parent);
          document.addEventListener("scroll", animatedParents[parent]);
        } else {
          document.removeEventListener("scroll", animatedParents[parent]);
        }
      });
    }
    const slideUpOnScrollTargets = document.querySelectorAll("[data-animate-slide-up-on-scroll]");
    slideUpOnScrollTargets.forEach((target) => {
      target.style.position = "relative";
      const slideUpFrame = target.closest("[data-animate-slide-up-on-scroll-frame]");
      slideUpOnScrollObserver.observe(slideUpFrame);
    });

    const slideUpOnIntersectParents = document.querySelectorAll("[data-animate-slide-up-on-intersect-frame]");
    slideUpOnIntersectParents.forEach((parent) => {
      parent.style.position = "relative";
      handleSlideUpOnIntersect(parent);
    });
  }

  function handleFadeInOut(target) {
    const targetRect = target.getBoundingClientRect();
    const targetMiddle = targetRect.top + targetRect.height / 2;
    const middleScreen = window.innerHeight / 2;
    const offsetFromMiddle = Math.abs(targetMiddle - middleScreen) / 2;
    const buffer = offsetFromMiddle + targetRect.height / 5;
    target.style.opacity = 1 - buffer / middleScreen;
  }

  function handleSlideUpOnScroll(parent) {
    const targets = parent.querySelectorAll("[data-animate-slide-up-on-scroll]");
    const parentRect = parent.getBoundingClientRect();
    const parentMiddle = parentRect.top + parentRect.height / 2;
    const middleScreen = window.innerHeight / 2;
    const distanceFromMiddle = (parentMiddle - middleScreen) / 2;
    const slidePercent = distanceFromMiddle > 0 ? distanceFromMiddle / parentRect.height : 0;
    targets.forEach((target) => {
      const paddingBottom =
        "animateIgnorePadding" in target.dataset ? parseInt(window.getComputedStyle(parent).paddingBottom) : 0;
      target.style.top = `${(slidePercent * parentRect.height) / 2 + paddingBottom}px`;
    });
  }

  function handleSlideUpOnIntersect(parent) {
    const targets = parent.querySelectorAll("[data-animate-slide-up-on-intersect");

    targets.forEach((target) => {
      target.style.opacity = "0";
      target.style.transform = "translateY(100px)";
      target.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-in";
    });

    const slideUpOnIntersectObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "translateY(0)";
            entry.target.style.opacity = "1";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshhold: 0.1,
      }
    );

    targets.forEach((target) => slideUpOnIntersectObserver.observe(target));
  }

  function setAquaDownloadButtonURLs() {
    if (!downloadButtons || !platform) return;
    downloadButtons.forEach((button) => {
      switch (platform.os.family) {
        case "Windows":
          setNewURL(button, "#", false);
          break;
        case "iOS":
        case "OS X":
          setNewURL(button, appleStoreURL, true);
          break;
        case "Android":
          setNewURL(button, googlePlayURL, true);
          break;
        default:
          setNewURL(button, "#", false);
          break;
      }
    });
  }

  function setNewURL(anchorElement, url, supported = false) {
    osSupported = supported;
    anchorElement.href = url;
  }

  function handleHeaderBackground() {
    headers.forEach((header) => {
      const mobileModalOn = mobileModal.classList.contains("on");
      header.classList.toggle("scrolled", window.scrollY > 0 && !mobileModalOn);
    });
  }

  function handleMobileHeaderLogoAndBurger() {
    const mobileModalIsActive = mobileModal.classList.contains("on");
    mobileHeader.classList.toggle("mobile-menu-active", mobileModalIsActive);
  }

  function handleCloseLocalizationMenus() {
    localizationMenus.forEach((menu) => {
      handleCloseLocalizationMenu(menu);
    });
  }

  function handleCloseLocalizationMenu(menu) {
    const cssTransitionDurationMs = 200;
    menu.classList.remove("on");
    setTimeout(() => {
      menu.style.visibility = "hidden";
      menu.style.pointerEvents = "none";
    }, cssTransitionDurationMs);

  }

  function handleCloseModals() {
    burger.classList.remove("on");
    mobileModal.classList.remove("on");
    closeAquaDownloadModal();
    handleMobileHeaderLogoAndBurger();
  }

  function handleFaqClick(clickedFaq) {
    faqs.forEach((faq) => {
      if (faq !== clickedFaq) {
        faq.classList.remove("active");
      }
    });
    clickedFaq.classList.toggle("active");
  }
})(window, document);
