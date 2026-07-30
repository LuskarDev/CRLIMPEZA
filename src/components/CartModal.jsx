import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { useReferral } from '../context/ReferralContext'
import { paymentMethods, WHATSAPP_NUMBER, REFERRAL_DISCOUNT_THRESHOLD, REFERRAL_GIFT_THRESHOLD } from '../data'
import useFocusTrap from '../hooks/useFocusTrap'

function formatBRL(v) {
  return v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function CartModal() {
  const { items, totalPrice, isOpen, closeCart, updateQuantity, removeFromCart, clearCart } = useCart()
  const { referralCode, setReferralCode } = useReferral()
  const modalRef = useFocusTrap(isOpen)

  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [referencia, setReferencia] = useState('')
  const [pagamento, setPagamento] = useState(paymentMethods[0])
  const [valorPago, setValorPago] = useState('')

  // Bloqueia o scroll da página e permite fechar com ESC enquanto o popup está aberto
  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, closeCart])

  const isDinheiro = pagamento === 'Dinheiro'
  const valorPagoNum = parseFloat((valorPago || '0').replace(',', '.'))
  const troco = isDinheiro && valorPagoNum >= totalPrice ? valorPagoNum - totalPrice : null
  const trocoInsuficiente = isDinheiro && valorPago !== '' && valorPagoNum < totalPrice

  const canSubmit = items.length > 0 && nome.trim() && endereco.trim() && !trocoInsuficiente

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return

    const lines = ['Olá! Gostaria de fazer um pedido:', '']
    items.forEach((it) => {
      lines.push(`🧴 ${it.name}${it.qtyLabel ? ` (${it.qtyLabel})` : ''} — Qtd: ${it.quantity} (R$ ${formatBRL(it.subtotal)})`)
    })
    lines.push('', `💰 Total do pedido: R$ ${formatBRL(totalPrice)}`, '')
    lines.push(`👤 Nome: ${nome}`, `📍 Endereço: ${endereco}`)
    if (referencia.trim()) lines.push(`📌 Ponto de referência: ${referencia}`)
    lines.push(`💳 Forma de pagamento: ${pagamento}`)
    if (isDinheiro && valorPago !== '') {
      lines.push(`💵 Troco para: R$ ${formatBRL(valorPagoNum)}`)
      if (troco !== null) lines.push(`🔁 Troco a receber: R$ ${formatBRL(troco)}`)
    }
    if (referralCode.trim()) {
      lines.push('', `🎁 Cupom de indicação: ${referralCode.trim()}`)
      lines.push(
        `(Validar indicações desse cupom: ${REFERRAL_DISCOUNT_THRESHOLD} pedidos = desconto especial, ${REFERRAL_GIFT_THRESHOLD}+ pedidos = brinde exclusivo)`
      )
    }

    const msg = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener')
    clearCart()
    closeCart()
  }

  return (
    <div
      className="order-modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeCart()
      }}
    >
      <div className="order-modal cart-modal" role="dialog" aria-modal="true" aria-labelledby="cart-modal-title" ref={modalRef}>
        <button className="order-modal-close" aria-label="Fechar" onClick={closeCart}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="section-head order-modal-head">
          <span className="section-eyebrow">SEU CARRINHO</span>
          <h2 id="cart-modal-title">Meu carrinho</h2>
          <p>Revise os produtos escolhidos e finalize o pedido pelo WhatsApp</p>
        </div>

        <div className="form-card order-modal-form cart-modal-form">
          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Seu carrinho está vazio.</p>
              <p>Clique no ícone de carrinho de um produto ou kit para adicioná-lo aqui.</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((it) => (
                  <div className="cart-item" key={it.id}>
                    <img src={it.img} alt={it.name} />
                    <div className="cart-item-info">
                      <h4>{it.name}</h4>
                      {it.qtyLabel && <span className="cart-item-qty-label">{it.qtyLabel}</span>}
                      <span className="cart-item-price">R$ {formatBRL(it.unitPrice)} / un.</span>
                    </div>
                    <div className="qty-stepper cart-item-stepper">
                      <button
                        type="button"
                        className="qty-btn"
                        aria-label={`Diminuir quantidade de ${it.name}`}
                        onClick={() => updateQuantity(it.id, it.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="cart-item-qty">{it.quantity}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        aria-label={`Aumentar quantidade de ${it.name}`}
                        onClick={() => updateQuantity(it.id, it.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-item-subtotal">R$ {formatBRL(it.subtotal)}</div>
                    <button
                      type="button"
                      className="cart-item-remove"
                      aria-label={`Remover ${it.name} do carrinho`}
                      onClick={() => removeFromCart(it.id)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-field">
                    <label>Nome completo</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Forma de pagamento</label>
                    <select value={pagamento} onChange={(e) => setPagamento(e.target.value)}>
                      {paymentMethods.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field form-field-wide">
                    <label>Endereço completo</label>
                    <input
                      type="text"
                      placeholder="Rua, número, bairro, cidade"
                      value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-field form-field-wide">
                    <label>Ponto de referência (opcional)</label>
                    <input
                      type="text"
                      placeholder="Ex: perto do mercado, portão azul..."
                      value={referencia}
                      onChange={(e) => setReferencia(e.target.value)}
                    />
                  </div>

                  <div className="form-field form-field-wide">
                    <label>Cupom de indicação (opcional)</label>
                    <input
                      type="text"
                      placeholder="Nome de quem te indicou"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value)}
                    />
                    <span className="form-hint">Foi indicado por alguém? Coloque o nome ou cupom aqui para ajudar essa pessoa a ganhar recompensas.</span>
                  </div>

                  {isDinheiro && (
                    <div className="form-field form-field-wide">
                      <label>Troco para quanto? (opcional)</label>
                      <input
                        type="text"
                        inputMode="decimal"
                        placeholder="Ex: 50,00"
                        value={valorPago}
                        onChange={(e) => setValorPago(e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="order-summary">
                  <div className="order-summary-row">
                    <span>Total do pedido</span>
                    <strong>R$ {formatBRL(totalPrice)}</strong>
                  </div>
                  {isDinheiro && valorPago !== '' && (
                    <div className={`order-summary-row ${trocoInsuficiente ? 'is-warning' : 'is-change'}`}>
                      <span>{trocoInsuficiente ? 'Valor insuficiente' : 'Seu troco será de'}</span>
                      <strong>
                        {trocoInsuficiente ? `faltam R$ ${formatBRL(totalPrice - valorPagoNum)}` : `R$ ${formatBRL(troco)}`}
                      </strong>
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-wa btn-block" disabled={!canSubmit}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.2-1.77 1.24-.46.05-.96.24-3.28-.68-2.77-1.1-4.55-3.9-4.7-4.08-.14-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.96.95-2.23.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.2 1.36.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.15 1.3z" />
                  </svg>
                  Finalizar Pedido pelo WhatsApp
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
