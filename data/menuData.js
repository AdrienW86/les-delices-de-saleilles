const menuData = {
  // Section boissons conservée sans modification
  boissons: {
    nonAlcoolisees: [
      {
        name: "Badoit, Vittel, Perrier 50cl",
        size: "50cl",
        price: 4.50,
      },
      {
        name: "Badoit, Vittel, Perrier 100cl",
        size: "100cl",
        price: 6,
      },
      {
        name: "Nestea",
        price: 4,
      },
      {
        name: "Coca-Cola",
        price: 4,
      },
      {
        name: "Schweppes",
        price: 4,
      },
      {
        name: "Jus d'orange",
        price: 4,
      },
    ],
    chaudes: [
      {
        name: "Petit café lavazza avec spéculos",
        price: 1.40,
      },
      {
        name: "Petit café + croissant",
        price: 1.90,
      },
      {
        name: "Chocolat / Thé / Cappuccino",
        price: 4,
      },
      {
        name: "Petit café crème",
        price: 2.20,
      },
      {
        name: "Grand café",
        price: 4,
      },
    ],
    aperitifs: [
      {
        name: "Ricard / Pastis 3cl",
        price: 4,
      },
      {
        name: "Picon 4cl plus bière",
        price: 8,
      },
      {
        name: "Martini / Porto 5cl",
        price: 5,
      },
      {
        name: "Kir mûr / cassis",
        price: 5,
      },
      {
        name: "Rhum arrangé",
        price: 9,
      },
      {
        name: "Whisky Cardhu 4cl",
        price: 9,
      },
      {
        name: "Nika pur malt",
        price: 10,
      },
      {
        name: "Whisky 4cl",
        price: 7,
      },
    ],
    bierePression: [
      {
        name: "Mil.lenari 25cl",
        size: "25cl",
        price: 4,
      },
      {
        name: "Mil.lenari 33cl",
        size: "33cl",
        price: 6,
      },
      {
        name: "Mil.lenari 50cl",
        size: "50cl",
        price: 7.50,
      },
      {
        name: "Affligem 25cl",
        size: "25cl",
        price: 4.90,
      },
      {
        name: "Affligem 33cl",
        size: "33cl",
        price: 7.50,
      },
      {
        name: "Affligem 50cl",
        size: "50cl",
        price: 9,
      },
    ],
    biereBouteilles: [
      {
        name: "Millenari blonde ou brune 33cl",
        price: 4.5,
      },
      {
        name: "Chimay",
        price: 8,
      },
      {
        name: "Karmeliet 33cl",
        price: 8,
      },
      {
        name: "Duvel 33cl",
        price: 8,
      },
      {
        name: "Démon 33cl",
        price: 8,
      },
      {
        name: "Rince cochon 33cl",
        price: 8,
      },
      {
        name: "Chouffe 75cl",
        price: 16,
      },
      {
        name: "Kasteel 75cl",
        price: 17,
      },
      {
        name: "Rince cochon 75cl",
        price: 15,
      },
      {
        name: "Paix Dieu 75cl",
        price: 18,
      },
    ],
    vin: [
      {
        name: "Verre rosé (cubi)",
        price: 4,
      },
      {
        name: "Verre blanc (cubi)",
        price: 4,
      },
      {
        name: "Verre rouge (cubi)",
        price: 4,
      },
      {
        name: "Rouge / rosé 25cl (cubi)",
        price: 6,
      },
      {
        name: "Rouge / rosé 50cl (cubi)",
        price: 9,
      },
      {
        name: "Bouteille riere cadene",
        price: 20,
      },     
      {
        name: "Les doms brial. Rouge, rosé ou blanc",
        price: 27,
      },
      {
        name: "Les collioures: blanc clos et sébastien",
        price: 39,
      },
      {
        name: "Les clos de paulilles. Rouge et rosé",
        price: 30,
      },
      {
        name: "La masia sainte thérèse rouge",
        price: 32,
      },
    ],
  },

  // --- NOUVEAUX ÉLÉMENTS DE LA CARTE & MENUS (Issus des photos) ---

  entrees: [
    {
      name: "Chèvre chaud au miel",
      description: "Fromage de chèvre, (sauce pesto maison), pignon de pain amandes ail et basilique",
      price: 10,
    },
    {
      name: "Salade melon, féta, jambon cru",
      description: "Salade verte, melon, fromage fêta, (jambon cru 24 moi)",
      price: 10,
    },
    {
      name: "Nems de la cheffe (maison)",
      description: "Avec accompagnement de salade verte, tomates, oignons",
      price: 10,
    },
    {
      name: "Samoussa aux poulet",
      description: "Salade verte, tomates, oignons",
      price: 10,
    },
  ],

  salades: [
    {
      name: "Nems du chef (maison)",
      description: "Avec accompagnement de salade verte, tomates, oignons",
      price: 18,
    },
    {
      name: "Samoussa aux poulet",
      description: "Avec accompagnement de salade verte, tomates, oignons",
      price: 18,
    },
    {
      name: "Chèvre chaud au miel",
      description: "Salade verte, tomates, oignons",
      price: 18,
    },
    {
      name: "Salade melon, féta, jambon cru",
      description: "Salade verte, melon, fromage fêta, (jambon cru 24 mol)",
      price: 18,
    },
  ],

  viandes: [
    {
      name: "Brochette de bœuf",
      description: "Servi avec légumes ou frites faites maison",
      price: 20,
    },
    {
      name: "Pièce de bœuf",
      description: "Servi avec légumes ou frites faites maison",
      price: 22,
    },
    {
      name: "Magret de canard entier",
      description: "Servi avec légumes ou frites faites maison",
      price: 26,
    },
    {
      name: "Brochettes magret de canard (pour 2 personnes)",
      description: "Servi avec légumes ou frites faites maison",
      price: 36,
    },
  ],

  poissons: [
    {
      name: "Poisson du jour sauce à l'ail et persil",
      description: "Servi avec légumes ou frites faites maison",
      price: 18,
    },
    {
      name: "Steak de thon rouge sauce ail et persil",
      description: "Servi avec légumes ou frites faites maison",
      price: 22,
    },
    {
      name: "Gambas sauce ail et persil",
      description: "Servi avec légumes ou frites faites maison",
      price: 22,
    },
  ],

  nosPlatsChinois: [
    {
      name: "Sauté de bœuf et tiges d'ail",
      description: "",
      price: 23,
    },
    {
      name: "Nouilles de riz au bœuf",
      description: "",
      price: 23,
    },
    {
      name: "Ravioles maison (12 pièces)",
      description: "Au porc",
      price: 23,
    },
    {
      name: "Sauté de bœuf",
      description: "Légumes, soja, nouilles de riz",
      price: 23,
    },
  ],

  desserts: [
    {
      name: "Baba au rhum",
      description: "",
      price: 8,
    },
    {
      name: "Fondant au chocolat",
      description: "Glace vanille, caramel, chantilly faite maison",
      price: 10,
    },
    {
      name: "Nems à la banane et chocolat",
      description: "",
      price: 10,
    },
    {
      name: "Création de la cheffe",
      description: "Glace des Alpes chocolat, chantilly faite maison",
      price: 10,
    },
    {
      name: "Carpaccio d'ananas",
      description: "Glace vanille, ananas, caramel, chantilly faite maison",
      price: 10,
    },
    {
      name: "Glace des Alpes",
      description: "Parfums: Vanille de Madagascar, Caramel, Fraise, Menthe, Violette, Café, Framboise, Mandarine, Citron vert, Noix de coco, Cassis, Fruit de la Passion, Chocolat, Pistache, Rhum Raisin au rhum des Antilles françaises",
      prices: {
        uneBoule: 3.00,
        deuxBoules: 6.00,
        supplementChantilly: 2.00,
      },
    },
  ],

  menusEtFormules: [
    {
      name: "Fondue chinoise",
      price: 38,
      details: "Uniquement sur réservation (3 jours avant). Le midi ou le soir (minimum 4 personnes).",
    },
    {
      name: "Menus chinois A (pour 2 personnes)",
      price: 50,
      entrees: "4 Samoussa aux poulets et salades",
      plats: "Cuisses de grenouilles et poitrine de porc (3h cuisson) accompagnement légumes, soja, tofu, nouilles de riz",
    },
    {
      name: "Planche complète (pour 2 personnes)",
      price: 60,
      composition: [
        "2 Samoussa aux poulets",
        "2 Nems maison",
        "2 chèvre chaud au miel",
        "8 Ravioles maison",
        "4 gambas",
        "Jambon Serrano et frites maison salades",
      ],
    },
    {
      name: "Assiette complète",
      price: 28,
      composition: [
        "2 samoussa",
        "1 Nems",
        "2 Gambas",
        "1 Chèvre chaud au miel",
        "Jambon Serrano et frites maison salades",
      ],
    },
    {
      name: "Menu « Petit loup » (enfant - 10 ans)",
      price: 12,
      composition: "Aiguillettes de poulet ou steak haché de bœuf frites + 1 boule de glace",
    },
    {
      name: "Menu Découverte",
      price: 30,
      entrees: [
        "Salade de Chèvre chaud au miel",
        "Jambon Serrano et melon",
        "Samoussa aux poulet",
      ],
      plats: [
        "Brochette de bœuf",
        "Gambas à l'ail et persil",
        "Rou jia mo (poitrine de porc 3h cuisson avec frites faites maison)",
      ],
      desserts: [
        "Glace à la vanille",
        "Le Dessert du jour",
      ],
      accompagnement: "Frites fraîches Maison Ou légumes de saison",
    },
  ],
};

export default menuData;