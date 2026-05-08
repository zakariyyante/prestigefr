import { parseCookies, setCookie, destroyCookie } from 'nookies';

export const GCLID_COOKIE_NAME = 'gclid';

export function getStoredGclid() {
  const cookies = parseCookies();
  return cookies[GCLID_COOKIE_NAME] || null;
}

export function storeGclid(gclid: string) {
  setCookie(null, GCLID_COOKIE_NAME, gclid, {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
    secure: true,
    sameSite: 'lax'
  });
}

export function deleteGclid() {
  destroyCookie(null, GCLID_COOKIE_NAME, { path: '/' });
}

export function appendGclidToUrl(url: string, gclid: string | null) {
  if (!gclid) return url;
  // Assumes URL already ends with a parameter or has = at the end
  return `${url}${gclid}`;
}
