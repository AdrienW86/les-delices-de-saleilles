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
    salades: [ 
      {
      name: "Nems du chef (maison)",
      description: "Avec accompagnement salade verte, tomates, oignons",
      price: 18,
    },
    {
      name: "Samoussa au poulet",
      description: "Salade verte, tomates, oignons",
      price: 18,
    },
    {
      name: "Chèvre chaud au miel",
      description: "Fromage de chèvre, (sauce pesto maison), pignon de pain amandes ail et basilique.",
      price: 18,
    },
    {
      name: "Salade melon, feta, jambon cru",
      description: "Salade verte, melon, fromage fêta, jambon cru (24 mois)",
      price: 18,
    },
  ],

  entrees: [ 
     {
      name: "Petite assiette de charcuterie",
      description: "",
      price: 7,
    },  
     {
      name: "Samoussa au boeuf",
      description: "",
      price: 7,
    },
    {
      name: "Melon au jambon cru",
      description: "",
      price: 8,
    }, 
    {
      name: "Salade de chèvre chaud au miel",
      description: "Crottin de Chavignol, salade, tomate, oignons, miel et toasts",
      price: 7,
    },
    
  ],

  viandes: [
     {
      name: "Le délice de Saleilles (nouveauté)",
      description: "Fromage chaud fondant et coulant (munster ou maroilles) avec frites maison et salade",
      price: 23,
    },
    {
      name: "Magret de canard entier",
      description: "Sauce de la cheffe au miel et à l'orange",
      price: 26,
    },
    {
      name: "Faux filet de boeuf",
      description: "Avec frites et salade",
      price: 25,
    },
    {
      name: "Tartare de boeuf revisité(persillé Angus)",
      description: "Fait au couteau (spécialité de la cheffe) mangue, boeuf, échalotes, herbes aromatiques, soja, sauce huître",
      price: 26,
    },
    {
      name: "Pièce du boucher",
      description: "Pièce de boeuf du moment",
      price: 20,
    },
    
  ],
  mer: [
    {
      name: "Filet de merlu",
      description: "Sauce à l'ail, persil, frites salade ou légumes",
      price: 18,
    },
    {
      name: "Filet de merlu pané",
      description: "Frites et salade ou légumes",
      price: 18,
    },
    {
      name: "Steak de thon rouge",
      description: "Sauce ail et persil, frites salade ou légumes",
      price: 22,
    },
  ],
  platsChinois: [
    {
      name: "Nems du chef",
      description: "Avec salade verte, tomates et oignons rouges. 3 pièces ou 5 pièces.",
      price: 18,
    },
    {
      name: "Samoussa au poulet",
      description: "Salade verte, tomates oignons rouges. 4 pièces ou 6 pièces.",
      price: 18,
    },    
    {
      name: "Rou jia mo",
      description: "Poitrine porc (3h de cuisson) avec frites maison.",
      price: 20
    },
    {
      name: "Nouilles de riz sautées au boeuf",
      description: "",
      price: 23,
    },    
    {
      name: "Ravioles maison (12 pièces)",
      description: "Porc et boeuf",
      price: 23,
    },
    {
        name:"Porc caramel",
        description:" Poitrine de porc (3h de cuisson)",
        price: 22,
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
      name: "Carpaccio d'ananas",
      description: "Ananas, glace vanille, caramel et chantilly maison",
      price: 10,
    },
    {
      name: "Nems banane et chocolat",
      description: "Nems chocolat et banane, glace citron vert artisanale et chantilly maison",
      price: 10,
    },
    {
      name: "Glace des Alpes (supplément chantilly 2€)",
      description: "Nos différents parfum: vanille de madagascar, caramel, fraise, menthe, violette,café, framboise, mandarine, citron vert, noix de coco, fruit de la passion, chocolat, pistache, rhum raison au rhum des antilles française",
      price: 3,
    },
  ],
};

export default menuData;