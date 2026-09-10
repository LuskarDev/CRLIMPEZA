import { useState } from 'react'
import Reveal from './Reveal'

const faqItems = [
  {
    q: 'Quais são os serviços oferecidos?',
    a: 'Trabalhamos com limpeza de caixa d\u2019água, dedetização e controle de pragas, limpeza de terreno, limpeza geral residencial e comercial, portas e janelas, lavagem de calçadas, além da venda de produtos de limpeza e lixeiras de ferro galvanizado.',
  },
  {
    q: 'Vocês atendem em toda a região?',
    a: 'Atendemos São Gonçalo e cidades vizinhas na região metropolitana do Rio de Janeiro. Envie sua localização pelo WhatsApp para confirmarmos o atendimento no seu endereço.',
  },
  {
    q: 'Quanto tempo leva para o serviço ser realizado?',
    a: 'O prazo varia de acordo com o tipo e o tamanho do serviço. Serviços simples costumam ser feitos no mesmo dia; para trabalhos maiores, combinamos um prazo junto com você no orçamento.',
  },
  {
    q: 'Os produtos são de qualidade?',
    a: 'Sim. Trabalhamos com produtos de marcas confiáveis, com eficácia comprovada na eliminação de bactérias e sujeira, garantindo segurança para sua família e seu negócio.',
  },
  {
    q: 'Como solicitar um orçamento?',
    a: 'É rápido: preencha o formulário de solicitação de serviço aqui no site ou fale direto com a gente pelo WhatsApp. Retornamos com um orçamento personalizado.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <Reveal as="div" className="section-head faq-head">
          <span className="section-eyebrow">DÚVIDAS?</span>
          <h2>Perguntas Frequentes</h2>
        </Reveal>

        <div className="faq-list">
          {faqItems.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal as="div" className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.q} delay={i * 60}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? '\u2212' : '+'}
                  </span>
                </button>
                <div className="faq-answer" style={{ maxHeight: isOpen ? '220px' : '0px' }}>
                  <p>{item.a}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
