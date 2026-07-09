import { useEffect, useMemo, useState } from 'react'
import IconSelect from './IconSelect'
import { products, kits, kitBottles, paymentMethods, WHATSAPP_NUMBER } from '../data'
import { useOrderModal } from '../context/OrderModalContext'

const orderableItems = [
  ...products.map((p) => ({
    value: p.id,
    label: `${p.name} - ${p.qty} (R$ ${p.price.toFixed(2).replace('.', ',')})`,
    img: p.img,
    unitPrice: p.price,
  })),
  ...kits.map((k) => ({
    value: k.id,
    label: `Kit CR Limpeza - ${k.label} (R$ ${k.price})`,
    img: kitBottles[0],
    unitPrice: k.priceValue,
  })),
]

function formatBRL(v) {
  return v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function OrderModal() {
  const { isOpen, selectedId, closeOrderModal } = useOrderModal()

  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [referencia, setReferencia] = useState('')
  const [itemValue, setItemValue] = useState(orderableItems[0].value)
  const [quantidade, setQuantidade] = useState(1)
  const [pagamento, setPagamento] = useState(paymentMethods[0])
  const [valorPago, setValorPago] = useState('')

  // Sempre que um produto é clicado, o formulário é reiniciado com esse produto selecionado
  useEffect(() => {
    if (isOpen && selectedId) {
      setItemValue(selectedId)
      setQuantidade(1)
      setValorPago('')
    }
  }, [isOpen, selectedId])

  // Bloqueia o scroll da página e permite fechar com ESC enquanto o popup está aberto
  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeOrderModal()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, closeOrderModal])

  const selectedItem = orderableItems.find((i) => i.value === itemValue)
  const total = useMemo(() => (selectedItem ? selectedItem.unitPrice * quantidade : 0), [selectedItem, quantidade])

  const isDinheiro = pagamento === 'Dinheiro'
  const valorPagoNum = parseFloat((valorPago || '0').replace(',', '.'))
  const troco = isDinheiro && valorPagoNum >= total ? valorPagoNum - total : null
  const trocoInsuficiente = isDinheiro && valorPago !== '' && valorPagoNum < total

  const canSubmit = nome.trim() && endereco.trim() && quantidade > 0 && !trocoInsuficiente

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return

    const lines = [
      'Olá! Gostaria de fazer um pedido:',
      '',
      `🧴 Produto: ${selectedItem.label}`,
      `📦 Quantidade: ${quantidade}`,
      `💰 Total: R$ ${formatBRL(total)}`,
      '',
      `👤 Nome: ${nome}`,
      `📍 Endereço: ${endereco}`,
    ]
    if (referencia.trim()) lines.push(`📌 Ponto de referência: ${referencia}`)
    lines.push(`💳 Forma de pagamento: ${pagamento}`)
    if (isDinheiro && valorPago !== '') {
      lines.push(`💵 Troco para: R$ ${formatBRL(valorPagoNum)}`)
      if (troco !== null) lines.push(`🔁 Troco a receber: R$ ${formatBRL(troco)}`)
    }

    const msg = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener')
    closeOrderModal()
  }

  return (
    <div
      className="order-modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeOrderModal()
      }}
    >
      <div className="order-modal" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
        <button className="order-modal-close" aria-label="Fechar" onClick={closeOrderModal}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="section-head order-modal-head">
          <h2 id="order-modal-title">
            FAÇA SEU <span>PEDIDO</span>
          </h2>
          <p>Preencha os dados abaixo e envie seu pedido direto pelo WhatsApp</p>
        </div>

        <form className="form-card order-modal-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label>Produto</label>
              <IconSelect
                options={orderableItems}
                value={itemValue}
                onChange={setItemValue}
                placeholder="Escolha um produto"
              />
            </div>

            <div className="form-field">
              <label>Quantidade</label>
              <input
                type="number"
                min="1"
                value={quantidade}
                onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value, 10) || 1))}
              />
            </div>

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
              <strong>R$ {formatBRL(total)}</strong>
            </div>
            {isDinheiro && valorPago !== '' && (
              <div className={`order-summary-row ${trocoInsuficiente ? 'is-warning' : 'is-change'}`}>
                <span>{trocoInsuficiente ? 'Valor insuficiente' : 'Seu troco será de'}</span>
                <strong>{trocoInsuficiente ? `faltam R$ ${formatBRL(total - valorPagoNum)}` : `R$ ${formatBRL(troco)}`}</strong>
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-wa btn-block" disabled={!canSubmit}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.2-1.77 1.24-.46.05-.96.24-3.28-.68-2.77-1.1-4.55-3.9-4.7-4.08-.14-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.96.95-2.23.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.2 1.36.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.15 1.3z" />
            </svg>
            Enviar Pedido pelo WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}
