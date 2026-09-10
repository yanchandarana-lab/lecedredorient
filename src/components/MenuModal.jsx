import { useEffect, useRef } from 'react'
import { X, Phone } from 'lucide-react'
import { menu, menuPending } from '../data/menu'
import CedarEmblem from './CedarEmblem'

export default function MenuModal({ mode, onClose }) {
  // mode: 'order' | 'full'
  const panelRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const onOverlayClick = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[60] bg-[var(--color-cedre-green-950)]/70 backdrop-blur-sm flex items-start md:items-center justify-center p-0 md:p-6"
      onClick={onOverlayClick}
    >
      <div
        ref={panelRef}
        className="bg-[var(--color-cedre-cream)] w-full md:max-w-3xl md:rounded-sm shadow-2xl h-full md:h-auto md:max-h-[88vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-[var(--color-cedre-cream)]/95 backdrop-blur border-b border-[var(--color-cedre-gold)]/30 px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CedarEmblem className="w-6 h-6 text-[var(--color-cedre-gold-dark)]" />
            <h2 className="font-display text-2xl text-[var(--color-cedre-green-950)]">
              {mode === 'order' ? 'Commander à emporter' : 'La carte du restaurant'}
            </h2>
          </div>
          <button onClick={onClose} aria-label="Fermer" className="p-1.5 text-[var(--color-cedre-ink)]/70 hover:text-[var(--color-cedre-ink)]">
            <X size={24} />
          </button>
        </div>

        <div className="px-6 md:px-10 py-8">
          {mode === 'order' && (
            <p className="text-sm text-[var(--color-cedre-ink)]/70 mb-8">
              Commandez directement par téléphone au{' '}
              <a href="tel:0987103920" className="font-semibold text-[var(--color-cedre-green-800)]">09 87 10 39 20</a>
              {' '}&mdash; -10% sur toutes les commandes à emporter.
            </p>
          )}

          <div className="space-y-10">
            {menu.map((cat) => (
              <div key={cat.id}>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-display text-xl text-[var(--color-cedre-green-900)]">{cat.title}</h3>
                </div>
                {cat.subtitle && <p className="text-xs uppercase tracking-wide text-[var(--color-cedre-gold-dark)] mb-4">{cat.subtitle}</p>}
                <div className="arch-divider mb-4" />
                {cat.note && <p className="text-xs text-[var(--color-cedre-ink)]/50 italic mb-4">{cat.note}</p>}
                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex justify-between gap-4">
                      <div>
                        <p className="font-medium text-[var(--color-cedre-ink)]">{item.name}</p>
                        {item.desc && <p className="text-sm text-[var(--color-cedre-ink)]/60">{item.desc}</p>}
                      </div>
                      <span className="shrink-0 font-display text-[var(--color-cedre-gold-dark)] font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {menuPending.length > 0 && (
              <div className="border border-dashed border-[var(--color-cedre-gold)]/50 rounded-sm p-5 text-sm text-[var(--color-cedre-ink)]/60 italic">
                {menuPending.join(', ')} &mdash; catégorie à venir prochainement sur notre carte en ligne.
              </div>
            )}
          </div>
        </div>

        <div className="sticky bottom-0 bg-[var(--color-cedre-cream)] border-t border-[var(--color-cedre-gold)]/30 px-6 md:px-10 py-5">
          <a
            href="tel:0987103920"
            className="flex items-center justify-center gap-2 bg-[var(--color-cedre-gold)] hover:bg-[var(--color-cedre-gold-dark)] transition-colors text-white text-sm font-semibold uppercase tracking-wide px-6 py-3.5 rounded-sm"
          >
            <Phone size={16} />
            {mode === 'order' ? 'Appeler pour commander' : 'Réserver une table'} : 09 87 10 39 20
          </a>
        </div>
      </div>
    </div>
  )
}
