const WIX_MAP = {
  about: 'https://brainvoiceai.wixstudio.com/home/about',
  blogs: 'https://brainvoiceai.wixstudio.com/home/blogs',
  careers: 'https://brainvoiceai.wixstudio.com/home/careers',
  'success-stories': 'https://brainvoiceai.wixstudio.com/home/success-stories',
  'get-started': 'https://brainvoiceai.wixstudio.com/home/contact-us',
};

const HEADER_CSS = `
  @font-face { font-family: 'ki'; src: url('/wp-content/themes/startdigital/static/font/ki.woff'); }
  @font-face { font-family: 'teknolog'; src: url('/wp-content/themes/startdigital/static/font/nb_architekt_bold.woff2'); }
  :root { --color-brown: #0f766e; --font-heading: 'teknolog', 'sans-serif'; }
  .font-heading { font-family: var(--font-heading); }
  .btn-text { font-size: 15px; font-weight: 500; letter-spacing: 0.5px; }

  .bv-header {
    position: relative; z-index: 50; width: 100%;
    padding: 40px 0 20px 0 !important;
    background: rgba(255,255,255,0.95);
    box-sizing: border-box;
  }
  .bv-header-inner {
    position: relative; width: 100%;
    display: flex; align-items: center; justify-content: space-between;
    padding-inline: 0px;
  }

  /* Desktop nav */
  .bv-nav-links {
    display: none; flex-direction: row; align-items: center; gap: 12px;
  }
  @media (min-width: 768px) {
    .bv-nav-links { display: flex; }
  }
  .bv-nav-links.active {
    display: flex !important; flex-direction: column !important;
    position: absolute !important; top: 100% !important; left: 0 !important; right: 0 !important;
    background: white !important; padding: 2rem !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
    gap: 1.5rem !important; z-index: 100 !important;
    border-top: 1px solid rgba(0,0,0,0.05) !important;
  }
  .bv-nav-links.active a { color: black !important; font-size: 1.2rem !important; font-weight: 600 !important; text-align: left !important; width: 100% !important; display: block !important; }
  .bv-nav-links.active span.bv-sep { display: none !important; }

  /* Nav link hover */
  .bv-nav-link { text-decoration: none; color: black; transition: color 0.2s ease; }
  .bv-nav-link:hover { color: var(--color-brown); }
  .bv-nav-link .btn-text { font-size: 15px; font-weight: 500; letter-spacing: 0.5px; }

  /* Separator */
  .bv-sep { font-family: var(--font-heading); color: black; }

  /* Get Started CTA */
  .bv-desktop-cta { display: none; }
  @media (min-width: 768px) { .bv-desktop-cta { display: flex; } }
  .bv-cta-btn {
    height: 44px; display: flex; align-items: stretch;
    text-decoration: none; margin-left: 20px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .bv-cta-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(15,118,110,0.3); }
  .bv-cta-btn svg { height: 44px; width: 20px; }
  .bv-cta-btn .fill-brown { fill: var(--color-brown); }
  .bv-cta-btn .bg-brown { background: var(--color-brown); }
  .bv-cta-btn .btn-text-cta {
    padding: 0 16px; background: var(--color-brown);
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 15px; font-weight: 500; letter-spacing: 0.5px;
    font-family: var(--font-heading);
  }

  /* Hamburger */
  .bv-hamburger {
    display: flex; background: none; border: none;
    cursor: pointer; padding: 5px;
  }
  .bv-hamburger:hover { opacity: 0.8; }
  @media (min-width: 768px) { .bv-hamburger { display: none; } }
  @media (min-width: 768px) { .bv-logo { padding-left: 40px; } }
  @media (min-width: 768px) { .bv-right-nav { padding-right: 40px; } }
  .bv-logo { padding-left: 10px; }
  .bv-right-nav { padding-right: 10px; }

  /* Hide Wix header and banner */
  #SITE_HEADER, #SITE_HEADER_WRAPPER, #SITE_HEADER-placeholder,
  #wmbr-base, [id*="wmbr"], [class*="wmbr"] { display: none !important; }
`;

