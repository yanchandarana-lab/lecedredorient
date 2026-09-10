// Carte du restaurant Le Cèdre d'Orient
// Séparée du JSX pour permettre une mise à jour facile des plats et des prix.
// NOTE : la catégorie "Grillades Orientales" et une partie de "Nos Boissons"
// seront ajoutées dès réception de photos nettes de ces pages de la carte.

export const menu = [
  {
    id: 'entrees-chaud',
    title: 'Entrées & Mezze — Chaud',
    items: [
      { name: 'Falafel (5 pièces)', desc: 'Boulettes de pois chiches, sauce tahini', price: '7,90€' },
      { name: 'Sambousek Jebné (4 pièces)', desc: 'Chaussons au fromage', price: '7,50€' },
      { name: 'Sambousek Lahmé (4 pièces)', desc: 'Chaussons à la viande', price: '8,50€' },
      { name: 'Fatayer (4 pièces)', desc: 'Chaussons aux épinards citronnés', price: '7,90€' },
      { name: 'Kebbé (4 pièces)', desc: 'Beignets de blé mixés à la viande hachée, oignons et pignons de pin', price: '11,90€' },
      { name: 'Batata Harra', desc: "Pomme de terre frite à l'ail, épices et coriandre", price: '7,50€' },
      { name: 'Sfiha libanaise', desc: "Tartelette à la viande hachée mixée à l'oignon et tomates", price: '7,50€' },
      { name: 'Houmous à la viande', desc: 'Viande de bœuf servie sur purée de pois chiches, crème de sésame', price: '11,90€' },
      { name: 'Rakik (4 pièces)', desc: 'Feuille de brik au fromage feta et mozzarella', price: '7,50€' },
    ],
  },
  {
    id: 'entrees-froid',
    title: 'Entrées & Mezze — Froid',
    items: [
      { name: 'Houmous', desc: 'Purée de pois chiches, crème de sésame', price: '6,90€' },
      { name: 'Moutabal', desc: 'Aubergine grillée, crème de sésame', price: '7,90€' },
      { name: 'Taboulé', desc: 'Salade au persil, tomate, oignon, blé fin, citron', price: '7,90€' },
      { name: 'Fattouch', desc: 'Salade, tomate, concombre, pain grillé, grenade, radis, menthe fraîche', price: '7,90€' },
      { name: 'Warak Enab', desc: 'Feuilles de vigne farcies au riz parfumé de citron', price: '6,90€' },
      { name: 'Mgluous', desc: "Aubergines farcies au sésame et poivrons rouges, huile d'olive", price: '7,90€' },
      { name: 'Salade orientale', desc: "Salade, concombre, tomate, oignons, olives, feta, citron, huile d'olive", price: '8,50€' },
      { name: 'Assortiment Mezze (2 pers.)', desc: 'Sélection de 4 mezze chaudes et froides', price: '23,90€' },
    ],
  },
  {
    id: 'manouche',
    title: 'Manouché',
    items: [
      { name: 'Zaatar', desc: 'Thym, graines de sésame', price: '9,90€' },
      { name: 'Lahmé bi ajeen', desc: 'Farce de viande, oignon, tomate, persil', price: '12,90€' },
      { name: 'Jebné', desc: 'Fromage', price: '10,90€' },
      { name: 'Sujuk', desc: 'Fromage et sujuk (pepperoni au bœuf épicé)', price: '12,90€' },
      { name: 'Mixte', desc: 'Fromage et thym, graines de sésame', price: '11,90€' },
    ],
  },
  {
    id: 'menu-enfant',
    title: 'Menu Enfant',
    subtitle: "Pour les petits gourmands, jusqu'à 12 ans",
    items: [
      { name: 'Mini Chich Taouk & Frites', desc: '', price: '10,90€' },
      { name: 'Nuggets & Frites', desc: '', price: '9,90€' },
      { name: 'Mini Manouché', desc: '', price: '9,90€' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { name: 'Helou Mshakal (1 pièce)', desc: 'Petit feuilleté de miel, pistache et noix', price: '5,90€' },
      { name: 'Maamoul (1 pièce)', desc: 'Biscuits fourrés aux dates ou aux noix', price: '4,90€' },
      { name: 'Mtabbaye', desc: "Crème de lait au sirop de fleur d'oranger garni de pistaches", price: '6,90€' },
      { name: 'Osmalliyeh', desc: "Crème de lait, cheveux d'ange avec sirop de fleur d'oranger", price: '7,90€' },
      { name: 'Karayef (1 pièce)', desc: 'Pâte de crêpe farcie, aux noix, pistache', price: '5,90€' },
    ],
  },
  {
    id: 'glace',
    title: 'Glace',
    subtitle: 'Composez votre coupe',
    items: [
      { name: 'Chocolat / Vanille / Fraise / Citron / Pistache / Menthe Chocolat', desc: '1 boule', price: '1,90€' },
      { name: 'Deux boules', desc: '', price: '3,90€' },
      { name: 'Trois boules', desc: '', price: '4,90€' },
      { name: 'Supplément coulis ou crème chantilly', desc: '', price: '+1,00€' },
    ],
  },
  {
    id: 'boissons',
    title: 'Nos Boissons',
    note: 'Carte en cours de complément — catégorie mise à jour prochainement.',
    items: [
      { name: 'Soft (33cl)', desc: '', price: '1,80€' },
      { name: 'Redbull (25cl)', desc: '', price: '2,50€' },
      { name: 'Eau plate (50cl)', desc: '', price: '1,50€' },
      { name: 'Perrier (33cl)', desc: '', price: '1,50€' },
      { name: 'Crussonise', desc: '', price: '1,00€' },
    ],
  },
]

// Catégorie repérée sur la carte physique mais dont la photo transmise était illisible.
// À compléter dès réception de la photo nette (voir /areas/site-cedre-orient.md).
export const menuPending = ['Grillades Orientales']
