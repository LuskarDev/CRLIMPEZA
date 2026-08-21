import { useCart } from '../context/CartContext'

export default function FloatCart() {
  const { totalItems, openCart } = useCart()

  return (
    <button className="float-cart" onClick={openCart} aria-label="Abrir carrinho de compras" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </svg>
      {totalItems > 0 && (
        <span className="float-cart-badge" key={totalItems}>
          {totalItems}
        </span>
      )}
    </button>
  )
}
