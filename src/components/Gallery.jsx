import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import salle1 from '../assets/images/salle-1.png'
import salle2 from '../assets/images/salle-2.png'
import table1 from '../assets/images/table-1.png'
import devanture from '../assets/images/devanture.png'
import plats from '../assets/images/plats.png'
import interieurEnseigne from '../assets/images/interieur-enseigne.jpg'
import salleRestaurant from '../assets/images/salle-restaurant.jpg'
import facadeExterieure from '../assets/images/facade-exterieure.jpg'
import barComptoir from '../assets/images/bar-comptoir.jpg'

const photos = [
  { src: salle2, alt: 'Salle du restaurant Le Cèdre d\u2019Orient, ambiance émeraude et dorée' },
  { src: table1, alt: 'Table dressée avec nappage doré et serviettes turquoise' },
  { src: devanture, alt: "Devanture du restaurant à Bessancourt" },
  { src: plats, alt: 'Assortiment de mezze : houmous, taboulé, kebbé' },
  { src: salle1, alt: 'Vue de la salle et de la verrière' },
  { src: interieurEnseigne, alt: "Enseigne lumineuse du Cèdre d'Orient à l'intérieur du restaurant" },
  { src: salleRestaurant, alt: 'Vue de la salle du restaurant et de ses tables dressées' },
  { src: facadeExterieure, alt: 'Devanture et enseigne du restaurant de nuit' },
  { src: barComptoir, alt: 'Comptoir du bar du restaurant' },
]

export default function Gallery() {
  const [index, setIndex] = useState(null)

  useEffect(() => {
    if (index === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % photos.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index])

  return (
    <section id="galerie" className="bg-[var(--color-cedre-green-950)] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <p className="uppercase tracking-[0.25em] text-xs text-[var(--color-cedre-gold-light)] font-semibold mb-4 text-center">
          Découvrir en images
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-14">
          Notre cadre &amp; nos spécialités
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setIndex(i)}
              className={`group relative overflow-hidden rounded-sm ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--color-cedre-green-950)]/0 group-hover:bg-[var(--color-cedre-green-950)]/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          onClick={() => setIndex(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setIndex(null) }}
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            aria-label="Fermer"
          >
            <X size={30} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + photos.length) % photos.length) }}
            className="absolute left-3 md:left-8 text-white/70 hover:text-white"
            aria-label="Précédent"
          >
            <ChevronLeft size={36} />
          </button>
          <img
            src={photos[index].src}
            alt={photos[index].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm"
          />
          <button
            onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % photos.length) }}
            className="absolute right-3 md:right-8 text-white/70 hover:text-white"
            aria-label="Suivant"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  )
}
