import { useState } from 'react'

export default function StarRating({ value, onChange, size = 34 }) {
  const [hoverValue, setHoverValue] = useState(0)
  const display = hoverValue || value

  return (
    <div className="star-rating" role="radiogroup" aria-label="Nota de 1 a 5 estrelas">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`star-rating-btn${star <= display ? ' is-filled' : ''}`}
          role="radio"
          aria-checked={value === star}
          aria-label={`${star} ${star === 1 ? 'estrela' : 'estrelas'}`}
          onMouseEnter={() => setHoverValue(star)}
          onMouseLeave={() => setHoverValue(0)}
          onFocus={() => setHoverValue(star)}
          onBlur={() => setHoverValue(0)}
          onClick={() => onChange(star)}
          style={{ '--star-size': `${size}px` }}
        >
          <svg viewBox="0 0 24 24" fill={star <= display ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
            <path
              d="M12 2.5l2.9 6.02 6.6.86-4.8 4.62 1.2 6.6L12 17.6l-5.9 3 1.2-6.6-4.8-4.62 6.6-.86L12 2.5z"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ))}
    </div>
  )
}
