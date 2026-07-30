import { beforeAfterItems } from '../data'
import Reveal from './Reveal'
import BeforeAfterSlider from './BeforeAfterSlider'

export default function BeforeAfter() {
  if (!beforeAfterItems.length) return null

  return (
    <section className="before-after-section" id="antes-depois">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-eyebrow">TRANSFORMAÇÃO REAL</span>
          <h2>Antes e depois dos nossos trabalhos</h2>
          <p>Arraste a seta sobre a foto e veja a transformação real dos nossos trabalhos</p>
          <p className="ba-swipe-hint">Deslize para o lado para ver os outros trabalhos →</p>
        </Reveal>

        <div className="ba-grid">
          {beforeAfterItems.map((item, i) => (
            <Reveal as="div" key={item.id} delay={(i % 3) * 90}>
              <BeforeAfterSlider item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="ba-cta">
          <p>Quer um resultado assim na sua casa ou empresa?</p>
          <a className="btn btn-wa" href="#contratar-servico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
            </svg>
            Quero contratar um serviço
          </a>
        </Reveal>
      </div>
    </section>
  )
}
