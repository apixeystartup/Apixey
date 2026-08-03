const WIX_MAP = {
  about: 'https://brainvoiceai.wixstudio.com/home/about',
  blogs: 'https://brainvoiceai.wixstudio.com/home/blogs',
  careers: 'https://brainvoiceai.wixstudio.com/home/careers',
  'success-stories': 'https://brainvoiceai.wixstudio.com/home/success-stories',
  'get-started': 'https://brainvoiceai.wixstudio.com/home/contact-us',
};

const URL_MAP = {
  'brainvoiceai.wixstudio.com/home/about': '/about',
  'brainvoiceai.wixstudio.com/home/blogs': '/blogs',
  'brainvoiceai.wixstudio.com/home/careers': '/careers',
  'brainvoiceai.wixstudio.com/home/success-stories': '/success-stories',
  'brainvoiceai.wixstudio.com/home/contact-us': '/get-started',
};

const NAV_SCRIPT = `<script>
(function(){
  var map=${JSON.stringify(URL_MAP)};
  document.addEventListener('click',function(e){
    var a=e.target.closest('a');
    if(!a)return;
    var h=a.getAttribute('href');
    if(!h)return;
    for(var k in map){
      if(h.indexOf(k)!==-1){e.preventDefault();window.location.href=map[k];return;}
    }
  });
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

    html = html.replace(/<\/body>/i, NAV_SCRIPT + '</body>');

    const skipHeaders = new Set([
      'content-length', 'content-encoding', 'transfer-encoding', 'connection'
    ]);

    response.headers.forEach((value, key) => {
      if (!skipHeaders.has(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    });

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (err) {
    res.status(502).send('Failed to fetch page');
  }
}
