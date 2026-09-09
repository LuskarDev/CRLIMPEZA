import { useEffect, useRef, useState } from 'react'
import { useOrderModal } from '../context/OrderModalContext'
import { useCart } from '../context/CartContext'

function formatPrice(v) {
  return v.toFixed(2).replace('.', ',')
}

export default function ProductsCarousel({ products }) {
  const { openOrderModal } = useOrderModal()
  const { addToCart } = useCart()
  const [addedId, setAddedId] = useState(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const trackRef = useRef(null)

  const handleAddToCart = (e, productId) => {
    e.stopPropagation()
    addToCart(productId, 1)
    setAddedId(productId)
    window.clearTimeout(handleAddToCart._t)
    handleAddToCart._t = window.setTimeout(() => setAddedId(null), 1000)
  }

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    updateArrows()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [products])

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="products-carousel">
      <button
        type="button"
        className={`carousel-arrow carousel-arrow-prev${!canPrev ? ' is-hidden' : ''}`}
        aria-label="Produtos anteriores"
        onClick={() => scrollByCard(-1)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="products-carousel-track" ref={trackRef}>
        {products.map((p) => (
          <div className="product-card carousel-card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            {p.desc && <p className="product-card-desc">{p.desc}</p>}
            <span className="qty-pill">{p.qty}</span>
            <div className="product-card-actions">
              <button
                type="button"
                className="btn btn-green btn-block"
                onClick={() => openOrderModal(p.id)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
                </svg>
                Comprar Agora · R$ {formatPrice(p.price)}
              </button>
              <button
                type="button"
                className={`btn btn-outline btn-block${addedId === p.id ? ' is-added' : ''}`}
                onClick={(e) => handleAddToCart(e, p.id)}
              >
                {addedId === p.id ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ width: 18, height: 18 }}>
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
                  </svg>
                )}
                {addedId === p.id ? 'Adicionado!' : 'Adicionar ao Carrinho'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`carousel-arrow carousel-arrow-next${!canNext ? ' is-hidden' : ''}`}
        aria-label="Próximos produtos"
        onClick={() => scrollByCard(1)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
