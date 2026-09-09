import { useEffect, useRef } from 'react'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Prende o foco do teclado dentro do elemento referenciado enquanto `active` for true.
 * Ao ativar, foca o primeiro elemento focável do container.
 * Ao desativar, devolve o foco para o elemento que estava focado antes de abrir.
 */
export default function useFocusTrap(active) {
  const containerRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!active) return
    const container = containerRef.current
    if (!container) return

    previouslyFocused.current = document.activeElement

    const focusables = () => Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR))

    const firstFocusable = focusables()[0]
    if (firstFocusable) {
      firstFocusable.focus()
    } else {
      container.focus()
    }

    const onKeyDown = (e) => {
      if (e.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    container.addEventListener('keydown', onKeyDown)

    return () => {
      container.removeEventListener('keydown', onKeyDown)
      if (previouslyFocused.current && previouslyFocused.current.focus) {
        previouslyFocused.current.focus()
      }
    }
  }, [active])

  return containerRef
}
