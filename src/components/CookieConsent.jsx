import { useEffect, useState } from 'react'
import { getConsent, acceptCookies, rejectCookies } from '../utils/cookieConsent'
import { detectVisitSource } from '../utils/customerTracking'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Só mostra o aviso se o visitante ainda não decidiu antes
    if (!getConsent()) setVisible(true)
  }, [])

  if (!visible) return null

  const handleAccept = () => {
    acceptCookies()
    detectVisitSource()
    setVisible(false)
  }

  const handleReject = () => {
    rejectCookies()
    setVisible(false)
  }

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <p>
        Usamos cookies para lembrar suas preferências e agilizar seu atendimento (como identificar se este é seu
        primeiro pedido). Você pode aceitar ou recusar.
      </p>
      <div className="cookie-consent-actions">
        <button type="button" className="cookie-btn cookie-btn-reject" onClick={handleReject}>
          Recusar
        </button>
        <button type="button" className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
          Aceitar cookies
        </button>
      </div>
    </div>
  )
}
