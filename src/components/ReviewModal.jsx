import { useEffect, useState } from 'react'
import useFocusTrap from '../hooks/useFocusTrap'
import StarRating from './StarRating'
import IconSelect from './IconSelect'
import { REVIEW_WHATSAPP_NUMBER, services } from '../data'

const serviceOptions = [...services.map((s) => ({ value: s.id, label: s.name, icon: s.icon })), { value: 'outro', label: 'Outro', icon: 'sparkle' }]

export default function ReviewModal({ isOpen, onClose }) {
  const modalRef = useFocusTrap(isOpen)

  const [nome, setNome] = useState('')
  const [servico, setServico] = useState('')
  const [nota, setNota] = useState(0)
  const [comentario, setComentario] = useState('')
  const [enviado, setEnviado] = useState(false)

  // Bloqueia o scroll da página e permite fechar com ESC enquanto o popup está aberto
  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  // Reseta o formulário sempre que o popup é reaberto
  useEffect(() => {
    if (isOpen) {
      setNome('')
      setServico('')
      setNota(0)
      setComentario('')
      setEnviado(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const canSubmit = nota > 0 && comentario.trim().length > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return

    const estrelas = '⭐'.repeat(nota) + '☆'.repeat(5 - nota)
    const servicoSelecionado = serviceOptions.find((s) => s.value === servico)
    const lines = [
      'Olá! Gostaria de deixar uma avaliação sobre o serviço da CR Limpeza:',
      '',
    ]
    if (servicoSelecionado) lines.push(`🧹 Serviço: ${servicoSelecionado.label}`)
    lines.push(`⭐ Nota: ${estrelas} (${nota}/5)`, `💬 Comentário: ${comentario.trim()}`)
    if (nome.trim()) lines.push('', `👤 Nome: ${nome.trim()}`)

    const msg = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${REVIEW_WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener')
    setEnviado(true)
  }

  return (
    <div
      className="order-modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="order-modal review-modal" role="dialog" aria-modal="true" aria-labelledby="review-modal-title" ref={modalRef}>
        <button className="order-modal-close" aria-label="Fechar" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="section-head order-modal-head">
          <span className="section-eyebrow">SUA OPINIÃO</span>
          <h2 id="review-modal-title">Avalie nosso serviço</h2>
          <p>Sua opinião nos ajuda a melhorar cada vez mais!</p>
        </div>

        <div className="form-card order-modal-form review-modal-form">
          {enviado ? (
            <div className="review-sent">
              <div className="review-sent-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Obrigado pela sua avaliação!</h3>
              <p>Sua mensagem foi aberta no WhatsApp — é só enviar por lá para concluir.</p>
              <button type="button" className="btn btn-outline" onClick={onClose}>
                Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="review-stars-field">
                <label>Sua nota</label>
                <StarRating value={nota} onChange={setNota} />
              </div>

              <div className="form-field review-field-spaced">
                <label>Seu nome (opcional)</label>
                <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
              </div>

              <div className="form-field review-field-spaced">
                <label>Qual serviço você contratou? (opcional)</label>
                <IconSelect
                  options={serviceOptions}
                  value={servico}
                  onChange={setServico}
                  placeholder="Selecione o serviço realizado"
                />
              </div>

              <div className="form-field review-field-spaced">
                <label>Seu comentário</label>
                <textarea
                  placeholder="Conte como foi sua experiência com nosso serviço..."
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-wa btn-block" disabled={!canSubmit}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.2-1.77 1.24-.46.05-.96.24-3.28-.68-2.77-1.1-4.55-3.9-4.7-4.08-.14-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.96.95-2.23.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.2 1.36.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.15 1.3z" />
                </svg>
                Enviar Avaliação pelo WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
