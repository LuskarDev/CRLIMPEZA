import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#contratar-servico' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Galeria', href: '#galeria-completa' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#inicio" className="brand">
          <img src={logo} alt="CR Limpeza Profissional" />
        </a>

        <nav className="main-nav">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? 'is-active' : ''}
              onClick={() => setActive(l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button className={`burger${open ? ' is-open' : ''}`} aria-label="Abrir menu" onClick={() => setOpen((v) => !v)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`mobile-nav ${open ? 'open' : ''}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => { setOpen(false); setActive(l.href) }}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
