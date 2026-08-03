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
  :root { --font-heading: 'teknolog', 'sans-serif'; }
  .font-heading { font-family: var(--font-heading); }
  .btn-text { font-size: 15px; font-weight: 500; letter-spacing: 0.5px; }
  .bv-header { position: fixed; top: 0; z-index: 50; width: 100%; padding-top: 150px; padding-bottom: 12px; background: white; }
  .bv-header-inner { padding-left: 1rem; padding-right: 1rem; position: relative; width: 100%; display: flex; align-items: center; justify-content: space-between; }
  @media (min-width: 768px) { .bv-header-inner { padding-left: 2rem; padding-right: 2rem; } }
  .bv-nav-links { display: none; flex-direction: row; align-items: center; gap: 0.75rem; }
  @media (min-width: 768px) { .bv-nav-links { display: flex; } }
  .bv-nav-links.active { display: flex !important; flex-direction: column !important; position: absolute !important; top: 100% !important; left: 0 !important; right: 0 !important; background: white !important; padding: 2rem !important; box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important; gap: 1.5rem !important; z-index: 100 !important; opacity: 1 !important; pointer-events: auto !important; border-top: 1px solid rgba(0,0,0,0.05) !important; }
  .bv-nav-links.active a { color: black !important; font-size: 1.2rem !important; font-weight: 600 !important; text-align: left !important; width: 100% !important; display: block !important; }
  .bv-nav-links.active span.font-heading { display: none !important; }
  .bv-hamburger { display: flex; background: none; border: none; font-size: 1.8rem; background: linear-gradient(135deg, #13B0CB, #27B6B7, #39BA9F); -webkit-background-clip: text; -webkit-text-fill-color: transparent; cursor: pointer; padding: 5px; }
  @media (min-width: 768px) { .bv-hamburger { display: none; } }
  .bv-desktop-cta { display: none; }
  @media (min-width: 768px) { .bv-desktop-cta { display: flex; } }
  .bv-cta-btn { height: 44px; display: flex; color: white; font-family: var(--font-heading); margin-left: 1.25rem; text-decoration: none; }
  .bv-cta-btn .fill-brown { fill: #8B6914; }
  .bv-cta-btn .bg-brown { background: #8B6914; }
  .bv-cta-btn .btn-text-cta { padding-left: 1rem; padding-right: 1rem; background: #8B6914; display: flex; align-items: center; justify-content: center; color: white; font-size: 15px; font-weight: 500; letter-spacing: 0.5px; }
  .bv-nav-link { text-decoration: none; color: black; }
  .bv-nav-link .btn-text { font-size: 15px; font-weight: 500; letter-spacing: 0.5px; }
  .bv-sep { font-family: var(--font-heading); color: black; }
  .bv-nav-spacer-tablet { display: none; }
  @media (min-width: 768px) { .bv-nav-spacer-tablet { display: inline; } }
`;

function buildHeader(currentPage) {
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

  const navLinksHtmlMobile = links.map((l) => {
    return `<a href="/${l.slug}" class="bv-nav-link font-heading"><div class="btn-text">${l.label}</div></a>`;
  }).join('');

  return `<style>${HEADER_CSS}</style>
<header class="bv-header">
  <div class="bv-header-inner">
    <a href="/" rel="home" style="display:flex;align-items:center;gap:0.75rem;text-decoration:none;">
      <span style="font-size:30px;font-weight:700;color:black;letter-spacing:1px;">BRAINVOICE.<span style="color:#51C186;">AI</span></span>
    </a>
    <div style="display:flex;flex-direction:row;align-items:center;gap:0.75rem;">
      <div id="bv-nav-links" class="bv-nav-links font-heading" style="display:none;flex-direction:row;align-items:center;gap:0.75rem;">
        ${navLinksHtml}
      </div>
      <div class="bv-desktop-cta">
        <a href="/get-started" class="bv-cta-btn font-heading">
          <svg class="fill-brown" viewBox="0 0 34 209" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.2653e-05 33.9999L0 208.5L34 208.5L34.0001 -0.000108298L6.2653e-05 33.9999Z"/></svg>
          <div class="btn-text-cta">Get started</div>
          <svg class="fill-brown" viewBox="0 0 34 209" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.9999 174.5L34 0L-7.62939e-06 -1.48619e-06L-8.54078e-05 208.5L33.9999 174.5Z"/></svg>
        </a>
      </div>
      <button class="bv-hamburger" id="bv-menu-btn" aria-label="Menu">
        <i class="fas fa-bars"></i>
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

    /* --- Remove Wix header --- */
    html = html.replace(/<header[\s\S]*?<\/header>/i, '');

    /* --- Remove Wix hamburger + header nav + CTA that ship inside #SITE_HEADER --- */
    html = html.replace(/data-testid="navContainer"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i, '');

    /* --- Inject our header after <body> --- */
    html = html.replace(/<body([^>]*)>/, '<body$1>' + buildHeader(slug));

    /* --- Replace navigation hrefs in any remaining Wix links --- */
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

    /* --- Remove Wix CSS that controls #SITE_HEADER to avoid style conflicts --- */
    html = html.replace(/#SITE_HEADER\s*\{[^}]*\}/g, '');

    /* --- Pass through Wix response headers --- */
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
