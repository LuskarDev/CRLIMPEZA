import { products } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'
import ProductsCarousel from './ProductsCarousel'
import productsBanner from '../assets/products-banner.jpg'

const qualityFeatures = [
  { icon: 'thumbsbadge', title: 'Alta Qualidade', text: 'Produtos testados e aprovados' },
  { icon: 'shield', title: 'Segurança', text: 'Fórmulas seguras para você e sua família' },
  { icon: 'sparkle', title: 'Eficiência', text: 'Resultados superiores com menor esforço' },
  { icon: 'gift', title: 'Entrega Rápida', text: 'Receba em casa com agilidade e segurança' },
]

const deliveryFeatures = [
  { icon: 'fasttruck', title: 'Entrega rápida', text: 'Agilidade e segurança na sua entrega' },
  { icon: 'gift', title: 'Produtos originais', text: 'Qualidade garantida CR Limpeza' },
  { icon: 'headset', title: 'Atendimento especializado', text: 'Suporte dedicado para suas necessidades' },
  { icon: 'handshake', title: 'Pagamentos seguros', text: 'Ambiente 100% seguro e confiável' },
]

export default function Products() {
  return (
    <section className="products-section" id="produtos">
      <div className="wrap">
        <div className="products-intro">
          <Reveal as="div" className="products-intro-copy">
            <span className="section-eyebrow">NOSSOS PRODUTOS</span>
            <h2>Qualidade que você pode confiar</h2>
            <p>
              Trabalhamos com produtos de alta performance para limpeza e higienização, garantindo eficiência,
              segurança e os melhores resultados.
            </p>
            <div className="products-intro-features">
              {qualityFeatures.map((f) => (
                <div className="products-intro-feature" key={f.title}>
                  <span className="products-intro-feature-icon">
                    <Icon name={f.icon} alt="" />
                  </span>
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" className="products-intro-visual" variant="scale" delay={120}>
            <img src={productsBanner} alt="Linha de produtos CR Limpeza" />
          </Reveal>
        </div>

        <Reveal as="div" className="section-head">
          <span className="section-eyebrow">LINHA COMPLETA</span>
          <h2>Conheça nossa linha de produtos</h2>
        </Reveal>

        <Reveal as="div">
          <ProductsCarousel products={products} />
        </Reveal>

        <Reveal as="div" className="products-delivery-strip" delay={100}>
          <div className="products-delivery-lead">
            <Icon name="fasttruck" alt="" />
            <span>Entregamos em toda a região!</span>
          </div>
          <div className="products-delivery-items">
            {deliveryFeatures.map((f) => (
              <div className="products-delivery-item" key={f.title}>
                <span className="products-delivery-icon">
                  <Icon name={f.icon} alt="" />
                </span>
                <div>
                  <strong>{f.title}</strong>
                  <span>{f.text}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
