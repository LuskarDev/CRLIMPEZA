import heroVisual from '../assets/hero-visual-new.jpg'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <span className="hero-glow hero-glow-a" aria-hidden="true" />
      <span className="hero-glow hero-glow-b" aria-hidden="true" />
      <div className="hero-split">
        <div className="hero-copy">
          <Reveal as="h1" delay={80}>
            Qualidade e <br />
            Confiança que <br />
            <span className="accent">transformam</span>
          </Reveal>

          <Reveal as="p" className="hero-lead" delay={160}>
            A CR Limpeza oferece soluções completas em limpeza, controle de pragas e fornecimento de cloro e
            desinfetantes com eficiência e responsabilidade.
          </Reveal>

          <Reveal as="div" className="hero-actions" delay={240}>
            <a
              className="btn btn-wa"
              href="#produtos"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Ver Produtos
            </a>
            <a className="btn btn-hero-outline" href="#contratar-servico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
              </svg>
              Nossos Serviços
            </a>
          </Reveal>
        </div>

        <Reveal as="div" className="hero-visual" variant="scale" delay={120}>
          <div className="hero-image" style={{ backgroundImage: `url(${heroVisual})` }} />

          <div className="hero-float-card">
            <span className="hero-float-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M12 2l8 3.5v5.2c0 5-3.4 8.9-8 10.3-4.6-1.4-8-5.3-8-10.3V5.5L12 2z" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <strong>Compromisso com Excelência</strong>
              <span>Atendimento ágil, seguro e personalizado.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
