import { galleryImages } from '../galleryImages'
import Reveal from './Reveal'

const previewItems = [
  { id: 'gd-1', img: 'dedetizacao-real-1', title: 'Dedetização Residencial' },
  { id: 'gt-depois-1', img: 'terreno-depois-1', title: 'Limpeza de Terreno' },
  { id: 'gt2-depois-1', img: 'caixa-real-depois-1', title: "Lavagem de Caixa d'Água" },
  { id: 'gc-depois-1', img: 'calcada-depois-1', title: 'Roçagem de Calçada e Muro' },
  { id: 'ge-1', img: 'esquadria-1', title: 'Instalação de Esquadrias' },
]

export default function GalleryPreview() {
  return (
    <section className="gallery-preview-section" id="galeria">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-eyebrow">GALERIA DE SERVIÇOS</span>
          <h2>Veja alguns dos nossos trabalhos</h2>
        </Reveal>

        <div className="gallery-preview-row">
          {previewItems.map((item, i) => (
            <Reveal as="div" className="gallery-preview-tile" key={item.id} delay={i * 70}>
              <img src={galleryImages[item.img]} alt={item.title} loading="lazy" />
            </Reveal>
          ))}

          <Reveal as="a" href="#galeria-completa" className="gallery-preview-tile gallery-preview-more" delay={5 * 70}>
            <span>Ver mais fotos</span>
            <span className="gallery-preview-more-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
