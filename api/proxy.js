const WIX_MAP = {
  about: 'https://brainvoiceai.wixstudio.com/home/about',
  blogs: 'https://brainvoiceai.wixstudio.com/home/blogs',
  careers: 'https://brainvoiceai.wixstudio.com/home/careers',
  'success-stories': 'https://brainvoiceai.wixstudio.com/home/success-stories',
  'get-started': 'https://brainvoiceai.wixstudio.com/home/contact-us',
};

export default async function handler(req, res) {
  const slug = req.query.slug;
  const wixUrl = WIX_MAP[slug];
  if (!wixUrl) return res.status(404).send('Not found');

  try {
    const response = await fetch(wixUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    let html = await response.text();

    const replacePairs = [
      ['href="https://brainvoiceai.wixstudio.com/home/about"', 'href="/about"'],
      ['href="https://brainvoiceai.wixstudio.com/home/blogs"', 'href="/blogs"'],
      ['href="https://brainvoiceai.wixstudio.com/home/careers"', 'href="/careers"'],
      ['href="https://brainvoiceai.wixstudio.com/home/success-stories"', 'href="/success-stories"'],
      ['href="https://brainvoiceai.wixstudio.com/home/contact-us"', 'href="/get-started"'],
    ];

    for (const [from, to] of replacePairs) {
      while (html.includes(from)) {
        html = html.replace(from, to);
      }
    }

    const skip = new Set(['content-length', 'content-encoding', 'transfer-encoding', 'connection']);
    response.headers.forEach((value, key) => {
      if (!skip.has(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    });

    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch (err) {
    res.status(502).send('Failed to load page');
  }
}
