import { sinucaInfo, sinucaProducts, WHATSAPP_NUMBER } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'

const productImages = import.meta.glob('../assets/sinuca/produtos/*.png', { eager: true, import: 'default' })

function getProductImg(key) {
  const match = Object.entries(productImages).find(([path]) => path.includes(`/${key}.png`))
  return match ? match[1] : undefined
}

function waLinkFor(name) {
  const msg = encodeURIComponent(
    `Olá! Vi a ${name} no site e gostaria de um orçamento sem compromisso!`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}

export default function Sinuca() {
  return (
    <section className="sinuca-section" id="sinuca">
      <div className="wrap">
        <Reveal as="div" className="section-head sinuca-head">
          <span className="section-eyebrow sinuca-eyebrow">SINUCA JOVANE</span>
          <h2>Mesas Personalizadas, Pebolim e Fliperama</h2>
          <p>Mesas de sinuca personalizadas, pebolim profissional e fliperama multigames com entrega e montagem.</p>
        </Reveal>

        <div className="sinuca-features">
          {sinucaInfo.features.map((f) => (
            <div className="sinuca-feature" key={f.title}>
              <span className="sinuca-feature-icon">
                <Icon name={f.icon} alt="" />
              </span>
              <div>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="sinuca-grid">
          {sinucaProducts.map((p, i) => (
            <Reveal as="div" className="sinuca-card" key={p.id} delay={i * 80}>
              <div className="sinuca-card-media">
                <img src={getProductImg(p.img)} alt={p.name} />
              </div>
              <div className="sinuca-card-body">
                <span className="sinuca-card-tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <a
                  className="btn btn-wa btn-block"
                  href={waLinkFor(`${p.name} - ${p.tag}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.2-1.77 1.24-.46.05-.96.24-3.28-.68-2.77-1.1-4.55-3.9-4.7-4.08-.14-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.96.95-2.23.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.2 1.36.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.15 1.3z" />
                  </svg>
                  Pedir orçamento
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
