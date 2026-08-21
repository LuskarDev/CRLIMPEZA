import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const ReferralContext = createContext(null)

const STORAGE_KEY = 'cr_referral_code'
const URL_PARAM = 'indicacao'

// Remove acentos, espaços e caracteres especiais para gerar um código de indicação limpo
export function slugifyReferralCode(name) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toUpperCase()
    .slice(0, 30)
}

export function buildReferralLink(code) {
  if (typeof window === 'undefined') return ''
  const url = new URL(window.location.origin + window.location.pathname)
  url.searchParams.set(URL_PARAM, code)
  return url.toString()
}

export function ReferralProvider({ children }) {
  const [referralCode, setReferralCodeState] = useState('')

  // Ao carregar a página: se veio um link de indicação (?indicacao=CODIGO), guarda no navegador
  // para que o cupom seja lembrado em qualquer formulário de pedido que a pessoa preencher depois.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const fromUrl = params.get(URL_PARAM)
      if (fromUrl) {
        const clean = slugifyReferralCode(fromUrl)
        if (clean) {
          window.localStorage.setItem(STORAGE_KEY, clean)
          setReferralCodeState(clean)
          return
        }
      }
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) setReferralCodeState(stored)
    } catch {
      // localStorage indisponível (modo privado, etc.) — segue sem cupom salvo
    }
  }, [])

  const setReferralCode = useCallback((value) => {
    setReferralCodeState(value)
    try {
      if (value) {
        window.localStorage.setItem(STORAGE_KEY, value)
      } else {
        window.localStorage.removeItem(STORAGE_KEY)
      }
    } catch {
      // ignora se localStorage não estiver disponível
    }
  }, [])

  const value = { referralCode, setReferralCode }

  return <ReferralContext.Provider value={value}>{children}</ReferralContext.Provider>
}

export function useReferral() {
  const ctx = useContext(ReferralContext)
  if (!ctx) throw new Error('useReferral deve ser usado dentro de ReferralProvider')
  return ctx
}
