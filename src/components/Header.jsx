import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import CedarEmblem from './CedarEmblem'

export default function Header({ onOpenMenu, onOpenOrder }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'La Carte', action: onOpenMenu },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Infos pratiques', href: '#infos' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-cedre-cream/95 backdrop-blur shadow-[0_2px_20px_rgba(11,43,34,0.12)]' : 'bg-transparent'
      }`}
      style={{ '--tw-bg-opacity': 1 }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <CedarEmblem className={`w-7 h-7 ${scrolled ? 'text-[var(--color-cedre-green-800)]' : 'text-[var(--color-cedre-gold-light)]'}`} />
          <span className={`font-display font-semibold text-xl tracking-wide ${scrolled ? 'text-[var(--color-cedre-green-950)]' : 'text-white'}`}>
            Le Cèdre d&rsquo;Orient
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.action ? (
              <button
                key={l.label}
                onClick={l.action}
                className={`text-sm tracking-wide uppercase font-medium transition-colors ${
                  scrolled ? 'text-[var(--color-cedre-ink)] hover:text-[var(--color-cedre-gold-dark)]' : 'text-white/90 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm tracking-wide uppercase font-medium transition-colors ${
                  scrolled ? 'text-[var(--color-cedre-ink)] hover:text-[var(--color-cedre-gold-dark)]' : 'text-white/90 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:0987103920"
            className={`flex items-center gap-2 text-sm font-medium ${scrolled ? 'text-[var(--color-cedre-green-900)]' : 'text-white'}`}
          >
            <Phone size={16} />
            09 87 10 39 20
          </a>
          <button
            onClick={onOpenOrder}
            className="bg-[var(--color-cedre-gold)] hover:bg-[var(--color-cedre-gold-dark)] text-white text-sm font-semibold uppercase tracking-wide px-5 py-2.5 rounded-sm transition-colors"
          >
            Commander
          </button>
        </div>

        <button
          className={`md:hidden p-2 ${scrolled ? 'text-[var(--color-cedre-green-950)]' : 'text-white'}`}
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[var(--color-cedre-green-950)] text-white flex flex-col">
          <div className="flex items-center justify-between px-5 h-20">
            <span className="flex items-center gap-2.5">
              <CedarEmblem className="w-7 h-7 text-[var(--color-cedre-gold-light)]" />
              <span className="font-display font-semibold text-xl">Le Cèdre d&rsquo;Orient</span>
            </span>
            <button onClick={() => setOpen(false)} aria-label="Fermer le menu" className="p-2">
              <X size={26} />
            </button>
          </div>
          <nav className="flex flex-col items-start gap-8 px-8 mt-10">
            {links.map((l) =>
              l.action ? (
                <button
                  key={l.label}
                  onClick={() => { setOpen(false); l.action() }}
                  className="font-display text-3xl"
                >
                  {l.label}
                </button>
              ) : (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="font-display text-3xl">
                  {l.label}
                </a>
              )
            )}
            <button
              onClick={() => { setOpen(false); onOpenOrder() }}
              className="mt-4 bg-[var(--color-cedre-gold)] text-white text-sm font-semibold uppercase tracking-wide px-6 py-3 rounded-sm"
            >
              Commander
            </button>
            <a href="tel:0987103920" className="flex items-center gap-2 text-lg mt-2">
              <Phone size={18} /> 09 87 10 39 20
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
