import { Leaf, Wheat, Flame } from 'lucide-react'
import platsImg from '../assets/images/plats.png'

const points = [
  { icon: Leaf, title: 'Saveurs authentiques', text: 'Recettes syro-libanaises transmises et préparées chaque jour sur place.' },
  { icon: Wheat, title: 'Produits de qualité', text: 'Mezze, manouché et grillades préparés avec des ingrédients frais et sélectionnés.' },
  { icon: Flame, title: 'Sur place, à emporter ou livré', text: "-10% à emporter, et livraison à domicile entre 5 et 10 km autour de Bessancourt." },
]

export default function Presentation() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-14 items-center">
      <div>
        <p className="uppercase tracking-[0.25em] text-xs text-[var(--color-cedre-gold-dark)] font-semibold mb-4">
          Notre cuisine
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-[var(--color-cedre-green-950)] leading-tight mb-6">
          Un voyage gourmand entre Syrie et Liban
        </h2>
        <p className="text-[var(--color-cedre-ink)]/80 leading-relaxed mb-10">
          Au Cèdre d&rsquo;Orient, nous mettons à l&rsquo;honneur la richesse de la gastronomie
          syro-libanaise&nbsp;: mezze généreux, manouché tout juste sortis du four et grillades
          parfumées, à déguster sur place dans notre salle ou à emporter chez vous, à Bessancourt.
        </p>

        <div className="space-y-6">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-[var(--color-cedre-green-900)] flex items-center justify-center">
                <Icon size={18} className="text-[var(--color-cedre-gold-light)]" />
              </div>
              <div>
                <h3 className="font-display text-lg text-[var(--color-cedre-green-950)] mb-1">{title}</h3>
                <p className="text-sm text-[var(--color-cedre-ink)]/70 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-3 border border-[var(--color-cedre-gold)]/50 rounded-sm hidden md:block" />
        <img
          src={platsImg}
          alt="Assortiment de mezze du Cèdre d'Orient"
          className="relative w-full aspect-[4/5] object-cover rounded-sm shadow-xl"
        />
      </div>
    </section>
  )
}
