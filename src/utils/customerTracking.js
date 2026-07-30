// Rastreamento simples via cookies (sem backend), para o time comercial saber:
// - se o visitante veio por link/indicação/campanha ou acesso direto
// - se é a 1ª, 2ª, 3ª... compra do cliente neste navegador
// - histórico dos últimos pedidos feitos
//
// Tudo fica salvo em cookies no navegador do próprio cliente (365 dias),
// e os dados são incluídos automaticamente na mensagem enviada pelo WhatsApp.

const SOURCE_COOKIE = 'cr_source'
const FIRST_VISIT_COOKIE = 'cr_first_visit'
const ORDER_COUNT_COOKIE = 'cr_order_count'
const LAST_ORDERS_COOKIE = 'cr_last_orders'
const MAX_HISTORY = 10
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

function consentGranted() {
  return getCookie('cr_cookie_consent') === 'accepted'
}

/**
 * Detecta de onde o visitante veio (só na primeira vez que o cookie ainda não existe):
 * - ?ref=xxx ou ?indicacao=xxx na URL -> indicação
 * - ?utm_source=xxx na URL -> campanha/anúncio
 * - document.referrer de outro domínio -> veio por link externo
 * - nada disso -> acesso direto
 */
export function detectVisitSource() {
  if (typeof window === 'undefined' || !consentGranted()) return null
  const existing = getCookie(SOURCE_COOKIE)
  if (existing) return existing

  const params = new URLSearchParams(window.location.search)
  const ref = params.get('ref') || params.get('indicacao')
  const utmSource = params.get('utm_source')
  let source = 'direto'

  if (ref) {
    source = `indicacao:${ref}`
  } else if (utmSource) {
    source = `campanha:${utmSource}`
  } else if (document.referrer) {
    try {
      const refHost = new URL(document.referrer).hostname
      if (refHost && refHost !== window.location.hostname) {
        source = `link:${refHost}`
      }
    } catch {
      /* referrer inválido, ignora */
    }
  }

  setCookie(SOURCE_COOKIE, source)
  if (!getCookie(FIRST_VISIT_COOKIE)) {
    setCookie(FIRST_VISIT_COOKIE, new Date().toISOString())
  }
  return source
}

export function getVisitSourceLabel() {
  if (!consentGranted()) return 'Não informado (cookies não aceitos)'
  const source = getCookie(SOURCE_COOKIE) || detectVisitSource()
  if (!source || source === 'direto') return 'Acesso direto'
  if (source.startsWith('indicacao:')) return `Indicação (código: ${source.split(':')[1]})`
  if (source.startsWith('campanha:')) return `Campanha/Anúncio (${source.split(':')[1]})`
  if (source.startsWith('link:')) return `Link externo (${source.split(':')[1]})`
  return source
}

function readOrderHistory() {
  const raw = getCookie(LAST_ORDERS_COOKIE)
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function getOrderCount() {
  return parseInt(getCookie(ORDER_COUNT_COOKIE) || '0', 10)
}

export function getOrderHistory() {
  return readOrderHistory()
}

function ordinalLabel(n) {
  if (n === 1) return '1ª compra (cliente novo)'
  if (n === 2) return '2ª compra'
  if (n === 3) return '3ª compra'
  return `${n}ª compra (cliente fiel)`
}

/**
 * Chame isso ao FINALIZAR um pedido (clique em "Enviar pelo WhatsApp").
 * Incrementa o contador, guarda no histórico (cookie) e devolve os dados
 * prontos para anexar na mensagem do WhatsApp.
 */
export function recordOrder({ type, summary, total } = {}) {
  if (!consentGranted()) {
    return {
      orderNumber: null,
      isFirstPurchase: null,
      ordinalLabel: 'Não informado (cookies não aceitos)',
      source: null,
      sourceLabel: 'Não informado (cookies não aceitos)',
    }
  }

  const previousCount = getOrderCount()
  const orderNumber = previousCount + 1
  setCookie(ORDER_COUNT_COOKIE, String(orderNumber))

  const history = readOrderHistory()
  const entry = {
    date: new Date().toISOString(),
    type: type || 'pedido',
    summary: summary || '',
    total: typeof total === 'number' ? total : null,
  }
  const updated = [entry, ...history].slice(0, MAX_HISTORY)
  setCookie(LAST_ORDERS_COOKIE, JSON.stringify(updated))

  const source = getCookie(SOURCE_COOKIE) || detectVisitSource()

  return {
    orderNumber,
    isFirstPurchase: orderNumber === 1,
    ordinalLabel: ordinalLabel(orderNumber),
    source,
    sourceLabel: getVisitSourceLabel(),
  }
}
