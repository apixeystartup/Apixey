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
    { slug: 'contact-us', label: 'Get Started', hideDesktop: true },
  ];

  const navLinksHtml = links.map((l, i) => {
    const isLast = i === links.length - 1;
    const hideClass = l.hideDesktop ? ' bv-hide-desktop' : '';
    const nextIsHidden = !isLast && links[i+1].hideDesktop;
    const sep = (isLast || nextIsHidden) ? '' : '<span class="bv-sep">/</span>';
    return '<a href="/' + l.slug + '" class="bv-nav-link' + hideClass + '"><div class="btn-text">' + l.label + '</div></a>' + sep;
  }).join('');

  const footerB64 = Buffer.from(`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <footer id="bv-footer" class="bv-site-footer">
      <svg class="bv-site-footer__shape" viewBox="0 0 1316 71" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.398438 71H1316V0H71.3984L0.398438 71Z" fill="white" />
      </svg>
      <div class="bv-site-footer__inner">
        <div class="bv-site-footer__grid">
          <div class="bv-site-footer__brand">
            <a href="https://brainvoice.ai" class="bv-site-footer__logo-link">
              <span class="bv-site-footer__logo-text">BRAINVOICE.<span class="bv-site-footer__logo-ai">AI</span></span>
            </a>
            <p class="bv-site-footer__tagline">Brainvoice.AI is a cutting-edge digital marketing analytical and IT company dedicated to revolutionizing the way organizations achieve business growth and expansion.</p>
            <div class="footer-social-links">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
              <a href="https://www.instagram.com/thestart.agency/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/thestartagency" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="X"><i class="fab fa-twitter"></i></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
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
                <li><a href="/blogs">Knowledge Base</a></li>
                <li><a href="/success-stories">Testimonials</a></li>
              </ul>
            </div>
            <div class="footer-col-get-started bv-site-footer__col">
              <h6 class="bv-site-footer__heading">Get started</h6>
              <form class="bv-site-footer__form" action="/get-started" method="get">
                <label class="bv-site-footer__field">
                  <span>First name*</span>
                  <input type="text" name="first_name" placeholder="First name" required>
                </label>
                <label class="bv-site-footer__field">
                  <span>Last name*</span>
                  <input type="text" name="last_name" placeholder="Last name" required>
                </label>
                <label class="bv-site-footer__field">
                  <span>Email*</span>
                  <input type="email" name="email" placeholder="name@email.com" required>
                </label>
                <button type="submit" class="bv-site-footer__submit">Submit</button>
              </form>
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
    '@font-face{font-family:"ki";src:url("https://brainvoice.ai/wp-content/themes/startdigital/static/font/ki.woff?v=2")}',
    '@font-face{font-family:"teknolog";src:url("https://brainvoice.ai/wp-content/themes/startdigital/static/font/nb_architekt_bold.woff2?v=2")}',
    '#SITE_HEADER,#SITE_HEADER-wrapper,#SITE_HEADER-placeholder{visibility:hidden!important;height:0!important;overflow:hidden!important;margin:0!important;padding:0!important}',
    '#SITE_FOOTER,#SITE_FOOTER-wrapper,#SITE_FOOTER-placeholder{display:none!important}',
    '#wmbr-base,[id*="wmbr"],[class*="wmbr"]{display:none!important}',
    '#bv-header{position:relative;z-index:50;width:100%;padding:40px 0 20px 0;background:rgba(255,255,255,0.95);box-sizing:border-box}',
    '#bv-header *{font-family:ki,sans-serif!important}',
    '#bv-header .bv-nav-link .btn-text,#bv-header .bv-sep,#bv-header .btn-text-cta{font-family:teknolog,sans-serif!important}',
    '.bv-header-inner{position:relative;width:100%;display:flex;align-items:center;justify-content:space-between;padding-inline:0}',
    '.bv-nav-links{display:none;flex-direction:row;align-items:center;gap:12px}',
    '@media(min-width:768px){.bv-nav-links{display:flex}}',
    '.bv-nav-links.active{display:flex!important;flex-direction:column!important;position:absolute!important;top:100%!important;left:0!important;right:0!important;background:white!important;padding:2rem!important;box-shadow:0 10px 30px rgba(0,0,0,0.1)!important;gap:1.5rem!important;z-index:100!important;border-top:1px solid rgba(0,0,0,0.05)!important}',
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
    '.bv-cta-btn{height:44px;display:flex;align-items:stretch;text-decoration:none;margin-left:20px;transition:transform 0.2s ease,box-shadow 0.2s ease}',
    '.bv-cta-btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(15,118,110,0.3)}',
    '.bv-cta-btn svg{height:44px;width:20px}',
    '.bv-cta-btn .fill-brown{fill:#0f766e}',
    '.bv-cta-btn .btn-text-cta{padding:0 16px;background:#0f766e;display:flex;align-items:center;justify-content:center;color:white;font-size:15px;font-weight:500;letter-spacing:0.5px;font-family:teknolog,sans-serif}',
    '.bv-hamburger{display:flex;background:none;border:none;cursor:pointer;padding:5px}',
    '.bv-hamburger:hover{opacity:0.8}',
    '@media(min-width:768px){.bv-hamburger{display:none}}',
    '.bv-logo{padding-left:10px}',
    '.bv-right-nav{padding-right:10px}',
    '@media(min-width:768px){.bv-logo{padding-left:40px}}',
    '@media(min-width:768px){.bv-right-nav{padding-right:40px}}',
    '#bv-footer{font-family:ki,sans-serif!important}',
    '#bv-footer .bv-site-footer__heading{font-family:teknolog,sans-serif!important}',
    '#bv-footer .bv-site-footer__links a{font-family:ki,sans-serif}',
    '.bv-site-footer{position:relative;z-index:20;width:100%;color:#0f5053}',
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
    '.bv-site-footer__form{display:flex;flex-direction:column;gap:0.5rem}',
    '.bv-site-footer__field{display:flex;flex-direction:column;gap:0.15rem}',
    '.bv-site-footer__field span{font-size:0.75rem;text-transform:uppercase;letter-spacing:0.04em;color:#0f5053}',
    '.bv-site-footer__field input{width:100%;border:none;border-bottom:1px solid rgba(15,80,83,0.35);background:transparent;padding:0.4rem 0;font-size:0.8rem;font-family:inherit;color:#0f5053;outline:none}',
    '.bv-site-footer__field input:focus{border-bottom-color:#13b0cb}',
    '.bv-site-footer__submit{width:100%;margin-top:0.25rem;padding:0.55rem 0.75rem;border:none;background:#167f7f;color:#fff;font-family:inherit;font-size:0.85rem;cursor:pointer;text-transform:uppercase;letter-spacing:0.05em}',
    '.bv-site-footer__submit:hover{background:#0f8688}',
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
      '<a href="https://brainvoice.ai" rel="home" style="display:flex;align-items:center;gap:12px;text-decoration:none;" class="bv-logo">'+
        '<span style="font-family:ki,sans-serif;font-size:30px;font-weight:700;color:black;letter-spacing:1px;">BRAINVOICE.<span style="color:#51C186;">AI</span></span>'+
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
      btn.addEventListener('click',function(e){e.stopPropagation();nav.classList.toggle('active');});
      nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('active');});});
      document.addEventListener('click',function(e){if(nav.classList.contains('active')&&!nav.contains(e.target)&&!btn.contains(e.target)){nav.classList.remove('active');}});
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
    { slug: 'contact-us', label: 'Get Started', hideDesktop: true },
  ];

  const navLinksHtml = links.map((l, i) => {
    const isLast = i === links.length - 1;
    const hideClass = l.hideDesktop ? ' bv-hide-desktop' : '';
    const nextIsHidden = !isLast && links[i+1].hideDesktop;
    const sep = (isLast || nextIsHidden) ? '' : '<span class="bv-sep">/</span>';
    return '<a href="/' + l.slug + '" class="bv-nav-link' + hideClass + '"><div class="btn-text">' + l.label + '</div></a>' + sep;
  }).join('');

  const wixUrl = WIX_MAP[slug];
  const pageTitle = slug === 'about' ? 'About Us' : 'Get Started';

  const address = 'Brainvoice.ai, Ascendas, International Tech Park, Bridge+, Chennai, Tamil Nadu 600013';
  const encodedAddress = encodeURIComponent(address);

  const mapSection = '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle} - Brainvoice AI</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
    @font-face{font-family:"ki";src:url("https://brainvoice.ai/wp-content/themes/startdigital/static/font/ki.woff?v=2")}
    @font-face{font-family:"teknolog";src:url("https://brainvoice.ai/wp-content/themes/startdigital/static/font/nb_architekt_bold.woff2?v=2")}
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:ki,sans-serif;overflow-x:hidden;}
    #bv-header{position:relative;z-index:50;width:100%;padding:40px 0 20px 0;background:rgba(255,255,255,0.95);box-sizing:border-box;}
    #bv-header *{font-family:ki,sans-serif!important;}
    #bv-header .bv-nav-link .btn-text,#bv-header .bv-sep,#bv-header .btn-text-cta{font-family:teknolog,sans-serif!important;}
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
    .bv-cta-btn{height:44px;display:flex;align-items:stretch;text-decoration:none;margin-left:20px;transition:transform 0.2s ease,box-shadow 0.2s ease;}
    .bv-cta-btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(15,118,110,0.3);}
    .bv-cta-btn svg{height:44px;width:20px;}
    .bv-cta-btn .fill-brown{fill:#0f766e;}
    .bv-cta-btn .btn-text-cta{padding:0 16px;background:#0f766e;display:flex;align-items:center;justify-content:center;color:white;font-size:15px;font-weight:500;letter-spacing:0.5px;font-family:teknolog,sans-serif;}
    .bv-hamburger{display:flex;background:none;border:none;cursor:pointer;padding:5px;}
    .bv-hamburger:hover{opacity:0.8;}
    @media(min-width:768px){.bv-hamburger{display:none;}}
    .bv-logo{padding-left:10px;}
    .bv-right-nav{padding-right:10px;}
    @media(min-width:768px){.bv-logo{padding-left:40px;}}
    @media(min-width:768px){.bv-right-nav{padding-right:40px;}}
    #bv-footer{font-family:ki,sans-serif!important;}
    #bv-footer *{font-family:ki,sans-serif!important;}
    .bv-site-footer{position:relative;z-index:20;width:100%;color:#0f5053;}
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
    .footer-legal{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.65rem;width:100%;max-width:1400px;margin:0 auto;padding:1.75rem 0 1.5rem;border-top:1px dashed rgba(15,80,83,0.35);text-align:center;font-size:0.75rem;}
    .footer-legal__links{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;gap:0.75rem;margin-top:0.75rem;}
    .footer-legal__links a{color:#0e7d80;text-decoration:none;}
    .footer-legal__links a:hover{text-decoration:underline;}
    .footer-legal__divider{width:1px;height:0.75rem;background:#0f5053;flex-shrink:0;}
    .footer-legal__credit a{color:#315e60;text-decoration:none;}
    @media(min-width:1024px){.bv-site-footer__grid{display:grid;grid-template-columns:minmax(200px,1.35fr) minmax(0,0.85fr) minmax(0,0.85fr) minmax(0,0.85fr) minmax(0,0.8fr) minmax(160px,1fr);align-items:start;gap:1.25rem 1rem;}.bv-site-footer__col--explore{display:none;}.footer-resources-form-row{display:contents;}.bv-site-footer__brand{flex:unset;max-width:none;}.bv-site-footer__col{flex:unset;min-width:0;padding-top:0.5rem;}.footer-col-resources,.footer-col-get-started{flex:unset;max-width:none;}.bv-site-footer__heading{font-size:1.05rem;position:relative;padding-bottom:0.5rem;}.bv-site-footer__heading::after{content:"";display:block;width:2.5rem;height:3px;margin-top:0.35rem;background:#13b0cb;}.bv-site-footer__links a{font-size:0.72rem;white-space:normal;line-height:1.35;}.footer-legal{flex-direction:row;justify-content:space-between;align-items:center;text-align:left;}.footer-legal__links{margin-top:0;}}
    #wix-frame{width:100%;min-height:80vh;border:none;display:block;}
    #bv-map-section{font-family:ki,sans-serif;max-width:1200px;margin:0 auto;padding:0 20px 60px;}
    #bv-map-section h2{font-family:teknolog,sans-serif;font-size:clamp(1.2rem,3vw,1.8rem);font-weight:700;text-transform:uppercase;text-align:center;margin-bottom:16px;color:#000;}
    #bv-map-section .map-container{width:100%;height:400px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);}
    #bv-map-section .map-container iframe{width:100%;height:100%;border:0;}
    #bv-map-section .map-address{text-align:center;color:#666;margin-top:12px;font-size:0.9rem;}
  </style>
</head>
<body>
  <header id="bv-header">
    <div class="bv-header-inner">
      <a href="https://brainvoice.ai" rel="home" style="display:flex;align-items:center;gap:12px;text-decoration:none;" class="bv-logo">
        <span style="font-family:ki,sans-serif;font-size:30px;font-weight:700;color:black;letter-spacing:1px;">BRAINVOICE.<span style="color:#51C186;">AI</span></span>
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

  <iframe id="wix-frame" src="${wixUrl}"></iframe>

  ${mapSection}

  <footer id="bv-footer" class="bv-site-footer">
    <svg class="bv-site-footer__shape" viewBox="0 0 1316 71" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.398438 71H1316V0H71.3984L0.398438 71Z" fill="white" />
    </svg>
    <div class="bv-site-footer__inner">
      <div class="bv-site-footer__grid">
        <div class="bv-site-footer__brand">
          <a href="https://brainvoice.ai" class="bv-site-footer__logo-link">
            <span class="bv-site-footer__logo-text">BRAINVOICE.<span class="bv-site-footer__logo-ai">AI</span></span>
          </a>
          <p class="bv-site-footer__tagline">Brainvoice.AI is a cutting-edge digital marketing analytical and IT company dedicated to revolutionizing the way organizations achieve business growth and expansion.</p>
          <div class="footer-social-links">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/thestart.agency/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/thestartagency" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="X"><i class="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="bv-social-btn" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
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
              <li><a href="/blogs">Knowledge Base</a></li>
              <li><a href="/success-stories">Testimonials</a></li>
            </ul>
          </div>
          <div class="footer-col-get-started bv-site-footer__col">
            <h6 class="bv-site-footer__heading">Get started</h6>
            <form class="bv-site-footer__form" action="/get-started" method="get">
              <label class="bv-site-footer__field">
                <span>First name*</span>
                <input type="text" name="first_name" placeholder="First name" required>
              </label>
              <label class="bv-site-footer__field">
                <span>Last name*</span>
                <input type="text" name="last_name" placeholder="Last name" required>
              </label>
              <label class="bv-site-footer__field">
                <span>Email*</span>
                <input type="email" name="email" placeholder="name@email.com" required>
              </label>
              <button type="submit" class="bv-site-footer__submit">Submit</button>
            </form>
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
      btn.addEventListener('click',function(e){e.stopPropagation();nav.classList.toggle('active');});
      nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('active');});});
      document.addEventListener('click',function(e){if(nav.classList.contains('active')&&!nav.contains(e.target)&&!btn.contains(e.target)){nav.classList.remove('active');}});
    }
    var navCSS=document.createElement('style');
    navCSS.textContent='.bv-nav-links.active{display:flex!important;flex-direction:column!important;position:absolute!important;top:100%!important;left:0!important;right:0!important;background:white!important;padding:2rem!important;box-shadow:0 10px 30px rgba(0,0,0,0.1)!important;gap:1.5rem!important;z-index:100!important;border-top:1px solid rgba(0,0,0,0.05)!important}.bv-nav-links.active a{color:black!important;font-size:1.2rem!important;font-weight:600!important;text-align:left!important;width:100%!important;display:block!important}.bv-nav-links.active span.bv-sep{display:none!important}';
    document.head.appendChild(navCSS);
  </script>
</body>
</html>`;
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

    if (slug === 'get-started' || slug === 'about') {
      const iframePage = buildIframePage(slug);
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      res.status(200).send(iframePage);
      return;
    }

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
