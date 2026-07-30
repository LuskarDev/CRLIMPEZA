// Controle simples de consentimento de cookies (LGPD).
// Enquanto o visitante não decidir, nenhum cookie de rastreamento
// (origem da visita / histórico de pedidos) é gravado.

const CONSENT_COOKIE = 'cr_cookie_consent' // 'accepted' | 'rejected'
const COOKIE_DAYS = 365

function setCookie(name, value, days = COOKIE_DAYS) {
  if (typeof document === 'undefined') return
  const maxAge = days * 24 * 60 * 60
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax`
}

function getCookie(name) {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : null
}

export function getConsent() {
  return getCookie(CONSENT_COOKIE) // null = ainda não decidiu
}

export function hasAcceptedCookies() {
  return getConsent() === 'accepted'
}

export function acceptCookies() {
  setCookie(CONSENT_COOKIE, 'accepted')
}

export function rejectCookies() {
  // Guarda a decisão (esse único cookie é necessário para não perguntar de novo),
  // mas nenhum outro cookie de rastreamento é criado a partir daqui.
  setCookie(CONSENT_COOKIE, 'rejected')
}
