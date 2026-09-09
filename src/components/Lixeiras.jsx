import { lixeiraInfo, WHATSAPP_NUMBER } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'
import lixeiraInstalada from '../assets/lixeiras/lixeira-instalada.jpg'
import lixeiraBanner from '../assets/lixeiras/lixeira-banner.jpg'

const waMessage = encodeURIComponent(
  `Olá! Vi a Lixeira de Ferro no site e tenho interesse.\n\n📏 Tamanho: ${lixeiraInfo.size}\n🔩 Material: ${lixeiraInfo.material}\n💰 Valor: R$ ${lixeiraInfo.price.toFixed(2).replace('.', ',')} (${lixeiraInfo.installments})\n\nGostaria de fazer um orçamento!`
)

export default function Lixeiras() {
  return (
    <section className="lixeiras-section" id="lixeiras">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-eyebrow">NOVIDADE</span>
          <h2>Lixeiras de Ferro Galvanizado</h2>
          <p>Residencial e comercial, feitas para durar. Direto com o fabricante!</p>
        </Reveal>

        <div className="lixeiras-layout">
          <Reveal as="div" className="lixeiras-media" variant="scale">
            <img src={lixeiraInstalada} alt="Lixeira de ferro galvanizado instalada" />
            <img src={lixeiraBanner} alt="Lixeiras de Ferro - Residencial e Comercial" className="lixeiras-media-banner" />
          </Reveal>

          <Reveal as="div" className="lixeiras-info" delay={100}>
            <span className="lixeiras-badge">Ferro Galvanizado</span>
            <h3>Lixeira Residencial e Comercial</h3>

            <div className="lixeiras-price-box">
              <div>
                <span className="lixeiras-price-label">Tamanho padrão</span>
                <strong>{lixeiraInfo.size}</strong>
              </div>
              <div>
                <span className="lixeiras-price-label">Valor</span>
                <strong className="lixeiras-price">R$ {lixeiraInfo.price.toFixed(2).replace('.', ',')}</strong>
                <span className="lixeiras-installments">ou {lixeiraInfo.installments}</span>
              </div>
            </div>

            <ul className="lixeiras-features">
              {lixeiraInfo.features.map((f) => (
                <li key={f.title}>
                  <span className="lixeiras-feature-icon">
                    <Icon name={f.icon} alt="" />
                  </span>
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.text}</span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="lixeiras-coverage">
              🚚 Atendemos <strong>{lixeiraInfo.coverage}</strong>
            </p>

            <a
              className="btn btn-wa btn-block"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.2-1.77 1.24-.46.05-.96.24-3.28-.68-2.77-1.1-4.55-3.9-4.7-4.08-.14-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.96.95-2.23.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.2 1.36.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.15 1.3z" />
              </svg>
              Pedir orçamento pelo WhatsApp
            </a>
            <span className="lixeiras-seller">
              Atendimento: {lixeiraInfo.sellerName} · {lixeiraInfo.sellerRole}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
