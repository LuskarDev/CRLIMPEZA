import { testimonials } from '../data'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>
            O QUE NOSSOS <span>CLIENTES DIZEM</span>
          </h2>
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal as="div" className="testimonial-card" key={t.name} delay={i * 90}>
              <div className="stars">★★★★★</div>
              <p>"{t.text}"</p>
              <div className="testimonial-person">
                <span className="avatar">{t.initials}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>Cliente</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
