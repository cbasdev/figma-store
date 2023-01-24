import {
  FirstImage,
  SecondImage,
} from '../../../assets/carousel/CarouselImages'
import styles from './styles.module.css'
import { useRef, useState } from 'react'
const items = [
  {
    text: 'Figma embroidered true',
    source: FirstImage,
  },
  {
    text: 'Figma x',
    source: SecondImage,
  },
  {
    text: 'Figma x',
    source: SecondImage,
  },
  {
    text: 'Figma x',
    source: SecondImage,
  },
  {
    text: 'Figma x',
    source: SecondImage,
  },
]

const CarouselHero = () => {
  const cards: any = useRef()
  const slider: any = useRef()
  const [isPressed, setIsPressed] = useState(false)
  const [cursorX, setCursorX] = useState(0)
  const [debounce, setDebounce] = useState(false)

  function boundSlides() {
    const containerRect = slider.current.getBoundingClientRect()
    const cardsRect = cards.current.getBoundingClientRect()
    console.log(cardsRect)
    if (cards.current.style.left.replace(/px$/, '') > 0) {
      cards.current.style.left = 0
    } else if (cardsRect.right < containerRect.right) {
      cards.style.left = `-${cardsRect.width - containerRect.width}px`
    }
  }

  const press = (e: any) => {
    setIsPressed(true)
    setCursorX(e.clientX - cards.current.offsetLeft)
    // slider.style.cursor = "grabbing";
  }

  const unpress = (e: any) => {
    console.log('unpress')

    setIsPressed(false)
  }

  const move = (e: any) => {
    if (debounce || !isPressed) return
    if (cards.current.style.left < cursorX) {
      cards.current.style.left = `${e.clientX - cursorX}px`
    }
    console.log(slider.current.getBoundingClientRect())
    boundSlides()
  }

  return (
    <div
      onMouseDown={press}
      onMouseUp={unpress}
      onMouseMove={move}
      ref={slider}
      className={styles.containerCarousel}
    >
      <div className={styles.carouselItems} ref={cards}>
        {items.map((item, index) => (
          <div className={styles.carouselItem} key={index}>
            <h2>{item.text}</h2>
            <item.source />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarouselHero
