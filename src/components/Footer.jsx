import CedarEmblem from './CedarEmblem'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-cedre-green-950)] text-white/80 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <CedarEmblem className="w-6 h-6 text-[var(--color-cedre-gold-light)]" />
            <span className="font-display text-lg text-white">Le Cèdre d&rsquo;Orient</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Restaurant traiteur &mdash; spécialités syro-libanaises à Bessancourt.
          </p>
        </div>

        <div>
          <h4 className="uppercase text-xs tracking-[0.2em] text-[var(--color-cedre-gold-light)] mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#top" className="hover:text-white">Accueil</a></li>
            <li><a href="#galerie" className="hover:text-white">Galerie</a></li>
            <li><a href="#infos" className="hover:text-white">Infos pratiques</a></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase text-xs tracking-[0.2em] text-[var(--color-cedre-gold-light)] mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>71 Grande Rue, 95550 Bessancourt</li>
            <li><a href="tel:0987103920" className="hover:text-white">09 87 10 39 20</a></li>
            <li><a href="tel:0669191936" className="hover:text-white">06 69 19 19 36</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col sm:flex-row justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} Le Cèdre d&rsquo;Orient &mdash; Tous droits réservés.</p>
        <p>71 Grande Rue, 95550 Bessancourt</p>
      </div>
    </footer>
  )
}
