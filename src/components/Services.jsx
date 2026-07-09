import { services } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section className="services-section" id="servicos">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>
            NOSSOS <span>SERVIÇOS</span>
          </h2>
          <p>Soluções completas para limpeza e conservação</p>
        </Reveal>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal as="div" className="service-box" key={s.id} delay={i * 60}>
              <Icon name={s.icon} alt="" />
              <h4>{s.name}</h4>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
