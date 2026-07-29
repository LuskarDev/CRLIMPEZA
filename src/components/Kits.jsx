import { useState } from 'react'
import { kits, kitBottles } from '../data'
import { useOrderModal } from '../context/OrderModalContext'
import { useCart } from '../context/CartContext'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Kits() {
  const { openOrderModal } = useOrderModal()
  const { addToCart } = useCart()
  const [addedId, setAddedId] = useState(null)

  const handleAddToCart = (kitId) => {
    addToCart(kitId, 1)
    setAddedId(kitId)
    window.clearTimeout(handleAddToCart._t)
    handleAddToCart._t = window.setTimeout(() => setAddedId(null), 1200)
  }

  return (
    <section className="kits-section" id="kits">
      <div className="wrap">
        <Reveal as="div" className="kits-top">
          <div className="kits-icon">
            <Icon name="bucket" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="kits-intro">
            <span className="section-eyebrow">PROMOÇÃO</span>
            <h2>Kits Promocionais</h2>
            <p>Escolha o kit ideal para você e aproveite os melhores preços!</p>
          </div>
        </Reveal>

        <div className="kits-grid">
          {kits.map((kit, i) => (
            <Reveal as="div" className="kit-card" key={kit.id} delay={i * 100}>
              <span className="kit-ribbon">KIT CR LIMPEZA</span>
              <h3>{kit.label}</h3>
              <div className="kit-bottles">
                {kitBottles.map((b, i2) => (
                  <img src={b} alt="" key={i2} />
                ))}
              </div>
              <div className="kit-price">R$ {kit.price}</div>
              <div className="kit-actions">
                <button className="btn btn-green btn-block" onClick={() => openOrderModal(kit.id)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
                  </svg>
                  Comprar Agora
                </button>
                <button className="btn btn-outline btn-block" onClick={() => handleAddToCart(kit.id)}>
                  {addedId === kit.id ? (
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
                  {addedId === kit.id ? 'Adicionado!' : 'Adicionar ao Carrinho'}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
