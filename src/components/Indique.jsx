import indiqueBanner from '../assets/indique-banner.jpg'
import gratidaoBanner from '../assets/gratidao-banner.jpg'
import Reveal from './Reveal'

export default function Indique() {
  return (
    <section className="indique-section" id="indique">
      <div className="wrap">
        <Reveal as="img"
          className="indique-image"
          src={indiqueBanner}
          alt="Indique e Ganhe com a CR Limpeza - indique 3 pessoas e ganhe um desconto especial, ou indique 5 ou mais pessoas e ganhe um brinde exclusivo"
        />

        <Reveal as="img"
          className="indique-image gratidao-image"
          delay={80}
          src={gratidaoBanner}
          alt="Mensagem de gratidão da CR Limpeza a clientes, parceiros e divulgadores, assinada pelo empreendedor Carlos Roberto Batista Salvino Vasconcellos"
        />
      </div>
    </section>
  )
}
