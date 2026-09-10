import { Clock, MapPin, Phone, Truck } from 'lucide-react'
import CedarEmblem from './CedarEmblem'

const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=71+Grande+Rue+95550+Bessancourt'

const blocks = [
  {
    icon: Clock,
    title: 'Horaires',
    body: (
      <>
        <p className="font-medium">Mardi au dimanche</p>
        <p>11h30 – 14h30</p>
        <p>18h30 – 22h30</p>
        <p className="mt-2 text-[var(--color-cedre-ink)]/60">Lundi&nbsp;: fermé</p>
      </>
    ),
  },
  {
    icon: MapPin,
    title: 'Nous trouver',
    body: (
      <>
        <p>71 Grande Rue</p>
        <p>95550 Bessancourt</p>
        <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-block mt-2 underline underline-offset-4 decoration-[var(--color-cedre-gold)]">
          Voir l&rsquo;itinéraire
        </a>
      </>
    ),
  },
  {
    icon: Phone,
    title: 'Réservations & commandes',
    body: (
      <>
        <a href="tel:0987103920" className="block hover:text-[var(--color-cedre-gold-dark)]">09 87 10 39 20</a>
        <a href="tel:0669191936" className="block hover:text-[var(--color-cedre-gold-dark)]">06 69 19 19 36</a>
        <p className="mt-2 text-[var(--color-cedre-ink)]/60">-10% sur les commandes à emporter</p>
      </>
    ),
  },
  {
    icon: Truck,
    title: 'Livraison',
    body: (
      <>
        <p>Livraison à domicile</p>
        <p>entre 5 et 10 km</p>
        <p>autour de Bessancourt</p>
      </>
    ),
  },
]

export default function PracticalInfo() {
  return (
    <section id="infos" className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
      <div className="text-center mb-16">
        <CedarEmblem className="w-8 h-8 text-[var(--color-cedre-gold-dark)] mx-auto mb-5" />
        <p className="uppercase tracking-[0.25em] text-xs text-[var(--color-cedre-gold-dark)] font-semibold mb-4">
          Informations pratiques
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-[var(--color-cedre-green-950)]">
          Venez nous rendre visite à Bessancourt
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {blocks.map(({ icon: Icon, title, body }) => (
          <div key={title} className="border-t-2 border-[var(--color-cedre-gold)] pt-6">
            <Icon size={20} className="text-[var(--color-cedre-green-800)] mb-3" />
            <h3 className="font-display text-xl text-[var(--color-cedre-green-950)] mb-3">{title}</h3>
            <div className="text-sm leading-relaxed text-[var(--color-cedre-ink)]/80">{body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
