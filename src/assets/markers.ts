import beerIcon from './images/beer.png'

interface positionInterface {
  lat: number
  lng: number
}

export interface markerContentInterface {
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
      title: 'Beer',
      icon: beerIcon,
      description: 'Really Nice Beer!',
      url: 'https://browarkormoran.pl/piwa-browaru-kormoran/imperium-prunum/',
      image:
        'https://browarkormoran.pl/wp-content/uploads/2019/12/imperium-prunum-2020-butelka.png',
    },
  },
]

export default markers
