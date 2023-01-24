const FirstImage = () => (
  <svg
    className='svg-cutout'
    width={650}
    height={648}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <pattern id='a' patternUnits='objectBoundingBox' width={1} height={1}>
        <image
          href='//cdn.shopify.com/s/files/1/0576/8364/0503/files/AD1A3298_3e7cdfa6-9a20-4353-b270-347040c7f141_1000x.jpg?v=1636142626'
          width='100%'
          height='100%'
          className='pattern-image'
          preserveAspectRatio='xMidYMid slice'
        />
      </pattern>
    </defs>
    <path
      d='M648 4.225v639.459a1 1 0 0 1-1.517.856l-1.034 1.712 1.034-1.712-196.557-118.676a5.001 5.001 0 0 0-6.131.756L325.709 645.449a1 1 0 0 1-1.418 0L206.205 526.62a5.001 5.001 0 0 0-6.131-.756L3.517 644.54A1 1 0 0 1 2 643.684V4.224a1 1 0 0 1 1.504-.863l1.008-1.727L3.504 3.36l196.643 114.77a5 5 0 0 0 6.007-.734L324.303 2.468a1 1 0 0 1 1.394 0l118.149 114.929a5 5 0 0 0 6.007.734L646.496 3.361a1 1 0 0 1 1.504.864Z'
      fill='url(#a)'
    />
  </svg>
)

const SecondImage = () => (
  <svg
    className='svg-cutout'
    width={650}
    height={650}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <pattern id='a' patternUnits='objectBoundingBox' width={1} height={1}>
        <image
          href='//cdn.shopify.com/s/files/1/0576/8364/0503/files/AD1A0651_83a8646b-e29f-4f25-9b55-4120bdd57bf0_1000x.jpg?v=1636576238'
          width='100%'
          height='100%'
          className='pattern-image'
          preserveAspectRatio='xMidYMid slice'
        />
      </pattern>
    </defs>
    <path
      d='m647.629 324.502 1.848-.765-1.848.765-94.144-227.283a1.3 1.3 0 0 0-.704-.704L325.498 2.37a1.302 1.302 0 0 0-.996 0l-.765-1.848.765 1.848L97.219 96.515a1.3 1.3 0 0 0-.704.704L2.37 324.502a1.302 1.302 0 0 0 0 .996l94.144 227.283a1.3 1.3 0 0 0 .704.704l227.283 94.144c.319.132.677.132.996 0l227.283-94.144c.319-.132.572-.385.704-.704l94.144-227.283a1.302 1.302 0 0 0 0-.996Z'
      fill='url(#a)'
    />
  </svg>
)

export { FirstImage, SecondImage }