function buildHeader() {
  const links = [
    { slug: 'about', label: 'About Us' },
    { slug: 'blogs', label: 'Blogs' },
    { slug: 'careers', label: 'Careers' },
    { slug: 'success-stories', label: 'Success Stories' },
  ];

  const navLinksHtml = links.map((l, i) => {
    const sep = i < links.length - 1 ? `<span class="font-heading bv-sep">/</span>` : '';
    return `<a href="/${l.slug}" class="bv-nav-link font-heading"><div class="btn-text">${l.label}</div></a>${sep}`;
  }).join('');

  return `<style>${HEADER_CSS}</style>
<header class="bv-header">
  <div class="bv-header-inner">
    <a href="/" rel="home" style="display:flex;align-items:center;gap:12px;text-decoration:none;" class="bv-logo">
      <span style="font-family:'ki',sans-serif;font-size:30px;font-weight:700;color:black;letter-spacing:1px;">BRAINVOICE.<span style="color:#51C186;">AI</span></span>
    </a>
    <div style="display:flex;flex-direction:row;align-items:center;gap:16px;" class="bv-right-nav">
      <div id="bv-nav-links" class="bv-nav-links font-heading">
        ${navLinksHtml}
      </div>
      <div class="bv-desktop-cta">
        <a href="/get-started" class="bv-cta-btn font-heading">
          <svg viewBox="0 0 34 209" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.2653e-05 33.9999L0 208.5L34 208.5L34.0001 -0.000108298L6.2653e-05 33.9999Z" class="fill-brown"/></svg>
          <div class="btn-text-cta">Get started</div>
          <svg viewBox="0 0 34 209" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.9999 174.5L34 0L-7.62939e-06 -1.48619e-06L-8.54078e-05 208.5L33.9999 174.5Z" class="fill-brown"/></svg>
        </a>
      </div>
      <button class="bv-hamburger" id="bv-menu-btn" aria-label="Menu">
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0" width="28" height="3" rx="1.5" fill="url(#grad)"/>
          <rect y="8.5" width="28" height="3" rx="1.5" fill="url(#grad)"/>
          <rect y="17" width="28" height="3" rx="1.5" fill="url(#grad)"/>
          <defs><linearGradient id="grad" x1="0" y1="0" x2="28" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#13B0CB"/><stop offset="0.5" stop-color="#27B6B7"/><stop offset="1" stop-color="#39BA9F"/></linearGradient></defs>
        </svg>
      </button>
    </div>
  </div>
</header>
<script>
(function(){
  var btn=document.getElementById('bv-menu-btn');
  var nav=document.getElementById('bv-nav-links');
  if(btn&&nav){
    btn.addEventListener('click',function(e){e.stopPropagation();nav.classList.toggle('active');});
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('active');});});
    document.addEventListener('click',function(e){if(nav.classList.contains('active')&&!nav.contains(e.target)&&!btn.contains(e.target)){nav.classList.remove('active');}});
  }
  setInterval(function(){
    document.querySelectorAll('#wmbr-base,[id*="wmbr"],[class*="wmbr"]').forEach(function(el){el.remove();});
  },500);
})();
</script>`;
}

export default async function handler(req, res) {
  const slug = req.query.slug;
  const wixUrl = WIX_MAP[slug];
  if (!wixUrl) return res.status(404).send('Not found');

  try {
    const response = await fetch(wixUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    let html = await response.text();

    /* Inject our header after <body> */
    html = html.replace(/<body([^>]*)>/, '<body$1>' + buildHeader());

    /* For get-started page, inject Google Map embed above footer */
    if (slug === 'get-started') {
      const mapEmbed = `<div style="width:100%;height:450px;"><iframe src="https://maps.google.com/maps?q=Brainvoice.ai+Ascendas+International+Tech+Park+Chennai+Tamil+Nadu+600013&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;
      html = html.replace(/(<div[^>]*id="SITE_FOOTER_WRAPPER")/i, mapEmbed + '$1');
    }

    /* Replace navigation hrefs */
    const hrefPairs = [
      ['href="https://brainvoiceai.wixstudio.com/home/about"', 'href="/about"'],
      ['href="https://brainvoiceai.wixstudio.com/home/blogs"', 'href="/blogs"'],
      ['href="https://brainvoiceai.wixstudio.com/home/careers"', 'href="/careers"'],
      ['href="https://brainvoiceai.wixstudio.com/home/success-stories"', 'href="/success-stories"'],
      ['href="https://brainvoiceai.wixstudio.com/home/contact-us"', 'href="/get-started"'],
    ];
    for (const [from, to] of hrefPairs) {
      while (html.includes(from)) html = html.replace(from, to);
    }

    /* Pass through Wix response headers */
    const skip = new Set(['content-length', 'content-encoding', 'transfer-encoding', 'connection']);
    response.headers.forEach((value, key) => {
      if (!skip.has(key.toLowerCase())) res.setHeader(key, value);
    });
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch (err) {
    res.status(502).send('Failed to load page');
  }
}
