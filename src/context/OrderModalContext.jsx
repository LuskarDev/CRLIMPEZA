import { createContext, useContext, useState, useCallback } from 'react'

const OrderModalContext = createContext(null)

export function OrderModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const openOrderModal = useCallback((itemId) => {
    setSelectedId(itemId)
    setIsOpen(true)
  }, [])

  const closeOrderModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <OrderModalContext.Provider value={{ isOpen, selectedId, openOrderModal, closeOrderModal }}>
      {children}
    </OrderModalContext.Provider>
  )
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext)
  if (!ctx) throw new Error('useOrderModal deve ser usado dentro de OrderModalProvider')
  return ctx
}
