import type { EmblaOptionsType } from 'embla-carousel-react'
import { useEffect, useRef } from 'react'
import CarouselHero from '../../components/CarouselHero'
import './styles.css'
const optionsCarousel: EmblaOptionsType = {
  align: 'start',
  loop: true,
}
const Home = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const { current } = carouselRef
    if (current && current?.offsetWidth > 1080) {
      optionsCarousel.align = 'center'
    }
  }, [carouselRef])
  return (
    <div ref={carouselRef} className='carousel-container'>
      <CarouselHero options={optionsCarousel} />
    </div>
  )
}

export default Home
