import { useState } from 'react'
import type { IProduct } from '../ListProducts'
import './styles.css'
interface iPropsProduct {
  product: IProduct
}

const Product = ({ product }: iPropsProduct) => {
  const [hover, setHover] = useState<boolean>(false)
  const { id, name, frontImage, backImage, price } = product
  return (
    <div className={product.large ? 'large-grid product' : 'product'}>
      <div
        className='image-sizer'
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      >
        {hover ? (
          <div>
            <img
              src={backImage}
              alt={name}
              style={{ backgroundImage: `url("${product.background}")` }}
              className={`duration-1000 transition`}
            />
          </div>
        ) : (
          <img src={frontImage} alt={name} />
        )}
      </div>
      <div className='flex justify-between text-xl'>
        <p className='font-black'>{name}</p>
        <span>{price}</span>
      </div>
    </div>
  )
}

export default Product
