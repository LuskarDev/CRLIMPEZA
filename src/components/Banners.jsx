import servicesBanner from '../assets/services-banner.jpg'
import productsBanner from '../assets/products-banner.jpg'
import Reveal from './Reveal'

export default function Banners() {
  return (
    <section className="banners-section" id="banners">
      <div className="wrap banners-grid">
        <Reveal as="img"
          className="banner-image"
          src={servicesBanner}
          alt="CR Limpeza - Nossos serviços: limpeza de caixa d'água, limpeza de caixa de gordura, controle de doenças e pragas, dedetização. Entregamos em sua residência."
          delay={0}
        />
        <Reveal as="img"
          className="banner-image"
          src={productsBanner}
          alt="CR Limpeza - Produtos que você encontra aqui: amaciantes, detergentes, sabão em líquido, sabão em pó, cloro, desinfetante, removedor de gordura multi uso, limpeza pesada Ajax, limpador de alumínio e variedades de kits."
          delay={120}
        />
      </div>
    </section>
  )
}
