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

  if (!wixUrl) {
    return res.status(404).send('Not found');
  }

  try {
    const response = await fetch(wixUrl);
    let html = await response.text();

    html = html.replace(/href="https?:\/\/brainvoiceai\.wixstudio\.com\/home\/about"/g, 'href="/about"');
    html = html.replace(/href="https?:\/\/brainvoiceai\.wixstudio\.com\/home\/blogs"/g, 'href="/blogs"');
    html = html.replace(/href="https?:\/\/brainvoiceai\.wixstudio\.com\/home\/careers"/g, 'href="/careers"');
    html = html.replace(/href="https?:\/\/brainvoiceai\.wixstudio\.com\/home\/success-stories"/g, 'href="/success-stories"');
    html = html.replace(/href="https?:\/\/brainvoiceai\.wixstudio\.com\/home\/contact-us"/g, 'href="/get-started"');

    html = html.replace(/href="\/home\/about"/g, 'href="/about"');
    html = html.replace(/href="\/home\/blogs"/g, 'href="/blogs"');
    html = html.replace(/href="\/home\/careers"/g, 'href="/careers"');
    html = html.replace(/href="\/home\/success-stories"/g, 'href="/success-stories"');
    html = html.replace(/href="\/home\/contact-us"/g, 'href="/get-started"');

    html = html.replace(/href='\/home\/about'/g, "href='/about'");
    html = html.replace(/href='\/home\/blogs'/g, "href='/blogs'");
    html = html.replace(/href='\/home\/careers'/g, "href='/careers'");
    html = html.replace(/href='\/home\/success-stories'/g, "href='/success-stories'");
    html = html.replace(/href='\/home\/contact-us'/g, "href='/get-started'");

    html = html.replace(/href="https?:\/\/brainvoiceai\.wixstudio\.com\/home\/about\/"/g, 'href="/about/"');
    html = html.replace(/href="https?:\/\/brainvoiceai\.wixstudio\.com\/home\/blogs\/"/g, 'href="/blogs/"');
    html = html.replace(/href="https?:\/\/brainvoiceai\.wixstudio\.com\/home\/careers\/"/g, 'href="/careers/"');
    html = html.replace(/href="https?:\/\/brainvoiceai\.wixstudio\.com\/home\/success-stories\/"/g, 'href="/success-stories/"');
    html = html.replace(/href="https?:\/\/brainvoiceai\.wixstudio\.com\/home\/contact-us\/"/g, 'href="/get-started/"');

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(response.status).send(html);
  } catch (err) {
    res.status(502).send('Failed to fetch page');
  }
}
