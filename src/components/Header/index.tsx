import Button from '../Button'

const Header = () => {
  return (
    <header className='bg-figma-yellow absolute w-full z-10'>
      <div className='flex justify-between py-5 px-20'>
        <div className=' flex gap-2 mr-20'>
          <Button text='Shop' />
          <Button text='About' />
        </div>
        <div>
          <h1 className='text-2xl'>THE FIGMA STORE</h1>
        </div>
        <div className='flex gap-2 items-center'>
          <Button text='UNITED STATES' />
          <Button text='CART 0' />
        </div>
      </div>
    </header>
  )
}

export default Header
