import { useEffect, useMemo, useState } from 'react'
import { galleryCategories, galleryItems, WHATSAPP_NUMBER } from '../data'
import { galleryImages } from '../galleryImages'
import Icon from './Icon'
import Reveal from './Reveal'
import useFocusTrap from '../hooks/useFocusTrap'

const INITIAL_VISIBLE_COUNT = 8

const categoryIcons = {
  'limpeza-geral': 'mop',
  'caixa-dagua': 'bucket',
  dedetizacao: 'bug',
  'limpeza-terreno': 'spray',
  esquadrias: 'house',
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const [loadedImages, setLoadedImages] = useState(() => new Set())

  const markLoaded = (id) => {
    setLoadedImages((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }

  const filteredItems = useMemo(
    () => (activeCategory === 'todos' ? galleryItems : galleryItems.filter((it) => it.category === activeCategory)),
    [activeCategory]
  )

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, INITIAL_VISIBLE_COUNT)
  const hasMore = !showAll && filteredItems.length > INITIAL_VISIBLE_COUNT

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId)
    setShowAll(false)
  }

  const openLightbox = (item) => {
    const idx = filteredItems.findIndex((it) => it.id === item.id)
    setLightboxIndex(idx)
  }

  const closeLightbox = () => setLightboxIndex(null)

  const showPrev = () => setLightboxIndex((i) => (i - 1 + filteredItems.length) % filteredItems.length)
  const showNext = () => setLightboxIndex((i) => (i + 1) % filteredItems.length)

  // Bloqueia o scroll e permite navegar/fechar pelo teclado quando o lightbox está aberto
  useEffect(() => {
    if (lightboxIndex === null) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, filteredItems.length])

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null
  const lightboxRef = useFocusTrap(lightboxIndex !== null)

  return (
    <section className="gallery-section" id="galeria-completa">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-eyebrow">GALERIA DE SERVIÇOS</span>
          <h2>Veja alguns dos nossos trabalhos</h2>
        </Reveal>

        <Reveal as="div" className="gallery-filters" delay={60}>
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`gallery-filter${activeCategory === cat.id ? ' is-active' : ''}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <div className="gallery-grid">
          {visibleItems.map((item, i) => (
            <Reveal
              as="button"
              type="button"
              className="gallery-card"
              key={item.id}
              delay={(i % 6) * 70}
              onClick={() => openLightbox(item)}
            >
              <span className={`gallery-card-media${loadedImages.has(item.id) ? ' is-loaded' : ' is-loading'}`}>
                <img
                  src={galleryImages[item.img]}
                  alt={item.title}
                  loading="lazy"
                  onLoad={() => markLoaded(item.id)}
                />
                <span className="gallery-card-overlay" aria-hidden="true" />
                {categoryIcons[item.category] && (
                  <span className="gallery-card-icon-badge">
                    <Icon name={categoryIcons[item.category]} alt="" />
                  </span>
                )}
                <span className="gallery-card-info">
                  <strong>{item.title}</strong>
                  <span className="gallery-card-location">{item.location}</span>
                </span>
              </span>
              <span className="gallery-card-zoom" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                </svg>
              </span>
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <Reveal as="div" className="gallery-cta-banner">
            <div className="gallery-cta-icon">
              <Icon name="peopleplus" alt="" />
            </div>
            <div className="gallery-cta-text">
              <h3>Quer ver mais resultados?</h3>
              <p>Confira mais imagens dos nossos serviços e veja a qualidade do nosso trabalho!</p>
              <button type="button" className="btn btn-green gallery-more-btn" onClick={() => setShowAll(true)}>
                Ver mais fotos
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="gallery-cta-thumbs">
              {filteredItems.slice(INITIAL_VISIBLE_COUNT, INITIAL_VISIBLE_COUNT + 5).map((item) => (
                <span className="gallery-cta-thumb" key={item.id}>
                  <img src={galleryImages[item.img]} alt="" loading="lazy" />
                </span>
              ))}
            </div>
          </Reveal>
        )}

        <p className="gallery-note">
          * Imagens ilustrativas dos tipos de serviço prestado. Fotos reais dos trabalhos são atualizadas
          periodicamente.
        </p>
      </div>

      {activeItem && (
        <div
          className="lightbox-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeItem.title} ref={lightboxRef}>
            <button className="lightbox-close" aria-label="Fechar" onClick={closeLightbox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            {filteredItems.length > 1 && (
              <>
                <button className="lightbox-nav lightbox-prev" aria-label="Anterior" onClick={showPrev}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="lightbox-nav lightbox-next" aria-label="Próximo" onClick={showNext}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </>
            )}

            <div
              className="lightbox-img-wrap"
              onClick={(e) => {
                if (filteredItems.length <= 1) return
                const rect = e.currentTarget.getBoundingClientRect()
                const clickX = e.clientX - rect.left
                if (clickX < rect.width / 2) {
                  showPrev()
                } else {
                  showNext()
                }
              }}
            >
              <img className="lightbox-img" src={galleryImages[activeItem.img]} alt={activeItem.title} />
            </div>

            <div className="lightbox-caption">
              <strong>{activeItem.title}</strong>
              <span>{activeItem.location}</span>
            </div>

            <a
              className="btn btn-wa lightbox-cta"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Olá! Vi o trabalho "${activeItem.title}" no site e quero orçar um serviço parecido.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.2-1.77 1.24-.46.05-.96.24-3.28-.68-2.77-1.1-4.55-3.9-4.7-4.08-.14-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.96.95-2.23.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.45.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.2 1.36.28.14.45.12.61-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.15 1.3z" />
              </svg>
              Quero um serviço assim
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
