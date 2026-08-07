const WIX_MAP = {
  'about': 'https://brainvoiceai.wixstudio.com/home/about',
  'blogs': 'https://brainvoiceai.wixstudio.com/home/blogs',
  'careers': 'https://brainvoiceai.wixstudio.com/home/careers',
  'success-stories': 'https://brainvoiceai.wixstudio.com/home/success-stories',
  'get-started': 'https://brainvoiceai.wixstudio.com/home/contact-us',
};

function buildInjectionScript(blogSectionHtml, mapSectionHtml) {
  const links = [
    { slug: 'about', label: 'About Us' },
    { slug: 'blogs', label: 'Blogs' },
    { slug: 'careers', label: 'Careers' },
    { slug: 'success-stories', label: 'Success Stories' },
    { slug: 'get-started', label: 'Get Started', hideDesktop: true },
  ];

  const navLinksHtml = links.map((l, i) => {
    const isLast = i === links.length - 1;
    const hideClass = l.hideDesktop ? ' bv-hide-desktop' : '';
    const nextIsHidden = !isLast && links[i+1].hideDesktop;
    const sep = (isLast || nextIsHidden) ? '' : '<span class="bv-sep">/</span>';
    return '<a href="/' + l.slug + '" class="bv-nav-link' + hideClass + '"><div class="btn-text">' + l.label + '</div></a>' + sep;
  }).join('');

  const footerB64 = Buffer.from(`
    <footer id="bv-footer" class="bv-site-footer">
      <svg class="bv-site-footer__shape" viewBox="0 0 1316 71" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.398438 71H1316V0H71.3984L0.398438 71Z" fill="white" />
      </svg>
      <div class="bv-site-footer__inner">
        <div class="bv-site-footer__grid">
          <div class="bv-site-footer__brand">
            <a href="/" class="bv-site-footer__logo-link">
              <span class="bv-site-footer__logo-text">BRAINVOICE.<span class="bv-site-footer__logo-ai">AI</span></span>
            </a>
            <p class="bv-site-footer__tagline">Brainvoice.AI is a cutting-edge digital marketing analytical and IT company dedicated to revolutionizing the way organizations achieve business growth and expansion.</p>
            <div class="footer-social-links">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
              <a href="https://www.instagram.com/thestart.agency/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="Instagram"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              <a href="https://www.linkedin.com/company/thestartagency" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="X"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="YouTube"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
          </div>
          <div class="bv-site-footer__col bv-site-footer__col--explore">
            <h6 class="bv-site-footer__heading">Explore</h6>
            <ul class="bv-site-footer__links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/success-stories">Success Stories</a></li>
              <li><a href="/get-started">Get Started</a></li>
            </ul>
          </div>
          <div class="bv-site-footer__col">
            <h6 class="bv-site-footer__heading">About Us</h6>
            <ul class="bv-site-footer__links">
              <li><a href="/about">About WebTech</a></li>
              <li><a href="/about">Our Team</a></li>
              <li><a href="/about">Mission &amp; Values</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/about">Community Involvement</a></li>
            </ul>
          </div>
          <div class="bv-site-footer__col">
            <h6 class="bv-site-footer__heading">Services</h6>
            <ul class="bv-site-footer__links">
              <li><a href="/about">Software Development</a></li>
              <li><a href="/get-started">IT Consulting</a></li>
              <li><a href="/get-started">Web Design</a></li>
              <li><a href="/success-stories">Digital Transformation</a></li>
              <li><a href="/get-started">Project Management</a></li>
            </ul>
          </div>
          <div class="bv-site-footer__col">
            <h6 class="bv-site-footer__heading">Solutions</h6>
            <ul class="bv-site-footer__links">
              <li><a href="/success-stories">Industry Solutions</a></li>
              <li><a href="/get-started">Custom Solutions</a></li>
              <li><a href="/success-stories">Case Studies</a></li>
              <li><a href="/success-stories">Client Success</a></li>
              <li><a href="/get-started">Partnership</a></li>
            </ul>
          </div>
          <div class="footer-resources-form-row">
            <div class="footer-col-resources bv-site-footer__col">
              <h6 class="bv-site-footer__heading">Resources</h6>
              <ul class="bv-site-footer__links">
                <li><a href="/blogs">Blog</a></li>
                <li><a href="/blogs">Whitepapers</a></li>
                <li><a href="/blogs">Webinars</a></li>
                <li><a href="/get-started">FAQs</a></li>
                <li><a href="/success-stories">Testimonials</a></li>
              </ul>
            </div>
            <div class="footer-col-get-started bv-site-footer__col">
              <h6 class="bv-site-footer__heading">Get started</h6>
              <ul class="bv-site-footer__links">
                <li><a href="/get-started">Email Us</a></li>
                <li><a href="/get-started">Call Us</a></li>
                <li><a href="/get-started">Location</a></li>
                <li><a href="/get-started">FAQs</a></li>
                <li><a href="/get-started">Schedule a Demo</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-legal">
          <div class="footer-legal__links">
            <a href="https://thestart.com.au/terms-conditions/">Terms &amp; conditions</a>
            <span class="footer-legal__divider" aria-hidden="true">|</span>
            <a href="https://thestart.com.au/privacy/">Privacy policy</a>
          </div>
          <div class="footer-legal__credit">
            <a href="https://thestart.com.au" target="_blank" rel="noopener noreferrer">Built for Brainvoice AI</a>
          </div>
        </div>
      </div>
    </footer>
  `).toString('base64');

  const blogSectionB64 = blogSectionHtml ? Buffer.from(blogSectionHtml).toString('base64') : '';
  const mapSectionB64 = mapSectionHtml ? Buffer.from(mapSectionHtml).toString('base64') : '';

  return `<script>
(function(){
  var css=document.createElement('style');
  css.textContent=[
    '@font-face{font-family:"ki";src:url("/wp-content/themes/startdigital/static/font/ki.woff?v=2")}',
    '@font-face{font-family:"teknolog";src:url("/wp-content/themes/startdigital/static/font/nb_architekt_bold.woff2?v=2")}',
    '#SITE_HEADER,#SITE_HEADER-wrapper,#SITE_HEADER-placeholder{visibility:hidden!important;height:0!important;overflow:hidden!important;margin:0!important;padding:0!important}',
    '#SITE_FOOTER,#SITE_FOOTER-wrapper,#SITE_FOOTER-placeholder{display:none!important}',
    '#wmbr-base,[id*="wmbr"],[class*="wmbr"]{display:none!important}',
    '#WIX_ADS{display:none!important}',
    ':root{--wix-ads-height:0px!important}',
    '#SITE_HEADER,#SITE_HEADER-wrapper,#SITE_HEADER-placeholder{visibility:hidden!important;height:0!important;overflow:hidden!important;margin:0!important;padding:0!important}',
    'body{padding-top:80px!important}',
    '#bv-header{width:100%;padding:16px 0 18px 0;background:rgba(255,255,255,0.95);box-sizing:border-box;will-change:transform;position:fixed;top:0;left:0;z-index:999}',
    '#bv-header,#bv-header span,#bv-header div,#bv-header a{font-family:ki,sans-serif}',
    '#bv-header .bv-sep{font-family:teknolog,sans-serif}',
    '#bv-header .btn-text-cta{font-family:teknolog,sans-serif}',
    '.bv-header-inner{position:relative;width:100%;display:flex;align-items:center;justify-content:space-between;padding-inline:0}',
    '.bv-nav-links{display:none;flex-direction:row;align-items:center;gap:12px}',
    '@media(min-width:768px){.bv-nav-links{display:flex}}',
    '.bv-nav-links.active{display:flex!important;flex-direction:column!important;position:fixed!important;top:60px!important;left:0!important;right:0!important;background:white!important;padding:2rem!important;box-shadow:0 10px 30px rgba(0,0,0,0.1)!important;gap:1.5rem!important;z-index:1000!important;border-top:1px solid rgba(0,0,0,0.05)!important}',
    '.bv-nav-links.active a{color:black!important;font-size:1.2rem!important;font-weight:600!important;text-align:left!important;width:100%!important;display:block!important}',
    '.bv-nav-links.active span.bv-sep{display:none!important}',
    '.bv-nav-link{text-decoration:none;color:black;transition:color 0.2s ease}',
    '.bv-nav-link:hover{color:#0f766e}',
    '.bv-nav-link .btn-text{font-size:15px;font-weight:500;letter-spacing:0.5px}',
    '.bv-sep{font-family:teknolog,sans-serif;color:black}',
    '.bv-hide-desktop{display:none}',
    '@media(max-width:767px){.bv-hide-desktop{display:flex!important}}',
    '.bv-desktop-cta{display:none}',
    '@media(min-width:768px){.bv-desktop-cta{display:flex}}',
    '.bv-cta-btn{height:36px;display:flex;align-items:stretch;text-decoration:none;margin-left:20px;transition:transform 0.2s ease,box-shadow 0.2s ease}',
    '.bv-cta-btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(15,118,110,0.3)}',
    '.bv-cta-btn svg{height:36px;width:18px}',
    '.bv-cta-btn .fill-brown{fill:#0f766e}',
    '.bv-cta-btn .btn-text-cta{padding:0 16px;background:#0f766e;display:flex;align-items:center;justify-content:center;color:white;font-size:15px;font-weight:500;letter-spacing:0.5px;font-family:teknolog,sans-serif}',
    '.bv-hamburger{display:flex;background:none;border:none;cursor:pointer;padding:5px}',
    '.bv-hamburger:hover{opacity:0.8}',
    '@media(min-width:768px){.bv-hamburger{display:none}}',
    '.bv-hamburger.active rect:nth-child(1){transform:translateY(5.5px) rotate(45deg);transform-origin:center;transition:transform 0.3s ease}',
    '.bv-hamburger.active rect:nth-child(2){opacity:0;transition:opacity 0.2s ease}',
    '.bv-hamburger.active rect:nth-child(3){transform:translateY(-5.5px) rotate(-45deg);transform-origin:center;transition:transform 0.3s ease}',
    '.bv-hamburger rect{transition:transform 0.3s ease,opacity 0.2s ease;transform-origin:center}',
    'body.bv-menu-open{overflow:hidden}',
    '.bv-logo{padding-left:10px}',
    '.bv-right-nav{padding-right:10px}',
    '@media(min-width:768px){.bv-logo{padding-left:40px}}',
    '@media(min-width:768px){.bv-right-nav{padding-right:40px}}',
    '#bv-header,#bv-header span,#bv-header div,#bv-header a{font-family:ki,sans-serif}',
    '#bv-header .bv-sep{font-family:teknolog,sans-serif}',
    '#bv-header .btn-text-cta{font-family:teknolog,sans-serif}',
    '#bv-footer,#bv-footer span,#bv-footer p,#bv-footer a,#bv-footer ul,#bv-footer li{font-family:ki,sans-serif}',
    '#bv-footer .bv-site-footer__heading{font-family:teknolog,sans-serif}',
    '.bv-site-footer{position:relative;z-index:20;width:100%;color:#0f5053;overflow:hidden;font-family:ki,sans-serif}',
    '.bv-site-footer__shape{display:block;width:100%;margin-bottom:-1px}',
    '.bv-site-footer__inner{background:#fff;padding:1.5rem 1rem 0}',
    '@media(min-width:768px){.bv-site-footer__inner{padding:2rem 2rem 0}}',
    '.bv-site-footer__grid{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:1.5rem 1rem;max-width:1400px;margin:0 auto}',
    '.bv-site-footer__brand{flex:1 1 100%;min-width:0;max-width:230px;display:flex;flex-direction:column;gap:1rem}',
    '.bv-site-footer__logo-link{display:flex;align-items:center;gap:0.75rem;text-decoration:none}',
    '.bv-site-footer__logo-text{font-size:1.25rem;font-weight:700;color:#000;letter-spacing:0.04em}',
    '.bv-site-footer__logo-ai{color:#51c186}',
    '.bv-site-footer__tagline{font-size:0.875rem;line-height:1.5;color:#315e60;margin:0}',
    '.bv-site-footer__col{flex:1 1 140px;min-width:0;padding-top:0.5rem}',
    '.bv-site-footer__heading{font-size:clamp(1rem,2.5vw,1.35rem);font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#0f5053;margin:0 0 0.75rem;white-space:nowrap}',
    '.bv-site-footer__links{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.35rem}',
    '.bv-site-footer__links a{font-size:0.8rem;text-decoration:none;color:#2d6668;text-transform:uppercase;letter-spacing:0.04em;white-space:nowrap}',
    '.bv-site-footer__links a:hover{color:#13b0cb}',
    '.footer-social-links{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;gap:0.5rem}',
    '.bv-social-btn{width:2.75rem;height:2.75rem;display:flex;align-items:center;justify-content:center;background:#0f8688;color:#fff;text-decoration:none;font-size:1rem;transition:background 0.2s ease,transform 0.2s ease}',
    '.bv-social-btn:hover{background:linear-gradient(135deg,#0a6f71,#0ea2bb);transform:translateY(-2px)}',
    '.footer-resources-form-row{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-between;gap:1rem;width:100%;flex:1 1 100%}',
    '.footer-col-resources{flex:1 1 42%;max-width:48%}',
    '.footer-col-get-started{flex:1 1 58%;max-width:52%}',
    '.footer-legal{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.65rem;width:100%;max-width:1400px;margin:0 auto;padding:1.75rem 0 1.5rem;border-top:1px dashed rgba(15,80,83,0.35);text-align:center;font-size:0.75rem}',
    '.footer-legal__links{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;gap:0.75rem;margin-top:0.75rem}',
    '.footer-legal__links a{color:#0e7d80;text-decoration:none}',
    '.footer-legal__links a:hover{text-decoration:underline}',
    '.footer-legal__divider{width:1px;height:0.75rem;background:#0f5053;flex-shrink:0}',
    '.footer-legal__credit a{color:#315e60;text-decoration:none}',
    '@media(max-width:768px){.bv-site-footer__brand{flex:1 1 100%;max-width:280px}.bv-site-footer__col{flex:1 1 40%;min-width:40%}.footer-resources-form-row{flex:1 1 100%;width:100%}.footer-col-resources{flex:1 1 42%;max-width:48%}.footer-col-get-started{flex:1 1 58%;max-width:52%}}',
    '@media(min-width:1024px){.bv-site-footer__grid{display:grid;grid-template-columns:minmax(200px,1.35fr) minmax(0,0.85fr) minmax(0,0.85fr) minmax(0,0.85fr) minmax(0,0.8fr) minmax(160px,1fr);align-items:start;gap:1.25rem 1rem}.bv-site-footer__col--explore{display:none}.footer-resources-form-row{display:contents}.bv-site-footer__brand{flex:unset;max-width:none}.bv-site-footer__col{flex:unset;min-width:0;padding-top:0.5rem}.footer-col-resources,.footer-col-get-started{flex:unset;max-width:none}.bv-site-footer__heading{font-size:1.05rem;position:relative;padding-bottom:0.5rem}.bv-site-footer__heading::after{content:"";display:block;width:2.5rem;height:3px;margin-top:0.35rem;background:#13b0cb}.bv-site-footer__links a{font-size:0.72rem;white-space:normal;line-height:1.35}.footer-legal{flex-direction:row;justify-content:space-between;align-items:center;text-align:left}.footer-legal__links{margin-top:0}}'
  ].join('');

  function initBV(){
    if(document.getElementById('bv-header')) return;
    document.head.appendChild(css);

    var hdr=document.createElement('header');
    hdr.id='bv-header';
    hdr.innerHTML='<div class="bv-header-inner">'+
      '<a href="/" rel="home" style="display:flex;align-items:center;gap:12px;text-decoration:none;" class="bv-logo">'+
        '<span style="font-size:24px;font-weight:700;color:black;letter-spacing:1px;">BRAINVOICE.<span style="color:#51C186;">AI</span></span>'+
      '</a>'+
      '<div style="display:flex;flex-direction:row;align-items:center;gap:16px;" class="bv-right-nav">'+
        '<div id="bv-nav-links" class="bv-nav-links">'+
          '${navLinksHtml}'+
        '</div>'+
        '<div class="bv-desktop-cta">'+
          '<a href="/get-started" class="bv-cta-btn">'+
            '<svg viewBox="0 0 34 209" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.2653e-05 33.9999L0 208.5L34 208.5L34.0001 -0.000108298L6.2653e-05 33.9999Z" class="fill-brown"/></svg>'+
            '<div class="btn-text-cta">Get started</div>'+
            '<svg viewBox="0 0 34 209" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.9999 174.5L34 0L-7.62939e-06 -1.48619e-06L-8.54078e-05 208.5L33.9999 174.5Z" class="fill-brown"/></svg>'+
          '</a>'+
        '</div>'+
        '<button class="bv-hamburger" id="bv-menu-btn" aria-label="Menu">'+
          '<svg width="28" height="20" viewBox="0 0 28 20" fill="none">'+
            '<rect y="0" width="28" height="3" rx="1.5" fill="url(#bvg)"/>'+
            '<rect y="8.5" width="28" height="3" rx="1.5" fill="url(#bvg)"/>'+
            '<rect y="17" width="28" height="3" rx="1.5" fill="url(#bvg)"/>'+
            '<defs><linearGradient id="bvg" x1="0" y1="0" x2="28" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#13B0CB"/><stop offset="0.5" stop-color="#27B6B7"/><stop offset="1" stop-color="#39BA9F"/></linearGradient></defs>'+
          '</svg>'+
        '</button>'+
      '</div>'+
    '</div>';

    var container=document.getElementById('SITE_CONTAINER')||document.body;
    container.insertBefore(hdr,container.firstChild);

    var footerDiv=document.createElement('div');
    footerDiv.innerHTML=atob('${footerB64}');
    container.appendChild(footerDiv);

    var blogHtml='${blogSectionB64}';
    if(blogHtml){
      var blogDiv=document.createElement('div');
      blogDiv.innerHTML=atob(blogHtml);
      var footer=document.getElementById('bv-footer');
      if(footer){
        footer.parentNode.insertBefore(blogDiv,footer);
      }else{
        container.appendChild(blogDiv);
      }
    }

    var mapHtml='${mapSectionB64}';
    if(mapHtml){
      var mapDiv=document.createElement('div');
      mapDiv.innerHTML=atob(mapHtml);
      var footer=document.getElementById('bv-footer');
      if(footer){
        footer.parentNode.insertBefore(mapDiv,footer);
      }else{
        container.appendChild(mapDiv);
      }
    }

    var btn=document.getElementById('bv-menu-btn');
    var nav=document.getElementById('bv-nav-links');
    if(btn&&nav){
      btn.addEventListener('click',function(e){e.stopPropagation();nav.classList.toggle('active');btn.classList.toggle('active');document.body.classList.toggle('bv-menu-open');});
      nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('active');btn.classList.remove('active');document.body.classList.remove('bv-menu-open');});});
      document.addEventListener('click',function(e){if(nav.classList.contains('active')&&!nav.contains(e.target)&&!btn.contains(e.target)){nav.classList.remove('active');btn.classList.remove('active');document.body.classList.remove('bv-menu-open');}});
    }

    var hdr=document.getElementById('bv-header');
    if(hdr){
      var lastY=0;
      window.addEventListener('scroll',function(){
        if(nav&&nav.classList.contains('active'))return;
        var curY=window.pageYOffset||document.documentElement.scrollTop;
        if(curY>lastY&&curY>30){hdr.style.transform='translateY(-100%)';hdr.style.transition='transform 0.3s ease';}
        else{hdr.style.transform='translateY(0)';hdr.style.transition='transform 0.3s ease';}
        lastY=curY;
      });
    }
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){setTimeout(initBV,100);});
  }else{
    setTimeout(initBV,100);
  }

  setInterval(function(){
    document.querySelectorAll('#wmbr-base,[id*="wmbr"],[class*="wmbr"]').forEach(function(el){el.remove();});
  },500);
})();
</script>`;
}

