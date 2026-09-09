import Icon from './Icon'
import Reveal from './Reveal'

const items = [
  {
    icon: 'people',
    title: 'Equipe Especializada',
    text: 'Profissionais treinados para o melhor atendimento',
  },
  {
    icon: 'shield',
    title: 'Produtos de Qualidade',
    text: 'Trabalhamos com produtos seguros e eficazes',
  },
  {
    icon: 'headset',
    title: 'Atendimento Rápido',
    text: 'Respostas ágeis e soluções sob medida',
  },
  {
    icon: 'smiley',
    title: 'Satisfação Garantida',
    text: 'Nosso compromisso é com resultado e confiança',
  },
]

export default function InfoBar() {
  return (
    <div className="info-bar">
      <div className="wrap">
        <div className="info-bar-card">
          {items.map((it, i) => (
            <Reveal as="div" className="info-item" key={it.title} delay={i * 80}>
              <span className="info-item-icon">
                <Icon name={it.icon} alt="" />
              </span>
              <div>
                <strong>{it.title}</strong>
                <span>{it.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
