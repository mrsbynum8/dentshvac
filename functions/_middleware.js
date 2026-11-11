// Cloudflare Pages middleware: one canonical host for SEO.
// The bare domain and the default pages.dev address 301 to www, keeping path + query.
// Branch previews (e.g. astro-redesign.dentshvac.pages.dev) are left alone.
const CANONICAL_HOST = 'www.dentsheatingandcooling.com';
const REDIRECT_HOSTS = new Set(['dentsheatingandcooling.com', 'dentshvac.pages.dev']);

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