function parseBlogPosts(html) {
  const posts = [];
  try {
    const warmupMatch = html.match(/<script[^>]*id="wix-warmup-data"[^>]*>([\s\S]*?)<\/script>/);
    if (!warmupMatch) return posts;
    
    const warmupData = JSON.parse(warmupMatch[1]);
    const appsData = warmupData?.appsWarmupData;
    if (!appsData) return posts;
    
    for (const appId of Object.keys(appsData)) {
      const appData = appsData[appId];
      for (const key of Object.keys(appData)) {
        if (key.startsWith('post-list-')) {
          try {
            const innerData = JSON.parse(appData[key]);
            const postsList = innerData?.response?.data?.postFeedPage?.posts?.posts;
            if (Array.isArray(postsList)) {
              for (const post of postsList) {
                posts.push({
                  title: post.title || '',
                  excerpt: post.excerpt || '',
                  slug: post.slug || '',
                  url: `https://brainvoiceai.wixstudio.com/home${post.url?.path || ''}`,
                  image: post.media?.wixMedia?.image?.url || post.heroImage?.url || '',
                  date: post.firstPublishedDate ? new Date(post.firstPublishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
                  minutesToRead: post.minutesToRead || 1,
                  author: post.owner?.name || '',
                });
              }
            }
          } catch (e) {}
        }
      }
    }
  } catch (e) {}
  return posts;
}

function buildBlogSection(posts) {
  if (!posts.length) return '';
  
  const cards = posts.map(post => `
    <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="bv-blog-card">
      <div class="bv-blog-card__image">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="bv-blog-card__body">
        <h3 class="bv-blog-card__title">${post.title}</h3>
        <p class="bv-blog-card__excerpt">${post.excerpt.substring(0, 150)}...</p>
        <div class="bv-blog-card__meta">
          <span class="bv-blog-card__author">Posted by ${post.author}</span>
          <span class="bv-blog-card__date">${post.date}</span>
          <span class="bv-blog-card__read">${post.minutesToRead} min read</span>
        </div>
      </div>
    </a>
  `).join('');

  return `
    <div id="bv-blog-section" style="font-family:ki,sans-serif;max-width:1200px;margin:0 auto;padding:60px 20px;">
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px;">
        ${cards}
      </div>
    </div>
    <style>
      .bv-blog-card{display:flex;flex-direction:column;background:#fff;border:1px solid rgba(0,0,0,0.08);border-radius:12px;overflow:hidden;text-decoration:none;color:inherit;transition:transform 0.2s ease,box-shadow 0.2s ease;}
      .bv-blog-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,0.1);}
      .bv-blog-card__image{width:100%;aspect-ratio:16/9;overflow:hidden;}
      .bv-blog-card__image img{width:100%;height:100%;object-fit:cover;}
      .bv-blog-card__body{padding:20px;display:flex;flex-direction:column;gap:8px;flex:1;}
      .bv-blog-card__title{font-family:teknolog,sans-serif;font-size:1.1rem;font-weight:700;color:#000;margin:0;line-height:1.3;}
      .bv-blog-card__excerpt{font-family:ki,sans-serif;font-size:0.85rem;color:#555;line-height:1.5;margin:0;flex:1;}
      .bv-blog-card__meta{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-size:0.75rem;color:#888;margin-top:8px;padding-top:8px;border-top:1px solid rgba(0,0,0,0.06);}
      .bv-blog-card__author,.bv-blog-card__date,.bv-blog-card__read{font-family:ki,sans-serif;}
    </style>
  `;
}

function buildMapSection() {
  const address = 'Brainvoice.ai, Ascendas, International Tech Park, Bridge+, Chennai, Tamil Nadu 600013';
  const encodedAddress = encodeURIComponent(address);
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1`;
  
  return `
    <div id="bv-map-section" style="font-family:ki,sans-serif;max-width:1200px;margin:0 auto;padding:0 20px 60px;">
      <h2 style="font-family:teknolog,sans-serif;font-size:clamp(1.2rem,3vw,1.8rem);font-weight:700;text-transform:uppercase;text-align:center;margin-bottom:16px;color:#000;">Find Us</h2>
      <div style="width:100%;height:400px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);">
        <iframe 
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15"
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <p style="text-align:center;color:#666;margin-top:12px;font-size:0.9rem;">${address}</p>
    </div>
  `;
}

function buildIframePage(slug) {
  const links = [
    { slug: 'about', label: 'About Us' },
    { slug: 'blogs', label: 'Blogs' },
    { slug: 'careers', label: 'Careers' },
    { slug: 'success-stories', label: 'Success Stories' },
    { slug: 'get-started', label: 'Get Started', hideDesktop: true },
  ];

  const navLinksHtml = links.map((l, i) => {
    const isLast = i === links.length - 1;
    const hideClass = l.hideDesktop ? ' bv-hide-desktop' : '';
    const nextIsHidden = !isLast && links[i+1].hideDesktop;
    const sep = (isLast || nextIsHidden) ? '' : '<span class="bv-sep">/</span>';
    return '<a href="/' + l.slug + '" class="bv-nav-link' + hideClass + '"><div class="btn-text">' + l.label + '</div></a>' + sep;
  }).join('');

  const wixUrl = WIX_MAP[slug];
  const pageTitle = slug === 'about' ? 'About Us' : slug === 'careers' ? 'Careers' : 'Get Started';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle} - Brainvoice AI</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
    @font-face{font-family:"ki";src:url("/wp-content/themes/startdigital/static/font/ki.woff?v=2")}
    @font-face{font-family:"teknolog";src:url("/wp-content/themes/startdigital/static/font/nb_architekt_bold.woff2?v=2")}
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:ki,sans-serif;overflow-x:hidden;padding-top:80px;}

    /* Header - NOT fixed, scrolls with page */
    #bv-header{width:100%;padding:16px 0 18px 0;background:rgba(255,255,255,0.95);box-sizing:border-box;will-change:transform;position:fixed;top:0;left:0;z-index:999;}
    #bv-header,#bv-header span,#bv-header div,#bv-header a{font-family:ki,sans-serif;}
    #bv-header .bv-sep{font-family:teknolog,sans-serif;}
    #bv-header .btn-text-cta{font-family:teknolog,sans-serif;}
    .bv-header-inner{position:relative;width:100%;display:flex;align-items:center;justify-content:space-between;padding-inline:0;}
    .bv-nav-links{display:none;flex-direction:row;align-items:center;gap:12px;}
    @media(min-width:768px){.bv-nav-links{display:flex;}}
    .bv-nav-link{text-decoration:none;color:black;transition:color 0.2s ease;}
    .bv-nav-link:hover{color:#0f766e;}
    .bv-nav-link .btn-text{font-size:15px;font-weight:500;letter-spacing:0.5px;}
    .bv-sep{font-family:teknolog,sans-serif;color:black;}
    .bv-hide-desktop{display:none;}
    @media(max-width:767px){.bv-hide-desktop{display:flex!important;}}
    .bv-desktop-cta{display:none;}
    @media(min-width:768px){.bv-desktop-cta{display:flex;}}
    .bv-cta-btn{height:36px;display:flex;align-items:stretch;text-decoration:none;margin-left:20px;transition:transform 0.2s ease,box-shadow 0.2s ease;}
    .bv-cta-btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(15,118,110,0.3);}
    .bv-cta-btn svg{height:36px;width:18px;}
    .bv-cta-btn .fill-brown{fill:#0f766e;}
    .bv-cta-btn .btn-text-cta{padding:0 16px;background:#0f766e;display:flex;align-items:center;justify-content:center;color:white;font-size:15px;font-weight:500;letter-spacing:0.5px;font-family:teknolog,sans-serif;}
    .bv-hamburger{display:flex;background:none;border:none;cursor:pointer;padding:5px;}
    .bv-hamburger:hover{opacity:0.8;}
    @media(min-width:768px){.bv-hamburger{display:none;}}
    .bv-hamburger.active rect:nth-child(1){transform:translateY(5.5px) rotate(45deg);transform-origin:center;transition:transform 0.3s ease;}
    .bv-hamburger.active rect:nth-child(2){opacity:0;transition:opacity 0.2s ease;}
    .bv-hamburger.active rect:nth-child(3){transform:translateY(-5.5px) rotate(-45deg);transform-origin:center;transition:transform 0.3s ease;}
    .bv-hamburger rect{transition:transform 0.3s ease,opacity 0.2s ease;transform-origin:center;}
    body.bv-menu-open{overflow:hidden;}
    .bv-logo{padding-left:10px;}
    .bv-right-nav{padding-right:10px;}
    @media(min-width:768px){.bv-logo{padding-left:40px;}}
    @media(min-width:768px){.bv-right-nav{padding-right:40px;}}



    /* Footer */
    #bv-footer,#bv-footer span,#bv-footer p,#bv-footer a,#bv-footer ul,#bv-footer li{font-family:ki,sans-serif;}
    #bv-footer .bv-site-footer__heading{font-family:teknolog,sans-serif;}
    .bv-site-footer{position:relative;z-index:20;width:100%;color:#0f5053;overflow:hidden;font-family:ki,sans-serif;}
    .bv-site-footer__shape{display:block;width:100%;margin-bottom:-1px;}
    .bv-site-footer__inner{background:#fff;padding:1.5rem 1rem 0;}
    @media(min-width:768px){.bv-site-footer__inner{padding:2rem 2rem 0;}}
    .bv-site-footer__grid{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:1.5rem 1rem;max-width:1400px;margin:0 auto;}
    .bv-site-footer__brand{flex:1 1 100%;min-width:0;max-width:230px;display:flex;flex-direction:column;gap:1rem;}
    .bv-site-footer__logo-link{display:flex;align-items:center;gap:0.75rem;text-decoration:none;}
    .bv-site-footer__logo-text{font-size:1.25rem;font-weight:700;color:#000;letter-spacing:0.04em;}
    .bv-site-footer__logo-ai{color:#51c186;}
    .bv-site-footer__tagline{font-size:0.875rem;line-height:1.5;color:#315e60;margin:0;}
    .bv-site-footer__col{flex:1 1 140px;min-width:0;padding-top:0.5rem;}
    .bv-site-footer__heading{font-size:clamp(1rem,2.5vw,1.35rem);font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#0f5053;margin:0 0 0.75rem;white-space:nowrap;}
    .bv-site-footer__links{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.35rem;}
    .bv-site-footer__links a{font-size:0.8rem;text-decoration:none;color:#2d6668;text-transform:uppercase;letter-spacing:0.04em;white-space:nowrap;}
    .bv-site-footer__links a:hover{color:#13b0cb;}
    .footer-social-links{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;gap:0.5rem;}
    .bv-social-btn{width:2.75rem;height:2.75rem;display:flex;align-items:center;justify-content:center;background:#0f8688;color:#fff;text-decoration:none;font-size:1rem;transition:background 0.2s ease,transform 0.2s ease;}
    .bv-social-btn:hover{background:linear-gradient(135deg,#0a6f71,#0ea2bb);transform:translateY(-2px);}
    .footer-resources-form-row{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-between;gap:1rem;width:100%;flex:1 1 100%;}
    .footer-col-resources{flex:1 1 42%;max-width:48%;}
    .footer-col-get-started{flex:1 1 58%;max-width:52%;}
    .bv-site-footer__form{display:flex;flex-direction:column;gap:0.5rem;}
    .bv-site-footer__field{display:flex;flex-direction:column;gap:0.15rem;}
    .bv-site-footer__field span{font-size:0.75rem;text-transform:uppercase;letter-spacing:0.04em;color:#0f5053;}
    .bv-site-footer__field input{width:100%;border:none;border-bottom:1px solid rgba(15,80,83,0.35);background:transparent;padding:0.4rem 0;font-size:0.8rem;font-family:inherit;color:#0f5053;outline:none;}
    .bv-site-footer__field input:focus{border-bottom-color:#13b0cb;}
    .bv-site-footer__submit{width:100%;margin-top:0.25rem;padding:0.55rem 0.75rem;border:none;background:#167f7f;color:#fff;font-family:inherit;font-size:0.85rem;cursor:pointer;text-transform:uppercase;letter-spacing:0.05em;}
    .bv-site-footer__submit:hover{background:#0f8688;}
    .footer-legal{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.65rem;width:100%;max-width:1400px;margin:0 auto;padding:1.75rem 0 1.5rem;border-top:1px dashed rgba(15,80,83,0.35);text-align:center;font-size:0.75rem;}
    .footer-legal__links{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;gap:0.75rem;margin-top:0.75rem;}
    .footer-legal__links a{color:#0e7d80;text-decoration:none;}
    .footer-legal__links a:hover{text-decoration:underline;}
    .footer-legal__divider{width:1px;height:0.75rem;background:#0f5053;flex-shrink:0;}
    .footer-legal__credit a{color:#315e60;text-decoration:none;}
    @media(max-width:768px){.bv-site-footer__brand{flex:1 1 100%;max-width:280px;}.bv-site-footer__col{flex:1 1 40%;min-width:40%;}.footer-resources-form-row{flex:1 1 100%;width:100%;}.footer-col-resources{flex:1 1 42%;max-width:48%;}.footer-col-get-started{flex:1 1 58%;max-width:52%;}}
    @media(min-width:1024px){.bv-site-footer__grid{display:grid;grid-template-columns:minmax(200px,1.35fr) minmax(0,0.85fr) minmax(0,0.85fr) minmax(0,0.85fr) minmax(0,0.8fr) minmax(160px,1fr);align-items:start;gap:1.25rem 1rem;}.bv-site-footer__col--explore{display:none;}.footer-resources-form-row{display:contents;}.bv-site-footer__brand{flex:unset;max-width:none;}.bv-site-footer__col{flex:unset;min-width:0;padding-top:0.5rem;}.footer-col-resources,.footer-col-get-started{flex:unset;max-width:none;}.bv-site-footer__heading{font-size:1.05rem;position:relative;padding-bottom:0.5rem;}.bv-site-footer__heading::after{content:"";display:block;width:2.5rem;height:3px;margin-top:0.35rem;background:#13b0cb;}.bv-site-footer__links a{font-size:0.72rem;white-space:normal;line-height:1.35;}.footer-legal{flex-direction:row;justify-content:space-between;align-items:center;text-align:left;}.footer-legal__links{margin-top:0}}

    /* Iframe container clips Wix banner */
    #wix-wrap{overflow:hidden;position:relative;}
    ${slug === 'about' ? '#wix-wrap{height:5450px;}@media(max-width:767px){#wix-wrap{height:7940px;}}' : ''}
    ${slug === 'careers' ? '#wix-wrap{height:2450px;margin-top:80px;}@media(max-width:767px){#wix-wrap{height:1200px;margin-top:80px;}}' : ''}
    ${slug === 'get-started' ? '#wix-wrap{height:3150px;}' : ''}
    #wix-frame{width:100%;height:calc(100% + 50px);border:none;display:block;position:absolute;top:-50px;left:0;}
  </style>
</head>
<body>
  <header id="bv-header">
    <div class="bv-header-inner">
       <a href="/" rel="home" style="display:flex;align-items:center;gap:12px;text-decoration:none;" class="bv-logo">
        <span style="font-size:24px;font-weight:700;color:black;letter-spacing:1px;">BRAINVOICE.<span style="color:#51C186;">AI</span></span>
      </a>
      <div style="display:flex;flex-direction:row;align-items:center;gap:16px;" class="bv-right-nav">
        <div id="bv-nav-links" class="bv-nav-links">
          ${navLinksHtml}
        </div>
        <div class="bv-desktop-cta">
          <a href="/get-started" class="bv-cta-btn">
            <svg viewBox="0 0 34 209" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.2653e-05 33.9999L0 208.5L34 208.5L34.0001 -0.000108298L6.2653e-05 33.9999Z" class="fill-brown"/></svg>
            <div class="btn-text-cta">Get started</div>
            <svg viewBox="0 0 34 209" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.9999 174.5L34 0L-7.62939e-06 -1.48619e-06L-8.54078e-05 208.5L33.9999 174.5Z" class="fill-brown"/></svg>
          </a>
        </div>
        <button class="bv-hamburger" id="bv-menu-btn" aria-label="Menu">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
            <rect y="0" width="28" height="3" rx="1.5" fill="url(#bvg)"/>
            <rect y="8.5" width="28" height="3" rx="1.5" fill="url(#bvg)"/>
            <rect y="17" width="28" height="3" rx="1.5" fill="url(#bvg)"/>
            <defs><linearGradient id="bvg" x1="0" y1="0" x2="28" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#13B0CB"/><stop offset="0.5" stop-color="#27B6B7"/><stop offset="1" stop-color="#39BA9F"/></linearGradient></defs>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <div id="wix-wrap"><iframe id="wix-frame" src="${wixUrl}" scrolling="no"></iframe></div>

  <footer id="bv-footer" class="bv-site-footer">
    <svg class="bv-site-footer__shape" viewBox="0 0 1316 71" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.398438 71H1316V0H71.3984L0.398438 71Z" fill="white" />
    </svg>
    <div class="bv-site-footer__inner">
      <div class="bv-site-footer__grid">
        <div class="bv-site-footer__brand">
          <a href="/" class="bv-site-footer__logo-link">
            <span class="bv-site-footer__logo-text">BRAINVOICE.<span class="bv-site-footer__logo-ai">AI</span></span>
          </a>
          <p class="bv-site-footer__tagline">Brainvoice.AI is a cutting-edge digital marketing analytical and IT company dedicated to revolutionizing the way organizations achieve business growth and expansion.</p>
          <div class="footer-social-links">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
            <a href="https://www.instagram.com/thestart.agency/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="Instagram"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            <a href="https://www.linkedin.com/company/thestartagency" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="X"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="YouTube"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          </div>
        </div>
        <div class="bv-site-footer__col bv-site-footer__col--explore">
          <h6 class="bv-site-footer__heading">Explore</h6>
          <ul class="bv-site-footer__links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/get-started">Get Started</a></li>
          </ul>
        </div>
        <div class="bv-site-footer__col">
          <h6 class="bv-site-footer__heading">About Us</h6>
          <ul class="bv-site-footer__links">
            <li><a href="/about">About WebTech</a></li>
            <li><a href="/about">Our Team</a></li>
            <li><a href="/about">Mission &amp; Values</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/about">Community Involvement</a></li>
          </ul>
        </div>
        <div class="bv-site-footer__col">
          <h6 class="bv-site-footer__heading">Services</h6>
          <ul class="bv-site-footer__links">
            <li><a href="/about">Software Development</a></li>
            <li><a href="/get-started">IT Consulting</a></li>
            <li><a href="/get-started">Web Design</a></li>
            <li><a href="/success-stories">Digital Transformation</a></li>
            <li><a href="/get-started">Project Management</a></li>
          </ul>
        </div>
        <div class="bv-site-footer__col">
          <h6 class="bv-site-footer__heading">Solutions</h6>
          <ul class="bv-site-footer__links">
            <li><a href="/success-stories">Industry Solutions</a></li>
            <li><a href="/get-started">Custom Solutions</a></li>
            <li><a href="/success-stories">Case Studies</a></li>
            <li><a href="/success-stories">Client Success</a></li>
            <li><a href="/get-started">Partnership</a></li>
          </ul>
        </div>
        <div class="footer-resources-form-row">
          <div class="footer-col-resources bv-site-footer__col">
            <h6 class="bv-site-footer__heading">Resources</h6>
            <ul class="bv-site-footer__links">
              <li><a href="/blogs">Blog</a></li>
              <li><a href="/blogs">Whitepapers</a></li>
              <li><a href="/blogs">Webinars</a></li>
              <li><a href="/get-started">FAQs</a></li>
              <li><a href="/success-stories">Testimonials</a></li>
            </ul>
          </div>
          <div class="footer-col-get-started bv-site-footer__col">
            <h6 class="bv-site-footer__heading">Get started</h6>
            <ul class="bv-site-footer__links">
              <li><a href="/get-started">Email Us</a></li>
              <li><a href="/get-started">Call Us</a></li>
              <li><a href="/get-started">Location</a></li>
              <li><a href="/get-started">FAQs</a></li>
              <li><a href="/get-started">Schedule a Demo</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-legal">
        <div class="footer-legal__links">
          <a href="https://thestart.com.au/terms-conditions/">Terms &amp; conditions</a>
          <span class="footer-legal__divider" aria-hidden="true">|</span>
          <a href="https://thestart.com.au/privacy/">Privacy policy</a>
        </div>
        <div class="footer-legal__credit">
          <a href="https://thestart.com.au" target="_blank" rel="noopener noreferrer">Built for Brainvoice AI</a>
        </div>
      </div>
    </div>
  </footer>

  <script>
    var btn=document.getElementById('bv-menu-btn');
    var nav=document.getElementById('bv-nav-links');
    if(btn&&nav){
      btn.addEventListener('click',function(e){e.stopPropagation();nav.classList.toggle('active');btn.classList.toggle('active');document.body.classList.toggle('bv-menu-open');});
      nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('active');btn.classList.remove('active');document.body.classList.remove('bv-menu-open');});});
      document.addEventListener('click',function(e){if(nav.classList.contains('active')&&!nav.contains(e.target)&&!btn.contains(e.target)){nav.classList.remove('active');btn.classList.remove('active');document.body.classList.remove('bv-menu-open');}});
    }
    var navCSS=document.createElement('style');
    navCSS.textContent='#bv-header{position:fixed;top:0;left:0;z-index:999;width:100%}.bv-nav-links.active{display:flex!important;flex-direction:column!important;position:fixed!important;top:60px!important;left:0!important;right:0!important;background:white!important;padding:2rem 1.5rem!important;box-shadow:0 10px 30px rgba(0,0,0,0.1)!important;gap:1.5rem!important;z-index:1000!important;border-top:1px solid rgba(0,0,0,0.05)!important}.bv-nav-links.active a{color:black!important;font-size:1.2rem!important;font-weight:600!important;text-align:left!important;width:100%!important;display:block!important}.bv-nav-links.active span.bv-sep{display:none!important}';
    document.head.appendChild(navCSS);

    var hdr=document.getElementById('bv-header');
    if(hdr){
      var lastY=0;
      window.addEventListener('scroll',function(){
        if(nav&&nav.classList.contains('active'))return;
        var curY=window.pageYOffset||document.documentElement.scrollTop;
        if(curY>lastY&&curY>30){hdr.style.transform='translateY(-100%)';hdr.style.transition='transform 0.3s ease';}
        else{hdr.style.transform='translateY(0)';hdr.style.transition='transform 0.3s ease';}
        lastY=curY;
      });
    }

    var frame=document.getElementById('wix-frame');
    var wrap=document.getElementById('wix-wrap');
    if(frame&&wrap){
      /* On iframe load, resize wrapper to match actual content height */
      frame.addEventListener('load',function(){
        try{
          var doc=frame.contentWindow.document.documentElement;
          var h=doc.scrollHeight;
          if(h>100){wrap.style.height=h+'px';}
        }catch(ex){}
      });

      /* Sync parent scroll to iframe scroll */
      var syncing=false;
      window.addEventListener('scroll',function(){
        if(syncing)return;
        try{
          var win=frame.contentWindow;
          var doc=win.document.documentElement;
          if(!doc)return;
          var iframeH=doc.scrollHeight-win.clientHeight;
          if(iframeH<=0)return;
          var maxScroll=document.documentElement.scrollHeight-window.innerHeight;
          if(maxScroll<=0)return;
          var ratio=(window.pageYOffset||document.documentElement.scrollTop)/maxScroll;
          syncing=true;
          win.scrollTo(0,ratio*iframeH);
          syncing=false;
        }catch(ex){syncing=false;}
      });
    }
  </script>
</body>
</html>`;
}

export default async function handler(req, res) {
  const slug = req.query.slug;
  const wixUrl = WIX_MAP[slug];
  if (!wixUrl) return res.status(404).send('Not found');

  try {
    if (slug === 'about' || slug === 'get-started' || slug === 'careers') {
      const iframePage = buildIframePage(slug);
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      res.status(200).send(iframePage);
      return;
    }

    const response = await fetch(wixUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    let html = await response.text();

    if (slug === 'blogs') {
      const posts = parseBlogPosts(html);
      const blogSection = buildBlogSection(posts);
      html = html.replace(/<\/body>/i, buildInjectionScript(blogSection, null) + '</body>');
    } else {
      html = html.replace(/<\/body>/i, buildInjectionScript(null, null) + '</body>');
    }

    const skip = new Set(['content-length', 'content-encoding', 'transfer-encoding', 'connection']);
    response.headers.forEach((value, key) => {
      if (!skip.has(key.toLowerCase())) res.setHeader(key, value);
    });
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.status(200).send(html);
  } catch (err) {
    res.status(502).send('Failed to load page');
  }
}
