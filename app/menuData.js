const menuData = {
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
        price: 6.90,
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
        name: "Affligem 50cl",
        size: "33cl",
        price: 7.80,
      },
      {
        name: "Affligem 50cl",
        size: "50cl",
        price: 9,
      },
    ],
    biereBouteilles: [
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
  entrees: [
    {
      name: "Samoussa au poulet",
      description: "Salade verte, tomates oignons rouges",
      price: { normal: 12, xl: 16.50 },
    },
    {
      name: "Nems du chef",
      description: "Avec salade verte, tomates et oignons rouges",
      price: { normal: 13, xl: 18 },
    },
    {
      name: "Croustillant de chèvre",
      description: "Fromage de chèvre, sauce pesto",
      price: 18,
    },
    {
      name: "Carpaccio du chef",
      description: "Carpaccio de boeuf, salade verte, parmesan, croustillant chèvre (sauce pesto maison, pignon de pain, amandes et basilic)",
      price: 18,
    },
    {
      name: "Salade de chèvre chaud au miel",
      description: "Crottin de Chavignol, salade, tomate, oignons, miel et toasts",
      price: 16,
    },
    {
      name: "Salade César au poulet",
      description: "Blancs de poulet, salade, parmesan, croûtons, pain de mie, moutarde, crème fraîche",
      price: 16,
    },
    {
      name: "Burrata du chef",
      description: "Salade, tomate, jambon ibérique, fromage Burrata (sauce pesto maison, pignon de pain, amandes et basilic)",
      price: 16,
    },
    {
      name: "Salade de boeuf 5 épices",
      description: "Paleron de boeuf aux 5 épices (3h de cuisson)",
      price: 18,
    },
    {
      name: "Salade melon, feta, jambon cru",
      description: "Salade verte, melon, fromage fêta, jambon cru (24 mois)",
      price: 18,
    },
    {
      name: "Fish and chips",
      description: "Filet de merlu, salade verte, tomate, oignon rouge",
      price: 18,
    },
  ],

   pizza: [
    {
      name: "Pizza 3 Fromages",
      description: "Tomate, crottin de chèvre, parmesan, mozzarella, manchego, oignon haché",
      price: 15,
    },
    {
      name: "Pizza Burrata ( boule entière )",
      description: "Tomate, burrata, huile d'olive, basilic, sauce pesto",
      price: 15,
    },
    {
      name: "Pizza Chorizo",
      description: "Tomate, mozzarella râpée, olive noir, roquette, chorizo",
      price: 15,
    },
    {
      name: "Pizza Saumon Fumé",
      description: "Tomate, crème fraîche, tranches de saumon fumé, mozzarella râpée",
      price: 15,
    },
    {
      name: "Pizza Poulet et Champignons",
      description: "Tomate, oignon, crème fraîche, escalopes de poulet, champignons, mozzarella râpée, olives",
      price: 15,
    },
    {
      name: "Pizza Jambon de Parme et Roquette",
      description: "Tomate, 4 tranches de jambon, parmesan, huile d'olive, roquette",
      price: 15,
    },
  ],

  viandes: [
     {
      name: "Le délice de Saleilles (nouveauté)",
      description: "Fromage chaud fondant et coulant (munster ou maroilles) avec frites maison et salade",
      price: 23,
    },
     {
      name: "Tataki de boeuf",
      description: "Boeuf saisi et mariné aux épices, frites et salade",
      price: 18,
    },
    {
      name: "Magret de canard entier",
      description: "Sauce de la cheffe au miel et à l'orange",
      price: 30,
    },
    {
      name: "Tartare de boeuf revisité(persillé Angus)",
      description: "Fait au couteau (spécialité de la cheffe) mangue, boeuf, échalotes, herbes aromatiques, soja, sauce huître",
      price: 26,
    },
    {
      name: "Pièce du boucher",
      description: "",
      price: 26,
    },
    {
      name: "Porc caramel (3h de cuisson)",
      description: "",
      price: 22,
    },
    {
      name: "Hamburger de la cheffe",
      description: "",
      price: 18,
    },
  ],
  mer: [
    {
      name: "Steak de thon grillé (160 - 180gr)",
      description: "",
      price: 28,
    },
    {
      name: "Gambas à l'ail et au persil (6 pièces)",
      description: "",
      price: 29,
    },
    {
      name: "Poisson du jour sauce de la cheffe",
      description: "",
      price: 23,
    },
  ],
  platsChinois: [
    {
      name: "Nouilles de riz sautées au boeuf",
      description: "",
      price: 23,
    },
    {
      name: "Nouilles de riz sautées au poulet",
      description: "",
      price: 23,
    },
    {
      name: "Sauté de porc",
      description: "",
      price: 23,
    },
    {
      name: "Ravioles maison (12 pièces)",
      description: "Porc et boeuf",
      price: 23,
    },
    {
      name: "Ravioles maison et Siomai crevettes (12 pièces)",
      description: "",
      price: 25,
    },
    {
      name: "Crevettes aux noix de cajou",
      description: "",
      price: 25,
    },
    {
      name: "Cuisses de grenouilles sauce soja",
      description: "",
      price: 25,
    },
  ],
  desserts: [
    {
      name: "Crème catalane",
      price: 6,
    },
    {
      name: "Baba au rhum",
      price: 8,
    },
    {
      name: "Fondant au chocolat",
      description: "Glace vanille, caramel et chantilly maison",
      price: 10,
    },
    {
      name: "Tarte aux pommes",
      description: "Glace vanille, caramel et chantilly maison",
      price: 10,
    },
    {
      name: "Carpaccio d'ananas",
      description: "Ananas, glace vanille, caramel et chantilly maison",
      price: 10,
    },
  ],
};

export default menuData;
