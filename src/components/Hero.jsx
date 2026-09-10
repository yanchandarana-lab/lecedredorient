import heroImg from '../assets/images/salle-1.png'
import logoRond from '../assets/images/logo-rond.png'
import CedarEmblem from './CedarEmblem'

export default function Hero() {
  return (
    <section id="top" className="relative h-[92vh] min-h-[560px] flex items-end md:items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Salle du restaurant Le Cèdre d'Orient" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cedre-green-950)] via-[rgba(11,43,34,0.55)] to-[rgba(11,43,34,0.35)]" />
      </div>

      <img
        src={logoRond}
        alt="Enseigne du restaurant Le Cèdre d'Orient"
        className="absolute top-24 right-5 md:top-10 md:right-10 w-20 h-20 md:w-32 md:h-32 rounded-full drop-shadow-2xl reveal"
        style={{ animationDelay: '0.4s' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pb-16 md:pb-0 text-white">
        <CedarEmblem className="w-10 h-10 text-[var(--color-cedre-gold-light)] mb-6 reveal" />
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[var(--color-cedre-gold-light)] mb-4 reveal" style={{ animationDelay: '0.1s' }}>
          Restaurant Traiteur &middot; Bessancourt
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-2xl reveal" style={{ animationDelay: '0.18s' }}>
          Le Cèdre d&rsquo;Orient
        </h1>
        <p className="font-display italic text-lg md:text-2xl text-white/90 max-w-xl mt-5 reveal" style={{ animationDelay: '0.26s' }}>
          Les saveurs authentiques de la cuisine syro-libanaise, sur place ou à emporter.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-9 reveal" style={{ animationDelay: '0.34s' }}>
          <a
            href="tel:0987103920"
            className="bg-[var(--color-cedre-gold)] hover:bg-[var(--color-cedre-gold-dark)] transition-colors text-white text-sm font-semibold uppercase tracking-wide px-7 py-3.5 rounded-sm"
          >
            Réserver : 09 87 10 39 20
          </a>
          <a
            href="#galerie"
            className="border border-white/60 hover:border-white transition-colors text-white text-sm font-semibold uppercase tracking-wide px-7 py-3.5 rounded-sm"
          >
            Découvrir en images
          </a>
        </div>
      </div>
    </section>
  )
}
