// Silhouette de cèdre du Liban stylisée — élément signature du site, redessiné en SVG
// (le cèdre est un symbole national libanais, pas un logo protégé d'un tiers).
export default function CedarEmblem({ className = '', tone = 'gold' }) {
  const fill = tone === 'gold' ? 'currentColor' : 'currentColor'
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill={fill}
      aria-hidden="true"
    >
      <path d="M50 6c2.5 5 4 9 4 13-3-2-5-2-8 0 0-4 1.5-8 4-13z" />
      <path d="M50 16c6 6 11 12 13 18-4-2-7-2-11 1-1-7-1-13-2-19z" />
      <path d="M50 16c-6 6-11 12-13 18 4-2 7-2 11 1 1-7 1-13 2-19z" />
      <path d="M50 30c8 5 15 12 18 20-5-2-9-2-14 2-1-8-2-15-4-22z" />
      <path d="M50 30c-8 5-15 12-18 20 5-2 9-2 14 2 1-8 2-15 4-22z" />
      <path d="M50 46c10 5 19 13 23 23-6-2-11-1-17 3-1-9-3-18-6-26z" />
      <path d="M50 46c-10 5-19 13-23 23 6-2 11-1 17 3 1-9 3-18 6-26z" />
      <rect x="47.5" y="66" width="5" height="14" rx="1" />
      <path d="M28 82c6-4 14-6 22-6s16 2 22 6c-6 3-14 4-22 4s-16-1-22-4z" />
    </svg>
  )
}
