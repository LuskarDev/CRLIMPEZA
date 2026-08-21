import { useCallback, useRef, useState } from 'react'
import { galleryImages } from '../galleryImages'

export default function BeforeAfterSlider({ item }) {
  const containerRef = useRef(null)
  const [position, setPosition] = useState(50)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const ratio = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, ratio)))
  }, [])

  const onPointerDown = (e) => {
    draggingRef.current = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const onPointerMove = (e) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }

  const stopDragging = () => {
    draggingRef.current = false
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 4))
  }

  return (
    <div className="ba-card">
      <div
        className="ba-slider"
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
      >
        <img className="ba-img" src={galleryImages[item.after]} alt={`${item.title} - depois`} draggable="false" />

        <img
          className="ba-img ba-img-before"
          src={galleryImages[item.before]}
          alt={`${item.title} - antes`}
          draggable="false"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <span className="ba-tag ba-tag-before">Antes</span>
        <span className="ba-tag ba-tag-after">Depois</span>

        <div className="ba-divider" style={{ left: `${position}%` }}>
          <button
            type="button"
            className="ba-handle"
            aria-label="Arraste para comparar antes e depois"
            onKeyDown={onKeyDown}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M8 6L2 12l6 6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="ba-caption">
        <strong>{item.title}</strong>
        <span>{item.location}</span>
      </div>
    </div>
  )
}
