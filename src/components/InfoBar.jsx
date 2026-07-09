import Icon from './Icon'
import Reveal from './Reveal'
import { WHATSAPP_DISPLAY } from '../data'

export default function InfoBar() {
  return (
    <div className="info-bar">
      <div className="wrap">
        <Reveal as="div" className="info-item" delay={0}>
          <Icon name="fasttruck" alt="" />
          <span>ENTREGAMOS NO SEU ESTABELECIMENTO OU RESIDÊNCIA!</span>
        </Reveal>
        <Reveal as="div" className="info-item" delay={80}>
          <Icon name="whatsapp" alt="" />
          <span>FAÇA JÁ O SEU PEDIDO! {WHATSAPP_DISPLAY}</span>
        </Reveal>
        <Reveal as="div" className="info-item" delay={160}>
          <Icon name="shield" alt="" />
          <span>PRODUTOS DE QUALIDADE COM O MELHOR PREÇO!</span>
        </Reveal>
      </div>
    </div>
  )
}
