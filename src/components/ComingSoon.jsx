import Reveal from './Reveal'
import novidades from '../assets/novidades-em-breve.jpg'

export default function ComingSoon() {
  return (
    <section className="coming-soon-section" id="em-breve">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-eyebrow">EM BREVE</span>
          <h2>Vem aí novidades!</h2>
          <p>Preparamos grandes surpresas para os clientes da CR Limpeza. Aguarde!</p>
        </Reveal>
        <Reveal as="div" className="coming-soon-visual" variant="scale" delay={100}>
          <img src={novidades} alt="Vem aí novidades para os clientes da CR Limpeza. Em breve grandes surpresas." loading="lazy" />
        </Reveal>
      </div>
    </section>
  )
}
