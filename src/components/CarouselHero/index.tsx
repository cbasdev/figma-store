import {
  FirstImage,
  SecondImage,
  ThirdImage,
  FourthImage,
  FifthImage,
  SixthImage,
  SeventhImage,
  EighthImage,
} from '../../../assets/carousel/CarouselImages'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

import './styles.css'
const items = [
  {
    text: 'Figma x2',
    source: FirstImage,
  },
  {
    text: 'Figma x2',
    source: SecondImage,
  },
  {
    text: 'Figma embroidered true',
    source: ThirdImage,
  },
  {
    text: 'Figma x2',
    source: FourthImage,
  },
  {
    text: 'Figma x',
    source: FifthImage,
  },
  {
    text: 'Figma x',
    source: SixthImage,
  },
  {
    text: 'Figma x',
    source: SeventhImage,
  },
  {
    text: 'Figma x',
    source: EighthImage,
  },
]

type PropType = {
  options: EmblaOptionsType
}

const CarouselHero: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {items.map((item, index) => (
            <div className='embla__slide' key={index}>
              <item.source />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarouselHero
