const WIX_MAP = {
  about: 'https://brainvoiceai.wixstudio.com/home/about',
  blogs: 'https://brainvoiceai.wixstudio.com/home/blogs',
  careers: 'https://brainvoiceai.wixstudio.com/home/careers',
  'success-stories': 'https://brainvoiceai.wixstudio.com/home/success-stories',
  'get-started': 'https://brainvoiceai.wixstudio.com/home/contact-us',
};

const INJECT = `
<style id="bv-custom-nav">
  @media (max-width: 980px) {
    #PAGES_CONTAINER, #SITE_HEADER { display: none !important; }
    .bv-mobile-nav { display: flex !important; }
  }
  @media (min-width: 981px) {
    .bv-mobile-nav { display: none !important; }
  }
  .bv-mobile-nav {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 99999;
    background: #fff;
    padding: 14px 20px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    font-family: Arial, Helvetica, sans-serif;
  }
  .bv-mobile-nav__brand {
    font-size: 20px;
    font-weight: 700;
    color: #000;
    text-decoration: none;
    letter-spacing: 1px;
  }
  .bv-mobile-nav__brand span { color: #51C186; }
  .bv-mobile-nav__hamburger {
    background: none; border: none; cursor: pointer;
    width: 32px; height: 24px;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 0;
  }
  .bv-mobile-nav__hamburger span {
    display: block; width: 100%; height: 3px;
    background: linear-gradient(135deg, #13B0CB, #27B6B7, #39BA9F);
    border-radius: 2px; transition: transform 0.3s, opacity 0.3s;
  }
  .bv-mobile-nav__hamburger.is-open span:nth-child(1) { transform: translateY(10.5px) rotate(45deg); }
  .bv-mobile-nav__hamburger.is-open span:nth-child(2) { opacity: 0; }
  .bv-mobile-nav__hamburger.is-open span:nth-child(3) { transform: translateY(-10.5px) rotate(-45deg); }
  .bv-mobile-nav__menu {
    display: none;
    position: fixed;
    top: 56px; left: 0; right: 0;
    background: #fff;
    padding: 1.5rem 1.25rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    z-index: 99998;
    flex-direction: column;
    gap: 1.25rem;
  }
  .bv-mobile-nav__menu.is-open { display: flex; }
  .bv-mobile-nav__menu a {
    color: #000;
    font-size: 1.15rem;
    font-weight: 600;
    text-decoration: none;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }
  .bv-mobile-nav__menu a:last-child { border-bottom: none; }
  .bv-mobile-nav__menu a:hover { color: #39BA9F; }
</style>
<div class="bv-mobile-nav" id="bvNav">
  <a href="/" class="bv-mobile-nav__brand">BRAINVOICE.<span>AI</span></a>
  <button class="bv-mobile-nav__hamburger" id="bvHamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</div>
<div class="bv-mobile-nav__menu" id="bvMenu">
  <a href="/about">About Us</a>
  <a href="/blogs">Blogs</a>
  <a href="/careers">Careers</a>
  <a href="/success-stories">Success Stories</a>
  <a href="/get-started">Get Started</a>
</div>
<script>
(function(){
  var h=document.getElementById('bvHamburger');
  var m=document.getElementById('bvMenu');
  if(h&&m){h.addEventListener('click',function(){
    h.classList.toggle('is-open');
    m.classList.toggle('is-open');
  });}
})();
</script>`;

export default async function handler(req, res) {
  const slug = req.query.slug;
  const wixUrl = WIX_MAP[slug];

  if (!wixUrl) {
    return res.status(404).send('Not found');
  }

  try {
    const response = await fetch(wixUrl);
    let html = await response.text();

    html = html.replace(/<\/body>/i, INJECT + '\n</body>');

    const skipHeaders = new Set([
      'content-length', 'content-encoding', 'transfer-encoding', 'connection'
    ]);

    response.headers.forEach((value, key) => {
      if (!skipHeaders.has(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    });

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.status(200).send(html);
  } catch (err) {
    res.status(502).send('Failed to fetch page');
  }
}
