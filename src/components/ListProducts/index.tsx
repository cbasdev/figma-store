import Product from '../Product'
import './styles.css'

export interface IProduct {
  id: string
  name: string
  frontImage: string
  backImage: string
  price: string
  large?: boolean
  background?: string
}

const listProducts: IProduct[] = [
  {
    id: '1',
    name: 'Rainbow logo tee',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-1096_600x.jpg?v=1636599836',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Rainbow-logo-tee_600x.png?v=1636143026',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$20',
  },
  {
    id: '2',
    name: 'Comments notebook',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-3403_600x.jpg?v=1636598385',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Notebook_54df7006-77df-4397-a719-c2b49bc9df74_600x.png?v=1636147218',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$10',
  },
  {
    id: '3',
    name: 'Figma logo hat',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-414-Edit_600x.jpg?v=1636599254',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-logo-hat_600x.png?v=1636145926',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$20',
  },
  {
    id: '4',
    name: 'Multicursor pin',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-1616_600x.jpg?v=1636599719',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/rainbow-cursor-pin_517323d3-6aff-4e24-ab7c-94107df5a187_600x.png?v=1636146982',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$2',
  },
  {
    id: '5',
    name: 'Logo dimensions tee',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-2327_600x.jpg?v=1636599425',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Flocked-logo-dimensions-tee_600x.png?v=1636143033',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$25',
  },
  {
    id: '6',
    name: 'Bezier water bottle',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-630_600x.jpg?v=1636598228',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/waterbottle_c970529b-0a45-4d21-b0d8-296aeed449c0_600x.png?v=1636146364',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$20',
  },
  {
    id: '7',
    name: 'Hug contents tee',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-1224_1200x.jpg?v=1636599461',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Hug-contents-tee_e300a456-bdd8-470f-9c15-3031ff12d110_1200x.png?v=1636143026',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$20',
    large: true,
  },
  {
    id: '8',
    name: 'Figma logo pin',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-2091_1200x.jpg?v=1636598619',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/figma-logo-pin_d9be32db-3162-4e6b-a1b5-6dce15c40cad_1200x.png?v=1636146982',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$2',
    large: true,
  },
  {
    id: '9',
    name: 'Elevated workflows tee',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-366_600x.jpg?v=1636598498',
    backImage:
      '	https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Elevated-workflows-tee_600x.png?v=1636143031',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$25',
  },
  {
    id: '10',
    name: 'Black arrow socks',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-2379_600x.jpg?v=1636598272',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Black-arrow-icon-socks_600x.png?v=1636144149',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$10',
  },
  {
    id: '11',
    name: 'Figma travel tumbler',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-3116_efa5ec4c-b900-401d-a7fc-d184d47ec4b9_600x.jpg?v=1636599330',
    backImage:
      '	https://cdn.shopify.com/s/files/1/0576/8364/0503/files/kinto-bottle_600x.png?v=1636146662',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$35',
  },
  {
    id: '12',
    name: '<code/> cap',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-1600_600x.jpg?v=1636599757',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/plugins-hat_600x.png?v=1636145926',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$20',
  },
  {
    id: '13',
    name: 'White pen tool socks',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-1242_600x.jpg?v=1636600007',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/White-pen-tool-icon-socks_600x.png?v=1636144376',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$10',
  },
  {
    id: '14',
    name: 'Figma hodie',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-1469_600x.jpg?v=1636598538',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Figma-embroidered-hoodie_600x.png?v=1636143387',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$45',
  },
  {
    id: '15',
    name: 'Blue Figma hat',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-2008_600x.jpg?v=1636598330',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/blue-figma-hat_600x.png?v=1636145926',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$20',
  },
  {
    id: '16',
    name: 'Throw blanket',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-2662_600x.jpg?v=1636599962',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Blanket_600x.png?v=1636145515',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$80',
  },
  {
    id: '17',
    name: 'Rainbow logo tee',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-2894_1200x.jpg?v=1636598662',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Figma-logo-tee_1200x.png?v=1636143022',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$18',
    large: true,
  },
  {
    id: '18',
    name: 'Smiley pin',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-3504_1200x.jpg?v=1636599916',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/smiley-pin_a948a00a-6e53-4bbd-b5c6-68da942ffcd8_1200x.png?v=1636146983',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$2',
    large: true,
  },
  {
    id: '19',
    name: 'Detach instance tee',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-3215_600x.jpg?v=1636598458',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Detach-instance-tee_600x.png?v=1636142947',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$20',
  },
  {
    id: '20',
    name: 'Bezier logo tee',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-4050-Edit_600x.jpg?v=1636598157',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Bezier-logo-tee_600x.png?v=1636143029',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$25',
  },
  {
    id: '21',
    name: 'Vector network pin',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-3423_600x.jpg?v=1636599871',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/red-burst-pin_20fbc189-9a07-4aa8-a362-1e82c86a6479_600x.png?v=1636146983',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$2',
  },
  {
    id: '22',
    name: 'Light grey comment socks',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-4136_600x.jpg?v=1636599515',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Light-grey-comment-icon-socks_600x.png?v=1636144377',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$10',
  },
  {
    id: '23',
    name: 'Detach instance pin',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-2953_600x.jpg?v=1636598421',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/detach-instance-pin_cad395ad-d8d9-4a3b-8753-2db4838f8ec4_600x.png?v=1636146981',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$2',
  },
  {
    id: '24',
    name: 'Meet me in the browser tee',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-3600-Edit_600x.jpg?v=1636599551',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Meet-me-in-the-browser-tee_25519412-0726-41e8-9c52-b1a267fe1d19_600x.png?v=1636641906',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$25',
  },
  {
    id: '25',
    name: 'Figma wordmark tee',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-3814_600x.jpg?v=1636599369',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Figma-wordmark-tee_600x.png?v=1636143026',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$18',
  },
  {
    id: '26',
    name: 'Plugins mug',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-3751-Edit_600x.jpg?v=1636599807',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/plugins-mug_600x.png?v=1636146662',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$32',
  },
  {
    id: '27',
    name: 'The Figma Store gift card',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/GiftCard-PLP_600x.png?v=1641323873',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/GiftCard-PLPHover_600x.png?v=1641324383',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$25',
  },
  {
    id: '28',
    name: 'Figma sticker pack',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/Figma-Store-1375_600x.jpg?v=1643228355',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Figma-Store-123-Cut-Out_600x.png?v=1643228318',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$1',
  },
  {
    id: '29',
    name: 'Config 2022 hat',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/IMG_9117_600x.png?v=1651177439',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/IMG_0098_600x.png?v=1651181337',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$18',
  },
  {
    id: '30',
    name: 'Config 2022 tee',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/IMG_9109-2_600x.jpg?v=1651261137',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/IMG_0053_600x.png?v=1651180906',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$20',
  },
  {
    id: '31',
    name: 'Pixel perfect dark mode tee',
    frontImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/products/IMG_9207_600x.png?v=1651177999',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/IMG_0036_600x.png?v=1651181016',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$25',
  },
  {
    id: '32',
    name: 'Cursor tote bag',
    frontImage:
      '	https://cdn.shopify.com/s/files/1/0576/8364/0503/products/FigmaStore_Tote-25_600x.jpg?v=1657055226',
    backImage:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/Hover_ToteBag_600x.png?v=1657054965',
    background:
      'https://cdn.shopify.com/s/files/1/0576/8364/0503/files/pattern-10_600x.png?v=1636143251',
    price: '$20',
  },
]

const ListProducts = () => {
  return (
    <div className='container-products'>
      {listProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ListProducts
