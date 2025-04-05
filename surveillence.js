// Google Search Console Verification
const gscId = 'GOOGLE_SEARCH_CONSOLE_ID';
const gscTag = document.createElement('meta');
gscTag.name = 'google-site-verification';
gscTag.content = gscId;
document.head.appendChild(gscTag);