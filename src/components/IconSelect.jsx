import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

/**
 * Custom styled dropdown that shows an icon next to each option.
 * options: [{ value, label, icon }]
 */
export default function IconSelect({ options, value, onChange, placeholder = 'Selecione...' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={`icon-select ${open ? 'is-open' : ''}`} ref={ref}>
      <button
        type="button"
        className="icon-select-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="icon-select-current">
          {selected ? (
            <>
              <span className="icon-select-icon">
                {selected.img ? <img src={selected.img} alt="" /> : <Icon name={selected.icon} alt="" />}
              </span>
              {selected.label}
            </>
          ) : (
            <span className="icon-select-placeholder">{placeholder}</span>
          )}
        </span>
        <svg className="icon-select-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul className="icon-select-panel" role="listbox">
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              className={`icon-select-option ${opt.value === value ? 'is-selected' : ''}`}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
            >
              <span className="icon-select-icon">
                {opt.img ? <img src={opt.img} alt="" /> : <Icon name={opt.icon} alt="" />}
              </span>
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
