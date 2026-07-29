import { showcaseServices, quickOrderProducts, WHATSAPP_NUMBER } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'
import dedetizacaoImg from '../assets/gallery/dedetizacao-real/dedetizacao-1.jpg'
import limpezaImg from '../assets/hero-visual.jpg'
import cloroImg from '../assets/products-banner.jpg'

const showcaseImages = {
  dedetizacao: dedetizacaoImg,
  limpeza: limpezaImg,
  cloro: cloroImg,
}

export default function Services() {
  return (
    <section className="services-section" id="servicos">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-eyebrow">NOSSOS SERVIÇOS</span>
          <h2>Soluções completas para você</h2>
        </Reveal>

        <div className="services-layout">
          <div className="services-grid">
            {showcaseServices.map((s, i) => (
              <Reveal as="div" className="service-card" key={s.id} delay={i * 90}>
                <div className="service-card-media">
                  <img src={showcaseImages[s.id]} alt={s.name} />
                  <span className="service-card-badge">
                    <Icon name={s.icon} alt="" />
                  </span>
                </div>
                <div className="service-card-body">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <a href={s.href} className="service-card-link">
                    Saiba mais
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal as="aside" className="quick-order" delay={200}>
            <div className="quick-order-head">
              <h3>
                Precisando de <br /> Cloro ou Desinfetante?
              </h3>
              <p>Peça agora com entrega rápida!</p>
            </div>

            <ul className="quick-order-list">
              {quickOrderProducts.map((p) => (
                <li key={p.id}>
                  <img src={p.img} alt={p.name} />
                  <div className="quick-order-info">
                    <strong>{p.name}</strong>
                    <span>R$ {p.price}</span>
                  </div>
                  <a
                    className="quick-order-btn"
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Olá! Gostaria de pedir: ${p.name} - R$ ${p.price}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pedir
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.2-1.77 1.24-.46.05-.96.24-3.28-.68-2.77-1.1-4.55-3.9-4.7-4.08-.14-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.96.95-2.23.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.2 1.36.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.15 1.3z" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <a className="btn btn-outline btn-block quick-order-all" href="#produtos">
              Ver todos os produtos
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
