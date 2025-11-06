/**
 * Initializes a horizontally scrolling slider with navigation controls.
 * Allows users to navigate through slides of varying widths using left and right buttons.
 *
 * @param {Window} window - The global window object.
 * @param {Document} document - The global document object.
 */
(function (window, document) {
  /** @type {HTMLElement | null} */
  const aquaHorizontalSlider = document.querySelector(".aqua-horizontal-slider");

  /** @type {NodeListOf<HTMLElement>} */
  const aquaHorizontalSlides = document.querySelectorAll(".aqua-horizontal-slide");

  /** @type {HTMLElement | null} */
  const leftButton = document.querySelector(".aqua-horizontal-slider-control-left");

  /** @type {HTMLElement | null} */
  const rightButton = document.querySelector(".aqua-horizontal-slider-control-right");

  /** @type {NodeListOf<HTMLElement>} */
  const buttons = document.querySelectorAll(".aqua-horizontal-slider-control");

  // Ensure required elements exist before proceeding
  if (!aquaHorizontalSlider || !leftButton || !rightButton || aquaHorizontalSlides.length === 0) return;

  /** @type {number} Index of the currently active slide */
  let position = 0;

  // Event Listeners for left and right navigation buttons
  leftButton.addEventListener("click", () => scrollAquaHorizontalSlides(-1));
  rightButton.addEventListener("click", () => scrollAquaHorizontalSlides(1));

  // Update position and button states on scroll
  aquaHorizontalSlider.addEventListener("scroll", () => {
    updatePosition();
    updateButtons();
  });

  /**
   * Scrolls the slider to the next or previous slide.
   * This function calculates the new position dynamically to handle slides of varying widths.
   *
   * @param {number} direction - The direction to scroll (-1 for left, 1 for right).
   */
  function scrollAquaHorizontalSlides(direction) {
    const slidesArray = Array.from(aquaHorizontalSlides);

    // Prevent scrolling beyond the first or last slide
    if ((position === 0 && direction === -1) || (position === slidesArray.length - 1 && direction === 1)) return;

    /** @type {HTMLElement | undefined} */
    const nextSlide = slidesArray[position + direction];
    if (!nextSlide) return;

    const nextRect = nextSlide.getBoundingClientRect();
    const sliderRect = aquaHorizontalSlider.getBoundingClientRect();

    /** @type {number} The amount to scroll */
    const scrollAmount = nextRect.left - sliderRect.left;

    // Smoothly scroll to the new slide
    aquaHorizontalSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });

    // Update the current position index
    position += direction;
  }

  /**
   * Updates the `position` index by determining the closest slide to the left edge of the container.
   * This ensures correct tracking even when slides have different widths.
   */
  function updatePosition() {
    const slidesArray = Array.from(aquaHorizontalSlides);
    const sliderRect = aquaHorizontalSlider.getBoundingClientRect();

    let closestIndex = 0;
    let minOffset = Infinity;

    slidesArray.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const offset = Math.abs(rect.left - sliderRect.left);

      if (offset < minOffset) {
        minOffset = offset;
        closestIndex = index;
      }
    });
    position = closestIndex;
  }

  /**
   * Updates the enabled/disabled state of navigation buttons based on the current scroll position.
   * Disables the left button if at the start and the right button if at the end.
   */
  function updateButtons() {
    /** @type {number} The maximum horizontal scroll value */
    const maxScrollLeft = aquaHorizontalSlider.scrollWidth - aquaHorizontalSlider.clientWidth;

    // Enable all buttons by default
    buttons.forEach(button => button.classList.remove("button-disabled"));

    // Disable left button if at the beginning
    if (aquaHorizontalSlider.scrollLeft < 1) {
      leftButton.classList.add("button-disabled");
    }

    // Disable right button if at the end
    if (aquaHorizontalSlider.scrollLeft >= maxScrollLeft) {
      rightButton.classList.add("button-disabled");
    }
  }

  // Initialize button states on load
  updateButtons();
})(window, document);
