import Button from '../Button'

const Header = () => {
  return (
    <header className='bg-figma-yellow absolute w-full z-10'>
      <div className='justify-between py-5 px-6 sm:px-20 flex'>
        <div className='hidden sm:flex gap-2 mr-8 md:mr-20'>
          <Button text='Shop' />
          <Button text='About' />
        </div>
        <div>
          <h1 className='text-2xl'>THE FIGMA STORE</h1>
        </div>
        <div className='gap-2 items-center hidden lg:flex'>
          <Button text='UNITED STATES' />
          <Button text='CART 0' />
        </div>
      </div>
    </header>
  )
}

export default Header
