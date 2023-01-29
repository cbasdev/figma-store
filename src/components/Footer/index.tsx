const Footer = () => {
  const RandomSvg = () => (
    <svg
      className='svg-logo current'
      width='250'
      height='275'
      viewBox='0 0 250 275'
      fill='none'
    >
      <path
        d='M200.625 0H0V152.5H49.375V275H250V122.5H200.625V0Z'
        fill='#FFC700'
      ></path>
      <path
        d='M41.3099 55.2499H37.0604V35.9966H29.1172V32.3682H49.3839V35.9966H41.3099V55.2499ZM56.9233 55.2499H52.6739V32.3682H56.9233V41.6189H67.645V32.3682H71.8945V55.2499H67.645V45.28H56.9233V55.2499ZM77.8284 55.2499H94.6301V51.6215H82.0779V45.2473H91.4921V41.6516H82.0779V35.9966H94.6301V32.3682H77.8284V55.2499ZM135.731 237.43C135.731 241.352 132.822 244.49 126.611 244.49C120.76 244.49 117.59 241.418 116.642 237.757L120.662 236.22C121.283 238.639 123.081 240.96 126.677 240.96C129.88 240.96 131.319 239.587 131.319 237.724C131.319 236.089 130.175 235.043 127.396 234.553L124.487 234.063C120.433 233.376 117.786 231.48 117.786 227.394C117.786 223.701 120.891 220.628 126.383 220.628C131.874 220.628 134.587 223.635 135.47 226.414L131.515 227.95C130.894 226.087 129.455 224.158 126.252 224.158C123.375 224.158 122.133 225.564 122.133 227.198C122.133 228.767 123.245 229.65 125.369 230.042L128.344 230.565C132.691 231.284 135.731 233.474 135.731 237.43ZM149.216 244H144.967V224.747H137.024V221.118H157.29V224.747H149.216V244ZM170.146 244.49C177.37 244.49 182.044 239.554 182.044 232.592C182.044 225.662 177.305 220.628 170.146 220.628C162.955 220.628 158.248 225.662 158.248 232.592C158.248 239.554 162.922 244.49 170.146 244.49ZM170.146 240.862C165.472 240.862 162.693 237.332 162.693 232.592C162.693 227.787 165.472 224.256 170.146 224.256C174.82 224.256 177.566 227.787 177.566 232.592C177.566 237.332 174.82 240.862 170.146 240.862ZM190.751 244H186.501V221.118H197.157C201.995 221.118 204.806 223.668 204.806 227.231C204.806 231.088 201.995 232.984 199.119 233.507C202.028 233.867 203.597 235.272 204.153 238.41L205.199 244H200.622L199.838 238.77C199.413 235.991 198.073 234.978 195.131 234.978H190.751V244ZM190.751 224.747V231.415H196.406C198.661 231.415 200.361 230.369 200.361 228.081C200.361 225.793 198.661 224.747 196.406 224.747H190.751ZM209.74 244H226.542V240.372H213.99V233.997H223.404V230.402H213.99V224.747H226.542V221.118H209.74V244ZM80.7284 107.909L83.7332 110.914L90.1589 104.488L97.4167 111.746L100.005 109.157L92.7476 101.899L97.3473 97.2995L106.477 106.43L109.043 103.864L96.9082 91.729L80.7284 107.909ZM95.5132 122.694L98.518 125.699L114.698 109.519L111.693 106.514L95.5132 122.694ZM117.184 139.325C115.45 139.811 112.26 140.134 108.955 136.829C104.656 132.53 104.402 126.081 109.695 120.788C114.572 115.911 121.853 115.98 126.545 120.672C130.821 124.948 130.844 129.641 129.134 133.061L125.112 131.259C126.36 128.67 126.545 125.85 123.933 123.238C121.09 120.395 116.629 120.141 112.861 123.908C109.117 127.653 109.256 131.998 112.122 134.864C115.034 137.777 118.27 137.453 120.027 136.02L114.641 130.634L117.23 128.046L125.62 136.436L117.438 144.618L114.664 141.845L117.184 139.325ZM120.93 148.11L123.934 151.115L131.331 143.718L137.387 137.663L128.835 156.015L131.331 158.511L149.707 149.982L143.651 156.038L136.254 163.435L139.259 166.44L155.439 150.26L150.677 145.498L139.12 150.861C136.185 152.224 135.26 152.64 134.613 152.918C134.844 152.317 135.283 151.323 136.67 148.411L142.033 136.854L137.109 131.93L120.93 148.11ZM157.696 184.876L154.367 181.548L157.002 176.185L150.183 169.367L144.775 171.955L141.539 168.719L163.844 158.665L167.843 162.663L157.696 184.876ZM158.944 165.183L153.651 167.702L158.666 172.718L161.255 167.448L163.358 163.033C162.777 163.324 162.038 163.682 160.818 164.274C160.291 164.529 159.675 164.828 158.944 165.183Z'
        fill='black'
      ></path>
    </svg>
  )

  return (
    <section className=' bg-figma-purple '>
      <div className='flex justify-between max-w-screen-lg mx-auto py-16 px-20'>
        <div className='mr-20'>
          <RandomSvg />
        </div>
        <div className='flex flex-col  w-full'>
          <div className='flex justify-between '>
            <h2 className='leading-10'>
              OBJECTS <br /> THAT INSPIRE.
            </h2>
            <div className='flex flex-col w-1/3 gap-4'>
              <span>
                <a href='https://figma.com'>Privacy & Terms</a>
              </span>
              <span>
                <a href='https://figma.com'>Contact Us</a>
              </span>
            </div>
          </div>
          <div className='flex gap-4 text-2xl mt-20'>
            <span>
              <a href='https://figma.com'>FIGMA ↗</a>
            </span>
            <span>
              <a href='https://figma.com'>TWITTER</a>
            </span>
            <span>
              <a href='https://figma.com'>INSTAGRAM</a>
            </span>
            <span>
              <a href='https://figma.com'>YOUTUBE</a>
            </span>
          </div>
        </div>
      </div>
      <div className='footer-ticker h3'>
        <div className='tape'>
          <span className='word'>Figma's</span>

          <svg
            className='snippet--ticker-shape'
            width='23'
            height='18'
            viewBox='0 0 23 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.662109 17.3626V6.21266L6.23707 0.637695L15.9933 6.21266L22.962 0.637695V11.7876L15.9933 17.3626L6.23707 11.7876L0.662109 17.3626Z'
              fill='white'
            ></path>
          </svg>

          <span className='word'>marvelously</span>

          <svg
            className='snippet--ticker-shape'
            width='23'
            height='24'
            viewBox='0 0 23 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='11.687' cy='12' r='11.1499' fill='white'></circle>
          </svg>

          <span className='word'>considered</span>

          <svg
            className='snippet--ticker-shape'
            width='19'
            height='19'
            viewBox='0 0 19 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.199219 0.637695H9.25853C14.2619 0.637695 18.3179 4.69369 18.3179 9.69701C18.3179 14.7003 14.2619 18.7563 9.25853 18.7563C4.25521 18.7563 0.199219 14.7003 0.199219 9.69701V0.637695Z'
              fill='white'
            ></path>
          </svg>

          <span className='word'>collection</span>

          <svg
            className='snippet--ticker-shape'
            width='23'
            height='20'
            viewBox='0 0 23 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0.286133 0.243652H11.4361H22.586C15.6173 5.66375 15.6173 14.3359 22.586 19.756H11.4361H0.286133C7.25484 14.3359 7.25484 5.66375 0.286133 0.243652Z'
              fill='white'
            ></path>
          </svg>

          <span className='word'>of</span>

          <svg
            className='snippet--ticker-shape'
            width='23'
            height='24'
            viewBox='0 0 23 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='11.3115'
              y='0.850098'
              width='15.7684'
              height='15.7684'
              transform='rotate(45 11.3115 0.850098)'
              fill='white'
            ></rect>
          </svg>

          <span className='word'>objects</span>

          <svg
            className='snippet--ticker-shape'
            width='26'
            height='24'
            viewBox='0 0 26 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <ellipse
              cx='13.1858'
              cy='17.2961'
              rx='5.85371'
              ry='12.5437'
              transform='rotate(90 13.1858 17.2961)'
              fill='white'
            ></ellipse>
            <ellipse
              cx='13.1858'
              cy='6.70381'
              rx='5.85371'
              ry='12.5437'
              transform='rotate(90 13.1858 6.70381)'
              fill='white'
            ></ellipse>
          </svg>

          <span className='word'>for</span>

          <svg
            className='snippet--ticker-shape'
            width='20'
            height='24'
            viewBox='0 0 20 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19.818 0.850098H0.305664L3.86452 7.8188L0.305664 12L3.86452 16.1812L0.305664 23.15H19.818L16.1365 16.1812L19.818 12L16.1365 7.8188L19.818 0.850098Z'
              fill='white'
            ></path>
          </svg>

          <span className='word'>our</span>

          <svg
            className='snippet--ticker-shape'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='0.180664'
              y='0.243652'
              width='19.5124'
              height='19.5124'
              rx='5.57496'
              fill='white'
            ></rect>
          </svg>

          <span className='word'>time</span>

          <svg
            className='snippet--ticker-shape'
            width='26'
            height='18'
            viewBox='0 0 26 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.393555 17.3626V9.00014C0.393555 3.42518 3.18104 0.637695 7.36226 0.637695C12.9372 0.637697 15.7247 6.21266 19.9059 6.21266C22.6934 6.21266 24.0872 4.81892 24.0872 0.637695H25.4809V9.00014C25.4809 14.5751 22.6934 17.3626 18.5122 17.3626C12.9372 17.3626 10.1497 11.7876 5.96852 11.7876C3.45397 11.7876 1.7873 13.3207 1.7873 17.3626H0.393555Z'
              fill='white'
            ></path>
          </svg>

          <span className='word'>on</span>

          <svg
            className='snippet--ticker-shape'
            width='23'
            height='18'
            viewBox='0 0 23 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.662109 17.3626V6.21266L6.23707 0.637695L15.9933 6.21266L22.962 0.637695V11.7876L15.9933 17.3626L6.23707 11.7876L0.662109 17.3626Z'
              fill='white'
            ></path>
          </svg>
        </div>
        <div className='tape'>
          <span className='word'>Figma's</span>

          <svg
            className='snippet--ticker-shape'
            width='23'
            height='18'
            viewBox='0 0 23 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.662109 17.3626V6.21266L6.23707 0.637695L15.9933 6.21266L22.962 0.637695V11.7876L15.9933 17.3626L6.23707 11.7876L0.662109 17.3626Z'
              fill='white'
            ></path>
          </svg>

          <span className='word'>marvelously</span>

          <svg
            className='snippet--ticker-shape'
            width='23'
            height='24'
            viewBox='0 0 23 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='11.687' cy='12' r='11.1499' fill='white'></circle>
          </svg>

          <span className='word'>considered</span>

          <svg
            className='snippet--ticker-shape'
            width='19'
            height='19'
            viewBox='0 0 19 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.199219 0.637695H9.25853C14.2619 0.637695 18.3179 4.69369 18.3179 9.69701C18.3179 14.7003 14.2619 18.7563 9.25853 18.7563C4.25521 18.7563 0.199219 14.7003 0.199219 9.69701V0.637695Z'
              fill='white'
            ></path>
          </svg>

          <span className='word'>collection</span>

          <svg
            className='snippet--ticker-shape'
            width='23'
            height='20'
            viewBox='0 0 23 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0.286133 0.243652H11.4361H22.586C15.6173 5.66375 15.6173 14.3359 22.586 19.756H11.4361H0.286133C7.25484 14.3359 7.25484 5.66375 0.286133 0.243652Z'
              fill='white'
            ></path>
          </svg>

          <span className='word'>of</span>

          <svg
            className='snippet--ticker-shape'
            width='23'
            height='24'
            viewBox='0 0 23 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='11.3115'
              y='0.850098'
              width='15.7684'
              height='15.7684'
              transform='rotate(45 11.3115 0.850098)'
              fill='white'
            ></rect>
          </svg>

          <span className='word'>objects</span>

          <svg
            className='snippet--ticker-shape'
            width='26'
            height='24'
            viewBox='0 0 26 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <ellipse
              cx='13.1858'
              cy='17.2961'
              rx='5.85371'
              ry='12.5437'
              transform='rotate(90 13.1858 17.2961)'
              fill='white'
            ></ellipse>
            <ellipse
              cx='13.1858'
              cy='6.70381'
              rx='5.85371'
              ry='12.5437'
              transform='rotate(90 13.1858 6.70381)'
              fill='white'
            ></ellipse>
          </svg>

          <span className='word'>for</span>

          <svg
            className='snippet--ticker-shape'
            width='20'
            height='24'
            viewBox='0 0 20 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19.818 0.850098H0.305664L3.86452 7.8188L0.305664 12L3.86452 16.1812L0.305664 23.15H19.818L16.1365 16.1812L19.818 12L16.1365 7.8188L19.818 0.850098Z'
              fill='white'
            ></path>
          </svg>

          <span className='word'>our</span>

          <svg
            className='snippet--ticker-shape'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='0.180664'
              y='0.243652'
              width='19.5124'
              height='19.5124'
              rx='5.57496'
              fill='white'
            ></rect>
          </svg>

          <span className='word'>time</span>

          <svg
            className='snippet--ticker-shape'
            width='26'
            height='18'
            viewBox='0 0 26 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.393555 17.3626V9.00014C0.393555 3.42518 3.18104 0.637695 7.36226 0.637695C12.9372 0.637697 15.7247 6.21266 19.9059 6.21266C22.6934 6.21266 24.0872 4.81892 24.0872 0.637695H25.4809V9.00014C25.4809 14.5751 22.6934 17.3626 18.5122 17.3626C12.9372 17.3626 10.1497 11.7876 5.96852 11.7876C3.45397 11.7876 1.7873 13.3207 1.7873 17.3626H0.393555Z'
              fill='white'
            ></path>
          </svg>

          <span className='word'>on</span>

          <svg
            className='snippet--ticker-shape'
            width='23'
            height='18'
            viewBox='0 0 23 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.662109 17.3626V6.21266L6.23707 0.637695L15.9933 6.21266L22.962 0.637695V11.7876L15.9933 17.3626L6.23707 11.7876L0.662109 17.3626Z'
              fill='white'
            ></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Footer
