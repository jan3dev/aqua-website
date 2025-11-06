const params = new URLSearchParams(window.location.search);
const redirectParam = params.get('redirect');
const shouldRedirect = redirectParam === 'true' || redirectParam === '';

if (shouldRedirect && platform.os.family) {
  switch (platform.os.family) {
    case 'Windows':
      // No redirect
      break;
    case 'iOS':
    case 'OS X':
      window.location.href = appleStoreURL;
      break;
    case 'Android':
      window.location.href = googlePlayURL;
      break;
    default:
      // Optionally handle other platforms
      break;
  }
}
