const WIX_MAP = {
  '/about': 'https://brainvoiceai.wixstudio.com/home/about',
  '/blogs': 'https://brainvoiceai.wixstudio.com/home/blogs',
  '/careers': 'https://brainvoiceai.wixstudio.com/home/careers',
  '/success-stories': 'https://brainvoiceai.wixstudio.com/home/success-stories',
  '/get-started': 'https://brainvoiceai.wixstudio.com/home/contact-us',
};

export const config = {
  matcher: ['/about', '/blogs', '/careers', '/success-stories', '/get-started'],
};

export default async function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const wixUrl = WIX_MAP[pathname];
  if (!wixUrl) return;

  const response = await fetch(wixUrl);
  let html = await response.text();

  html = html.replace(/https?:\/\/brainvoiceai\.wixstudio\.com\/home\/about/g, '/about');
  html = html.replace(/https?:\/\/brainvoiceai\.wixstudio\.com\/home\/blogs/g, '/blogs');
  html = html.replace(/https?:\/\/brainvoiceai\.wixstudio\.com\/home\/careers/g, '/careers');
  html = html.replace(/https?:\/\/brainvoiceai\.wixstudio\.com\/home\/success-stories/g, '/success-stories');
  html = html.replace(/https?:\/\/brainvoiceai\.wixstudio\.com\/home\/contact-us/g, '/get-started');

  html = html.replace(/["' ]\/home\/about/g, '"/about');
  html = html.replace(/["' ]\/home\/blogs/g, '"/blogs');
  html = html.replace(/["' ]\/home\/careers/g, '"/careers');
  html = html.replace(/["' ]\/home\/success-stories/g, '"/success-stories');
  html = html.replace(/["' ]\/home\/contact-us/g, '"/get-started');

  return new Response(html, {
    status: response.status,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
