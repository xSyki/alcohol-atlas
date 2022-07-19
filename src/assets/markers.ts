import beerIcon from './images/beer.png'
import vodkaIcon from './images/vodka.png'
import wineIcon from './images/wine.png'
import drinkIcon from './images/drink.png'
import whiskeyIcon from './images/whiskey.png'
import liqueurIcon from './images/liqueur.png'
import otherIcon from './images/other.png'

enum typeEnum {
  BEER = 'BEER',
  VODKA = 'VODKA',
  WINE = 'WINE',
  DRINK = 'DRINK',
  WHISKEY = 'WHISKEY',
  LIQUEUR = 'LIQUEUR',
  OTHER = 'OTHER',
}

interface positionInterface {
  lat: number
  lng: number
}

export interface markerContentInterface {
  type: typeEnum
  title: string
  icon: string
  description: string
  url: string
  image: string
}

export interface markerInterface {
  id: number
  position: positionInterface
  markerContent: markerContentInterface
}

const markers: markerInterface[] = [
  {
    id: 1,
    position: {
      lat: 53.762305,
      lng: 20.484779,
    },
    markerContent: {
      type: typeEnum.BEER,
      title: 'Baltic Porter',
      icon: beerIcon,
      description:
        'This beer style evolved from the British porter, and it was partially influenced by imperial stouts. The beers that fall under this category will typically have high alcohol content, usually between 5.5 and 9.5% ABV, while their color ranges from mahogany red to dark brown.',
      url: 'https://en.wikipedia.org/wiki/Porter_(beer)#Baltic_porter',
      image:
        'https://browarkormoran.pl/wp-content/uploads/2019/12/imperium-prunum-2020-butelka.png',
    },
  },
  {
    id: 2,
    position: {
      lat: 42.893382,
      lng: 12.650991,
    },
    markerContent: {
      type: typeEnum.WINE,
      title: 'Sagrantino',
      icon: wineIcon,
      description:
        'Sagrantino is an Italian grape variety that is thought to be native to Umbria. It is mostly cultivated in a small area around Montefalco in Perugia, which is also the location of its flagship appellation, the DOCG Montefalco Sagrantino.',
      url: 'https://pl.wikipedia.org/wiki/Sagrantino',
      image:
        'https://www.vinello.pl/media/image/b6/a9/07/Montefalco_Sagrantino_Lungarotti.png',
    },
  },
  {
    id: 3,
    position: {
      lat: 44.905309,
      lng: 20.274518,
    },
    markerContent: {
      type: typeEnum.VODKA,
      title: 'Rakia',
      icon: vodkaIcon,
      description:
        'Rakija is a universal term used for various fruit brandies produced in several Balkan countries (Southeast Europe). This strong spirit is distilled from different fruit and is sometimes additionally flavored or used as a liqueur base. The most common versions are made from plums (šljivovica), Williams pear (viljamovka), quinces (dunjevača), apricots (kajsijevača), apples (jabukovača), grapes (lozovača/komovica), and many more.',
      url: 'https://en.wikipedia.org/wiki/Rakia',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/8e/ЕленскаСливова.jpg',
    },
  },
  {
    id: 4,
    position: {
      lat: 41.402205,
      lng: 2.174119,
    },
    markerContent: {
      type: typeEnum.DRINK,
      title: 'Sangria',
      icon: drinkIcon,
      description:
        'Sangria is a fruity Spanish cocktail made with red wine and chopped fruits such as pears, peaches, berries, apples, nectarines, or pineapple. The beverage is often combined with sugar, orange juice, sparkling water, and even brandy. It is believed that the predecessor of Sangria is hippocras, a beverage made with wine, sugar, and spices.',
      url: 'https://en.wikipedia.org/wiki/Sangria',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b5/Red_Wine_Sangria_with_lemon%2C_lime%2C_apple%2C_and_orange_served_in_a_glass_-_Evan_Swigart.jpg',
    },
  },
  {
    id: 5,
    position: {
      lat: 55.947209,
      lng: -3.199842,
    },
    markerContent: {
      type: typeEnum.WHISKEY,
      title: 'Scotch whisky',
      icon: whiskeyIcon,
      description:
        'Whisky or whiskey is a spirit made from fermented grains, typically corn, rye, wheat, and barley, and is always aged, predominantly in oak barrels. The story of its discovery provokes heated debates, since both Irish and Scots claim whisky as their invention.',
      url: 'https://en.wikipedia.org/wiki/Scotch_whisky',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Bowmore_whisky_12_years.JPG',
    },
  },
  {
    id: 6,
    position: {
      lat: 52.166282,
      lng: 10.548647,
    },
    markerContent: {
      type: typeEnum.LIQUEUR,
      title: 'Jägermeister',
      icon: liqueurIcon,
      description:
        'This popular German herbal liqueur was developed in 1934 by Curt Mast. He created the base of the drink with 56 different herbs, roots, and fruits that are macerated in a combination of alcohol and water. The procedure is repeated several times, and the drink is left to age in oak casks before it is combined with alcohol, caramel, sugar, and water to achieve a drinking strength of 35% vol.',
      url: 'https://en.wikipedia.org/wiki/Jägermeister',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/39/17-03-16-Jägermeister-Miniaturen-RR7_8310.jpg',
    },
  },
  {
    id: 7,
    position: {
      lat: 49.807065,
      lng: 19.040099,
    },
    markerContent: {
      type: typeEnum.VODKA,
      title: 'Żubrówka',
      icon: vodkaIcon,
      description:
        'Żubrówka Bison Grass Vodka is a flavored Polish vodka, which contains a bison grass blade (Hierochloe odorata) in every bottle. The Żubrówka brand name is also used on bottles of conventional vodka, labeled as Żubrówka Biała. An easy way to tell the difference is to look for the blade of grass in the bottle. The grass is sourced from the Białowieża Forest, hand-picked and dried under natural conditions.',
      url: 'https://en.wikipedia.org/wiki/Żubrówka',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/ZBG-700_B.jpg',
    },
  },
  {
    id: 8,
    position: {
      lat: 41.891602,
      lng: 12.490967,
    },
    markerContent: {
      type: typeEnum.OTHER,
      title: 'Café Corretto',
      icon: otherIcon,
      description:
        'This spiked Italian coffee pairs a shot of espresso and a splash of liquor, typically different varieties of grappa, brandy, rum, mistrà, or sambuca. The drink is supposed to have a dominant, rich coffee flavor and not to be overpowered by strong liquor.',
      url: 'https://en.wikipedia.org/wiki/Caffè_corretto',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3c/Caffè_corretto.jpg',
    },
  },
]

export default markers
