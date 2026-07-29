import servicesBanner from '../assets/services-banner.jpg'
import Reveal from './Reveal'

export default function Banners() {
  return (
    <section className="banners-section" id="banners">
      <div className="wrap banners-grid banners-grid-single">
        <Reveal as="img"
          className="banner-image"
          src={servicesBanner}
          alt="CR Limpeza - Nossos serviços: limpeza de caixa d'água, limpeza de caixa de gordura, controle de doenças e pragas, dedetização. Entregamos em sua residência."
          delay={0}
        />
      </div>
    </section>
  )
}
