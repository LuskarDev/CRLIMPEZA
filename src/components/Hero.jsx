import heroVisual from '../assets/hero-visual.jpg'
import Icon from './Icon'
import Reveal from './Reveal'
import { WHATSAPP_NUMBER } from '../data'

const features = [
  { icon: 'shield', label: 'Produtos de Qualidade' },
  { icon: 'truck', label: 'Entrega Rápida' },
  { icon: 'headset', label: 'Atendimento Confiável' },
  { icon: 'dollar', label: 'Melhor Preço' },
]

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <span className="hero-glow hero-glow-a" aria-hidden="true" />
      <span className="hero-glow hero-glow-b" aria-hidden="true" />
      <div className="hero-split">
        <div className="hero-copy">
          <Reveal as="span" className="eyebrow">
            QUALIDADE · ECONOMIA · PRATICIDADE
          </Reveal>

          <Reveal as="h1" delay={80}>
            PRODUTOS DE LIMPEZA <br />
            COM <span className="accent">ENTREGA RÁPIDA!</span>
          </Reveal>

          <Reveal as="p" className="hero-lead" delay={160}>
            Tudo o que você precisa para limpar, higienizar e <b>cuidar do seu ambiente</b> está aqui!
          </Reveal>

          <Reveal as="div" className="hero-features" delay={220}>
            {features.map((f) => (
              <div className="hero-feature" key={f.label}>
                <Icon name={f.icon} alt="" />
                <span>{f.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal as="div" className="hero-actions" delay={280}>
            <a
              className="btn btn-wa"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.2-1.77 1.24-.46.05-.96.24-3.28-.68-2.77-1.1-4.55-3.9-4.7-4.08-.14-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.96.95-2.23.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.2 1.36.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.15 1.3z" />
              </svg>
              Pedir no WhatsApp
            </a>
            <a className="btn btn-outline" href="#produtos">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
              Ver Produtos
            </a>
          </Reveal>
        </div>

        <Reveal as="div" className="hero-visual" variant="scale" delay={120}>
          <div className="hero-image" style={{ backgroundImage: `url(${heroVisual})` }} />
        </Reveal>
      </div>
    </section>
  )
}
