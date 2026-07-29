import { whyItems } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'

export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-eyebrow">NOSSOS DIFERENCIAIS</span>
          <h2>Por que escolher a CR Limpeza?</h2>
        </Reveal>

        <div className="why-grid">
          {whyItems.map((item, i) => (
            <Reveal as="div" className="why-box" key={item.name} delay={i * 70}>
              <span className="why-icon">
                <Icon name={item.icon} alt="" />
              </span>
              <h4>{item.name}</h4>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
