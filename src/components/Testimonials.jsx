import { useState } from 'react'
import { testimonials } from '../data'
import Reveal from './Reveal'
import ReviewModal from './ReviewModal'

export default function Testimonials() {
  const [isReviewOpen, setIsReviewOpen] = useState(false)

  return (
    <section className="testimonials-section">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-eyebrow">DEPOIMENTOS</span>
          <h2>O que nossos clientes dizem</h2>
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

        <Reveal as="div" className="review-cta" delay={testimonials.length * 90}>
          <p>Já é nosso cliente? Conte pra gente como foi sua experiência!</p>
          <button type="button" className="btn btn-primary" onClick={() => setIsReviewOpen(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
              <path
                d="M12 2.5l2.9 6.02 6.6.86-4.8 4.62 1.2 6.6L12 17.6l-5.9 3 1.2-6.6-4.8-4.62 6.6-.86L12 2.5z"
                strokeLinejoin="round"
              />
            </svg>
            Avaliar Nosso Serviço
          </button>
        </Reveal>
      </div>

      <ReviewModal isOpen={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
    </section>
  )
}
