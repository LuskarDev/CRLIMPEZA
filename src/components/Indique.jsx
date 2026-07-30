import { useState } from 'react'
import indiqueBanner from '../assets/indique-banner.jpg'
import Reveal from './Reveal'
import { buildReferralLink, slugifyReferralCode } from '../context/ReferralContext'
import { WHATSAPP_DISPLAY, REFERRAL_DISCOUNT_THRESHOLD, REFERRAL_GIFT_THRESHOLD } from '../data'

export default function Indique() {
  const [nome, setNome] = useState('')
  const [link, setLink] = useState('')
  const [copied, setCopied] = useState(false)

  const code = slugifyReferralCode(nome)

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!code) return
    setLink(buildReferralLink(code))
    setCopied(false)
  }

  const handleCopy = async () => {
    if (!link) return
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      window.clearTimeout(handleCopy._t)
      handleCopy._t = window.setTimeout(() => setCopied(false), 1800)
    } catch {
      // navegador sem suporte a clipboard — a pessoa pode selecionar e copiar manualmente
    }
  }

  const shareText = encodeURIComponent(
    `Oi! Estou usando os produtos da CR Limpeza e recomendo bastante 🧴✨\nFaça seu pedido por esse link e coloca meu nome no cupom de indicação: ${link}`
  )

  return (
    <section className="indique-section" id="indique">
      <div className="wrap">
        <Reveal as="img"
          className="indique-image"
          src={indiqueBanner}
          alt="Indique e Ganhe com a CR Limpeza - indique 3 pessoas e ganhe um desconto especial, ou indique 5 ou mais pessoas e ganhe um brinde exclusivo"
        />

        <Reveal as="div" className="indique-generator" delay={80}>
          <div className="indique-generator-head">
            <h3>Gere seu link de indicação</h3>
            <p>
              Coloque seu nome, gere seu link pessoal e compartilhe com amigos. A cada{' '}
              <strong>{REFERRAL_DISCOUNT_THRESHOLD} pedidos</strong> feitos com seu cupom você ganha um desconto
              especial, e com <strong>{REFERRAL_GIFT_THRESHOLD} ou mais</strong> um brinde exclusivo da CR Limpeza!
            </p>
          </div>

          <form className="indique-form" onSubmit={handleGenerate}>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              aria-label="Seu nome"
            />
            <button type="submit" className="btn btn-green" disabled={!code}>
              Gerar meu link
            </button>
          </form>

          {link && (
            <div className="indique-result">
              <div className="indique-result-link">
                <input type="text" readOnly value={link} onFocus={(e) => e.target.select()} />
                <button type="button" className="btn btn-outline" onClick={handleCopy}>
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
              <a
                className="btn btn-wa btn-block"
                href={`https://wa.me/?text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.2-1.77 1.24-.46.05-.96.24-3.28-.68-2.77-1.1-4.55-3.9-4.7-4.08-.14-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.96.95-2.23.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.2 1.36.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.15 1.3z" />
                </svg>
                Compartilhar no WhatsApp
              </a>
              <p className="indique-result-hint">
                Quando seus amigos usarem esse link, o cupom <strong>{code}</strong> já aparece preenchido no pedido
                deles. É só falar com o Carlos ({WHATSAPP_DISPLAY}) para conferir suas indicações
                e resgatar sua recompensa!
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
