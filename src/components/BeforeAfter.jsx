import { beforeAfterItems } from '../data'
import Reveal from './Reveal'
import BeforeAfterSlider from './BeforeAfterSlider'

export default function BeforeAfter() {
  if (!beforeAfterItems.length) return null

  return (
    <section className="before-after-section" id="antes-depois">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>
            ANTES E <span>DEPOIS</span>
          </h2>
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
      </div>
    </section>
  )
}
