import type { EmblaOptionsType } from 'embla-carousel-react'
import { useEffect, useRef } from 'react'
import CarouselHero from '../../components/CarouselHero'
import './styles.css'
import LayerBrand from '../../components/LayerBrand/index'
import ListProducts from '../../components/ListProducts'
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
    <div>
      <section ref={carouselRef} className='carousel-container'>
        <CarouselHero options={optionsCarousel} />
      </section>
      <section>
        <LayerBrand />
      </section>
      <section>
        <ListProducts />
      </section>
    </div>
  )
}

export default Home
