import { products } from '../data'
import { useOrderModal } from '../context/OrderModalContext'
import Reveal from './Reveal'

function formatPrice(v) {
  return v.toFixed(2).replace('.', ',')
}

export default function Products() {
  const { openOrderModal } = useOrderModal()

  return (
    <section className="products-section" id="produtos">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>
            NOSSOS <span>PRODUTOS</span>
          </h2>
          <p>Produtos de qualidade para facilitar o seu dia a dia!</p>
        </Reveal>

        <div className="product-row">
          {products.map((p, i) => (
            <Reveal
              as="button"
              type="button"
              className="product-card"
              key={p.id}
              delay={i * 80}
              onClick={() => openOrderModal(p.id)}
              aria-label={`Pedir ${p.name}`}
            >
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p className="qty">{p.qty}</p>
              <div className="price-row">
                <span className="price">R$ {formatPrice(p.price)}</span>
                <span className="cart-btn" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
                  </svg>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
