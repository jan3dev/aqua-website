function jan3NewsletterFormSubmit(token) {
  const form = document.getElementById("jan3-newsletter-form");
  const emailInput = form.querySelector('input[name="email"]');
  const subscribeLabel = document.getElementById('newsletter-subscribe-label');
  const buttonLabel = form.querySelector('.newsletter-subscribe-button-label');
  const successIcon = form.querySelector('.success-icon');
  const loadingIcon = form.querySelector('.loading-icon');

  // Prevent submission if email input field is not valid
  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const urlEncodedData = new URLSearchParams();
  formData.forEach((value, key) => {
    urlEncodedData.append(key, value);
  });

  handleLoading();


  fetch('https://services.jan3.com/mautic/newsletter/subscribe/aqua', {
  // fetch('http://localhost:3000/mautic/newsletter/subscribe/aqua', {
    method: 'POST',
    body: urlEncodedData,
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      handleSuccess();
    } else {
      handleFailure();
    }
  })
  .catch(error => {
    handleFailure();
  });

  function handleLoading() {
    loadingIcon.style.display = 'block';
    buttonLabel.style.display = 'none';
  }

  function handleSuccess() {
    successIcon.style.display = 'block';
    buttonLabel.style.display = 'inline-block';
    loadingIcon.style.display = 'none';
    emailInput.value = '';
    buttonLabel.textContent = 'Subscribed';
    subscribeLabel.textContent = 'Subscribed to the JAN3 Newsletter';
  }

  function handleFailure() {
    window.location.href = '/formerror'
  }
}