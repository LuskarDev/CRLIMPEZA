import { useState } from 'react'
import IconSelect from './IconSelect'
import Reveal from './Reveal'
import serviceIllustration from '../assets/service-illustration.svg'
import { services, WHATSAPP_NUMBER } from '../data'
import { recordOrder } from '../utils/customerTracking'

const serviceOptions = services.map((s) => ({ value: s.id, label: s.name, icon: s.icon }))

export default function ServiceForm() {
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [referencia, setReferencia] = useState('')
  const [servicoValue, setServicoValue] = useState(serviceOptions[0].value)
  const [detalhes, setDetalhes] = useState('')

  const servico = services.find((s) => s.id === servicoValue)
  const canSubmit = nome.trim() && endereco.trim() && servicoValue

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return

    const lines = [
      'Olá! Gostaria de solicitar um orçamento de serviço:',
      '',
      `🛠️ Serviço: ${servico.name}`,
      `👤 Nome: ${nome}`,
      `📍 Endereço: ${endereco}`,
    ]
    if (referencia.trim()) lines.push(`📌 Ponto de referência: ${referencia}`)
    if (detalhes.trim()) lines.push(`📝 Detalhes: ${detalhes}`)

    const tracking = recordOrder({ type: 'servico', summary: servico.name })
    if (tracking.orderNumber) {
      lines.push('', `📊 ${tracking.ordinalLabel}`, `🔗 Origem: ${tracking.sourceLabel}`)
    }

    const msg = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener')
  }

  return (
    <section className="form-section form-section-alt" id="contratar-servico">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-eyebrow">SOLICITE AGORA</span>
          <h2>Contrate um serviço</h2>
          <p>Escolha o serviço desejado e receba um orçamento sem compromisso</p>
        </Reveal>

        <div className="service-form-layout">
          <Reveal as="div" className="service-form-visual" variant="left" delay={40}>
            <img src={serviceIllustration} alt="Atendimento rápido e profissional CR Limpeza" />

            <div className="service-price-note">
              <span className="service-price-note-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <strong>Preço sob medida para cada serviço</strong>
                <p>
                  O valor varia conforme o tamanho do local e a complexidade do serviço. Envie os dados ao lado e
                  receba um orçamento gratuito, sem compromisso, em poucos minutos.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal as="form" className="form-card form-card-split" delay={100} onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field form-field-wide">
                <label>Serviço desejado</label>
                <IconSelect
                  options={serviceOptions}
                  value={servicoValue}
                  onChange={setServicoValue}
                  placeholder="Escolha um serviço"
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
                <label>Detalhes adicionais (opcional)</label>
                <textarea
                  rows="3"
                  placeholder="Conte um pouco mais sobre o que você precisa..."
                  value={detalhes}
                  onChange={(e) => setDetalhes(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-wa btn-block" disabled={!canSubmit}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.2-1.77 1.24-.46.05-.96.24-3.28-.68-2.77-1.1-4.55-3.9-4.7-4.08-.14-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.96.95-2.23.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.2 1.36.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.15 1.3z" />
              </svg>
              Solicitar Orçamento pelo WhatsApp
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
