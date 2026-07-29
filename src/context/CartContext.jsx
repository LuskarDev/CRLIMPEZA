import { createContext, useContext, useState, useCallback, useMemo } from 'react'
import { products, kits, kitBottles } from '../data'

const CartContext = createContext(null)

// Catálogo único (produtos + kits) indexado por id, usado para resolver os itens do carrinho
const catalog = new Map([
  ...products.map((p) => [p.id, { id: p.id, name: p.name, qtyLabel: p.qty, unitPrice: p.price, img: p.img }]),
  ...kits.map((k) => [
    k.id,
    { id: k.id, name: `Kit CR Limpeza - ${k.label}`, qtyLabel: null, unitPrice: k.priceValue, img: kitBottles[0] },
  ]),
])

export function CartProvider({ children }) {
  const [entries, setEntries] = useState([]) // [{ id, quantity }]
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = useCallback((id, amount = 1) => {
    setEntries((prev) => {
      const existing = prev.find((e) => e.id === id)
      if (existing) {
        return prev.map((e) => (e.id === id ? { ...e, quantity: e.quantity + amount } : e))
      }
      return [...prev, { id, quantity: amount }]
    })
  }, [])

  const removeFromCart = useCallback((id) => {
    setEntries((prev) => prev.filter((e) => e.id !== id))
  }, [])

  const updateQuantity = useCallback((id, quantity) => {
    setEntries((prev) => {
      if (quantity <= 0) return prev.filter((e) => e.id !== id)
      return prev.map((e) => (e.id === id ? { ...e, quantity } : e))
    })
  }, [])

  const clearCart = useCallback(() => setEntries([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const items = useMemo(
    () =>
      entries
        .map((e) => {
          const info = catalog.get(e.id)
          if (!info) return null
          return { ...info, quantity: e.quantity, subtotal: info.unitPrice * e.quantity }
        })
        .filter(Boolean),
    [entries]
  )

  const totalItems = useMemo(() => entries.reduce((sum, e) => sum + e.quantity, 0), [entries])
  const totalPrice = useMemo(() => items.reduce((sum, it) => sum + it.subtotal, 0), [items])

  const value = {
    items,
    totalItems,
    totalPrice,
    isOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart deve ser usado dentro de CartProvider')
  return ctx
}
