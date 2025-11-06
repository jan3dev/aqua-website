(function (window, document) {
  const tooltipContainers = document.querySelectorAll('[data-tooltip-container');
  tooltipContainers.forEach(tooltipContainer => {
    const tooltipContent = tooltipContainer.querySelector('[data-tooltip-content]');
    const tooltipButton = tooltipContainer.querySelector('[data-tooltip-button]');
    if(!tooltipContent || !tooltipButton) return;
    tooltipButton.addEventListener('click', () => {
      tooltipContent.classList.toggle('active');
    });
  });

  document.addEventListener('click', (e) => {
    if(e.target.hasAttribute('data-tooltip-content') || e.target.hasAttribute('data-tooltip-button')) {
      return;
    };
    tooltipContainers.forEach(tooltipContainer => {
      const tooltipContent = tooltipContainer.querySelector('[data-tooltip-content]');
      if(!tooltipContent) return;
      tooltipContent.classList.remove('active');
    });
    
  });
})(window, document);